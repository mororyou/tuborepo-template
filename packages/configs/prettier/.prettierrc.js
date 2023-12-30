/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};
