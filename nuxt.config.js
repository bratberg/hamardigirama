export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  plugins: [{ src: '~plugins/vue-flat-surface-shader.js', ssr: false }],
  modules: [
    '@nuxtjs/axios'
  ],
  env: {
    meetupApiToken: process.env.MEETUP_API_TOKEN
  },
} 