import { ARTICLES } from './articles.data';
import { MARKET_SIGNAL } from './signal.data';
import { CATEGORIES, CATEGORY_FAMILIES } from '../config/site.config';
import { CALENDAR_SECTIONS, CENTRAL_BANK_EVENTS, INDICATORS } from './calendar.data';

/**
 * Controlli di integrità sui dati.
 *
 * Servono a intercettare gli errori che non rompono la compilazione ma si
 * vedono solo a sito acceso: una data nel futuro fa apparire l'indicatore come
 * scaduto, una categoria citata ma inesistente lascia una scheda senza nome.
 */
describe('archivio delle analisi', () => {
  it('non ha slug duplicati', () => {
    const slugs = ARTICLES.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('non ha date di pubblicazione nel futuro', () => {
    const now = Date.now();
    for (const article of ARTICLES) {
      const t = Date.parse(article.publishedAt);
      expect(Number.isNaN(t)).toBe(false);
      expect(t).toBeLessThanOrEqual(now);
    }
  });

  it('cita categorie che esistono davvero', () => {
    const known = new Set(CATEGORIES.map((c) => c.slug));
    for (const article of ARTICLES) {
      expect(article.categories.length).toBeGreaterThan(0);
      for (const slug of article.categories) {
        expect(known.has(slug)).toBe(true);
      }
    }
  });

  it('non ripete le ancore all’interno dello stesso articolo', () => {
    for (const article of ARTICLES) {
      const anchors = article.blocks
        .filter((b) => b.kind === 'heading')
        .map((b) => b.anchor)
        .filter((a): a is string => !!a);
      expect(new Set(anchors).size).toBe(anchors.length);
    }
  });
});

describe('categorie', () => {
  it('non ha slug duplicati', () => {
    const slugs = CATEGORIES.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('assegna ogni categoria a una famiglia dichiarata', () => {
    const families = new Set(CATEGORY_FAMILIES.map((f) => f.slug));
    for (const category of CATEGORIES) {
      expect(families.has(category.family)).toBe(true);
    }
  });

  it('non lascia alcuna famiglia vuota', () => {
    for (const family of CATEGORY_FAMILIES) {
      expect(CATEGORIES.some((c) => c.family === family.slug)).toBe(true);
    }
  });
});

describe('indicatore operativo', () => {
  it('quando è presente non è aggiornato a una data futura', () => {
    // È l'errore che lo fa apparire "in attesa di notizie" appena pubblicato.
    if (MARKET_SIGNAL) {
      expect(Date.parse(MARKET_SIGNAL.updatedAt)).toBeLessThanOrEqual(Date.now());
    }
  });

  it('quando è presente cita analisi che esistono davvero', () => {
    for (const slug of MARKET_SIGNAL?.sources ?? []) {
      expect(ARTICLES.some((a) => a.slug === slug)).toBe(true);
    }
  });

  it('quando è presente è allineato all’ultima analisi pubblicata', () => {
    if (!MARKET_SIGNAL || ARTICLES.length === 0) {
      return;
    }
    const ultima = [...ARTICLES].sort(
      (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    )[0];
    expect(MARKET_SIGNAL.updatedAt).toBe(ultima.publishedAt);
  });

  it('quando è presente dichiara una validità utilizzabile', () => {
    if (!MARKET_SIGNAL) {
      return;
    }
    expect(MARKET_SIGNAL.validityMinutes).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.favours.length).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.avoid.length).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.invalidation.length).toBeGreaterThan(10);
  });
});

describe('calendario economico', () => {
  it('ha le due aree richieste, con i loro indicatori', () => {
    expect(CALENDAR_SECTIONS.map((s) => s.area)).toEqual(['usa', 'euro']);
    expect(CALENDAR_SECTIONS[0].indicators.length).toBe(20);
    expect(CALENDAR_SECTIONS[1].indicators.length).toBe(9);
  });

  it('non ha slug duplicati', () => {
    const slugs = INDICATORS.map((i) => i.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('conserva almeno cinquanta diffusioni per indicatore', () => {
    for (const indicator of INDICATORS) {
      expect(indicator.releases.length).toBeGreaterThanOrEqual(50);
    }
  });

  it('riporta lo storico dalla diffusione più recente alla più remota', () => {
    for (const indicator of INDICATORS) {
      for (let i = 1; i < indicator.releases.length; i++) {
        expect(
          indicator.releases[i - 1].at.localeCompare(indicator.releases[i].at),
        ).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('ha un valore effettivo nella grande maggioranza delle diffusioni passate', () => {
    for (const indicator of INDICATORS) {
      const withActual = indicator.releases.filter((r) => r.actual !== null).length;
      expect(withActual / indicator.releases.length).toBeGreaterThan(0.9);
    }
  });

  it('rileva il consenso per la maggior parte delle diffusioni', () => {
    // Non tutte le serie hanno un consenso: la produzione industriale annuale
    // americana, per esempio, non viene stimata dagli analisti. Il controllo
    // riguarda quindi l'insieme, non ogni singolo indicatore.
    const total = INDICATORS.reduce((n, i) => n + i.releases.length, 0);
    const withForecast = INDICATORS.reduce(
      (n, i) => n + i.releases.filter((r) => r.forecast !== null).length,
      0,
    );
    expect(withForecast / total).toBeGreaterThan(0.8);
  });

  it('colloca la prossima uscita nel futuro', () => {
    const now = new Date().toISOString();
    for (const indicator of INDICATORS) {
      if (indicator.next) {
        expect(indicator.next.at > now).toBe(true);
        expect(indicator.next.actual).toBeNull();
      }
    }
  });

  it('fissa la prossima riunione di entrambe le banche centrali', () => {
    for (const area of ['usa', 'euro'] as const) {
      const rate = INDICATORS.find((i) => i.area === area && i.key === 'tasso-di-interesse');
      expect(rate?.next).not.toBeNull();
    }
  });

  it('cita categorie che esistono davvero', () => {
    const known = new Set(CATEGORIES.map((c) => c.slug));
    for (const indicator of INDICATORS) {
      expect(indicator.categories.length).toBeGreaterThan(0);
      for (const slug of indicator.categories) {
        expect(known.has(slug)).toBe(true);
      }
    }
  });
});

describe('appuntamenti di banca centrale', () => {
  it('è ordinato per data', () => {
    for (let i = 1; i < CENTRAL_BANK_EVENTS.length; i++) {
      expect(
        CENTRAL_BANK_EVENTS[i].at.localeCompare(CENTRAL_BANK_EVENTS[i - 1].at),
      ).toBeGreaterThanOrEqual(0);
    }
  });

  it('ha appuntamenti futuri per entrambe le banche centrali', () => {
    const now = new Date().toISOString();
    for (const area of ['usa', 'euro'] as const) {
      expect(CENTRAL_BANK_EVENTS.some((e) => e.area === area && e.at > now)).toBe(true);
    }
  });

  it('dà un titolo in italiano a ogni appuntamento', () => {
    for (const event of CENTRAL_BANK_EVENTS) {
      expect(event.title.length).toBeGreaterThan(3);
      expect(event.title).not.toMatch(/Speech|Testimony|Interest Rate Decision/);
    }
  });
});
