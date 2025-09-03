// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],
  i18n: {
    customRoutes: 'config',
    defaultLocale: 'en_us',
    locales: [
      { code: 'en_us', name: 'English', file: 'en_us.json' },
      { code: 'ja_jp', name: '日本語', file: 'ja_jp.json' }
    ],
    pages: {
      'lang-top-publisher': {
        en_us: '/top/publisher',
        ja_jp: '/top/publisher',
      }
    }
  }
})