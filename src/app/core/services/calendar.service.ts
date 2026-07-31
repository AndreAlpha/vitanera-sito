import { Injectable, computed } from '@angular/core';
import {
  CALENDAR_GENERATED_AT,
  CALENDAR_SECTIONS,
  CENTRAL_BANK_EVENTS,
  INDICATORS,
  areaName,
  areaPath,
  indicatorBySlug,
  sectionBySlug,
} from '../data/calendar.data';
import {
  CalendarArea,
  CentralBankEvent,
  Indicator,
  Release,
  Stage,
  SurpriseMeaning,
} from '../models/calendar.model';
import { Tone } from '../models/article.model';

/**
 * Lettura del calendario economico.
 *
 * Tutte le date sono conservate in UTC e mostrate nel fuso di Roma: un
 * calendario deve indicare lo stesso orario a chiunque lo consulti, altrimenti
 * due lettori in fusi diversi leggerebbero due appuntamenti differenti.
 */

const ZONE = 'Europe/Rome';

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

const WEEKDAYS = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];

/** Parti di una data già convertite nel fuso di Roma. */
interface Parts {
  readonly year: number;
  readonly month: number;
  readonly day: number;
  readonly hour: number;
  readonly minute: number;
  readonly weekday: number;
}

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'short',
  hour12: false,
});

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export function romeParts(iso: string): Parts {
  const found: Record<string, string> = {};
  for (const part of formatter.formatToParts(new Date(iso))) {
    found[part.type] = part.value;
  }
  return {
    year: Number(found['year']),
    month: Number(found['month']) - 1,
    day: Number(found['day']),
    // A mezzanotte alcune piattaforme restituiscono 24 invece di 0.
    hour: Number(found['hour']) % 24,
    minute: Number(found['minute']),
    weekday: WEEKDAY_INDEX[found['weekday']] ?? 0,
  };
}

/** "14 luglio 2026". */
export function calendarDate(iso: string): string {
  const p = romeParts(iso);
  return `${p.day} ${MONTHS[p.month]} ${p.year}`;
}

/** "martedì 14 luglio". */
export function calendarDayLabel(iso: string): string {
  const p = romeParts(iso);
  return `${WEEKDAYS[p.weekday]} ${p.day} ${MONTHS[p.month]}`;
}

/** "14:30". */
export function calendarTime(iso: string): string {
  const p = romeParts(iso);
  return `${`${p.hour}`.padStart(2, '0')}:${`${p.minute}`.padStart(2, '0')}`;
}

/** "14 luglio 2026 · 14:30". */
export function calendarDateTime(iso: string): string {
  return `${calendarDate(iso)} · ${calendarTime(iso)}`;
}

/** Chiave "2026-07-14" nel fuso di Roma, per raggruppare per giornata. */
export function calendarDayKey(iso: string): string {
  const p = romeParts(iso);
  return `${p.year}-${`${p.month + 1}`.padStart(2, '0')}-${`${p.day}`.padStart(2, '0')}`;
}

/* -------------------------------------------------------------------------- */
/* Numeri                                                                      */
/* -------------------------------------------------------------------------- */

const decimalFormatters = new Map<number, Intl.NumberFormat>();

function decimalFormat(decimals: number): Intl.NumberFormat {
  let f = decimalFormatters.get(decimals);
  if (!f) {
    f = new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    decimalFormatters.set(decimals, f);
  }
  return f;
}

/**
 * Valore con unità: "3,75%", "197K", "335,12 pt".
 *
 * Il segno meno è quello tipografico (−, U+2212) e non il trattino: sta alla
 * stessa altezza del più e ha la stessa larghezza delle cifre, così le colonne
 * di numeri restano allineate.
 */
export function formatValue(
  value: number | null | undefined,
  unit: string,
  decimals: number,
): string {
  if (value === null || value === undefined) {
    return '—';
  }
  const n = decimalFormat(decimals).format(value).replace('-', '−');
  return unit === '%' ? `${n}%` : unit === 'K' ? `${n}K` : `${n} ${unit}`;
}

/** Scostamento con segno esplicito: "+0,2", "−15". */
export function formatDelta(value: number, decimals: number): string {
  const n = decimalFormat(decimals).format(Math.abs(value));
  return `${value > 0 ? '+' : '−'}${n}`;
}

