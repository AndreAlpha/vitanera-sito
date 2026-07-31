/**
 * Ricostruisce lo storico del calendario economico.
 *
 *     npm run calendario
 *
 * Scarica il calendario pubblico di TradingView per Stati Uniti e area euro,
 * ne estrae le sole serie usate dal sito e riscrive due file generati:
 *
 *   src/app/core/data/calendar.series.ts   storico di ogni indicatore
 *   src/app/core/data/calendar.events.ts   appuntamenti di banche centrali
 *
 * I testi redazionali degli indicatori NON sono toccati: vivono in
 * `calendar.meta.ts`, che si modifica a mano.
 *
 * Ogni riga dello storico riporta data e ora della diffusione, il consenso
 * degli analisti e il valore effettivo, così come erano al momento dell'uscita.
 */

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'app', 'core', 'data');
const CACHE = join(ROOT, '.calendar-cache');

/** Quante diffusioni conservare per indicatore. */
const MAX_RELEASES = 120;
/** Da quale anno partire. */
const FROM_YEAR = 2013;

/**
 * Le decisioni sui tassi anteriori al 2016 arrivano dalla fonte con un orario
 * che non tiene conto dell'ora legale europea: le riunioni estive risultano
 * un'ora più tardi di quando furono davvero annunciate. Il valore e il periodo
 * sono corretti, l'orario no — e un calendario che sbaglia l'ora è peggio di un
 * calendario più corto. Le due serie dei tassi partono quindi dal 2016, dove la
 * fonte alterna correttamente i due fusi; restano oltre ottanta riunioni per
 * ciascuna, molto più delle cinquanta richieste. Gli altri ventisette
 * indicatori non sono interessati e conservano l'intero storico.
 */
const RATE_HISTORY_FROM = '2016-01-01';

/* -------------------------------------------------------------------------- */
/* Serie da estrarre                                                           */
/* -------------------------------------------------------------------------- */

/**
 * Per ogni indicatore: i titoli TradingView che lo compongono. Più titoli
 * indicano stime successive dello stesso dato (preliminare, seconda, finale),
 * che vengono unite in un unico storico ordinato per data di diffusione.
 */
const SERIES = {
  usa: {
    'tasso-di-interesse': ['Fed Interest Rate Decision'],
    'tasso-di-disoccupazione': ['Unemployment Rate'],
    'richieste-iniziali-sussidi': ['Initial Jobless Claims'],
    nfp: ['Non Farm Payrolls'],
    ipc: ['CPI'],
    'variazione-ipc': ['Inflation Rate YoY'],
    'ipc-core': ['Core Inflation Rate YoY'],
    'variazione-ipc-core': ['Core Inflation Rate MoM'],
    pce: ['PCE Price Index YoY'],
    'pce-core-annuale': ['Core PCE Price Index YoY'],
    'pce-core-trimestrale': [
      'Core PCE Prices QoQ Adv',
      'Core PCE Prices QoQ 2nd Est',
      'Core PCE Prices QoQ 2 Est',
      'Core PCE Prices QoQ Final',
      'Core PCE Prices QoQ',
    ],
    'variazione-pce-core': ['Core PCE Price Index MoM'],
    'variazione-ipp': ['PPI MoM'],
    'variazione-ipp-core': ['Core PPI MoM'],
    'fiducia-consumatori': ['CB Consumer Confidence'],
    'produzione-industriale': ['Industrial Production YoY'],
    'variazione-produzione-industriale': ['Industrial Production MoM'],
    pil: [
      'GDP Growth Rate QoQ Adv',
      'GDP Growth Rate QoQ 2nd Est',
      'GDP Growth Rate QoQ Final',
      'GDP Growth Rate QoQ',
    ],
    'variazione-vendite-dettaglio': ['Retail Sales MoM'],
    'vendite-dettaglio-essenziali': ['Retail Sales Ex Autos MoM'],
  },
  euro: {
    'tasso-di-interesse': ['ECB Interest Rate Decision'],
    'tasso-di-disoccupazione': ['Unemployment Rate'],
    ipc: ['Inflation Rate YoY Flash', 'Inflation Rate YoY Final', 'Inflation Rate YoY'],
    'variazione-ipc': [
      'Inflation Rate MoM Flash',
      'Inflation Rate MoM Final',
      'Inflation Rate MoM',
    ],
    'ipc-core': [
      'Core Inflation Rate YoY Flash',
      'Core Inflation Rate YoY Final',
      'Core Inflation Rate YoY',
    ],
    'variazione-produzione-industriale': ['Industrial Production MoM'],
    'pil-annuale': [
      'GDP Growth Rate YoY Flash',
      'GDP Growth Rate YoY 2nd Est',
      'GDP Growth Rate YoY 3rd Est',
      'GDP Growth Rate YoY',
    ],
    'pil-trimestrale': [
      'GDP Growth Rate QoQ Flash',
      'GDP Growth Rate QoQ 2nd Est',
      'GDP Growth Rate QoQ 3rd Est',
      'GDP Growth Rate QoQ',
    ],
    'indice-vendite-dettaglio': ['Retail Sales YoY'],
  },
};

