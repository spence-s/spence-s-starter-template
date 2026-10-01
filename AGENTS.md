# Agent guidelines

This is a Node.js 24+ TypeScript library using pure ESM and native type stripping.

- Keep changes focused and follow the existing code style.
- Use `.ts` extensions for local imports and `import type` for type-only imports.
- Use erasable TypeScript syntax; do not add CommonJS.
- Add or update tests for behavior changes.
- Run `npm run check && npm run lint && npm test && npm run build` before finishing.