/* -------------------------------------------------------------------------- */
/* Sorpresa                                                                    */
/* -------------------------------------------------------------------------- */

export interface Surprise {
  /** Differenza fra valore effettivo e consenso. */
  readonly delta: number;
  /** Testo già pronto: "+0,2" oppure "in linea". */
  readonly label: string;
  /** Verso della sorpresa, per la sola resa grafica. */
  readonly tone: Tone;
  /** Lettura in parole: "sopra le attese", "sotto le attese", "in linea". */
  readonly wording: string;
}

/**
 * Confronto fra dato effettivo e consenso.
 *
 * Il colore non dice «buono» o «cattivo» in assoluto: dipende da che cosa
 * misura l'indicatore. Un dato sull'occupazione sopra le attese racconta
 * un'economia più forte; le stesse decime in più sull'inflazione o sulla
 * disoccupazione raccontano l'opposto.
 */
export function surpriseOf(
  release: Release,
  meaning: SurpriseMeaning,
  decimals: number,
): Surprise | null {
  if (release.actual === null || release.forecast === null) {
    return null;
  }

  const delta = release.actual - release.forecast;
  const step = Math.pow(10, -decimals);
  const flat = Math.abs(delta) < step / 2;

  const wording = flat
    ? 'in linea con le attese'
    : delta > 0
      ? 'sopra le attese'
      : 'sotto le attese';
  const label = flat ? 'in linea' : formatDelta(delta, decimals);

  if (flat || meaning === 'neutro') {
    return { delta, label, tone: 'neutral', wording };
  }

  const above = delta > 0;
  const tone: Tone =
    meaning === 'crescita'
      ? above
        ? 'bull'
        : 'bear'
      : meaning === 'debolezza'
        ? above
          ? 'bear'
          : 'bull'
        : // inflazione: sopra le attese è la lettura che tiene i tassi alti
          above
          ? 'warn'
          : 'bull';

  return { delta, label, tone, wording };
}

export const STAGE_LABEL: Record<Stage, string> = {
  prel: 'Preliminare',
  flash: 'Stima rapida',
  seconda: 'Seconda stima',
  terza: 'Terza stima',
  finale: 'Definitivo',
};

/* -------------------------------------------------------------------------- */
/* Servizio                                                                    */
/* -------------------------------------------------------------------------- */

/** Una diffusione attesa, con l'indicatore a cui appartiene. */
export interface UpcomingRelease {
  readonly indicator: Indicator;
  readonly release: Release;
}

@Injectable({ providedIn: 'root' })
export class CalendarService {
  readonly sections = CALENDAR_SECTIONS;
  readonly indicators = INDICATORS;
  readonly events = CENTRAL_BANK_EVENTS;
  readonly generatedAt = CALENDAR_GENERATED_AT;

  /** Quante diffusioni sono conservate in tutto. */
  readonly releaseCount = computed(() => INDICATORS.reduce((n, i) => n + i.releases.length, 0));

  bySlug(slug: string): Indicator | null {
    return indicatorBySlug(slug);
  }

  sectionBySlug(slug: string) {
    return sectionBySlug(slug);
  }

  areaPath(area: CalendarArea): string {
    return areaPath(area);
  }

  areaName(area: CalendarArea): string {
    return areaName(area);
  }

  byArea(area: CalendarArea): readonly Indicator[] {
    return INDICATORS.filter((i) => i.area === area);
  }

  /** Ultima diffusione con un valore effettivo. */
  lastPublished(indicator: Indicator): Release | null {
    return indicator.releases.find((r) => r.actual !== null) ?? null;
  }

  /**
   * La prossima diffusione, ma solo se non è ancora avvenuta.
   *
   * `next` è una fotografia scattata quando l'archivio è stato generato e resta
   * ferma fino alla rigenerazione successiva: passata quella data continuerebbe
   * ad annunciare come futuro un dato già uscito. Ogni pagina che mostra la
   * prossima uscita passa di qui, così tutte raccontano la stessa cosa.
   */
  nextOf(indicator: Indicator): Release | null {
    const next = indicator.next;
    return next && next.at > this.nowKey() ? next : null;
  }

