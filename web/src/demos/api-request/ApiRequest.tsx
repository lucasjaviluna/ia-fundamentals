import { useState } from 'react';
const examples = [
  { name: 'Texto', request: { model: 'modelo-ejemplo', input: { type: 'text', text: 'Resumí: El equipo lanzará un piloto.' }, max_output_tokens: 100 }, response: { output: 'El equipo lanzará un piloto.' } },
  { name: 'Imagen y texto', request: { model: 'modelo-multimodal-ejemplo', input: [{ type: 'text', text: 'Describí la imagen.' }, { type: 'image', reference: 'imagen-ficticia' }], max_output_tokens: 100 }, response: { output: 'Una ilustración de una bicicleta.' } },
];
export function ApiRequest() {
  const [index, setIndex] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const example = examples[index];
  return <section className="demo-panel" aria-label="Solicitud ilustrativa a una API">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · SIN API</div>
    <p className="demo-intro">Elegí una modalidad y examiná los datos preparados. Los campos son ilustrativos, no corresponden a un proveedor y no se envía ninguna petición.</p>
    <label className="field-label" htmlFor="api-example">Entrada</label><select className="token-textarea" style={{ minHeight: 'auto' }} id="api-example" value={index} onChange={(event) => { setIndex(Number(event.target.value)); setShowResponse(false); }}>{examples.map((item, i) => <option key={item.name} value={i}>{item.name}</option>)}</select>
    <div className="demo-subheading">Solicitud JSON ficticia</div><pre className="api-json">{JSON.stringify(example.request, null, 2)}</pre>
    <div className="demo-actions"><button className="btn btn-muted" onClick={() => setShowResponse(!showResponse)}>{showResponse ? 'Ocultar respuesta' : 'Mostrar respuesta'}</button></div>
    {showResponse && <div aria-live="polite"><div className="demo-subheading">Respuesta JSON preparada</div><pre className="api-json">{JSON.stringify(example.response, null, 2)}</pre></div>}
    <p className="demo-footnote">Una API real tiene su propio formato, requiere configuración y puede devolver errores o generar costos.</p>
  </section>;
}
