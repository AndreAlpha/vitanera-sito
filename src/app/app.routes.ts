import { Routes } from '@angular/router';
import { ARTICLES } from './core/data/articles.data';

const suffix = ' · Vitanera';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: `Panoramica${suffix}`,
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'fondamentali',
    title: `Fondamentali${suffix}`,
    data: { category: 'fondamentali' },
    loadComponent: () => import('./features/articles/article-list').then((m) => m.ArticleList),
  },
  {
    path: 'correlazioni',
    title: `Correlazioni${suffix}`,
    data: { category: 'correlazioni' },
    loadComponent: () => import('./features/articles/article-list').then((m) => m.ArticleList),
  },
  {
    path: 'geopolitica',
    title: `Geopolitica${suffix}`,
    data: { category: 'geopolitica' },
    loadComponent: () => import('./features/articles/article-list').then((m) => m.ArticleList),
  },
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
  {
    path: 'orizzonti',
    title: `Orizzonti XAU/USD${suffix}`,
    loadComponent: () => import('./features/outlook/outlook').then((m) => m.Outlook),
  },
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
