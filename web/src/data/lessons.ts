export type StepKind = 'concept' | 'analogy' | 'process' | 'demo' | 'warning' | 'quiz';

export type LessonStep = {
  id: string;
  kind: StepKind;
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  presenterNote?: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: { id: string; label: string }[];
  correctId: string;
  explanation: string;
};

export type Lesson = {
  id: string;
  slug: string;
  number: number;
  block: number;
  level: 'Básico' | 'Intermedio';
  minutes: number;
  title: string;
  question: string;
  description: string;
  keyIdea: string;
  labSlug: string;
  steps: LessonStep[];
  quiz: QuizQuestion[];
  takeaways: string[];
};

export const lessons: Lesson[] = [
  {
    id: 'llm',
    slug: 'que-es-un-llm',
    number: 2,
    block: 1,
    level: 'Básico',
    minutes: 10,
    title: '¿Qué es un LLM?',
    question: '¿Cómo puede una IA responder algo que nunca vio escrito exactamente así?',
    description: 'Comprendé qué hace un modelo de lenguaje, cómo genera respuestas y por qué también puede equivocarse.',
    keyIdea: 'Un LLM es un modelo entrenado con grandes cantidades de datos que genera contenido prediciendo tokens según el contexto.',
    labSlug: 'next-token',
    steps: [
      {
        id: 'definicion', kind: 'concept', eyebrow: '01 · La idea',
        title: 'Un modelo que trabaja con lenguaje',
        description: 'LLM significa Large Language Model: modelo de lenguaje de gran tamaño. Aprende patrones a partir de datos durante el entrenamiento y los aplica cuando recibe una consulta.',
        bullets: ['No es una lista de respuestas escritas a mano.', 'Puede redactar, transformar, resumir y razonar sobre información.', 'El contexto de tu mensaje influye en lo que genera.'],
        presenterNote: 'Preguntar primero: ¿creen que el modelo busca una respuesta guardada o la construye sobre la marcha?',
      },
      {
        id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía',
        title: 'Jugá a completar una frase',
        description: 'Si te dicen «Hoy hace mucho…», podés imaginar varias continuaciones. Un LLM utiliza patrones mucho más complejos, aprendidos de datos, para estimar qué token puede continuar una secuencia.',
        bullets: ['La analogía ayuda a comprender la generación.', 'Un LLM no es simplemente el autocompletado de un teclado: combina numerosos patrones y capacidades.'],
        presenterNote: 'Pedir al público dos finales distintos para la misma frase.',
      },
      {
        id: 'entrenamiento', kind: 'process', eyebrow: '03 · Cómo funciona',
        title: 'Entrenamiento ≠ inferencia',
        description: 'Entrenar consiste en ajustar parámetros a partir de datos. Inferencia significa utilizar el modelo ya entrenado para producir una respuesta a partir de un prompt.',
        bullets: ['Entrenamiento: el modelo aprende patrones.', 'Inferencia: recibe tu contexto y genera nuevos tokens.', 'No consulta automáticamente Internet ni los datos internos de tu empresa.'],
        presenterNote: 'Relacionar entrenamiento con preparación e inferencia con la utilización de lo aprendido.',
      },
      {
        id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá',
        title: 'Elegí el siguiente fragmento',
        description: 'Probá una secuencia paso a paso. Verás posibles continuaciones y porcentajes inventados únicamente para explicar la idea.',
        presenterNote: 'Invitar a elegir una opción poco probable y observar cómo cambia la frase.',
      },
      {
        id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante',
        title: 'Que suene convincente no lo vuelve verdadero',
        description: 'Una respuesta fluida puede ser incorrecta, incompleta o inventada. Debemos validar datos relevantes y aportar fuentes o herramientas confiables cuando haga falta.',
        bullets: ['Generar texto no equivale a consultar una fuente de verdad.', 'Una pregunta ambigua puede provocar una respuesta inadecuada.', 'En decisiones importantes, siempre conviene verificar.'],
        presenterNote: 'Pedir un ejemplo cotidiano de una respuesta plausible pero equivocada.',
      },
      {
        id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso',
        title: '¿Qué te llevás de esta lección?',
        description: 'Comprobá los conceptos principales con tres preguntas y descubrí por qué cada respuesta es correcta.',
        presenterNote: 'Dejar responder al público antes de revelar cada explicación.',
      },
    ],
    quiz: [
      { id: 'llm-1', question: '¿Qué significa LLM?', options: [{ id: 'a', label: 'Un modelo de lenguaje de gran tamaño' }, { id: 'b', label: 'Una base de datos de respuestas fijas' }, { id: 'c', label: 'Un motor de búsqueda web' }], correctId: 'a', explanation: 'Un Large Language Model aprende patrones de los datos durante el entrenamiento y los utiliza para generar secuencias de tokens.' },
      { id: 'llm-2', question: '¿Qué sucede durante la inferencia?', options: [{ id: 'a', label: 'Siempre se vuelve a entrenar el modelo' }, { id: 'b', label: 'El modelo utiliza sus parámetros y el contexto para generar una respuesta' }, { id: 'c', label: 'Se conecta automáticamente a Internet' }], correctId: 'b', explanation: 'La inferencia es el uso del modelo ya entrenado; la consulta a herramientas o Internet requiere capacidades adicionales.' },
      { id: 'llm-3', question: '¿Una respuesta convincente garantiza que sea verdadera?', options: [{ id: 'a', label: 'Sí, si está bien redactada' }, { id: 'b', label: 'No, debe verificarse cuando importa' }], correctId: 'b', explanation: 'Los modelos pueden producir errores o afirmaciones no respaldadas incluso con un tono seguro.' },
    ],
    takeaways: ['Un LLM aprende patrones durante su entrenamiento.', 'En la inferencia genera tokens condicionados por el contexto.', 'Una respuesta fluida no garantiza exactitud.'],
  },
  {
    id: 'tokens',
    slug: 'tokens-y-tokenizacion',
    number: 4,
    block: 1,
    level: 'Básico',
    minutes: 8,
    title: 'Tokens y tokenización',
    question: '¿Una palabra equivale siempre a un token?',
    description: 'Descubrí cómo se divide el texto, qué son los IDs de tokens y por qué los conteos varían entre codificaciones.',
    keyIdea: 'Los modelos procesan unidades llamadas tokens; una palabra puede producir uno o varios, según el tokenizador.',
    labSlug: 'tokenizer',
    steps: [
      {
        id: 'definicion', kind: 'concept', eyebrow: '01 · La idea',
        title: 'Texto → tokens → IDs',
        description: 'Antes de procesar texto, una codificación lo convierte en una secuencia de identificadores numéricos. Cada identificador representa una unidad que el modelo reconoce.',
        bullets: ['Los tokens pueden ser palabras, fragmentos, signos o secuencias de bytes.', 'Los IDs son específicos de la codificación utilizada.'],
        presenterNote: 'Preguntar cuántos tokens tiene «inteligencia artificial»; no dar la respuesta hasta la demo.',
      },
      {
        id: 'palabras', kind: 'analogy', eyebrow: '02 · Analogía',
        title: 'Las piezas de un rompecabezas',
        description: 'El tokenizador divide el texto en piezas que no necesariamente coinciden con palabras completas. Esas piezas se representan con números.',
        bullets: ['«Programación» no tiene por qué ser una sola pieza.', 'Espacios, signos y emojis también afectan la segmentación.'],
      },
      {
        id: 'pipeline', kind: 'process', eyebrow: '03 · El recorrido',
        title: 'Del mensaje a la representación',
        description: 'Una codificación como cl100k_base convierte texto a IDs. El modelo utiliza esos IDs durante el procesamiento. Al final, los tokens generados se decodifican en texto para mostrar la respuesta.',
        bullets: ['Entrada: texto.', 'Tokenización: secuencia de IDs.', 'Salida: tokens generados que se decodifican a texto.'],
        presenterNote: 'Aclarar que cl100k_base es una referencia concreta, no universal.',
      },
      {
        id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá',
        title: 'Escribí y observá los tokens',
        description: 'Modificá el texto, alterná ejemplos e inspeccioná el número de tokens y sus IDs reales calculados en tu navegador.',
        presenterNote: 'Probar palabras largas, puntuación, español y un emoji.',
      },
      {
        id: 'limites', kind: 'warning', eyebrow: '05 · Consecuencia práctica',
        title: 'Los tokens importan para el contexto',
        description: 'La ventana de contexto limita la cantidad de tokens que un modelo puede procesar en una interacción. Los límites exactos dependen del modelo y su configuración.',
        bullets: ['No conviene estimar tokens contando palabras.', 'Distintos tokenizadores pueden dar conteos diferentes.', 'Los tokens de entrada y salida suelen afectar el uso de una API.'],
      },
      {
        id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso',
        title: '¿Entendiste qué es un token?',
        description: 'Respondé estas preguntas y comprobá las diferencias entre palabras, tokens e IDs.',
      },
    ],
    quiz: [
      { id: 'tok-1', question: '¿Un token siempre es una palabra completa?', options: [{ id: 'a', label: 'Sí' }, { id: 'b', label: 'No' }], correctId: 'b', explanation: 'Según la codificación, puede ser un fragmento, una palabra, puntuación o parte de una secuencia de bytes.' },
      { id: 'tok-2', question: '¿Los IDs de tokens son universales para todos los modelos?', options: [{ id: 'a', label: 'Sí' }, { id: 'b', label: 'No, dependen de la codificación' }], correctId: 'b', explanation: 'Cada tokenizador define su propio vocabulario y su asignación de IDs.' },
      { id: 'tok-3', question: '¿Por qué no alcanza con contar palabras para estimar el contexto?', options: [{ id: 'a', label: 'Porque las palabras y los tokens no tienen una correspondencia fija' }, { id: 'b', label: 'Porque el contexto se mide siempre en párrafos' }], correctId: 'a', explanation: 'Una palabra puede ocupar varios tokens; símbolos, espacios y emojis también cambian el conteo.' },
    ],
    takeaways: ['Un token no equivale necesariamente a una palabra.', 'La tokenización convierte texto en IDs específicos de una codificación.', 'El conteo de tokens influye en el uso y los límites de contexto.'],
  },
];

