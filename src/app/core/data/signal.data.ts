import { BiasDirection, Horizon, Level } from '../models/article.model';

/**
 * Una delle tre letture della panoramica.
 *
 * Sono tre perché l'oro può salire nelle prossime ore e restare debole nel mese,
 * e una lettura sola costringe a scegliere quale delle due dire. Separandole,
 * una lettura intraday che si ribalta tre volte in un giorno non cancella più la
 * lettura di fondo, e chi legge vede subito su quale arco di tempo sta guardando.
 */
export interface SignalReading {
  readonly horizon: Horizon;
  readonly direction: BiasDirection;
  readonly strength: Level;
  /** Una riga sul perché: il meccanismo, non il prezzo. */
  readonly regime: string;
  /** Che cosa farebbe decadere questa lettura. Più di 10 caratteri. */
  readonly invalidation: string;
}

/**
 * Indicatore operativo sull'oro mostrato in panoramica.
 *
 * Sintetizza le ultime pubblicazioni in tre letture, una per orizzonte. Va
 * aggiornato a mano ogni volta che viene pubblicata una nuova analisi.
 *
 * **Non scade.** C'era una durata dichiarata, `validityMinutes`, dopo la quale
 * la panoramica passava da sola a «in attesa di notizie». È stata tolta: era
 * precisione finta. Nessuno sa davvero se una lettura vale novanta minuti o
 * duecento, e un indicatore che si dichiara valido fino alle 21:35 sta
 * promettendo qualcosa che non può mantenere. Al suo posto c'è la data e l'ora
 * dell'ultimo aggiornamento, scritta grande: quanto sia vecchia, e se quello che
 * dice regga ancora, lo decide chi legge — che è l'unico ad avere davanti il
 * mercato di adesso.
 *
 * Resta un riepilogo editoriale di quanto scritto negli articoli: non è
 * consulenza finanziaria né un segnale di acquisto o vendita.
 */
export interface OperationalSignal {
  /**
   * Identico come stringa al `publishedAt` dell'analisi più recente: è quel
   * momento che l'indicatore fotografa, non il momento in cui qualcuno lo ha
   * ricopiato.
   */
  readonly updatedAt: string;
  /**
   * Quando le conferme e le contraddizioni sono state ricontrollate l'ultima
   * volta, se è successo dopo la pubblicazione dell'analisi.
   *
   * Serve perché `updatedAt` fa due mestieri e ne può fare uno solo: dice **quale
   * analisi** l'indicatore riassume, ed è vincolato a coincidere con il suo
   * `publishedAt`. Quando il quadro viene riverificato senza pubblicare nulla —
   * il prezzo si è mosso nella direzione già descritta, nessun fatto nuovo — quel
   * campo non si può muovere, e senza questo la panoramica direbbe di essere
   * ferma a ore prima mentre i numeri accanto sono di adesso.
   *
   * Si omette quando coincide con `updatedAt`: una riga in più che ripete la
   * stessa ora è rumore.
   */
  readonly checkedAt?: string;
  readonly asset: string;
  /** Le tre letture, in ordine di orizzonte crescente. */
  readonly readings: readonly SignalReading[];
  readonly headline: string;
  readonly stance: string;
  readonly favours: readonly string[];
  readonly avoid: readonly string[];
  readonly confirming: readonly string[];
  readonly contradicting: readonly string[];
  /** Slug delle analisi da cui deriva la lettura. */
  readonly sources: readonly string[];
}

/**
 * `null` quando non esiste alcuna lettura in corso: è lo stato in cui si trova
 * il sito finché non viene pubblicata la prima analisi. La panoramica mostra in
 * quel caso il riquadro «in attesa di notizie» al posto dell'indicatore.
 */
