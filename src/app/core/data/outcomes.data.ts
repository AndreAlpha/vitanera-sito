import { Outcome } from '../models/article.model';

/**
 * Registro degli esiti: come sono andate a finire le analisi pubblicate.
 *
 * Ogni analisi dichiara prima, sotto `invalidation`, l'elenco delle condizioni
 * che la renderebbero sbagliata. Questo archivio torna a controllarle una per
 * una quando il tempo è passato, e registra che cosa è successo davvero.
 *
 * Tre regole, e sono tutte e tre importanti:
 *
 * 1. **L'analisi non si tocca mai.** L'esito vive qui, in un file separato e in
 *    sola aggiunta. Se si potesse ritoccare l'analisi dopo aver visto come è
 *    andata, questo registro misurerebbe la memoria di chi lo compila e non le
 *    sue previsioni.
 * 2. **Il verdetto si ricava dalle condizioni, non dall'impressione.** Prima si
 *    ricontrolla ogni voce di `invalidation` con il numero che si è visto, poi
 *    si scrive il verdetto. Nell'ordine inverso si finisce sempre per giudicare
 *    «sostanzialmente giusta» qualunque lettura di cui si conosce già l'esito.
 * 3. **Anche il silenzio è un esito.** Un'analisi che nessuno ha ricontrollato
 *    in tempo utile si registra come `senza-verifica`. Ometterla farebbe di
 *    questo archivio una raccolta delle analisi che faceva comodo controllare.
 *
 * L'archivio si popola **in avanti**, un'analisi alla volta, prima di ogni nuova
 * pubblicazione. Non è stato riempito a posteriori con le ventidue analisi
 * precedenti di proposito: inventare esiti per analisi di cui si conosce già la
 * fine sarebbe esattamente l'errore che l'archivio esiste per impedire.
 */
