import { useLayoutEffect, useRef } from 'react';
import { Link, useParams } from 'react-router';
import { blocks, catalog, lessonBySlug, lessons } from '../data/lessons';
import { useCompleted, completeLesson } from '../data/progress';
import { KeyTakeaways, LessonDemo, StepCard } from '../components/StepCard';

const glossary = [
  { term: 'IA', definition: 'Conjunto de técnicas que permiten construir sistemas capaces de realizar tareas asociadas con capacidades inteligentes.' },
  { term: 'Machine Learning', definition: 'Enfoque de IA que permite aprender patrones a partir de datos.' },
  { term: 'LLM', definition: 'Modelo de lenguaje de gran tamaño entrenado para procesar y generar secuencias de tokens.' },
  { term: 'Entrenamiento', definition: 'Proceso en el que se ajustan parámetros de un modelo a partir de datos.' },
  { term: 'Inferencia', definition: 'Uso de un modelo ya entrenado para producir una salida.' },
  { term: 'Prompt', definition: 'Entrada e instrucciones que se proporcionan a un modelo.' },
  { term: 'Token', definition: 'Unidad de una codificación del texto, representada internamente por un identificador numérico.' },
  { term: 'Tokenizador', definition: 'Algoritmo que transforma texto en secuencias de IDs de tokens.' },
  { term: 'Ventana de contexto', definition: 'Límite de tokens que un modelo puede procesar dentro de una interacción.' },
  { term: 'Alucinación', definition: 'Salida del modelo que presenta información incorrecta o no respaldada como si fuera cierta.' },
  { term: 'Tool calling', definition: 'Mecanismo para que un modelo solicite invocar herramientas que la aplicación puede ejecutar.' },
  { term: 'Agente', definition: 'Sistema que utiliza un modelo junto con herramientas, estado y decisiones para completar tareas en varios pasos.' },
  { term: 'Skill', definition: 'Paquete de instrucciones y recursos que guía a un agente en tareas concretas.' },
  { term: 'MCP', definition: 'Protocolo abierto para conectar aplicaciones de IA con herramientas y fuentes de datos.' },
  { term: 'Embedding', definition: 'Representación vectorial que permite comparar similitud entre elementos.' },
  { term: 'RAG', definition: 'Estrategia para recuperar información externa relevante y aportarla como contexto al generar una respuesta.' },
];

function Meta({ children }: { children: React.ReactNode }) { return <div className="eyebrow">{children}</div>; }

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-tag"><span className="live-dot" /> APRENDÉ IA DESDE CERO</div>
            <h1>La inteligencia artificial, <span>sin complicaciones.</span></h1>
            <p>De los primeros tokens a los agentes. Conceptos claros, visualizaciones que podés tocar y ejemplos que realmente muestran cómo funcionan las cosas.</p>
            <div className="hero-actions"><Link className="btn btn-primary btn-large" to="/curso">Explorar el curso <span aria-hidden="true">↗</span></Link><Link className="btn btn-muted btn-large" to="/presentar/que-es-un-llm">Comenzar presentación <span aria-hidden="true">▣</span></Link></div>
            <div className="hero-numbers"><div><strong>16</strong><span>temas previstos</span></div><div><strong>{String(lessons.length).padStart(2, '0')}</strong><span>lecciones disponibles</span></div><div><strong>100%</strong><span>práctico y visual</span></div></div>
          </div>
          <div className="hero-art" aria-label="Mapa visual de los conceptos de IA">
            <div className="art-grid" aria-hidden="true" />
            <div className="art-orbit orbit-one" aria-hidden="true" />
            <div className="art-orbit orbit-two" aria-hidden="true" />
            <div className="art-core">✳<span>IA</span></div>
            <div className="art-node node-one"><span>01</span> LLMs</div>
            <div className="art-node node-two"><span>02</span> Tokens</div>
            <div className="art-node node-three"><span>03</span> Prompts</div>
            <div className="art-node node-four"><span>04</span> Agentes</div>
            <div className="art-caption">Explorá · Entendé · Experimentá</div>
          </div>
        </div>
      </section>
      <section className="section container">
        <Meta>UNA FORMA DIFERENTE DE APRENDER</Meta>
        <h2 className="section-heading">Menos teoría abstracta.<br /><span>Más comprensión real.</span></h2>
        <div className="feature-grid">
          <article className="feature-card"><span className="feature-icon">◈</span><h3>Ideas en palabras simples</h3><p>Analogías, ejemplos cotidianos y explicaciones sin jerga innecesaria.</p></article>
          <article className="feature-card"><span className="feature-icon">◉</span><h3>Laboratorios interactivos</h3><p>Cambiá textos, elegí opciones y observá cómo funcionan los conceptos.</p></article>
          <article className="feature-card"><span className="feature-icon">▣</span><h3>También para presentar</h3><p>La misma lección funciona como recorrido guiado para una charla.</p></article>
        </div>
      </section>
      <section className="section container home-cta">
        <div><Meta>EMPEZÁ POR ACÁ</Meta><h2>Tu primera pregunta sobre IA.</h2><p>¿Cómo puede un modelo generar una respuesta que nunca vio escrita de esa manera?</p></div>
        <Link className="btn btn-primary" to="/curso/que-es-un-llm">Descubrir cómo funciona →</Link>
      </section>
    </>
  );
}

