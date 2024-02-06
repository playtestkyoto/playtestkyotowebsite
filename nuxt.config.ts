export default defineNuxtConfig({
  telemetry: false,
  // devtools: { enabled: true },
  srcDir: 'src/',
  devServer: {
    port: 3030,
  },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/css/main.scss'],
  app: {
    head: {
      title: 'Playtest Kyoto 2024',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            '都市空間を舞台としたゲームや遊びを行う3日間のイベント',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Playtest Kyoto 2024',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            '都市空間を舞台としたゲームや遊びを行う3日間のイベント',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://playtest.city/playtest_social.jpg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://playtest.city/',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: ['en', 'ja'],
        defaultLocale: 'ja',
        strategy: 'prefix_except_default',
      },
    ],
  ],
})
