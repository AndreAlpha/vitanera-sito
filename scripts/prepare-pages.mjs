/**
 * Prepara l'output di `ng build` per la pubblicazione su GitHub Pages.
 *
 * - `404.html`: copia di `index.html`. GitHub Pages restituisce questo file per
 *   ogni percorso che non corrisponde a un file statico, così gli indirizzi
 *   diretti (per esempio /analisi/uno-slug) vengono comunque gestiti dal router
 *   dell'applicazione invece di mostrare la pagina di errore di GitHub.
 * - `.nojekyll`: impedisce a Jekyll di rielaborare l'output e di scartare i
 *   file che iniziano con un trattino basso.
 * - `CNAME`: ricopiato nell'output per non perdere il dominio personalizzato.
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

const cname = join(root, 'CNAME');
if (existsSync(cname)) {
  copyFileSync(cname, join(out, 'CNAME'));
}

const files = readdirSync(out).length;
console.log(`Pronto per GitHub Pages: ${out} (${files} elementi, 404.html e .nojekyll inclusi).`);
