/**
 * Pianifica i giri automatici a partire dal calendario economico.
 *
 *     npm run pianifica              ricalcola e riscrive i task di Windows
 *     npm run pianifica -- --secco   stampa la pianificazione e non tocca nulla
 *
 * Il calendario sa già quando escono i dati: `next.at` di ogni indicatore e le
 * righe di `calendar.events.ts` per Fed e BCE. Da lì nascono gli appuntamenti
 * una-tantum, che valgono per i prossimi sette giorni e vengono riscritti da
 * capo a ogni esecuzione — è un task giornaliero a rilanciare questo script.
 *
 * L'archivio è TypeScript e questo script è JavaScript: per leggerlo si passa
 * da esbuild, come fa `build-analisi-md.mjs`.
 */
import { spawnSync } from 'node:child_process';
import { build } from 'esbuild';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const sorgente = join(root, 'src/app/core/data/calendar.data.ts');
const cartella = join(root, '.giri');
const destinazione = join(cartella, 'pianificazione.json');
const secco = process.argv.includes('--secco');

/* -------------------------------------------------------------------------- */
/* Che cosa merita un giro                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Gli indicatori che muovono davvero XAU/USD. Gli altri — produzione
 * industriale, vendite al dettaglio dell'area euro, PIL annuale — escono lo
 * stesso e vengono raccolti dal giro di sorveglianza successivo, senza
 * meritarsi una sessione tutta loro.
 *
 * Per aggiungerne uno basta la chiave `<area>/<key>` di `calendar.meta.ts`.
 */
const INDICATORI_CHE_SVEGLIANO = new Set([
  'usa/tasso-di-interesse',
  'usa/nfp',
  'usa/tasso-di-disoccupazione',
  'usa/richieste-iniziali-sussidi',
  'usa/variazione-ipc',
  'usa/ipc-core',
  'usa/variazione-ipc-core',
  'usa/pce-core-annuale',
  'usa/variazione-pce-core',
  'usa/variazione-ipp',
  'usa/pil',
  'usa/variazione-vendite-dettaglio',
  'usa/fiducia-consumatori',
  'euro/tasso-di-interesse',
  'euro/variazione-ipc',
  'euro/ipc',
  'euro/ipc-core',
]);

/**
 * Quanto aspettare dopo l'uscita, in minuti. Un dato si legge subito; una
 * conferenza stampa dura tre quarti d'ora e prima della fine non si sa che
 * cosa abbia detto il presidente.
 */
const ATTESA = { dato: 15, decisione: 20, conferenza: 60, verbali: 25, pubblicazione: 30 };

/** Gli appuntamenti di banca centrale che valgono un giro. */
const APPUNTAMENTI_CHE_SVEGLIANO = new Set(['decisione', 'conferenza', 'verbali', 'pubblicazione']);

/** Quanti giorni avanti guardare. Il task giornaliero ripiana ogni mattina. */
const GIORNI_AVANTI = 7;

/** Due giri a meno di questi minuti l'uno dall'altro: si tiene il primo. */
const DISTANZA_MINIMA = 25;

const FERIALI = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

/**
 * I giri fissi. I minuti non sono tondi di proposito: un'ora esatta è dove
 * finiscono tutti i lavori pianificati del mondo, e non c'è ragione di stare lì.
 */
const RICORRENTI = [
  {
    nome: 'giro-sorveglianza',
    tipo: 'sorveglianza',
    ore: ['07:37', '09:37', '11:37', '13:37', '15:37', '17:37', '19:37', '21:37'],
    giorni: FERIALI,
    descrizione: 'Sorveglianza delle notizie, ogni due ore in orario di mercato',
  },
  {
    nome: 'giro-completo',
    tipo: 'completo',
    ore: ['23:17'],
    giorni: FERIALI,
    descrizione: 'Giro completo di sera: calendario, esiti, indicatore, notizie',
  },
  {
    nome: 'giro-domenicale',
    tipo: 'completo',
    ore: ['18:17'],
    giorni: ['Sunday'],
    descrizione: "Giro completo prima dell'apertura asiatica",
  },
  {
    nome: 'pianifica',
    tipo: 'pianifica',
    ore: ['05:23'],
    giorni: ['*'],
    descrizione: 'Ricalcola gli appuntamenti dal calendario economico',
  },
];

/* -------------------------------------------------------------------------- */
/* Lettura del calendario                                                      */
/* -------------------------------------------------------------------------- */

