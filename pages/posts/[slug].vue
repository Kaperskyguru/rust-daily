<template>
  <!-- Main Content -->
  <div class="flex grow flex-col gap-16">
    <!-- Heading -->
    <div class="text-center">
      <div
        class="mx-auto mb-2 inline-flex rounded-lg bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-400"
      >
        {{ new Date(post?.meta?.date ?? post?.publishedAt).toDateString() }} ({{
          post?.meta?.readTime ?? "5 min"
        }}
        read)
      </div>
      <h1 class="text-3xl font-black lg:text-5xl">
        {{ post.title }}
      </h1>
      <h2
        v-html="post?.meta?.summary ?? post?.excerpt"
        class="mx-auto mt-5 max-w-2xl leading-relaxed text-balance text-zinc-500 dark:text-zinc-400"
      ></h2>
    </div>
    <!-- END Heading -->
    <article
      v-if="post && post?.content"
      v-html="post?.content"
      class="[&>*>table]:p-3 [&>*>table]:border [&>*>code]:rounded-xl [&>*>code]:bg-zinc-800 [&>*>code]:p-1 [&>*>code]:text-sm [&>*>code]:font-medium [&>*>code]:text-zinc-100 [&>*>code]:overflow-x-auto w-full [&>*>li>pre]:mt-5 [&>*>li>pre]:rounded-xl [&>*>li>pre]:bg-zinc-800 [&>*>li>pre]:p-4 [&>*>li>pre]:text-sm [&>*>li>pre]:font-medium [&>*>li>pre]:text-zinc-100 [&>*>li>pre]:overflow-x-auto [&>*>li>a]:text-amber-300 [&>p>a]:text-amber-300 mx-auto w-full max-w-2xl text-zinc-700 dark:text-zinc-300 [&>pre]:overflow-x-auto [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:mt-12 [&>h3]:text-xl [&>h3]:font-bold [&>p]:mt-5 [&>p]:leading-relaxed [&>pre]:mt-5 [&>pre]:rounded-xl [&>pre]:bg-zinc-800 [&>pre]:p-4 [&>pre]:text-sm [&>pre]:font-medium [&>pre]:text-zinc-100 [&>ul]:mt-5 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-6 [&>ol]:mt-5 [&>ol]:flex [&>ol]:list-decimal [&>ol]:flex-col [&>ol]:gap-2 [&>ol]:pl-6"
    ></article>
    <ContentRenderer
      v-else
      :value="post"
      tag="article"
      class="[&>*>table]:p-3 [&>*>table]:border [&>*>code]:rounded-xl [&>*>code]:bg-zinc-800 [&>*>code]:p-1 [&>*>code]:text-sm [&>*>code]:font-medium [&>*>code]:text-zinc-100 [&>*>code]:overflow-x-auto w-full [&>*>li>pre]:mt-5 [&>*>li>pre]:rounded-xl [&>*>li>pre]:bg-zinc-800 [&>*>li>pre]:p-4 [&>*>li>pre]:text-sm [&>*>li>pre]:font-medium [&>*>li>pre]:text-zinc-100 [&>*>li>pre]:overflow-x-auto [&>*>li>a]:text-amber-300 [&>p>a]:text-amber-300 mx-auto w-full max-w-2xl text-zinc-700 dark:text-zinc-300 [&>pre]:overflow-x-auto [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:mt-12 [&>h3]:text-xl [&>h3]:font-bold [&>p]:mt-5 [&>p]:leading-relaxed [&>pre]:mt-5 [&>pre]:rounded-xl [&>pre]:bg-zinc-800 [&>pre]:p-4 [&>pre]:text-sm [&>pre]:font-medium [&>pre]:text-zinc-100 [&>ul]:mt-5 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-6 [&>ol]:mt-5 [&>ol]:flex [&>ol]:list-decimal [&>ol]:flex-col [&>ol]:gap-2 [&>ol]:pl-6"
    />

    <article
      v-if="post && post?.type === 'definitive'"
      class="[&>*>li>pre]:mt-5 [&>*>li>pre]:rounded-xl [&>*>li>pre]:bg-zinc-800 [&>*>li>pre]:p-4 [&>*>li>pre]:text-sm [&>*>li>pre]:font-medium [&>*>li>pre]:text-zinc-100 [&>*>li>pre]:overflow-x-auto [&>*>li>a]:text-amber-300 [&>p>a]:text-amber-300 mx-auto w-full max-w-2xl text-zinc-700 dark:text-zinc-300 [&>pre]:overflow-x-auto [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:mt-12 [&>h3]:text-xl [&>h3]:font-bold [&>p]:mt-5 [&>p]:leading-relaxed [&>pre]:mt-5 [&>pre]:rounded-xl [&>pre]:bg-zinc-800 [&>pre]:p-4 [&>pre]:text-sm [&>pre]:font-medium [&>pre]:text-zinc-100 [&>ul]:mt-5 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-6 [&>ol]:mt-5 [&>ol]:flex [&>ol]:list-decimal [&>ol]:flex-col [&>ol]:gap-2 [&>ol]:pl-6"
    >
      <p>
        Read full article:
        <a
          target="_blank"
          :href="`https://masteringbackend.com/posts/${post.slug}`"
        >
          {{ "https://masteringbackend.com/posts/" + post.slug }}</a
        >
      </p>
    </article>
    <!-- Author -->
    <div
      class="mx-auto mt-10 w-full max-w-2xl rounded-3xl bg-amber-500/40 p-2 dark:bg-amber-500/10"
    >
      <div
        class="space-y-4 rounded-2xl bg-white p-6 shadow-sm dark:bg-zinc-900"
      >
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
          <!-- Photo -->
          <img
            src="https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/become%20a%20rust%20engineer.png"
            alt="Rust"
            class="mx-auto block aspect-square w-48 flex-none rounded-lg object-contain"
          />
          <!-- END Photo -->

          <div class="flex flex-col gap-1.5">
            <a
              href="https://masteringbackend.com/courses/become-a-rust-backend-engineer?ref=rustdaily"
              target="_blank"
            >
              <span class="text-zinc-700 dark:text-zinc-300">Become A</span>
              <span
                class="font-semibold text-black hover:text-zinc-600 dark:text-white dark:hover:text-zinc-400"
              >
                Rust Backend </span
              ><span class="text-zinc-700 dark:text-zinc-300">Engineer</span>
            </a>
            <p
              class="text-sm/relaxed font-medium text-zinc-500 dark:text-zinc-400/80"
            >
              All-in-one Rust course for learning backend engineering with Rust.
              This comprehensive course is designed for Rust developers seeking
              proficiency in Rust.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- END Author -->
  </div>
  <!-- END Main Content -->
