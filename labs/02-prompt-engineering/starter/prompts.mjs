export function buildPrompts() {
  // TODO: devolvé { vague, structured }; ambos deben pedir leer README.md.
  // Si no hay acceso al archivo, indicá que debe informarse. En structured incluí rol, tarea,
  // límite de evidencia, formato JSON y un ejemplo claramente ficticio.
  throw new Error('Implementá buildPrompts en starter/prompts.mjs');
}

export function evaluate(raw) {
  // TODO: parseá JSON sin lanzar errores y comprobá que proposito, publico
  // y tecnologias sean textos no vacíos. Devolvé { validJson, requiredFields }.
  throw new Error('Implementá evaluate en starter/prompts.mjs');
}
