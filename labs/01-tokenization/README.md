# Práctica 01 — ¿Cuántos tokens tiene un texto?

**Objetivo:** transformar texto en IDs reales, comparar cambios pequeños y explicar por qué contar palabras no equivale a contar tokens.

**Resultado:** una CLI local que muestra texto, IDs y cantidad de tokens. Usa la codificación cl100k_base de js-tiktoken. No ejecuta un modelo ni necesita API o credenciales. Los IDs y conteos son específicos de esta codificación.

**Duración orientativa:** 15–25 minutos. [Lección y laboratorio](../../web/src/data/lessons.ts): en la web, /curso/tokens-y-tokenizacion y /labs/tokenizer.

## Antes de empezar

Un token es una unidad que el tokenizador representa con un ID. Puede corresponder a una palabra, parte de ella, espacios, signos o bytes. El modelo trabaja con IDs; la segmentación depende de la codificación.

**Pregunta para abrir:** ¿«hello world» tendrá exactamente dos tokens? ¿Qué pasará al agregar un emoji? Primero hagan una predicción; después ejecuten el ejemplo.

## Requisitos e instalación

Node.js 20.19 o superior y npm. Desde esta carpeta ejecutá:

    npm install --workspaces=false
    npm run solution -- "hello" "hello world" "¡Hola! 🧠"
    npm test

En PowerShell, si la política de ejecución bloquea npm.ps1, usá npm.cmd en lugar de npm (por ejemplo, npm.cmd test). La descarga inicial requiere conexión. Una vez instalada la dependencia, los comandos ejecutan localmente y no requieren una API. Las comillas mantienen cada frase como un argumento.

Salida esperada (una línea JSON por texto):

    {"text":"hello","ids":[15339],"count":1}
    {"text":"hello world","ids":[15339,1917],"count":2}
    {"text":"¡Hola! 🧠","ids":[40932,69112,0,11410,100,254],"count":6}

El emoji ilustra que un carácter visible puede involucrar varias unidades. No decodificamos cada ID por separado: algunas unidades contienen solo una parte de una secuencia de bytes Unicode.

## Tu turno

1. Abrí [starter/tokenize.mjs](starter/tokenize.mjs). Importá getEncoding y creá la codificación cl100k_base una sola vez.
2. Completá analyze(text): usá encoding.encode(text) y devolvé un objeto con text, ids y count. El conteo es la longitud de los IDs.
3. Completá compare(texts) reutilizando analyze, sin alterar el orden.
4. Ejecutá las pruebas del ejercicio y probá tu CLI:

    npm run test:starter
    npm start -- "hello" "hello world" "¡Hola! 🧠"

Al inicio, test:starter y start fallan a propósito porque los TODO aún no están implementados. npm test comprueba la solución completa, por lo que debe pasar desde el comienzo.

## Experimentá y explicá

- Compará «hola» con « hola»: ¿un espacio cambia los IDs o el conteo?
- Compará una frase breve en español con otra en inglés. ¿Se puede deducir el conteo solo mirando palabras?
- Probá texto vacío, puntuación y emojis. ¿Qué cambia en la secuencia?
- Cambiá solo una letra o signo y observá el resultado; no presupongas que todos los IDs restantes serán iguales.

**Discusión:** ¿qué riesgos tendría estimar la ventana de contexto contando palabras? Los resultados varían entre tokenizadores; cl100k_base no representa todos los modelos.

## Ayuda y comprobación

La [solución](solution/tokenize.mjs) es ejecutable y resuelve el mismo contrato. Las [pruebas](tests/contract.mjs) comprueban IDs conocidos, texto vacío, orden y Unicode. Si un comando falla:

- Cannot find package 'js-tiktoken': ejecutá la instalación en esta carpeta.
- Implementá analyze: completá el primer TODO o ejecutá npm run solution para comparar.
- Uso: pasá al menos un texto entre comillas; una cadena vacía explícita es una entrada válida.

**Para el expositor:** pedí predicciones antes de mostrar la salida; compará primero dos frases y terminá con el emoji. Remarcá que importa observar la segmentación, no memorizar IDs.
