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

  runtimeConfig: {
    public: {
      demoBookingPageLink: process.env.DEMO_BOOKING_PAGE,
      hubspot: {
        portalId: process.env.HUBSPOT_PORTAL_ID,
        formId: {
          de: process.env.HUBSPOT_FORM_ID_DE,
          en: process.env.HUBSPOT_FORM_ID_EN,
          it: process.env.HUBSPOT_FORM_ID_IT,
        }
      }
    }
  },

  site: {
    url: 'https://www.vinoteqa.com',
    defaultLocale: 'en',
    title: 'Vinoteqa',
  },

  ogImage: {
    enabled: false
  },

  app: {
    head: {
      meta: [
        // Open Graph
        { property: 'og:title', content: 'Vinoteqa' },
        { property: 'og:image', content: 'https://www.vinoteqa.com/screenshot.png' },
        { property: 'og:url', content: 'https://www.vinoteqa.com/' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Vinoteqa' },
        { property: 'twitter:domain', content: 'vinoteqa.com' },
        { property: 'twitter:url', content: 'vinoteqa.com' },
        { name: 'twitter:image', content: 'https://www.vinoteqa.com/screenshot.png' }
      ]
    }
  },

  i18n: {
    baseUrl: 'https://www.vinoteqa.com',
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'de',
      iso: 'de',
      name: 'Deutsch',
      file: 'de.json',
    },
    {
      code: 'it', 
      iso: 'it',
      name: 'Italiano',
      file: 'it.json',
    }],
    strategy: 'prefix',
    lazy: false,
    langDir: 'locales/',
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