</template>

<script setup>
const route = useRoute();
const { getPost } = await usePosts("/posts");
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("posts").path(route.path).first();
});
let mbPost = undefined;
if (page) mbPost = await getPost(route.params.slug);

const post = computed(() => (mbPost ? mbPost : page.value));

useSeoMeta({
  title: post.value?.title,
  description: post.value?.meta?.summary ?? post.value?.description,
});

useHead({
  link: [
    {
      rel: "canonical",
      href:
        post.value?.canonical_url ?? "https://rustdaily.com" + useRoute().path,
    },
  ],
});
</script>

<style>
article {
  @apply mx-auto w-full max-w-2xl text-zinc-700 dark:text-zinc-300 [&>h2]:mt-14 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:mt-12 [&>h3]:text-xl [&>h3]:font-bold [&>p]:mt-5 [&>p]:leading-relaxed [&>pre]:mt-5 [&>pre]:rounded-xl [&>pre]:bg-zinc-800 [&>pre]:p-4 [&>pre]:text-sm [&>pre]:font-medium [&>pre]:text-zinc-100 [&>ul]:mt-5 [&>ul]:flex [&>ul]:list-disc [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-6;
}

pre {
  @apply overflow-x-auto;
}

article hr {
  margin-block: 1rem;
}
</style>