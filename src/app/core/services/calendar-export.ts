import { DISCLAIMER_SHORT, SITE } from '../config/site.config';
import { CATEGORIES } from '../config/site.config';
import { AREAS } from '../data/calendar.meta';
import { CentralBankEvent, Indicator, Release } from '../models/calendar.model';
import {
  STAGE_LABEL,
  calendarDate,
  calendarDateTime,
  formatValue,
  surpriseOf,
} from './calendar.service';

/**
 * Esportazione del calendario economico in Markdown.
 *
 * Il file prodotto contiene tutto ciò che il sito conosce: per ogni indicatore
 * i testi descrittivi, l'ultimo valore, la prossima uscita e l'intero storico
 * delle diffusioni con data e ora, previsto, attuale, precedente e scostamento.
 *
 * È scritto per essere letto sia da una persona sia da un foglio di calcolo:
 * le tabelle sono in Markdown standard, i numeri nel formato italiano usato
 * anche a video e le date sempre nel fuso di Roma.
 *
 * Sono funzioni pure: costruiscono una stringa e non toccano il documento. Chi
 * la scarica è `ExportButton`.
 */

/** Le barre verticali romperebbero le colonne della tabella. */
const cell = (text: string): string => text.replace(/\|/g, '\\|');

const cadenceLabel = (indicator: Indicator): string => {
  switch (indicator.cadence) {
    case 'settimanale':
      return 'Settimanale';
    case 'trimestrale':
      return 'Trimestrale';
    case 'riunione':
      return 'A ogni riunione';
    default:
      return 'Mensile';
  }
};

const surpriseMeaning: Record<Indicator['surprise'], string> = {
  crescita: 'un dato sopra le attese indica un’economia più forte',
  inflazione: 'un dato sopra le attese indica più pressione sui prezzi',
  debolezza: 'un dato sopra le attese indica un’economia più debole',
  neutro: 'nessuna lettura direzionale automatica',
};

/** Ancora del titolo di un indicatore, per l'indice in testa al documento. */
const anchorOf = (indicator: Indicator): string =>
  `${indicator.area}-${indicator.key}`.replace(/[^a-z0-9-]/g, '');

function categoryNames(indicator: Indicator): string {
  return indicator.categories
    .map((slug) => CATEGORIES.find((c) => c.slug === slug)?.name ?? slug)
    .join(', ');
}

/* -------------------------------------------------------------------------- */
/* Un indicatore                                                               */
/* -------------------------------------------------------------------------- */

function releaseRow(release: Release, indicator: Indicator): string {
  const s = surpriseOf(release, indicator.surprise, indicator.decimals);
  const stage = release.stage ? ` (${STAGE_LABEL[release.stage]})` : '';
  const actual =
    release.actual !== null ? formatValue(release.actual, indicator.unit, indicator.decimals) : '—';

  return [
    calendarDateTime(release.at),
    cell(release.period + stage),
    formatValue(release.forecast, indicator.unit, indicator.decimals),
    actual,
    formatValue(release.previous, indicator.unit, indicator.decimals),
    s ? s.label : '—',
  ]
    .map((c) => ` ${c} `)
    .join('|');
}

