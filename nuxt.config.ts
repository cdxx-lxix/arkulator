// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "@samk-dev/nuxt-vcalendar", '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        files: ['en.js']
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en'
  }
})