<template>
  <!-- Main Content -->
  <div class="flex grow flex-col gap-16">
    <!-- Heading -->
    <div class="text-center">
      <div
        class="mx-auto mb-2 inline-flex rounded-lg bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-400"
      >
        Hello Rustaceans!
      </div>
      <h1 class="text-3xl font-black lg:text-5xl">Welcome to RustDaily</h1>
      <h2
        class="mx-auto mt-5 max-w-2xl leading-relaxed text-balance text-zinc-500 dark:text-zinc-400"
      >
        Exploring technology, design, and personal growth through my experiences
        and insights. Join me on this journey of discovery.
      </h2>
    </div>
    <!-- END Heading -->

    <!-- Posts -->
    <div class="mx-auto flex max-w-xl flex-col gap-12">
      <!-- Post -->

      <div class="group relative" v-for="(post, i) in resolvedPosts" :key="i">
        <div
          class="absolute top-0 bottom-0 -left-4 w-1 rounded-full bg-linear-to-b from-amber-500 to-amber-400 opacity-0 transition duration-200 ease-out group-hover:opacity-100 sm:-left-6"
        ></div>
        <p class="mb-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {{ new Date(post?.meta?.date ?? post?.publishedAt).toDateString() }} ·
          {{ post?.meta?.readTime ?? "5 min" }} read
        </p>
        <h4 class="mb-2 text-lg font-bold sm:text-xl">
          <nuxt-link
            :to="post?.path ?? `/posts/${post?.slug}`"
            class="leading-7 text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
          >
            {{ post.title }}
          </nuxt-link>
        </h4>
        <p
          class="mb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
          v-html="post?.meta?.summary ?? post?.excerpt"
        ></p>
        <nuxt-link
          :to="post?.path ?? `/posts/${post?.slug}`"
          class="text-sm font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300"
          >Read more</nuxt-link
        >
      </div>
    </div>
    <!-- END Posts -->
  </div>
  <!-- END Main Content -->
</template>

<script setup>
const { getRustPosts } = await usePosts("/posts");
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("posts").all()
);

const allPosts = await getRustPosts("rust");

const resolvedPosts = computed(() => {
  return [...allPosts].concat(
    posts.value.map((p) => ({
      ...p,
      publishedAt: p?.meta?.date,
      excerpt: p?.meta?.summary ?? p?.description,
      slug: p?.path,
    }))
  );
});
</script>

<style>
</style>