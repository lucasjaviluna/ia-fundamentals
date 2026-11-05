import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { lessonBySlug } from '../data/lessons';
import { completeLesson } from '../data/progress';
import { KeyTakeaways, StepCard } from '../components/StepCard';

function isEditableTarget(target: EventTarget | null): boolean {
  return target instanceof HTMLElement && Boolean(target.closest('input, textarea, select, button, [contenteditable="true"], [role="slider"]'));
}

export function PresentationPage() {
  const { slug = '' } = useParams();
  const lesson = lessonBySlug(slug);
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const total = (lesson?.steps.length ?? 0) + 2;

  useEffect(() => { setSlide(0); setShowHelp(false); }, [slug]);
  const move = useCallback((direction: number) => setSlide((value) => Math.max(0, Math.min(total - 1, value + direction))), [total]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target) || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      else if (event.key === 'Escape') { navigate(`/curso/${slug`); }
      else if (event.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) void document.exitFullscreen?.().catch(() => {});
        else void document.documentElement.requestFullscreen?.().catch(() => {});
      } else if (event.key === '?') { setShowHelp((value) => !value); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [move, navigate, slug]);

  if (!lesson) return <div className="presentation"><p>Esta lección no está disponible.</p><Link to="/curso">Volver al curso</Link></div>;
  const step = lesson.steps[slide - 1];
  return (
    <div className="presentation">
      <header className="present-header">
        <Link className="present-brand" to={`/curso/${lesson.slug`} aria-label="Salir del modo presentación">✳ ia/fundamentals</Link>
        <span className="present-section">LECCIÓN {String(lesson.number).padStart(2, '0')} · {lesson.title}</span>
        <span className="present-counter">{slide + 1} / {total}</span>
      </header>
      <div className="present-track" aria-hidden="true"><span style={{ width: `${(slide + 1) / total * 100}%` }} /></div>
      <main className="present-main" id="main">
        {slide === 0 && (
          <section className="present-intro">
            <div className="eyebrow">LA PREGUNTA QUE VAMOS A RESPONDER</div>
            <h1>{lesson.question}</h1>
            <p>{lesson.description}</p>
            <div className="present-highlight"><span>IDEA CENTRAL</span>{lesson.keyIdea}</div>
          </section>
        )}
        {step && <div className="present-step" key={step.id}><StepCard lesson={lesson} step={step} onComplete={() => completeLesson(lesson.slug)} />{step.presenterNote && <details className="presenter-notes"><summary>Notas del presentador (ocultas por defecto)</summary><p>{step.presenterNote}</p></details>}</div>}
        {slide === total - 1 && <div className="present-summary"><KeyTakeaways lesson={lesson} /><div className="present-summary-links"><Link to={`/labs/${lesson.labSlug`}>Explorar laboratorio ↗</Link><Link to="/curso">Ver mapa del curso ↗</Link></div></div>}
        {showHelp && <aside className="present-help"><strong>Atajos</strong><p>← → Cambiar paso · Esc Salir · F Pantalla completa · ? Ayuda</p><button className="btn btn-muted" onClick={() => setShowHelp(false)}>Cerrar</button></aside>}
      </main>
      <footer className="present-footer">
        <button className="btn btn-muted" onClick={() => setShowHelp((value) => !value)} aria-label="Mostrar ayuda de navegación">? Ayuda</button>
        <span className="present-hint">Usá las flechas del teclado para avanzar</span>
        <div className="present-actions"><button className="btn btn-muted" disabled={slide === 0} onClick={() => move(-1)}>← Anterior</button><button className="btn btn-primary" disabled={slide === total - 1} onClick={() => move(1)}>Siguiente →</button></div>
      </footer>
    </div>
  );
}