/** Cadenza di ogni indicatore: determina come si scrive il periodo. */
const CADENCE = {
  'usa/tasso-di-interesse': 'riunione',
  'usa/richieste-iniziali-sussidi': 'settimanale',
  'usa/pce-core-trimestrale': 'trimestrale',
  'usa/pil': 'trimestrale',
  'euro/tasso-di-interesse': 'riunione',
  'euro/pil-annuale': 'trimestrale',
  'euro/pil-trimestrale': 'trimestrale',
};
const cadenceOf = (area, key) => CADENCE[`${area}/${key}`] ?? 'mensile';

/**
 * Riunioni già fissate dal calendario ufficiale degli istituti.
 *
 * Il calendario economico pubblica solo poche settimane in avanti, mentre Fed e
 * BCE annunciano le riunioni con oltre un anno di anticipo: senza questo elenco
 * la voce «prossima uscita» dei tassi ufficiali resterebbe vuota.
 *
 * Orari: Fed alle 14:00 di New York, BCE alle 14:15 di Francoforte, convertiti
 * in UTC tenendo conto dell'ora legale.
 * Fonti: federalreserve.gov/monetarypolicy/fomccalendars.htm
 *        ecb.europa.eu/press/calendars/mgcgc
 */
const SCHEDULED_DECISIONS = {
  usa: [
    '2026-09-16T18:00Z',
    '2026-10-28T18:00Z',
    '2026-12-09T19:00Z',
    '2027-01-27T19:00Z',
    '2027-03-17T18:00Z',
    '2027-04-28T18:00Z',
    '2027-06-09T18:00Z',
    '2027-07-28T18:00Z',
    '2027-09-15T18:00Z',
    '2027-10-27T18:00Z',
    '2027-12-08T19:00Z',
  ],
  euro: [
    '2026-09-10T12:15Z',
    '2026-10-29T13:15Z',
    '2026-12-17T13:15Z',
    '2027-02-04T13:15Z',
    '2027-03-18T13:15Z',
    '2027-04-29T12:15Z',
    '2027-06-10T12:15Z',
    '2027-07-22T12:15Z',
    '2027-09-09T12:15Z',
    // Nel 2027 l'ora legale europea finisce il 31 ottobre: il 28 è ancora CEST.
    '2027-10-28T12:15Z',
    '2027-12-16T13:15Z',
  ],
};

/* -------------------------------------------------------------------------- */
/* Scarico                                                                     */
/* -------------------------------------------------------------------------- */

const BASE = 'https://economic-calendar.tradingview.com/events';

