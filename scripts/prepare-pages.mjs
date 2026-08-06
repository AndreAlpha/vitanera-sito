/**
 * Prepara l'output di `ng build` per la pubblicazione.
 *
 * La stessa cartella viene servita da due posti — GitHub Pages di norma,
 * Cloudflare Pages quando GitHub non è raggiungibile — e ciascuno dei due legge
 * i file che gli servono ignorando gli altri. Non c'è quindi una versione «per
 * GitHub» e una «per Cloudflare»: c'è una cartella sola che va bene per
 * entrambi, ed è la ragione per cui la via d'emergenza si riduce a un comando.
 *
 * - `404.html`: copia di `index.html`. GitHub Pages restituisce questo file per
 *   ogni percorso che non corrisponde a un file statico, così gli indirizzi
 *   diretti (per esempio /analisi/uno-slug) vengono comunque gestiti dal router
 *   dell'applicazione invece di mostrare la pagina di errore di GitHub.
 * - `.nojekyll`: impedisce a Jekyll di rielaborare l'output e di scartare i
 *   file che iniziano con un trattino basso. Lo legge solo GitHub.
 * - `CNAME`: ricopiato nell'output per non perdere il dominio personalizzato.
 *   Lo legge solo GitHub.
 * - `_redirects`: lo legge solo Cloudflare, e fa una cosa che su GitHub non si
 *   può fare — restituire lo scheletro dell'applicazione con codice **200**
 *   invece che 404. Su GitHub Pages ogni indirizzo diretto risponde `404` con
 *   dentro la pagina giusta: il browser non se ne accorge, un motore di ricerca
 *   sì. Qui la riga costa niente e sul secondo host il difetto non c'è.
 */
import { copyFileSync, existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'dist', 'vitanera', 'browser');

if (!existsSync(join(out, 'index.html'))) {
  console.error(`Build non trovata in ${out}. Eseguire prima "ng build".`);
  process.exit(1);
}

copyFileSync(join(out, 'index.html'), join(out, '404.html'));
writeFileSync(join(out, '.nojekyll'), '');
writeFileSync(join(out, '_redirects'), '/*    /index.html    200\n');

const cname = join(root, 'CNAME');
if (existsSync(cname)) {
  copyFileSync(cname, join(out, 'CNAME'));
}

const files = readdirSync(out).length;
console.log(
  `Pronto per la pubblicazione: ${out} (${files} elementi; 404.html e .nojekyll per GitHub, _redirects per Cloudflare).`,
);
