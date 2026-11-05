import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { EvaluationDemo, SdlcDemo } from './QualitySdlc';
afterEach(cleanup);
describe('evaluación y desarrollo', () => {
 it('muestra un criterio no cumplido y reinicia al cambiar de respuesta', () => { render(<EvaluationDemo />); fireEvent.change(screen.getByLabelText('Respuesta'),{target:{value:'1'}}); fireEvent.click(screen.getByRole('button',{name:'Evaluar con rúbrica'})); expect(screen.getByRole('status')).toHaveTextContent('No cumple'); fireEvent.change(screen.getByLabelText('Respuesta'),{target:{value:'0'}}); expect(screen.queryByRole('status')).not.toBeInTheDocument(); });
 it('permite solicitar correcciones sin integrar cambios', () => { render(<SdlcDemo />); for(let i=0;i<3;i++) fireEvent.click(screen.getByRole('button',{name:'Siguiente →'})); fireEvent.click(screen.getByRole('button',{name:'Solicitar correcciones'})); expect(screen.getByRole('status')).toHaveTextContent('no se integra'); });
});
