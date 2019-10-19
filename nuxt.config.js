export default {
  head: {
    title: 'Hamar Digirama',
    htmlAttrs: {
      lang: 'no'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Hamar Digirama er et uformelt faglig samlingspunkt for utviklere, designere og andre som brenner for mennesker og teknologi i Hamarområdet. Kom på foredrag og workshops (eller hold en sjøl!) ta en pils og kast deg med i diskusjoner om design, programmering, prosesser, brukeropplevelse, back-end, visuell kommunikasjon, rammeverk, front-end, – og alt digitalt!' }
    ],
    noscript: [
      { innerHTML: 'This website is more fun with JavaScript enabled.' }
    ]
  },
  manifest: {
    name: 'Hamar Digirama',
    short_name: 'HD',
    lang: 'no'
  },
  plugins: [{ src: '~plugins/vue-flat-surface-shader.js', ssr: false }],
  modules: [
    '@nuxtjs/axios',  
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],
  'google-analytics': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false
  },
  env: {
    meetupApiToken: process.env.MEETUP_API_TOKEN
  },
  mode: 'spa',
  generate: {
    dir: 'public'
  }
}
