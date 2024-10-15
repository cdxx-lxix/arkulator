// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "@samk-dev/nuxt-vcalendar",
    '@nuxtjs/i18n',
    'nuxt-viewport',
    '@nuxtjs/seo'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        files: ['en.js']
      },
      {
        code: 'ja',
        name: '日语',
        files: ['ja.js']
      },
      {
        code: 'zh',
        name: '中文',
        files: ['zh.js']
      },
      {
        code: 'ko',
        name: '朝鲜语',
        files: ['ko.js']
      }
    ],
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en'
  },
  site: { 
    // SEO (Lang setting inferred from i18n integration, no need to setup)
    // https://nuxtseo.com/site-config/integrations/i18n
    
    url: 'https://arkulator.ojisan.cc',
    name: 'Arkulator',
    description: 'A tool to calculate your resources for pulling up to a certain date and manage your gacha budget in Arknights'
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