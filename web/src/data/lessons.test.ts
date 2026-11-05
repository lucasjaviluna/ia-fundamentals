import { describe, expect, it } from 'vitest';
import { blocks, catalog, lessons, lessonBySlug } from './lessons';

describe('catálogo de lecciones', () => {
  it('contiene 16 temas en cuatro bloques', () => {
    expect(catalog).toHaveLength(16);
    expect(blocks).toHaveLength(4);
    expect(new Set(catalog.map((topic) => topic.number)).size).toBe(16);
  });

  it('publica siete lecciones completas y navegables', () => {
    expect(lessons).toHaveLength(7);
    for (const lesson of lessons) {
      expect(lessonBySlug(lesson.slug)).toBe(lesson);
      expect(lesson.steps).toHaveLength(6);
      expect(lesson.steps.some((step) => step.kind === 'demo')).toBe(true);
      expect(lesson.steps.some((step) => step.kind === 'quiz')).toBe(true);
      expect(lesson.quiz).toHaveLength(3);
      expect(lesson.takeaways).toHaveLength(3);
      for (const question of lesson.quiz) {
        expect(question.options.some((option) => option.id === question.correctId)).toBe(true);
      }
    }
  });

  it('evita slugs duplicados', () => {
    expect(new Set(lessons.map((lesson) => lesson.slug)).size).toBe(lessons.length);
  });
});
