import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'pathe'

export default defineNuxtConfig({
  extends: [resolve(__dirname, '../layer')],

  runtimeConfig: {
    public: {
      test: 'omg it works ma!!!',
    },
  },
})
