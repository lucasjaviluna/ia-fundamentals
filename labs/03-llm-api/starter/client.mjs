export function demoResponse() {
  // TODO: devolvé un objeto con text y source: 'simulación local'.
  throw new Error('Implementá demoResponse');
}
export async function requestResponse({ apiKey, model, input, fetchImpl = fetch }) {
  // TODO: validá la configuración; enviá POST a /v1/responses con JSON.
  // Usá fetchImpl y extraé texto output_text sin asumir una posición fija.
  // Manejá HTTP no exitoso y ausencia de texto sin imprimir la clave.
  throw new Error('Implementá requestResponse');
}
