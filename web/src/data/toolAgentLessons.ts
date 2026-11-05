import type { Lesson } from './lessons';

export const toolLesson: Lesson = {
  id: 'tools', slug: 'tools-y-function-calling', number: 9, block: 3, level: 'Intermedio', minutes: 10,
  title: 'Tools y function calling', question: '¿Cómo puede una aplicación consultar datos externos para responder?',
  description: 'Descubrí cómo un modelo solicita una herramienta y cómo la aplicación valida, ejecuta y devuelve el resultado.',
  keyIdea: 'El modelo puede solicitar una herramienta con argumentos; la aplicación decide si ejecutarla, valida la llamada y devuelve su resultado.',
  labSlug: 'llamada-herramienta',
  resources: [{ title: 'Introducción a llamadas a funciones · Google', url: 'https://cloud.google.com/vertex-ai/generative-ai/docs/multimodal/function-calling', description: 'Documentación técnica con ejemplos (en inglés).' }],
  steps: [
    { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Una solicitud, no una ejecución automática', description: 'Una herramienta es una función o servicio que la aplicación pone a disposición del modelo. El modelo puede proponer su nombre y argumentos; la aplicación controla su ejecución.', bullets: ['La descripción indica qué hace la herramienta y qué argumentos acepta.', 'La aplicación valida permisos y argumentos antes de llamar.', 'El resultado vuelve al modelo para elaborar una respuesta.'], presenterNote: 'Preguntar quién ejecuta la función: el modelo solicita; la aplicación controla.' },
    { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Un pedido a un mostrador', description: 'Como quien solicita al personal que consulte un pedido, el modelo formula una solicitud y espera una respuesta. La analogía no implica que el modelo tenga acceso directo a todos los sistemas.' },
    { id: 'proceso', kind: 'process', eyebrow: '03 · El recorrido', title: 'Solicitud → validación → resultado', description: 'Una persona pregunta por su pedido. El modelo propone getOrderStatus con un identificador; la aplicación valida y consulta datos autorizados, devuelve el resultado y el modelo responde.', bullets: ['Entrada: ID del pedido.', 'Llamada: nombre de herramienta y argumentos estructurados.', 'Resultado: estado o error; la aplicación y el modelo deben tratarlo con cuidado.'], presenterNote: 'Destacar que el resultado externo es información a validar, no una instrucción de confianza.' },
    { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Inspeccioná una llamada', description: 'Elegí un pedido ficticio y avanzá por la solicitud, la validación y el resultado preparados.', presenterNote: 'Mostrar los argumentos y distinguir la llamada propuesta de la ejecución.' },
    { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Permisos y errores importan', description: 'Una solicitud del modelo puede tener argumentos incorrectos o pedir una acción no autorizada. La aplicación debe validar, controlar permisos y gestionar errores.', bullets: ['No enviar secretos ni ejecutar acciones solo porque el modelo lo solicite.', 'Una respuesta de herramienta puede estar incompleta o ser no confiable.'] },
    { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Quién hace qué?', description: 'Comprobá los roles en una llamada a herramienta.', presenterNote: 'Pedir al público que identifique dónde se aplican permisos.' },
  ],
  quiz: [
    { id: 'tool-1', question: '¿Quién controla la ejecución de una herramienta?', options: [{ id: 'a', label: 'La aplicación que la integra' }, { id: 'b', label: 'El modelo siempre la ejecuta por sí solo' }], correctId: 'a', explanation: 'El modelo propone la llamada; la aplicación controla validación, permisos y ejecución.' },
    { id: 'tool-2', question: '¿Qué debe comprobar la aplicación antes de ejecutar?', options: [{ id: 'a', label: 'Argumentos y permisos' }, { id: 'b', label: 'Solo el formato visual de la respuesta' }], correctId: 'a', explanation: 'Validar argumentos y autorización ayuda a evitar llamadas inválidas o indebidas.' },
    { id: 'tool-3', question: '¿Qué ocurre con el resultado?', options: [{ id: 'a', label: 'Puede devolverse al modelo para continuar' }, { id: 'b', label: 'Se convierte automáticamente en una instrucción confiable' }], correctId: 'a', explanation: 'La aplicación puede aportar el resultado al modelo; sus datos no deben tratarse automáticamente como instrucciones confiables.' },
  ],
  takeaways: ['El modelo solicita herramientas mediante argumentos.', 'La aplicación controla permisos, validación y ejecución.', 'El resultado puede ayudar a responder, pero requiere tratamiento cuidadoso.'],
};

export const agentLesson: Lesson = {
  id: 'agentes', slug: 'agentes-y-workflows', number: 10, block: 3, level: 'Intermedio', minutes: 10,
  title: 'Agentes y workflows', question: '¿Cómo se coordina una tarea que requiere varias decisiones y herramientas?',
  description: 'Explorá un ciclo de decisiones, herramientas, estado y revisión humana con una traza local.',
  keyIdea: 'Un agente combina decisiones de un modelo con estado y herramientas; un workflow organiza pasos y controles para alcanzar un objetivo.',
  labSlug: 'traza-agente',
  resources: [{ title: 'Introducción a agentes · Google Cloud', url: 'https://cloud.google.com/discover/what-are-ai-agents', description: 'Descripción general de agentes y sus componentes (en inglés).' }],
  steps: [
    { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Decidir y actuar en varios pasos', description: 'Un agente es un sistema que puede usar un modelo, estado y herramientas para decidir pasos hacia un objetivo. Un workflow organiza pasos y controles; puede ser fijo o incluir decisiones dinámicas.', bullets: ['El modelo no es el sistema completo.', 'Las acciones disponibles y el grado de autonomía los define la aplicación.'], presenterNote: 'Comparar una consulta aislada con una tarea que requiere varias herramientas.' },
    { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Una persona coordinando un trámite', description: 'Como alguien que consulta el estado de un trámite y decide qué hacer después, un agente puede observar resultados y elegir el siguiente paso. La analogía no implica intención o comprensión humana.' },
    { id: 'proceso', kind: 'process', eyebrow: '03 · El recorrido', title: 'Planificar → actuar → observar → validar', description: 'El sistema recibe un objetivo, mantiene estado, selecciona una acción permitida, observa el resultado y decide si necesita otro paso o revisión.', bullets: ['Un límite de pasos evita ciclos interminables.', 'La aprobación humana puede ser necesaria antes de acciones relevantes.', 'El estado puede resumirse o compactarse; hacerlo puede perder detalles importantes.'], presenterNote: 'Relacionar el estado con la lección de contexto y compactación.' },
    { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Recorré una traza', description: 'Avanzá por un ejemplo preparado de consulta de un pedido y una propuesta que requiere aprobación humana.', presenterNote: 'Detenerse en el paso de aprobación y preguntar qué pasa si se rechaza.' },
    { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Autonomía con controles', description: 'Un agente puede equivocarse, interpretar mal una respuesta o repetir acciones. Definir límites, validar resultados y exigir aprobación cuando corresponda reduce riesgos.', bullets: ['Una traza permite revisar qué ocurrió.', 'Una aprobación no reemplaza verificar datos y permisos.'] },
    { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Qué hace seguro el ciclo?', description: 'Revisá el papel del estado, las herramientas y la aprobación.', presenterNote: 'Invitar al público a elegir un punto donde convendría detener el proceso.' },
  ],
  quiz: [
    { id: 'agent-1', question: '¿Qué puede integrar un agente?', options: [{ id: 'a', label: 'Modelo, estado, herramientas y controles' }, { id: 'b', label: 'Solo un prompt largo' }], correctId: 'a', explanation: 'Un sistema agente puede combinar decisiones con estado, herramientas y controles; un prompt por sí solo no incluye todo el sistema.' },
    { id: 'agent-2', question: '¿Para qué sirve un límite de pasos?', options: [{ id: 'a', label: 'Para acotar ciclos y permitir detener la tarea' }, { id: 'b', label: 'Para garantizar que todas las respuestas sean verdaderas' }], correctId: 'a', explanation: 'Un límite acota la ejecución, pero no garantiza exactitud.' },
    { id: 'agent-3', question: '¿Qué ocurre si se rechaza una acción que requiere aprobación?', options: [{ id: 'a', label: 'El sistema no debe ejecutarla y debe comunicarlo' }, { id: 'b', label: 'Debe ejecutarla de todos modos' }], correctId: 'a', explanation: 'La aprobación es un control previo: si se rechaza, la acción no se ejecuta.' },
  ],
  takeaways: ['Un agente combina decisiones con estado y herramientas.', 'Los workflows pueden incluir pasos fijos, decisiones y validaciones.', 'Límites, trazas y aprobación humana ayudan a controlar la ejecución.'],
};
