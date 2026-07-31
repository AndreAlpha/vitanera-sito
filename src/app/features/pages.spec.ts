import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ARTICLES } from '../core/data/articles.data';
import { LEGAL_DOCUMENTS } from '../core/data/legal.data';
import { CATEGORIES } from '../core/config/site.config';
import { CALENDAR_SECTIONS } from '../core/data/calendar.data';
import { Home } from './home/home';
import { ArticleList } from './articles/article-list';
import { ArticleDetail } from './articles/article-detail';
import { Topics } from './topics/topics';
import { CalendarOverview } from './calendar/calendar-overview';
import { CalendarArea } from './calendar/calendar-area';
import { IndicatorDetail } from './calendar/indicator-detail';
import { CentralBanks } from './calendar/central-banks';
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
    expect(text).toContain('Non è consulenza finanziaria');
    // L'indicatore operativo è sempre presente, valido, scaduto o assente.
    expect(text).toMatch(/Lettura valida|In attesa di notizie/);
    expect(text).toContain('Calendario economico');
  });

  it('archivio e ogni categoria', async () => {
    for (const category of [null, ...CATEGORIES.map((c) => c.slug)]) {
      const text = textOf(await render(ArticleList, { category }));
      expect(text).toContain('non costituisce consulenza finanziaria');
    }
  });

  it('indice degli argomenti', async () => {
    const text = textOf(await render(Topics));
    expect(text).toContain('Argomenti');
    for (const category of CATEGORIES) {
      expect(text).toContain(category.name);
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

describe('calendario economico', () => {
  it('panoramica del calendario', async () => {
    const text = textOf(await render(CalendarOverview));
    expect(text).toContain('Calendario economico indici principali');
    expect(text).toContain('USA');
    expect(text).toContain('Euro zona');
    expect(text).toContain('Prossime uscite');
  });

  it('ogni area con tutti i suoi indicatori', async () => {
    for (const section of CALENDAR_SECTIONS) {
      const slug = section.area === 'usa' ? 'usa' : 'euro-zona';
      const text = textOf(await render(CalendarArea, { area: slug }));
      expect(text).toContain(section.name);
      for (const indicator of section.indicators) {
        expect(text).toContain(indicator.name);
      }
    }
  });

  it('area inesistente', async () => {
    const text = textOf(await render(CalendarArea, { area: 'marte' }));
    expect(text).toContain('Area non trovata');
  });

  it('dettaglio di ogni indicatore, con storico e prossima uscita', async () => {
    for (const section of CALENDAR_SECTIONS) {
      const slug = section.area === 'usa' ? 'usa' : 'euro-zona';
      for (const indicator of section.indicators) {
        const text = textOf(await render(IndicatorDetail, { area: slug, key: indicator.key }));
        expect(text).toContain(indicator.name);
        expect(text).toContain('Ultimo valore diffuso');
        expect(text).toContain('Prossima uscita');
        expect(text).toContain('Storico');
        // Le tre colonne richieste: data e ora, previsto, attuale.
        expect(text).toContain('Data e ora');
        expect(text).toContain('Previsto');
        expect(text).toContain('Attuale');
        expect(text).toContain(indicator.source);
      }
    }
  });

  it('indicatore inesistente', async () => {
    const text = textOf(await render(IndicatorDetail, { area: 'usa', key: 'inesistente' }));
    expect(text).toContain('Indicatore non trovato');
  });

  it('agenda delle banche centrali', async () => {
    const text = textOf(await render(CentralBanks));
    expect(text).toContain('Banche centrali');
    expect(text).toContain('Federal Reserve');
    expect(text).toContain('Banca centrale europea');
    expect(text).toContain('Prossimi appuntamenti');
  });
});
