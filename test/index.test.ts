import test from 'node:test';
import assert from 'node:assert';
import {helloWorld} from '../src/index.js';

await test('helloWorld is a function', (t) => {
  assert.equal(typeof helloWorld, 'function');
});

await test('helloWorld logs a string', (t) => {
  const mockLog = t.mock.method(globalThis.console, 'log');
  helloWorld();
  assert.equal(mockLog.mock.calls.length, 1);
  assert.equal(mockLog.mock.calls[0]?.arguments.length, 1);
  assert.equal(typeof mockLog.mock.calls[0]?.arguments[0], 'string');
  t.mock.reset();
});
