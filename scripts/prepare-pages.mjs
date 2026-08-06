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
 * - `_redirects`: lo legge solo Cloudflare, e dichiara che ogni percorso non
 *   corrispondente va servito con lo scheletro dell'applicazione e codice 200.
 *
 * ## I due host vogliono due cose opposte, e `404.html` è quella che le divide
 *
 * Su GitHub Pages `404.html` è **l'unico** modo di far funzionare un indirizzo
 * diretto: senza, `/analisi/uno-slug` mostra la pagina di errore di GitHub.
 *
 * Su Cloudflare Pages è esattamente il contrario. La documentazione lo dice
 * senza mezzi termini: «if your project does not include a top-level 404.html
 * file, Pages assumes that you are deploying a single-page application». Cioè
 * la presenza di quel file **disattiva** il comportamento da applicazione a
 * pagina singola, e vince anche sulla regola `/* /index.html 200` di
 * `_redirects` — verificato sul campo: con `404.html` nella cartella, ogni
 * percorso risponde `404`.
 *
 * Da qui il flag `--cloudflare`: si esegue una seconda volta **dopo** la build,
 * subito prima del caricamento con wrangler, e toglie `404.html` dalla cartella.
 * Non è un caso particolare da ricordare a mano — lo fa `npm run pubblica-ora`.
 * Alla build successiva il file torna, perché lo riscrive il passaggio normale.
 */
import { copyFileSync, existsSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'dist', 'vitanera', 'browser');
const perCloudflare = process.argv.includes('--cloudflare');

if (!existsSync(join(out, 'index.html'))) {
  console.error(`Build non trovata in ${out}. Eseguire prima "ng build".`);
  process.exit(1);
}

if (perCloudflare) {
  rmSync(join(out, '404.html'), { force: true });
  const files = readdirSync(out).length;
  console.log(
    `Pronto per Cloudflare Pages: ${out} (${files} elementi, 404.html rimosso per attivare la modalita a pagina singola).`,
  );
  process.exit(0);
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
