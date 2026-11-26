import type {XoConfigItem} from 'xo';

const xoConfig: XoConfigItem[] = [
  {ignores: ['test/temp', 'coverage']},
  {
    space: true,
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'jsdoc/require-asterisk-prefix': ['error', 'always'],
    },
  },
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    rules: {
      // ensure we don't get empty module imports while using verbatim module syntax
      '@typescript-eslint/no-import-type-side-effects': 'error',
      // extra type safety for most projects I do - disabled due to lower level typeguard projects
      // https://github.com/xojs/eslint-config-xo/blob/93422410efb9b5282ed0133ec98aa7078596ea29/source/typescript-rules.js#L464
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      // Enforce using .ts extensions for local imports in TS files
      // for native node.js type stripping support
      'import-x/extensions': [
        'error',
        'always',
        {
          ts: 'always',
          cts: 'always',
          mts: 'always',
          tsx: 'always',
          // Never allow relative js extensions in TS files
          js: 'never',
          jsx: 'never',
          cjs: 'never',
          mjs: 'never',
        },
      ],
    },
  },
];

export default xoConfig;
