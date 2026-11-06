import { test } from 'node:test';
import { demoResponse, requestResponse } from '../solution/client.mjs';
import { verify } from './contract.mjs';
test('modo local y petición con transporte simulado', async () => verify(demoResponse, requestResponse));
