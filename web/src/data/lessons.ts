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
  resources?: { title: string; url: string; description: string }[];
};

export const lessons: Lesson[] = [
  {
    id: 'mapa-ia', slug: 'mapa-de-la-ia', number: 1, block: 1, level: 'Básico', minutes: 5,
    title: 'Mapa de la IA', question: '¿Toda inteligencia artificial aprende de datos o genera contenido?',
    description: 'Distinguí inteligencia artificial, aprendizaje automático, aprendizaje profundo e IA generativa con ejemplos cotidianos.',
    keyIdea: 'La IA reúne diversas técnicas; machine learning aprende de datos, deep learning usa redes neuronales profundas y la IA generativa produce contenido nuevo.',
    labSlug: 'clasificador-ia',
    resources: [{ title: 'Introducción a machine learning · Google', url: 'https://developers.google.com/machine-learning/intro-to-ml', description: 'Curso introductorio sobre aprendizaje automático (disponible en varios idiomas).' }],
    steps: [
      { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Cuatro conceptos relacionados', description: 'La inteligencia artificial (IA) es un campo amplio. El aprendizaje automático o machine learning (ML) es una forma de construir sistemas que aprenden patrones a partir de datos.', bullets: ['Deep learning es una familia de métodos de ML basada en redes neuronales con múltiples capas.', 'La IA generativa se define por su capacidad de generar contenido; muchos sistemas actuales usan deep learning.'], presenterNote: 'Preguntar qué ejemplos de IA conoce el público antes de mostrar las categorías.' },
      { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Un mapa de familias y capacidades', description: 'Imaginá un mapa: IA es un territorio amplio; ML es una región dentro de él y deep learning una zona de ML. Generar contenido describe una capacidad, no una región idéntica a deep learning.', bullets: ['La analogía simplifica un campo con fronteras y enfoques que evolucionan.', 'Un sistema puede pertenecer a varias categorías a la vez.'] },
      { id: 'recorrido', kind: 'process', eyebrow: '03 · El recorrido', title: 'De la técnica a la aplicación', description: 'Un equipo puede usar datos de correos para entrenar un filtro de spam, o una red neuronal profunda para generar texto. Ambos son aplicaciones de IA, pero cumplen tareas distintas.', bullets: ['IA: resolver tareas mediante técnicas de inteligencia artificial.', 'ML: aprender patrones de datos; deep learning: utilizar redes profundas.', 'Generativa: crear contenido como texto o imágenes.'], presenterNote: 'Señalar que un filtro de spam clasifica; no necesita generar contenido.' },
      { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Clasificá casos cotidianos', description: 'Elegí la categoría que mejor describe la característica indicada en cada caso y recibí una explicación.', presenterNote: 'Invitar al público a elegir y explicar que las categorías pueden superponerse.' },
      { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Las categorías no son casilleros exclusivos', description: 'Un generador de imágenes moderno puede ser IA, ML, deep learning e IA generativa al mismo tiempo. También hay sistemas de IA basados en reglas que no aprenden de datos.', bullets: ['Generar contenido no garantiza que sea correcto.', 'La etiqueta por sí sola no revela cómo se construyó un sistema.'] },
      { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Cómo se relacionan estas ideas?', description: 'Respondé tres preguntas para comprobar el mapa.', presenterNote: 'Dar tiempo al público para responder antes de revelar la explicación.' },
    ],
    quiz: [
      { id: 'map-1', question: '¿Qué caracteriza al machine learning?', options: [{ id: 'a', label: 'Aprender patrones a partir de datos' }, { id: 'b', label: 'Generar siempre imágenes' }, { id: 'c', label: 'Seguir exclusivamente reglas escritas a mano' }], correctId: 'a', explanation: 'El aprendizaje automático utiliza datos para ajustar modelos; no se limita a generar imágenes.' },
      { id: 'map-2', question: '¿Cómo se relaciona deep learning con ML?', options: [{ id: 'a', label: 'Es una familia de métodos de ML' }, { id: 'b', label: 'Es independiente de ML' }, { id: 'c', label: 'Es sinónimo de cualquier programa' }], correctId: 'a', explanation: 'Deep learning emplea redes neuronales con múltiples capas y pertenece al aprendizaje automático.' },
      { id: 'map-3', question: '¿Un generador de imágenes puede pertenecer a varias categorías?', options: [{ id: 'a', label: 'Sí, las categorías pueden superponerse' }, { id: 'b', label: 'No, solo puede ser IA generativa' }], correctId: 'a', explanation: 'Un generador construido con redes profundas también puede describirse como deep learning, ML e IA.' },
    ],
    takeaways: ['La IA abarca múltiples técnicas, incluidas algunas que no aprenden de datos.', 'Deep learning es un tipo de machine learning.', 'La IA generativa describe una capacidad y puede superponerse con otras categorías.'],
  },

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
    resources: [{ title: 'Introducción a los modelos de lenguaje · Google', url: 'https://developers.google.com/machine-learning/crash-course/llm', description: 'Una explicación de modelos de lenguaje, contexto y sus límites (disponible en varios idiomas).' }],
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
    id: 'funcionamiento-llm', slug: 'como-funciona-un-llm', number: 3, block: 1, level: 'Básico', minutes: 10,
    title: '¿Cómo funciona un LLM?', question: '¿Qué ocurre entre escribir una consulta y recibir una respuesta?',
    description: 'Recorré el entrenamiento y la generación de una respuesta, desde la entrada hasta los tokens de salida.',
    keyIdea: 'Un LLM entrenado procesa tokens en contexto y genera una respuesta progresivamente; el entrenamiento y su uso son etapas diferentes.',
    labSlug: 'recorrido-llm',
    resources: [{ title: 'Introducción a los modelos de lenguaje · Google', url: 'https://developers.google.com/machine-learning/crash-course/llm', description: 'Profundización sobre modelos de lenguaje y Transformers (disponible en varios idiomas).' }],
    steps: [
      { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Preparación y uso', description: 'Durante el entrenamiento se ajustan los parámetros de un modelo a partir de datos. Durante la inferencia, el modelo ya entrenado recibe una entrada y produce una salida.', bullets: ['Entrenamiento: ajuste de parámetros.', 'Inferencia: uso del modelo con un contexto.'], presenterNote: 'Preguntar qué cambia entre preparar un modelo y utilizarlo.' },
      { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Aprender y después responder', description: 'Como una persona que estudia antes de responder una pregunta, un modelo se prepara antes de utilizarse. La analogía es limitada: un modelo no aprende ni comprende de la misma manera que una persona.', presenterNote: 'Aclarar que la analogía no implica conciencia ni memoria humana.' },
      { id: 'proceso', kind: 'process', eyebrow: '03 · El recorrido', title: 'Del texto a la respuesta', description: 'La aplicación convierte la entrada en tokens. El modelo procesa esos tokens en contexto y estima posibles continuaciones. Al seleccionar tokens sucesivos, la aplicación los convierte en texto.', bullets: ['Entrada → tokenización.', 'Modelo → estimación de continuaciones según el contexto.', 'Selección → nuevos tokens → texto visible.'], presenterNote: 'Aclarar que la selección depende de la configuración y que el proceso mostrado está simplificado.' },
      { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Recorré cada etapa', description: 'Avanzá y retrocedé para observar un ejemplo ilustrativo de entrada, tokenización, procesamiento y salida.', presenterNote: 'Pedir al público que identifique en qué etapa se convierte el texto en unidades del modelo.' },
      { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Una explicación simplificada', description: 'Los Transformers utilizan mecanismos de atención para relacionar información del contexto; este recorrido no muestra todos sus cálculos. Generar una continuación plausible no garantiza una respuesta verdadera.', bullets: ['El modelo no consulta automáticamente una fuente externa.', 'La respuesta puede contener errores y debe verificarse cuando importa.'] },
      { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Qué ocurre en cada etapa?', description: 'Comprobá la diferencia entre entrenamiento, inferencia y generación.', presenterNote: 'Pedir al público que responda antes de revelar cada explicación.' },
    ],
    quiz: [
      { id: 'func-1', question: '¿Qué sucede durante el entrenamiento?', options: [{ id: 'a', label: 'Se ajustan parámetros a partir de datos' }, { id: 'b', label: 'Cada consulta vuelve a entrenar el modelo' }], correctId: 'a', explanation: 'El entrenamiento ajusta parámetros; normalmente la consulta utiliza el modelo ya entrenado.' },
      { id: 'func-2', question: '¿Qué hace la tokenización?', options: [{ id: 'a', label: 'Convierte el texto en unidades representadas por IDs' }, { id: 'b', label: 'Verifica que la respuesta sea verdadera' }], correctId: 'a', explanation: 'La tokenización representa el texto como una secuencia de IDs; no comprueba afirmaciones.' },
      { id: 'func-3', question: '¿El modelo siempre consulta Internet al responder?', options: [{ id: 'a', label: 'Sí, automáticamente' }, { id: 'b', label: 'No, necesita herramientas o integración adicionales' }], correctId: 'b', explanation: 'La inferencia por sí sola no implica acceso a Internet ni a fuentes externas.' },
    ],
    takeaways: ['El entrenamiento ajusta parámetros; la inferencia utiliza el modelo.', 'La entrada se tokeniza y la salida se genera progresivamente.', 'El contexto influye en la respuesta, pero no garantiza que sea correcta.'],
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
    resources: [{ title: 'Tokenizer · OpenAI', url: 'https://platform.openai.com/tokenizer', description: 'Herramienta externa para explorar la tokenización (en inglés).' }],
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
  { number: 1, title: 'Mapa de la IA', block: 1, minutes: 5, slug: 'mapa-de-la-ia' },
  { number: 2, title: '¿Qué es un LLM?', block: 1, minutes: 10, slug: 'que-es-un-llm' },
  { number: 3, title: '¿Cómo funciona un LLM?', block: 1, minutes: 10, slug: 'como-funciona-un-llm' },
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
