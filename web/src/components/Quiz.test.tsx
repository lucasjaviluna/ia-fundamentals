import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Quiz } from './Quiz';
import type { QuizQuestion } from '../data/lessons';

const questions: QuizQuestion[] = [
  { id: 'q1', question: '¿Qué es un token?', options: [{ id: 'a', label: 'Una pieza codificada del texto' }, { id: 'b', label: 'Una dirección web' }], correctId: 'a', explanation: 'Los tokens representan unidades del texto.' },
  { id: 'q2', question: '¿Un token siempre es una palabra?', options: [{ id: 'a', label: 'Sí, siempre' }, { id: 'b', label: 'No, depende del tokenizador' }], correctId: 'b', explanation: 'Puede representar fragmentos.' },
];

describe('Quiz', () => {
  it('muestra el feedback, avanza, finaliza y reinicia', () => {
    const onComplete = vi.fn();
    render(<Quiz questions={questions} onComplete={onComplete} />);

    expect(screen.getByRole('button', { name: /siguiente/i })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: /una pieza codificada/i }));
    expect(screen.getByText('¡Correcto!')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /siguiente/i }));
    fireEvent.click(screen.getByRole('button', { name: /no, depende/i }));
    fireEvent.click(screen.getByRole('button', { name: /finalizar repaso/i }));

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(screen.getByText(/2 de 2/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /repetir preguntas/i }));
    expect(screen.getByText('¿Qué es un token?')).toBeInTheDocument();
  });
});
