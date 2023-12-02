import test from 'ava';
import {helloWorld} from '../src/index.ts';

test('helloWorld is a function', t => {
  t.is(typeof helloWorld, 'function');
});
