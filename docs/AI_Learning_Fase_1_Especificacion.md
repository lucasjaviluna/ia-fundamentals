# AI Learning Experience — Especificación funcional y de experiencia (Fase 1)

**Estado:** Propuesta de diseño para iniciar implementación del MVP  
**Versión:** 0.1 — 4 de noviembre de 2026  
**Objetivo:** Enseñar fundamentos y aplicaciones prácticas de IA mediante una web interactiva que también funcione como presentación, con laboratorios reproducibles y soluciones en el repositorio.

## 1. Principios del producto

1. **Comprensión antes que terminología.** Cada concepto empieza con una pregunta o situación cotidiana, sigue con una explicación sencilla y termina con una demostración.
2. **Una única fuente de contenidos.** Lectura y presentación se construyen desde las mismas lecciones, sin duplicar diapositivas.
3. **Interacción con propósito.** Cada control debe mostrar una relación causa-efecto útil; no hay animaciones meramente decorativas.
4. **Claridad sobre lo simulado.** Rotular siempre los ejercicios como *simulación*, *ejecución local* o *uso de modelo real*.
5. **Presentación sin dependencia de servicios externos.** La charla principal funciona mediante demos locales o simuladas; la conexión con una API es opcional.
6. **Progresividad.** Núcleo básico comprensible para público mixto, con secciones técnicas opcionales.
7. **Sin sobreingeniería.** MVP sin autenticación, base de datos, CMS, backend persistente o microfrontends.

## 2. Público y escenarios

**Público primario:** profesionales de software, analistas, diseñadores y perfiles de negocio con distintos niveles de conocimiento de IA.

**Escenario A — Charla presencial/remota:** presentador conduce un recorrido de unos 90 minutos, revela puntos gradualmente, utiliza demos y hace preguntas a la audiencia.

**Escenario B — Autoaprendizaje:** participante navega temas, ejecuta demos, responde preguntas y consulta material complementario.

**Escenario C — Taller técnico:** participante descarga el repositorio, ejecuta laboratorios Node.js/TypeScript, resuelve ejercicios y compara soluciones.

**Dos profundidades:** `esencial` (siempre visible) y `profundización` (optativa y colapsable en lectura; omitida por defecto en presentación introductoria).

## 3. Arquitectura de información y rutas

| Ruta | Pantalla | Función |
| --- | --- | --- |
| `/` | Inicio | Qué aprenderá, para quién, iniciar charla/curso y elegir recorrido |
| `/curso` | Mapa del aprendizaje | Bloques, temas, niveles, duración, progreso local |
| `/curso/:slug` | Lección | Lectura guiada, demos, preguntas y recursos |
| `/presentar/:slug` | Presentación | Pantalla completa, pasos y controles minimalistas |
| `/labs/:slug` | Laboratorio | Demo ampliada, instrucciones, explicación y vínculo al ejercicio |
| `/glosario` | Glosario | Definiciones breves y enlaces cruzados a lecciones |

**Recorridos:** `intro-90` (selección y orden de segmentos) y `completo` (todos los temas); más adelante se podrá añadir `negocio-60`, sin duplicar material.

**Navegación principal:** índice por bloques; anterior/siguiente; migas de pan; navegación directa a laboratorios y resumen de cada lección.

**Teclado en presentación:** flechas izquierda/derecha para retroceder/avanzar; `Esc` para salir; `F` para solicitar pantalla completa; `?` para ayuda. Se desactivan atajos cuando un input, editor o control interactivo está enfocado. Controles visibles como alternativa táctil.

**Persistencia mínima:** progreso, últimas lecciones y tema visual en `localStorage`. No existe sincronización entre dispositivos ni cuentas en el MVP.

## 4. Wireframes textuales

### 4.1 Portada

```text
┌──────────────────────────────────────────────────────────────┐
│ AI LEARNING                              Curso   Glosario  ◐ │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ENTENDÉ CÓMO FUNCIONA LA IA                                  │
│  De los tokens a los agentes, sin fórmulas innecesarias.      │
│                                                              │
│  [Iniciar charla de 90 min]   [Explorar el curso]             │
│                                                              │
│  [16 temas]   [demos interactivas]   [ejercicios GitHub]       │
│                                                              │
│  Ruta guiada → Qué es un LLM → Tokens → Prompts → Agentes...  │
└──────────────────────────────────────────────────────────────┘
```

