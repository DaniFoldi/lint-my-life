module.exports = {
  extends: [
    'plugin:nuxt/recommended',
    'plugin:@danifoldi/eslint-plugin-eslint-presets/vue.js'
  ],
  globals: {
    definePageMeta: 'readonly',
    useFetch: 'readonly',
    useHead: 'readonly',
    useLazyFetch: 'readonly',
    useNuxtApp: 'readonly',
    useRoute: 'readonly',
    useRouter: 'readonly',
    useState: 'readonly',
    watch: 'readonly'
  },
  overrides: [
    {
      files: [ 'components/*.vue', 'components/**/*.vue' ],
      rules: {
        'unicorn/filename-case': [ 'warn', { cases: { pascalCase: true } }]
      }
    }
  ],
  rules: {
    'import/no-unresolved': [ 'error', { ignore: [ '#app', '#assets', '#build', '#config', '#imports', '#storage' ] }]
  }
}
