// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  
  // CSS
  css: ['~/assets/css/main.css'],
  
  // TypeScript
  typescript: {
    typeCheck: false,
    strict: false,
  },
  
  // App configuration
  app: {
    head: {
      title: 'Packaging Automation Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional packaging automation solutions for medical devices, pharmaceuticals, glove manufacturing, and FMCG industries.' },
        { name: 'keywords', content: 'packaging automation, medical devices, pharmaceuticals, glove manufacturing, FMCG, Malaysia' },
        { name: 'author', content: 'Packaging Automation Solutions' },
        { property: 'og:title', content: 'Packaging Automation Solutions' },
        { property: 'og:description', content: 'Professional packaging automation solutions for medical devices, pharmaceuticals, glove manufacturing, and FMCG industries.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  
  // i18n configuration
  i18n: {
    locales: [
      { code: 'en', name: 'English', files: ['en.json'] },
      { code: 'ms', name: 'Bahasa Melayu', files: ['ms.json'] },
      { code: 'zh', name: '中文', files: ['zh.json'] },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'i18n/',
    restructureDir: false,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  
  // Supabase configuration
  supabase: {
    redirect: false,
  },
  
  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      tawkToPropertyId: process.env.NUXT_PUBLIC_TAWK_TO_PROPERTY_ID,
    },
  },
  
  // Nitro configuration
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  
  // Build configuration
  build: {
    transpile: ['@heroicons/vue'],
  },

  // Components auto-import configuration
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
      },
    ],
  },
})