import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  
  // Static Generation Configuration
  generate: {
    routes: ['/', '/contact', '/project'],
      },
  
  // SSR for static generation
  ssr: true,
  
  // Nitro configuration for Netlify
  nitro: {
    preset: 'netlify',
    prerender: {
      crawlLinks: true, // Automatically discovers links
      failOnError: false // Continue build even if some pages fail
    }
  },
  
  // Development tools
  devtools: { enabled: true },
  
  // CSS configuration
  css: ['~/assets/css/main.css'],
  
  // PostCSS/Tailwind configuration
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Vite configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  // Route rules for better static handling
  routeRules: {
    '/': { prerender: true },
    '/contact': { prerender: true },
    '/project': { prerender: true }
  }
});