async function grab(country, from, to) {
  const url = `${BASE}?from=${from}T00:00:00.000Z&to=${to}T00:00:00.000Z&countries=${country}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0', Origin: 'https://www.tradingview.com' },
        signal: AbortSignal.timeout(60_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      if (json.status !== 'ok') throw new Error(`stato ${json.status}`);
      return json.result ?? [];
    } catch (err) {
      if (attempt === 3) {
        console.warn(`  ! ${country} ${from}: ${err.message}`);
        return [];
      }
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
  return [];
}

async function download(country) {
  const cached = join(CACHE, `${country}.json`);
  if (process.env.CALENDAR_CACHE === '1' && existsSync(cached)) {
    console.log(`${country}: riuso della copia in cache`);
    return JSON.parse(readFileSync(cached, 'utf8'));
  }

  const lastYear = new Date().getUTCFullYear() + 1;
  const byId = new Map();
  for (let y = FROM_YEAR; y <= lastYear; y++) {
    // L'endpoint tronca a 2000 risultati: si scarica a blocchi trimestrali.
    for (const [a, b] of [
      [`${y}-01-01`, `${y}-04-01`],
      [`${y}-04-01`, `${y}-07-01`],
      [`${y}-07-01`, `${y}-10-01`],
      [`${y}-10-01`, `${y + 1}-01-01`],
    ]) {
      for (const row of await grab(country, a, b)) byId.set(row.id, row);
    }
    process.stdout.write(`\r${country}: ${y} → ${byId.size} eventi   `);
  }
  process.stdout.write('\n');

  const all = [...byId.values()].sort((a, b) => a.date.localeCompare(b.date));
  mkdirSync(CACHE, { recursive: true });
  writeFileSync(cached, JSON.stringify(all));
  return all;
}

/* -------------------------------------------------------------------------- */
/* Trasformazione                                                              */
/* -------------------------------------------------------------------------- */

/**
 * L'istante corrente troncato al minuto, nello stesso formato delle date in
 * archivio: confrontarlo con `toISOString()` intero farebbe risultare futuro un
 * evento dello stesso minuto già trascorso.
 */
const nowKey = () => `${new Date().toISOString().slice(0, 16)}Z`;

const MONTHS = [
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre',
];

/** "2026-07-14T12:30:00.000Z" → "2026-07-14T12:30Z" */
const compactDate = (iso) => `${iso.slice(0, 16)}Z`;

/** Periodo di riferimento in italiano, secondo la cadenza dell'indicatore. */
function periodLabel(row, cadence) {
  const ref = row.referenceDate ? new Date(row.referenceDate) : null;
  if (!ref || Number.isNaN(ref.getTime())) return row.period ?? '';

  const y = ref.getUTCFullYear();
  switch (cadence) {
    case 'trimestrale':
      return `T${Math.floor(ref.getUTCMonth() / 3) + 1} ${y}`;
    case 'settimanale':
      return `settimana al ${ref.getUTCDate()} ${MONTHS[ref.getUTCMonth()]} ${y}`;
    case 'riunione':
      return `riunione del ${ref.getUTCDate()} ${MONTHS[ref.getUTCMonth()]} ${y}`;
    default:
      return `${MONTHS[ref.getUTCMonth()]} ${y}`;
  }
}

/** Stadio della stima, dedotto dal suffisso del titolo. */
function stageOf(title) {
  if (/\bFlash$/.test(title)) return 'flash';
  if (/\b(Adv|Prel)$/.test(title)) return 'prel';
  if (/\b(2nd|2) Est$/.test(title)) return 'seconda';
  if (/\b3rd Est$/.test(title)) return 'terza';
  if (/\bFinal$/.test(title)) return 'finale';
  return null;
}

const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : null);

function buildSeries(rows, area) {
  const out = {};
  for (const [key, titles] of Object.entries(SERIES[area])) {
    const cadence = cadenceOf(area, key);
    const picked = rows
      .filter((r) => titles.includes(r.title))
      .map((r) => ({
        at: compactDate(r.date),
        period: periodLabel(r, cadence),
        forecast: num(r.forecast),
        actual: num(r.actual),
        previous: num(r.previous),
        stage: stageOf(r.title),
      }))
      // Dalla diffusione più recente alla più remota.
      .sort((a, b) => b.at.localeCompare(a.at));

    // Una riga senza né consenso né valore effettivo non dice nulla: si scarta,
    // a meno che sia una diffusione futura (di cui interessa la sola data).
    const now = nowKey();
    const useful = picked
      .filter((r) => r.actual !== null || r.forecast !== null || r.at > now)
      .filter((r) => r.at >= RATE_HISTORY_FROM || cadence !== 'riunione');

    const future = useful.filter((r) => r.at > now).sort((a, b) => a.at.localeCompare(b.at));
    const past = useful.filter((r) => r.at <= now).slice(0, MAX_RELEASES);

    if (past.length < 50) {
      console.warn(`  ⚠ ${area}/${key}: solo ${past.length} diffusioni storiche`);
    }

    out[key] = { past, next: future[0] ?? null, cadence };
  }

  // Le riunioni già fissate completano la voce «prossima uscita» dei tassi.
  const rate = out['tasso-di-interesse'];
  if (rate) {
    const now = nowKey();
    const known = new Set(rate.past.map((r) => r.at));
    const upcoming = SCHEDULED_DECISIONS[area].filter((at) => at > now && !known.has(at)).sort();
    if (upcoming.length && (!rate.next || upcoming[0] < rate.next.at)) {
      const d = new Date(upcoming[0]);
      rate.next = {
        at: upcoming[0],
        period: `riunione del ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
        forecast: null,
        actual: null,
        previous: rate.past[0]?.actual ?? null,
        stage: null,
      };
    }
    rate.scheduled = upcoming.slice(0, 8);
  }

  return out;
}

/* -------------------------------------------------------------------------- */
/* Appuntamenti di banca centrale                                              */
/* -------------------------------------------------------------------------- */

