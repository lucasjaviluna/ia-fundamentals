# Práctica 05 — Tools y ciclo de agentes

**Objetivo:** construir un agente mínimo y observable que elige una herramienta, ejecuta una acción permitida, observa el resultado y valida si resolvió la tarea.

**Duración orientativa:** 35–45 minutos. **Requisitos:** Node.js 20.19 o superior. No requiere API, credenciales ni conexión a internet.

**En la web:** /curso/tools, /curso/agentes y /labs/tool-agent.

## Qué vas a observar

Un agente no es solamente un modelo que genera texto. En una tarea con herramientas hay un ciclo:

1. recibe un objetivo;
2. decide si necesita una herramienta;
3. propone una llamada estructurada;
4. verifica que la herramienta y sus argumentos estén permitidos;
5. ejecuta, observa el resultado y decide si puede responder.

Esta práctica usa reglas deterministas para que el flujo sea reproducible. En un sistema real, un modelo podría producir el plan o la llamada, pero las validaciones, permisos y trazas siguen siendo responsabilidad del software.

## 1. Ejecutar la solución

Desde la raíz del repositorio:

    cd labs/05-tools-and-agents
    npm run demo
    npm test

La demo muestra dos tareas: consultar el estado de un pedido y sumar importes. Cada paso se imprime como traza: `plan`, `tool-call`, `observation` y `final`.

## 2. Leer la traza

Observá especialmente:

- El agente no llama funciones arbitrarias: solo puede usar herramientas registradas.
- Una llamada tiene nombre y argumentos; no es texto ejecutable.
- La capa de herramientas valida argumentos antes de ejecutar.
- La respuesta final se construye a partir de una observación concreta.
- Si el objetivo no está soportado, el agente no inventa un resultado.

## 3. Tu turno

Completá `starter/agent.mjs`:

1. Implementá `createTools()` con `getOrderStatus` y `sumAmounts`.
2. Implementá `plan(task)` para reconocer las dos tareas soportadas.
3. Implementá `runAgent(task, tools)` para producir una traza y una respuesta final.
4. Ejecutá:

    npm run test:starter

Las pruebas iniciales fallan por los TODO. La solución está en `solution/`.

## 4. Variación para discutir

Agregá una herramienta `cancelOrder` y comprobá por qué no debería poder ejecutarse automáticamente: necesitaría un permiso explícito o una confirmación humana. El objetivo del laboratorio es distinguir **capacidad**, **autorización** y **ejecución**.

## Para conversar

- ¿Qué haría un modelo y qué debe garantizar el código de orquestación?
- ¿Por qué una tool call necesita un esquema de argumentos?
- ¿Qué debería registrarse para auditar una ejecución?
- ¿Qué acciones exigirían una confirmación humana?

**Para quien expone:** primero pedí al grupo que prediga qué herramienta se usará; después mostrales la traza. Recién al final conectá el flujo determinista con un agente basado en un LLM.
