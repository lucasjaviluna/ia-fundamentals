# IA Fundamentals — Plan integral de implementación

**Proyecto:** [lucasjaviluna/ia-fundamentals](https://github.com/lucasjaviluna/ia-fundamentals)  
**Producto:** AI Learning Experience (web interactiva + modo presentación + laboratorios prácticos)  
**Estado del plan:** aprobado; ejecución incremental  
**Última consolidación:** 5 de noviembre de 2026  
**Base de referencia:** [Especificación funcional Fase 1](./AI_Learning_Fase_1_Especificacion.md)  
**Estado de la primera entrega:** [Entrega 1](./Entrega_1_Implementacion.md)

> **Cómo leer este documento:** contiene el plan completo aprobado y el estado verificado de su implementación. Los elementos `[x]` son decisiones o entregables ya materializados; los `[ ]` son trabajo pendiente. No confundir la charla prevista de 90 minutos con la versión piloto actualmente disponible.

## 1. Visión y objetivo

Construir una **plataforma educativa sencilla, visual, agradable e interactiva**, que permita explicar a otros los fundamentos de inteligencia artificial, desde IA/LLM y tokenización hasta prompts, agentes, Skills, MCP, embeddings y RAG.

El objetivo pedagógico no es que los asistentes memoricen siglas: deben **comprender cada concepto, observar una demostración, probar un ejemplo y poder explicarlo con sus palabras**.

### Entregables finales

1. **Web educativa** navegable, apta para estudio autónomo y para proyectar durante una charla.
2. **Modo presentación** que avance secuencialmente por los contenidos de la misma web, con control del expositor y notas.
3. **Laboratorios interactivos** dentro de la web, con simulaciones honestamente identificadas y ejecuciones locales reproducibles.
4. **Repositorio de prácticas** con código Node.js/TypeScript, desafíos, soluciones, pruebas y guías paso a paso.
5. **Guía del presentador**: guion, tiempos, analogías, respuestas, preguntas al público, dependencias y planes de contingencia.

El repositorio **`ia-fundamentals` contiene el código, contenido y documentación**. No se necesita separar una presentación y un proyecto de prácticas en repositorios diferentes en el MVP.

## 2. Decisión de producto: web frente a diapositivas

| Criterio | Diapositivas tradicionales | Web interactiva |
|---|---|---|
| Claridad visual | Excelente | Excelente, si se controla la densidad |
| Demos en vivo | Enlaces o aplicaciones externas | Embebidas en la lección |
| Preguntas con respuesta revelable | Posibles, pero manuales | Integrables y reutilizables |
| Edición de ejemplos | Limitada | Natural |
| Autoaprendizaje | Menor capacidad | Navegación por temas y ejercicios |
| Reutilización | Exportación/duplicación | Contenido único |
| Coste de mantenimiento | Menor inicialmente | Moderado, con mayor reutilización |

**Decisión aprobada:** una **web interactiva con modo presentación**. El modo lectura y el modo presentación deben consumir los **mismos datos de lección**; no mantener dos versiones de la explicación.

**Principios:** comprensión antes que tecnicismos, una idea central por pantalla, explicaciones progresivas, interacción con propósito, ejemplos cotidianos, precisión técnica, alternativas sin conexión y ausencia de sobreingeniería.

## 3. Público, niveles y usos

| Público | Qué debe poder lograr | Profundidad |
|---|---|---|
| Negocio, diseño, producto y analistas | Entender conceptos, límites y casos reales | **Esencial / Básico** |
| Desarrolladores y perfiles técnicos | Integrar conceptos en flujos de software | **Intermedio** |
| Técnicos que completan el taller | Ejecutar, modificar y validar código | **Avanzado opcional** |
| Expositor | Conducir una charla clara con demostraciones y repaso | Guion específico |

**Tres recorridos compatibles:**

- **`intro-90`**: charla de aproximadamente 90 minutos, exposición conceptual y demos cortas.
- **`completo`**: 16 temas, lectura libre y ampliaciones técnicas.
- **Taller práctico**: laboratorio de aproximadamente 2–3 horas adicionales, dividido en ejercicios autónomos. Es una orientación para diseñar el programa, no una promesa de duración exacta.

Un futuro recorrido `negocio-60` puede seleccionar menos pasos sin duplicar contenido. Se implementará solo si aporta valor.

### Criterio para la profundidad

- **Básico:** responder «qué es», «para qué sirve», «ejemplo», «limitación»; sin fórmulas ni detalles de implementación.
- **Intermedio:** «cómo interactúa con otros componentes», «qué datos entran/salen», «cómo se integra», «qué puede fallar».
- **Avanzado opcional:** código real, decisiones de arquitectura, pruebas y comparaciones técnicas. Nunca obligatorio para entender el concepto.

No explicar en detalle matrices, retropropagación o matemática de la atención en la charla principal. Estarán disponibles como referencias para una versión avanzada si se solicitan.

## 4. Estructura didáctica obligatoria por lección

Todas las lecciones mantienen un contrato pedagógico:

1. **Pregunta disparadora:** conectar el tema con una duda concreta.
2. **Idea en una frase:** definición breve con lenguaje claro.
3. **Analogía cotidiana:** ayuda a comprender, identificada como analogía.
4. **Secuencia visual:** entre 2 y 5 pasos o un diagrama progresivo.
5. **Ejemplo práctico:** demostración modificable que evidencie causa y efecto.
6. **Ejemplo real de uso:** negocio, diseño o ingeniería de software.
7. **Errores y límites:** mínimo un malentendido frecuente.
8. **Repaso:** entre 2 y 4 preguntas de opción múltiple con explicación de cada respuesta.
9. **Tres conclusiones:** resumen que el participante debería poder repetir.
10. **Continuación:** siguiente tema y, si corresponde, vínculo al ejercicio del repositorio.
11. **Recursos opcionales:** cuando aporten valor, incluir enlaces confiables y pertinentes en una sección plegable discreta, indicando el idioma si corresponde.

**Ejemplo de repaso — tokenización:** «¿un token es siempre una palabra?», «¿dos modelos pueden contar tokens de forma distinta?», «¿por qué importa al calcular el contexto?».

El repaso debe funcionar en dos modalidades: en lectura, selección y feedback; en exposición, posibilidad de invitar al público a contestar antes de revelar la respuesta.

## 5. Programa integral: cuatro bloques y 16 temas

**Estados:** `Disponible` = lección navegable implementada; `Pendiente` = planificada, no implementada como lección. Cada tema de esta tabla describe contenido y demo objetivo, no afirma que estén disponibles hoy.

### Bloque I — Fundamentos

| # | Tema | Profundidad y explicación prevista | Demostración | Estado |
|---|---|---|---|---|
| 01 | Mapa de la IA | **Básico.** IA vs machine learning vs deep learning vs IA generativa, relaciones y ejemplos | Clasificador de casos cotidianos | **Disponible** |
| 02 | ¿Qué es un LLM? | **Básico.** Modelo de lenguaje, patrones, inferencia, capacidades y errores | Predicción de siguiente fragmento con probabilidades ficticias | **Disponible** |
| 03 | ¿Cómo funciona un LLM? | **Básico + ampliación.** Entrenamiento, inferencia, Transformers de forma intuitiva, generación progresiva | Recorrido de entrada → tokens → modelo → salida | **Disponible** |
| 04 | Tokens y tokenización | **Básico + práctico.** Segmentación, IDs, codificaciones, relación con contexto y uso | Tokenizador local con texto editable y IDs reales | **Disponible** |

**Nivel que se busca:** después del bloque, el público distingue un LLM de un buscador, explica entrenamiento frente a inferencia y comprende por qué un token no equivale a una palabra.

### Bloque II — Interacción con modelos

| # | Tema | Profundidad y explicación prevista | Demostración | Estado |
|---|---|---|---|---|
| 05 | Prompts y prompt engineering | **Básico + práctico.** Instrucciones, contexto, restricciones, formato, zero-shot y few-shot | Comparador de ejemplos preparados | **Disponible** |
| 06 | Ventana de contexto y memoria | **Básico.** Tokens de entrada/salida, límites, historial, compactación, pérdida de contexto y memoria externa | Medidor visual de espacio disponible | **Disponible** |
| 07 | Confiabilidad y alucinaciones | **Básico.** Respuestas plausibles pero erróneas, incertidumbre, variación, temperatura | Comparación ilustrativa de afirmaciones y evidencia ficticia | **Disponible** |
| 08 | Modelos, APIs y multimodalidad | **Básico + intermedio.** Chat vs API, parámetros, request/response, texto, imagen, audio | Petición JSON simulada y ejemplo opcional de API desde Node.js | Pendiente |

**Nivel que se busca:** escribir un prompt claro, distinguir instrucciones de contexto y entender por qué las respuestas deben revisarse.

### Bloque III — Agentes, herramientas y recuperación de información

| # | Tema | Profundidad y explicación prevista | Demostración | Estado |
|---|---|---|---|---|
| 09 | Tools y function calling | **Intermedio.** Descripción de herramientas, argumentos, resultado y límites | Solicitud `getOrderStatus(id)` y retorno de datos ficticios | Pendiente |
| 10 | Agentes y workflows | **Intermedio.** Modelo, tools, estado, bucles de ejecución, decisiones y aprobación humana | Trazas planificar → actuar → observar → validar | Pendiente |
| 11 | Agent Skills | **Intermedio.** Instrucciones reutilizables, recursos, activación contextual, `SKILL.md` | Skill que guía la revisión de un cambio de código | Pendiente |
| 12 | MCP | **Intermedio.** Host, cliente, servidor, tools, resources y prompts | Explorador visual + cliente/servidor MCP real en el taller | Pendiente |
| 13 | Embeddings, chunks y RAG | **Básico + intermedio.** Vectores, chunks, búsqueda lexical/semántica, recuperación y uso en prompts | Recuperar fragmentos de un corpus pequeño, mostrar fuentes y ranking | Pendiente |

**Diferencias importantes a enseñar:** un agente no es simplemente un prompt largo; una Skill orienta instrucciones, MCP conecta recursos/herramientas, y RAG recupera contexto. Son mecanismos complementarios y no equivalentes.

**RAG avanzado (solo extensión técnica):** chunking según estructura documental, metadatos, búsqueda híbrida, reranking, evaluación de relevancia y citas de procedencia. No diseñar un RAG empresarial completo dentro de esta plataforma educativa.

### Bloque IV — Calidad y aplicación

| # | Tema | Profundidad y explicación prevista | Demostración | Estado |
|---|---|---|---|---|
| 14 | Seguridad y buenas prácticas | **Básico.** Privacidad, permisos, secretos, prompt injection, datos no confiables | Documento con instrucción maliciosa simulada y mitigación comentada | Pendiente |
| 15 | Evaluación y guardrails | **Intermedio.** Casos de prueba, criterios, resultados, aprobaciones humanas y trazabilidad | Evaluar respuestas frente a criterios definidos | Pendiente |
| 16 | IA aplicada al SDLC | **Intermedio + taller.** Historia de usuario → análisis → código → tests → revisión | Demo integradora con validación humana | Pendiente |

**Nivel que se busca:** reconocer riesgos, diferenciar evidencia de una respuesta agradable y conocer un proceso de desarrollo asistido con validaciones.

## 6. Laboratorios interactivos en la web

Cada demo incluye título, objetivo, tipo de ejecución, datos de entrada, controles, explicación observable, advertencia sobre límites y enlace de profundización.

| Lab visual | Experiencia | Tipo / implementación | Entrega |
|---|---|---|---|
| **Next Token Simulator** | Elegir entre continuaciones sucesivas y ver cómo se construye una frase | **Simulación** con distribuciones ficticias; sin API | **E1: implementado** |
| **Tokenizer Explorer** | Cambiar texto, idioma, signos, emojis; visualizar tokens/IDs | **Ejecución local** con `js-tiktoken`, `cl100k_base` | **E1: implementado** |
| **AI Concept Classifier** | Clasificar ejemplos según tipo de IA | Simulación didáctica local | **E2: implementado** |
| **Prompt Playground** | Comparar prompt inicial y prompt mejorado | Casos preparados y reproducibles | **E2: implementado** |
| **Context Meter** | Visualizar ocupación de contexto y exceso hipotético | Simulación local con límite ficticio | **E2: implementado** |
| **Reliability Explorer** | Contrastar respuestas y comprobar evidencias | Casos ficticios con explicación | **E2: implementado** |
| **Tool/Agent Visualizer** | Inspeccionar argumentos, llamada, respuesta y siguiente decisión | Trazas locales; sin ejecución autónoma sobre datos reales | E2 |
| **Skills Explorer** | Ver una skill, cuándo se aplica y qué instrucciones contiene | Recorrido guiado; fichero real en taller | E2/E3 |
| **MCP Explorer** | Descubrir tools/resources y observar mensajes | Simulación en web, servidor real en laboratorio local | E2/E3 |
| **RAG Explorer** | Ver documentos, chunks, búsqueda y contexto seleccionado | Corpus pequeño; ranking explicado; implementación avanzada en taller | E2/E3 |
| **Evaluation Explorer** | Revisar respuestas según una rúbrica | Evaluación local ilustrativa y tests reales opcionales | E2/E3 |

### Etiquetas innegociables

- **SIMULACIÓN EDUCATIVA:** valores preparados o lógica didáctica; no atribuir al modelo respuestas inexistentes.
- **EJECUCIÓN LOCAL:** cálculo real en navegador o Node.js; indicar biblioteca y codificación cuando corresponda.
- **MODELO REAL:** uso explícito de un proveedor o modelo; indicar dependencia de red, credenciales y posibles costes.

Una demo principal debe funcionar en el navegador **sin depender de una API**. Cuando se requiera descargar la app inicialmente, «offline» significa con los recursos ya instalados o cacheados: implementar y probar una estrategia offline explícita antes de prometer funcionamiento sin conexión después de recargar.

## 7. Guion de la charla introductoria (90 minutos)

| Segmento | Tiempo | Enfoque |
|---|---:|---|
| Introducción: mapa de IA | 5 min | Distinguir conceptos |
| Qué es y cómo funciona un LLM | 10 min | Analogía y predicción |
| Tokens y tokenización | 8 min | Demo del tokenizador |
| Prompts y ejemplos | 12 min | Antes/después de un prompt |
| Contexto y alucinaciones | 8 min | Límites y validación |
| Tools y agentes | 10 min | Ciclo y trazas |
| Skills y MCP | 13 min | Diferencias y recorrido visual |
| Embeddings y RAG | 10 min | Recuperación y fragmentos |
| Seguridad y calidad | 8 min | Permisos y evaluaciones |
| Demo integradora y cierre | 6 min | Resumen y preguntas |
| **Total** | **90 min** | |

**Condición de diseño:** la charla utiliza segmentos seleccionados del catálogo, no necesita navegar por las 16 lecciones completas de manera secuencial. Requiere implementar un recorrido `intro-90` o un guion equivalente con pasos y tiempos, con posibilidad de saltar la profundización técnica.

### Material del presentador que debe crearse

- Objetivos concretos y analogías de cada sección.
- Notas privadas o colapsables (en la versión actual no hay segunda pantalla independiente).
- Preguntas antes de revelar la explicación y respuestas razonadas.
- Guion de cada demo, tiempos sugeridos y escenario alternativo si falla la conexión.
- Referencias de código para cuando una persona pida profundizar.
- Cierre con mapa conceptual que conecte LLM → prompt → tokens → tools/agente → Skills/MCP → RAG → validación.

## 8. Funcionalidad y experiencia de usuario

### Rutas

| Ruta | Contenido | Estado |
|---|---|---|
| `/` | Portada, propuesta y accesos | E1: disponible |
| `/curso` | Mapa de bloques, temas y progreso | E1: disponible |
| `/curso/:slug` | Lección interactiva completa | E1/E2: siete slugs disponibles |
| `/presentar/:slug` | Presentación por pasos de una lección | E1: disponible |
| `/labs/:slug` | Demo ampliada | E1/E2: siete laboratorios disponibles |
| `/glosario` | Definiciones breves | E1: disponible |

### UX base

- Cabecera sencilla, navegación visible y tema claro/oscuro.
- Tipografía grande, espacios amplios, colores consistentes y diagramas legibles.
- Modo presentación a pantalla completa, flechas para avanzar, `Esc` para salir, `F` para fullscreen, `?` para ayuda; atajos deshabilitados cuando corresponda en controles editables.
- Notas de presentador ocultas por defecto; **no** se promete aislamiento de notas en pantalla separada en E1.
- Quizzes con feedback de cada pregunta, reinicio y progreso local.
- Resúmenes de tres ideas y enlaces al laboratorio.
- Responsive, teclado, foco visible, etiquetas accesibles, contraste y soporte `prefers-reduced-motion`.

### Diseño visual

Dirección editorial/tecnológica minimalista; componentes con jerarquía clara, no estética de consola como interfaz principal. Tokens aprobados documentados en [la especificación Fase 1](./AI_Learning_Fase_1_Especificacion.md). Se admiten temas oscuro y claro. Animaciones cortas solo cuando explican una relación o una transición.

## 9. Arquitectura y decisiones tecnológicas

**Base actual:**

- React + TypeScript + Vite.
- Tailwind CSS v4, variables de diseño y estilos locales.
- React Router para SPA.
- Catálogo y lecciones **tipadas en TypeScript**, compartidas por lectura y presentación.
- `js-tiktoken` para tokenización local `cl100k_base`.
- `localStorage` para tema y progreso.
- Vitest + React Testing Library para tests; GitHub Actions para instalación, typecheck, tests y build.

**Evaluación diferida:** MDX local para contenido editorial largo cuando exista necesidad real, Playwright para automatización de los recorridos críticos, Sandpack en ejercicios que requieran editor embebido, generación con API real desde un servicio local/seguro.

**No introducir en MVP:** backend persistente, autenticación, base de datos, CMS, microfrontends, RAG empresarial, un framework propio de plugins, plataforma multiusuario ni un agente persistente para operar la web.

### Organización del repositorio

```text
ia-fundamentals/
├── README.md
├── web/                         # Aplicación React (implementado)
│   ├── src/
│   │   ├── app/                 # Navegación y layout
│   │   ├── components/          # Lecciones, preguntas y resúmenes
│   │   ├── data/                # Registro tipado / progreso
│   │   ├── demos/               # Demos locales
│   │   └── pages/               # Vistas, presentación y laboratorios
│   └── package.json
├── docs/
│   ├── README.md                # Índice documental (este plan lo incorpora)
│   ├── PLAN_IMPLEMENTACION.md   # Documento rector
│   ├── AI_Learning_Fase_1_Especificacion.md
│   └── Entrega_1_Implementacion.md
└── labs/                         # A CREAR en E3, no existe todavía
    ├── 01-tokenization/
    ├── 02-prompt-engineering/
    ├── ...
    └── 12-final-project/
```

**Política arquitectónica:** componentes pedagógicos reutilizables, demos independientes y datos de lección separados de la UI. Evitar abstracciones que solo tengan un consumidor. El material se versiona con el código.

### Modelo de contenidos

El tipo real `Lesson` y los datos de las lecciones disponibles viven en `web/src/data/lessons.ts`. Un objeto de lección incluye metadatos, pregunta, idea central, pasos, demo asociada, preguntas y conclusiones. La página de lectura y la presentación interpretan los mismos `LessonStep`.

A futuro se agregará un `LearningPath` (`intro-90` y `completo`) con selección de segmentos o pasos, sin copiar texto ni preguntas. Añadir validación de metadatos cuando el catálogo crezca. No migrar prematuramente a un CMS.

## 10. Repositorio práctico: ejercicios, soluciones y tests

**Objetivo:** permitir que las explicaciones visuales desemboquen en código ejecutable. Los siguientes doce directorios son **planificados; todavía no están implementados**.

| Práctica | Objetivo concreto | Resultado esperado |
|---|---|---|
| `01-tokenization` | Tokenizar frases y comparar variaciones | CLI que imprime IDs/conteos con tests |
| `02-prompt-engineering` | Construir prompt con rol, contexto, ejemplos y JSON esperado | Dos casos comparados con evaluación simple |
| `03-llm-api` | Hacer una solicitud a un modelo desde Node.js | Script configurable con secretos fuera del código |
| `04-tool-calling` | Declarar y ejecutar `getOrderStatus(id)` | Herramienta que devuelve datos ficticios |
| `05-agent-loop` | Ejecutar acciones con límite de pasos | Bucle con estado, trazas y aprobación humana |
| `06-agent-skills` | Escribir una skill de revisión de código | `SKILL.md` + ejemplo de activación/instrucciones |
| `07-mcp-server` | Exponer una herramienta con SDK oficial MCP | Servidor Node/TypeScript ejecutable |
| `08-mcp-client` | Descubrir e invocar la herramienta MCP | Cliente, manejo básico de errores y resultado |
| `09-embeddings` | Comparar similitud de textos | Vectores y ranking explicados con modelo opcional |
| `10-rag` | Crear chunks, recuperar contexto y responder con fuentes | Mini RAG sobre documentos de ejemplo |
| `11-evaluations` | Crear casos, reglas y comparación de respuestas | Evaluador local con reporte de resultados |
| `12-final-project` | Combinar prompt, tool, recuperación y validación | Miniworkflow desde requerimiento hasta verificación |

### Contrato por práctica

Cada directorio incluirá cuando se implemente:

- `README.md` con objetivo, teoría mínima, requisitos, comandos y resultado esperado.
- `starter/` con código de partida y tareas `TODO`.
- `solution/` con **solución completa**, no solo pistas.
- `tests/` con comprobaciones automatizadas de la práctica cuando aplique.
- Datos de prueba locales y salidas reproducibles.
- Indicaciones explícitas sobre cuándo hace falta una API o conexión y alternativas offline cuando sea viable.
- Relación con la lección y con el laboratorio interactivo de la web.

**Reglas:** código comprensible y pequeño, Node.js/TypeScript, ejercicios independientes (no instalar todo para probar uno), ejemplos seguros y sin claves de acceso en la web.

## 11. Estrategia de desarrollo por entregas

### Fase 0 — Plan y diseño pedagógico

**Objetivo:** definir enfoque, experiencia y temario.

- [x] Comparación y elección de web interactiva con modo presentación.
- [x] Definición de público, profundidad y estructura de lección.
- [x] Temario de 16 temas y cuatro bloques.
- [x] Wireframes, navegación, criterios y especificación Fase 1.
- [x] Repositorio oficial y documentación de base.

**Evidencia:** `docs/AI_Learning_Fase_1_Especificacion.md`.

### Entrega 1 — MVP piloto y validación de UX

**Objetivo:** probar la experiencia con dos lecciones completas.

- [x] Portada, mapa y navegación.
- [x] Lectura y presentación alimentadas por un mismo modelo de datos.
- [x] Lección «¿Qué es un LLM?» con explicación, simulador y quiz.
- [x] Lección «Tokens y tokenización» con tokenizador local y quiz.
- [x] Laboratorios independientes, glosario y tema claro/oscuro.
- [x] Notas plegadas y controles básicos de teclado.
- [x] Tests automatizados básicos y pipeline de compilación exitoso.
- [x] **Revisión visual** realizada por el usuario.
- [ ] **Revisión de accesibilidad manual** en escritorio, móvil y proyector.
- [ ] **Prueba real de una mini charla** para validar claridad, tiempos y densidad por paso.
- [ ] **Comprobar comportamiento offline** si se comunica públicamente esa capacidad.

**Criterios de cierre:** dos lecciones demostrables, repaso correcto, navegación funcional, experiencia legible y revisión de uso real. **E1 está implementada técnicamente, pero su validación pedagógica/manual continúa pendiente.**

**Evidencia técnica:** [GitHub Actions — pipeline E1 exitoso](https://github.com/lucasjaviluna/ia-fundamentals/actions/runs/41958459514).

### Entrega 2 — Charla de 90 minutos

**Objetivo:** entregar una charla completa y ensayable, no solo un índice.

- [ ] Incorporar las 9 lecciones faltantes (primero los segmentos que formen `intro-90`).
- [ ] Desarrollar las demos de clasificación de IA, prompting, contexto, tools/agentes, Skills, MCP y RAG, más seguridad y evaluación.
- [ ] Implementar recorrido `intro-90` como selección de pasos del catálogo, con progreso temporal/navegación clara.
- [ ] Añadir notas de presentador, ejemplos cotidianos, respuestas razonadas y conclusiones por tema.
- [ ] Mantener versiones básicas y profundizaciones técnicas colapsables.
- [ ] Asegurar que todas las demos críticas funcionan sin una API externa.
- [ ] Ensayar la charla completa; ajustar transiciones para que no se convierta en lectura de diapositivas.

**Criterios de cierre:** recorrido ejecutable de 90 minutos, contenido comprensible, demo en cada bloque, quizzes y resumen. Las secciones pendientes no deberán mostrarse como disponibles sin contenido real.

### Entrega 3 — Taller técnico y prácticas ejecutables

**Objetivo:** relacionar las lecciones con programación real.

- [ ] Crear directorios `labs/01`–`labs/12` del programa.
- [ ] Incluir `starter`, `solution`, pruebas y README en cada práctica.
- [ ] Incorporar un servidor y cliente MCP reales y una skill de ejemplo.
- [ ] Incluir tool calling y bucle de agente con control de pasos y aprobación.
- [ ] Añadir embeddings/RAG con corpus reducido y evidencias de recuperación.
- [ ] Preparar taller guiado y comandos reproducibles.
- [ ] Documentar claves y dependencias para laboratorios opcionales que consumen API.

**Criterios de cierre:** los ejercicios arrancan con las instrucciones, se puede comparar con soluciones completas, y sus tests no requieren credenciales por defecto.

### Entrega 4 — Publicación, calidad y mantenimiento

**Objetivo:** plataforma lista para usar frente a público y estudiar de forma autónoma.

- [ ] Pruebas e2e de navegación, quizzes, demos y presentación (Playwright o equivalente).
- [ ] Auditoría de accesibilidad: teclado, contraste, foco, lectores de pantalla y movimiento reducido.
- [ ] Verificación de rendimiento, tamaños de bundle y carga de recursos de tokenización.
- [ ] Validar despliegue estático y fallback SPA para rutas internas.
- [ ] Ensayar proyección, móvil, conexión degradada y contingencias.
- [ ] Completar guía del expositor, soporte de versiones, instrucciones de despliegue y contribución.

**Criterios de cierre:** despliegue documentado, tests pasando, laboratorios utilizables, recorrido comprobado con usuarios, notas listas y limitaciones conocidas explícitas.

### Orden sugerido de ejecución inmediata

1. Completar la validación pedagógica y de accesibilidad de E1; registrar problemas y mejoras concretas.
2. Implementar primero los temas `01`, `03` y `05` y sus demostraciones para completar el arco «qué es → cómo funciona → cómo interactuamos».
3. Incorporar `06` y `07` (contexto y confiabilidad).
4. Agregar `09`, `10`, `11` y `12` como secuencia «tools → agentes → Skills → MCP».
5. Completar `13`, `14`, `15` y `16`, más APIs/multimodalidad del `08`.
6. Configurar `intro-90` y ensayar su ritmo.
7. Comenzar E3 sin esperar a crear una plataforma compleja de ejecución remota.

## 12. Criterios de aceptación transversales

### Contenido

- [ ] Todos los temas tienen explicación elemental, demo, ejemplo real, malentendidos, 2–4 preguntas y tres ideas finales.
- [ ] La persona puede responder «qué es», «para qué sirve», «qué no hace» y «cuándo lo usaría».
- [ ] Las analogías y simulaciones no afirman comportamientos internos falsos.
- [ ] El vocabulario técnico se introduce antes de utilizarse.

### Funcionamiento

- [ ] Navegación lectura/presentación conserva lección y usa fuente única.
- [ ] El teclado no interrumpe textos editables ni el uso del quiz.
- [ ] Laboratorios con fallos recuperables y mensajes claros.
- [ ] Tema visual y progreso local funcionan; se explica que no sincronizan.
- [ ] La charla principal no depende de un proveedor comercial de modelos.

### Calidad

- [ ] `npm run typecheck`, `npm run test` y `npm run build` pasan en CI.
- [ ] Las rutas y la interacción fundamental tienen cobertura e2e antes de E4.
- [ ] No se exponen secretos, credenciales ni información privada.
- [ ] Las demos simuladas y las reales se diferencian claramente.
- [ ] La web es legible en proyector y usable con teclado y pantalla reducida.

## 13. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Exceso de información en 90 minutos | Recorrido `intro-90` con pasos seleccionados y profundización opcional |
| Simulaciones confundidas con capacidades reales | Etiquetas y notas de alcance explícitas |
| Demos que dependen de Internet o de APIs | Casos locales/reproducibles y escenario alternativo |
| Aparición de herramientas sin relación pedagógica | Cada demo responde una pregunta concreta y muestra causa/efecto |
| Arquitectura demasiado ambiciosa | Sin backend para MVP, sin CMS ni plugins propios |
| Tokenización presentada como universal | Mostrar la codificación usada y sus límites |
| Inseguridad con credenciales de modelos | Usar proceso local o backend seguro, nunca claves en el frontend |
| Quiz reducido a verdadero/falso sin comprensión | Explicaciones y ejemplos al revelar respuestas |
| Pérdida de trazabilidad del roadmap | Actualizar estados de esta documentación con cada entrega |

## 14. No objetivos y decisiones diferidas

**No objetivos de la primera versión:** cuentas, registro de alumnos, calificaciones persistentes en servidor, certificaciones, panel docente, colaboración en tiempo real, analítica avanzada, micrositios separados por tema, RAG corporativo, autenticación ni agentes autónomos hospedados.

**Evaluar solo cuando exista una necesidad:** MDX, edición de código embebida, exportar diapositivas a PDF/PPTX, multiidioma, segundo monitor con notas privadas, PWA/offline completo, proveedor/modelo de API real, automatización de evaluación con modelos y despliegue específico.

## 15. Estado de implementación al 5 de noviembre de 2026

| Elemento | Estado |
|---|---|
| Plan pedagógico y Fase 1 | **Documentados** |
| Repositorio `ia-fundamentals` | **Creado y conectado** |
| Portada, mapa, glosario, temas | **Implementados** |
| Modo lectura y presentación por lección | **Implementado** |
| Lección 02 — LLM | **Implementada** |
| Lección 04 — Tokens | **Implementada** |
| Simulador siguiente fragmento | **Implementado (ficticio)** |
| Tokenizador `cl100k_base` | **Implementado (local)** |
| Quizzes, progreso local y tema | **Implementados** |
| CI TypeScript, tests y build | **Éxito comprobado en E1** |
| Revisión visual en navegador | **Realizada por el usuario** |
| Revisión pedagógica y accesibilidad manual | **Pendientes** |
| Lección 01 — Mapa de la IA y clasificador | **Implementados** |
| Lección 03 — Cómo funciona un LLM | **Implementada** |
| Lección 05 — Prompts y ejemplos | **Implementada** |
| Lección 06 — Contexto y memoria | **Implementada** |
| Lección 07 — Confiabilidad y alucinaciones | **Implementada** |
| Otras 9 lecciones | **Pendientes** |
| Recorrido integrado de 90 minutos | **Pendiente** |
| Directorios `labs/` con código y soluciones | **Pendientes** |
| Test e2e y publicación validada | **Pendientes** |

**Último hito técnico verificado:** commit `e9075f8`; [workflow exitoso](https://github.com/lucasjaviluna/ia-fundamentals/actions/runs/41958459514). Este plan no afirma que exista un despliegue público de la web.

## 16. Gestión de cambios y continuidad

- Implementar **incrementos pequeños** que terminen con una demo funcional.
- Una lección no se marca «disponible» si no tiene explicación, demo funcional, repaso y resumen.
- Cada cambio de alcance o contenido pedagógico se refleja en este plan y, si afecta una decisión de arquitectura/UX, en la especificación.
- Mantener documentación y código en el mismo repositorio; vincular las prácticas a sus lecciones.
- Actualizar la tabla de estados al finalizar cada entrega; conservar el historial en Git.
- No convertir la infraestructura de la plataforma en un fin en sí mismo.

## 17. Índice de documentación relacionada

- [Índice de documentación](./README.md)
- [Especificación de experiencia, wireframes, modelos y componentes — Fase 1](./AI_Learning_Fase_1_Especificacion.md)
- [Detalle de implementación del piloto — Entrega 1](./Entrega_1_Implementacion.md)
- [README raíz y comandos del proyecto](../README.md)

---

**Próxima decisión operativa:** completar la validación pedagógica y de accesibilidad de la Entrega 1 y continuar implementando incrementalmente el recorrido introductorio, manteniendo separación entre contenido básico y profundizaciones. No es necesario diseñar una nueva arquitectura antes de seguir añadiendo lecciones.
