// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  extends: [
    '@nuxt/ui-pro',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
