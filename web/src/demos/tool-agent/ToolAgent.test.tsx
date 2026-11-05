import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { AgentDemo, ToolDemo } from './ToolAgent';

afterEach(cleanup);
describe('demostraciones de herramientas y agentes', () => {
  it('muestra la llamada y cambia el resultado al elegir otro pedido', () => {
    render(<ToolDemo />);
    fireEvent.change(screen.getByLabelText('Pedido ficticio'), { target: { value: 'B-202' } });
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText(/getOrderStatus/)).toHaveTextContent('B-202');
    fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    expect(screen.getByText(/devuelve:/)).toHaveTextContent('En camino');
  });
  it('comunica el rechazo sin ejecutar la acción y reinicia la traza', () => {
    render(<AgentDemo />);
    for (let i = 0; i < 3; i++) fireEvent.click(screen.getByRole('button', { name: 'Siguiente →' }));
    fireEvent.click(screen.getByRole('button', { name: 'Rechazar' }));
    expect(screen.getByRole('status')).toHaveTextContent('no se ejecuta');
    fireEvent.click(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByText('1 · Planificar')).toBeInTheDocument();
  });
});
