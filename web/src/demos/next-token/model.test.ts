import { describe, expect, it } from 'vitest';
import { candidatesForStep, examples, isValidCandidate } from './model';

describe('simulador educativo', () => {
  it('usa cuatro distribuciones fijas y normalizadas', () => {
    expect(examples).toHaveLength(4);
    for (const choices of examples) {
      expect(choices.reduce((sum, item) => sum + item.probability, 0)).toBe(100);
    }
  });

  it('solo acepta candidatos del paso actual', () => {
    expect(isValidCandidate(0, ' despejado')).toBe(true);
    expect(isValidCandidate(0, ' calor.')).toBe(false);
    expect(candidatesForStep(99)).toEqual([]);
  });
});
