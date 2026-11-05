import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { App } from './App';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });
describe('navegación del temario', () => {
  it('lleva al inicio del contenido al elegir otra lección o la actual', () => {
    const scroll = vi.fn();
    const previous = HTMLElement.prototype.scrollIntoView;
    HTMLElement.prototype.scrollIntoView = scroll;
    try {
      render(<MemoryRouter initialEntries={['/curso/que-es-un-llm']}><App /></MemoryRouter>);
      const menu = screen.getByRole('complementary', { name: 'Temario disponible' });
      fireEvent.click(within(menu).getByRole('link', { name: /tokens y tokenización/i }));
      expect(screen.getByRole('heading', { level: 1, name: 'Tokens y tokenización' })).toBeInTheDocument();
      expect(scroll).toHaveBeenCalledTimes(1);
      expect(scroll).toHaveBeenLastCalledWith({ block: 'start', behavior: 'instant' });
      fireEvent.click(within(menu).getByRole('link', { name: /tokens y tokenización/i }));
      expect(scroll).toHaveBeenCalledTimes(2);
    } finally { HTMLElement.prototype.scrollIntoView = previous; }
  });
});
