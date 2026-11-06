import { getEncoding } from "js-tiktoken";

// El vocabulario se carga una sola vez y se reutiliza entre textos.
const encoding = getEncoding("cl100k_base");

export function analyze(text) {
  const ids = encoding.encode(text);
  return { text, ids, count: ids.length };
}

export function compare(texts) {
  return texts.map(analyze);
}
