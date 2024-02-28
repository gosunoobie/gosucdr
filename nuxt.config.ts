export default defineNuxtConfig({
  devServer: {
    port: 5173,
  },
  generate: {
    routes: ["/blog/**"],
  },
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
