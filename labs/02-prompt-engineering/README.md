# Práctica 02 — Explicá este repositorio con IA

**Objetivo:** comparar dos instrucciones para una misma tarea real: explicar de qué trata este repositorio a partir de su README. Observar cómo el contexto, las restricciones, un formato y un ejemplo orientan una respuesta.

**Duración orientativa:** 20–30 minutos. **Requisitos:** Node.js 20.19 o superior y una IA con interfaz de chat para la demostración en vivo. El código local no necesita dependencias ni claves. Si no hay acceso a la IA, podés usar las respuestas preparadas.

**En la web:** /curso/prompts-y-ejemplos y /labs/prompt-playground.

## 1. Preparar la demostración

Desde la raíz del repositorio:

    cd labs/02-prompt-engineering
    node solution/cli.mjs prompts

El programa imprime **solo las dos instrucciones**, sin el contenido del README. Ambas piden a la IA que lea el archivo README.md de la raíz: una es abierta y la otra solicita una explicación estructurada en JSON.

Para ejecutarlas tal como están, usá un chat o agente con acceso a este repositorio. Si tu chat no puede leer archivos locales, adjuntá el mismo README.md a ambas conversaciones por separado, o compartí su contenido allí; pegar solo el prompt no le dará acceso. Comprobá que ambas conversaciones usen la misma versión del archivo.

## 2. Ejecutar en vivo

1. Abrí una conversación nueva. Copiá solo el texto bajo PROMPT ABIERTO y envialo.
2. Dejá la respuesta visible y preguntá: ¿explica el propósito, el público y las tecnologías? ¿Distingue lo que sabe de lo que supone?
3. Abrí **otra conversación nueva**, con el mismo modelo y configuración si están disponibles. Copiá el PROMPT ESTRUCTURADO completo y envialo.
4. Compará ambas respuestas con el README. El prompt estructurado pide tres campos: proposito, publico y tecnologias. Si falta evidencia, solicita «no especificado».

Las respuestas reales pueden variar. El ejemplo de jardinería dentro del prompt es ficticio: solo muestra la forma del JSON, no describe este proyecto. Una respuesta puede cumplir el formato y aun así inventar información. El README puede cambiar con el proyecto: usá la misma versión en ambas conversaciones.

## 3. Comprobar una respuesta con código

Copiá **solo el objeto JSON** de la respuesta estructurada a un archivo local llamado respuesta.json dentro de esta carpeta. Si la IA agregó texto o marcadores de código, conservá esa respuesta para discutir que no cumplió la instrucción de devolver solo JSON. Si quitás los marcadores para probar el objeto, dejá constancia de la modificación.

    node solution/cli.mjs check respuesta.json

El comando comprueba dos criterios: JSON válido y presencia de los tres campos como textos no vacíos. Un false produce código de salida 1. **Revisá manualmente la fidelidad:** el programa no verifica las afirmaciones, ni exige que no haya campos adicionales. Si el README no especifica algo, comprobá que la respuesta no lo invente.

Sin acceso a la IA, probá ejemplos preparados —no son respuestas reales de un modelo—:

    node solution/cli.mjs check fixtures/respuesta-ejemplo.json
    node solution/cli.mjs check fixtures/respuesta-incorrecta.json

El segundo falla porque el campo publico está vacío. Una respuesta puede pasar ambas comprobaciones e inventar una tecnología: ese es un límite importante para discutir.

## 4. Tu turno: construir el ejercicio

Abrí [starter/prompts.mjs](starter/prompts.mjs):

1. Implementá buildPrompts(input), sin argumentos, con una versión abierta y otra estructurada que pidan leer el mismo README, con rol, tarea, límite de evidencia, formato y ejemplo.
2. Implementá evaluate(raw). Si no es JSON válido, devolvé ambos criterios en false; si lo es, comprobá que proposito, publico y tecnologias sean textos no vacíos.
3. Ejecutá:

    npm.cmd run test:starter
    node starter/cli.mjs prompts

En macOS/Linux usá npm en lugar de npm.cmd. Al principio las pruebas fallan por los TODO. La [solución](solution/prompts.mjs) es completa; npm.cmd test comprueba esa solución.

## Para conversar

- ¿Qué explicó cada respuesta y qué información omitió?
- ¿Qué afirmó sobre público o tecnologías que no esté sustentado por el README?
- ¿Qué cambia al pedir un formato que una aplicación pueda procesar?
- ¿Qué podría fallar aunque ambas comprobaciones sean true?

**Para quien expone:** pedí predicciones, mostrá las dos conversaciones y verificá una afirmación contra el README. Si usás otros archivos, revisá su contenido antes de compartirlo: no pegues claves ni datos privados.
