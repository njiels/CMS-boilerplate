// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui', "pruvious"],
  // postcss: {
  //   plugins: {
  //     '@tailwindcss/postcss': {},
  //     'autoprefixer': {},
  //   }
  // },
  tailwindcss: {
    // Options
  },
  pruvious: {
    jwt: {
      secretKey: "kjqgEWv7AdDvd1nECOZ2MFZAmN6uXWnDWcuH2L3Z9Qwphi7r4AbQgyRZTMpc8Z1h"
    }
  }
})