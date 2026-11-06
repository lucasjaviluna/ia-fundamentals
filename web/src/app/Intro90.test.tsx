import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import { App } from './App';
afterEach(cleanup);
describe('presentación intro-90', () => {
 it('avanza por teclado y salta a un segmento', () => {
  render(<MemoryRouter initialEntries={['/presentar/intro-90']}><App /></MemoryRouter>);
  expect(screen.getByText(/MINUTO ORIENTATIVO 0–5/)).toBeInTheDocument();
  fireEvent.keyDown(window, { key: 'ArrowRight' });
  expect(screen.getByText('Clasificá casos cotidianos')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Segmento'), { target: { value: '9' } });
  expect(screen.getByText(/MINUTO ORIENTATIVO 84–90/)).toBeInTheDocument();
  expect(screen.getByText('Requisito → código → pruebas → revisión')).toBeInTheDocument();
 });
});
