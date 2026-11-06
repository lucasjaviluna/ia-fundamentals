import { readFileSync } from 'node:fs';
import { buildPrompts, evaluate } from './prompts.mjs';

const [action, path] = process.argv.slice(2);
if (action === 'prompts') {
  const { vague, structured } = buildPrompts();
  console.log('--- PROMPT ABIERTO ---\n' + vague + '\n\n--- PROMPT ESTRUCTURADO ---\n' + structured);
} else if (action === 'check' && path) {
  try {
    const result = evaluate(readFileSync(path, 'utf8'));
    console.log(JSON.stringify(result, null, 2));
    console.log('Esta comprobación no verifica las afirmaciones; contrastalas manualmente con el README.');
    if (!Object.values(result).every(Boolean)) process.exitCode = 1;
  } catch (error) {
    console.error('No se pudo leer el archivo:', error.message);
    process.exitCode = 1;
  }
} else {
  console.error('Uso: node cli.mjs prompts | check <archivo.json>');
  process.exitCode = 1;
}
