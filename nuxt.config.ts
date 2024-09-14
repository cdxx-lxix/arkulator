// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "@samk-dev/nuxt-vcalendar",
    '@nuxtjs/i18n',
    'nuxt-viewport',
  ],
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
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 828, // 768 default
      lg: 1092, // 1024 default
      xl: 1280,
      '2xl': 1654, // 1536 default
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],
})