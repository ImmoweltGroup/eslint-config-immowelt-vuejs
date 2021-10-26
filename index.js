const rules = require('./rules');

module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    '@immowelt/eslint-config-immowelt-base',
    'plugin:jest/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
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
