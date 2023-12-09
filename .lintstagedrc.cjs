module.exports = {
  "*.md,!test/**/*.md": "prettier --check",
  "./package.json": [
    "npmPkgJsonLint ./package.json",
    "prettier --write --plugin=prettier-plugin-packagejson ./package.json",
  ],
  "*.{js,ts}": "xo --fix",
};
