const twicpicsDomain = 'https://madebyfabian.twic.pics'

export default defineNuxtConfig({
  extends: ['../layer'],

  runtimeConfig: {
    public: {
      wordpress: {
        baseUrl: 'https://wp.madebyfabian.com/',
        twicpicsDomain: twicpicsDomain,
        twicpicsPaths: [
          {
            path: '/wordpress-madebyfabian/',
            source: 'https://wp.madebyfabian.com/',
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
