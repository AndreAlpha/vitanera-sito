import { CategorySlug } from './article.model';

/**
 * Modello del calendario economico.
 *
 * Ogni indicatore è una serie di diffusioni («release»): per ciascuna si
 * conservano data e ora, il valore atteso dal consenso e il valore effettivo.
 * La diffusione successiva è la prima con data futura: ha data e ora note e,
 * quando il consenso è già stato raccolto, anche il valore previsto.
 *
 * Nota: i numeri sono statistiche ufficiali già pubblicate, non quotazioni di
 * mercato. Nessun campo di questo modello va inteso come indicazione operativa.
 */

export type CalendarArea = 'usa' | 'euro';

/** Che cosa segnala una sorpresa al rialzo rispetto al consenso. */
export type SurpriseMeaning =
  /** Sopra le attese = economia più forte (PIL, NFP, vendite, fiducia). */
  | 'crescita'
  /** Sopra le attese = più inflazione (IPC, PCE, IPP). */
  | 'inflazione'
  /** Sopra le attese = economia più debole (disoccupazione, sussidi). */
  | 'debolezza'
  /** Nessuna lettura direzionale automatica (tassi ufficiali). */
  | 'neutro';

/** Periodicità dichiarata della diffusione. */
export type Cadence = 'settimanale' | 'mensile' | 'trimestrale' | 'riunione';

/** Stadio di una stima rilasciata più volte per lo stesso periodo. */
export type Stage = 'prel' | 'flash' | 'seconda' | 'terza' | 'finale';

export interface Release {
  /** Data e ora della diffusione, in ISO UTC ("2026-07-14T12:30Z"). */
  readonly at: string;
  /** Periodo di riferimento già in italiano: "giugno 2026", "T2 2026". */
  readonly period: string;
  /** Consenso degli analisti prima dell'uscita; `null` se non rilevato. */
  readonly forecast: number | null;
  /** Valore effettivamente diffuso; `null` se il dato deve ancora uscire. */
  readonly actual: number | null;
  /** Valore della diffusione precedente, come riportato al momento dell'uscita. */
  readonly previous: number | null;
  /** Stima preliminare, seconda stima, definitiva… */
  readonly stage?: Stage;
}

/** Testi redazionali di un indicatore: scritti a mano, mai rigenerati. */
export interface IndicatorMeta {
  /** Identificativo nell'area di appartenenza ("tasso-di-interesse"). */
  readonly key: string;
  readonly area: CalendarArea;
  /** Nome esteso, come compare nel calendario. */
  readonly name: string;
  /** Nome breve per tabelle e schede. */
  readonly short: string;
  /** Simbolo dell'unità: '%', 'K', 'pt'. */
  readonly unit: string;
  /** Cifre decimali con cui mostrare il valore. */
  readonly decimals: number;
  readonly cadence: Cadence;
  readonly surprise: SurpriseMeaning;
  readonly source: string;
  readonly sourceUrl: string;
  /** Che cosa misura, in una frase. */
  readonly what: string;
  /** Perché viene guardato dai mercati. */
  readonly why: string;
  /** Categorie dell'archivio a cui l'indicatore è collegato. */
  readonly categories: readonly CategorySlug[];
}

export interface Indicator extends IndicatorMeta {
  /** Percorso completo: "usa-tasso-di-interesse". */
  readonly slug: string;
  /** Storico, dalla diffusione più recente alla più remota. */
  readonly releases: readonly Release[];
  /** Prima diffusione con data futura, se già in calendario. */
  readonly next: Release | null;
}

/** Tipo di appuntamento di banca centrale. */
export type CentralBankKind =
  'decisione' | 'conferenza' | 'verbali' | 'discorso' | 'audizione' | 'pubblicazione';

export interface CentralBankEvent {
  readonly at: string;
  readonly area: CalendarArea;
  readonly kind: CentralBankKind;
  readonly title: string;
  /** Chi parla, quando l'appuntamento è un intervento. */
  readonly speaker?: string;
  /** Ruolo ricoperto: «Presidente», «Membro del FOMC», «Comitato esecutivo». */
  readonly role?: string;
  readonly note?: string;
  /**
   * `true` quando la data è fissata dal calendario ufficiale dell'istituto e
   * non dipende dalla programmazione settimanale degli interventi.
   */
  readonly scheduled?: boolean;
  /** L'orario non è ancora confermato: si mostra la sola data. */
  readonly timeUnknown?: boolean;
}

/** Un'area del calendario con i suoi indicatori. */
export interface CalendarSection {
  readonly area: CalendarArea;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly icon: string;
  readonly bank: string;
  readonly indicators: readonly Indicator[];
}