export const MARKET_SIGNAL: OperationalSignal | null = {
  updatedAt: '2026-08-05T10:30:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Il canale dei tassi continua a sostenere il metallo, ma la distensione che abbassa il greggio gli ' +
        'toglie domanda di rifugio: la stessa notizia spinge nei due sensi, e dopo la corsa verso i 4.175 ' +
        'l’inclinazione non può essere piena.',
      invalidation:
        'Un ADP molto superiore alle attese o emissioni lunghe in forte aumento, che riporterebbero il decennale sopra il 4,70%; oppure un rimbalzo del Brent sopra gli 80-82 dollari.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'La catena greggio giù, inflazione attesa giù, rendimenti giù regge, ma il suo primo anello è un ' +
        'ribasso del petrolio che sconta una riapertura di Hormuz che nei transiti non si vede: otto navi ' +
        'contro le 130-140 al giorno di prima del conflitto.',
      invalidation:
        'Un conteggio dei transiti che risale verso i livelli precedenti al conflitto, un forte rimbalzo del petrolio, oppure dati ADP e payroll nettamente superiori alle attese.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto, ma i rendimenti reali restano alti e ' +
        'un rialzo Fed a settembre è ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, oppure il ritorno stabile del decennale sopra il 5%.',
    },
  ],
  headline: 'Il quinto annuncio di distensione, e il conteggio delle navi sempre fermo a otto',
  stance:
    'Trump dichiara una trattativa durata tutto il giorno e «molto positiva», con Hormuz che potrebbe ' +
    'riaprire presto e una minaccia militare se Teheran si ritirasse. È il quinto annuncio in tre giorni: i ' +
    'quattro precedenti hanno prodotto una smentita iraniana e nessuna nave in più, e i transiti restano ' +
    'otto contro le 130-140 al giorno di prima della guerra. Il mercato ci crede lo stesso — Brent a 79,04, ' +
    'WTI a 75,19 — e per l’oro il greggio più basso vale attraverso i tassi quello che la distensione gli ' +
    'toglie in domanda di rifugio.',
  favours: [
    'Chiedersi quante volte, in questa stessa vicenda, un annuncio simile ha prodotto qualcosa di misurabile',
    'Tenere i due canali distinti: la diplomazia muove il greggio, i rendimenti muovono l’oro',
  ],
  avoid: [
    'Scambiare la ricchezza di dettagli di una dichiarazione per una probabilità più alta che si avveri',
    'Leggere un accordo come univocamente favorevole: toglierebbe il premio geopolitico proprio sui massimi',
  ],
  confirming: [
    'Brent 79,04 $ e WTI 75,19 $, ancora in calo',
    'Rendimenti e attese di rialzo Fed meno aggressivi',
    'Dichiarazione presidenziale, non più del solo Tesoro',
  ],
  contradicting: [
    'Transiti fermi a otto navi contro 130-140 al giorno',
    'L’Iran continua a negare un’intesa imminente',
    'ADP alle 14:15 e rifinanziamento del Tesoro alle 14:30',
  ],
  sources: [
    'trump-dichiara-una-trattativa-durata-tutto-il-giorno',
    'hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno',
    'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
  ],
};

export const DIRECTION_LABEL: Record<BiasDirection, string> = {
  rialzista: 'Rialzista',
  'neutrale-rialzista': 'Neutro con inclinazione rialzista',
  neutrale: 'Neutro',
  'neutrale-ribassista': 'Neutro con inclinazione ribassista',
  ribassista: 'Ribassista',
};

export const STRENGTH_VALUE: Record<Level, number> = { bassa: 1, media: 2, alta: 3 };

/** Etichette dei tre orizzonti, con l'arco di tempo scritto per esteso. */
export const HORIZON_LABEL: Record<Horizon, string> = {
  breve: 'Intraday',
  medio: 'Medio termine',
  lungo: 'Lungo termine',
};

export const HORIZON_SPAN: Record<Horizon, string> = {
  breve: 'prossimi minuti o ore',
  medio: 'prossimi giorni',
  lungo: 'prossime settimane o mesi',
};
