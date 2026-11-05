# IA Fundamentals — AI Learning Experience

Plataforma educativa interactiva en español para enseñar fundamentos de IA con una misma experiencia para **presentar** y **aprender**.

## Estado

**Entrega 1 — MVP piloto.** Se implementan dos lecciones completas: **¿Qué es un LLM?** y **Tokens y tokenización**. Los otros 14 temas figuran como próximos contenidos, sin enlaces engañosos ni simuladores falsamente presentados como IA real.

## Requisitos

- Node.js 20.19+ (recomendado Node.js 22 LTS).
- npm.

## Ejecución

```bash
npm install
npm run dev
```

Abrir la URL local indicada por Vite (habitualmente http://localhost:5173).

```bash
npm run build       # compilación de producción
npm run typecheck   # chequeo TypeScript
npm run test        # tests de datos, simulador y quiz
npm run test:watch  # Vitest interactivo
```

## Experiencias

- **Explorar**: `/curso`. Elegir una lección, interactuar y responder al repaso.
- **Presentar**: desde una lección, botón «Modo presentación». Navegación con flechas, Esc para volver y F para pantalla completa; los atajos no interfieren con campos editables. Las notas del presentador se mantienen cerradas por defecto.
- **Laboratorios**: `/labs/next-token` y `/labs/tokenizer`, accesibles desde las lecciones.
- **Glosario**: `/glosario` con conceptos esenciales.

El progreso de lecciones y el tema visual se guardan **únicamente en este navegador**, sin cuentas ni servidor.

## Experimentos y transparencia

- **Next Token Simulator** es una **simulación educativa con porcentajes inventados**; no ejecuta un LLM, ni los segmentos mostrados garantizan corresponder a tokens de un modelo.
- **Tokenizer Explorer** ejecuta localmente el tokenizador `cl100k_base` mediante `js-tiktoken` y muestra IDs y fragmentos decodificados. Los fragmentos pueden dividir bytes Unicode; no siempre representan caracteres individuales legibles. Los resultados no deben atribuirse a otros modelos o codificaciones.
- No se requieren credenciales, API keys ni servicios externos para las demostraciones después de cargar la aplicación. No se recopilan entradas del usuario.

## Estructura

```text
web/
  src/
    app/             # rutas y navegación
    components/      # secciones, quiz, cabecera
    data/            # fuente tipada de las dos lecciones piloto
    demos/           # simulador y tokenizador reales/ilustrativos
    pages/           # portada, curso, lección, presentación, labs
    test/            # configuración de tests
docs/
  AI_Learning_Fase_1_Especificacion.md
```

## Diseño de contenido

Las dos lecciones piloto se modelan mediante `Lesson` en `web/src/data/lessons.ts`. **El modo lectura y el modo presentación consumen exactamente los mismos pasos, ejemplos, preguntas y resúmenes**. La integración de MDX para profundizaciones largas queda aplazada: se prioriza un modelo tipado y pequeño antes de introducir una capa de contenido adicional.

## Documentación

[Especificación de la Fase 1](docs/AI_Learning_Fase_1_Especificacion.md)

## Publicación

Es una SPA estática. La plataforma que la aloje debe redirigir rutas desconocidas a `index.html`. En GitHub Pages, configurar el `base` de Vite y el fallback de rutas o utilizar un hosting con rewrites de SPA.

## Próximos pasos

Completar el recorrido introductorio de 90 minutos, incorporar demos de prompts, tools/agentes, skills, MCP y RAG, y luego crear los ejercicios Node.js con soluciones.
