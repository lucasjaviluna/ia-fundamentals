import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildRunbook, validateSkill } from "../solution/review-skill.mjs";

const skillUrl = new URL("../solution/.agents/skills/typescript-api-reviewer/SKILL.md", import.meta.url);

test("la solución define un skill completo", async () => {
  const markdown = await readFile(skillUrl, "utf8");
  assert.deepEqual(validateSkill(markdown), { valid: true, errors: [] });
});

test("el runbook conserva el archivo y el contrato de salida", () => {
  const runbook = buildRunbook("project/src/user-service.ts");
  assert.match(runbook, /project\/src\/user-service\.ts/);
  assert.match(runbook, /Hallazgos, Riesgo, Evidencia y Siguiente paso/);
});
