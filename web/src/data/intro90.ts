import { lessonBySlug } from './lessons';

type Selection = { slug: string; steps: string[] };
export type Segment = { title: string; minutes: number; selections: Selection[]; note: string };
export const intro90: Segment[] = [
 { title:'Mapa de IA', minutes:5, selections:[{slug:'mapa-de-la-ia',steps:['definicion','demo']}], note:'Preguntá por ejemplos cotidianos y clasificá un caso con el público.' },
 { title:'Qué es y cómo funciona un LLM', minutes:10, selections:[{slug:'que-es-un-llm',steps:['definicion','demo']},{slug:'como-funciona-un-llm',steps:['proceso']}], note:'Pedí una continuación para la frase y distinguí entrenamiento de inferencia.' },
 { title:'Tokens y tokenización', minutes:8, selections:[{slug:'tokens-y-tokenizacion',steps:['definicion','demo']}], note:'Probá texto en español y un emoji; el conteo depende de la codificación.' },
 { title:'Prompts y ejemplos', minutes:12, selections:[{slug:'prompts-y-ejemplos',steps:['definicion','demo','repaso']}], note:'Invitá a mejorar una instrucción antes de comparar los casos preparados.' },
 { title:'Contexto y confiabilidad', minutes:8, selections:[{slug:'contexto-y-memoria',steps:['proceso','demo']},{slug:'confiabilidad-y-alucinaciones',steps:['limites']}], note:'Mostrá la compactación y recordá que la fluidez no prueba la verdad.' },
 { title:'Tools y agentes', minutes:10, selections:[{slug:'tools-y-function-calling',steps:['proceso','demo']},{slug:'agentes-y-workflows',steps:['proceso','demo']}], note:'Separá la solicitud del modelo de la ejecución controlada por la aplicación.' },
 { title:'Skills y MCP', minutes:13, selections:[{slug:'agent-skills',steps:['definicion','demo']},{slug:'model-context-protocol',steps:['proceso','demo']}], note:'Compará instrucciones reutilizables con conexiones a capacidades externas.' },
 { title:'Embeddings y RAG', minutes:10, selections:[{slug:'embeddings-y-rag',steps:['proceso','demo']}], note:'El ranking de la demo es léxico y ficticio, no usa embeddings reales.' },
 { title:'Seguridad y calidad', minutes:8, selections:[{slug:'seguridad-y-buenas-practicas',steps:['demo']},{slug:'evaluacion-y-guardrails',steps:['definicion','demo']}], note:'Discutí por qué el contenido externo no autoriza acciones y cómo evaluar resultados.' },
 { title:'Aplicación y cierre', minutes:6, selections:[{slug:'ia-en-desarrollo-de-software',steps:['proceso','demo']}], note:'Cerrá conectando modelos, contexto, herramientas, recuperación y revisión humana. Reservá tiempo para preguntas.' },
];

export function resolveIntro90() {
 return intro90.flatMap((segment, segmentIndex) => segment.selections.flatMap((selection) => {
   const lesson = lessonBySlug(selection.slug);
   if (!lesson) throw new Error('Lección inexistente: ' + selection.slug);
   return selection.steps.map((id) => {
     const step = lesson.steps.find((item) => item.id === id);
     if (!step) throw new Error('Paso inexistente: ' + selection.slug + '/' + id);
     return { segment, segmentIndex, lesson, step };
   });
 }));
}