export const OUTCOMES: readonly Outcome[] = [
  {
    slug: 'trump-dichiara-una-trattativa-durata-tutto-il-giorno',
    checkedAt: '2026-08-05T13:25:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition: 'Una nuova smentita netta da parte iraniana.',
        triggered: false,
        evidence:
          'Nessuna smentita nuova: Teheran continua a contestare parte della ricostruzione americana, e la Casa Bianca descrive ancora le trattative come positive.',
      },
      {
        condition: 'Transiti fermi alle otto navi, senza risalita verso i 130-140 al giorno.',
        triggered: true,
        evidence:
          'Nessun aumento riportato nelle tre ore successive: il conteggio disponibile resta quello di otto navi.',
      },
      {
        condition: 'Il fallimento dichiarato dei colloqui.',
        triggered: false,
        evidence: 'I colloqui non sono stati dichiarati falliti da nessuna delle due parti.',
      },
      {
        condition: 'Un rimbalzo del Brent sopra gli 80-82 dollari.',
        triggered: true,
        evidence:
          'Il Brent è risalito a 80,87 dollari, circa +1,9%, dopo l’attacco rivendicato dagli Houthi contro una petroliera saudita nel Mar Rosso.',
      },
      {
        condition:
          'Un ADP molto superiore alle attese, o un aumento aggressivo delle emissioni Treasury a lunga scadenza.',
        triggered: false,
        evidence:
          'Nessuno dei due era ancora uscito alle 13:25: l’ADP è atteso alle 14:15 e il piano di rifinanziamento alle 14:30.',
      },
    ],
    what: 'Due condizioni su cinque sono scattate, e la lettura regge solo a metà. Il quadro diplomatico non si è mosso — nessuna smentita nuova, nessun fallimento dichiarato — ma il Brent è tornato sopra gli 80 dollari, a 80,87. La parte che ha ceduto è quindi quella sui prezzi, non quella sul giudizio politico.',
    lesson:
      'Il rimbalzo del greggio era stato scritto come soglia di invalidazione perché doveva segnalare il fallimento della distensione. È scattato per un motivo che non c’entrava: un attacco a una petroliera nel Mar Rosso, cioè su una rotta diversa da Hormuz. Una condizione espressa come livello di prezzo si verifica in un secondo ma non dice per quale causa si è mossa: quando serve misurare una tesi, meglio affiancarle una condizione che nomini il meccanismo.',
  },
  {
    slug: 'hormuz-non-ha-riaperto-otto-navi-contro-130-al-giorno',
    checkedAt: '2026-08-05T10:35:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'Un conteggio dei transiti che risale verso i livelli precedenti al conflitto.',
        triggered: false,
        evidence:
          'Il conteggio è fermo: due ore dopo restano otto navi contro le circa 130-140 al giorno di prima della guerra.',
      },
      {
        condition: 'Un accordo ufficiale e verificabile sulla riapertura dello stretto.',
        triggered: false,
        evidence:
          'Nessun accordo firmato: Trump dichiara una trattativa «molto positiva», ma l’Iran continua a negare un’intesa imminente.',
      },
      {
        condition:
          'Un forte rimbalzo del petrolio, che riporterebbe in alto inflazione attesa e rendimenti.',
        triggered: false,
        evidence:
          'Il greggio è sceso ancora invece di rimbalzare: Brent a 79,04 dollari da 79,6, WTI a 75,19 da 75,9.',
      },
      {
        condition: 'Il rendimento del decennale nuovamente sopra il 4,70%.',
        triggered: false,
        evidence:
          'Rendimenti e attese di rialzo Fed si sono ulteriormente ammorbiditi rispetto al 4,60-4,62% della mattina.',
      },
      {
        condition: 'Un dato ADP nettamente superiore alle attese.',
        triggered: false,
        evidence:
          'L’ADP esce alle 14:15 di oggi: non era ancora pubblicato al momento del controllo.',
      },
    ],
    what: 'Nessuna delle cinque condizioni è scattata. Il vincolo su cui poggiava la lettura — otto navi contro 130-140 al giorno — non si è mosso di una unità in due ore, mentre sul fronte delle dichiarazioni la distensione ha fatto un altro passo avanti: è esattamente l’asimmetria che l’analisi descriveva. Il greggio ha continuato a scendere e i rendimenti ad allentarsi, quindi anche il canale dei tassi ha retto.',
  },
  {
    slug: 'iran-chiede-il-controllo-sugli-ingressi-a-hormuz',
    checkedAt: '2026-08-05T09:20:00+02:00',
    verdict: 'parziale',
    conditions: [
      {
        condition: 'Un accordo ufficiale e verificabile sulla riapertura dello stretto.',
        triggered: false,
        evidence:
          'Nessun accordo definitivo a quindici ore di distanza: Teheran continua a contestare la ricostruzione americana dei colloqui.',
      },
      {
        condition: 'Una ripresa stabile dei transiti.',
        triggered: false,
        evidence:
          'Al contrario: il conteggio pubblicato la mattina dopo indica otto navi contro le 130-140 al giorno di prima del conflitto.',
      },
      {
        condition: 'Un petrolio che resta sotto gli 80 dollari senza rimbalzare.',
        triggered: true,
        evidence:
          'Il Brent è sceso ancora invece di rimbalzare: da 79,8 dollari a 78,85-79, con il WTI intorno a 75.',
      },
    ],
    what: 'Sulla diplomazia l’analisi ha visto giusto: nessun accordo, nessuna ripresa dei transiti, e il conteggio delle otto navi ha poi quantificato quanto la riapertura fosse lontana. Ha sbagliato però la conseguenza che ne traeva sul prezzo. La tesi era che un ribasso del greggio costruito su un’intesa non chiusa fosse fragile e vulnerabile a un rimbalzo; in due sedute il rimbalzo non è arrivato e il Brent è sceso ancora, dai 79,8 dollari della pubblicazione a 78,85-79.',
    lesson:
      'Un prezzo che sconta un’aspettativa non confermata non è per questo prossimo a correggere: può continuare a scontarla a lungo. Il vincolo dice dove finirà il fiume, non quando — e su un orizzonte breve la seconda domanda è quella che conta.',
  },
  {
    slug: 'oro-estende-il-rialzo-il-canale-e-quello-dei-tassi',
    checkedAt: '2026-08-05T08:30:00+02:00',
    verdict: 'confermata',
    conditions: [
      {
        condition: 'XAU/USD sotto i 4.070 dollari.',
        triggered: false,
        evidence:
          'Nessun ritorno sotto quel livello: dai 4.092 dollari della pubblicazione il metallo è salito fino a circa 4.127.',
      },
      {
        condition: 'Il rendimento del decennale nuovamente sopra il 4,70%.',
        triggered: false,
        evidence: 'Il decennale è sceso ancora, dal 4,66% verso il 4,62%.',
      },
      {
        condition: 'Un forte rimbalzo del petrolio.',
        triggered: false,
        evidence:
          'Il greggio si è stabilizzato senza rimbalzare: Brent intorno a 79,6 dollari da 80,47, WTI vicino a 75,9 da 76,67.',
      },
      {
        condition: 'Dati ADP o payroll nettamente superiori alle attese.',
        triggered: false,
        evidence: 'Nessuno dei due era ancora stato pubblicato al momento del controllo.',
      },
    ],
    what: 'Le quattro condizioni hanno retto tutte. La catena descritta — greggio giù, rendimenti giù, oro su — ha continuato a funzionare per un’altra sessione: l’oro ha superato i 4.100 dollari che l’analisi indicava come test immediato, il decennale è arretrato di altri quattro punti base e il dollaro è rimasto debole. La probabilità di un rialzo Fed a settembre è scesa verso il 57-59%.',
  },
];
