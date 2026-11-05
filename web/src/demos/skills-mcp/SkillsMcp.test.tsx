import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { McpDemo, SkillsDemo } from './SkillsMcp';
afterEach(cleanup);
describe('exploradores de Skills y MCP', () => {
  it('recorre instrucciones y permite reiniciar la skill', () => {
    render(<SkillsDemo />);
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText('2 · Instrucciones de SKILL.md')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByText('1 · Descripción')).toBeInTheDocument();
  });
  it('cambia la capacidad MCP y muestra su solicitud y respuesta', () => {
    render(<McpDemo />);
    fireEvent.change(screen.getByLabelText('Capacidad'), { target: { value: '1' } });
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText(/resources\/read/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText(/Contenido ficticio/)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Capacidad'), { target: { value: '2' } });
    expect(screen.getByText('1 · Conexión y descubrimiento')).toBeInTheDocument();
  });
});
