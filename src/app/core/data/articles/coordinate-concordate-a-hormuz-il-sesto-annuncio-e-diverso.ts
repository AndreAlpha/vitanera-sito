/**
 * coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const coordinateHormuzSestoAnnuncio: Article = {
  slug: 'coordinate-concordate-a-hormuz-il-sesto-annuncio-e-diverso',
  categories: ['rotte-e-approvvigionamento', 'medio-oriente', 'petrolio', 'oro'],
  title: 'Coordinate concordate a Hormuz: il sesto annuncio è diverso',
  kicker: 'Rotte · Dalla dichiarazione al documento',
  dek:
    'Iran e Oman hanno concordato le coordinate geografiche di una rotta attraverso lo stretto, e una dichiarazione ' +
    'congiunta è in preparazione. I cinque annunci precedenti erano frasi; questo è un oggetto tecnico. Non è ancora ' +
    'il numero che questo archivio ha scelto di guardare, ma è la prima cosa che gli somiglia.',
  publishedAt: '2026-08-05T19:15:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Hormuz', 'Iran', 'Oman', 'Transiti', 'Aggiornamento bayesiano'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury'],
  horizons: ['medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'media',
    regime:
      'Una riapertura credibile di Hormuz taglia il premio inflazionistico sul greggio, e per questa via aiuta ' +
      'l’oro attraverso i tassi; ma toglie anche la domanda di rifugio che lo sostiene per via diretta. I due ' +
      'effetti tirano in senso opposto e nessuno dei due è ancora quantificabile, perché il conteggio dei transiti ' +
      'non si è mosso.',
    horizon: 'medio',
  },
  certainty: 'media',
  certaintyNote:
    'Media, e non alta come nelle ultime tre analisi. I prezzi citati sono osservati e lo scarico di scorte è un ' +
    'dato pubblicato, ma il fatto centrale — le coordinate concordate — è annunciato dal ministero degli Esteri ' +
    'iraniano e da nessun altro, e la dichiarazione congiunta che dovrebbe formalizzarlo è ancora in revisione. ' +
    'Bassa, invece, la fiducia sull’applicazione effettiva: dei quattro punti che decidono se una nave passa ' +
    'davvero, nessuno è risolto.',
  takeaways: [
    'Il ministero degli Esteri iraniano ha annunciato che Iran e Oman hanno concordato le coordinate geografiche di una rotta marittima attraverso lo Stretto di Hormuz; una dichiarazione congiunta è in preparazione, con il testo ancora in revisione.',
    'È il sesto annuncio di distensione in quattro giorni, ma il primo che produce un oggetto tecnico invece di una frase: i cinque precedenti erano dichiarazioni di intenti, e non avevano spostato di una unità il conteggio delle navi.',
    'Restano irrisolti i quattro punti che decidono se una nave passa davvero: chi controlla il traffico in uscita, le eventuali tariffe di transito, le garanzie di sicurezza e l’opposizione statunitense al controllo iraniano dello stretto.',
    'Il greggio reagisce con moderazione — Brent 79,34 dollari, WTI 75,42 — aiutato anche da un aumento inatteso di circa 2,5 milioni di barili nelle scorte statunitensi.',
    'Il decennale è risalito al 4,64% e il quinquennale al 4,35%: è la quarta lettura consecutiva in aumento, ed è l’elemento che lavora contro la corsa dell’oro oltre i 4.250 dollari.',
  ],
  invalidation: [
    'Un conteggio dei transiti ancora fermo alle otto navi quarantotto ore dopo la dichiarazione congiunta.',
    'La dichiarazione congiunta che non arriva, o un testo che non contiene la rotta concordata.',
    'Un blocco americano esplicito all’intesa.',
    'Nuovi attacchi alle rotte marittime, o un Brent nuovamente sopra gli 82 dollari.',
    'Sul metallo: una perdita rapida dei 4.200 dollari accompagnata dal decennale sopra il 4,70%.',
    'Prima di quella soglia: un decennale sopra il 4,68% mentre l’oro resta sopra i 4.250. Non ucciderebbe la lettura, ma segnalerebbe che si sta logorando, ed è la soglia che l’analisi precedente non aveva.',
  ],
  nextEvent: {
    when: 'Senza data annunciata',
    title: 'La dichiarazione congiunta Iran-Oman',
    detail:
      'L’assenza di una data è essa stessa un’informazione: le coordinate sono concordate, il testo no. Quando arriverà, la domanda da farsi non sarà che cosa dice, ma se nelle quarantotto ore successive il conteggio dei transiti si muove. Nel frattempo il calendario porta il rapporto occupazionale statunitense di venerdì, che agisce sull’oro dall’altro lato, quello dei tassi.',
  },
  sources: [{ outlet: 'Reuters' }, { outlet: 'MarketWatch' }],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Il ministero degli Esteri iraniano ha annunciato che Iran e Oman hanno concordato le coordinate geografiche di una rotta marittima attraverso lo Stretto di Hormuz. Una dichiarazione congiunta è in preparazione, anche se il testo definitivo è ancora in revisione.',
    },
    {
      kind: 'stats',
      title: 'Dove sono i numeri',
      caption:
        'Valori citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Brent',
          value: '79,34 $',
          tone: 'bull',
          note: 'Di nuovo sotto gli 80 dollari; WTI a 75,42',
        },
        {
          label: 'Scorte USA',
          value: '+2,5 mln barili',
          tone: 'bull',
          note: 'Aumento inatteso, contribuisce al calo del greggio',
        },
        {
          label: 'Treasury a 10 anni',
          value: '≈ 4,64%',
          tone: 'bear',
          note: 'Quarta lettura consecutiva in salita',
        },
        {
          label: 'Treasury a 5 anni',
          value: '≈ 4,35%',
          tone: 'bear',
          note: 'Tornato sui livelli precedenti al dato ADP',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il sesto annuncio, e perché non è come i primi cinque',
      anchor: 'sesto-annuncio',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena contarli, perché il conteggio è il punto. In quattro giorni questo archivio ha registrato cinque annunci di distensione su Hormuz: l’apertura di Bessent, la smentita iraniana, la minaccia rilanciata, la richiesta di controllo sugli ingressi, la trattativa «durata tutto il giorno» dichiarata dal presidente. Alla fine di tutti e cinque, il conteggio delle navi in transito era fermo a otto contro le 130-140 al giorno di prima del conflitto. Erano frasi, e le frasi non spostano un vincolo materiale.',
    },
    {
      kind: 'paragraph',
      text: 'Questo è diverso in natura, non in tono. Delle coordinate geografiche non sono un’intenzione: sono un oggetto, si scrivono, si verificano, e o esistono o non esistono. È la prima volta in questa vicenda che da un tavolo esce qualcosa che si può mettere su una carta nautica.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Di quanto aggiornare, e non se',
      text: 'Il modo giusto di trattarlo è come nuova evidenza da incorporare, non come conferma o come rumore. Chi arrivava a oggi con una probabilità bassa di riapertura la alza — sarebbe bias di conferma non farlo — ma la alza di quanto vale un documento tecnico senza firma, non di quanto varrebbe una nave che passa. Il segno di un aggiornamento fatto bene è che l’indicatore da guardare resta lo stesso di prima: il conteggio dei transiti, non il numero degli annunci. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Quello che ancora manca',
      anchor: 'cosa-manca',
    },
    {
      kind: 'paragraph',
      text: 'Restano irrisolti quattro punti, e non sono dettagli di forma: chi controllerà il traffico in uscita, se ci saranno tariffe di transito, quali garanzie di sicurezza avranno le navi, e l’opposizione statunitense a un controllo iraniano dello stretto. Sono esattamente le quattro cose che decidono se un armatore manda o no una petroliera. Una rotta tracciata su cui nessuno vuole navigare non è una riapertura.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Qui l’effetto è genuinamente a due facce, ed è la ragione per cui l’impostazione resta inclinata ma non netta.',
    },
    {
      kind: 'balance',
      title: 'I due effetti di una riapertura',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Greggio più contenuto, quindi meno pressione inflazionistica.',
          'Meno necessità di rialzi Fed, quindi rendimenti più bassi e minore costo-opportunità del metallo.',
        ],
      },
      right: {
        title: 'Contro l’oro',
        tone: 'bear',
        items: [
          'Si sgonfia la parte di domanda che veniva dal rifugio geopolitico.',
          'È l’effetto più rapido dei due: agisce sul sentimento, mentre quello sui tassi passa dai dati.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Il decennale sale un punto base alla volta',
      anchor: 'decennale',
    },
    {
      kind: 'paragraph',
      text: 'C’è un’altra cosa che si vede solo mettendo in fila i controlli della giornata. Alle 13:20 il decennale era al 4,60-4,61%; alle 15:25 al 4,62%; alle 18:20 al 4,63%; adesso al 4,64%, con il quinquennale tornato al 4,35%. Quattro letture, tutte in salita, nessuna abbastanza grande da farsi notare da sola.',
    },
    {
      kind: 'paragraph',
      text: 'È il principale elemento contrario alla corsa del metallo, e va detto per quello che è: dopo l’ADP debole i rendimenti avrebbero dovuto continuare a scendere, e invece hanno smesso e hanno cominciato a risalire. L’oro sopra i 4.250 non è più accompagnato dal canale che lo giustificava. Inseguire il movimento a questo punto significa comprarlo senza la sua ragione.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto probabile',
      caption: 'Effetti attesi, da confrontare con i prezzi.',
      items: [
        {
          label: 'Oro',
          tone: 'warn',
          text: 'Sostenuto finché resta sopra i 4.200-4.210, ma meno conveniente da inseguire dopo questa estensione.',
        },
        {
          label: 'Petrolio',
          tone: 'bull',
          text: 'Pressione moderatamente ribassista finché l’intesa procede, con le scorte in aumento che aiutano.',
        },
        {
          label: 'Dollaro',
          tone: 'warn',
          text: 'Ancora vulnerabile, ma può recuperare se i rendimenti continuano a salire.',
        },
        {
          label: 'Rendimenti USA',
          tone: 'bear',
          text: 'Stabilizzazione o lieve rialzo nel brevissimo: è la direzione degli ultimi quattro controlli.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'L’impostazione su XAU/USD resta inclinata al rialzo ma diventa neutrale-rialzista, con forza media. Non perché il fatto sia debole — è il più concreto arrivato finora su Hormuz — ma perché è il tipo di fatto che spinge l’oro in due direzioni insieme, e perché il canale dei tassi ha smesso di collaborare mentre il prezzo continuava a salire. Le due cose insieme descrivono un rialzo che ha ancora inerzia e ha perso una gamba, il che non è la stessa cosa di un rialzo forte.',
    },
    {
      kind: 'note',
      text: 'L’intesa sulle coordinate è annunciata dal ministero degli Esteri iraniano e riportata dalla fonte citata nel testo: non risulta una conferma indipendente della controparte, e la dichiarazione congiunta non è ancora nella sua versione definitiva. I livelli di prezzo servono a rendere verificabile il ragionamento e non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
