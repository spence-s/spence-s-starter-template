module.exports = {
  '*.md,!test/**/*.md': 'xo --fix',
  './package.json': 'xo --fix ./package.json',
  '*.{js,ts}': 'xo --fix',
};
