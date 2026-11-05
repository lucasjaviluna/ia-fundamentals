import type { Lesson } from './lessons';

export const skillsLesson: Lesson = {
  id: 'skills', slug: 'agent-skills', number: 11, block: 3, level: 'Intermedio', minutes: 8,
  title: 'Agent Skills', question: '¿Cómo puede un agente reutilizar un procedimiento especializado?',
  description: 'Explorá instrucciones reutilizables, recursos y activación contextual mediante una skill de ejemplo.',
  keyIdea: 'Una Agent Skill empaqueta instrucciones y recursos para orientar a un agente en tareas concretas.',
  labSlug: 'explorador-skills',
  resources: [{ title: 'Agent Skills · documentación oficial', url: 'https://agentskills.io/home', description: 'Formato, estructura y activación de skills (en inglés).' }],
  steps: [
    { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Conocimiento reutilizable', description: 'Una skill es una carpeta con un archivo SKILL.md que describe cuándo y cómo realizar una tarea. Puede incluir referencias, plantillas y scripts opcionales.', bullets: ['Los metadatos describen su nombre y propósito.', 'Las instrucciones orientan el trabajo; su aplicación depende del agente y el entorno.', 'Los recursos se consultan o utilizan cuando hacen falta.'], presenterNote: 'Preguntar qué procedimiento repetitivo del equipo convendría documentar.' },
    { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Una guía de trabajo', description: 'Una skill se parece a una guía que un equipo consulta para hacer una revisión coherente. La analogía no garantiza que el agente ejecute todos los pasos correctamente.' },
    { id: 'proceso', kind: 'process', eyebrow: '03 · El recorrido', title: 'Descubrir → activar → seguir', description: 'Un agente compatible puede descubrir una descripción, identificar que una skill es pertinente y leer sus instrucciones y recursos.', bullets: ['Descubrir: conocer nombre y descripción.', 'Activar: cargar instrucciones relevantes.', 'Aplicar: seguir el procedimiento y consultar recursos si corresponde.'], presenterNote: 'Explicar que distintas aplicaciones pueden implementar la activación de manera diferente.' },
    { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Explorá una skill de revisión', description: 'Recorré una descripción, instrucciones y recursos de ejemplo preparados.', presenterNote: 'Pedir al público que identifique cuándo se aplicaría y qué no garantiza.' },
    { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Las instrucciones necesitan revisión', description: 'Una skill no garantiza resultados correctos ni concede por sí sola acceso a herramientas. Hay que revisar su procedencia, sus instrucciones y los permisos del entorno.', bullets: ['No ejecutar scripts desconocidos sin revisarlos.', 'Una skill orienta el trabajo; MCP puede conectar herramientas y recursos.'] },
    { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Qué aporta una skill?', description: 'Comprobá el papel de instrucciones, recursos y permisos.', presenterNote: 'Pedir ejemplos de instrucciones que serían útiles para una revisión.' },
  ],
  quiz: [
    { id: 'skill-1', question: '¿Qué contiene una skill?', options: [{ id: 'a', label: 'Instrucciones y, opcionalmente, recursos' }, { id: 'b', label: 'Solo una conexión automática a una base de datos' }], correctId: 'a', explanation: 'Una skill contiene SKILL.md y puede incluir recursos adicionales.' },
    { id: 'skill-2', question: '¿Cuándo puede activarse?', options: [{ id: 'a', label: 'Cuando la tarea coincide con su propósito, según el entorno' }, { id: 'b', label: 'Siempre y sin leer su descripción' }], correctId: 'a', explanation: 'El agente o la aplicación determina cuándo es pertinente cargarla.' },
    { id: 'skill-3', question: '¿Una skill otorga automáticamente permisos?', options: [{ id: 'a', label: 'No; los permisos dependen del entorno' }, { id: 'b', label: 'Sí, permite cualquier acción' }], correctId: 'a', explanation: 'Las instrucciones no sustituyen el control de permisos ni la revisión humana.' },
  ],
  takeaways: ['Una skill agrupa instrucciones y recursos reutilizables.', 'La activación depende de la tarea y del entorno compatible.', 'Las instrucciones y scripts deben revisarse y respetar permisos.'],
};

export const mcpLesson: Lesson = {
  id: 'mcp', slug: 'model-context-protocol', number: 12, block: 3, level: 'Intermedio', minutes: 13,
  title: 'MCP', question: '¿Cómo puede una aplicación conectar herramientas y fuentes de datos de manera estandarizada?',
  description: 'Conocé los roles de host, cliente y servidor, y explorá capacidades y mensajes ilustrativos.',
  keyIdea: 'MCP es un protocolo que permite a aplicaciones y servidores intercambiar capacidades como herramientas, recursos y prompts.',
  labSlug: 'explorador-mcp',
  resources: [{ title: 'Arquitectura de MCP · documentación oficial', url: 'https://modelcontextprotocol.io/docs/learn/architecture', description: 'Arquitectura, roles y capacidades del protocolo (en inglés).' }],
  steps: [
    { id: 'definicion', kind: 'concept', eyebrow: '01 · La idea', title: 'Un protocolo para conectar capacidades', description: 'Model Context Protocol (MCP) define una forma estandarizada para que una aplicación acceda a capacidades expuestas por servidores.', bullets: ['El host es la aplicación que coordina conexiones.', 'Un cliente mantiene una conexión con un servidor.', 'El servidor expone capacidades como tools, resources o prompts.'], presenterNote: 'Aclarar que MCP es un protocolo y no un modelo ni una base de datos.' },
    { id: 'analogia', kind: 'analogy', eyebrow: '02 · Analogía', title: 'Un idioma común para conectarse', description: 'Como un idioma compartido facilita que dos interlocutores intercambien pedidos y respuestas, un protocolo define cómo comunicar capacidades. La analogía no implica confianza automática.' },
    { id: 'proceso', kind: 'process', eyebrow: '03 · El recorrido', title: 'Conectar → descubrir → usar', description: 'El host establece una conexión mediante un cliente. El cliente puede descubrir las capacidades del servidor y, si la aplicación lo permite, solicitar su uso.', bullets: ['Tool: operación invocable con argumentos.', 'Resource: información identificada que se puede leer.', 'Prompt: plantilla o mensaje reutilizable expuesto por el servidor.'], presenterNote: 'Señalar que la aplicación decide permisos y que la disponibilidad depende de las capacidades negociadas.' },
    { id: 'demo', kind: 'demo', eyebrow: '04 · Experimentá', title: 'Explorá capacidades y mensajes', description: 'Elegí una capacidad y recorré una solicitud y respuesta ficticias.', presenterNote: 'Identificar host, cliente y servidor antes de avanzar.' },
    { id: 'limites', kind: 'warning', eyebrow: '05 · Un límite importante', title: 'Conectar no equivale a confiar', description: 'Un servidor puede acceder a datos o exponer acciones. La aplicación debe controlar permisos, revisar resultados y solicitar aprobación cuando corresponda.', bullets: ['El contenido externo no debe tratarse automáticamente como instrucciones confiables.', 'Esta demostración no se conecta a un servidor real.'] },
    { id: 'repaso', kind: 'quiz', eyebrow: '06 · Repaso', title: '¿Qué conecta MCP?', description: 'Diferenciá los roles y las capacidades del protocolo.', presenterNote: 'Pedir un ejemplo de herramienta y otro de recurso.' },
  ],
  quiz: [
    { id: 'mcp-1', question: '¿Qué es MCP?', options: [{ id: 'a', label: 'Un protocolo para conectar aplicaciones y capacidades externas' }, { id: 'b', label: 'Un modelo de lenguaje' }], correctId: 'a', explanation: 'MCP establece un protocolo de comunicación; no es un modelo.' },
    { id: 'mcp-2', question: '¿Qué expone un servidor MCP?', options: [{ id: 'a', label: 'Capacidades como herramientas, recursos o prompts' }, { id: 'b', label: 'Acceso ilimitado garantizado' }], correctId: 'a', explanation: 'Las capacidades disponibles dependen del servidor y de la conexión.' },
    { id: 'mcp-3', question: '¿Una conexión MCP elimina la necesidad de permisos?', options: [{ id: 'a', label: 'No; la aplicación debe controlar el acceso' }, { id: 'b', label: 'Sí, toda acción está autorizada' }], correctId: 'a', explanation: 'El protocolo no reemplaza los controles de acceso ni la aprobación cuando corresponde.' },
  ],
  takeaways: ['MCP conecta aplicaciones con capacidades de servidores mediante un protocolo.', 'Host, cliente y servidor tienen responsabilidades diferentes.', 'Las herramientas y los datos externos requieren permisos y revisión.'],
};
