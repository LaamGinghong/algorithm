module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['standard', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'standard/no-callback-literal': 'off',
  },
}
