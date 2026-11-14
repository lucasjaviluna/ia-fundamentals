const orders = new Map([
  ["A-100", { status: "en preparación", customer: "Ana" }],
  ["B-200", { status: "enviado", customer: "Bruno" }]
]);

export function createTools() {
  return {
    getOrderStatus: {
      description: "Obtiene el estado de un pedido por su código.",
      execute({ orderId }) {
        if (typeof orderId !== "string" || !/^[A-Z]-\\d{3}$/.test(orderId)) {
          throw new Error("orderId debe tener el formato A-000.");
        }

        const order = orders.get(orderId);
        if (!order) return { found: false, orderId };
        return { found: true, orderId, status: order.status };
      }
    },
    sumAmounts: {
      description: "Suma una lista de importes numéricos.",
      execute({ amounts }) {
        if (!Array.isArray(amounts) || amounts.some((amount) => typeof amount !== "number")) {
          throw new Error("amounts debe ser una lista de números.");
        }

        return { total: amounts.reduce((sum, amount) => sum + amount, 0) };
      }
    }
  };
}

export function plan(task) {
  if (task.type === "order-status") {
    return { toolName: "getOrderStatus", args: { orderId: task.orderId } };
  }

  if (task.type === "sum") {
    return { toolName: "sumAmounts", args: { amounts: task.amounts } };
  }

  return null;
}

export function runAgent(task, tools) {
  const trace = [{ phase: "plan", task }];
  const next = plan(task);

  if (!next) {
    return {
      answer: "No tengo una herramienta autorizada para resolver esta tarea.",
      trace
    };
  }

  const tool = tools[next.toolName];
  if (!tool) {
    return {
      answer: "La herramienta planificada no está disponible.",
      trace: [...trace, { phase: "validation", ok: false, reason: "tool-not-found" }]
    };
  }

  trace.push({ phase: "validation", ok: true, toolName: next.toolName });
  trace.push({ phase: "tool-call", toolName: next.toolName, args: next.args });

  try {
    const observation = tool.execute(next.args);
    trace.push({ phase: "observation", toolName: next.toolName, result: observation });

    if (task.type === "order-status") {
      return {
        answer: observation.found
          ? "El pedido " + observation.orderId + " está " + observation.status + "."
          : "No encontré el pedido " + observation.orderId + ".",
        trace: [...trace, { phase: "final", grounded: true }]
      };
    }

    return {
      answer: "El total es " + observation.total + ".",
      trace: [...trace, { phase: "final", grounded: true }]
    };
  } catch (error) {
    return {
      answer: "No pude ejecutar la herramienta: " + error.message,
      trace: [...trace, { phase: "validation", ok: false, reason: error.message }]
    };
  }
}
