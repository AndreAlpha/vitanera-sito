/**
 * il-petrolio-arriva-ai-tassi-e-mancano-due-punti-base
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const petrolioArrivaAiTassi: Article = {
  slug: 'il-petrolio-arriva-ai-tassi-e-mancano-due-punti-base',
  categories: ['correlazioni', 'petrolio', 'oro', 'usa'],
  title: 'Il petrolio arriva ai tassi, e mancano due punti base',
  kicker: 'Correlazioni · Il canale che si apre',
  dek:
    'Stamattina il greggio saliva e i rendimenti no: era la separazione descritta qui alle 11. Nel ' +
    'pomeriggio il Brent tocca gli 85 dollari e il biennale si muove con lui, a 4,228%. La regola ' +
    'dichiarata il 5 agosto chiede il 4,25% e un Brent sopra gli 84: mancano due punti base a una gamba e ' +
    'quindici centesimi all’altra.',
  publishedAt: '2026-08-10T15:40:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Hormuz', 'Biennale', 'Inflazione attesa', 'Dollar Index', 'Soglie'],
  instruments: ['XAU/USD', 'Brent', 'WTI', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    regime:
      'Per la prima volta dal rapporto occupazionale le quattro gambe si muovono insieme contro il metallo. ' +
      'Il Brent torna verso gli 85 dollari con circa più 2%, il Dollar Index sale a 99,70 con più 0,2%, il ' +
      'biennale passa da 4,204% a 4,228% e il decennale a 4,664%: è il canale che questo archivio aveva ' +
      'dichiarato come il modo in cui la vicenda di Hormuz si sarebbe girata contro l’oro, ed è la prima ' +
      'volta che si vede. L’inclinazione rialzista intraday poggiava per intero sul contorno monetario ' +
      'favorevole — dollaro debole, rendimenti in calo — e quel contorno è appena scomparso. Non è ' +
      'un’inversione, e le dimensioni contano: il biennale si è mosso di due punti base e mezzo, il dollaro ' +
      'resta sotto 100 e vicino al minimo da due mesi, e il rialzo di settembre è ancora al 44%. Ma i segni ' +
      'sono girati tutti insieme, e la direzione di breve non ha più nulla che la sostenga fino ' +
      'all’indice dei prezzi di mercoledì.',
    horizon: 'breve',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti, che sono tutti prezzi osservati e rilevati dalle agenzie nella stessa finestra: ' +
    'greggio, oro, dollaro e le due scadenze del Treasury. Media sulla lettura, perché due punti base e ' +
    'mezzo sul biennale e due decimi sul dollaro sono movimenti piccoli, e trattarli come l’inizio di una ' +
    'tendenza è una scommessa sul segno contro l’ampiezza. La ragione per farla comunque è che i segni si ' +
    'sono girati tutti nella stessa direzione e nella stessa ora, il che è più informativo della dimensione ' +
    'di ciascuno. Il vero test resta l’indice dei prezzi di mercoledì.',
  takeaways: [
    'Il Brent è tornato intorno agli 85 dollari, circa più 2%, mentre il traffico attraverso Hormuz resta molto limitato. L’Iran dice che l’accordo tecnico con l’Oman è nelle fasi finali, ma ribadisce che la riapertura vera richiede concessioni statunitensi, comprese quelle su sanzioni e minacce militari.',
    'Questa volta i tassi rispondono. Il biennale sale da 4,204% a circa 4,228%, due punti base e mezzo, e il decennale a 4,664%; il Dollar Index sale a circa 99,70 con più 0,2%. L’oro scende a circa 4.333 dollari, meno 0,2%.',
    'È il canale dichiarato: greggio più caro, aspettative di inflazione più vive, rendimenti e dollaro sostenuti, pressione sul metallo. Fino a stamattina il primo anello si muoveva e il secondo no — era la separazione descritta in questo archivio alle 11 — e adesso i due sono agganciati.',
    'La regola seguita dal 5 agosto chiede due gambe insieme: Brent sopra gli 84 dollari e biennale sopra il 4,25%. Sulla serie usata qui il greggio vale circa 83,85 e il biennale è a 4,228%: mancano quindici centesimi a una gamba e due punti base all’altra, ed è la prima volta che si avvicinano insieme.',
    'Non è ancora un’inversione. Il Dollar Index resta sotto 100 e vicino al minimo da due mesi, la probabilità di un rialzo a settembre è ferma al 44%, e il consenso Reuters sull’indice dei prezzi annuo è sceso a 3,4% dal 3,5% precedente.',
  ],
  invalidation: [
    'Un biennale sopra il 4,25% con il Brent sopra gli 84 dollari sulla serie di questo archivio: sono le due gambe della regola del 5 agosto, e sarebbe la prima volta che scattano insieme. A quel punto il premio energetico avrebbe smesso di essere neutro per il metallo.',
    'Un Dollar Index che supera quota 100 con l’oro spot sotto i 4.300 dollari: chiuderebbe il canale monetario che finora ha tenuto in piedi la correzione come consolidamento invece che come riprezzatura.',
    'Un oro che torna sopra i massimi di venerdì, circa 4.372 dollari, con il biennale che rientra sotto il 4,21%: direbbe che l’aggancio descritto qui era un rumore di poche ore e che la separazione di stamattina reggeva.',
    'Un Brent che rientra sotto gli 82 dollari sulla serie citata dalle agenzie insieme a un conteggio dei transiti sopra le otto navi al giorno: sarebbe la de-escalation vera, e toglierebbe il primo anello della catena descritta qui.',
    'Un indice dei prezzi statunitense mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: renderebbe questa analisi irrilevante prima ancora che sbagliata, perché il comando tornerebbe al canale americano e la catena energetica diventerebbe un dettaglio.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'Il consenso Reuters sul dato annuo principale è sceso a 3,4% dal 3,5% precedente, e la revisione conta più di quanto sembri: abbassando l’asticella, rende «sopra le attese» un numero che ieri non lo sarebbe stato. Arriva con il greggio a ridosso degli 84 dollari sulla serie di questo archivio, cioè nella configurazione peggiore — un dato caldo con l’energia in salita rimetterebbe il rialzo di settembre sul tavolo e chiuderebbe insieme le due gambe della regola. Giovedì 13 i prezzi alla produzione; nel frattempo, martedì e mercoledì, 100 miliardi di titoli a tre e dieci anni.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Stamattina alle 11 questo archivio ha scritto che il greggio prezzava Hormuz e l’oro no, e che il rischio da guardare era a due tempi: un premio energetico che oggi non tocca il metallo lo tocca domani, perché l’inflazione attesa torna a essere un problema e i rendimenti seguono. Il domani è arrivato nel pomeriggio. Il Brent è tornato verso gli 85 dollari con circa più 2%, e questa volta il biennale si è mosso con lui: da 4,204% a circa 4,228%. Il dollaro sale dello 0,2% a 99,70, il decennale è a 4,664%, l’oro scende a 4.333.',
    },
    {
      kind: 'stats',
      title: 'Le quattro gambe, e dove stanno le tacche',
      caption:
        'Rilevazioni riferite dalle agenzie nella stessa finestra; non sono quotazioni in tempo reale né chiusure ufficiali.',
      items: [
        {
          label: 'Brent',
          value: '≈ 85 $',
          tone: 'bear',
          note: 'Circa più 2%; sulla serie di questo archivio corrisponde a circa 83,85',
        },
        {
          label: 'Tacca sul Brent',
          value: '84 $',
          tone: 'warn',
          note: 'Quindici centesimi più su: oltre, il greggio smette di sostenere il metallo',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,228%',
          tone: 'bear',
          note: 'Da 4,204%: due punti base e mezzo, il primo movimento che accompagna il greggio',
        },
        {
          label: 'Tacca sul biennale',
          value: '4,25%',
          tone: 'warn',
          note: 'Due punti base più su: è la seconda gamba della regola del 5 agosto',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,664%',
          tone: 'bear',
          note: 'In leggerissimo rialzo, dopo il 4,637% della mattinata',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,70',
          tone: 'bear',
          note: 'Più 0,2%, ma ancora sotto 100 e vicino al minimo da due mesi',
        },
        {
          label: 'XAU/USD',
          value: '≈ 4.333 $',
          tone: 'neutral',
          note: 'Meno 0,2%, trentatré dollari sopra la soglia dei 4.300',
        },
        {
          label: 'Rialzo Fed a settembre',
          value: '44%',
          tone: 'bull',
          note: 'Fermo: la gamba monetaria non si è ancora mossa',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'La catena si chiude',
      anchor: 'catena-si-chiude',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena guardare la catena per intero, perché è la stessa che questo archivio descrive dal 4 agosto e che finora aveva funzionato soltanto al contrario. Allora il greggio scendeva del 4% sulle parole del segretario al Tesoro, e la catena era: petrolio più basso, inflazione attesa più bassa, rendimenti più bassi, oro sostenuto. Oggi gli stessi anelli girano nel verso opposto — greggio più caro, aspettative di inflazione più vive, rendimenti e dollaro sostenuti, pressione sul metallo — ed è la prima volta che li si vede muovere insieme in questa direzione.',
    },
    {
      kind: 'paragraph',
      text: 'La distanza fra stamattina e adesso è tutta nel secondo anello. Alle 11 il Brent era salito dell’1,4% e il biennale era rimasto a 4,206%, fermo; il decennale era addirittura sceso al 4,637%. Era quella la separazione, e da quella separazione veniva la conclusione che il mercato trattasse Hormuz come un problema di offerta di una materia prima e non come un fatto monetario. Adesso il biennale si muove, e si muove di poco ma nella direzione che rende la lettura di stamattina superata dalla sua stessa condizione di logoramento.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title:
        'Due punti base non sono una tendenza, ma quattro segni girati insieme sono un’informazione',
      text: 'Il movimento del biennale è di due punti base e mezzo, quello del dollaro di due decimi: chiunque potrebbe archiviarli come rumore, e preso uno per uno lo sarebbero. Quello che li rende diversi è la contemporaneità — greggio, dollaro, biennale e decennale si muovono nella stessa ora e tutti contro il metallo, che è la configurazione che questo archivio aveva dichiarato di aspettare. Contare i segni invece delle ampiezze è utile proprio quando le ampiezze sono piccole: è così che un canale si vede prima di diventare un problema.',
    },
    {
      kind: 'heading',
      text: 'Quindici centesimi e due punti base',
      anchor: 'quindici-centesimi',
    },
    {
      kind: 'paragraph',
      text: 'La regola dichiarata il 5 agosto e ripetuta in ogni analisi da allora chiede due cose insieme: un Brent sopra gli 84 dollari e un biennale sopra il 4,25%. È scritta con la congiunzione e non con la disgiunzione apposta, perché un premio energetico senza risposta dei tassi è quello che si è visto per una settimana intera senza che l’oro ne soffrisse. Oggi, per la prima volta, entrambe le gambe si avvicinano nella stessa seduta.',
    },
    {
      kind: 'paragraph',
      text: 'Serve però il conto giusto sul greggio, ed è lo stesso fatto stamattina. Gli 85 dollari citati dalle agenzie appartengono alla serie che venerdì ha chiuso a 83,55; quella usata da questo archivio dal 5 agosto ha chiuso a 82,21, ed è su quella che la tacca degli 84 è stata fissata. Applicando la stessa variazione del 2%, il Brent di questa scheda vale circa 83,85: quindici centesimi sotto la soglia. Il biennale a 4,228% è due punti base sotto la sua. Nessuna delle due è scattata, ed è esattamente questo che rende la giornata interessante — non che il livello sia stato superato, ma che per la prima volta manchi così poco a entrambe.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'balance',
      title: 'Che cosa regge ancora e che cosa ha ceduto',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Il Dollar Index resta sotto 100 e vicino al minimo da due mesi: la fuga verso il dollaro non c’è.',
          'Il rialzo di settembre resta al 44%, contro il 67% di una settimana fa: la gamba monetaria non si è mossa.',
          'Le ampiezze sono minime — due punti base e mezzo sul biennale, due decimi sul dollaro — e il metallo cede solo lo 0,2%.',
          'Il consenso sull’indice dei prezzi annuo è sceso a 3,4% da 3,5%, cioè il mercato si attende meno inflazione, non di più.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Per la prima volta dal rapporto occupazionale greggio, dollaro, biennale e decennale si muovono insieme contro il metallo.',
          'Il contorno favorevole di stamattina — dollaro debole e rendimenti in calo — è scomparso in poche ore, e l’oro non ne aveva approfittato nemmeno quando c’era.',
          'Entrambe le gambe della regola del 5 agosto sono a ridosso: quindici centesimi sul Brent, due punti base sul biennale.',
          'Il consenso più basso abbassa l’asticella: con 3,4% al posto di 3,5%, un dato che ieri sarebbe stato in linea mercoledì risulterebbe sopra le attese.',
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
      text: 'Sull’orizzonte più stretto l’impostazione passa da neutrale con inclinazione rialzista a neutrale, con forza bassa. È un cambiamento piccolo e va spiegato per quello che è: non dice che l’oro scenderà, dice che non c’è più niente che lo inclini verso l’alto nelle prossime ore. Le tre letture precedenti erano restate inclinate al rialzo per una ragione sola, e cioè che il contorno monetario era favorevole anche quando il metallo non lo usava. Adesso quel contorno non c’è. Restava una gamba e si è girata; una direzione senza gambe è una direzione neutrale, e chiamarla ancora rialzista sarebbe inerzia.',
    },
    {
      kind: 'paragraph',
      text: 'Sull’orizzonte dei giorni non cambia niente, e vale la pena tenere le due cose separate. Lì il motore resta il rapporto occupazionale — meno 23.000 posti, un rialzo di settembre in minoranza — e nulla di quanto è successo oggi lo tocca. Un premio energetico che sale di due punti base sul biennale non sposta una decisione di politica monetaria; un indice dei prezzi caldo sì. È il motivo per cui la lettura di fondo resta dov’è mentre quella intraday si azzera.',
    },
    {
      kind: 'paragraph',
      text: 'Quello che va guardato da qui a mercoledì è una sola combinazione, ed è la ragione per cui la regola del 5 agosto è stata scritta con due gambe invece che con una. Se il Brent supera gli 84 sulla serie di questa scheda mentre il biennale resta sotto il 4,25%, il quadro non cambia: è il premio di rischio che sale e si esaurisce, come è già successo sette volte in sette giorni. Se invece salgono insieme, il petrolio ha smesso di essere un problema geopolitico ed è diventato un problema di inflazione — e a quel punto l’oro non è più il posto in cui il rischio si compra, ma quello in cui si paga.',
    },
    {
      kind: 'note',
      text: 'I livelli citati sono rilevazioni riferite dalle agenzie nel corso della seduta e non sono chiusure ufficiali né quotazioni in tempo reale: servono a rendere verificabile il ragionamento e non sono obiettivi. Le quotazioni del Brent citate oggi appartengono alla serie che venerdì ha chiuso a 83,55 dollari, mentre le soglie di questo archivio sono fissate sulla serie che ha chiuso a 82,21; la conversione applicata qui usa la stessa variazione percentuale ed è approssimata. La probabilità di un rialzo a settembre e il consenso sull’indice dei prezzi sono aspettative di mercato riportate da Reuters, non decisioni della Federal Reserve.',
    },
  ],
};
