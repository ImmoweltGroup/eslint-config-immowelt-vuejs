const rules = require('./rules');

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    '@immowelt/eslint-config-immowelt-base',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'flowtype',
    'flowtype-errors',
    'vue'
  ],
  globals: {
    enquire: true,
    dataLayer: true,
    _gaq: true,
    TINY: true,
    trackSearchAgent: true
  },
  rules
};
