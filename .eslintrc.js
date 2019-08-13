module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs', '@vue/typescript', 'plugin:nuxt/recommended'],
  // add your custom rules here
  rules: {
    // 'no-methods-on-designsystem': 'error',
    // 'no-directly-use-process': 'error',
    // 'no-javascript-vue-component': 'error',
    'import/order': 0
  }
}
