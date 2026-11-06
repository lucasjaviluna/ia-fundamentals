import { compare } from "./tokenize.mjs";

const texts = process.argv.slice(2);
console.error("argv:", process.argv);
if (texts.length === 0) {
  console.error('Uso: node CLI.mjs "primer texto" "segundo texto"');
  process.exitCode = 1;
} else {
  for (const result of compare(texts)) {
    console.log(JSON.stringify(result));
  }
}
