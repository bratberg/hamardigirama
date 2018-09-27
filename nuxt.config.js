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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
    ]
  },
  plugins: [{ src: '~plugins/vue-flat-surface-shader.js', ssr: false }],
  manifest: {
    name: 'Hamar Digirama',
    short_name: 'HD',
    lang: 'no'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  env: {
    meetupApiToken: process.env.MEETUP_API_TOKEN
  },
} 