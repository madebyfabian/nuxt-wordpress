import { createResolver } from '@nuxt/kit'
import type { WordpressRuntimeConfig } from './types'

// @ts-expect-error Works in Nuxt 3
const { resolve } = createResolver(import.meta.url)

const config: WordpressRuntimeConfig = {
  baseUrl: process.env.NUXT_PUBLIC_WORDPRESS_BASE_URL || 'https://example.com',
  twicpicsDomain: 'https://i.twic.pics',
  twicpicsPaths: [],
}

export default {
  typescript: {
    shim: false,
  },

  // prettier-ignore
  modules: [
    resolve('./modules/nuxt-wordpress/module'),
    '@twicpics/components/nuxt3',
  ],

  runtimeConfig: {
    public: {
      wordpress: config,
    },
  },

  components: [
    {
      prefix: '',
      path: resolve('./components'),
      global: true,
    },
  ],
}
