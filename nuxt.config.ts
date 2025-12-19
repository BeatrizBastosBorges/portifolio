// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/i18n',
  ],

  css: ['~/assets/css/main.css'],

  content: {
    markdown: {
      anchorLinks: false,
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'pt-br',
    locales: [
      { code: 'pt-br', iso: 'pt-BR', file: 'pt.json', name: 'Português' },
      { code: 'en-us', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    strategy: 'prefix_except_default',
  }
})