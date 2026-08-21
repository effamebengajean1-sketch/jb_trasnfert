export default defineNuxtConfig({
  compatibilityDate: '2026-08-03',

  devtools: {
    enabled: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vite-pwa/nuxt',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
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

      htmlAttrs: {
        lang: 'fr',
      },

      meta: [
        {
          name: 'theme-color',
          content: '#003877',
        },
        {
          name: 'description',
          content: 'Partagez vos photos en qualité originale',
        },
      ],

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png',
        },
        // Le lien vers le manifeste est maintenant géré automatiquement
        // par le module @vite-pwa/nuxt.
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        'http://localhost:3001',
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
    registerType: 'autoUpdate',

    injectRegister: 'auto',

    manifestFilename: 'manifest.webmanifest',

    manifest: {
      id: '/',
      name: 'JB Transfert',
      short_name: 'JB Transfert',
      description: 'Partagez vos photos en qualité originale',
      lang: 'fr',
      theme_color: '#003877',
      background_color: '#f9f9ff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',

      icons: [
        {
          src: '/manifest-icon-192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/manifest-icon-192.maskable.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: '/manifest-icon-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/manifest-icon-512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },

    workbox: {
      /*
       * Important :
       * null désactive réellement le fallback.
       * Ne pas utiliser undefined, '/', ou '/index.html'.
       *
       * Nuxt est rendu par Nitro/Vercel et ne possède pas forcément
       * de fichier /index.html statique.
       */
      navigateFallback: null,

      cleanupOutdatedCaches: true,

      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,

      // On ne tente pas de précacher une page HTML inexistante.
      globPatterns: [
        '**/*.{js,css,png,svg,ico,webmanifest,woff,woff2}',
      ],

      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        {
          urlPattern: /^https:\/\/api\.iconify\.design\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'iconify-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
      ],
    },

    // Désactivé en développement pour éviter les anciens SW sur localhost.
    // La PWA reste bien générée en production sur Vercel.
    devOptions: {
      enabled: false,
    },
  },

  i18n: {
    locales: [
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.json',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
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