export function CoursePage() {
  const completed = useCompleted();
  return (
    <div className="container page">
      <Meta>MAPA DE APRENDIZAJE</Meta>
      <h1 className="page-title">Un concepto a la vez.</h1>
      <p className="page-lead">Cuatro bloques, 16 temas y un camino desde los fundamentos hasta la aplicación práctica. Las lecciones disponibles se irán incorporando de forma progresiva.</p>
      <div className="course-progress"><span>Tu progreso en las lecciones disponibles</span><strong>{completed.filter((slug) => lessons.some((lesson) => lesson.slug === slug)).length} / {lessons.length}</strong><div className="course-track"><span style={{ width: `${Math.min(100, completed.length / lessons.length * 100)}%` }} /></div></div>
      <div className="block-list">
        {blocks.map((block) => (
          <section className="course-block" key={block.id}>
            <div className="block-heading"><span className="block-index">0{block.id}</span><div><h2>{block.name}</h2><p>{block.subtitle}</p></div></div>
            <div className="topic-list">
              {catalog.filter((topic) => topic.block === block.id).map((topic) => {
                const available = Boolean(topic.slug);
                const label = <><span className="topic-number">{String(topic.number).padStart(2, '0')}</span><span className="topic-name">{topic.title}</span><span className="topic-duration">{topic.minutes} min</span><span className="topic-status">{available ? (completed.includes(topic.slug!) ? '✓ Completada' : 'Disponible') : 'Próximamente'}</span><span className="topic-arrow">{available ? '↗' : '—'}</span></>;
                return available ? <Link key={topic.number} className="topic-row is-available" to={`/curso/${topic.slug}`}>{label}</Link> : <div key={topic.number} className="topic-row is-locked">{label}</div>;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function LessonPage() {
  const { slug = '' } = useParams();
  const lesson = lessonBySlug(slug);
  const completed = useCompleted();
  const contentRef = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<string | null>(null);
  useLayoutEffect(() => {
    if (pendingScroll.current === slug) {
      contentRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
      pendingScroll.current = null;
    }
  }, [slug]);
  if (!lesson) return <NotFoundPage />;
  const currentIndex = lessons.indexOf(lesson);
  const nextLesson = lessons[currentIndex + 1];
  return (
    <div className="container lesson-layout">
      <aside className="lesson-sidebar" aria-label="Temario disponible">
        <Link className="sidebar-back" to="/curso">← Todas las lecciones</Link>
        <Meta>BLOQUE {String(lesson.block).padStart(2, '0')} · {blocks.find((block) => block.id === lesson.block)?.name.toUpperCase()}</Meta>
        <nav className="side-lessons">{lessons.map((item) => <Link key={item.id} className={`side-lesson ${item.id === lesson.id ? 'active' : ''}`} to={`/curso/${item.slug}`} onClick={(event) => { if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return; if (item.slug === slug) contentRef.current?.scrollIntoView({ block: 'start', behavior: 'instant' }); else pendingScroll.current = item.slug; }}><span>{String(item.number).padStart(2, '0')}</span>{item.title}{completed.includes(item.slug) && <span aria-label="Completada">✓</span>}</Link>)}</nav>
        <div className="sidebar-tip"><strong>¿Dando una charla?</strong><p>Mostrá el contenido paso a paso desde el modo presentación.</p><Link to={`/presentar/${lesson.slug}`}>Abrir presentación ↗</Link></div>
      </aside>
      <div className="lesson-main" ref={contentRef}>
        <div className="lesson-topline"><Meta>LECCIÓN {String(lesson.number).padStart(2, '0')} · {lesson.level.toUpperCase()} · {lesson.minutes} MIN</Meta><Link className="btn btn-muted" to={`/presentar/${lesson.slug}`}>▣ Presentar</Link></div>
        <h1 className="page-title lesson-title">{lesson.title}</h1>
        <p className="page-lead">{lesson.description}</p>
        <div className="big-question"><span>LA PREGUNTA</span><h2>{lesson.question}</h2></div>
        <div className="core-idea"><span>EN UNA FRASE</span><p>{lesson.keyIdea}</p></div>
        <div className="lesson-sections">
          {lesson.steps.map((step) => <StepCard key={step.id} lesson={lesson} step={step} onComplete={() => completeLesson(lesson.slug)} />)}
          <KeyTakeaways lesson={lesson} />
          {lesson.resources && lesson.resources.length > 0 && <details className="lesson-resources"><summary>Recursos para profundizar</summary><p>Lecturas y herramientas externas para explorar a tu ritmo.</p><ul>{lesson.resources.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title} ↗</a><span>{resource.description}</span></li>)}</ul></details>}
        </div>
        <div className="lesson-end">
          <div><Meta>SEGUÍ EXPLORANDO</Meta><h3>Probá el laboratorio completo</h3><p>Volvé a experimentar con un ejemplo interactivo independiente.</p><Link className="btn btn-muted" to={`/labs/${lesson.labSlug}`}>Abrir laboratorio ↗</Link></div>
          {nextLesson && <div><Meta>PRÓXIMA LECCIÓN DISPONIBLE</Meta><h3>{nextLesson.title}</h3><Link className="btn btn-primary" to={`/curso/${nextLesson.slug}`}>Continuar →</Link></div>}
        </div>
      </div>
    </div>
  );
}

export function LabPage() {
  const { slug } = useParams();
  const lesson = lessons.find((item) => item.labSlug === slug);
  if (!lesson) return <NotFoundPage />;
  return (
    <div className="container page lab-page">
      <Link className="breadcrumb" to={`/curso/${lesson.slug}`}>← Volver a la lección</Link>
      <Meta>LABORATORIO INTERACTIVO · SIN API</Meta>
      <h1 className="page-title">{lesson.id === 'modelos-api' ? 'Solicitud a una API' : lesson.id === 'skills' ? 'Explorador de skills' : lesson.id === 'mcp' ? 'Explorador de MCP' : lesson.id === 'tools' ? 'Llamada a una herramienta' : lesson.id === 'agentes' ? 'Traza de un agente' : lesson.id === 'confiabilidad' ? 'Explorador de evidencias' : lesson.id === 'contexto' ? 'Medidor de contexto' : lesson.id === 'prompts' ? 'Comparador de prompts' : lesson.id === 'funcionamiento-llm' ? 'Recorrido de un LLM' : lesson.id === 'mapa-ia' ? 'Clasificador de conceptos de IA' : lesson.id === 'llm' ? 'Predicción del siguiente fragmento' : 'Explorador de tokens'}</h1>
      <p className="page-lead">{lesson.id === 'modelos-api' ? 'Compará solicitudes y respuestas JSON ficticias de texto e imagen.' : lesson.id === 'skills' ? 'Recorré una skill ficticia de revisión de código.' : lesson.id === 'mcp' ? 'Explorá capacidades y mensajes simulados.' : lesson.id === 'tools' ? 'Recorré una llamada simulada a una herramienta.' : lesson.id === 'agentes' ? 'Explorá una traza preparada y decidí una aprobación.' : lesson.id === 'confiabilidad' ? 'Contrastá respuestas con evidencia ficticia preparada.' : lesson.id === 'contexto' ? 'Distribuí un presupuesto ficticio entre entrada y salida.' : lesson.id === 'prompts' ? 'Compará instrucciones y respuestas ilustrativas preparadas.' : lesson.id === 'funcionamiento-llm' ? 'Un recorrido ilustrativo desde la entrada hasta la respuesta.' : lesson.id === 'mapa-ia' ? 'Una simulación para distinguir conceptos mediante casos preparados.' : lesson.id === 'llm' ? 'Una simulación paso a paso para entender cómo se elige una continuación posible.' : 'Un tokenizador real, ejecutado dentro de tu navegador, con un vocabulario de referencia.'}</p>
      <LessonDemo lesson={lesson} />
      <div className="lab-explanation"><h2>¿Qué acabás de observar?</h2><p>{lesson.id === 'modelos-api' ? 'Una aplicación envía una solicitud y recibe una respuesta; el formato y las modalidades dependen del servicio.' : lesson.id === 'skills' ? 'Una skill orienta tareas con instrucciones y recursos; su uso depende de la aplicación y sus permisos.' : lesson.id === 'mcp' ? 'Host, cliente y servidor intercambian capacidades; la aplicación debe controlar permisos y revisar resultados.' : lesson.id === 'tools' ? 'La aplicación controla y valida la llamada propuesta antes de devolver un resultado.' : lesson.id === 'agentes' ? 'Un agente puede observar resultados y decidir pasos, con límites y aprobación humana definidos por la aplicación.' : lesson.id === 'confiabilidad' ? 'Una afirmación necesita respaldo pertinente. Una fuente que no contiene el dato no alcanza para comprobarlo.' : lesson.id === 'contexto' ? 'El presupuesto de una interacción es limitado. La aplicación decide qué hacer si la entrada y la salida previstas exceden el límite.' : lesson.id === 'prompts' ? 'La tarea, el contexto y las restricciones hacen más explícito lo que se espera. Los resultados son ilustrativos y requieren revisión.' : lesson.id === 'funcionamiento-llm' ? 'La entrada se tokeniza, el modelo procesa el contexto y la salida se construye progresivamente. Este ejemplo simplifica el proceso.' : lesson.id === 'mapa-ia' ? 'Los ejemplos destacan una característica, pero las categorías pueden superponerse. Un sistema generativo también puede usar aprendizaje profundo.' : lesson.id === 'llm' ? 'En cada paso cambian las posibles continuaciones. En un LLM real las predicciones son más complejas y dependen de los tokens anteriores y del contexto; aquí utilizamos opciones y porcentajes ficticios.' : 'El texto se transforma en IDs de tokens. Un mismo idioma, un signo o un emoji pueden producir segmentaciones diferentes. Lo mostrado corresponde específicamente a cl100k_base.'}</p><Link to={`/curso/${lesson.slug}`}>Volver a la explicación y al repaso →</Link></div>
    </div>
  );
}

export function GlossaryPage() {
  return (
    <div className="container page">
      <Meta>GLOSARIO</Meta>
      <h1 className="page-title">Palabras que ahora tienen sentido.</h1>
      <p className="page-lead">Definiciones breves para tener a mano durante la charla o el estudio.</p>
      <div className="glossary-grid">{glossary.map((entry) => <article className="glossary-card" key={entry.term}><h2>{entry.term}</h2><p>{entry.definition}</p></article>)}</div>
    </div>
  );
}

export function NotFoundPage() {
  return <div className="container page not-found"><Meta>404 · NO ENCONTRADO</Meta><h1 className="page-title">Esta sección todavía no está disponible.</h1><p className="page-lead">Volvé al mapa para encontrar una de las lecciones publicadas.</p><Link className="btn btn-primary" to="/curso">Ver lecciones disponibles →</Link></div>;
}