### 4.2 Modo lectura

```text
┌──────────────────┬───────────────────────────────────────────┐
│ Módulos          │ MÓDULO 1 · LECCIÓN 2                       │
│ ✓ Conceptos IA   │ ¿Qué es un LLM?                            │
│ > LLM            │                                           │
│   Tokens         │ Pregunta: ¿Cómo completa esta frase?       │
│   Prompts        │ [Análisis visual paso a paso]              │
│   Agentes        │                                           │
│                  │ [Probar simulador]                         │
│                  │ [Repaso: 3 preguntas]                      │
│                  │ [Resumen: 3 ideas]                         │
│                  │                        [Siguiente →]      │
└──────────────────┴───────────────────────────────────────────┘
```

### 4.3 Modo presentación

```text
┌──────────────────────────────────────────────────────────────┐
│ ¿Qué es un LLM?                                2 / 6 pasos  │
│                                                              │
│       EL MODELO PREDICE EL SIGUIENTE TOKEN                    │
│                                                              │
│  "La capital de Francia es ..."                               │
│                                                              │
│  París  ███████████████████████  78%                          │
│  Lyon   ████                     12%                          │
│  otra   ██                       10%                          │
│                                                              │
│  [Mostrar explicación]                   [‹] [›]             │
└──────────────────────────────────────────────────────────────┘
```

Los porcentajes mostrados arriba son **datos ficticios de un ejemplo didáctico**, no probabilidades calculadas por un modelo específico.

## 5. Sistema visual

**Dirección propuesta:** estética editorial/tecnológica, minimalista, con foco en la comprensión visual; sin estética de consola ni saturación de neones.

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `background` | `#F8FAFC` | `#0B1220` | Fondo principal |
| `surface` | `#FFFFFF` | `#111B2E` | Paneles y tarjetas |
| `text` | `#0F172A` | `#F1F5F9` | Texto primario |
| `muted` | `#475569` | `#94A3B8` | Metadatos y notas |
| `primary` | `#4F46E5` | `#818CF8` | Acciones y navegación |
| `positive` | `#047857` | `#34D399` | Resultados correctos |
| `warning` | `#B45309` | `#FBBF24` | Advertencias |

- Tipografía sans-serif de alta legibilidad; fuentes del sistema como fallback y opción de servir fuentes locales.
- En presentación: titulares de 36–56 px y cuerpo de 24–32 px como referencia en una pantalla típica, con escalado responsivo.
- En lectura: cuerpo de 16–18 px; ancho de párrafos controlado; textos breves por bloque.
- Diagramas SVG accesibles; transiciones de 150–300 ms; respetar `prefers-reduced-motion`.
- La información no se codifica exclusivamente por color: acompañar con textos, iconos o patrones.
- Contraste adecuado y navegación por teclado para preguntas, demos y menús.

## 6. Estructura de cada lección

1. **Pregunta disparadora:** una duda real o analogía.
2. **Idea en una frase:** explicación de máximo dos oraciones.
3. **Desarrollo visual:** de 2 a 5 pasos progresivos.
4. **Demo:** manipulación que evidencia la explicación.
5. **Ejemplo real de aplicación:** trabajo, diseño, negocio o desarrollo.
6. **Errores frecuentes:** al menos uno.
7. **Preguntas de repaso:** 2–4 preguntas con explicación para cada respuesta.
8. **Resumen:** 3 ideas clave.
9. **Continuación:** siguiente lección y laboratorio asociado.

**Tiempo de exposición por tema:** 5–13 minutos en el recorrido de 90 minutos. El modo lectura puede ofrecer mayor profundidad.

## 7. Componentes reutilizables

