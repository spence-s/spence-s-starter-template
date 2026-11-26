import {defineConfig} from 'npm-check-updates';

export default defineConfig({
  /**
   * Keep Node types and TypeScript on their current majors while allowing updates.
   * @param {string} name - Dependency being checked for updates.
   */
  target: name => name === '@types/node' || name === 'typescript' ? 'minor' : 'latest',
});
