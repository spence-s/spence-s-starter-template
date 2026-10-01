# spence-s-starter-template

[![Node.js CI](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml/badge.svg?branch=main&event=push)](https://github.com/spence-s/spence-s-starter-template/actions/workflows/node.js.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D24-brightgreen)](https://nodejs.org)
[![npm version](https://img.shields.io/npm/v/spence-s-starter-template.svg)](https://www.npmjs.com/package/spence-s-starter-template)

An opinionated starter template for publishing TypeScript and pure ESM Node.js libraries to npm.

## Included

- Node.js 24 or newer with native TypeScript type stripping and watch mode
- Strict TypeScript, erasable syntax, declaration files, and source maps
- Node.js's native test runner and coverage
- XO linting and formatting
- GitHub Actions on supported Node.js versions
- Husky, lint-staged, and Commitlint with Conventional Commits
- npm-check-updates for dependency updates
- `np` for npm releases

## Use the template

Create a repository from this GitHub template, clone it, then run:

```sh
npm install
npm run check
npm test
npm run dev
```

Customize these files before publishing:

- Package metadata in `package.json`
- The author in `LICENSE`
- `src/index.ts` and `test/index.test.ts`
- This README

Local TypeScript imports include their `.ts` extension. The compiler rewrites those extensions when building, while Node.js runs the source directly during development and testing.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run build` | Clean `dist` and compile JavaScript, declarations, and source maps |
| `npm run check` | Type-check without emitting files |
| `npm run dev` | Run `src/index.ts` in watch mode |
| `npm run lint` | Lint the project with XO; append `-- --fix` to apply fixes |
| `npm test` | Run the test suite once |
| `npm run test:coverage` | Run tests with native coverage reporting |
| `npm run test:watch` | Run tests in watch mode |
| `npm run update` | Interactively update dependencies |
| `npm run release` | Publish with `np` |
| `npm start` | Run the compiled entry point |

Before committing, run:

```sh
npm run check && npm run lint && npm test && npm run build
```

Git hooks lint staged files and validate commit messages against the [Conventional Commits](https://www.conventionalcommits.org/) format.

## TypeScript

The configuration targets native Node.js TypeScript execution with [`erasableSyntaxOnly`](https://www.typescriptlang.org/tsconfig/#erasableSyntaxOnly). Runtime TypeScript syntax such as enums and namespaces is intentionally unsupported. Published packages are compiled to JavaScript because Node.js does not strip types from dependencies in `node_modules`.

See [Node.js TypeScript support](https://nodejs.org/api/typescript.html) for details.

## License

MIT © [Spencer Snyder](https://spencersnyder.io)