| Componente | Responsabilidad |
| --- | --- |
| `LearningShell` | Cabecera, navegación y tema visual |
| `CourseMap` | Índice por bloques y progreso |
| `LessonLayout` | Estructura estable de lección |
| `PresentationShell` | Modo exposición, avance por pasos, progreso y atajos |
| `LessonStep` | Unidad de revelación secuencial |
| `ConceptCard` | Definición simple y ejemplo |
| `AnalogyBlock` | Analogía cotidiana claramente diferenciada de la explicación técnica |
| `InteractiveDemo` | Contenedor uniforme para demos y estados de ejecución |
| `Quiz` | Opciones, feedback por pregunta, puntuación opcional |
| `KeyTakeaways` | Resumen de tres ideas |
| `CodeExample` | Código resaltado, copiar, abrir laboratorio |
| `LabLayout` | Instrucciones, demo, variantes y enlace a repositorio |
| `PresenterNotes` | Material del expositor en un panel/ruta separable, no mostrado de forma predeterminada en proyección |
| `GlossaryLink` | Término con definición breve y enlace a glosario |

**Regla:** componentes visuales genéricos separados de contenido y de la lógica específica de cada demo. No crear framework de plugins en el MVP.

## 8. Modelo de contenidos

La fuente de verdad será un registro tipado de lecciones y archivos MDX locales, compilados durante el build. Los ejercicios prácticos tienen rutas predecibles a `/labs` dentro del mismo repositorio.

```ts
type LessonMetadata = {
  id: string;
  slug: string;
  block: 1 | 2 | 3 | 4;
  title: string;
  audience: 'all' | 'technical';
  level: 'basic' | 'intermediate';
  estimatedMinutes: number;
  prerequisites: string[];
  demoId?: string;
  labPath?: string;
  learningObjectives: string[];
};

type QuizQuestion = {
  id: string;
  prompt: string;
  answers: { id: string; label: string }[];
  correctAnswerId: string;
  explanation: string;
};

type LearningPath = {
  id: string;
  title: string;
  segments: { lessonId: string; stepIds?: string[] }[];
};
```

**Contenido en MDX:** introducción, bloques explicativos, `LessonStep`, `InteractiveDemo`, preguntas y resumen. Los metadatos se validan en tiempo de build. No se permite contenido MDX remoto no confiable en el MVP, ya que MDX compila a componentes ejecutables.

## 9. Temario completo (16 temas)

| Bloque | Tema | Núcleo | Extensión práctica |
| --- | --- | --- | --- |
| Fundamentos | 01 · Mapa de IA | IA, ML, DL y generativa | Clasificación de ejemplos |
| Fundamentos | 02 · Qué es un LLM | Predicción y capacidades | Simulador de siguiente token |
| Fundamentos | 03 · Funcionamiento | Entrenamiento, inferencia, Transformers intuitivos | Secuencia visual de generación |
| Fundamentos | 04 · Tokens | Tokenización y contexto | Tokenizador real de referencia |
| Interacción | 05 · Prompts | Instrucciones, restricciones, ejemplos | A/B de prompts |
| Interacción | 06 · Contexto y memoria | Límites y fuentes de información | Medidor de contexto |
| Interacción | 07 · Confiabilidad | Alucinaciones y variabilidad | Comparación de salidas |
| Interacción | 08 · Modelos y APIs | Modelos, endpoints, multimodalidad | Request/respuesta explicado |
| Agentes | 09 · Tools | Function calling | Simulador de herramienta |
| Agentes | 10 · Agentes | Planificar, actuar, observar, validar | Ciclo de ejecución |
| Agentes | 11 · Skills | Instrucciones reutilizables | Skill `SKILL.md` |
| Agentes | 12 · MCP | Host, cliente, servidor, recursos y herramientas | Cliente/servidor MCP simple |
| Agentes | 13 · Embeddings y RAG | Chunks, búsqueda y recuperación | Mini RAG ilustrado |
| Aplicación | 14 · Seguridad | Privacidad, prompt injection y permisos | Ataque documentado, defensa explicada |
| Aplicación | 15 · Evaluación | Tests, criterios y guardrails | Evaluación de respuestas |
| Aplicación | 16 · IA en SDLC | Análisis → código → tests → revisión | Demo integradora |

**Criterio pedagógico:** nunca presentar todas las cuestiones de arquitectura de agentes, MCP o RAG en la charla de 90 minutos. En la charla se expone la idea y la demostración; el laboratorio técnico queda como continuación.

