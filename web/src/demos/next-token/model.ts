export type Candidate = { text: string; probability: number };

export const prefix = 'Esta mañana el cielo está';

export const examples: Candidate[][] = [
  [{ text: ' despejado', probability: 65 }, { text: ' nublado', probability: 25 }, { text: ' gris', probability: 10 }],
  [{ text: ' y', probability: 80 }, { text: ' pero', probability: 15 }, { text: '.', probability: 5 }],
  [{ text: ' hace', probability: 55 }, { text: ' parece', probability: 30 }, { text: ' sigue', probability: 15 }],
  [{ text: ' calor.', probability: 50 }, { text: ' frío.', probability: 35 }, { text: ' viento.', probability: 15 }],
];

export function candidatesForStep(step: number): Candidate[] {
  return examples[step] ?? [];
}
export function isValidCandidate(step: number, value: string): boolean {
  return candidatesForStep(step).some((candidate) => candidate.text === value);
}
