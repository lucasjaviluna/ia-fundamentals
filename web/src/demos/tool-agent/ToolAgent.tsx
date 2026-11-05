import { useState } from 'react';

export function ToolDemo() {
  const [order, setOrder] = useState('A-101');
  const [step, setStep] = useState(0);
  const result = order === 'A-101' ? 'En preparación' : 'En camino';
  const stages = [
    { title: 'Solicitud de la persona', detail: '¿Cuál es el estado del pedido ' + order + '?' },
    { title: 'Llamada propuesta por el modelo', detail: 'getOrderStatus({ "id": "' + order + '" })' },
    { title: 'Validación simulada y resultado', detail: 'La aplicación ficticia valida el ID y devuelve: ' + result + '.' },
    { title: 'Respuesta ilustrativa', detail: 'El pedido ' + order + ' está: ' + result.toLowerCase() + '.' },
  ];
  return <section className="demo-panel" aria-label="Simulación de llamada a herramienta">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · DATOS FICTICIOS</div>
    <p className="demo-intro">Elegí un pedido y recorré la llamada. No se ejecuta una herramienta real ni se consulta un servicio.</p>
    <label className="field-label" htmlFor="order-id">Pedido ficticio</label><select className="token-textarea" style={{ minHeight: 'auto' }} id="order-id" value={order} onChange={(event) => { setOrder(event.target.value); setStep(0); }}><option>A-101</option><option>B-202</option></select>
    <div className="sentence-preview" aria-live="polite"><strong>{stages[step].title}</strong><p>{stages[step].detail}</p></div>
    <div className="demo-actions"><button className="btn btn-muted" disabled={step === 0} onClick={() => setStep(step - 1)}>← Anterior</button><button className="btn btn-primary" disabled={step === stages.length - 1} onClick={() => setStep(step + 1)}>Siguiente →</button><button className="btn btn-ghost" onClick={() => setStep(0)}>Reiniciar</button></div>
    <p className="demo-footnote">La validación mostrada es ficticia; una aplicación real debe comprobar permisos, argumentos y errores.</p>
  </section>;
}

export function AgentDemo() {
  const [step, setStep] = useState(0);
  const [decision, setDecision] = useState<'approved' | 'rejected' | null>(null);
  const stages = [
    { title: '1 · Planificar', detail: 'Objetivo ficticio: consultar un pedido y proponer un aviso al cliente.' },
    { title: '2 · Actuar', detail: 'La aplicación simula consultar el estado del pedido A-101.' },
    { title: '3 · Observar', detail: 'Resultado ficticio: el pedido está en preparación. El sistema propone redactar un aviso.' },
    { title: '4 · Validar', detail: 'La propuesta requiere aprobación humana antes del envío. Elegí aprobar o rechazar.' },
  ];
  return <section className="demo-panel" aria-label="Traza ilustrativa de un agente">
    <div className="demo-label"><span className="live-dot" /> SIMULACIÓN EDUCATIVA · TRAZA PREPARADA</div>
    <p className="demo-intro">Recorré los pasos y decidí la aprobación. No se ejecuta un agente ni se envía un mensaje.</p>
    <div className="sentence-preview" aria-live="polite"><strong>{stages[step].title}</strong><p>{stages[step].detail}</p></div>
    {step === 3 && <><div className="demo-actions"><button className="btn btn-primary" onClick={() => setDecision('approved')}>Aprobar</button><button className="btn btn-muted" onClick={() => setDecision('rejected')}>Rechazar</button></div>{decision && <div className="success-note" role="status">{decision === 'approved' ? 'Aprobación registrada en la simulación; no se envió ningún mensaje.' : 'Acción rechazada: no se ejecuta ni se envía ningún mensaje.'}</div>}</>}
    <div className="demo-actions"><button className="btn btn-muted" disabled={step === 0} onClick={() => { setStep(step - 1); setDecision(null); }}>← Anterior</button><button className="btn btn-primary" disabled={step === stages.length - 1} onClick={() => setStep(step + 1)}>Siguiente →</button><button className="btn btn-ghost" onClick={() => { setStep(0); setDecision(null); }}>Reiniciar</button></div>
    <p className="demo-footnote">En un sistema real, permisos, límites de pasos y manejo de errores se implementan explícitamente.</p>
  </section>;
}
