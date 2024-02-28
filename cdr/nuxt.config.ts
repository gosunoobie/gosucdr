export default defineNuxtConfig({
  devServer: {
    port: 5173,
  },
  generate: {
    async routes() {
      const posts = await useFetch("https://tripturbo.com/cs/api/blog/"); // Replace with your actual data fetching logic
      return posts.map((post: any) => `/blog/${post.slug}`);
    },
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