export function indicatorMarkdown(indicator: Indicator, level = 2): string {
  const h = '#'.repeat(level);
  const out: string[] = [];

  out.push(`${h} ${indicator.name}`);
  out.push('');
  out.push('| | |');
  out.push('| --- | --- |');
  out.push(`| Area | ${AREAS.find((a) => a.area === indicator.area)?.name ?? indicator.area} |`);
  out.push(`| Fonte | ${indicator.source} — ${indicator.sourceUrl} |`);
  out.push(`| Cadenza | ${cadenceLabel(indicator)} |`);
  out.push(`| Unità | ${indicator.unit === 'pt' ? 'punti indice' : indicator.unit} |`);
  out.push(`| Diffusioni in archivio | ${indicator.releases.length} |`);
  out.push(`| Categorie | ${cell(categoryNames(indicator))} |`);
  out.push(`| Lettura dello scostamento | ${surpriseMeaning[indicator.surprise]} |`);
  out.push('');
  out.push(`**Che cosa misura.** ${indicator.what}`);
  out.push('');
  out.push(`**Perché si guarda.** ${indicator.why}`);
  out.push('');

  const last = indicator.releases.find((r) => r.actual !== null) ?? null;
  if (last) {
    const s = surpriseOf(last, indicator.surprise, indicator.decimals);
    const value = formatValue(last.actual, indicator.unit, indicator.decimals);
    const forecast = formatValue(last.forecast, indicator.unit, indicator.decimals);
    out.push(
      `**Ultimo valore diffuso.** ${value} — periodo ${last.period}, diffuso il ` +
        `${calendarDateTime(last.at)}. Atteso ${forecast}` +
        (s ? `, ${s.wording} (${s.label}).` : '.'),
    );
    out.push('');
  }

  if (indicator.next) {
    const forecast =
      indicator.next.forecast !== null
        ? formatValue(indicator.next.forecast, indicator.unit, indicator.decimals)
        : 'non ancora rilevato';
    out.push(
      `**Prossima uscita.** ${calendarDateTime(indicator.next.at)} — periodo di riferimento ` +
        `${indicator.next.period}, previsto ${forecast}.`,
    );
    out.push('');
  } else {
    out.push('**Prossima uscita.** Non ancora fissata dall’ente che diffonde il dato.');
    out.push('');
  }

  out.push(`${h}# Storico (${indicator.releases.length} diffusioni)`);
  out.push('');
  out.push('| Data e ora | Periodo | Previsto | Attuale | Precedente | Scostamento |');
  out.push('| --- | --- | ---: | ---: | ---: | ---: |');
  for (const release of indicator.releases) {
    out.push(`|${releaseRow(release, indicator)}|`);
  }
  out.push('');

  return out.join('\n');
}

/* -------------------------------------------------------------------------- */
/* Appuntamenti di banca centrale                                              */
/* -------------------------------------------------------------------------- */

function eventsMarkdown(events: readonly CentralBankEvent[], now: string): string {
  const out: string[] = [];
  const future = events.filter((e) => e.at > now);
  const past = events
    .filter((e) => e.at <= now)
    .slice()
    .reverse();

  out.push('# Banche centrali');
  out.push('');
  out.push(
    'Riunioni di politica monetaria, conferenze stampa, verbali e interventi annunciati di ' +
      'Federal Reserve e Banca centrale europea. Le riunioni sono fissate dai calendari ufficiali ' +
      'dei due istituti; i singoli interventi vengono annunciati con pochi giorni di preavviso e ' +
      'possono essere spostati o annullati.',
  );
  out.push('');

  const table = (rows: readonly CentralBankEvent[]) => {
    out.push('| Data e ora | Istituto | Tipo | Appuntamento | Ruolo |');
    out.push('| --- | --- | --- | --- | --- |');
    for (const e of rows) {
      out.push(
        `| ${calendarDateTime(e.at)} | ${e.area === 'usa' ? 'Federal Reserve' : 'BCE'} ` +
          `| ${e.note ?? ''} | ${cell(e.title)} | ${cell(e.role ?? '')} |`,
      );
    }
    out.push('');
  };

  out.push(`## Prossimi appuntamenti (${future.length})`);
  out.push('');
  if (future.length) {
    table(future);
  } else {
    out.push('Nessun appuntamento già fissato.');
    out.push('');
  }

  out.push(`## Appuntamenti recenti (${past.length})`);
  out.push('');
  if (past.length) {
    table(past);
  } else {
    out.push('Nessun appuntamento registrato.');
    out.push('');
  }

  return out.join('\n');
}

/* -------------------------------------------------------------------------- */
/* Documento                                                                   */
/* -------------------------------------------------------------------------- */

export interface ExportOptions {
  readonly indicators: readonly Indicator[];
  /** Titolo del documento. */
  readonly title: string;
  /** Appuntamenti di banca centrale da allegare; omessi se assenti. */
  readonly events?: readonly CentralBankEvent[];
  /** Data di generazione dell'archivio, per dichiarare a che punto è fermo. */
  readonly archiveGeneratedAt: string;
  /** Istante dell'esportazione, iniettato per rendere la funzione verificabile. */
  readonly now: string;
}

