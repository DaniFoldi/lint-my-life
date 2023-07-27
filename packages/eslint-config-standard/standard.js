import unicorn from 'eslint-plugin-unicorn'


export function mainRuleset(rules = {}) {
  return {
    ignores: [ 'package.json', 'package-lock.json', 'coverage/', 'dist/', 'node_modules/' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    plugins: {
      unicorn
    },
    rules: {
      'array-bracket-newline': [
        'warn',
        {
          'multiline': true
        }
      ],
      'array-bracket-spacing': [
        'warn',
        'always',
        {
          'arraysInArrays': false,
          'objectsInArrays': false
        }
      ],
      'arrow-parens': [
        'warn',
        'as-needed'
      ],
      'arrow-spacing': 'warn',
      'block-spacing': [
        'warn',
        'always'
      ],
      'brace-style': [
        'error',
        '1tbs'
      ],
      'comma-dangle': [
        'warn',
        'never'
      ],
      'comma-spacing': [
        'warn',
        {
          'after': true,
          'before': false
        }
      ],
      'comma-style': [
        'warn',
        'last'
      ],
      'constructor-super': 'error',
      'dot-notation': [
        'error',
        {
          'allowKeywords': true
        }
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'eqeqeq': [
        'error',
        'always'
      ],
      'for-direction': 'error',
      'func-call-spacing': [
        'warn',
        'never'
      ],
      'function-paren-newline': [
        'warn',
        'multiline'
      ],
      'getter-return': 'error',
      /* 'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/export': 'warn',
    'import/exports-last': 'off',
    'import/first': 'error',
    'import/newline-after-import': [
      'warn',
      {
        'count': 2
      }
    ],
    'import/no-absolute-path': [
      'error',
      {
        'amd': false,
        'commonjs': true,
        'esmodule': true
      }
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'warn',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ]
      }
    ],*/
      'indent': [
        'warn',
        2,
        {
          'SwitchCase': 1
        }
      ],
      'key-spacing': [
        'warn',
        {
          'afterColon': true,
          'beforeColon': false,
          'mode': 'strict'
        }
      ],
      'keyword-spacing': [
        'warn',
        {
          'after': true,
          'before': true
        }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'lines-between-class-members': [
        'warn',
        'always',
        {
          'exceptAfterSingleLine': true
        }
      ],
      'max-len': [
        'warn',
        {
          'code': 120,
          'ignoreRegExpLiterals': true,
          'ignoreStrings': true,
          'ignoreTemplateLiterals': true,
          'ignoreTrailingComments': true,
          'ignoreUrls': true
        }
      ],
      'no-alert': 'error',
      'no-async-promise-executor': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-else-return': 'warn',
      'no-empty': [
        'warn',
        {
          'allowEmptyCatch': true
        }
      ],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'warn',
      'no-extra-parens': [
        'warn',
        'functions'
      ],
      'no-extra-semi': 'error',
      'no-fallthrough': 'error',
      'no-floating-decimal': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-lone-blocks': 'warn',
      'no-lonely-if': 'warn',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': [
        'warn',
        {
          'max': 2,
          'maxEOF': 0
        }
      ],
      'no-new-symbol': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-self-assign': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-tabs': 'error',
      'no-template-curly-in-string': 'warn',
      'no-this-before-super': 'error',
      'no-trailing-spaces': 'warn',
      'no-undef': [
        'error',
        {
          'typeof': true
        }
      ],
      'no-unexpected-multiline': 'error',
      'no-unneeded-ternary': 'warn',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-labels': 'error',
      'no-unused-vars': 'warn',
      'no-useless-backreference': 'error',
      'no-useless-catch': 'error',
      'no-useless-concat': 'warn',
      'no-useless-escape': 'warn',
      'no-var': 'error',
      'no-with': 'error',
      'object-curly-newline': [
        'warn',
        {
          'ExportDeclaration': {
            'multiline': true
          },
          'ImportDeclaration': {
            'multiline': true
          }
        }
      ],
      'object-curly-spacing': [
        'warn',
        'always'
      ],
      'operator-linebreak': [
        'warn',
        'before'
      ],
      'prefer-const': 'warn',
      'prefer-object-spread': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'quotes': [
        'warn',
        'single'
      ],
      'require-yield': 'error',
      'rest-spread-spacing': 'warn',
      'semi': [
        'warn',
        'never'
      ],
      'sort-imports': 'off',
      'sort-keys': 'off',
      'space-before-function-paren': [
        'error',
        {
          'anonymous': 'never',
          'asyncArrow': 'always',
          'named': 'never'
        }
      ],
      'space-in-parens': [
        'warn',
        'never'
      ],
      'space-infix-ops': 'warn',
      'spaced-comment': [
        'warn',
        'always',
        {
          'exceptions': [ '*' ]
        }
      ],
      'template-curly-spacing': [
        'warn',
        'never'
      ],
      'unicorn/filename-case': [
        'warn',
        {
          'cases': {
            'camelCase': true,
            'kebabCase': true,
            'pascalCase': true
          }
        }
      ],
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-array-reduce': 'off',
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-typeof-undefined': 'warn',
      'unicorn/numeric-separators-style': [
        'warn',
        {
          'onlyIfContainsSeparator': true
        }
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/switch-case-braces': [
        'warn',
        'avoid'
      ],
      'unicorn/better-regex': 'error',
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-destructuring': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/custom-error-definition': 'off',
      'unicorn/empty-brace-spaces': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/import-style': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-await-expression-member': 'warn',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-document-cookie': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-instanceof-array': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-keyword-prefix': 'off',
      'unicorn/no-lonely-if': 'error',
      'unicorn/no-negated-condition': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-object-as-default-parameter': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-static-only-class': 'error',
      'unicorn/no-thenable': 'error',
      'unicorn/no-this-assignment': 'error',
      'unicorn/no-unnecessary-await': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unreadable-iife': 'error',
      'unicorn/no-unsafe-regex': 'off',
      'unicorn/no-unused-properties': 'off',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-promise-resolve-reject': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/no-useless-switch-case': 'error',
      'unicorn/no-useless-undefined': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-array-flat': 'error',
      'unicorn/prefer-array-flat-map': 'error',
      'unicorn/prefer-array-index-of': 'error',
      'unicorn/prefer-array-some': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-blob-reading-methods': 'error',
      'unicorn/prefer-code-point': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-default-parameters': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-event-target': 'error',
      'unicorn/prefer-export-from': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-json-parse-buffer': 'off',
      'unicorn/prefer-keyboard-event-key': 'error',
      'unicorn/prefer-logical-operator-over-ternary': 'error',
      'unicorn/prefer-math-trunc': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-modern-math-apis': 'error',
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-native-coercion-functions': 'error',
      'unicorn/prefer-negative-index': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-optional-catch-binding': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-set-size': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-replace-all': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/prefer-string-trim-start-end': 'error',
      'unicorn/prefer-switch': 'error',
      'unicorn/prefer-ternary': 'error',
      'unicorn/prefer-top-level-await': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/relative-url-style': 'error',
      'unicorn/require-array-join-separator': 'error',
      'unicorn/require-number-to-fixed-digits-argument': 'error',
      'unicorn/string-content': 'off',
      'unicorn/template-indent': 'error',
      'unicorn/text-encoding-identifier-case': 'error',
      'unicorn/throw-new-error': 'error',
      'use-isnan': 'error',
      'valid-typeof': [
        'error',
        {
          'requireStringLiterals': true
        }
      ],
      ...rules
    },
    settings: {
      /* 'import/extensions': [
      '.cjs',
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx'
    ],
    'import/external-module-folders': [ 'node_modules', 'node_modules/@types' ],
    /*'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    },
    'import/resolver': {
      'node': {
        'extensions': [
          '.cjs',
          '.js',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx'
        ]
      }
    }*/
    }
  }
}

export function cjsRuleset(rules = {}) {
  return {
    files: [ '**/*.cjs' ],
    languageOptions: {
      globals: {
        module: 'writable'
      },
      sourceType: 'script'
    },
    rules
  }
}

export default [ mainRuleset(), cjsRuleset() ]
