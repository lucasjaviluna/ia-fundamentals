import { useState } from 'react';
import { candidatesForStep, examples, isValidCandidate, prefix } from './model';

export function NextTokenSimulator() {
  const [selected, setSelected] = useState<string[]>([]);
  const choices = candidatesForStep(selected.length);
  const complete = selected.length === examples.length;

  function pick(value: string) {
    if (isValidCandidate(selected.length, value)) setSelected((current) => [...current, value]);
  }

  return (
    <section className="demo-panel" aria-label="Simulador ilustrativo de siguiente token">
      <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · DATOS FICTICIOS</div>
      <p className="demo-intro">Elegí cómo continuar la frase. Las barras representan probabilidades <strong>inventadas</strong> para enseñar el concepto: no son predicciones de un LLM ni tokens reales.</p>
      <div className="sentence-preview" aria-live="polite">
        {prefix}<span className="sentence-added">{selected.join('')}</span><span className="sentence-cursor" aria-hidden="true">▍</span>
      </div>
      {!complete ? (
        <>
          <div className="demo-subheading">Posibles continuaciones · Paso {selected.length + 1} de {examples.length}</div>
          <div className="candidate-list">
            {choices.map((candidate) => (
              <button className="candidate" key={candidate.text} onClick={() => pick(candidate.text)}>
                <span className="candidate-top"><span>«{candidate.text.trim()}»</span><strong>{candidate.probability}%</strong></span>
                <span className="meter-track"><span className="meter-fill" style={{ width: `${candidate.probability}%` }} /></span>
              </button>
            ))}
          </div>
        </>
      ) : <div className="success-note" role="status">Completaste una secuencia. Otra selección podría haber producido un texto distinto.</div>}
      <div className="demo-actions">
        <button className="btn btn-muted" onClick={() => setSelected((current) => current.slice(0, -1))} disabled={selected.length === 0}>← Retroceder</button>
        <button className="btn btn-ghost" onClick={() => setSelected([])} disabled={selected.length === 0}>Reiniciar</button>
      </div>
      <p className="demo-footnote">En un modelo real los candidatos son IDs de tokens y las distribuciones dependen del modelo, del contexto y del proceso de generación.</p>
    </section>
  );
}
