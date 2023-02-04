import { createResolver } from '@nuxt/kit'

// @ts-expect-error Works in Nuxt 3
const { resolve } = createResolver(import.meta.url)

export default {
  modules: [resolve('./modules/nuxt-wordpress/module')],

  runtimeConfig: {
    public: {
      test: process.env.NUXT_PUBLIC_TEST || 'test',
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
