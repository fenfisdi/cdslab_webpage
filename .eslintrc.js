module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'no-return-await': ['error']
  }
}
