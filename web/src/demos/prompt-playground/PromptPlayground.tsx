import { useState } from 'react';

const examples = [
  { name: 'Resumen para una reunión', vague: 'Resumí esto.', specific: 'Resumí las notas de la reunión para el equipo de producto en tres viñetas: decisiones, responsables y próximos pasos. Si falta un responsable, indicá «no definido».', vagueOutput: 'La reunión trató sobre el lanzamiento y tareas pendientes.', specificOutput: '• Decisión: lanzar una prueba piloto.\n• Responsable: no definido.\n• Próximo paso: preparar el calendario.', observation: 'El segundo pedido define público, estructura y qué hacer ante un dato faltante.' },
  { name: 'Mensaje a clientes', vague: 'Escribí un mensaje.', specific: 'Redactá un aviso breve para clientes sobre una demora de entrega de dos días. Usá tono cordial, no inventes una fecha y cerrá con una disculpa.', vagueOutput: 'Hola, tenemos una novedad para vos.', specificOutput: 'Hola, tu entrega tendrá una demora de dos días. Lamentamos el inconveniente y te avisaremos cuando tengamos más información.', observation: 'El segundo pedido especifica destinatario, hecho, tono y límite sobre datos no proporcionados.' },
];

export function PromptPlayground() {
  const [index, setIndex] = useState(0);
  const item = examples[index];
  return <section className="demo-panel" aria-label="Comparador de prompts">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · RESPUESTAS PREPARADAS</div>
    <p className="demo-intro">Elegí un caso para comparar instrucciones y respuestas ilustrativas. No se ejecuta un modelo y los resultados no son predicciones.</p>
    <label className="field-label" htmlFor="prompt-case">Caso</label>
    <select className="token-textarea" id="prompt-case" value={index} onChange={(event) => setIndex(Number(event.target.value))} style={{ minHeight: 'auto' }}>{examples.map((example, i) => <option key={example.name} value={i}>{example.name}</option>)}</select>
    <div className="demo-subheading">Instrucción abierta</div><p>{item.vague}</p><p><strong>Respuesta ilustrativa:</strong> {item.vagueOutput}</p>
    <div className="demo-subheading">Instrucción más específica</div><p>{item.specific}</p><p style={{ whiteSpace: 'pre-line' }}><strong>Respuesta ilustrativa:</strong> {item.specificOutput}</p>
    <div className="success-note" role="status">{item.observation}</div>
    <p className="demo-footnote">Las respuestas están escritas para ilustrar la comparación; un modelo real puede responder de otra manera y cometer errores.</p>
  </section>;
}
