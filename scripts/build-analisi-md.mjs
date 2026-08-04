/**
 * Rigenera `contenuti/analisi/`: un markdown per analisi, con lo stesso nome
 * dello slug e quindi dello `src/app/core/data/articles/<slug>.ts` da cui viene.
 *
 *     npm run analisi           riscrive i markdown
 *     npm run analisi -- --check   non scrive niente, fallisce se sono vecchi
 *
 * La forma con `--check` è incatenata a `npm run build`, quindi un markdown
 * dimenticato ferma la pubblicazione invece di finire online disallineato.
 *
 * L'archivio è TypeScript e questo script è JavaScript: per leggerlo si passa da
 * esbuild, che è già nel progetto perché lo usa la build di Angular. Il pacchetto
 * risultante finisce in una cartella temporanea di sistema e non nel repository.
 */
import { build } from 'esbuild';
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { renderAnalisi } from './lib/render-analisi.mjs';

const root = resolve(import.meta.dirname, '..');
const sorgente = join(root, 'src/app/core/data/articles.data.ts');
const destinazione = join(root, 'contenuti/analisi');
const soloControllo = process.argv.includes('--check');

/** Compila l'archivio in un modulo importabile e ne restituisce gli articoli. */
async function leggiArchivio() {
  const lavoro = mkdtempSync(join(tmpdir(), 'vitanera-analisi-'));
  try {
    const pacchetto = join(lavoro, 'archivio.mjs');
    await build({
      entryPoints: [sorgente],
      outfile: pacchetto,
      bundle: true,
      format: 'esm',
      platform: 'node',
      logLevel: 'silent',
    });
    const modulo = await import(pathToFileURL(pacchetto).href);
    return modulo.ARTICLES;
  } finally {
    rmSync(lavoro, { recursive: true, force: true });
  }
}

const articoli = await leggiArchivio();
if (!articoli?.length) {
  console.error(`Nessuna analisi trovata in ${sorgente}: controllare l'archivio.`);
  process.exit(1);
}

mkdirSync(destinazione, { recursive: true });

const attesi = new Map(articoli.map((a) => [`${a.slug}.md`, renderAnalisi(a)]));
const presenti = new Set(readdirSync(destinazione).filter((f) => f.endsWith('.md')));

const nuovi = [];
const cambiati = [];
const invariati = [];
for (const [nome, testo] of attesi) {
  const percorso = join(destinazione, nome);
  const vecchio = presenti.has(nome) ? readFileSync(percorso, 'utf8') : null;
  if (vecchio === testo) {
    invariati.push(nome);
    continue;
  }
  (vecchio === null ? nuovi : cambiati).push(nome);
  if (!soloControllo) writeFileSync(percorso, testo, 'utf8');
}

const orfani = [...presenti].filter((nome) => !attesi.has(nome));
if (!soloControllo) {
  for (const nome of orfani) rmSync(join(destinazione, nome));
}

if (soloControllo) {
  const problemi = [
    ...nuovi.map((n) => `  manca      ${n}`),
    ...cambiati.map((n) => `  non allineato ${n}`),
    ...orfani.map((n) => `  di troppo  ${n}`),
  ];
  if (problemi.length) {
    console.error(
      `I markdown in contenuti/analisi/ non corrispondono all'archivio:\n${problemi.join('\n')}\n` +
        `Eseguire "npm run analisi" e includere il risultato nel commit.`,
    );
    process.exit(1);
  }
  console.log(`contenuti/analisi/: ${attesi.size} markdown allineati all'archivio.`);
} else {
  const dettaglio = [
    nuovi.length ? `${nuovi.length} nuovi` : null,
    cambiati.length ? `${cambiati.length} aggiornati` : null,
    invariati.length ? `${invariati.length} invariati` : null,
    orfani.length ? `${orfani.length} rimossi` : null,
  ]
    .filter(Boolean)
    .join(', ');
  console.log(`contenuti/analisi/: ${attesi.size} markdown (${dettaglio}).`);
  for (const nome of [...nuovi, ...cambiati]) console.log(`  scritto ${nome}`);
  for (const nome of orfani) console.log(`  rimosso ${nome}`);
}
