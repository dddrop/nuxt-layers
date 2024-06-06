// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts'],
  ui: {
    icons: ['ph', 'simple-icons']
  },
  colorMode: {
    preference: 'dark'
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
