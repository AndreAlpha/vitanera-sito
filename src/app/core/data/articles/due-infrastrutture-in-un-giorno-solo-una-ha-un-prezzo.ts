/**
 * due-infrastrutture-in-un-giorno-solo-una-ha-un-prezzo
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const dueInfrastruttureUnPrezzo: Article = {
  slug: 'due-infrastrutture-in-un-giorno-solo-una-ha-un-prezzo',
  categories: ['premio-di-rischio', 'medio-oriente', 'petrolio', 'oro'],
  title: 'Due infrastrutture in un giorno, e solo una ha un prezzo',
  kicker: 'Premio di rischio · Letalità e rilevanza',
  dek:
    'Oltre alla raffineria di Jazan, gli Houthi hanno colpito con missili e droni il porto yemenita di ' +
    'Mocha, sul Mar Rosso: almeno sette morti e gravi danni alle banchine. Due infrastrutture fisse nella ' +
    'stessa giornata confermano il cambio di bersaglio. Ma l’attacco che ha ucciso è quello che il mercato ' +
    'non prezzerà, e vale la pena dire perché senza girarci intorno.',
  publishedAt: '2026-08-09T16:10:00+02:00',
  author: AUTHOR,
  readingMinutes: 6,
  tags: ['Mocha', 'Bab el-Mandeb', 'Houthi', 'Mar Rosso', 'Yemen'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Il motore resta il rapporto occupazionale e l’attesa dell’indice dei prezzi di mercoledì. Sul canale ' +
      'geopolitico la giornata aggiunge una conferma e non un grado: due infrastrutture fisse colpite in ' +
      'poche ore dicono che il cambio di bersaglio osservato stamattina è un modo di operare e non un ' +
      'episodio. Ma il secondo obiettivo è un porto commerciale yemenita dentro una guerra civile che dura ' +
      'da undici anni, non un nodo dell’esportazione energetica: pesa sul conto delle vittime, non sul conto ' +
      'dei barili. La forza resta media perché il premio va aggiornato di quanto vale la cosa, non di quanto ' +
      'la cosa colpisce.',
    horizon: 'medio',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, e per una volta senza riserve sulla natura della fonte: l’attacco a Mocha è riportato ' +
    'da Reuters e da AP, il conteggio delle vittime e i danni alle banchine sono riferiti da entrambe, e ' +
    'l’episodio è attribuito agli Houthi senza il passaggio incerto che ieri restava aperto su Jazan. Bassa ' +
    'invece sulla rilevanza per il prezzo, ed è il punto di questa analisi: i due livelli qui divergono più ' +
    'del solito, perché l’episodio meglio documentato della giornata è anche quello con meno conseguenze ' +
    'sull’offerta di greggio. Nessuna delle due cose si può dedurre dall’altra.',
  takeaways: [
    'Gli Houthi hanno colpito con missili e droni il porto yemenita di Mocha, sul Mar Rosso: almeno sette morti e gravi danni alle infrastrutture portuali, secondo Reuters e AP.',
    'Nella stessa giornata era stato rivendicato l’attacco con drone alla raffineria Aramco di Jazan, dove il ministero dell’Energia saudita ha dichiarato l’incendio spento e nessun ferito. Due infrastrutture fisse in poche ore: il cambio di bersaglio dalle navi agli impianti smette di essere un episodio.',
    'Il confronto fra i due episodi è scomodo e va detto: quello con sette morti è un porto commerciale yemenita dentro una guerra civile di undici anni; quello senza feriti è un impianto da circa 400.000 barili al giorno sulla via con cui il greggio saudita aggira Hormuz. Il secondo ha conseguenze sull’offerta, il primo quasi nessuna.',
    'Mocha porta però nel quadro un nome che questo archivio non aveva mai usato: Bab el-Mandeb, l’imbocco meridionale del Mar Rosso. È la porta d’ingresso della rotta che a nord finisce a Yanbu e a Jazan.',
    'Su Hormuz nulla si muove: Iran e Oman parlano ancora di intesa nelle fasi finali, e Teheran mantiene condizioni ampie prima della normalizzazione del traffico. Il prossimo dato statunitense di prima fascia resta l’indice dei prezzi di mercoledì 12 agosto.',
  ],
  invalidation: [
    'Un Brent che apre lunedì e chiude sotto gli 82 dollari: direbbe che due infrastrutture colpite in un giorno non producono alcun premio, e che il canale geopolitico è chiuso a prescindere dai fatti.',
    'Un attacco a un nodo dell’esportazione energetica — Yanbu, Ras Tanura, un terminale di carico — con danno operativo dichiarato da chi lo subisce: sposterebbe l’episodio nella categoria in cui questa lettura non lo mette.',
    'Una conferma saudita che l’incendio di Jazan sia stato causato dall’attacco rivendicato, con la capacità ferma oltre la settimana: renderebbe la giornata più grave di come è descritta qui.',
    'Un annuncio di tregua sullo Yemen, o un ritorno al tavolo negoziale sotto egida delle Nazioni Unite entro la settimana: toglierebbe la premessa nel modo più diretto.',
    'Prima di tutte queste, e senza aspettare la rottura: un Brent sopra gli 84 dollari con il biennale che risale sopra il 4,25%. È la regola dichiarata il 5 agosto e mai cambiata — oltre quella soglia il premio energetico smette di sostenere il metallo e ricomincia ad alimentare i rendimenti contro di lui.',
  ],
  nextEvent: {
    when: 'Lunedì 10 agosto, all’apertura',
    title: 'Che cosa vale una giornata con due infrastrutture colpite',
    detail:
      'La domanda arriva al primo prezzo già molto stretta, perché la settimana ne ha ristretto i margini da sola. Venerdì quindici navi colpite dichiarate da chi le possiede hanno prodotto un premio rientrato in sei ore. Domenica ci sono due impianti fissi in un giorno solo. Se il Brent apre e non tiene gli 82 dollari, la conclusione non riguarderà Mocha né Jazan: riguarderà il fatto che quella regione ha smesso di avere un prezzo. Mercoledì 12 agosto arriva l’indice dei prezzi al consumo statunitense, che può riprendersi il comando del quadro; il giorno dopo i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'Associated Press' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'L’escalation di domenica non si è fermata alla raffineria saudita. Gli Houthi hanno lanciato missili e droni contro il porto yemenita di Mocha, sul Mar Rosso, causando almeno sette morti e gravi danni alle infrastrutture portuali: lo riportano Reuters e AP. Nella stessa giornata era stato rivendicato l’attacco con drone contro l’impianto Aramco di Jazan. Due infrastrutture fisse in poche ore, e una differenza fra le due che conviene guardare in faccia.',
    },
    {
      kind: 'stats',
      title: 'I due episodi della giornata',
      caption:
        'Conteggi riferiti dalle agenzie e dichiarazioni ufficiali; i mercati sono chiusi e non ci sono quotazioni in tempo reale.',
      items: [
        {
          label: 'Mocha, vittime',
          value: 'almeno sette',
          tone: 'bear',
          note: 'Gravi danni alle banchine, secondo Reuters e AP',
        },
        {
          label: 'Mocha, funzione',
          value: 'porto commerciale yemenita',
          tone: 'neutral',
          note: 'Non è un terminale di esportazione energetica',
        },
        {
          label: 'Jazan, vittime',
          value: 'nessuna',
          tone: 'neutral',
          note: 'Incendio dichiarato spento dal ministero dell’Energia saudita',
        },
        {
          label: 'Jazan, funzione',
          value: '≈ 400.000 barili/giorno',
          tone: 'bear',
          note: 'Sulla costa con cui il greggio saudita aggira Hormuz',
        },
        {
          label: 'Transiti a Hormuz',
          value: '33 in quattro giorni',
          tone: 'bear',
          note: 'Invariato: nessun passo avanti sulla riapertura',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il conto delle vittime e il conto dei barili',
      anchor: 'due-conti',
    },
    {
      kind: 'paragraph',
      text: 'Messi in fila, i due episodi della giornata si dispongono al contrario di come li ordinerebbe l’istinto. L’attacco che ha ucciso sette persone e sfondato delle banchine ha colpito un porto commerciale yemenita: è la guerra civile che va avanti da undici anni, ed è dove quella guerra si combatte da sempre. L’attacco che non ha fatto un ferito ha colpito un impianto di raffinazione da circa 400.000 barili al giorno, sulla costa che serve a far uscire il greggio saudita senza passare da Hormuz. Il primo è molto più grave; il secondo è molto più rilevante per il prezzo del petrolio.',
    },
    {
      kind: 'paragraph',
      text: 'Le due cose non sono in competizione e non si annullano: sono su due scale che non comunicano. Un archivio che si occupa di che cosa muove l’oro deve dire quale delle due sta misurando, e dirlo esplicitamente invece di lasciare che il lettore lo deduca dal silenzio. Qui si misura la seconda. Non perché la prima conti meno — conta di più, su qualunque scala che non sia questa — ma perché confonderle produce esattamente il tipo di analisi che fra un mese risulterà sbagliata: quella che alza il premio di rischio in proporzione a quanto una notizia impressiona.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Si aggiorna di quanto vale la cosa, non di quanto la cosa colpisce',
      text: 'Il 5 agosto, quando Iran e Oman annunciarono di aver concordato delle coordinate, questo archivio scrisse che bisognava alzare la probabilità di riapertura «di quanto vale un documento tecnico senza firma, non di quanto varrebbe una nave che passa». È lo stesso principio, applicato con i segni invertiti: un attacco letale a un porto che non esporta greggio va prezzato per quello che toglie all’offerta, cioè quasi niente, non per quanto è grave. La disciplina è scomoda in tutte e due le direzioni, e serve proprio per questo. Il metodo è descritto in /metodologia.',
    },
    {
      kind: 'heading',
      text: 'Che cosa aggiunge Mocha, e che cosa no',
      anchor: 'che-cosa-aggiunge',
    },
    {
      kind: 'paragraph',
      text: 'Aggiunge due cose, e nessuna delle due è un premio di rischio immediato. La prima è la conferma di un modo di operare: stamattina, guardando Jazan, questo archivio ha scritto che il bersaglio si stava spostando dalle navi agli impianti fissi, e quella era una lettura su un episodio solo. Due infrastrutture colpite nello stesso giorno la rendono un fatto ripetuto, e un fatto ripetuto vale più di uno isolato — perché di uno isolato non si sa se sia una scelta o un’occasione.',
    },
    {
      kind: 'paragraph',
      text: 'La seconda è geografica, e questo archivio non l’aveva ancora nominata: Bab el-Mandeb, lo stretto all’imbocco meridionale del Mar Rosso, accanto al quale sta Mocha. È la porta d’ingresso della stessa rotta che a nord arriva a Yanbu e a Jazan. Sapere che chi colpisce ha capacità e volontà di farlo su entrambe le estremità di quella rotta è un’informazione sulla capacità, non ancora un danno all’offerta. Va messa nell’elenco delle cose da guardare, non in quello delle cose che sono già successe.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che Mocha non aggiunge è un cambiamento dello stato del mondo. Venerdì notte, scrivendo dei missili su Marib, questo archivio aveva annotato che lo Yemen è in guerra da undici anni e che un’escalation grave non è un cambio di stato ma un peggioramento dentro uno stato già noto. Vale identico qui, e vale anche contro sé stesso: se in tre giorni si scrivono tre analisi sull’escalation yemenita e nessuna alza il grado del segnale, la cosa onesta è chiedersi se le tre analisi servissero — oppure ammettere che servono a registrare i fatti, non a cambiare la lettura.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Una conferma del modo, non un salto di grado',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Due infrastrutture fisse colpite in poche ore: il cambio di bersaglio dalle navi agli impianti è un modo di operare, non un episodio.',
          'La capacità di colpire si estende ora a entrambe le estremità della rotta del Mar Rosso, da Bab el-Mandeb a Jazan.',
          'Su Hormuz nessun passo avanti: l’intesa con l’Oman resta «nelle fasi finali» e le condizioni iraniane sono ancora fuori dal tavolo.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Mocha è un porto commerciale yemenita, non un terminale di esportazione: il danno all’offerta di greggio è quasi nullo.',
          'Lo Yemen è in guerra da undici anni: un’escalation dentro uno stato già noto non riprezza il rischio come farebbe un fatto nuovo.',
          'A Jazan, l’episodio con conseguenze sull’offerta, il danno resta dichiarato contenuto e l’attribuzione non è confermata da Riyadh.',
          'Questa settimana il premio si è formato e sgonfiato quattro volte, e venerdì è rientrato in sei ore su quindici navi colpite.',
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
      text: 'L’impostazione su XAU/USD resta rialzista con forza media sull’orizzonte dei giorni, la stessa di stamattina e delle due letture precedenti. Il motore non è cambiato: meno 23.000 posti nel rapporto occupazionale, la probabilità di un rialzo a settembre in minoranza al 43,7%, e l’indice dei prezzi di mercoledì come prossimo evento capace di spostare qualcosa. Nulla di quanto è successo oggi tocca quel meccanismo.',
    },
    {
      kind: 'paragraph',
      text: 'Resta una cosa da dire sul modo in cui questa giornata è stata raccontata, qui e altrove. La tentazione, davanti a due attacchi in poche ore, è di sommarli e concludere che il rischio è raddoppiato. Ma i premi di rischio non si sommano per numero di episodi: si formano su quanto cambia l’offerta attesa di una materia prima, e su questo la giornata ha prodotto un impianto fermato con danno dichiarato contenuto e un porto danneggiato che non esporta greggio. È meno di quanto sembri leggendo i titoli, ed è più di zero. Lunedì il primo prezzo dirà quale delle due cose il mercato ha guardato — e se non guarderà nessuna delle due, quella sarà l’informazione più grande della settimana.',
    },
    {
      kind: 'note',
      text: 'Il conteggio delle vittime e i danni al porto di Mocha sono quelli riferiti da Reuters e AP e non risultano da una verifica indipendente sul terreno. L’attacco alla raffineria di Jazan è confermato come incendio dal ministero dell’Energia saudita e rivendicato dagli Houthi, ma l’attribuzione della causa non è confermata da Riyadh. I livelli citati sono le chiusure del 7 agosto come registrate in questo archivio e servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi. Sul Brent circola per quella seduta anche una quotazione vicina agli 83,55 dollari: non è la serie usata qui dal 5 agosto, che ha chiuso a 82,21, e tutte le soglie — 80, 82 e 84 dollari — sono su quest’ultima. I riferimenti sull’oro sono sul prezzo spot; il conteggio dei 33 transiti copre da lunedì a giovedì della settimana scorsa.',
    },
  ],
};
