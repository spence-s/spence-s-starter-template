import {allFilesGlob} from 'xo';

const lintStagedConfig = {
  [allFilesGlob]: 'xo --fix',
  // remove once these are added to exported XO file globs
  '**/*.{json,jsonc,json5,css}': 'xo --fix',
};

export default lintStagedConfig;
