import {allFilesGlob} from 'xo';

const lintStagedConfig = {
  [allFilesGlob]: 'xo --fix',
};

export default lintStagedConfig;
