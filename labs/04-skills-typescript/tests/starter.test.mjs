import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { buildRunbook, validateSkill } from "../starter/review-skill.mjs";

const skillUrl = new URL("../starter/.agents/skills/typescript-api-reviewer/SKILL.md", import.meta.url);

test("el starter valida el skill cuando esté completo", async () => {
  const markdown = await readFile(skillUrl, "utf8");
  assert.deepEqual(validateSkill(markdown), { valid: true, errors: [] });
});

test("el starter crea una guía para el archivo indicado", () => {
  const runbook = buildRunbook("project/src/user-service.ts");
  assert.match(runbook, /project\/src\/user-service\.ts/);
  assert.match(runbook, /Hallazgos, Riesgo, Evidencia y Siguiente paso/);
});
