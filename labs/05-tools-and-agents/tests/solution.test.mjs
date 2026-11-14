import test from "node:test";
import assert from "node:assert/strict";
import { createTools, plan, runAgent } from "../solution/agent.mjs";

test("planifica una consulta de pedido como llamada estructurada", () => {
  assert.deepEqual(plan({ type: "order-status", orderId: "A-100" }), {
    toolName: "getOrderStatus",
    args: { orderId: "A-100" }
  });
});

test("responde un estado a partir de la observación de la herramienta", () => {
  const result = runAgent({ type: "order-status", orderId: "A-100" }, createTools());
  assert.equal(result.answer, "El pedido A-100 está en preparación.");
  assert.deepEqual(result.trace.map((event) => event.phase), [
    "plan", "validation", "tool-call", "observation", "final"
  ]);
});

test("no inventa una respuesta cuando no existe una herramienta", () => {
  const result = runAgent({ type: "cancel-order", orderId: "A-100" }, createTools());
  assert.match(result.answer, /No tengo una herramienta autorizada/);
  assert.deepEqual(result.trace.map((event) => event.phase), ["plan"]);
});

test("valida los argumentos antes de ejecutar", () => {
  const result = runAgent({ type: "sum", amounts: [10, "20"] }, createTools());
  assert.match(result.answer, /amounts debe ser una lista de números/);
  assert.equal(result.trace.at(-1).phase, "validation");
});
