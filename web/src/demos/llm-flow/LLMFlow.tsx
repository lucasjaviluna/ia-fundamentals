import { useState } from 'react';

const stages = [
  { title: '1 · Entrada', description: 'Una persona escribe: «Completá: El cielo es…».' },
  { title: '2 · Tokenización', description: 'La aplicación convierte el texto en IDs de tokens según el tokenizador del modelo. No mostramos IDs reales en este ejemplo.' },
  { title: '3 · Modelo', description: 'El modelo procesa la secuencia y estima posibles próximos tokens a partir del contexto y sus parámetros entrenados.' },
  { title: '4 · Generación y salida', description: 'Se seleccionan tokens sucesivos y se decodifican como texto, por ejemplo «azul». La respuesta puede variar según el modelo y la configuración.' },
];

export function LLMFlow() {
  const [index, setIndex] = useState(0);
  return <section className="demo-panel" aria-label="Recorrido ilustrativo de un LLM">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · EJEMPLO PREPARADO</div>
    <p className="demo-intro">Observá un recorrido simplificado. No se ejecuta un modelo ni se calculan tokens reales.</p>
    <div className="sentence-preview" aria-live="polite"><strong>{stages[index].title}</strong><p>{stages[index].description}</p></div>
    <div className="demo-actions"><button className="btn btn-muted" disabled={index === 0} onClick={() => setIndex(index - 1)}>← Anterior</button><button className="btn btn-primary" disabled={index === stages.length - 1} onClick={() => setIndex(index + 1)}>Siguiente →</button><button className="btn btn-ghost" onClick={() => setIndex(0)}>Reiniciar</button></div>
    <p className="demo-footnote">El ejemplo ilustra etapas generales; no muestra todos los cálculos internos ni predicciones reales.</p>
  </section>;
}