## 10. Dos lecciones piloto para validar el diseño

### Piloto A — Qué es un LLM

**Objetivo:** explicar que un LLM aprende patrones estadísticos durante el entrenamiento y genera texto prediciendo tokens, sin reducir toda su capacidad a un simple autocompletado convencional.

**Guion en 6 pasos:**
1. Pregunta: «¿Cómo puede responder algo que nunca vio escrito exactamente así?».
2. Analogía: juego de completar frases.
3. Demostración guiada: elegir un token a partir de probabilidades ficticias y repetir la selección para construir una oración.
4. Distinción clara: entrenamiento vs inferencia y diferencia respecto de buscar una respuesta en una base de datos.
5. Límite: poder producir una respuesta plausible no garantiza que sea verdadera.
6. Repaso con tres preguntas y tres conclusiones.

**Demo:** `NextTokenSimulator`. Datos predeterminados, selección reproducible, avance/retroceso y control de variabilidad *ilustrativo*, con etiqueta de simulación educativa.

**Criterio de aceptación:** cualquier participante puede explicar en sus palabras la diferencia entre entrenar y usar un modelo y por qué una respuesta fluida puede contener errores.

### Piloto B — Tokens y tokenización

**Objetivo:** explicar cómo se representa el texto antes del procesamiento y por qué el tokenizador influye en conteos y límites.

**Guion en 6 pasos:**
1. Pregunta: «¿Una palabra equivale a un token?».
2. Definición: tokens como unidades de una codificación del texto.
3. Demo: escribir texto, ejecutar un tokenizador de referencia, visualizar tokens e IDs.
4. Comparar español, inglés, números, signos y emojis (con el tokenizador seleccionado).
5. Relación con ventana de contexto y límites de uso.
6. Repaso con tres preguntas y tres conclusiones.

**Demo:** `TokenizerExplorer`; integración de biblioteca de tokenización verificada para el modelo/codificación elegido; mostrar el nombre de la codificación y evitar generalizar el resultado a todos los modelos.

**Criterio de aceptación:** el participante observa que tokens y palabras no son equivalentes y que distintas codificaciones pueden producir diferentes segmentaciones.

## 11. Laboratorios y modo de ejecución

| Laboratorio | Tipo MVP | Tipo ampliado |
| --- | --- | --- |
| Next Token | Simulación local, datos rotulados | Comparación con salida real de API |
| Tokenizer | Biblioteca local de tokenización | Comparar codificaciones compatibles |
| Prompt | Casos A/B reproducibles | API real desde servicio seguro o CLI local |
| Agent | State machine simulada | Agente con tool calling real |
| MCP | Diagrama y trazas predefinidas | Node.js con cliente y servidor MCP |
| RAG | Documentos/chunks y ranking ilustrado | Embeddings reales y recuperación híbrida |

**Regla de seguridad:** nunca incluir claves de API en el frontend ni pedir a los asistentes que las introduzcan en una web pública. Si un laboratorio real necesita credenciales, ejecutarlo desde un proceso local o backend seguro explícito.

## 12. Arquitectura técnica preliminar

- **Web:** React + TypeScript + Vite.
- **CSS:** Tailwind CSS con variables de diseño, temas y componentes reutilizables pequeños.
- **Contenido:** MDX local + catálogo tipado; compilación en build, no CMS.
- **Rutas:** router simple con páginas lazy-loaded por tema/laboratorio.
- **Estado:** React local state para interacciones; contexto global mínimo para presentación/tema y `localStorage` para progreso opcional.
- **Tests:** Vitest para utilidades y componentes, React Testing Library y Playwright para recorridos esenciales.
- **Edición ejecutable:** Sandpack solo donde aporte valor y teniendo en cuenta su dependencia de un bundler en línea; los demos críticos no dependerán de Sandpack.
- **Publicación:** build estático con fallback SPA configurado, o estrategia de rutas compatible con el proveedor.
- **Sin backend en MVP**, excepto laboratorios locales independientes que necesiten procesos Node.js.

### Árbol inicial recomendado

