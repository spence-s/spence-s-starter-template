module.exports = {
  '*.md,!test/**/*.md': 'prettier --write',
  './package.json':
    'prettier --write --plugin=prettier-plugin-packagejson ./package.json',
  '*.{js,ts}': 'xo --fix',
};
