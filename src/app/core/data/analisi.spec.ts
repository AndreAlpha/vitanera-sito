import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { AUTHORSHIP_NOTICE } from '../config/site.config';
import { ARTICLES } from './articles.data';
import { OUTCOMES } from './outcomes.data';

/**
 * Allineamento fra l'archivio e `contenuti/analisi/`.
 *
 * I markdown sono generati da `npm run analisi` e nessuno li apre a sito acceso:
 * senza questi controlli un'analisi pubblicata senza rigenerarli non darebbe
 * alcun segnale, e la cartella si riempirebbe di copie vecchie senza che si
 * veda. Lo stesso controllo è incatenato a `npm run build`, così la verifica
 * c'è anche quando i test non vengono eseguiti.
 */

const CARTELLA = join(process.cwd(), 'contenuti', 'analisi');

/**
 * Ripete `improntaAnalisi` di `scripts/lib/render-analisi.mjs`.
 *
 * Copre l'analisi e il suo esito, perché il markdown contiene entrambi:
 * registrare un esito rende vecchio il markdown esattamente come lo renderebbe
 * vecchia una correzione di refuso.
 *
 * È duplicata e non importata perché quel file è JavaScript e sta fuori da
 * `src/`: importarlo qui vorrebbe dire allargare la compilazione dei test a
 * tutto il repository. Sono dieci righe senza dipendenze: se cambiano là,
 * cambiano anche qui, e questo test è il primo ad accorgersene.
 */
function improntaAnalisi(article: unknown, outcome: unknown): string {
  const testo = JSON.stringify([article, outcome ?? null]);
  return fnv1a(testo, 0x811c9dc5) + fnv1a(testo, 0x01000193);
}

function fnv1a(testo: string, seme: number): string {
  let h = seme >>> 0;
  for (let i = 0; i < testo.length; i++) {
    h ^= testo.charCodeAt(i) & 0xff;
    h = Math.imul(h, 0x01000193) >>> 0;
    h ^= testo.charCodeAt(i) >>> 8;
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

/** Legge il valore di una chiave del frontmatter, che è sempre fra virgolette. */
function campo(markdown: string, chiave: string): string | null {
  const riga = new RegExp(`^${chiave}: "((?:[^"\\\\]|\\\\.)*)"$`, 'm').exec(markdown);
  return riga ? riga[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\') : null;
}

describe('copie markdown delle analisi', () => {
  const presenti = readdirSync(CARTELLA).filter((f) => f.endsWith('.md'));

  it('ha un markdown per ogni analisi, e nessuno di troppo', () => {
    const attesi = ARTICLES.map((a) => `${a.slug}.md`);
    expect([...presenti].sort()).toEqual([...attesi].sort());
  });

  it('tiene i markdown allineati al testo delle analisi', () => {
    const vecchi: string[] = [];
    for (const article of ARTICLES) {
      const markdown = readFileSync(join(CARTELLA, `${article.slug}.md`), 'utf8');
      const esito = OUTCOMES.find((o) => o.slug === article.slug) ?? null;
      if (campo(markdown, 'impronta') !== improntaAnalisi(article, esito))
        vecchi.push(article.slug);
    }
    expect(vecchi, `da rigenerare con "npm run analisi": ${vecchi.join(', ')}`).toEqual([]);
  });

  it('tiene allineate le due copie della dicitura su chi pensa e chi scrive', () => {
    // Il generatore dei markdown e' JavaScript e sta fuori da src/: non puo'
    // importare la costante e ne tiene una copia. Due frasi che si somigliano
    // ma non coincidono sarebbero il peggio dei due mondi, e a occhio non si
    // distinguono: qui si confrontano carattere per carattere.
    const generatore = readFileSync(
      join(process.cwd(), 'scripts', 'lib', 'render-analisi.mjs'),
      'utf8',
    );
    const dichiarazione = /AUTHORSHIP_NOTICE\s*=\s*([\s\S]*?);/.exec(generatore);
    const copia = [...(dichiarazione?.[1] ?? '').matchAll(/'([^']*)'/g)].map((m) => m[1]).join('');
    expect(copia).toBe(AUTHORSHIP_NOTICE);
  });

  it('ripete in ogni markdown la dicitura su chi pensa e chi scrive', () => {
    // Il markdown e' la copia leggibile dell'analisi, e una copia che tace su
    // come e' stata scritta non e' una copia fedele. Il testo e' duplicato in
    // scripts/lib/render-analisi.mjs, che non puo' importare da src/: il
    // confronto con la costante autorevole sta qui.
    for (const article of ARTICLES) {
      const markdown = readFileSync(join(CARTELLA, `${article.slug}.md`), 'utf8');
      expect(markdown, article.slug).toContain(AUTHORSHIP_NOTICE);
    }
  });

  it('riporta nel frontmatter i dati che identificano l’analisi', () => {
    for (const article of ARTICLES) {
      const markdown = readFileSync(join(CARTELLA, `${article.slug}.md`), 'utf8');
      expect(campo(markdown, 'slug')).toBe(article.slug);
      expect(campo(markdown, 'titolo')).toBe(article.title);
      expect(campo(markdown, 'pubblicata')).toBe(article.publishedAt);
      expect(campo(markdown, 'sorgente')).toBe(`src/app/core/data/articles/${article.slug}.ts`);
    }
  });
});
