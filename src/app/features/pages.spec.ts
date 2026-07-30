import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ARTICLES } from '../core/data/articles.data';
import { LEGAL_DOCUMENTS } from '../core/data/legal.data';
import { Home } from './home/home';
import { ArticleList } from './articles/article-list';
import { ArticleDetail } from './articles/article-detail';
import { Outlook } from './outlook/outlook';
import { Methodology } from './methodology/methodology';
import { Glossary } from './glossary/glossary';
import { LegalPage } from './legal/legal-page';
import { NotFound } from './not-found/not-found';

/**
 * Verifica che ogni pagina venga effettivamente resa senza errori di template e
 * che l'avvertenza legale sia presente dove deve esserlo.
 */

async function render<T>(type: Type<T>, inputs: Record<string, unknown> = {}) {
  TestBed.resetTestingModule();
  await TestBed.configureTestingModule({ providers: [provideRouter([])] }).compileComponents();
  const fixture = TestBed.createComponent(type);
  for (const [key, value] of Object.entries(inputs)) {
    fixture.componentRef.setInput(key, value);
  }
  await fixture.whenStable();
  return fixture;
}

function textOf(fixture: { nativeElement: unknown }): string {
  return (fixture.nativeElement as HTMLElement).textContent ?? '';
}

describe('pagine', () => {
  it('panoramica', async () => {
    const text = textOf(await render(Home));
    expect(text).toContain('XAU/USD');
    expect(text).toContain('Nessun contenuto è consulenza finanziaria');
  });

  it('elenco per categoria e archivio', async () => {
    for (const category of ['fondamentali', 'correlazioni', 'geopolitica', null]) {
      const text = textOf(await render(ArticleList, { category }));
      expect(text).toContain('non costituisce consulenza finanziaria');
    }
  });

  it('dettaglio di ogni analisi pubblicata', async () => {
    for (const article of ARTICLES) {
      const text = textOf(await render(ArticleDetail, { slug: article.slug }));
      expect(text).toContain(article.title);
      expect(text).toContain('In sintesi');
      expect(text).toContain('Avvertenze legali e informativa sui rischi');
    }
  });

  it('dettaglio con slug inesistente', async () => {
    const text = textOf(await render(ArticleDetail, { slug: 'inesistente' }));
    expect(text).toContain('Analisi non trovata');
  });

  it('orizzonti, metodologia, glossario, 404', async () => {
    expect(textOf(await render(Outlook))).toContain('Orizzonti XAU/USD');
    expect(textOf(await render(Methodology))).toContain('Che cosa questo sito non è');
    expect(textOf(await render(Glossary))).toContain('Glossario');
    expect(textOf(await render(NotFound))).toContain('Questa pagina non esiste');
  });

  it('pagine legali', async () => {
    for (const doc of LEGAL_DOCUMENTS) {
      const text = textOf(await render(LegalPage, { documentSlug: doc.slug }));
      expect(text).toContain(doc.title);
      expect(text).toContain('Non è consulenza finanziaria');
    }
  });
});
