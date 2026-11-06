import assert from 'node:assert/strict';

export function verifyContract(analyze, compare) {
  // IDs conocidos para cl100k_base: comprueban la codificación, no solo el conteo.
  assert.deepEqual(analyze('hello'), { text: 'hello', ids: [15339], count: 1 });
  assert.deepEqual(analyze(''), { text: '', ids: [], count: 0 });
  const result = compare(['hello', 'hello world']);
  assert.deepEqual(result.map((item) => item.text), ['hello', 'hello world']);
  assert.deepEqual(result[1].ids, [15339, 1917]);
  assert.equal(result[1].count, 2);
  // La frase se conserva incluso cuando contiene Unicode y los IDs son enteros.
  const unicode = analyze('¡Hola! 🧠');
  assert.equal(unicode.text, '¡Hola! 🧠');
  assert.equal(unicode.count, unicode.ids.length);
  assert.ok(unicode.ids.every(Number.isInteger));
}
