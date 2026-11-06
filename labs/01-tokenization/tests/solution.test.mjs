import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { analyze, compare } from '../solution/tokenize.mjs';
import { verifyContract } from './contract.mjs';

test('la solución tokeniza y compara con cl100k_base', () => verifyContract(analyze, compare));
test('la CLI procesa varios textos y explica el uso si faltan argumentos', () => {
  const cli = fileURLToPath(new URL('../solution/cli.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [cli, 'hello', 'hello world'], { encoding: 'utf8' });
  assert.equal(result.status, 0);
  const lines = result.stdout.trim().split('\n').map(JSON.parse);
  assert.deepEqual(lines.map((item) => item.count), [1, 2]);
  const missing = spawnSync(process.execPath, [cli], { encoding: 'utf8' });
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /Uso:/);
});
