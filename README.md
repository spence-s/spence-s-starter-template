# spence-s-starter-template

[![Node.js CI](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml)

Hello, this is my personal, bleeding edge, starter template for creating node.js libraries.

Features Include:

- MIT License
- Configured for ESM only output
- Easy out-of-the box development watch and test mode with only TS
- Editorconfig
- Testing with node's native test runner - pre-setup for typescript ESM
- Tests run on push to main in github actions
- Linting with xo (space configuration)
- Formatting with prettier and xo
- Markdown linting and formatting with prettier
- Package.json linting and formatting with prettier-plugin-package-json and npm-package-json-lint
- Np for publishing to npm

## Getting starting

### Installation

This is a github template and is best used by using the github UI to start a new project.

Once you've cloned the template for a new repository, the first thing you want to do is to make sure all the deps are up to date!

1. Run `npm install` to get the immediately needed deps
2. run `npm run update` to have npm-check-updates run an interactive program to update all the other deps.
3. run `npm run test` to ensure updates haven't broken anything themselves (this typically shouldn't happen).

### Run the hello world

This starter-template is already set up to run typescript code out of the box via ts-node's experimental loader.

`npm run dev`

Will compile the `src/index.ts` in memory and execute it.

### Building the project

`npm run build` will build the project to the `dist` directory (which is already gitignored).

### Developing

`npm run dev` will build the project in memory and execute the script.

For a nodemon like experience, we leverage the new nodejs experimental `watch` flag.

`npm run dev:watch` to start in watch mode.

### Releasing

To encourage best practices for publishing an open source package on npm, [np is installed by default](https://github.com/sindresorhus/np).

`npm run release`
