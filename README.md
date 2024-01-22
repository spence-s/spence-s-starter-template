# spence-s-starter-template

Hello, this is my personal, bleeding edge, starter template for creating node.js libraries.

Features Include:
- MIT License
- Configured for ESM only output
- ts-node and built in watch for easy, out-of-the box development
- editorconfig
- testing with node's native test runner - pre-setup for typescript ESM
- linting with xo (space configuration)
- formatting with prettier and xo
- markdown linting and formatting with prettier
- package.json linting and formatting with prettier-plugin-package-json and npm-package-json-lint

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

