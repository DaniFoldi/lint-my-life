module.exports = {
  ignoreFiles: [ 'node_modules/**' ],
  plugins: [ 'stylelint-order', 'stylelint-high-performance-animation' ],
  rules: {
    'annotation-no-unknown': true,
    'at-rule-empty-line-before': [
      'always',
      {
        except: [ 'blockless-after-same-name-blockless', 'first-nested' ],
        ignore: [ 'after-comment' ],
        severity: 'warning'
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': [ 'always-single-line', { severity: 'warning' }],
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': [ 'never', { severity: 'warning' }],
    'block-closing-brace-newline-after': [ 'always', { severity: 'warning' }],
    'block-closing-brace-newline-before': [ 'always-multi-line', { severity: 'warning' }],
    'block-closing-brace-space-before': [ 'always-single-line', { severity: 'warning' }],
    'block-no-empty': [ true, { severity: 'warning' }],
    'block-opening-brace-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'block-opening-brace-space-after': [ 'always-single-line', { severity: 'warning' }],
    'block-opening-brace-space-before': [ 'always', { severity: 'warning' }],
    'color-function-notation': [ 'modern', { severity: 'warning' }],
    'color-hex-case': [ 'lower', { severity: 'warning' }],
    'color-hex-length': [ 'short', { severity: 'warning' }],
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: [ 'first-nested' ],
        ignore: [ 'stylelint-commands' ],
        severity: 'warning'
      }
    ],
    'comment-no-empty': [ true, { severity: 'warning' }],
    'comment-whitespace-inside': [ 'always', { severity: 'warning' }],
    'custom-property-empty-line-before': [
      'always',
      {
        except: [ 'after-custom-property', 'first-nested' ],
        ignore: [ 'after-comment', 'inside-single-line-block' ],
        severity: 'warning'
      }
    ],
    'custom-property-no-missing-var-function': true,
    'declaration-bang-space-after': [ 'never', { severity: 'warning' }],
    'declaration-bang-space-before': [ 'always', { severity: 'warning' }],
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [ 'consecutive-duplicates-with-different-values' ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [ true, { severity: 'warning' }],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'declaration-block-semicolon-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    'declaration-block-semicolon-space-after': [ 'always-single-line', { severity: 'warning' }],
    'declaration-block-semicolon-space-before': [ 'never', { severity: 'warning' }],
    'declaration-block-single-line-max-declarations': [ 1, { severity: 'warning' }],
    'declaration-block-trailing-semicolon': [ 'always', { severity: 'warning' }],
    'declaration-colon-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'declaration-colon-space-after': [ 'always', { severity: 'warning' }],
    'declaration-colon-space-before': [ 'never', { severity: 'warning' }],
    'declaration-empty-line-before': [
      'always',
      {
        except: [ 'after-declaration', 'first-nested' ],
        ignore: [ 'after-comment', 'inside-single-line-block' ],
        severity: 'warning'
      }
    ],
    'declaration-no-important': [ true, { severity: 'warning' }],
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': [ true, { severity: 'warning' }],
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'function-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    'function-comma-space-before': [ 'never', { severity: 'warning' }],
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': [ 0, { severity: 'warning' }],
    'function-name-case': [ 'lower', { severity: 'warning' }],
    'function-no-unknown': true,
    'function-parentheses-newline-inside': [ 'always-multi-line', { severity: 'warning' }],
    'function-parentheses-space-inside': [ 'never-single-line', { severity: 'warning' }],
    'function-url-quotes': [ 'always', { severity: 'warning' }],
    'function-whitespace-after': [ 'always', { severity: 'warning' }],
    'hue-degree-notation': [ 'angle', { severity: 'warning' }],
    'import-notation': [ 'url', { severity: 'warning' }],
    'indentation': [ 2, { baseIndentLevel: 1 }],
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': [ true, { severity: 'warning' }],
    'length-zero-no-unit': [ true, { severity: 'warning' }],
    'max-empty-lines': [ 2, { severity: 'warning' }],
    'max-line-length': [ 120, { severity: 'warning' }],
    'max-nesting-depth': 5,
    'media-feature-colon-space-after': [ 'always', { severity: 'warning' }],
    'media-feature-colon-space-before': [ 'never', { severity: 'warning' }],
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': [ 'never', { severity: 'warning' }],
    'media-feature-range-operator-space-after': [ 'always', { severity: 'warning' }],
    'media-feature-range-operator-space-before': [ 'always', { severity: 'warning' }],
    'media-query-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'media-query-list-comma-newline-before': [ 'always-multi-line', { severity: 'warning' }],
    'media-query-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    'media-query-list-comma-space-before': [ 'never', { severity: 'warning' }],
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': [ true, { severity: 'warning' }],
    'no-empty-source': [ true, { severity: 'warning' }],
    'no-eol-whitespace': [ true, { severity: 'warning' }],
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': [ true, { severity: 'warning' }],
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': [ 'never', { severity: 'warning' }],
    'number-max-precision': [ 4, { severity: 'warning' }],
    'number-no-trailing-zeros': [ true, { severity: 'warning' }],
    'order/order': [ 'dollar-variables', 'custom-properties', 'at-rules', 'declarations', 'rules' ],
    'order/properties-alphabetical-order': true,
    'plugin/no-low-performance-animation-properties': [ true, { ignore: 'paint-properties' }],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: [ 'after-comment' ],
        severity: 'warning'
      }
    ],
    'selector-attribute-brackets-space-inside': [ 'never', { severity: 'warning' }],
    'selector-attribute-operator-space-after': [ 'never', { severity: 'warning' }],
    'selector-attribute-operator-space-before': [ 'never', { severity: 'warning' }],
    'selector-attribute-quotes': [ 'never', { severity: 'warning' }],
    'selector-combinator-space-after': [ 'always', { severity: 'warning' }],
    'selector-combinator-space-before': [ 'always', { severity: 'warning' }],
    'selector-descendant-combinator-no-non-space': [ true, { severity: 'warning' }],
    'selector-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'selector-list-comma-newline-before': [ 'never-multi-line', { severity: 'warning' }],
    'selector-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    'selector-list-comma-space-before': [ 'never', { severity: 'warning' }],
    'selector-max-empty-lines': [ 0, { severity: 'warning' }],
    'selector-no-vendor-prefix': true,
    'selector-not-notation': 'complex',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': [ 'never', { severity: 'warning' }],
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      {
        ignore: [ 'custom-elements' ]
      }
    ],
    'shorthand-property-no-redundant-values': [ true, { severity: 'warning' }],
    'string-no-newline': [ true, { severity: 'warning' }],
    'string-quotes': [ 'single', { severity: 'warning' }],
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': [ 'always-multi-line', { severity: 'warning' }],
    'value-list-comma-space-after': [ 'always-single-line', { severity: 'warning' }],
    'value-list-comma-space-before': [ 'never', { severity: 'warning' }],
    'value-list-max-empty-lines': [ 0, { severity: 'warning' }],
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [ 'box' ]
      }
    ]
  }
}
