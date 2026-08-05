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
  updatedAt: '2026-08-05T19:15:00+02:00',
  asset: 'XAU/USD',
  readings: [
    {
      horizon: 'breve',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Il metallo tiene sopra i 4.250 dollari dopo un più 4%, ma il canale che lo giustificava ha smesso di ' +
        'aiutare: il decennale è al 4,64%, quarta lettura consecutiva in salita nella stessa giornata, e il ' +
        'quinquennale è tornato al 4,35%. Prezzo esteso e sostegno che si gira: le due cose insieme non fanno ' +
        'una lettura rialzista piena.',
      invalidation:
        'Una perdita rapida dei 4.200 dollari accompagnata dal decennale sopra il 4,70%; prima ancora, un decennale sopra il 4,68% con l’oro ancora sopra i 4.250, che segnalerebbe il logoramento senza aspettare la rottura.',
    },
    {
      horizon: 'medio',
      direction: 'neutrale-rialzista',
      strength: 'media',
      regime:
        'Iran e Oman hanno concordato le coordinate di una rotta a Hormuz: il primo annuncio in quattro giorni ' +
        'che produce un oggetto tecnico invece di una frase, ma i quattro punti che decidono se una nave passa ' +
        'restano aperti e il conteggio dei transiti è fermo. Una riapertura toglierebbe premio inflazionistico ' +
        'al greggio e insieme domanda di rifugio all’oro: aiuta dai tassi, toglie dal rifugio.',
      invalidation:
        'Un conteggio dei transiti ancora fermo alle otto navi quarantotto ore dopo la dichiarazione congiunta, oppure un blocco americano esplicito; dall’altro lato, un rapporto occupazionale di venerdì nettamente sopra le attese di circa 80.000 posti.',
    },
    {
      horizon: 'lungo',
      direction: 'neutrale',
      strength: 'bassa',
      regime:
        'Gli acquisti delle banche centrali sostengono da sotto e la parte lunga della curva ha ora una ' +
        'variabile in meno, perché il Tesoro si è impegnato a non ingrossare le aste per diversi trimestri. ' +
        'Restano gli altri due freni: rendimenti reali alti e un rialzo Fed a settembre ancora dato al 57%.',
      invalidation:
        'Una svolta monetaria confermata dalle riunioni, oppure il ritorno stabile del decennale sopra il 5%.',
    },
  ],
  headline: 'Coordinate concordate a Hormuz, e il decennale che risale un punto alla volta',
  stance:
    'Iran e Oman hanno concordato le coordinate geografiche di una rotta attraverso lo stretto, con una ' +
    'dichiarazione congiunta in preparazione: è il sesto annuncio in quattro giorni ma il primo che produce un ' +
    'documento invece di una frase, e il greggio scende sotto gli 80 dollari anche grazie a 2,5 milioni di barili ' +
    'in più nelle scorte americane. Sull’altro fronte il decennale è salito al 4,64%, quarta lettura consecutiva ' +
    'in aumento: l’oro tiene sopra i 4.250 ma senza più il canale dei tassi a spingerlo.',
  favours: [
    'Alzare la probabilità di riapertura per via delle coordinate, ma continuare a misurarla sul conteggio dei transiti',
    'Distinguere i due effetti di una riapertura sull’oro: aiuta dai tassi, toglie dal rifugio',
  ],
  avoid: [
    'Inseguire il metallo sopra i 4.250: il canale che giustificava la corsa ha smesso di collaborare',
    'Leggere le coordinate come una riapertura: dei quattro punti che decidono se una nave passa, nessuno è risolto',
  ],
  confirming: [
    'Brent 79,34 $, di nuovo sotto gli 80',
    'Scorte USA +2,5 mln barili, aumento inatteso',
    'XAU/USD sopra i 4.250 dollari',
  ],
  contradicting: [
    'Decennale al 4,64%, quarta salita di fila',
    'Quinquennale tornato al 4,35%',
    'Transiti fermi e dichiarazione congiunta senza data',
  ],
  sources: [
    'coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso',
    'oro-sfiora-4200-ma-le-attese-sulla-fed-non-si-muovono',
    'adp-debole-e-tesoro-fermo-ma-il-decennale-non-si-muove',
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
