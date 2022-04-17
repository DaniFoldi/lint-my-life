module.exports = {
  // rules: {
  //  'custom/no-future-comment': require('@danifoldi/eslint-plugin-eslint-presets/rules/vue-no-future-comment.js')
  // },
  configs: {
    'jest': require('@danifoldi/eslint-plugin-eslint-presets/config/jest.js'),
    'node': require('@danifoldi/eslint-plugin-eslint-presets/config/node.js'),
    'node-cjs': require('@danifoldi/eslint-plugin-eslint-presets/config/node-cjs.js'),
    'nuxt': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt.js'),
    'nuxt-ts': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt-ts.js'),
    'nuxt-ts-vitest': require('@danifoldi/eslint-plugin-eslint-presets/config/nuxt-ts-vitest.js'),
    'paintbrush': require('@danifoldi/eslint-plugin-eslint-presets/config/paintbrush.js'),
    'semi': require('@danifoldi/eslint-plugin-eslint-presets/config/semi.js'),
    'standard': require('@danifoldi/eslint-plugin-eslint-presets/config/standard.js'),
    'ts': require('@danifoldi/eslint-plugin-eslint-presets/config/ts.js'),
    'vitest': require('@danifoldi/eslint-plugin-eslint-presets/config/vitest.js'),
    'vue': require('@danifoldi/eslint-plugin-eslint-presets/config/vue.js'),
    'vue-ts': require('@danifoldi/eslint-plugin-eslint-presets/config/vue-ts.js')
  }
}