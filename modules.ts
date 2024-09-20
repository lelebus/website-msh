import { installNuxtSiteConfig, updateSiteConfig } from 'nuxt-site-config-kit'
import { defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  // ...
  async setup(options) {
    await installNuxtSiteConfig()

    updateSiteConfig({
      _context: 'my-module',
      url: options.siteUrl,
    })
  }
})