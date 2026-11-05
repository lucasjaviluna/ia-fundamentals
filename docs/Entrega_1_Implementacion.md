# Entrega 1 — MVP navegable de IA Fundamentals

**Estado:** implementación técnica publicada y CI exitoso; validación visual, accesibilidad y prueba pedagógica manual pendientes.

**CI verificado:** [GitHub Actions — ejecución exitosa](https://github.com/lucasjaviluna/ia-fundamentals/actions/runs/41958459514).

## Incluye

- React + Vite + TypeScript + Tailwind CSS v4; SPA estática sin backend.
- Portada responsive y mapa de 16 temas (**dos disponibles**, otros 14 identificados como futuros).
- Modo lectura y modo presentación alimentados por el **mismo registro tipado de lecciones**.
- Presentación por pasos con navegación ←/→, Esc, F y ?, controles visibles y notas plegadas.
- Simulador **ilustrativo** de siguiente fragmento con distribuciones ficticias.
- Demo de tokenización **real local**, codificación cl100k_base, IDs y advertencia de bytes Unicode.
- Preguntas de repaso con explicación, puntuación, reinicio y progreso local.
- Laboratorios independientes, glosario, tema claro/oscuro y navegación adaptativa.
- Tests de datos, simulador, quiz y rutas; CI de GitHub Actions.

## Decisiones pragmáticas

Se usan lecciones TypeScript tipadas en vez de MDX para las dos lecciones piloto; MDX se reconsiderará cuando haya suficiente contenido editorial para justificarlo. La fuente de contenido sigue siendo única para ambos modos.

**La charla completa de 90 minutos no está implementada**; quedan pendientes los otros 14 temas y los ejercicios Node.js con soluciones. Las notas del presentador se despliegan en la misma pantalla, no en una segunda pantalla privada.

## Comprobaciones locales

Ejecutar desde la raíz:

```bash
npm install
npm run typecheck
npm run test
npm run build
```

La automatización ejecuta estos pasos en GitHub Actions. Deben revisarse también el resultado visual, el uso en un proyector, accesibilidad y funcionamiento sin red una vez cargado el sitio.

**Plan de continuidad:** [Plan integral de implementación](./PLAN_IMPLEMENTACION.md).

## Próximo hito

Validar diseño/presentación con público piloto; completar los bloques restantes del recorrido introductorio de 90 minutos y los laboratorios de prompts, tools, agentes, skills, MCP y RAG.
