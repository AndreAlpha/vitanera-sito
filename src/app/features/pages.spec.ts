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
import { Outcomes } from './outcomes/outcomes';
import { Outlook } from './outlook/outlook';
import { Methodology } from './methodology/methodology';
import { Glossary } from './glossary/glossary';
import { LegalPage } from './legal/legal-page';
import { NotFound } from './not-found/not-found';

/**
 * Verifica che ogni pagina venga resa senza errori di template.
 *
 * Sulle avvertenze il criterio è cambiato. Prima si controllava che ci fossero;
 * ora si controlla anche che non si ripetano: comparivano dodici volte in giro
 * per il sito, più la barra fissa in cima e la modale di primo accesso, e la
 * ripetizione le rendeva invisibili invece che chiare. Il testo integrale vive
 * in `/avvertenze`, il riassunto nel piè di pagina, e una riga sola compare
 * dove il lettore incontra un giudizio.
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

/** Quante volte una pagina ripete la stessa formula di avvertenza. */
function occurrences(text: string, needle: string): number {
  return text.split(needle).length - 1;
}

describe('pagine', () => {
  it('panoramica', async () => {
    const text = textOf(await render(Home));
    expect(text).toContain('XAU/USD');
    expect(text).toContain('Non è consulenza finanziaria');
    // L'indicatore operativo è sempre presente: o dice quando è stato scritto,
    // o dichiara di non avere niente da dire. Non ha più una scadenza da cui
    // passare da solo a «lettura scaduta».
    expect(text).toMatch(/Ultimo aggiornamento|In attesa di notizie/);
    expect(text).toContain('Calendario economico');
  });

  it('archivio e ogni categoria', async () => {
    for (const category of [null, ...CATEGORIES.map((c) => c.slug)]) {
      const info = CATEGORIES.find((c) => c.slug === category);
      const nome = info?.name ?? 'archivio';
      const text = textOf(await render(ArticleList, { category }));
      expect(text).toContain(info?.name ?? 'Archivio analisi');

      // Le due facce dello stesso elenco. Con ventinove categorie e un
      // archivio che cresce, in qualunque momento alcune pagine sono piene e
      // altre vuote: il controllo deve valere per entrambe, altrimenti scade
      // alla prima pubblicazione.
      const attese = category ? ARTICLES.filter((a) => a.categories.includes(category)) : ARTICLES;

      if (attese.length === 0) {
        expect(text, nome).toMatch(/Ancora nessuna pubblicazione|Nessuna analisi/);
      } else {
        for (const article of attese) {
          expect(text, nome).toContain(article.title);
        }
      }
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
      // Una sola avvertenza, in chiusura: prima ne portava cinque.
      expect(occurrences(text, 'Non costituisce consulenza finanziaria')).toBe(1);
    }
  });

  it('dettaglio con slug inesistente', async () => {
    const text = textOf(await render(ArticleDetail, { slug: 'inesistente' }));
    expect(text).toContain('Analisi non trovata');
  });

  it('registro degli esiti', async () => {
    const text = textOf(await render(Outcomes));
    expect(text).toContain('Esiti');
    // Con l'archivio degli esiti vuoto la pagina non resta bianca: dice perche'
    // e' vuota e quante analisi restano da controllare.
    expect(text).toContain('Ancora da controllare');
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

/**
 * Il vincolo che tiene onesto il taglio delle avvertenze.
 *
 * Senza di esso la formula torna a moltiplicarsi da sola: basta una scheda
 * riutilizzata in una griglia, o una nuova pagina che «per sicurezza» aggiunge
 * il riquadro, e si è di nuovo a dodici ripetizioni. La regola è semplice:
 * l'avvertenza compare dove il lettore incontra un giudizio — un'analisi, uno
 * scenario, la metodologia — e mai più di una volta per schermata.
 */
describe('le avvertenze non si ripetono', () => {
  /** La formula standard, quella resa da `<app-risk-notice />`. */
  const FORMULA = 'Non costituisce consulenza finanziaria';

  it('le pagine di dati e di indice non ne portano nessuna', async () => {
    const pages: [string, Type<unknown>, Record<string, unknown>][] = [
      ['argomenti', Topics, {}],
      ['glossario', Glossary, {}],
      ['404', NotFound, {}],
      ['calendario', CalendarOverview, {}],
      ['calendario USA', CalendarArea, { area: 'usa' }],
      ['banche centrali', CentralBanks, {}],
    ];

    for (const [name, page, inputs] of pages) {
      const text = textOf(await render(page, inputs));
      expect(occurrences(text, FORMULA), name).toBe(0);
    }
  });

  it('le pagine di giudizio ne portano esattamente una', async () => {
    for (const [name, page] of [
      ['orizzonti', Outlook],
      ['metodologia', Methodology],
      ['esiti', Outcomes],
    ] as [string, Type<unknown>][]) {
      const text = textOf(await render(page));
      expect(occurrences(text, FORMULA), name).toBe(1);
    }
  });

  /**
   * La panoramica è il caso limite e vale la pena scriverlo per esteso.
   *
   * Non porta la formula standard, perché non è una pagina di lettura: porta
   * però l'indicatore operativo, che è un giudizio, e quel giudizio si chiude
   * con una frase propria — «Non è consulenza finanziaria né un segnale di
   * acquisto o vendita» — cucita nel discorso invece che in un riquadro.
   * Una avvertenza contestuale, scritta per quello che sta accanto, vale più
   * di un riquadro uguale a sé stesso ripetuto su ogni schermata; ma resta
   * una sola, e va contata.
   */
  it('la panoramica ne porta una sola, e contestuale', async () => {
    const text = textOf(await render(Home));

    expect(occurrences(text, FORMULA)).toBe(0);
    expect(occurrences(text, 'Non è consulenza finanziaria')).toBe(1);
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
