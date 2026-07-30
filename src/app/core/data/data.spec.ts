import { ARTICLES } from './articles.data';
import { MARKET_SIGNAL } from './signal.data';

/**
 * Controlli di integrità sui dati editoriali.
 *
 * Servono a intercettare gli errori che non rompono la compilazione ma si
 * vedono solo a sito acceso: una data nel futuro fa apparire l'indicatore come
 * scaduto e mostra la data assoluta al posto del tempo trascorso.
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

describe('indicatore operativo', () => {
  it('non è aggiornato a una data futura', () => {
    // È l'errore che lo fa apparire "in attesa di notizie" appena pubblicato.
    expect(Date.parse(MARKET_SIGNAL.updatedAt)).toBeLessThanOrEqual(Date.now());
  });

  it('cita analisi che esistono davvero', () => {
    for (const slug of MARKET_SIGNAL.sources) {
      expect(ARTICLES.some((a) => a.slug === slug)).toBe(true);
    }
  });

  it('è allineato all’ultima analisi pubblicata', () => {
    const ultima = [...ARTICLES].sort(
      (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt),
    )[0];
    expect(MARKET_SIGNAL.updatedAt).toBe(ultima.publishedAt);
  });

  it('dichiara una validità utilizzabile', () => {
    expect(MARKET_SIGNAL.validityMinutes).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.favours.length).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.avoid.length).toBeGreaterThan(0);
    expect(MARKET_SIGNAL.invalidation.length).toBeGreaterThan(10);
  });
});
