import { test } from 'node:test';
import { demoResponse, requestResponse } from '../starter/client.mjs';
import { verify } from './contract.mjs';
test('ejercicio de API sin red', async () => verify(demoResponse, requestResponse));