export function calendarMarkdown(options: ExportOptions): string {
  const { indicators, title, events, archiveGeneratedAt, now } = options;
  const releases = indicators.reduce((n, i) => n + i.releases.length, 0);
  const areas = AREAS.filter((a) => indicators.some((i) => i.area === a.area));

  const out: string[] = [];

  out.push(`# ${title}`);
  out.push('');
  out.push(`Esportato da ${SITE.name} il ${calendarDateTime(now)} (ora di Roma).`);
  out.push('');
  const conteggio = indicators.length === 1 ? '1 indicatore' : `${indicators.length} indicatori`;
  out.push(
    `**${conteggio} · ${releases.toLocaleString('it-IT')} diffusioni.** ` +
      `Archivio aggiornato al ${calendarDate(archiveGeneratedAt)}.`,
  );
  out.push('');
  out.push(
    'Per ogni indicatore sono riportati la descrizione, l’ultimo valore diffuso, la data della ' +
      'prossima uscita e lo storico completo delle diffusioni: data e ora, valore atteso dal ' +
      'consenso degli analisti, valore effettivo, valore precedente e scostamento.',
  );
  out.push('');
  out.push('> [!NOTE]');
  out.push(
    '> Il valore «previsto» è il consenso degli analisti rilevato prima dell’uscita, non una ' +
      'previsione di ' +
      SITE.name +
      '. Date e orari sono nel fuso di Roma. Le date future possono essere spostate dagli enti ' +
      'che diffondono i dati.',
  );
  out.push('');
  out.push('> [!WARNING]');
  out.push(`> ${DISCLAIMER_SHORT}`);
  out.push('');

  /* --- Indice ----------------------------------------------------------- */
  out.push('## Indice');
  out.push('');
  for (const area of areas) {
    const list = indicators.filter((i) => i.area === area.area);
    out.push(`- **${area.name}** (${list.length})`);
    for (const indicator of list) {
      out.push(`  - [${indicator.name}](#${anchorOf(indicator)})`);
    }
  }
  if (events?.length) {
    out.push('- **Banche centrali**');
  }
  out.push('');
  out.push('---');
  out.push('');

  /* --- Aree ------------------------------------------------------------- */
  for (const area of areas) {
    const list = indicators.filter((i) => i.area === area.area);
    out.push(`# ${area.name}`);
    out.push('');
    out.push(area.description);
    out.push('');
    out.push(`Banca centrale di riferimento: ${area.bank}.`);
    out.push('');

    for (const indicator of list) {
      out.push(`<a id="${anchorOf(indicator)}"></a>`);
      out.push('');
      out.push(indicatorMarkdown(indicator, 2));
      out.push('---');
      out.push('');
    }
  }

  if (events?.length) {
    out.push(eventsMarkdown(events, now));
    out.push('---');
    out.push('');
  }

  /* --- Chiusura --------------------------------------------------------- */
  out.push('## Avvertenze');
  out.push('');
  out.push(
    `${SITE.name} non è una testata giornalistica ai sensi della L. 62/2001 e non è registrata ` +
      'presso alcun tribunale. I dati riportati sono statistiche ufficiali già pubblicate dagli ' +
      'enti indicati come fonte, non quotazioni di mercato, e sono forniti a scopo informativo e ' +
      'didattico. Non costituiscono consulenza finanziaria, raccomandazione di investimento né ' +
      'ricerca in materia di investimenti.',
  );
  out.push('');
  out.push(`Fonte di ciascuna serie: indicata nella scheda del rispettivo indicatore.`);
  out.push('');

  return out.join('\n');
}

/** Nome del file: "vitanera-calendario-usa-2026-07-31.md". */
export function exportFilename(scope: string, now: string): string {
  const day = now.slice(0, 10);
  return `vitanera-calendario-${scope}-${day}.md`;
}
