import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ApiRequest } from './ApiRequest';
describe('solicitud API simulada', () => {
  it('cambia la modalidad y oculta la respuesta al cambiar el ejemplo', () => {
    render(<ApiRequest />);
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar respuesta' }));
    expect(screen.getByText('Respuesta JSON preparada')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Entrada'), { target: { value: '1' } });
    expect(screen.queryByText('Respuesta JSON preparada')).not.toBeInTheDocument();
    expect(screen.getByText(/imagen-ficticia/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar respuesta' }));
    expect(screen.getByText(/bicicleta/)).toBeInTheDocument();
  });
});
