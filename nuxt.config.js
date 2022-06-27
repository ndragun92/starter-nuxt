import { project } from './config/project'

// Env vars
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bitly-hackweek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: project.name,
      },
      {
        hid: 'description',
        name: 'description',
        content: project.description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: project.name,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: project.description,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: project.url,
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: project.ogImage,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: project.name,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: project.name,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: project.description,
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: project.url,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: project.twitterImage,
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: project.favicon }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/axios' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://localhost:3001',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: project.name,
      author: 'Bitly Europe',
    },
    manifest: {
      title: project.name,
      name: project.name,
      description: project.description,
      lang: project.lang,
      theme_color: project.themeColor,
    },
    icon: {
      fileName: project.pwaIcon,
    },
  },

  tailwindcss: {
    jit: true,
    // add '~tailwind.config` alias
    exposeConfig: true,
    plugins: [require('@tailwindcss/forms')],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
