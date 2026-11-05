import { ContextMeter } from '../demos/context-meter/ContextMeter';
import { PromptPlayground } from '../demos/prompt-playground/PromptPlayground';
import { LLMFlow } from '../demos/llm-flow/LLMFlow';
import { AIClassifier } from '../demos/ai-classifier/AIClassifier';
import { lazy, Suspense } from 'react';
import { Quiz } from './Quiz';
import { NextTokenSimulator } from '../demos/next-token/NextTokenSimulator';
import type { Lesson, LessonStep } from '../data/lessons';

const TokenizerExplorer = lazy(async () => {
  const module = await import('../demos/tokenizer/TokenizerExplorer');
  return { default: module.TokenizerExplorer };
});

export function LessonDemo({ lesson }: { lesson: Lesson }) {
  return lesson.id === 'contexto' ? <ContextMeter /> : lesson.id === 'prompts' ? <PromptPlayground /> : lesson.id === 'funcionamiento-llm' ? <LLMFlow /> : lesson.id === 'mapa-ia' ? <AIClassifier /> : lesson.id === 'llm'
    ? <NextTokenSimulator />
    : <Suspense fallback={<p className="demo-loading">Preparando el laboratorio…</p>}><TokenizerExplorer /></Suspense>;
}

export function StepCard({ lesson, step, onComplete }: { lesson: Lesson; step: LessonStep; onComplete?: () => void }) {
  return (
    <article className={`lesson-step step-${step.kind}`} id={step.id}>
      <div className="step-eyebrow">{step.eyebrow}</div>
      <h2>{step.title}</h2>
      <p className="step-description">{step.description}</p>
      {step.bullets && <ul className="step-bullets">{step.bullets.map((point) => <li key={point}>{point}</li>)}</ul>}
      {step.kind === 'demo' && <LessonDemo lesson={lesson} />}
      {step.kind === 'quiz' && <Quiz key={lesson.id} questions={lesson.quiz} onComplete={onComplete} />}
    </article>
  );
}

export function KeyTakeaways({ lesson }: { lesson: Lesson }) {
  return (
    <section className="takeaways">
      <div className="step-eyebrow">PARA RECORDAR</div>
      <h2>Tres ideas clave</h2>
      <ol>{lesson.takeaways.map((takeaway, index) => <li key={takeaway}><span>{String(index + 1).padStart(2, '0')}</span>{takeaway}</li>)}</ol>
    </section>
  );
}
