import test from 'node:test';
import assert from 'node:assert';
import {helloWorld} from '../src/index.ts';

await test('helloWorld is a function', t => {
  assert.equal(typeof helloWorld, 'function');
});
