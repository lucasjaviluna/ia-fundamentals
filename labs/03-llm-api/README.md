# Práctica 03 — Una solicitud a una API de modelo

**Objetivo:** distinguir una petición y su respuesta, probar errores y entender dónde se utiliza una credencial. El ejemplo usa Node.js y la Responses API de OpenAI como un proveedor concreto; no necesitás una cuenta ni clave para completar el ejercicio local.

**Duración orientativa:** 20–30 minutos. Requiere Node.js 20.19 o superior. No hay paquetes adicionales.

## 1. Mostrar el recorrido sin API

Desde la raíz del repositorio:

    cd labs/03-llm-api
    node solution/cli.mjs demo
    npm.cmd test

En macOS/Linux usá npm en lugar de npm.cmd. La salida SIMULACIÓN LOCAL está preparada: no se contacta un modelo ni se envía una solicitud. Pedí al público que identifique qué enviarían como entrada y qué esperan como respuesta.

## 2. Leer la solicitud

En [solution/client.mjs](solution/client.mjs), requestResponse recibe texto, modelo y credencial; prepara un POST JSON con model e input y recibe una respuesta. Busca texto en los elementos de salida, sin suponer que el primer elemento sea un mensaje. store: false solicita no almacenar la respuesta mediante ese parámetro. Consultá la [guía oficial de generación de texto](https://developers.openai.com/api/docs/guides/text) para conocer el formato y sus opciones.

Las [pruebas](tests/contract.mjs) sustituyen el transporte por respuestas ficticias: verifican solicitud, éxito, credencial ausente, HTTP 401 y falta de texto. No usan Internet ni claves.

## 3. Ejercicio

1. Abrí [starter/client.mjs](starter/client.mjs) y completá demoResponse.
2. Implementá requestResponse con fetchImpl, validación, POST y extracción de output_text. No muestres ni registres la clave.
3. Ejecutá npm.cmd run test:starter. Las pruebas fallan al inicio por los TODO. Compará con la solución si necesitás ayuda.

## 4. Opcional: modelo real

Solo si tenés acceso a la API, una clave y un modelo disponible para tu cuenta. Esto usa Internet y puede generar costos. El acceso a una interfaz de chat no confirma acceso a una API ni incluye necesariamente créditos. Elegí el modelo y revisá condiciones y costos antes de ejecutar.

En PowerShell, configurá las variables en tu sesión local (no pegues claves en archivos ni las muestres en pantalla compartida):

    $env:OPENAI_API_KEY = 'TU_CLAVE'
    $env:OPENAI_MODEL = 'TU_MODELO_DISPONIBLE'
    node solution/cli.mjs real "Explicá qué es una API en una frase."

El ejemplo imprime MODELO REAL y el texto recibido. No envíes información privada. Si faltan credenciales, el modelo no está disponible o la red falla, usá el modo demo. El ejemplo no imprime el cuerpo de errores del proveedor para evitar exponer información accidentalmente. Al terminar, quitá las variables de la sesión:

    Remove-Item Env:OPENAI_API_KEY
    Remove-Item Env:OPENAI_MODEL

## Para conversar

- ¿Qué datos se envían, quién procesa la solicitud y qué recibe la aplicación?
- ¿Qué cambia entre la salida preparada y una respuesta real?
- ¿Por qué no se debe poner una clave en el código de una web pública?
- ¿Qué sucede si la API devuelve 401 o no hay salida de texto?

**Para quien expone:** comenzá con demo, mostrá la prueba sin red y solo después ejecutá el modo real si la cuenta ya está preparada. Verificá la respuesta del modelo; ni el formato ni una conexión exitosa garantizan exactitud.