/** Compila il calendario in un modulo importabile e ne restituisce il contenuto. */
async function leggiCalendario() {
  const lavoro = mkdtempSync(join(tmpdir(), 'vitanera-giri-'));
  try {
    const pacchetto = join(lavoro, 'calendario.mjs');
    await build({
      entryPoints: [sorgente],
      outfile: pacchetto,
      bundle: true,
      format: 'esm',
      platform: 'node',
      logLevel: 'silent',
    });
    const modulo = await import(pathToFileURL(pacchetto).href);
    return {
      indicatori: modulo.INDICATORS ?? [],
      appuntamenti: modulo.CENTRAL_BANK_EVENTS ?? [],
      generatoIl: modulo.CALENDAR_GENERATED_AT ?? null,
    };
  } finally {
    rmSync(lavoro, { recursive: true, force: true });
  }
}

/* -------------------------------------------------------------------------- */
/* Calcolo dei momenti                                                         */
/* -------------------------------------------------------------------------- */

const piu = (iso, minuti) => new Date(new Date(iso).getTime() + minuti * 60_000);

/** Toglie gli apici: il nome passa da riga di comando a PowerShell. */
const pulisci = (testo) => testo.replace(/["'`]/g, '').replace(/\s+/g, ' ').trim();

const { indicatori, appuntamenti, generatoIl } = await leggiCalendario();

const adesso = new Date();
const limite = new Date(adesso.getTime() + GIORNI_AVANTI * 86_400_000);

const momenti = [];

for (const indicatore of indicatori) {
  const chiave = `${indicatore.area}/${indicatore.key}`;
  if (!INDICATORI_CHE_SVEGLIANO.has(chiave) || !indicatore.next?.at) continue;
  momenti.push({
    quando: piu(indicatore.next.at, ATTESA.dato),
    tipo: 'dato',
    dettaglio: pulisci(`${indicatore.name} (${indicatore.area === 'usa' ? 'USA' : 'area euro'})`),
    uscita: indicatore.next.at,
  });
}

for (const evento of appuntamenti) {
  if (!APPUNTAMENTI_CHE_SVEGLIANO.has(evento.kind)) continue;
  momenti.push({
    quando: piu(evento.at, ATTESA[evento.kind] ?? ATTESA.dato),
    tipo: 'dato',
    dettaglio: pulisci(evento.title),
    uscita: evento.at,
  });
}

// Solo quelli che devono ancora arrivare, in ordine, senza pestarsi i piedi.
const futuri = momenti
  .filter((m) => m.quando > adesso && m.quando < limite)
  .sort((a, b) => a.quando - b.quando);

const scelti = [];
for (const momento of futuri) {
  const precedente = scelti.at(-1);
  if (precedente && momento.quando - precedente.quando < DISTANZA_MINIMA * 60_000) {
    precedente.dettaglio = `${precedente.dettaglio}; ${momento.dettaglio}`;
    continue;
  }
  scelti.push(momento);
}

const pianificazione = {
  generatoIl: adesso.toISOString(),
  calendarioGeneratoIl: generatoIl,
  repo: root,
  ricorrenti: RICORRENTI,
  appuntamenti: scelti.map((m, i) => ({
    nome: `giro-dato-${String(i + 1).padStart(2, '0')}`,
    at: m.quando.toISOString(),
    tipo: m.tipo,
    dettaglio: m.dettaglio,
    uscita: m.uscita,
  })),
};

/* -------------------------------------------------------------------------- */
/* Scrittura e registrazione                                                   */
/* -------------------------------------------------------------------------- */

const locale = (iso) =>
  new Date(iso).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' });

console.log(`Calendario generato il ${generatoIl ?? 'ignoto'}.`);
console.log(
  `${pianificazione.appuntamenti.length} appuntamenti nei prossimi ${GIORNI_AVANTI} giorni:`,
);
for (const a of pianificazione.appuntamenti) {
  console.log(`  ${locale(a.at)}  ${a.dettaglio}`);
}
if (!pianificazione.appuntamenti.length) {
  console.log('  (nessuno: il calendario potrebbe essere vecchio, lo rinfresca `npm run calendario`)');
}

if (secco) {
  console.log('\n--secco: nessun task registrato.');
  process.exit(0);
}

mkdirSync(cartella, { recursive: true });
writeFileSync(destinazione, `${JSON.stringify(pianificazione, null, 2)}\n`, 'utf8');

const registra = spawnSync(
  'pwsh',
  ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', join(root, 'scripts/registra-task.ps1')],
  { stdio: 'inherit', shell: false },
);

if (registra.error || registra.status !== 0) {
  console.error(
    `\n! I task non sono stati registrati (${registra.error?.message ?? `codice ${registra.status}`}).`,
  );
  console.error("  La pianificazione è comunque scritta in .giri/pianificazione.json.");
  process.exit(1);
}
