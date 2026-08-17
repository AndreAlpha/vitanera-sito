import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ilSaltoNonCEStato: Article = {
  slug: 'il-salto-non-c-e-stato-e-l-oro-sale-sui-tassi',
  categories: ['correlazioni', 'petrolio', 'oro', 'usa'],
  title: 'Il salto non c’è stato, e l’oro sale sui tassi invece che sul rischio',
  kicker: 'Correlazioni · La prima seduta dopo il fine settimana',
  dek:
    'Sette fatti geopolitici in tre giorni, e la prima quotazione liquida è stata un’apertura tre dollari ' +
    'e mezzo sotto la chiusura di venerdì. Il rialzo è arrivato dopo, con il Brent che si avvicina ai 90 ' +
    'dollari: ma i rendimenti e il dollaro scendono, e la combinazione sorvegliata da quattro giorni non ' +
    'si è formata.',
  publishedAt: '2026-08-17T09:20:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['Hormuz', 'Bab el-Mandeb', 'Canale monetario', 'Riapertura', 'Verbali FOMC'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui prezzi, che sono rilevazioni di una sessione aperta e non stime: l’apertura dell’oro, i due ' +
    'livelli del Brent, le due scadenze del Treasury e il Dollar Index. Bassa sul conteggio dei transiti, ' +
    'per la ragione che questo archivio dichiara da dieci giorni — è una cifra giornaliera di un fornitore ' +
    'privato, e alcune navi navigano con il transponder spento, quindi «zero registrate» non è zero ' +
    'passaggi. Media sulla tenuta del movimento: la seduta europea è appena cominciata, i 4.400 non sono ' +
    'stati presi e il Brent è a un dollaro dalla soglia che rovescerebbe la lettura.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    horizon: 'breve',
    regime:
      'La direzione resta dov’era e la forza sale, e la ragione è che per la prima volta in una settimana ' +
      'la catena causale non è dedotta ma osservata. Il greggio è salito fino a 89,40 dollari e i ' +
      'rendimenti sono scesi lo stesso — decennale a 4,684%, biennale a 4,156% — con il dollaro a 99,52 e ' +
      'la probabilità di un rialzo a settembre attorno al 30%. È l’opposto della combinazione sorvegliata ' +
      'da quattro giorni, in cui petrolio, rendimenti e dollaro salgono insieme contro il metallo. Non sale ' +
      'a rialzista perché il test dichiarato non è ancora superato: i 4.400 non sono stati presi e il Brent ' +
      'è a un dollaro dai 90.',
  },
  takeaways: [
    'Nessuna nave commerciale registrata nei dati Kpler in transito attraverso lo Stretto di Hormuz domenica 16 agosto, contro cinque sabato e trentuno nel fine settimana precedente, e oltre 130 al giorno prima del conflitto. Reuters collega il rallentamento agli attacchi contro tre navi ADNOC e allo stallo dei colloqui fra Stati Uniti e Iran.',
    'Anche la seconda arteria si assottiglia: quarantanove transiti di navi commodity nel Bab el-Mandeb nel fine settimana contro cinquantacinque del precedente, e nessuna spedizione petrolifera saudita tracciata attraverso lo stretto.',
    'Il fatto che conta per chi legge un prezzo è però un altro: alla riapertura non c’è stato alcun salto. L’oro spot ha aperto intorno a 4.373 dollari, cioè sotto i 4.376,59 della chiusura di venerdì, con i futures di settembre fra 4.379 e 4.381.',
    'Il rialzo è arrivato dopo e da un’altra parte: XAU/USD sale dello 0,4% a circa 4.391,07 con il Dollar Index a 99,52, il biennale a 4,156% in calo di due punti base e il decennale a 4,684% in calo di uno. La probabilità di un rialzo della Fed a settembre è attorno al 30%, contro circa il 47% di un mese fa.',
    'Il Brent è salito fino a 89,40 dollari con circa più 1% e tratta intorno a 89,20, il WTI a 82,83: petrolio in rialzo e rendimenti in calo nella stessa seduta, cioè le due gambe della combinazione temuta si sono separate.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Transiti nello Stretto di Hormuz e nel Bab el-Mandeb nel fine settimana; rialzo del Brent legato allo stallo dei negoziati e all’azzeramento dei passaggi',
      at: '17 agosto 2026',
    },
    {
      outlet: 'Kpler',
      title: 'Conteggio dei transiti: cinque navi sabato, nessuna registrata domenica',
    },
    {
      outlet: 'CME FedWatch',
      title:
        'Probabilità di un rialzo alla riunione di settembre attorno al 30%, ricavata dai futures sui Fed Fund',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Per tre giorni questo archivio ha contato fatti geopolitici a mercati chiusi — sette, su quattro ' +
        'fronti — e ha ripetuto a ogni pubblicazione che il rischio era aumentato. La prima quotazione ' +
        'liquida è arrivata stanotte, e ha risposto in un modo che vale più di tutti e sette: l’oro ha ' +
        'aperto tre dollari e mezzo sotto la chiusura di venerdì. Nessun salto. Poi è salito, e la parte ' +
        'importante è da dove è venuto il rialzo.',
    },
    {
      kind: 'heading',
      text: 'La fotografia della riapertura',
      anchor: 'la-fotografia',
    },
    {
      kind: 'stats',
      title: 'Lunedì 17 agosto, sessione asiatica e prima ora europea',
      caption:
        'Rilevazioni di una sessione in corso, non chiusure: la seduta europea è appena cominciata. I conteggi dei transiti sono cifre giornaliere di un fornitore privato.',
      items: [
        {
          label: 'Transiti Hormuz, domenica',
          value: 'zero registrati',
          tone: 'bear',
          note: 'Contro cinque sabato e trentuno nel fine settimana precedente; oltre 130 al giorno prima del conflitto. Alcune navi possono transitare con il transponder spento',
        },
        {
          label: 'Bab el-Mandeb',
          value: '49 transiti',
          tone: 'bear',
          note: 'Contro cinquantacinque del fine settimana precedente, e nessuna spedizione petrolifera saudita tracciata attraverso lo stretto',
        },
        {
          label: 'XAU/USD, apertura',
          value: '≈ 4.373 $',
          tone: 'bear',
          note: 'Sotto i 4.376,59 della chiusura di venerdì: nessun salto, con i futures di settembre fra 4.379 e 4.381',
        },
        {
          label: 'XAU/USD, ora',
          value: '≈ 4.391,07 $',
          tone: 'bull',
          note: 'Più 0,4%, con i futures di dicembre a 4.448,10: ancora sotto i 4.396,88 del massimo di venerdì e sotto i 4.400',
        },
        {
          label: 'Brent',
          value: 'fino a 89,40 $',
          tone: 'warn',
          note: 'Circa più 1%, ora intorno a 89,20, con il WTI a 82,83: un dollaro sotto la soglia dichiarata dei 90',
        },
        {
          label: 'Treasury 2 e 10 anni',
          value: '4,156% e 4,684%',
          tone: 'bull',
          note: 'Meno due punti base e meno uno: il decennale è sotto il 4,695% della chiusura di venerdì, e il Dollar Index è a 99,52',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'La combinazione sorvegliata da quattro giorni non si è formata',
      text:
        'Dal 14 agosto questo archivio ha dichiarato, in cinque letture consecutive, quale configurazione ' +
        'avrebbe portato la direzione sotto il neutrale: un Brent sopra i 90 dollari accompagnato da un ' +
        'decennale sopra il 4,695%, con il dollaro in rialzo. Stamattina il greggio è salito fino a 89,40 e ' +
        'i rendimenti sono scesi: decennale a 4,684%, biennale a 4,156%, Dollar Index a 99,52. Le due gambe ' +
        'si sono separate, e questa separazione è l’informazione più preziosa della seduta — non perché sia ' +
        'favorevole, ma perché era la condizione che l’archivio aveva scritto per essere smentito, e la ' +
        'risposta è arrivata dal lato in cui la lettura aveva ragione. Il petrolio che sale senza tirarsi ' +
        'dietro i rendimenti è la configurazione in cui il premio geopolitico lavora per il metallo invece ' +
        'che contro.',
    },
    {
      kind: 'heading',
      text: 'Da dove viene allora il rialzo',
      anchor: 'da-dove-viene',
    },
    {
      kind: 'paragraph',
      text:
        'Dal canale monetario, e i numeri lo dicono senza bisogno di interpretazione. Il biennale — la ' +
        'scadenza su cui le attese sulla banca centrale si misurano per prima — è scivolato di due punti ' +
        'base al 4,156%. Il decennale ha perso un punto base al 4,684%, cioè è tornato sotto la chiusura di ' +
        'venerdì. Il dollaro è a 99,52, vicino ai minimi del mese. E la probabilità di un rialzo a ' +
        'settembre è attorno al 30%, contro circa il 47% di un mese fa. L’oro sale perché il rendimento ' +
        'alternativo che deve battere è scivolato, non perché una nave non è passata.',
    },
    {
      kind: 'paragraph',
      text:
        'La distinzione non è accademica, ed è la ragione per cui questa analisi esiste. Tre giorni di ' +
        'letture a mercati chiusi hanno accumulato un premio geopolitico nella descrizione, e all’apertura ' +
        'quel premio valeva meno di zero: il metallo è partito sotto la chiusura di venerdì. Quando il ' +
        'movimento è arrivato, è arrivato accompagnato dai due numeri che appartengono al canale americano. ' +
        'Contare le escalation non dice niente su quale via le porterà nel prezzo, e stamattina la via è ' +
        'stata un’altra.',
    },
    {
      kind: 'heading',
      text: 'I transiti, e il limite che resta',
      anchor: 'i-transiti',
    },
    {
      kind: 'paragraph',
      text:
        'Sul fatto di sfondo non c’è ambiguità di direzione: trentuno transiti nel fine settimana ' +
        'precedente, cinque sabato, nessuno registrato domenica. Questa volta la forma del dato è quella ' +
        'che questo archivio ha detto di considerare affidabile — una discesa su più giorni, non il numero ' +
        'di un giorno solo — e per questo pesa più delle due navi del 7 agosto che avevano imposto una ' +
        'correzione. Resta però il limite della misura, e il testo lo dichiara da sé: alcune navi possono ' +
        'transitare con il transponder spento, quindi «zero registrate» non è matematicamente zero ' +
        'passaggi. Quello che regge senza riserve è il confronto con le oltre 130 al giorno di prima del ' +
        'conflitto.',
    },
    {
      kind: 'paragraph',
      text:
        'Accanto si assottiglia la seconda arteria: quarantanove transiti di navi commodity nel Bab ' +
        'el-Mandeb contro cinquantacinque del fine settimana precedente, e nessuna spedizione petrolifera ' +
        'saudita tracciata. Il secondo numero conta più del primo, perché è quello che riguarda il greggio ' +
        'e perché quella rotta è il modo con cui il petrolio attraversa la penisola ed evita lo Stretto: i ' +
        'due colli di bottiglia sono in serie, come questo archivio ha dovuto correggersi per riconoscere ' +
        'all’inizio di agosto.',
    },
    {
      kind: 'note',
      text:
        'Un appuntamento di oggi va classificato per non essere frainteso: il Board della Federal Reserve ' +
        'tiene una riunione chiusa per la revisione dei tassi di sconto delle Reserve Banks. È una ' +
        'procedura regolare e non è una decisione del FOMC sui Fed Fund, quindi non entra in questa ' +
        'lettura come segnale di politica monetaria finché non arriva una comunicazione sostanziale. I ' +
        'livelli citati servono a rendere verificabile il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'balance',
      title: 'Come si presenta la seduta',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Petrolio in rialzo e rendimenti in calo nella stessa seduta: la combinazione temuta si è separata, ed era la condizione dichiarata per essere smentiti.',
          'Il canale monetario spinge da tre lati insieme — biennale a 4,156%, decennale a 4,684%, dollaro a 99,52 — e la probabilità di un rialzo a settembre è attorno al 30% contro il 47% di un mese fa.',
          'Il fatto di sfondo peggiora in una forma affidabile: non un conteggio giornaliero isolato ma una discesa su tre rilevazioni, da trentuno a cinque a zero.',
          'La seconda arteria si assottiglia senza spedizioni saudite tracciate, quindi la via che evita lo Stretto non sta assorbendo il traffico dirottato.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il premio geopolitico accumulato in tre giorni di analisi non esisteva all’apertura: il metallo è partito sotto la chiusura di venerdì, e questo va contato come misura della desensibilizzazione.',
          'Il test dichiarato non è superato: i 4.396,88 del massimo di venerdì e i 4.400 sono ancora sopra il prezzo, e la seduta europea è appena cominciata.',
          'Il Brent è a un dollaro dai 90: se li rompe e questa volta si tira dietro il decennale, la lettura si rovescia nel giro di poche ore.',
          'Il conteggio dei transiti resta una cifra di un fornitore privato con il limite del transponder, quindi il fatto di sfondo non ha la solidità dei prezzi che lo accompagnano.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'La direzione resta neutrale con inclinazione rialzista, la forza sale da bassa a media. Il ' +
        'passaggio di grado non nasce dal prezzo ma dalla qualità della prova: per una settimana la catena ' +
        'causale è stata dedotta a mercati chiusi, e stamattina è osservabile — il greggio sale, i ' +
        'rendimenti scendono, il metallo si muove con i secondi e non con il primo. La direzione non sale ' +
        'perché i due numeri che deciderebbero sono entrambi a distanza di una manciata di dollari: i ' +
        '4.400 sull’oro e i 90 sul Brent.',
    },
    {
      kind: 'paragraph',
      text:
        'Il test da qui è dichiarabile senza ambiguità. Se il metallo tiene sopra i 4.400 con il decennale ' +
        'fermo sotto il 4,695%, torna in gioco la fascia 4.435-4.450 e la forza andrà alzata ancora. Se ' +
        'invece il Brent rompe i 90 e questa volta porta con sé il decennale verso il 4,70% e il dollaro in ' +
        'salita, allora la separazione osservata stamattina era temporanea e la lettura torna ambigua. La ' +
        'differenza fra i due esiti non sta nel petrolio, che in entrambi i casi sale: sta in che cosa fa ' +
        'la curva mentre sale.',
    },
  ],
  invalidation: [
    'Un oro che chiude lunedì sotto i 4.376,59 dollari della chiusura di venerdì: annullerebbe per intero il recupero della mattina e direbbe che il rialzo era una reazione di apertura e non una riprezzatura, riportando la forza a bassa.',
    'Un Brent che chiude sopra i 90 dollari con il decennale che torna sopra il 4,695%: è la combinazione che questa lettura dichiara non formata, e la sua formazione porterebbe la direzione sotto il neutrale.',
    'Un decennale che torna sopra il 4,701% del massimo di venerdì entro mercoledì 19 agosto: toglierebbe la gamba monetaria su cui l’intero rialzo poggia, e senza quella il premio geopolitico da solo non ha mai mosso il metallo in questa fase.',
    'Una probabilità di rialzo a settembre che risale sopra il 35% dopo i verbali del FOMC di mercoledì 19 agosto: direbbe che la riprezzatura su cui l’oro sta salendo era incompleta, e la forza andrebbe riportata a bassa.',
    'Un ritorno di spedizioni petrolifere saudite tracciate attraverso il Bab el-Mandeb entro venerdì 21 agosto: direbbe che l’assottigliamento della seconda arteria era un effetto di fine settimana e non una restrizione, e la parte logistica di questa lettura si indebolirebbe.',
  ],
  nextEvent: {
    when: 'Mercoledì 19 agosto',
    title: 'Verbali della riunione del FOMC del 28-29 luglio',
    detail:
      'È l’appuntamento che mette alla prova la gamba su cui l’oro sta salendo stamattina. La ' +
      'probabilità di un rialzo a settembre è attorno al 30% contro il 47% di un mese fa, e i verbali ' +
      'dicono con quali argomenti quella riunione è arrivata alla pausa — compresi i tre dissensi per un ' +
      'rialzo di venticinque punti base che questo archivio ha dovuto correggere il 12 agosto. Un tono più ' +
      'restrittivo del previsto riporterebbe il numero verso l’alto e toglierebbe al metallo l’unico ' +
      'canale che oggi lo sta spingendo.',
  },
};