/** Riconosce e classifica un evento di banca centrale. */
function centralBankEvent(row, area) {
  const t = row.title;
  const prefix = area === 'usa' ? 'Fed' : 'ECB';

  if (t === `${prefix} Interest Rate Decision`) {
    return { kind: 'decisione', speaker: null, chair: false };
  }
  if (t === `${prefix} Press Conference`) {
    return { kind: 'conferenza', speaker: null, chair: false };
  }
  if (t === 'FOMC Minutes' || t === 'ECB Monetary Policy Meeting Accounts') {
    return { kind: 'verbali', speaker: null, chair: false };
  }
  if (t === 'FOMC Economic Projections' || t === 'ECB Staff Macroeconomic Projections') {
    return { kind: 'pubblicazione', speaker: null, chair: false };
  }
  if (t === 'ECB Economic Bulletin' || t === 'Fed Beige Book') {
    return { kind: 'pubblicazione', speaker: null, chair: false };
  }

  const speech = new RegExp(`^${prefix} (?:(Chair|President) )?(.+?) (Speech|Testimony)$`).exec(t);
  if (speech) {
    const [, honorific, rawName, type] = speech;
    // "Chair Nominee Kevin Warsh" e simili: si tiene il solo cognome.
    const name = rawName
      .replace(/^Nominee\s+/i, '')
      .split(/\s+/)
      .pop();
    return {
      kind: type === 'Testimony' ? 'audizione' : 'discorso',
      speaker: name,
      chair: honorific === 'Chair' || honorific === 'President',
    };
  }
  return null;
}

/** Data e ora UTC spostate di N minuti, nel formato compatto. */
function shift(at, minutes) {
  const d = new Date(at);
  d.setUTCMinutes(d.getUTCMinutes() + minutes);
  return `${d.toISOString().slice(0, 16)}Z`;
}

function buildEvents(rows, area) {
  const now = nowKey();
  const mapped = [];
  for (const row of rows) {
    const info = centralBankEvent(row, area);
    if (!info) continue;
    mapped.push({
      at: compactDate(row.date),
      area,
      kind: info.kind,
      speaker: info.speaker,
      chair: info.chair,
      title: row.title,
    });
  }

  // Le riunioni annunciate dagli istituti vanno oltre l'orizzonte di poche
  // settimane del calendario economico: senza di esse la sezione «prossimi
  // appuntamenti» si svuoterebbe appena passata la riunione in corso.
  const known = new Set(mapped.map((e) => e.at));
  const bank = area === 'usa' ? 'Fed' : 'ECB';
  for (const at of SCHEDULED_DECISIONS[area]) {
    if (at <= now || known.has(at)) continue;
    mapped.push({
      at,
      area,
      kind: 'decisione',
      speaker: null,
      chair: false,
      title: `${bank} Interest Rate Decision`,
    });
    mapped.push({
      at: shift(at, 30),
      area,
      kind: 'conferenza',
      speaker: null,
      chair: true,
      title: `${bank} Press Conference`,
    });
  }

  const future = mapped.filter((e) => e.at > now).sort((a, b) => a.at.localeCompare(b.at));
  // Un po' di passato recente dà contesto a un calendario che guarda avanti.
  const past = mapped
    .filter((e) => e.at <= now)
    .sort((a, b) => b.at.localeCompare(a.at))
    .slice(0, 24);

  return { future, past };
}

/* -------------------------------------------------------------------------- */
/* Scrittura                                                                   */
/* -------------------------------------------------------------------------- */

const j = (v) => (v === null || v === undefined ? 'null' : JSON.stringify(v));

