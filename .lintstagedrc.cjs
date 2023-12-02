module.exports = {
  "*.md,!test/**/*.md": "prettier --check",
  "./package.json": [
    "npmPkgJsonLint ./package.json",
    "prettier --check --plugin=prettier-plugin-packagejson ./package.json",
  ],
  "*.{js,ts}": "xo --fix",
};
