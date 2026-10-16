const js = require('@eslint/js');
const globals = require('globals');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-console': 'warn',
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single', {'allowTemplateLiterals':'true'}]
    },
  },
];
