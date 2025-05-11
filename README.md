# spence-s-starter-template

[![Node.js CI](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml)

A bleeding edge, prod ready starter template for creating and publishing [Node.js](https://nodejs.org) libraries to [npm](https://www.npmjs.com/).

Features Include:

- MIT License
- Configured for [pure ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) output
- Easy out-of-the box development with [watch](https://nodejs.org/api/cli.html#--watch) and test mode with only [TypeScript](https://www.typescriptlang.org/)
- [Editorconfig](https://editorconfig.org/) for collaboration
- Testing with [node's native test runner](https://nodejs.org/api/test.html) - pre-setup for typescript ESM
- CI runs on push to main in [github actions](https://github.com/features/actions)
- Linting with [xo](https://github.com/xojs/xo) (space configuration)
- Formatting with [prettier](https://prettier.io/) and [xo](https://github.com/xojs/xo)
- Markdown linting and formatting with [prettier](https://prettier.io/)
- Package.json linting and formatting with [prettier-plugin-package-json](https://www.npmjs.com/package/prettier-plugin-packagejson)
- [np](https://github.com/sindresorhus/np) for publishing to npm

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

`npm run dev` will build the project with `tsc --watch` execute the script with the new nodejs `watch` flag.

### Testing

`npm run test` will build the project and run the tests once
`npm run test:coverage` will build the project once and run the tests once with node experimental test coverage flags.
`npm run test:watch` will build the project in watch mode, and re-run the tests anytime something changes.

### Updating dependencies

`npm run update` will use `ncu -i` to update all dependencies to their latest versions, interactively

### Releasing

To encourage best practices for publishing an open source package on npm, [np is installed by default](https://github.com/sindresorhus/np).

`npm run release`
