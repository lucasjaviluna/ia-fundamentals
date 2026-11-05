import { useEffect, useState } from 'react';

const key = 'ia-fundamentals:completed';

export function readCompleted(): string[] {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(key) ?? '[]');
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch { return []; }
}

export function completeLesson(slug: string) {
  const values = new Set([...readCompleted(), slug]);
  try { localStorage.setItem(key, JSON.stringify([...values])); } catch { /* private browsing */ }
  window.dispatchEvent(new Event('ia:completed'));
}

export function useCompleted() {
  const [completed, setCompleted] = useState<string[]>(readCompleted);
  useEffect(() => {
    const update = () => setCompleted(readCompleted());
    window.addEventListener('ia:completed', update);
    window.addEventListener('storage', update);
    return () => { window.removeEventListener('ia:completed', update); window.removeEventListener('storage', update); };
  }, []);
  return completed;
}
