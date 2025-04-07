<template>
  <!-- Main Content -->
  <div class="flex grow flex-col gap-16">
    <!-- Heading -->
    <div class="text-center">
      <div
        class="mx-auto mb-2 inline-flex rounded-lg bg-zinc-100 px-2.5 py-1 text-sm font-medium text-zinc-500 dark:bg-zinc-800/50 dark:text-zinc-400"
      >
        Available Rust Courses & Books
      </div>
      <h1 class="text-3xl font-black lg:text-5xl">Featured courses & Books</h1>
      <h2
        class="mx-auto mt-5 max-w-2xl leading-relaxed text-balance text-zinc-500 dark:text-zinc-400"
      >
        A collection of my best rust courses and books. Each course or book
        follows a unique practical-based learning.
      </h2>
    </div>
    <!-- END Heading -->

    <!-- Projects -->
    <div class="mx-auto flex max-w-xl flex-col gap-12">
      <!-- Project 1 -->
      <a
        href="https://masteringbackend.com/courses/become-a-rust-backend-engineer?ref=rustdaily"
        class="group flex flex-col rounded-3xl border border-zinc-200 hover:border-amber-500 hover:ring-4 hover:ring-amber-500/20 active:border-amber-600 dark:border-zinc-800 dark:hover:border-amber-600/50 dark:active:border-amber-600/75"
      >
        <div class="flex flex-col p-6">
          <div class="flex items-center gap-2">
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Video
            </div>
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Paid
            </div>
          </div>
          <h3 class="mt-3 text-lg font-bold">Become A Rust Backend Engineer</h3>
          <p class="mt-1 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
            All-in-one Rust course for learning backend engineering with Rust.
            This comprehensive course is designed for Rust developers seeking
            proficiency in Rust.
          </p>
        </div>
      </a>
      <!-- END Project 1 -->

      <!-- Project 2 -->
      <a
        href="https://app.masteringbackend.com/courses/rust-essential?ref=rustdaily"
        target="_blank"
        class="group flex flex-col rounded-3xl border border-zinc-200 hover:border-amber-500 hover:ring-4 hover:ring-amber-500/20 active:border-amber-600 dark:border-zinc-800 dark:hover:border-amber-600/50 dark:active:border-amber-600/75"
      >
        <div class="flex flex-col p-6">
          <div class="flex items-center gap-2">
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Video
            </div>
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Paid
            </div>
          </div>
          <h3 class="mt-3 text-lg font-bold">Rust Essentials</h3>
          <p class="mt-1 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
            This is a summarized module about Rust syntax and concepts such as
            variables, data types, functions, Control flow in Rust like if-else,
            Struct, Enum, pattern...
          </p>
        </div>
      </a>
      <!-- END Project 2 -->

      <!-- Project 3 -->
      <a
        href="https://masteringbackend.com/books/rust-essentials?ref=rustdaily"
        target="_blank"
        class="group flex flex-col rounded-3xl border border-zinc-200 hover:border-amber-500 hover:ring-4 hover:ring-amber-500/20 active:border-amber-600 dark:border-zinc-800 dark:hover:border-amber-600/50 dark:active:border-amber-600/75"
      >
        <div class="flex flex-col p-6">
          <div class="flex items-center gap-2">
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Book
            </div>
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Free
            </div>
          </div>
          <h3 class="mt-3 text-lg font-bold">
            Rust Essentials for Backend Engineers
          </h3>
          <p class="mt-1 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
            This is the most comprehensive guide to the Rust Programming
            Language online. I’ll programmatically introduce you to Rust
            Programming Language in this Rust essential.
          </p>
          <div class="mt-2 text-xs font-medium text-zinc-400">2024</div>
        </div>
      </a>
      <!-- END Project 3 -->

      <!-- Project 4 -->
      <a
        href="https://masteringbackend.com/books/intermediate-rust?ref=rustdaily"
        target="_blank"
        class="group flex flex-col rounded-3xl border border-zinc-200 hover:border-amber-500 hover:ring-4 hover:ring-amber-500/20 active:border-amber-600 dark:border-zinc-800 dark:hover:border-amber-600/50 dark:active:border-amber-600/75"
      >
        <div class="flex flex-col p-6">
          <div class="flex items-center gap-2">
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Book
            </div>
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Paid
            </div>
          </div>
          <h3 class="mt-3 text-lg font-bold">Intermediate Rust</h3>
          <p class="mt-1 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
            This book is designed to transform you into a true Rust expert,
            equipping you with the skills and knowledge to tackle intricate
            challenges and craft high-quality, performant code.
          </p>
        </div>
      </a>
      <!-- END Project 4 -->

      <!-- Project 5 -->
      <a
        href="https://masteringbackend.com/books/advanced-rust"
        target="_blank"
        class="group flex flex-col rounded-3xl border border-zinc-200 hover:border-amber-500 hover:ring-4 hover:ring-amber-500/20 active:border-amber-600 dark:border-zinc-800 dark:hover:border-amber-600/50 dark:active:border-amber-600/75"
      >
        <div class="flex flex-col p-6">
          <div class="flex items-center gap-2">
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Book
            </div>
            <div
              class="rounded-md bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
            >
              Paid
            </div>
          </div>
          <h3 class="mt-3 text-lg font-bold">Advanced Rust</h3>
          <p class="mt-1 text-sm/relaxed text-zinc-500 dark:text-zinc-400">
            This book is designed to transform you into a true Rust expert,
            equipping you with the skills and knowledge to tackle intricate
            challenges and craft high-quality, performant code.
          </p>
        </div>
      </a>
      <!-- END Project 5 -->
    </div>
    <!-- END Projects -->
  </div>
  <!-- END Main Content -->
</template>

<script>
export default {};
</script>

<style>
</style>