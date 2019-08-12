import NuxtConfiguration from '@nuxt/config'
import { environments } from './src/plugins/environments'
import consola from 'consola'

const publicPath = 'https://storage.googleapis.com/connpass-app-static/_nuxt/'

if (!process.env.CI) {
  Object.entries(environments).forEach(([key, value]) => {
    if (['browser', 'client', 'mode', 'modern', 'server', 'static'].includes(key)) {
      return
    }
    if (environments[key] === undefined || environments[key] === null) {
      consola.error(`Missing environment variable: '${key}'`)
      process.exit(1)
    }
  })
}

const config: NuxtConfiguration = {
  srcDir: 'src',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Frontend Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'No description yet.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase.ts',
    '~/plugins/environments.ts',
  ],

  env: {
    FIREBASE_API_KEY: 'AIzaSyAe3E3V_NRQwPLE0w7KhFWjRNX2RwWqWeo'
    , FIREBASE_AUTH_DOMAIN: 'http://connpass-app-43db8.firebaseapp.com/'
    , FIREBASE_DATABASE_URL: 'https://connpass-app-43db8.firebaseio.com'
    , FIREBASE_PROJECT_ID: 'connpass-app-43db8'
    , FIREBASE_STORAGE_BUCKET: 'http://connpass-app-43db8.appspot.com/'
    , FIREBASE_MESSAGING_SENDER_ID: '592919256445'
    , FIREBASE_APP_ID: '1:592919256445:web:b45b48463ab2cc9e'

  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    publicPath,
    /*
    ** You can extend webpack config here
    */
    extend(extendConfig, ctx) {
    }
  }
}


export default config