```text
ai-learning/
├── web/
│   ├── src/
│   │   ├── app/                   # router, estilos, tema
│   │   ├── components/            # visuales y pedagógicos
│   │   ├── features/
│   │   │   ├── course/
│   │   │   ├── presentation/
│   │   │   ├── quizzes/
│   │   │   └── labs/
│   │   └── demos/
│   │       ├── next-token/
│   │       └── tokenizer/
│   └── package.json
├── content/
│   ├── course.ts                  # metadatos y recorridos
│   ├── lessons/                   # 16 MDX; 2 en prototipo
│   └── glossary.ts
├── labs/
│   ├── 01-tokenization/
│   ├── 02-prompt-engineering/
│   └── .../
├── shared/
├── docs/
└── README.md
```

El árbol se puede simplificar durante la implementación; no es una exigencia crear carpetas vacías ni capas abstractas sin uso.

## 13. Fases y alcance

### Entrega 1 — Validación UX (primera implementación)

- Portada, índice y navegación.
- Lectura/presentación sobre la misma fuente de contenido.
- Tema claro/oscuro y diseño responsive.
- Lección piloto LLM y lección piloto Tokens.
- `NextTokenSimulator`, `TokenizerExplorer` y componente `Quiz`.
- Resúmenes, enlaces de glosario y notas básicas para el expositor.
- Tests básicos de navegación, simulador y quiz.

### Entrega 2 — Charla de 90 minutos

- Selección de segmentos del temario y duración estimada.
- Contenido didáctico de las secciones esenciales del recorrido.
- Laboratorios conceptuales de prompts, tools/agentes, MCP, RAG y calidad.
- Revisión de guion, ejercicios y simulación completa de presentación.

### Entrega 3 — Taller técnico y repositorio

- Ejemplos ejecutables Node.js/TypeScript.
- Servidor MCP real, ejemplo de skill, tool calling, embeddings/RAG y evaluaciones.
- README por práctica, tests y solución completa.

### Entrega 4 — Publicación y robustez

- Accesibilidad, rendimiento, cobertura e2e, despliegue y documentación del presentador.

## 14. Definition of Done — Entrega 1

- [ ] Dos lecciones navegables con introducción, explicación visual, demo, quiz y resumen.
- [ ] Cambio entre modo lectura y presentación preservando la lección activa.
- [ ] Controles anterior/siguiente y teclado funcionando sin interferir con inputs.
- [ ] Simulador de predicción etiquetado como ilustrativo y funcional sin servicios externos.
- [ ] Tokenizador de referencia real e identificación clara de la codificación usada.
- [ ] Quiz con respuesta, explicación y posibilidad de reiniciar.
- [ ] Diseño legible en proyector, escritorio y teléfono; soporte para movimiento reducido.
- [ ] Navegación y componentes críticos cubiertos por pruebas automatizadas.
- [ ] README con comandos de instalación y ejecución.

## 15. Decisiones y exclusiones

**Decidido:** producto web interactivo; una fuente de contenidos; React/Vite/TypeScript/Tailwind; 16 temas como mapa completo; MVP sin backend; demos rotuladas según tipo; dos lecciones piloto antes de completar el temario.

**No construir aún:** login, perfiles, sincronización de progreso, certificados, analíticas, plataforma multiusuario, motor de evaluación remoto, RAG empresarial y agentes persistentes.

**Decisiones diferibles:** branding definitivo, proveedor de hosting, proveedor/modelo opcional para demos reales, biblioteca exacta del tokenizador, mecanismo avanzado de notas dual-screen. Ninguna bloquea el prototipo.

## 16. Referencias técnicas consultadas

- Vite: https://vite.dev/guide/
- React: https://react.dev/learn/installation
- Tailwind CSS con Vite: https://tailwindcss.com/docs/installation/using-vite
- MDX en React: https://github.com/mdx-js/mdx/blob/main/packages/react/readme.md
- Sandpack: https://sandpack.codesandbox.io/docs

**Siguiente hito:** implementar la Entrega 1 conforme a esta especificación, comenzando por el shell, el modelo de contenidos y las dos lecciones piloto.
