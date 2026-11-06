import { describe, expect, it } from 'vitest';
import { intro90, resolveIntro90 } from './intro90';
describe('recorrido introductorio', () => {
 it('suma 90 minutos y resuelve todos los pasos sin duplicar contenido', () => {
   expect(intro90.reduce((sum, segment) => sum + segment.minutes, 0)).toBe(90);
   const slides = resolveIntro90();
   expect(slides.length).toBeGreaterThan(10);
   expect(new Set(slides.map(({lesson, step}) => lesson.slug + '/' + step.id)).size).toBe(slides.length);
   expect(new Set(slides.map(({segmentIndex}) => segmentIndex)).size).toBe(intro90.length);
 });
});
