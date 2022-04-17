module.exports = {
  extends: [
    'plugin:@danifoldi/eslint-presets/ts.js',
    'plugin:@danifoldi/eslint-presets/vue.js'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    extraFileExtensions: [ '.vue' ],
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [ '@typescript-eslint' ]
}