function seriesFile(series, generatedAt) {
  const lines = [];
  lines.push('/* eslint-disable */');
  lines.push('/**');
  lines.push(' * FILE GENERATO — non modificare a mano.');
  lines.push(' * Rigenerare con `npm run calendario`.');
  lines.push(' *');
  lines.push(' * Ogni riga è una diffusione:');
  lines.push(' *   [data e ora UTC, periodo, previsto, effettivo, precedente, stadio?]');
  lines.push(' *');
  lines.push(' * Fonte: calendario economico pubblico di TradingView, che aggrega i');
  lines.push(' * comunicati degli istituti di statistica e il consenso degli analisti.');
  lines.push(' */');
  lines.push("import { Cadence, Release, Stage } from '../models/calendar.model';");
  lines.push('');
  lines.push(`export const CALENDAR_GENERATED_AT = ${j(generatedAt)};`);
  lines.push('');
  lines.push('type Row = readonly [');
  lines.push('  at: string,');
  lines.push('  period: string,');
  lines.push('  forecast: number | null,');
  lines.push('  actual: number | null,');
  lines.push('  previous: number | null,');
  lines.push('  stage?: Stage,');
  lines.push('];');
  lines.push('');
  lines.push('export interface SeriesData {');
  lines.push('  readonly cadence: Cadence;');
  lines.push('  readonly releases: readonly Release[];');
  lines.push('  readonly next: Release | null;');
  lines.push('  /** Riunioni già fissate dal calendario ufficiale dell’istituto. */');
  lines.push('  readonly scheduled?: readonly string[];');
  lines.push('}');
  lines.push('');
  lines.push('const r = (rows: readonly Row[]): readonly Release[] =>');
  lines.push('  rows.map(([at, period, forecast, actual, previous, stage]) => ({');
  lines.push('    at,');
  lines.push('    period,');
  lines.push('    forecast,');
  lines.push('    actual,');
  lines.push('    previous,');
  lines.push('    ...(stage ? { stage } : {}),');
  lines.push('  }));');
  lines.push('');
  lines.push('export const SERIES: Readonly<Record<string, SeriesData>> = {');

  for (const [area, byKey] of Object.entries(series)) {
    for (const [key, data] of Object.entries(byKey)) {
      const rows = data.past
        .map(
          (x) =>
            `    [${j(x.at)}, ${j(x.period)}, ${j(x.forecast)}, ${j(x.actual)}, ${j(x.previous)}${
              x.stage ? `, ${j(x.stage)}` : ''
            }],`,
        )
        .join('\n');
      const next = data.next
        ? `{ at: ${j(data.next.at)}, period: ${j(data.next.period)}, forecast: ${j(
            data.next.forecast,
          )}, actual: null, previous: ${j(data.next.previous)}${
            data.next.stage ? `, stage: ${j(data.next.stage)}` : ''
          } }`
        : 'null';
      lines.push(`  ${j(`${area}/${key}`)}: {`);
      lines.push(`    cadence: ${j(data.cadence)},`);
      lines.push(`    releases: r([\n${rows}\n    ]),`);
      lines.push(`    next: ${next},`);
      if (data.scheduled?.length) {
        lines.push(`    scheduled: [${data.scheduled.map(j).join(', ')}],`);
      }
      lines.push('  },');
    }
  }

  lines.push('};');
  lines.push('');
  return lines.join('\n');
}

function eventsFile(events, generatedAt) {
  const rows = [];
  for (const area of ['usa', 'euro']) {
    for (const list of [events[area].future, events[area].past]) {
      for (const e of list) {
        rows.push(
          `  [${j(e.at)}, ${j(e.area)}, ${j(e.kind)}, ${j(e.speaker)}, ${e.chair}, ${j(e.title)}],`,
        );
      }
    }
  }

  return `/* eslint-disable */
/**
 * FILE GENERATO — non modificare a mano.
 * Rigenerare con \`npm run calendario\`.
 *
 * Appuntamenti di Federal Reserve e BCE: decisioni, conferenze stampa, verbali,
 * discorsi e audizioni. Ogni riga è
 *   [data e ora UTC, area, tipo, cognome, è il presidente, titolo originale]
 *
 * Il cognome viene risolto in nome e ruolo da \`ROSTER\` in \`calendar.meta.ts\`.
 */
import { CalendarArea, CentralBankKind } from '../models/calendar.model';

export const EVENTS_GENERATED_AT = ${j(generatedAt)};

export type EventRow = readonly [
  at: string,
  area: CalendarArea,
  kind: CentralBankKind,
  speaker: string | null,
  chair: boolean,
  sourceTitle: string,
];

export const EVENT_ROWS: readonly EventRow[] = [
${rows.join('\n')}
];
`;
}

/* -------------------------------------------------------------------------- */

const generatedAt = new Date().toISOString().slice(0, 16) + 'Z';

const raw = { usa: await download('US'), euro: await download('EU') };

console.log('\nSerie:');
const series = { usa: buildSeries(raw.usa, 'usa'), euro: buildSeries(raw.euro, 'euro') };

const events = { usa: buildEvents(raw.usa, 'usa'), euro: buildEvents(raw.euro, 'euro') };

writeFileSync(join(DATA, 'calendar.series.ts'), seriesFile(series, generatedAt));
writeFileSync(join(DATA, 'calendar.events.ts'), eventsFile(events, generatedAt));

let total = 0;
for (const byKey of Object.values(series)) {
  for (const d of Object.values(byKey)) total += d.past.length;
}
console.log(
  `\nScritte ${total} diffusioni su ${Object.values(series).reduce((n, x) => n + Object.keys(x).length, 0)} indicatori.`,
);
console.log(
  `Appuntamenti banche centrali: ${events.usa.future.length + events.euro.future.length} futuri, ` +
    `${events.usa.past.length + events.euro.past.length} recenti.`,
);
