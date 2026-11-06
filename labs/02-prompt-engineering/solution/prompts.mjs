export function buildPrompts() {
  const vague = 'Leé el README.md de este repositorio y explicá de qué trata el proyecto. Si no podés acceder al archivo, indicalo.';
  const structured = [
    'Actuá como docente que explica proyectos de software a personas que empiezan con IA.',
    'Leé el archivo README.md de la raíz del repositorio. Usando únicamente su contenido, explicá el propósito del repositorio, a quién está dirigido y qué tecnologías utiliza.',
    'Si algún dato no está explícito en el README, indicá "no especificado"; no inventes información.',
    'Devolvé solo JSON válido con tres campos de texto no vacíos: proposito, publico y tecnologias.',
    'Ejemplo de formato (contenido ficticio): {"proposito":"enseñar jardinería","publico":"principiantes","tecnologias":"no especificado"}. No copies los datos del ejemplo.',
    'Si no podés acceder al README.md, indicalo y no inventes su contenido.',
  ].join('\n');
  return { vague, structured };
}

// Comprueba el formato, no si cada afirmación está respaldada por el README.
export function evaluate(raw) {
  let value;
  try { value = JSON.parse(raw); } catch { return { validJson: false, requiredFields: false }; }
  const isObject = value !== null && typeof value === 'object' && !Array.isArray(value);
  const requiredFields = isObject && ['proposito', 'publico', 'tecnologias'].every((key) => typeof value[key] === 'string' && value[key].trim().length > 0);
  return { validJson: true, requiredFields };
}
