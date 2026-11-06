import { test } from 'node:test';
import { buildPrompts, evaluate } from '../starter/prompts.mjs';
import { verify } from './contract.mjs';
test('el ejercicio construye prompts y evalúa respuestas', () => verify(buildPrompts, evaluate));
