import { useEffect, useMemo, useState } from 'react';

type Encoder = { encode: (text: string) => number[]; decode: (ids: number[]) => string };
const samples = [
  { name: 'Español', text: 'La inteligencia artificial aprende patrones.' },
  { name: 'Inglés', text: 'Artificial intelligence learns patterns.' },
  { name: 'Números', text: '2026: 12345 + 67890 = ?' },
  { name: 'Emojis', text: '¡Hola! 🤖✨ ¿Cómo estás?' },
];

export function TokenizerExplorer() {
  const [text, setText] = useState(samples[0].text);
  const [encoder, setEncoder] = useState<Encoder | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    import('js-tiktoken').then(({ getEncoding }) => {
      if (active) setEncoder(getEncoding('cl100k_base'));
    }).catch(() => {
      if (active) setError('No se pudo cargar la codificación local. Recargá la página.');
    });
    return () => { active = false; };
  }, []);

  const result = useMemo(() => {
    if (!encoder) return [];
    try {
      return encoder.encode(text).map((id) => ({
        id,
        fragment: encoder.decode([id]).replace(/\n/g, '↵').replace(/\t/g, '⇥'),
      }));
    } catch {
      return null;
    }
  }, [encoder, text]);

  return (
    <section className="demo-panel" aria-label="Tokenizador local cl100k_base">
      <div className="demo-label"><span className="live-dot" /> EJECUCIÓN LOCAL · TOKENIZADOR REAL</div>
      <p className="demo-intro">Escribí hasta 500 caracteres. El navegador utiliza la codificación de referencia <strong>cl100k_base</strong>, no una estimación por palabras.</p>
      <label className="field-label" htmlFor="token-input">Texto para tokenizar</label>
      <textarea id="token-input" className="token-textarea" rows={3} maxLength={500} value={text} onChange={(event) => setText(event.target.value)} spellCheck={false} />
      <div className="sample-row" role="group" aria-label="Textos de ejemplo">
        {samples.map((sample) => <button key={sample.name} className="chip-button" onClick={() => setText(sample.text)}>{sample.name}</button>)}
        <button className="chip-button" onClick={() => setText('')}>Limpiar</button>
      </div>
      {error && <p role="alert" className="warning-note">{error}</p>}
      {!error && !encoder && <p role="status" className="demo-loading">Cargando vocabulario de referencia…</p>}
      {encoder && result === null && <p role="alert" className="warning-note">Este texto contiene una secuencia reservada por la codificación. Probá con otro texto.</p>}
      {encoder && result !== null && (
        <>
          <div className="token-stats">
            <div><strong>{result.length}</strong><span>tokens</span></div>
            <div><strong>{text.length}</strong><span>unidades UTF-16</span></div>
            <div><strong>cl100k_base</strong><span>codificación</span></div>
          </div>
          {result.length > 0 ? (
            <div className="token-grid" aria-live="polite">
              {result.map((item, index) => (
                <div className="token-pill" key={`${item.id}-${index`} title={`ID ${item.id`}>
                  <span className="token-text">{item.fragment || '∅'}</span>
                  <span className="token-id">ID {item.id}</span>
                </div>
              ))}
            </div>
          ) : <p className="demo-loading">No hay texto que tokenizar.</p>}
        </>
      )}
      <p className="demo-footnote">Importante: algunos tokens representan bytes parciales de caracteres Unicode; al decodificar un token aislado pueden aparecer símbolos de reemplazo (�). Los IDs son reales, pero cada fragmento mostrado no siempre corresponde a un carácter completo. Distintos modelos pueden utilizar otras codificaciones.</p>
    </section>
  );
}
