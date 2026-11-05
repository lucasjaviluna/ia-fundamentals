import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ContextMeter } from './ContextMeter';

afterEach(cleanup);

describe('medidor de contexto', () => {
  it('informa el exceso y permite reiniciar el presupuesto', () => {
    render(<ContextMeter />);
    expect(screen.getByRole('status')).toHaveTextContent('Quedan 200');
    fireEvent.change(screen.getByLabelText(/Historial/), { target: { value: '1000' } });
    expect(screen.getByRole('status')).toHaveTextContent('Se supera el límite por 400');
    fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByRole('status')).toHaveTextContent('Quedan 200');
  });

  it('compacta el historial, muestra la pérdida posible y permite deshacer o reiniciar', () => {
    render(<ContextMeter />);
    fireEvent.change(screen.getByLabelText(/Historial/), { target: { value: '1000' } });
    fireEvent.click(screen.getByRole('button', { name: 'Compactar historial' }));
    expect(screen.getByRole('status')).toHaveTextContent('Quedan 100');
    expect(screen.getByText(/1000 → 500 tokens ficticios/)).toBeInTheDocument();
    expect(screen.getByText(/omitió la restricción de privacidad/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Deshacer compactación' }));
    expect(screen.getByRole('status')).toHaveTextContent('Se supera el límite por 400');
    fireEvent.click(screen.getByRole('button', { name: 'Compactar historial' }));
    fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByRole('status')).toHaveTextContent('Quedan 200');
    expect(screen.getByRole('button', { name: 'Compactar historial' })).toHaveAttribute('aria-pressed', 'false');
  });
});
