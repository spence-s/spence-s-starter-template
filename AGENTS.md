# AGENTS.md - Development Guidelines for AI Coding Agents

This document provides essential information for AI coding agents working in this repository.

## Project Overview

This is an opinionated TypeScript + ESM starter template for Node.js libraries. The project uses:

- **Pure ESM** (ECMAScript Modules) - no CommonJS
- **Node.js >=22** with native TypeScript type stripping
- **XO** for linting and formatting
- **Node.js native test runner** for testing

## Build, Test & Lint Commands

### Building

- `npm run build` - Clean dist folder and compile TypeScript to JavaScript with declarations
- `npm run check` - Type-check without building

### Testing

- `npm test` - Run all tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode

#### Running a Single Test

```bash
# Run a specific test file
node --test test/index.test.ts

# Run tests matching a pattern
node --test test/**/*.test.ts

# Run with watch mode for a single file
node --test --watch test/index.test.ts
```

### Linting & Formatting

- linting: `npm run lint` - Run XO linter
- type-checking: `npm run check` - Run TypeScript type checker
- formatting: `npm run lint -- ---fix` XO is also the formatter (auto-formats on fix)

### Development

- `npm run dev` - Run with watch mode (auto-restarts on changes)

## Code Style Guidelines

### General Formatting

- **Indentation**: 2 spaces (enforced by .editorconfig)
- **Line endings**: LF
- **Trailing whitespace**: Remove
- **Final newline**: Required

### TypeScript Configuration

#### Module System

- **Pure ESM only** - `"type": "module"` in package.json
- Use `import`/`export`, never `require()`
- Module setting: `"module": "node20"` (adapts based on package.json type field)
- Target: ES2023

#### Strict Type Checking

The project uses maximum TypeScript strictness:

- `"strict": true`
- `"noUncheckedIndexedAccess": true` - Array/object access returns `T | undefined`
- `"exactOptionalPropertyTypes": true` - Distinguish between `undefined` and missing properties
- `"verbatimModuleSyntax": true` - Explicit type imports required

#### Special TypeScript Features

- **Type-only imports**: Use `import type` for types (enforced by `@typescript-eslint/no-import-type-side-effects`)
- **Erasable syntax only**: `"erasableSyntaxOnly": true` - No enums, namespaces, or non-erasable features
- **File extensions**: Always include `.ts` extensions in imports (e.g., `import {foo} from './bar.ts'`)
  - This is enforced by `import-x/extensions` rule
  - TypeScript rewrites these to `.js` via `"rewriteRelativeImportExtensions": true`

### Import Style

```typescript
// ✅ Correct - Type imports with 'type' keyword
import type {SomeType} from './types.ts';
import {someFunction} from './utils.ts';

// ✅ Correct - Always include .ts extension for local imports
import {helloWorld} from '../src/index.ts';

// ❌ Wrong - Missing type keyword
import {SomeType} from './types.ts';

// ❌ Wrong - Missing file extension
import {someFunction} from './utils';

// ❌ Wrong - Using .js extension in TypeScript files
import {someFunction} from './utils.js';
```

### Naming Conventions

- Use camelCase for variables, functions, and methods
- Use PascalCase for types, interfaces, and classes
- No enforced capitalized comments (disabled via xo.config.ts)
- No enforced naming-convention rule (disabled via xo.config.ts for flexibility)

### Testing Style

Use Node.js native test runner with TypeScript:

```typescript
import {test, describe, type TestContext} from 'node:test';
import assert from 'node:assert';

void describe('feature name', async () => {
  await test('test case description', (t: TestContext) => {
    // Use t.mock for mocking
    const mockFn = t.mock.method(object, 'method');

    // Use node:assert for assertions
    assert.equal(actual, expected);
    assert.strictEqual(actual, expected);

    // Clean up mocks
    t.mock.reset();
  });
});
```

### Test File Organization

- Test files: `test/**/*.test.ts`
- Keep tests in the `test/` directory (separate from source)
- Import source files with full path including `.ts` extension

### Error Handling

- Use explicit error types when possible
- Avoid `any` types (strict mode enforced)
- Handle potential `undefined` from array/object access due to `noUncheckedIndexedAccess`

### Comments

- No requirement for capitalized comments
- Focus on "why" not "what" in comments
- Prefer self-documenting code over excessive comments
