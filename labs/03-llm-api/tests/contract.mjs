import assert from 'node:assert/strict';
export async function verify(demoResponse, requestResponse) {
  assert.equal(demoResponse().source, 'simulación local');
  let called = false;
  const fakeFetch = async (url, options) => {
    called = true;
    assert.equal(url, 'https://api.openai.com/v1/responses');
    assert.equal(options.method, 'POST');
    assert.equal(options.headers.Authorization, 'Bearer clave-ficticia');
    assert.deepEqual(JSON.parse(options.body), { model:'modelo-ficticio', input:'Hola', store:false });
    return { ok:true, json:async () => ({ output:[{ type:'reasoning' }, { type:'message', content:[{type:'output_text', text:'Hola de vuelta'}] }] }) };
  };
  assert.deepEqual(await requestResponse({apiKey:'clave-ficticia',model:'modelo-ficticio',input:'Hola',fetchImpl:fakeFetch}), {text:'Hola de vuelta',source:'API OpenAI'});
  assert.equal(called,true);
  await assert.rejects(requestResponse({apiKey:'',model:'modelo',input:'Hola',fetchImpl:fakeFetch}), /Faltan/);
  await assert.rejects(requestResponse({apiKey:'clave-ficticia',model:'modelo',input:'Hola',fetchImpl:async () => ({ok:false,status:401})}), /401/);
  await assert.rejects(requestResponse({apiKey:'clave-ficticia',model:'modelo',input:'Hola',fetchImpl:async () => ({ok:true,json:async () => ({output:[]})})}), /no contiene texto/);
}
