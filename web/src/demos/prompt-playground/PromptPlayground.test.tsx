import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PromptPlayground } from './PromptPlayground';

describe('comparador de prompts', () => {
  it('cambia el caso y muestra ejemplos preparados sin usar un modelo', () => {
    render(<PromptPlayground />);
    expect(screen.getByText('Resumí esto.')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Caso'), { target: { value: '1' } });
    expect(screen.getByText('Escribí un mensaje.')).toBeInTheDocument();
    expect(screen.getByText(/no inventes una fecha/)).toBeInTheDocument();
    expect(screen.getByText(/No se ejecuta un modelo/)).toBeInTheDocument();
  });
});
