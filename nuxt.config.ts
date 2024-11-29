import { defineOrganization } from 'nuxt-schema-org/schema'

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
    "@nuxt/image",
    'nuxt-schema-org'
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

  schemaOrg: {
    identity: defineOrganization({
      // Basic Information
      name: 'Monaco Sport Hotel',
      alternateName: 'MSH',
      description: 'Il Monaco Sport Hotel è immerso nelle Dolomiti Bellunesi a un passo dalla Val Pusteria: relax e avventura tra natura incontaminata, cucina tipica e centro benessere. Perfetto per vacanze tra sci, trekking e paesaggi mozzafiato.',
      url: 'https://www.monacosporthotel.com',
      logo: '/logo.svg',

      // Address Information, if applicable
      address: {
        '@type': 'PostalAddress',
        'streetAddress': 'Via Lungopiave 60',
        'addressLocality': 'Santo Stefano di Cadore',
        'addressRegion': 'BL',
        'postalCode': '32045',
        'addressCountry': 'IT'
      },

      // Contact Information, if applicable
      email: 'info@monacosporthotel.com',
      telephone: '+39 0435 420440',
      contactPoint: {
        '@type': 'ContactPoint',
        'telephone': '+39 0435 420440',
        'email': 'info@monacosporthotel.com'
      },

      // Social and External Links, if applicable
      sameAs: [
        'https://www.instagram.com/monaco_sport_hotel/',
        'https://www.facebook.com/monacosporthotel'
      ],

      // Business Identifiers, if applicable
      legalName: 'Monaco Sport Hotel',
      taxID: 'IT00659590251',
      vatID: 'IT00659590251',
    })
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