export const lessonBySlug = (slug: string): Lesson | undefined => lessons.find((lesson) => lesson.slug === slug);

export type CatalogTopic = {
  number: number;
  title: string;
  block: number;
  minutes: number;
  slug?: string;
};
export const blocks = [
  { id: 1, name: 'Fundamentos', subtitle: 'De la IA a los tokens' },
  { id: 2, name: 'Interacción', subtitle: 'Cómo dialogar con los modelos' },
  { id: 3, name: 'Herramientas y agentes', subtitle: 'De las respuestas a las acciones' },
  { id: 4, name: 'Aplicación responsable', subtitle: 'Calidad, seguridad y desarrollo' },
] as const;

export const catalog: CatalogTopic[] = [
  { number: 1, title: 'Mapa de la IA', block: 1, minutes: 5 },
  { number: 2, title: '¿Qué es un LLM?', block: 1, minutes: 10, slug: 'que-es-un-llm' },
  { number: 3, title: '¿Cómo funciona un LLM?', block: 1, minutes: 10 },
  { number: 4, title: 'Tokens y tokenización', block: 1, minutes: 8, slug: 'tokens-y-tokenizacion' },
  { number: 5, title: 'Prompts y ejemplos', block: 2, minutes: 12 },
  { number: 6, title: 'Contexto y memoria', block: 2, minutes: 8 },
  { number: 7, title: 'Confiabilidad y alucinaciones', block: 2, minutes: 8 },
  { number: 8, title: 'Modelos y APIs', block: 2, minutes: 8 },
  { number: 9, title: 'Tools y function calling', block: 3, minutes: 10 },
  { number: 10, title: 'Agentes y workflows', block: 3, minutes: 10 },
  { number: 11, title: 'Agent Skills', block: 3, minutes: 8 },
  { number: 12, title: 'MCP', block: 3, minutes: 13 },
  { number: 13, title: 'Embeddings y RAG', block: 3, minutes: 10 },
  { number: 14, title: 'Seguridad y permisos', block: 4, minutes: 8 },
  { number: 15, title: 'Evaluación y guardrails', block: 4, minutes: 8 },
  { number: 16, title: 'IA en desarrollo de software', block: 4, minutes: 10 },
];
