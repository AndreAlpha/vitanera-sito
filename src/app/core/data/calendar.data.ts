import {
  CalendarArea,
  CalendarSection,
  CentralBankEvent,
  Indicator,
} from '../models/calendar.model';
import { AREAS, INDICATOR_META, ROSTER } from './calendar.meta';
import { CALENDAR_GENERATED_AT, SERIES } from './calendar.series';
import { EVENT_ROWS } from './calendar.events';

/**
 * Unisce i testi redazionali degli indicatori (`calendar.meta.ts`) allo storico
 * dei valori (`calendar.series.ts`, generato) e agli appuntamenti di banca
 * centrale (`calendar.events.ts`, generato).
 *
 * È il solo punto da cui il resto del sito legge il calendario economico.
 */

export { CALENDAR_GENERATED_AT };

/* -------------------------------------------------------------------------- */
/* Indicatori                                                                  */
/* -------------------------------------------------------------------------- */

export const INDICATORS: readonly Indicator[] = INDICATOR_META.map((meta) => {
  const data = SERIES[`${meta.area}/${meta.key}`];
  if (!data) {
    // Un indicatore descritto ma senza serie è un errore di configurazione:
    // meglio una scheda vuota e visibile che una pagina che non compila.
    return { ...meta, slug: `${meta.area}-${meta.key}`, releases: [], next: null };
  }
  return {
    ...meta,
    slug: `${meta.area}-${meta.key}`,
    cadence: data.cadence,
    releases: data.releases,
    next: data.next,
  };
});

/* -------------------------------------------------------------------------- */
/* Aree                                                                        */
/* -------------------------------------------------------------------------- */

export const CALENDAR_SECTIONS: readonly CalendarSection[] = AREAS.map((area) => ({
  area: area.area,
  name: area.name,
  tagline: area.tagline,
  description: area.description,
  icon: area.icon,
  bank: area.bank,
  indicators: INDICATORS.filter((i) => i.area === area.area),
}));

/* -------------------------------------------------------------------------- */
/* Appuntamenti di banca centrale                                              */
/* -------------------------------------------------------------------------- */

const KIND_LABEL: Record<CentralBankEvent['kind'], string> = {
  decisione: 'Decisione sui tassi',
  conferenza: 'Conferenza stampa',
  verbali: 'Verbali della riunione',
  discorso: 'Discorso',
  audizione: 'Audizione parlamentare',
  pubblicazione: 'Pubblicazione',
};

/** Titolo in italiano di un appuntamento, a partire dalla riga generata. */
function titleFor(
  kind: CentralBankEvent['kind'],
  area: CalendarArea,
  speaker: string | null,
  chair: boolean,
  sourceTitle: string,
): string {
  const bank = area === 'usa' ? 'Federal Reserve' : 'BCE';

  if (!speaker) {
    switch (kind) {
      case 'decisione':
        return `${bank}: decisione sui tassi`;
      case 'conferenza':
        return `${bank}: conferenza stampa`;
      case 'verbali':
        return area === 'usa'
          ? 'Verbali della riunione del FOMC'
          : 'Resoconto della riunione di politica monetaria BCE';
      case 'pubblicazione':
        return sourceTitle === 'Fed Beige Book'
          ? 'Beige Book della Federal Reserve'
          : sourceTitle === 'ECB Economic Bulletin'
            ? 'Bollettino economico della BCE'
            : sourceTitle === 'FOMC Economic Projections'
              ? 'Proiezioni economiche del FOMC'
              : 'Proiezioni macroeconomiche degli esperti BCE';
      default:
        return sourceTitle;
    }
  }

  const person = ROSTER[speaker];
  const who = person ? person.name : speaker;
  const prefix = kind === 'audizione' ? 'Audizione di' : 'Discorso di';
  return `${prefix} ${who}${chair && !person ? ` (${bank})` : ''}`;
}

export const CENTRAL_BANK_EVENTS: readonly CentralBankEvent[] = EVENT_ROWS.map(
  ([at, area, kind, speaker, chair, sourceTitle]) => {
    const person = speaker ? ROSTER[speaker] : undefined;
    return {
      at,
      area,
      kind,
      title: titleFor(kind, area, speaker, chair, sourceTitle),
      ...(person ? { speaker: person.name, role: person.role } : {}),
      ...(speaker && !person ? { speaker, role: area === 'usa' ? 'Federal Reserve' : 'BCE' } : {}),
      ...(kind === 'decisione' || kind === 'conferenza' ? { scheduled: true } : {}),
      note: KIND_LABEL[kind],
    };
  },
).sort((a, b) => a.at.localeCompare(b.at));

/* -------------------------------------------------------------------------- */
/* Ricerche                                                                    */
/* -------------------------------------------------------------------------- */

export function indicatorBySlug(slug: string): Indicator | null {
  return INDICATORS.find((i) => i.slug === slug) ?? null;
}

export function sectionBySlug(slug: string): CalendarSection | null {
  const area = AREAS.find((a) => a.slug === slug);
  return area ? (CALENDAR_SECTIONS.find((s) => s.area === area.area) ?? null) : null;
}

/** Percorso dell'area così come compare nell'indirizzo: "usa", "euro-zona". */
export function areaPath(area: CalendarArea): string {
  return AREAS.find((a) => a.area === area)?.slug ?? area;
}

export function areaName(area: CalendarArea): string {
  return AREAS.find((a) => a.area === area)?.name ?? area;
}
