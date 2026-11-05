import { useState } from 'react';

const skillStages = [
  { title: '1 · Descripción', detail: 'revisar-codigo: usar para revisar cambios de código y comunicar hallazgos.' },
  { title: '2 · Instrucciones de SKILL.md', detail: 'Leer los cambios; identificar riesgos y pruebas faltantes; informar hallazgos con evidencia.' },
  { title: '3 · Recursos opcionales', detail: 'references/lista-revision.md: guía ficticia con criterios de seguridad y pruebas.' },
  { title: '4 · Aplicación', detail: 'El agente seguiría las instrucciones pertinentes y respetaría los permisos del entorno.' },
];
export function SkillsDemo() {
  const [step, setStep] = useState(0);
  return <section className="demo-panel" aria-label="Explorador de skill ilustrativa">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · SKILL FICTICIA</div>
    <p className="demo-intro">Recorré una skill preparada. No se lee ningún archivo ni se ejecutan scripts.</p>
    <div className="sentence-preview" aria-live="polite"><strong>{skillStages[step].title}</strong><p>{skillStages[step].detail}</p></div>
    <div className="demo-actions"><button className="btn btn-muted" disabled={step === 0} onClick={() => setStep(step - 1)}>← Anterior</button><button className="btn btn-primary" disabled={step === skillStages.length - 1} onClick={() => setStep(step + 1)}>Siguiente →</button><button className="btn btn-ghost" onClick={() => setStep(0)}>Reiniciar</button></div>
    <p className="demo-footnote">La activación y los permisos dependen de la aplicación y el entorno.</p>
  </section>;
}
const capabilities = [
  { name: 'Tool', request: 'tools/call: consultarPedido({ id: "A-101" })', response: 'Resultado ficticio: pedido en preparación.', explanation: 'Una herramienta representa una operación invocable.' },
  { name: 'Resource', request: 'resources/read: pedidos://guia', response: 'Contenido ficticio: guía para interpretar estados de pedidos.', explanation: 'Un recurso representa información identificada que puede leerse.' },
  { name: 'Prompt', request: 'prompts/get: resumenPedido', response: 'Plantilla ficticia: resumí el estado del pedido indicado.', explanation: 'Un prompt expone una plantilla o mensaje reutilizable.' },
];
export function McpDemo() {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const item = capabilities[index];
  const stages = [{ title: '1 · Conexión y descubrimiento', detail: 'El host conecta un cliente con un servidor ficticio y descubre la capacidad ' + item.name + '.' }, { title: '2 · Solicitud ilustrativa', detail: item.request }, { title: '3 · Respuesta ilustrativa', detail: item.response + ' ' + item.explanation }];
  return <section className="demo-panel" aria-label="Explorador ilustrativo de MCP">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · SIN SERVIDOR</div>
    <p className="demo-intro">Explorá un intercambio simplificado entre host, cliente y servidor ficticios. No hay conexión ni llamada real.</p>
    <label className="field-label" htmlFor="mcp-capability">Capacidad</label><select className="token-textarea" style={{ minHeight: 'auto' }} id="mcp-capability" value={index} onChange={(event) => { setIndex(Number(event.target.value)); setStep(0); }}>{capabilities.map((capability, i) => <option key={capability.name} value={i}>{capability.name}</option>)}</select>
    <div className="sentence-preview" aria-live="polite"><strong>{stages[step].title}</strong><p>{stages[step].detail}</p></div>
    <div className="demo-actions"><button className="btn btn-muted" disabled={step === 0} onClick={() => setStep(step - 1)}>← Anterior</button><button className="btn btn-primary" disabled={step === stages.length - 1} onClick={() => setStep(step + 1)}>Siguiente →</button><button className="btn btn-ghost" onClick={() => setStep(0)}>Reiniciar</button></div>
    <p className="demo-footnote">Las solicitudes están simplificadas; una aplicación real debe comprobar capacidades, permisos y resultados.</p>
  </section>;
}
