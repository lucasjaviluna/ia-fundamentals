const requiredSections = [
  "Objetivo",
  "Cuándo usarlo",
  "Proceso",
  "Restricciones",
  "Formato de salida"
];

const requiredOutputHeadings = [
  "Hallazgos",
  "Riesgo",
  "Evidencia",
  "Siguiente paso"
];

export function validateSkill(markdown) {
  const errors = [];
  const hasFrontmatter = /^---\s*\n([\s\S]*?)\n---/m.test(markdown);

  if (!hasFrontmatter) {
    errors.push("Falta el frontmatter.");
  } else {
    if (!/^name:\s*\S+/m.test(markdown)) errors.push("Falta name en el frontmatter.");
    if (!/^description:\s*\S+/m.test(markdown)) errors.push("Falta description en el frontmatter.");
  }

  for (const section of requiredSections) {
    if (!markdown.includes("# " + section)) errors.push("Falta la sección: " + section + ".");
  }

  for (const heading of requiredOutputHeadings) {
    if (!markdown.includes("## " + heading)) errors.push("Falta el encabezado de salida: " + heading + ".");
  }

  return { valid: errors.length === 0, errors };
}

export function buildRunbook(sourcePath) {
  return [
    "Archivo a revisar: " + sourcePath,
    "1. Identificá entradas, salidas y datos sensibles.",
    "2. Buscá evidencia concreta antes de declarar un riesgo.",
    "3. Devolvé Hallazgos, Riesgo, Evidencia y Siguiente paso."
  ].join("\n");
}

if (import.meta.url === new URL(process.argv[1], "file:").href) {
  const skillUrl = new URL("./.agents/skills/typescript-api-reviewer/SKILL.md", import.meta.url);
  const fs = await import("node:fs/promises");
  const markdown = await fs.readFile(skillUrl, "utf8");
  const result = validateSkill(markdown);

  console.log(result.valid ? "Skill válido." : "Skill incompleto.");
  for (const error of result.errors) console.log("- " + error);
  process.exitCode = result.valid ? 0 : 1;
}
