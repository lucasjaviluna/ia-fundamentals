import { demoResponse, requestResponse } from './client.mjs';
const mode = process.argv[2] ?? 'demo';
const input = process.argv.slice(3).join(' ') || 'Explicá qué es una API en una frase.';
try {
  if (mode === 'demo') {
    const result = demoResponse(); console.log('SIMULACIÓN LOCAL: ' + result.text);
  } else if (mode === 'real') {
    const result = await requestResponse({ apiKey: process.env.OPENAI_API_KEY, model: process.env.OPENAI_MODEL, input });
    console.log('MODELO REAL: ' + result.text);
  } else { throw new Error('Uso: node cli.mjs demo | real [texto]'); }
} catch (error) { console.error('Error: ' + error.message); process.exitCode = 1; }
