import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'pathe'

const twicpicsDomain = 'https://madebyfabian.twic.pics'

export default defineNuxtConfig({
  extends: [resolve(__dirname, '../layer')],

  runtimeConfig: {
    public: {
      wordpress: {
        baseUrl: 'https://headlesstest-7dkcm5v4mp.live-website.com',
        twicpicsDomain: twicpicsDomain,
        twicpicsPaths: [
          {
            path: '/wordpress-madebyfabian/',
            source: 'https://headlesstest-7dkcm5v4mp.live-website.com/',
          },
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
