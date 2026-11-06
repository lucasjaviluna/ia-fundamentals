import assert from 'node:assert/strict';
export function verify(buildPrompts, evaluate) {
 const prompts = buildPrompts();
 assert.match(prompts.vague, /README\.md/i);
 assert.match(prompts.structured, /README\.md/i);
 assert.ok(prompts.vague.length < 1000 && prompts.structured.length < 1500);
 for (const term of ['proposito', 'publico', 'tecnologias', 'no especificado']) assert.ok(prompts.structured.includes(term));
 assert.deepEqual(evaluate('no es JSON'), {validJson:false, requiredFields:false});
 assert.deepEqual(evaluate('null'), {validJson:true, requiredFields:false});
 assert.deepEqual(evaluate('{"proposito":"Enseñar","publico":"Estudiantes","tecnologias":"Node.js"}'), {validJson:true, requiredFields:true});
 assert.deepEqual(evaluate('{"proposito":"Enseñar","publico":"","tecnologias":"Node.js"}'), {validJson:true, requiredFields:false});
 assert.deepEqual(evaluate('{"proposito":"Enseñar","publico":"Estudiantes","tecnologias":7}'), {validJson:true, requiredFields:false});
}
