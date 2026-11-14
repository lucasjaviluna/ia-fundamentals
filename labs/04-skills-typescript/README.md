# Práctica 04 — Creá un skill para revisar una API TypeScript

**Objetivo:** transformar una tarea repetida —revisar una API TypeScript— en instrucciones reutilizables, comprobables y aplicables a un proyecto. Al terminar, vas a poder explicar qué aporta un skill frente a un prompt aislado.

**Duración orientativa:** 30–40 minutos. **Requisitos:** Node.js 20.19 o superior. Para la demostración completa necesitás un agente de código que pueda leer archivos locales; el ejercicio y sus pruebas no usan API ni credenciales.

**En la web:** /curso/skills y /labs/skills-mcp.

## Qué construís

Un skill es un paquete de instrucciones que un agente puede descubrir o recibir como contexto para ejecutar un trabajo de forma consistente. No agrega capacidades mágicas ni ejecuta código por sí mismo: define cuándo usarlo, qué revisar, qué no hacer y cómo devolver el resultado.

En esta práctica construís el skill `typescript-api-reviewer` y lo aplicás sobre `project/src/user-service.ts`, una API pequeña con decisiones discutibles a propósito.

## 1. Ver el resultado esperado

Desde la raíz del repositorio:

    cd labs/04-skills-typescript
    npm run validate
    npm test

El primer comando valida que el skill de la solución tenga metadatos, proceso, límites y contrato de salida. Las pruebas verifican el mismo contrato de forma automática. Esto no demuestra que un agente siga siempre el skill; demuestra que el artefacto que le entregamos es completo y mantenible.

## 2. Aplicarlo en vivo a un agente

1. Abrí `solution/.agents/skills/typescript-api-reviewer/SKILL.md`.
2. Entregáselo al agente según el mecanismo que soporte: como skill del proyecto, como instrucciones del agente o pegándolo como contexto explícito. Cada herramienta descubre skills en rutas diferentes; verificá su documentación antes de asumir una ruta.
3. Pedile: `Revisá project/src/user-service.ts usando el skill typescript-api-reviewer.`
4. Esperá un informe con los encabezados `Hallazgos`, `Riesgo`, `Evidencia` y `Siguiente paso`.
5. Comparalo con una sesión nueva sin el skill usando el mismo archivo y el pedido corto: `Revisá project/src/user-service.ts.`

La comparación útil no es cuál respuesta suena mejor: es si el segundo informe es más consistente, separa evidencia de suposiciones y evita proponer cambios fuera de alcance.

> El agente puede equivocarse o ignorar instrucciones. Un skill mejora el contexto y la repetibilidad; no reemplaza revisión humana, pruebas ni permisos.

## 3. Tu turno

Completá estos archivos:

- `starter/.agents/skills/typescript-api-reviewer/SKILL.md`: definí propósito, cuándo usarlo, proceso, restricciones y formato de salida.
- `starter/review-skill.mjs`: implementá `validateSkill(markdown)` y `buildRunbook(sourcePath)`.

El validador debe exigir:

- frontmatter con `name` y `description`;
- las secciones `Objetivo`, `Cuándo usarlo`, `Proceso`, `Restricciones` y `Formato de salida`;
- los cuatro encabezados de salida: `Hallazgos`, `Riesgo`, `Evidencia` y `Siguiente paso`.

Ejecutá:

    npm run test:starter

Las pruebas del starter fallan al principio por los TODO. Consultá la solución solo después de intentarlo.

## Para conversar

- ¿Qué parte debe quedar en el skill y cuál corresponde al pedido puntual del usuario?
- ¿Qué harías diferente para un skill de generación de tests, migraciones Angular o revisión de seguridad?
- ¿Qué evidencia debería guardar una herramienta si un skill fue aplicado?
- ¿Qué riesgos aparecen si el skill pide acciones con efectos externos?

**Para quien expone:** primero mostrale al grupo un prompt corto; luego agregá el skill y pedí que identifiquen qué cambió en el proceso y en el contrato de salida. No uses código ni datos sensibles durante la demo.
