import {test, describe, type TestContext} from 'node:test';
import {helloWorld} from '../src/index.ts';

void describe('helloWorld', () => {
  void test('helloWorld is a function', (t: TestContext) => {
    t.assert.strictEqual(
      'function',
      typeof helloWorld,
      'helloWorld should be a function',
    );
  });

  void test('helloWorld logs a string', (t: TestContext) => {
    const mockLog = t.mock.method(console, 'log');
    helloWorld();
    t.assert.strictEqual(
      mockLog.mock.calls.length,
      1,
      'console.log should be called once',
    );
    t.assert.strictEqual(
      mockLog.mock.calls[0]?.arguments.length,
      1,
      'console.log should be called with one argument',
    );
    t.assert.strictEqual(
      typeof mockLog.mock.calls[0]?.arguments[0],
      'string',
      'console.log argument should be a string',
    );
    t.mock.reset();
  });
});
