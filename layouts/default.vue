<template>
  <div
    class="relative min-h-dvh min-w-80 bg-zinc-100 text-zinc-800 dark:bg-zinc-950 dark:text-zinc-100"
  >
    <div
      class="absolute inset-x-0 -top-px h-[600px] bg-zinc-50 bg-[image:repeating-linear-gradient(135deg,_currentColor_0,_currentColor_1px,_transparent_0,_transparent_50%)] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-[size:10px_10px] text-zinc-400/10 dark:bg-zinc-950 dark:text-zinc-100/10"
      aria-hidden="true"
    ></div>

    <!-- Page Content -->
    <main
      id="page-content"
      class="relative mx-auto flex min-h-dvh max-w-7xl flex-auto flex-col border-x border-zinc-200 bg-white p-6 ring-4 ring-zinc-200/25 lg:px-40 lg:py-8 dark:border-zinc-800 dark:bg-zinc-900 dark:ring-zinc-900"
    >
      <!-- Toggle Dark Mode -->
      <div class="absolute top-2 right-2">
        <button
          @click.prevent="toggleDarkMode()"
          type="button"
          class="relative inline-flex size-9 items-center justify-center text-zinc-600 hover:opacity-50 dark:text-zinc-300"
        >
          <div
            cloak
            v-if="!darkMode"
            transition:enter="transition ease-out duration-150"
            transition:enter-start="opacity-0 rotate-180"
            transition:enter-end="opacity-100 rotate-0"
            transition:leave="transition ease-in duration-100"
            transition:leave-start="opacity-100 rotate-0"
            transition:leave-end="opacity-0 rotate-180"
            class="absolute inset-0 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hi-outline hi-sun inline-block size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </div>

          <div
            cloak
            v-if="darkMode"
            transition:enter="transition ease-out duration-150"
            transition:enter-start="opacity-0 rotate-180"
            transition:enter-end="opacity-100 rotate-0"
            transition:leave="transition ease-in duration-100"
            transition:leave-start="opacity-100 rotate-0"
            transition:leave-end="opacity-0 rotate-180"
            class="absolute inset-0 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="hi-outline hi-moon inline-block size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
        </button>
      </div>
      <!-- END Toggle Dark Mode -->

      <!-- Main Header -->
      <header id="page-header" class="flex flex-none flex-col gap-6">
        <div class="flex items-center justify-center gap-2">
          <!-- Photo -->
          <nuxt-link
            to="/"
            class="flex size-22 items-center justify-center rounded-full bg-radial from-orange-200 to-amber-300 hover:opacity-75 active:opacity-100"
          >
            <img
              src="~/assets/RustDailyLogo.png"
              alt="RustDaily"
              class="aspect-square size-20 rounded-full object-cover"
            />
            <span class="sr-only">RustDaily</span>
          </nuxt-link>
          <!-- END Photo -->
        </div>
        <div
          class="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-100 px-6 py-2.5 dark:border-zinc-800"
        >
          <!-- Nav -->
          <nav class="flex items-center gap-6">
            <nuxt-link
              to="/"
              class="group relative text-sm font-semibold text-black"
              :class="{
                'dark:text-white': $route.name.includes('index'),
                'dark:text-zinc-400': !$route.name.includes('index'),
              }"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              to="/courses"
              class="group relative text-sm font-semibold text-zinc-600 hover:text-black dark:hover:text-white"
              :class="{
                'dark:text-white': $route.name.includes('courses'),
                'dark:text-zinc-400': !$route.name.includes('courses'),
              }"
            >
              Courses
            </nuxt-link>

            <!-- 
            
            Project Ideas => Fetch Rust project ideas
            Project Examples => List awesome Rust projects and ask users to submit for $10
            Learning Roadmap => Create a learning roadmap for Rust and all its web frameworks
            People to Follow => List top Rust engineers to follow
            Code Exampls => show Rust code examples (Tips)

            Premium Tutorials => Convert your Intermedate and Advanced books to premium tutorials

            -->
          </nav>
          <!-- END Nav -->
        </div>
      </header>
      <!-- END Main Header -->

      <!-- Separator -->
      <div
        class="relative mx-auto my-8 h-[0.875rem] w-full flex-none px-4 sm:my-12 lg:px-8"
      >
        <div
          class="absolute right-0 bottom-0 left-0 h-1.5 bg-linear-to-r from-amber-100 via-orange-200 to-amber-100 dark:from-amber-800/50 dark:via-orange-700/50 dark:to-amber-800/50"
        ></div>
        <div
          class="absolute right-0 bottom-0 left-0 z-1 h-1.5 bg-linear-to-t from-white dark:from-zinc-900"
        ></div>
        <div
          class="absolute bottom-0 left-0 z-2 h-1.5 w-60 bg-linear-to-r from-white dark:from-zinc-900"
        ></div>
        <div
          class="absolute right-0 bottom-0 z-2 h-1.5 w-60 bg-linear-to-l from-white dark:from-zinc-900"
        ></div>
      </div>
      <!-- END Separator -->
      <slot />

      <!-- Footer -->
      <footer
        class="flex flex-none flex-col gap-6 pt-20 text-center text-sm md:col-span-12 md:flex-row-reverse md:justify-between md:gap-0 md:text-left"
      >
        <nav class="flex items-center justify-center gap-4">
          <a
            href="https://twitter.com/kaperskyguru"
            target="_blank"
            class="text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
          >
            <svg
              class="bi bi-twitter-x inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path
                d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
              />
            </svg>
          </a>
          <!-- <a
            href="javascript:void(0)"
            class="text-zinc-400 hover:text-[#1877f2]"
          >
            <svg
              class="icon-facebook inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"
              ></path>
            </svg>
          </a> -->
          <!-- <a
            href="javascript:void(0)"
            class="text-zinc-400 hover:text-[#405de6]"
          >
            <svg
              class="icon-instagram inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              ></path>
            </svg>
          </a> -->
          <a
            href="https://github.com/kaperskyguru"
            target="_blank"
            class="text-zinc-400 hover:text-[#333] dark:hover:text-zinc-50"
          >
            <svg
              class="icon-github inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
          </a>
          <!-- <a
            href="javascript:void(0)"
            class="text-zinc-400 hover:text-[#ea4c89]"
          >
            <svg
              class="icon-dribbble inline-block size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z"
              ></path>
            </svg>
          </a> -->
        </nav>
        <div class="text-zinc-500 dark:text-zinc-400/80">
          <span class="font-medium">RustDaily</span> ©
          {{ new Date().getFullYear() }}
          <span x-text="new Date().getFullYear()"></span>
        </div>
      </footer>
      <!-- END Footer -->
    </main>
    <!-- END Page Content -->
  </div>
</template>

<script setup>
const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;

  if (darkMode.value) {
    document.body.parentNode.classList.add("dark");
  } else {
    document.body.parentNode.classList.remove("dark");
  }
}
</script>

<style>
</style>