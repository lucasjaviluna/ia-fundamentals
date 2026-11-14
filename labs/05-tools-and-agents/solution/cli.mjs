import { createTools, runAgent } from "./agent.mjs";

const tools = createTools();
const tasks = [
  { type: "order-status", orderId: "A-100" },
  { type: "sum", amounts: [120, 35, 8] }
];

for (const task of tasks) {
  const result = runAgent(task, tools);
  console.log("\nTAREA:", JSON.stringify(task));
  for (const event of result.trace) console.log(event.phase + ":", JSON.stringify(event));
  console.log("RESPUESTA:", result.answer);
}
