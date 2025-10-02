// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image', 
    "pruvious"],
  // Configureer PostCSS om de Tailwind plugin te gebruiken
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
  pruvious: {
    jwt: {
      secretKey: "kjqgEWv7AdDvd1nECOZ2MFZAmN6uXWnDWcuH2L3Z9Qwphi7r4AbQgyRZTMpc8Z1h"
    }
  }
})