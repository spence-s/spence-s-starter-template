import {type XoConfigItem} from 'xo';

const xoConfig: XoConfigItem[] = [
  {ignores: ['test/temp', 'coverage']},
  {
    prettier: true,
    space: true,
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];

export default xoConfig;
