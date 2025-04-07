// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        // class: "dark",
      },
      title: "Rust Daily",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:title",
          content: "Rust Daily",
        },

        {
          property: "og:url",
          content: `https://rustdaily.com`,
        },

        {
          property: "og:image",
          content: `/RustDailyLogo.png`,
        },
        {
          property: "og:image:width",
          content: "100",
        },
        {
          property: "og:image:height",
          content: "100",
        },
        {
          property: "og:type",
          content: "website",
        },

        {
          property: "twitter:creator",
          content: "@kaperskyguru",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],

      script: [
        {
          src: "https://unpkg.com/@tailwindcss/browser@4",
        },
      ],
    },
  },

  ssr: true,

  modules: ["@nuxt/content"],

  runtimeConfig: {
    public: {
      STRAPI_TOKEN: process.env.STRAPI_TOKEN,
      BASE_ENDPOINT_URL: process.env.BASE_ENDPOINT_URL,
    },
  },
});
