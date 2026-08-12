export default defineNuxtConfig({
  compatibilityDate: '2026-08-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
  ],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  icon: {
    serverBundle: {
      collections: ['material-symbols'],
    },
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/theme.css',
  ],

  app: {
    head: {
      title: 'JB Transfert',
      htmlAttrs: { lang: 'fr' },
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001',
    },
  },

  nitro: {
    devProxy: {
      '/uploads': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },

  pwa: {
    manifest: {
      name: 'JB Transfert',
      short_name: 'JB Transfert',
      description: 'Partagez vos photos en qualité originale',
      theme_color: '#003877',
      background_color: '#f9f9ff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
        {
          urlPattern: /^https:\/\/api\.iconify\.design\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'iconify-cache',
            expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          },
        },
      ],
    },
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18n: {
      fallbackLocale: 'fr',
    },
  },
})