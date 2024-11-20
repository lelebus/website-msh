// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxthq/studio",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/image"
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  site: {
    url: 'https://www.monacosporthotel.com',
    defaultLocale: 'it',
    title: 'Monaco Sport Hotel',
  },

  ogImage: {
    enabled: false
  },

  app: {
    head: {
      meta: [
        // Open Graph
        { property: 'og:title', content: 'Monaco Sport Hotel' },
        { property: 'og:image', content: 'https://www.monacosporthotel.com/screenshot.png' },
        { property: 'og:url', content: 'https://www.monacosporthotel.com/' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Monaco Sport Hotel' },
        { property: 'twitter:domain', content: 'monacosporthotel.com' },
        { property: 'twitter:url', content: 'monacosporthotel.com' },
        { name: 'twitter:image', content: 'https://www.monacosporthotel.com/screenshot.png' }
      ]
    }
  },

  i18n: {
    baseUrl: 'https://www.monacosporthotel.com',
    defaultLocale: 'it',
    locales: [
      {
        code: 'it', 
        iso: 'it',
        name: 'Italiano',
        file: 'it.json',
      },
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
        file: 'de.json',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es',
        name: 'Español',
        file: 'es.json',
      },
      {
        code: 'fr',
        iso: 'fr',
        name: 'Français',
        file: 'fr.json',
      },
      {
        code: 'ru', 
        iso: 'ru',
        name: 'Русский',
        file: 'ru.json',
      }
    ],
    lazy: false,
    langDir: 'locales/',
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },  
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  
  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true
  },

  content: {
    markdown: {
      anchorLinks: false,
    }
  },

  gtag: {
    enabled: false,
  },

  cookieControl: {
    locales: ['de', 'en', 'it'],

    cookies: {
      necessary: [],
      optional: [
        {
          id: 'google-analytics',
          name: 'google-analytics',
          targetCookieIds: ['_ga', '_ga_', '_gcl_au'],
        },
      ],
    },

    localeTexts: {
      de: {
        manageCookies: "Anpassen"
      },
      en: {
        manageCookies: "Manage"
      },
      it: {
        manageCookies: "Gestisci"
      }
    }
  }
})