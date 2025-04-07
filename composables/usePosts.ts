export async function usePosts(url: string = "/posts") {
  const config = useRuntimeConfig();

  async function init(url: string = "/posts", data: any) {
    try {
      console.log(url, {
        ...data,
        baseURL: config.public.BASE_ENDPOINT_URL,
        query: {
          ...data?.query,
        },
        method: "get",
        headers: {
          Authorization: `bearer ${config.public.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
          ...data?.headers,
        },
      });
      return await useFetch(url, {
        ...data,
        baseURL: config.public.BASE_ENDPOINT_URL,
        query: {
          ...data?.query,
        },
        method: "get",
        headers: {
          Authorization: `bearer ${config.public.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
          ...data?.headers,
        },
      });
    } catch (err) {
      console.log(err, "dada");
    }
  }

  async function getRustPosts(
    slug: string,
    data: any = { page: 0, count: 100, populate: "" }
  ) {
    const res: any = await init(
      `/posts?filters[is_public][$eq]=true&filters[categories][slug][$eq]=${slug}`, //&pagination[page]=${data.page}&pagination[pageSize]=${data.count}&populate=${data.populate}`,
      data
    );
    const posts = res?.data.value?.data;

    console.log(posts);

    if (!posts?.length) return;

    return resolveProjects(posts);
  }

  const resolveProjects = (projects: any) => {
    return projects?.map((project: any) => {
      return {
        id: project.id,
        ...project.attributes,
      };
    });
  };

  const filterByTags = (projects: any, tag: string) => {
    return projects.filter((project: any) =>
      project.tags.map((t: any) => t.toLowerCase()).includes(tag.toLowerCase())
    );
  };

  return {
    getRustPosts,
  };
}
