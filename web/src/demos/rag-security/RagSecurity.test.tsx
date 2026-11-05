import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { RagDemo, SecurityDemo } from './RagSecurity';
afterEach(cleanup);
describe('demos de RAG y seguridad', () => {
 it('reordena fragmentos al cambiar la consulta', () => { render(<RagDemo />); expect(screen.getByText(/fragmento 1 · 2 coincidencias/)).toHaveTextContent('Política ficticia'); fireEvent.change(screen.getByLabelText('Consulta'), { target:{value:'1'} }); expect(screen.getByText(/fragmento 1 · 2 coincidencias/)).toHaveTextContent('Envíos ficticios'); });
 it('revela el análisis de la instrucción no confiable', () => { render(<SecurityDemo />); fireEvent.click(screen.getByRole('button',{name:'Revelar análisis'})); expect(screen.getByRole('status')).toHaveTextContent('no una autorización'); });
});
