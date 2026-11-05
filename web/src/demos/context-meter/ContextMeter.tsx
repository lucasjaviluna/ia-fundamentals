import { useState } from 'react';

const limit = 1000;
export function ContextMeter() {
  const [instructions, setInstructions] = useState(200);
  const [history, setHistory] = useState(400);
  const [output, setOutput] = useState(200);
  const [compact, setCompact] = useState(false);
  const compactedHistory = Math.ceil(history / 100) * 50;
  const effectiveHistory = compact ? compactedHistory : history;
  const total = instructions + effectiveHistory + output;
  const remaining = limit - total;
  return <section className="demo-panel" aria-label="Medidor ilustrativo de contexto">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · LÍMITE FICTICIO</div>
    <p className="demo-intro">Ajustá el presupuesto en tokens ficticios. El límite de {limit} no representa ningún modelo; no se tokeniza texto real.</p>
    {[{ id: 'instructions', label: 'Instrucciones y datos', value: instructions, set: setInstructions }, { id: 'history', label: 'Historial', value: history, set: setHistory }, { id: 'output', label: 'Reserva de salida', value: output, set: setOutput }].map((field) => <div key={field.id}><label className="field-label" htmlFor={field.id}>{field.label}: {field.value} tokens</label><input id={field.id} type="range" min="0" max="1000" step="50" value={field.value} onChange={(event) => { const value = Number(event.target.value); field.set(value); if (field.id === 'history' && value === 0) setCompact(false); }} /></div>)}
    <div className="demo-actions"><button className="btn btn-muted" aria-pressed={compact} disabled={history === 0} onClick={() => setCompact((value) => !value)}>{compact ? 'Deshacer compactación' : 'Compactar historial'}</button></div>
    {compact && <div className="quiz-feedback"><strong>Historial simulado: {history} → {effectiveHistory} tokens ficticios</strong><p>Para ilustrar el ahorro, esta simulación reduce el historial aproximadamente a la mitad. La proporción real depende de la implementación.</p><p><strong>Ejemplo preparado:</strong> «El informe vence el viernes y debe excluir datos personales» se resume como «Preparar el informe para el viernes».</p><p>El resumen omitió la restricción de privacidad. Compactar no garantiza conservar todos los detalles ni equivale a memoria externa.</p></div>}
    <div className="demo-subheading">Uso: {total} / {limit} tokens ficticios</div>
    <div className="meter-track" aria-hidden="true"><span className="meter-fill" style={{ width: (Math.min(100, total / limit * 100)) + '%' }} /></div>
    <div className={remaining < 0 ? 'warning-note' : 'success-note'} role="status">{remaining < 0 ? 'Se supera el límite por ' + (-remaining) + ' tokens. La aplicación podría rechazar, recortar o resumir; la opción de compactación es solo un ejemplo.' : 'Quedan ' + remaining + ' tokens disponibles en este ejemplo.'}</div>
    <div className="demo-actions"><button className="btn btn-ghost" onClick={() => { setInstructions(200); setHistory(400); setOutput(200); setCompact(false); }}>Reiniciar</button></div>
    <p className="demo-footnote">Los límites reales y el presupuesto de salida dependen del modelo y de la aplicación.</p>
  </section>;
}
