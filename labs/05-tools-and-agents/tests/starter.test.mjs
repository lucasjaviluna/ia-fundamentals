import test from "node:test";
import assert from "node:assert/strict";
import { createTools, plan, runAgent } from "../starter/agent.mjs";

test("el starter planifica una consulta de pedido", () => {
  assert.deepEqual(plan({ type: "order-status", orderId: "A-100" }), {
    toolName: "getOrderStatus",
    args: { orderId: "A-100" }
  });
});

test("el starter ejecuta una herramienta y conserva la traza", () => {
  const result = runAgent({ type: "order-status", orderId: "A-100" }, createTools());
  assert.equal(result.answer, "El pedido A-100 está en preparación.");
  assert.equal(result.trace.at(-1).phase, "final");
});