  /**
   * Da quando è in vigore il valore corrente.
   *
   * Per un tasso ufficiale non basta la data dell'ultima riunione: quasi tutte
   * lasciano il tasso invariato. Si risale lo storico finché il valore resta lo
   * stesso e si prende la diffusione che lo ha effettivamente fissato.
   */
  inForceSince(indicator: Indicator): Release | null {
    const published = indicator.releases.filter((r) => r.actual !== null);
    const current = published[0];
    if (!current) {
      return null;
    }
    let since = current;
    for (const release of published) {
      if (release.actual !== current.actual) {
        break;
      }
      since = release;
    }
    return since;
  }

  /**
   * Diffusioni attese, dalla più vicina, eventualmente di una sola area.
   *
   * Il confronto con l'ora corrente non è ridondante: l'archivio è generato a
   * mano e resta fermo fra un aggiornamento e il successivo, quindi una data
   * scritta come «prossima» può nel frattempo essere passata. Meglio un elenco
   * vuoto che un elenco di appuntamenti già avvenuti sotto la voce «in arrivo».
   */
  upcoming(area?: CalendarArea, limit = 12): readonly UpcomingRelease[] {
    const now = this.nowKey();
    return INDICATORS.filter((i) => (area ? i.area === area : true))
      .filter((i) => i.next !== null && i.next.at > now)
      .map((indicator) => ({ indicator, release: indicator.next as Release }))
      .sort((a, b) => a.release.at.localeCompare(b.release.at))
      .slice(0, limit);
  }

  /**
   * L'istante corrente nello stesso formato delle date in archivio.
   *
   * Le date sono al minuto ("2026-08-05T20:05Z"); `toISOString()` arriva ai
   * millisecondi. Confrontarle come stringhe senza troncare farebbe risultare
   * futuro un appuntamento dello stesso minuto già trascorso, perché la 'Z'
   * viene dopo i due punti dei secondi nell'ordine dei caratteri.
   */
  private nowKey(): string {
    return `${new Date().toISOString().slice(0, 16)}Z`;
  }

  /** Appuntamenti di banca centrale ancora da venire. */
  nextEvents(area?: CalendarArea, limit = 10): readonly CentralBankEvent[] {
    const now = this.nowKey();
    return this.events.filter((e) => e.at > now && (area ? e.area === area : true)).slice(0, limit);
  }

  /** Appuntamenti già avvenuti, dal più recente. */
  recentEvents(area?: CalendarArea, limit = 8): readonly CentralBankEvent[] {
    const now = this.nowKey();
    return this.events
      .filter((e) => e.at <= now && (area ? e.area === area : true))
      .slice()
      .reverse()
      .slice(0, limit);
  }

  /** Il prossimo intervento di chi guida l'istituto, se in calendario. */
  nextChairEvent(area: CalendarArea): CentralBankEvent | null {
    const now = this.nowKey();
    const leader = area === 'usa' ? 'Presidente della Federal Reserve' : 'Presidente della BCE';
    return (
      this.events.find(
        (e) => e.at > now && e.area === area && (e.role === leader || e.kind === 'conferenza'),
      ) ?? null
    );
  }

  surprise(release: Release, indicator: Indicator): Surprise | null {
    return surpriseOf(release, indicator.surprise, indicator.decimals);
  }

  value(v: number | null | undefined, indicator: Indicator): string {
    return formatValue(v, indicator.unit, indicator.decimals);
  }

  /**
   * Serie da disegnare: le ultime `count` diffusioni con un valore effettivo,
   * in ordine cronologico. Quando lo stesso periodo è uscito in più stime si
   * tiene la più recente, altrimenti il grafico mostrerebbe due punti diversi
   * per lo stesso trimestre.
   */
  chartSeries(indicator: Indicator, count = 24): readonly Release[] {
    const seen = new Set<string>();
    const picked: Release[] = [];
    for (const release of indicator.releases) {
      if (release.actual === null || seen.has(release.period)) {
        continue;
      }
      seen.add(release.period);
      picked.push(release);
      if (picked.length === count) {
        break;
      }
    }
    return picked.reverse();
  }
}
