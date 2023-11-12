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
