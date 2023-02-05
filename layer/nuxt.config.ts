import { createResolver } from '@nuxt/kit'
import type { WordpressRuntimeConfig } from './types'

// @ts-expect-error Works in Nuxt 3
const { resolve } = createResolver(import.meta.url)

const config: WordpressRuntimeConfig = {
  test: process.env.NUXT_PUBLIC_TEST || 'layer default for test',
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
