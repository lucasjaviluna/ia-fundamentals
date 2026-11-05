import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReliabilityExplorer } from './ReliabilityExplorer';

describe('explorador de evidencias', () => {
  it('permite evaluar un caso y reinicia el feedback al cambiarlo', () => {
    render(<ReliabilityExplorer />);
    fireEvent.click(screen.getByRole('button', { name: 'No está respaldada' }));
    expect(screen.getByRole('status')).toHaveTextContent('Correcto');
    expect(screen.getByRole('status')).toHaveTextContent('contradice');
    fireEvent.change(screen.getByLabelText('Caso'), { target: { value: '1' } });
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Sí, la respalda' }));
    expect(screen.getByRole('status')).toHaveTextContent('no demuestra que toda la población');
  });
});
