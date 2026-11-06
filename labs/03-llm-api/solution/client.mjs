// Ejercicio local: el modo demo devuelve datos preparados sin hacer una petición.
export function demoResponse() {
  return { text: 'Una API permite que una aplicación envíe una solicitud y reciba una respuesta.', source: 'simulación local' };
}

// El transporte se puede sustituir para probar sin red ni credenciales reales.
export async function requestResponse({ apiKey, model, input, fetchImpl = fetch }) {
  if (!apiKey || !model || !input?.trim()) throw new Error('Faltan API key, modelo o texto de entrada.');
  const response = await fetchImpl('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + apiKey },
    body: JSON.stringify({ model, input, store: false }),
  });
  if (!response.ok) throw new Error('La API respondió con estado HTTP ' + response.status + '. Revisá credenciales, acceso y configuración.');
  const body = await response.json();
  const text = body.output?.flatMap((item) => item.type === 'message' ? (item.content ?? []) : [])
    .filter((part) => part.type === 'output_text').map((part) => part.text).join('\n');
  if (!text) throw new Error('La respuesta no contiene texto; revisá el estado y la configuración de la solicitud.');
  return { text, source: 'API OpenAI' };
}
