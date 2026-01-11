# spence-s-starter-template

[![Node.js CI](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org)
[![npm version](https://img.shields.io/npm/v/spence-s-starter-template.svg)](https://www.npmjs.com/package/spence-s-starter-template)
[![npm downloads](https://img.shields.io/npm/dm/spence-s-starter-template.svg)](https://www.npmjs.com/package/spence-s-starter-template)

A bleeding edge, prod ready starter template for creating and publishing [Node.js](https://nodejs.org) libraries to [npm](https://www.npmjs.com/).

Features Include:

- MIT License
- Configured for [pure ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) output
- Easy out-of-the box development with [watch](https://nodejs.org/api/cli.html#--watch) and [native type stripping](https://nodejs.org/docs/latest/api/typescript.html#modules-typescript)
- [Editorconfig](https://editorconfig.org/) for collaboration
- Testing with [node's native test runner](https://nodejs.org/api/test.html) - pre-setup for typescript ESM and TypeScript
- CI runs on Node.js 20, 22, and 24 for pushes and pull requests to main in [github actions](https://github.com/features/actions)
- Linting with [xo](https://github.com/xojs/xo) (space configuration)
- Formatting with [prettier](https://prettier.io/) and [xo](https://github.com/xojs/xo)
- Markdown linting and formatting with [prettier](https://prettier.io/)
- Package.json linting and formatting with [prettier-plugin-package-json](https://www.npmjs.com/package/prettier-plugin-packagejson)
- Sane package.json scripts
- [Husky](https://typicode.github.io/husky/) for git hooks management
- [lint-staged](https://github.com/okonet/lint-staged) for pre-commit linting
- [Commitlint](https://commitlint.js.org/) with conventional commits
- [np](https://github.com/sindresorhus/np) for publishing to npm

## Prerequisites

- [Node.js](https://nodejs.org) version 22 or higher
- npm (comes with Node.js)

## Getting Started

### Installation

This is a github template and is best used by using the github UI to start a new project.

Once you've cloned the template for a new repository, the first thing you want to do is to make sure all the deps are up to date!

1. Run `npm install` to get the immediately needed deps
2. run `npm run update` to have npm-check-updates run an interactive program to update all the other deps.
3. run `npm run test` to ensure updates haven't broken anything themselves (this typically shouldn't happen).

### Customizing for Your Project

After cloning this template, you'll want to customize it for your specific project. Here's a checklist:

- [ ] Update `name` in package.json to your project name
- [ ] Update `description` in package.json
- [ ] Update `author` information in package.json (name, email, url)
- [ ] Update `repository.url` in package.json with your repository URL
- [ ] Update `homepage` and `bugs.url` in package.json
- [ ] Update the author name in LICENSE file
- [ ] Update this README.md with your project's information
- [ ] Replace the hello world code in `src/index.ts` with your actual code
- [ ] Update the tests in `test/index.test.ts` for your code

### Run the hello world

This starter-template is already set up to run typescript code out of the box node native type stripping and node native watch mode.

`npm run dev`

### Building the project

`npm run build` will build the project to the `dist` directory (which is already gitignored).

### Developing

`npm run dev` will build the project with `tsc --watch` execute the script with the new nodejs `watch` flag.

### Testing

`npm run test` run the tests once with node native type stripping.
`npm run test:coverage` run the tests once with native type stripping node experimental test coverage flags.
`npm run test:watch` run the tests in native watch mode with native type stripping.

### Updating dependencies

`npm run update` will use `ncu -i` to update all dependencies to their latest versions, interactively

### Releasing

To encourage best practices for publishing an open source package on npm, [np is installed by default](https://github.com/sindresorhus/np).

`npm run release`

## Scripts

```json
{
  "scripts": {
    "build": "rimraf dist && tsc -p tsconfig.build.json",
    "check": "tsc -p tsconfig.json",
    "dev": "node --watch src/index.ts",
    "lint": "npm run check && xo",
    "prepare": "husky",
    "release": "np",
    "start": "node dist/src/index.js",
    "test": "npm run lint && node --test",
    "test:coverage": "node --test --experimental-test-coverage",
    "test:watch": "node --test --watch",
    "update": "ncu -i"
  }
}
```

`build`: Builds the project into a dist directory for releasing to npm as `js` files complete with type defintions and source maps.
`check`: Check the types without building the project.
`dev`: Run the program in watch mode.
`lint`: Run the linter (xo) and type checker. Note: The `test` script runs tests only; run `lint` separately if needed.
`prepare`: Run the husky prepare script so husky is installed with deps.
`release`: Use `np` to release the package to npm.
`start`: Run the build js files from the `build` script.
`test`: Run tests with node native test runner.
`test:coverage`: Run tests with node native test coverage.
`test:watch`: Run tests in watch mode.
`update`: Update deps interactively to their latest versions.

## Contributing

This project uses [Commitlint](https://commitlint.js.org/) with conventional commits. When making commits, please follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

Examples:

- `feat: add new feature`
- `fix: resolve bug in function`
- `docs: update README`
- `chore: update dependencies`

Pre-commit hooks will automatically lint your staged files using [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged).

## TypeScript

The tsconfig included in this template is set up for Node.JS native type stripping and includes the `erasableSyntaxOnly` option, so not all TypeScript features are supported.This decision was made to encourage adoption of cutting edge Node.JS features which improve DX. We continue to maintain a build and release option for packaging only `JavaScript` files, as node native type stripping will not strip imports from `node_modules` folders.

Learn More:

- [TypeScript Modules](https://nodejs.org/api/typescript.html)
- [Erasable Syntax Only Reference](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly)

## License

MIT © [Spencer Snyder](https://spencersnyder.io)
