# AGENTS.md - Development Guidelines for AI Coding Agents

This document provides essential information for AI coding agents working in this repository.

## Project Overview

This is an opinionated TypeScript + ESM starter template for Node.js libraries. The project uses:

- **Pure ESM** (ECMAScript Modules) - no CommonJS
- **Node.js >=22** with native TypeScript type stripping
- **XO** for linting with Prettier formatting
- **Node.js native test runner** for testing
- **Conventional Commits** with Commitlint
- **Husky + lint-staged** for pre-commit hooks

## Build, Test & Lint Commands

### Building

- `npm run build` - Clean dist folder and compile TypeScript to JavaScript with declarations
- `npm run check` - Type-check without building

### Testing

- `npm test` - Run all tests once (includes linting)
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

- `npm run lint` - Run XO linter and type checker
- XO is configured with Prettier integration (auto-formats on fix)
- Pre-commit hooks auto-fix linting issues via lint-staged

### Development

- `npm run dev` - Run with watch mode (auto-restarts on changes)
- `npm start` - Run built JavaScript from dist/

### Other Commands

- `npm run update` - Interactive dependency updates (ncu -i)
- `npm run release` - Publish to npm using np

## Code Style Guidelines

### General Formatting

- **Indentation**: 2 spaces (enforced by .editorconfig)
- **Line endings**: LF
- **Trailing whitespace**: Remove
- **Final newline**: Required
- **Prettier**: Enabled via XO integration

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
import type { SomeType } from "./types.ts";
import { someFunction } from "./utils.ts";

// ✅ Correct - Always include .ts extension for local imports
import { helloWorld } from "../src/index.ts";

// ❌ Wrong - Missing type keyword
import { SomeType } from "./types.ts";

// ❌ Wrong - Missing file extension
import { someFunction } from "./utils";

// ❌ Wrong - Using .js extension in TypeScript files
import { someFunction } from "./utils.js";
```

### Naming Conventions

- Use camelCase for variables, functions, and methods
- Use PascalCase for types, interfaces, and classes
- No enforced capitalized comments (disabled via xo.config.ts)
- No enforced naming-convention rule (disabled via xo.config.ts for flexibility)

### Testing Style

Use Node.js native test runner with TypeScript:

```typescript
import { test, describe } from "node:test";
import assert from "node:assert";

void describe("feature name", async () => {
  await test("test case description", (t) => {
    // Use t.mock for mocking
    const mockFn = t.mock.method(object, "method");

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

## Git & Commits

### Commit Message Format

Follow Conventional Commits specification (@commitlint/config-conventional):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types**: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert

**Examples**:

- `feat: add user authentication`
- `fix: resolve memory leak in parser`
- `docs: update API documentation`
- `test: add tests for edge cases`
- `chore: update dependencies`

### Pre-commit Hooks

Husky + lint-staged automatically runs before commits:

- Prettier on `*.md` files (excluding test fixtures)
- Prettier with packagejson plugin on `package.json`
- XO with --fix on `*.{js,ts}` files

## File Structure

```
spence-s-starter-template/
├── src/           # Source TypeScript files
├── test/          # Test files (*.test.ts)
├── dist/          # Build output (gitignored)
├── node_modules/  # Dependencies (gitignored)
├── package.json   # Project configuration
├── tsconfig.json  # Main TypeScript config
├── tsconfig.build.json  # Build-specific config
├── xo.config.ts   # XO linter configuration
└── .editorconfig  # Editor settings
```

## Key Configuration Files

- **package.json**: Scripts, dependencies, ESM type declaration
- **tsconfig.json**: Strict TypeScript config with Node.js 20+ features
- **xo.config.ts**: XO linter rules with Prettier integration
- **.editorconfig**: Formatting rules (2 spaces, LF, UTF-8)
- **.commitlintrc.json**: Conventional commits enforcement
- **.lintstagedrc.cjs**: Pre-commit hook configuration

## Important Notes for Agents

1. **Always include file extensions** in TypeScript imports (`.ts` for source files)
2. **Use `import type`** for type-only imports to avoid side effects
3. **Array/object access** may return undefined - handle accordingly
4. **No enums or namespaces** - use const objects or union types instead
5. **ESM only** - never use CommonJS syntax
6. **Node.js >=22 required** - can use latest Node.js features
7. **Test files use native Node test runner** - no Jest, Mocha, etc.
8. **Pre-commit hooks will auto-fix** many linting issues
9. **Run `npm run lint`** before committing to catch type errors early
10. **Use conventional commit messages** - commitlint will reject non-compliant commits

## Common Patterns

### Exporting from index.ts

```typescript
export function myFunction() {
  // implementation
}

export type MyType = {
  // type definition
};
```

### Testing with Mocks

```typescript
await test("mocks console.log", (t) => {
  const mockLog = t.mock.method(globalThis.console, "log");
  myFunction();
  assert.equal(mockLog.mock.calls.length, 1);
  t.mock.reset();
});
```

### Type-safe Array Access

```typescript
const items = [1, 2, 3];
const first = items[0]; // Type: number | undefined
if (first !== undefined) {
  // Safe to use first here
}
```
