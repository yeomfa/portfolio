import type { CollectionEntry } from 'astro:content';

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const EMAIL = 'omaryesidfa@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/omarfandino';
export const GITHUB = 'https://github.com/yeomfa';

/** Spanish lives at the root; English under /en, with "projects" for "proyectos". */
export const paths = {
  home: (lang: Lang) => (lang === 'es' ? '/' : '/en'),
  project: (lang: Lang, slug: string) => (lang === 'es' ? `/proyectos/${slug}` : `/en/projects/${slug}`),
  section: (lang: Lang, id: string) => (lang === 'es' ? `/#${id}` : `/en#${id}`),
};

/** A project entry's id is "<lang>/<slug>". */
export const slugOf = (p: CollectionEntry<'proyectos'>) => p.id.split('/')[1];
export const langOf = (p: CollectionEntry<'proyectos'>) => p.id.split('/')[0] as Lang;

export const ui = {
  es: {
    htmlLang: 'es',
    other: { lang: 'en' as Lang, label: 'English' },
    title: 'Omar Fandiño, ingeniero de IA y software',
    description: 'Portafolio de Omar Fandiño: ACUDA en UNIPAZ, Mocta, Kipun y Tobot. Automatización e IA para universidades y empresas en Colombia.',
    nav: { projects: 'Proyectos', background: 'Trayectoria', contact: 'Contacto', email: 'Escríbeme', home: 'omaryesid.dev, inicio', label: 'Principal' },
    ids: { case: 'acuda', background: 'trayectoria', projects: 'proyectos', contact: 'contacto' },
    hero: {
      head: 'Automatizo lo que hoy es manual.',
      lead: 'Soy Omar Fandiño, ingeniero de IA y software en Colombia.',
      alt: 'Retrato de Omar Fandiño sobre fondo negro, con contraluz ámbar',
      primary: 'Escríbeme',
      secondary: 'Ver ACUDA',
    },
    case: { head: 'Cada paso, ligado a su norma', cta: 'Ver el caso' },
    facts: { project: 'Proyecto', role: 'Rol', since: 'Desde', where: 'Dónde', status: 'Estado' },
    background: {
      head: 'Construyo, emprendo y enseño',
      roles: [
        { verb: 'Construyo', line: 'Plataformas con IA, como ACUDA.', marks: ['acuda'] },
        { verb: 'Emprendo', line: 'Mocta, mi empresa, y su producto Kipun.', marks: ['mocta', 'kipun'] },
        { verb: 'Enseño', line: 'Programación en UNIPAZ, y Tobot.', marks: ['tobot'] },
      ],
      record: [
        { when: '2026-04', label: 'abr 2026', what: 'UNIPAZ', detail: 'ACUDA y docencia', who: 'Ingeniero de desarrollo y docente' },
        { when: '2023-12', label: 'dic 2023', what: 'Universidad del Magdalena', detail: 'Ingeniería de Sistemas', who: 'Egresado' },
        { when: '2023-11', label: 'nov 2023', what: 'Crear Colombia', detail: 'Más de 10 clientes', who: 'Desarrollador' },
        { when: '2023-08', label: 'ago 2023', what: 'DAABON', detail: 'Prefacturación automática', who: 'Ingeniero de software' },
      ],
      recordLabel: 'Trayectoria',
      reading: 'años construyendo software de punta a punta.',
    },
    projects: {
      head: 'Lo que construyo por mi cuenta',
      lead: 'Una empresa, su producto y una herramienta para aprender a programar.',
      see: (title: string) => `Ver ${title}`,
    },
    contact: {
      head: '¿Qué haces hoy a mano?',
      location: 'Ubicación',
      locationValue: 'Colombia',
      languages: 'Idiomas',
      languagesValue: 'Español nativo, inglés B1',
    },
    project: {
      crumb: 'Proyectos',
      visit: (host: string) => `Visitar ${host}`,
      statementLabel: 'Qué resuelve',
      stackLabel: 'Construido con',
      moreLabel: 'Más pantallas',
      next: 'Siguiente proyecto',
    },
    newTab: '(se abre en una pestaña nueva)',
    notFound: { title: 'Esta página no existe', lead: 'El enlace está roto o la página se movió.', back: 'Volver al inicio' },
  },
  en: {
    htmlLang: 'en',
    other: { lang: 'es' as Lang, label: 'Español' },
    title: 'Omar Fandiño, AI and software engineer',
    description: 'Portfolio of Omar Fandiño: ACUDA at UNIPAZ, Mocta, Kipun and Tobot. Automation and AI for universities and businesses in Colombia.',
    nav: { projects: 'Projects', background: 'Background', contact: 'Contact', email: 'Email me', home: 'omaryesid.dev, home', label: 'Main' },
    ids: { case: 'acuda', background: 'background', projects: 'projects', contact: 'contact' },
    hero: {
      head: 'I automate what’s done by hand.',
      lead: 'I’m Omar Fandiño, an AI and software engineer in Colombia.',
      alt: 'Portrait of Omar Fandiño on a black background, with an amber rim light',
      primary: 'Email me',
      secondary: 'See ACUDA',
    },
    case: { head: 'Every step, tied to its rule', cta: 'Read the case' },
    facts: { project: 'Project', role: 'Role', since: 'Since', where: 'Where', status: 'Status' },
    background: {
      head: 'I build, found and teach',
      roles: [
        { verb: 'Build', line: 'AI platforms, like ACUDA.', marks: ['acuda'] },
        { verb: 'Found', line: 'Mocta, my company, and its product Kipun.', marks: ['mocta', 'kipun'] },
        { verb: 'Teach', line: 'Programming at UNIPAZ, and Tobot.', marks: ['tobot'] },
      ],
      record: [
        { when: '2026-04', label: 'Apr 2026', what: 'UNIPAZ', detail: 'ACUDA and teaching', who: 'Development engineer and lecturer' },
        { when: '2023-12', label: 'Dec 2023', what: 'Universidad del Magdalena', detail: 'Systems Engineering', who: 'Graduate' },
        { when: '2023-11', label: 'Nov 2023', what: 'Crear Colombia', detail: 'More than 10 clients', who: 'Developer' },
        { when: '2023-08', label: 'Aug 2023', what: 'DAABON', detail: 'Automated pre-invoicing', who: 'Software engineer' },
      ],
      recordLabel: 'Background',
      reading: 'years building software end to end.',
    },
    projects: {
      head: 'What I build on my own',
      lead: 'A company, its product and a tool for learning to code.',
      see: (title: string) => `See ${title}`,
    },
    contact: {
      head: 'What do you still do by hand?',
      location: 'Location',
      locationValue: 'Colombia',
      languages: 'Languages',
      languagesValue: 'Spanish (native), English (B1)',
    },
    project: {
      crumb: 'Projects',
      visit: (host: string) => `Visit ${host}`,
      statementLabel: 'What it solves',
      stackLabel: 'Built with',
      moreLabel: 'More screens',
      next: 'Next project',
    },
    newTab: '(opens in a new tab)',
    notFound: { title: 'This page does not exist', lead: 'The link is broken, or the page moved.', back: 'Back to the home page' },
  },
} as const;
