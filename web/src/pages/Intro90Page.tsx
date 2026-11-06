import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { StepCard } from '../components/StepCard';
import { completeLesson } from '../data/progress';
import { intro90, resolveIntro90 } from '../data/intro90';

const slides = resolveIntro90();
export function Intro90Page() {
 const [index, setIndex] = useState(0);
 const [help, setHelp] = useState(false);
 const navigate = useNavigate();
 const current = slides[index];
 const elapsed = intro90.slice(0, current.segmentIndex).reduce((sum, segment) => sum + segment.minutes, 0);
 const move = useCallback((delta: number) => setIndex((value) => Math.max(0, Math.min(slides.length - 1, value + delta))), []);
 useEffect(() => {
   const handler = (event: KeyboardEvent) => {
     if (event.target instanceof HTMLElement && event.target.closest('input, textarea, select, button, [contenteditable="true"], [role="slider"]')) return;
     if (event.altKey || event.ctrlKey || event.metaKey) return;
     if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
     else if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
     else if (event.key === 'Escape') navigate('/curso');
     else if (event.key.toLowerCase() === 'f') { if (document.fullscreenElement) void document.exitFullscreen?.().catch(() => {}); else void document.documentElement.requestFullscreen?.().catch(() => {}); }
     else if (event.key === '?') setHelp((value) => !value);
   };
   window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler);
 }, [move, navigate]);
 return <div className="presentation">
   <header className="present-header"><Link className="present-brand" to="/curso" aria-label="Salir del recorrido">✳ ia/fundamentals</Link><span className="present-section">INTRO 90 · {current.segment.title}</span><span className="present-counter">{index + 1} / {slides.length}</span></header>
   <div className="present-track" aria-hidden="true"><span style={{width: (index + 1) / slides.length * 100 + '%'}} /></div>
   <main className="present-main" id="main"><div className="present-step" key={current.lesson.id + current.step.id}>
     <div className="eyebrow">{current.segment.title} · {current.segment.minutes} MIN · MINUTO ORIENTATIVO {elapsed}–{elapsed + current.segment.minutes}</div>
     <StepCard lesson={current.lesson} step={current.step} onComplete={() => completeLesson(current.lesson.slug)} />
     <details className="presenter-notes"><summary>Notas del presentador (ocultas por defecto)</summary><p>{current.segment.note}</p>{current.step.presenterNote && <p>{current.step.presenterNote}</p>}</details>
     <p><Link to={'/curso/' + current.lesson.slug}>Ver lección completa ↗</Link></p>
   </div>{help && <aside className="present-help"><strong>Atajos</strong><p>← → Cambiar paso · Esc Salir · F Pantalla completa · ? Ayuda</p><button className="btn btn-muted" onClick={() => setHelp(false)}>Cerrar</button></aside>}</main>
   <footer className="present-footer"><button className="btn btn-muted" onClick={() => setHelp(!help)}>? Ayuda</button><label>Segmento <select value={current.segmentIndex} onChange={(event) => setIndex(slides.findIndex((slide) => slide.segmentIndex === Number(event.target.value)))}>{intro90.map((segment, i) => <option key={segment.title} value={i}>{segment.title} · {segment.minutes} min</option>)}</select></label><div className="present-actions"><button className="btn btn-muted" disabled={index === 0} onClick={() => move(-1)}>← Anterior</button><button className="btn btn-primary" disabled={index === slides.length - 1} onClick={() => move(1)}>Siguiente →</button></div></footer>
 </div>;
}
