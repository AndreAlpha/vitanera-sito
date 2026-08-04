import { Routes } from '@angular/router';
import { ARTICLES } from './core/data/articles.data';
import { CATEGORIES } from './core/config/site.config';
import { areaBySlug, metaBySlug } from './core/data/calendar.meta';

const suffix = ' · Vitanera';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: `Panoramica${suffix}`,
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },

  /* ---------------------------------------------------------------- Analisi */
  {
    path: 'analisi',
    title: `Archivio analisi${suffix}`,
    data: { category: null },
    loadComponent: () => import('./features/articles/article-list').then((m) => m.ArticleList),
  },
  {
    path: 'analisi/:slug',
    title: (route) => {
      const slug = route.paramMap.get('slug');
      const article = ARTICLES.find((a) => a.slug === slug);
      return article ? `${article.title}${suffix}` : `Analisi${suffix}`;
    },
    loadComponent: () => import('./features/articles/article-detail').then((m) => m.ArticleDetail),
  },

  /* ------------------------------------------------------------- Argomenti */
  {
    path: 'argomenti',
    pathMatch: 'full',
    title: `Argomenti${suffix}`,
    loadComponent: () => import('./features/topics/topics').then((m) => m.Topics),
  },
  {
    path: 'argomenti/:category',
    title: (route) => {
      const slug = route.paramMap.get('category');
      const category = CATEGORIES.find((c) => c.slug === slug);
      return category ? `${category.name}${suffix}` : `Argomento${suffix}`;
    },
    loadComponent: () => import('./features/articles/article-list').then((m) => m.ArticleList),
  },

  /* ------------------------------------------------------------ Calendario */
  {
    path: 'calendario',
    pathMatch: 'full',
    title: `Calendario economico indici principali${suffix}`,
    loadComponent: () =>
      import('./features/calendar/calendar-overview').then((m) => m.CalendarOverview),
  },
  {
    path: 'calendario/banche-centrali',
    title: `Banche centrali${suffix}`,
    loadComponent: () => import('./features/calendar/central-banks').then((m) => m.CentralBanks),
  },
  {
    path: 'calendario/:area',
    title: (route) => {
      const area = areaBySlug(route.paramMap.get('area') ?? '');
      return area ? `Calendario ${area.name}${suffix}` : `Calendario economico${suffix}`;
    },
    loadComponent: () => import('./features/calendar/calendar-area').then((m) => m.CalendarArea),
  },
  {
    path: 'calendario/:area/:key',
    title: (route) => {
      const meta = metaBySlug(route.paramMap.get('area') ?? '', route.paramMap.get('key') ?? '');
      return meta ? `${meta.name}${suffix}` : `Indicatore${suffix}`;
    },
    loadComponent: () =>
      import('./features/calendar/indicator-detail').then((m) => m.IndicatorDetail),
  },

  /* ------------------------------------------------------------------ Esiti */
  {
    path: 'esiti',
    title: `Esiti delle analisi${suffix}`,
    loadComponent: () => import('./features/outcomes/outcomes').then((m) => m.Outcomes),
  },

  /* ---------------------------------------------------------------- Scenari */
  {
    path: 'orizzonti',
    title: `Orizzonti XAU/USD${suffix}`,
    loadComponent: () => import('./features/outlook/outlook').then((m) => m.Outlook),
  },

  /* -------------------------------------------------------------- Strumenti */
  {
    path: 'metodologia',
    title: `Metodologia${suffix}`,
    loadComponent: () => import('./features/methodology/methodology').then((m) => m.Methodology),
  },
  {
    path: 'glossario',
    title: `Glossario${suffix}`,
    loadComponent: () => import('./features/glossary/glossary').then((m) => m.Glossary),
  },

  /* ----------------------------------------------------------- Trasparenza */
  {
    path: 'avvertenze',
    title: `Avvertenze e rischi${suffix}`,
    data: { documentSlug: 'avvertenze' },
    loadComponent: () => import('./features/legal/legal-page').then((m) => m.LegalPage),
  },
  {
    path: 'note-legali',
    title: `Note legali${suffix}`,
    data: { documentSlug: 'note-legali' },
    loadComponent: () => import('./features/legal/legal-page').then((m) => m.LegalPage),
  },
  {
    path: 'privacy',
    title: `Privacy e cookie${suffix}`,
    data: { documentSlug: 'privacy' },
    loadComponent: () => import('./features/legal/legal-page').then((m) => m.LegalPage),
  },

  {
    path: '**',
    title: `Pagina non trovata${suffix}`,
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
