import { useState } from 'react';

const cases = [
  { text: 'Un sistema sigue reglas escritas por expertos para recomendar una acción. ¿Qué campo amplio describe el caso?', answer: 'IA', explanation: 'Un sistema basado en reglas puede ser IA sin aprender de datos.' },
  { text: 'Un filtro aprende de ejemplos de correo no deseado. ¿Qué enfoque destaca?', answer: 'Machine learning', explanation: 'Aprender patrones a partir de ejemplos es característico de machine learning.' },
  { text: 'Un sistema reconoce objetos usando una red neuronal de muchas capas. ¿Qué método destaca?', answer: 'Deep learning', explanation: 'Las redes neuronales profundas son métodos de deep learning, una familia de machine learning.' },
  { text: 'Una herramienta crea una imagen a partir de una descripción. ¿Qué capacidad destaca?', answer: 'IA generativa', explanation: 'Generar una imagen es una capacidad generativa; el sistema también podría usar deep learning.' },
];
const choices = ['IA', 'Machine learning', 'Deep learning', 'IA generativa'];

export function AIClassifier() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const item = cases[index];
  return <section className="demo-panel" aria-label="Clasificador de conceptos de IA">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · CASOS PREPARADOS</div>
    <p className="demo-intro">Elegí la categoría que mejor responde a la pregunta. Las categorías pueden superponerse; el ejemplo destaca una característica.</p>
    <div className="demo-subheading">Caso {index + 1} de {cases.length}</div>
    <p>{item.text}</p>
    <div className="candidate-list">{choices.map((choice) => <button key={choice} className="candidate" aria-pressed={selected === choice} onClick={() => setSelected(choice)}>{choice}</button>)}</div>
    {selected && <div className="success-note" role="status"><strong>{selected === item.answer ? 'Correcto.' : 'Revisá la característica destacada.'}</strong> {item.explanation}</div>}
    <div className="demo-actions"><button className="btn btn-muted" disabled={index === 0} onClick={() => { setIndex(index - 1); setSelected(null); }}>← Anterior</button><button className="btn btn-primary" disabled={index === cases.length - 1} onClick={() => { setIndex(index + 1); setSelected(null); }}>Siguiente →</button><button className="btn btn-ghost" onClick={() => { setIndex(0); setSelected(null); }}>Reiniciar</button></div>
    <p className="demo-footnote">Estos casos simplificados no clasifican sistemas reales ni ejecutan un modelo de IA.</p>
  </section>;
}
