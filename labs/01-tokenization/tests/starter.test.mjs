import { test } from 'node:test';
import { analyze, compare } from '../starter/tokenize.mjs';
import { verifyContract } from './contract.mjs';

test('el ejercicio tokeniza y compara con cl100k_base', () => verifyContract(analyze, compare));
