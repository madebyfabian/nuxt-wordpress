import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'pathe'

const twicpicsDomain = 'https://madebyfabian.twic.pics'

export default defineNuxtConfig({
  extends: [resolve(__dirname, '../layer')],

  runtimeConfig: {
    public: {
      wordpress: {
        test: 'omg it works ma!!!',
        twicpicsDomain: twicpicsDomain,
        twicpicsPaths: [
          {
            path: '/gravatar/',
            source: 'https://secure.gravatar.com/',
          },
        ],
      },
    },
  },

  twicpics: {
    domain: twicpicsDomain,
  },
})
