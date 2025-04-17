import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
    // Make sure SSR is enabled for proper static generation
  ssr: true,
    // Set nitro configuration for better static site output
    nitro: {
      preset: 'netlify'
    },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});