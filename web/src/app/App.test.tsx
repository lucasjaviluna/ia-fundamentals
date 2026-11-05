import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('rutas de aprendizaje', () => {
  it('renderiza el mapa con 16 temas y cinco disponibles', () => {
    render(<MemoryRouter initialEntries={['/curso']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'Un concepto a la vez.' })).toBeInTheDocument();
    expect(screen.getAllByText('Próximamente')).toHaveLength(11);
    expect(screen.getAllByText('Disponible')).toHaveLength(5);
  });

  it('comparte una lección entre modo lectura y presentación', () => {
    render(<MemoryRouter initialEntries={['/curso/que-es-un-llm']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { level: 1, name: '¿Qué es un LLM?' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: /presentar/i }));
    expect(screen.getByText('LA PREGUNTA QUE VAMOS A RESPONDER')).toBeInTheDocument();
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByText('Un modelo que trabaja con lenguaje')).toBeInTheDocument();
  });
});
