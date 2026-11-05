import { useState } from 'react';
import type { QuizQuestion } from '../data/lessons';

type Props = { questions: QuizQuestion[]; onComplete?: () => void };

export function Quiz({ questions, onComplete }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const current = questions[index];
  const answer = current ? answers[current.id] : undefined;
  const score = questions.filter((question) => answers[question.id] === question.correctId).length;

  if (questions.length === 0) return null;

  function finish() {
    setFinished(true);
    onComplete?.();
  }

  function reset() {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }

  if (finished) {
    return (
      <section className="quiz-panel" aria-label="Resultado del repaso">
        <div className="quiz-eyebrow">REPASO FINALIZADO</div>
        <h3>¡Terminaste el repaso!</h3>
        <p>Respondiste correctamente <strong>{score} de {questions.length}</strong> preguntas. Podés volver a intentarlo para reforzar los conceptos.</p>
        <button className="btn btn-primary" onClick={reset}>Repetir preguntas</button>
      </section>
    );
  }

  return (
    <section className="quiz-panel" aria-label="Preguntas de repaso">
      <div className="quiz-header"><span className="quiz-eyebrow">COMPROBÁ LO APRENDIDO</span><span>Pregunta {index + 1} de {questions.length}</span></div>
      <div className="quiz-progress" aria-hidden="true"><span style={{ width: `${((index + 1) / questions.length) * 100}%` }} /></div>
      <h3>{current.question}</h3>
      <div className="quiz-options">
        {current.options.map((option) => {
          const chosen = answer === option.id;
          const correct = option.id === current.correctId;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={chosen}
              className={`quiz-option ${chosen ? (correct ? 'is-correct' : 'is-incorrect') : ''`}
              onClick={() => setAnswers((previous) => ({ ...previous, [current.id]: option.id }))}>
              <span className="option-indicator">{chosen ? (correct ? '✓' : '×') : '○'}</span>
              {option.label}
            </button>
          );
        })}
      </div>
      {answer && <div className="quiz-feedback" role="status"><strong>{answer === current.correctId ? '¡Correcto!' : 'Revisemos el concepto'}</strong><p>{current.explanation}</p></div>}
      <div className="quiz-controls">
        <button className="btn btn-muted" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0}>← Anterior</button>
        {index < questions.length - 1
          ? <button className="btn btn-primary" disabled={!answer} onClick={() => setIndex((value) => value + 1)}>Siguiente →</button>
          : <button className="btn btn-primary" disabled={!answer} onClick={finish}>Finalizar repaso ✓</button>}
      </div>
    </section>
  );
}
