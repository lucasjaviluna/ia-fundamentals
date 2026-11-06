import { Intro90Page } from '../pages/Intro90Page';
import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router';
import { HomePage, CoursePage, LessonPage, LabPage, GlossaryPage, NotFoundPage } from '../pages/Pages';
import { PresentationPage } from '../pages/PresentationPage';

type Theme = 'light' | 'dark';
const themeKey = 'ia-fundamentals:theme';

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem(themeKey);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch { /* ignore */ }
  return 'dark';
}

function SiteLayout({ theme, toggleTheme }: { theme: Theme; toggleTheme: () => void }) {
  return (
    <div className="site">
      <a className="skip-link" href="#main">Ir al contenido</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="IA Fundamentals, inicio"><span className="brand-mark">✳</span><span>ia<span className="brand-light">/fundamentals</span></span></Link>
          <nav className="top-nav" aria-label="Navegación principal">
            <NavLink end to="/curso">Curso</NavLink>
            <NavLink to="/labs/next-token">Laboratorios</NavLink>
            <NavLink to="/glosario">Glosario</NavLink>
          </nav>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'} title="Cambiar tema">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="footer">
        <div className="container footer-inner"><span>✳ ia/fundamentals</span><span>Aprender haciendo, sin fórmulas innecesarias.</span><span>Un proyecto educativo abierto · MVP</span></div>
      </footer>
    </div>
  );
}

export function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(themeKey, theme); } catch { /* ignore */ }
  }, [theme]);

  return (
    <Routes>
      <Route element={<SiteLayout theme={theme} toggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso" element={<CoursePage />} />
        <Route path="/curso/:slug" element={<LessonPage />} />
        <Route path="/labs/:slug" element={<LabPage />} />
        <Route path="/glosario" element={<GlossaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/presentar/intro-90" element={<Intro90Page />} />
      <Route path="/presentar/:slug" element={<PresentationPage />} />
    </Routes>
  );
}
