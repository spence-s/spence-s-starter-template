import {TS_FILES_GLOB, type XoConfigItem} from 'xo';

const xoConfig: XoConfigItem[] = [
  {ignores: ['test/temp', 'coverage']},
  {
    prettier: true,
    space: true,
    rules: {
      'capitalized-comments': 'off',
    },
  },
  {
    files: TS_FILES_GLOB,
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];

export default xoConfig;
