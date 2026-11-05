import { useState } from 'react';

const cases = [
  { name: 'Fecha de entrega', claim: 'El informe se entrega el lunes 14.', source: 'Nota interna ficticia: «La entrega está prevista para el viernes 18».', supported: false, explanation: 'La nota indica otra fecha: la afirmación contradice la evidencia preparada.' },
  { name: 'Alcance de una encuesta', claim: 'En la encuesta piloto de 20 personas, 12 prefirieron la opción A.', source: 'Resultados ficticios del piloto: 12 de 20 participantes eligieron A; 8 eligieron B.', supported: true, explanation: 'La fuente preparada respalda esa afirmación para el grupo encuestado; no demuestra que toda la población prefiera A.' },
  { name: 'Cita no comprobada', claim: 'El informe afirma que el proyecto redujo los costes un 40 %.', source: 'Fragmento ficticio disponible: «El proyecto se lanzó en marzo». No contiene datos de costes.', supported: false, explanation: 'El fragmento disponible no respalda el porcentaje. Puede existir otra fuente, pero aquí no hay evidencia suficiente.' },
];
export function ReliabilityExplorer() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<boolean | null>(null);
  const item = cases[index];
  return <section className="demo-panel" aria-label="Explorador de evidencias">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · CASOS FICTICIOS</div>
    <p className="demo-intro">Compará la afirmación con el fragmento preparado. No consulta fuentes externas ni ejecuta un modelo.</p>
    <label className="field-label" htmlFor="evidence-case">Caso</label>
    <select className="token-textarea" id="evidence-case" value={index} onChange={(event) => { setIndex(Number(event.target.value)); setChoice(null); }} style={{ minHeight: 'auto' }}>{cases.map((item, i) => <option key={item.name} value={i}>{item.name}</option>)}</select>
    <div className="demo-subheading">Respuesta ilustrativa</div><p>{item.claim}</p>
    <div className="demo-subheading">Evidencia disponible</div><p>{item.source}</p>
    <p>¿La evidencia disponible respalda la afirmación?</p>
    <div className="demo-actions"><button className="btn btn-muted" onClick={() => setChoice(true)}>Sí, la respalda</button><button className="btn btn-muted" onClick={() => setChoice(false)}>No está respaldada</button></div>
    {choice !== null && <div className="quiz-feedback" role="status"><strong>{choice === item.supported ? 'Correcto.' : 'Revisá la evidencia.'}</strong><p>{item.explanation}</p></div>}
    <p className="demo-footnote">Los ejemplos y sus fuentes son ficticios. En la práctica, verificá la procedencia y el contenido de fuentes reales.</p>
  </section>;
}
