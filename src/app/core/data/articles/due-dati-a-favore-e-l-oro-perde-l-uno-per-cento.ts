import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const dueDatiAFavoreELOroPerde: Article = {
  slug: 'due-dati-a-favore-e-l-oro-perde-l-uno-per-cento',
  categories: ['variazione-ipp', 'richieste-iniziali-sussidi', 'oro', 'usa'],
  title: 'Due dati a favore, e l’oro perde l’uno per cento',
  kicker: 'Prezzi alla produzione · La terza seduta',
  dek:
    'I prezzi alla produzione di luglio escono piatti contro attese di più 0,2%, le richieste di sussidio ' +
    'salgono a 209.000 contro 204.000 attese. Sono i due dati che dovrebbero sostenere il metallo, e il ' +
    'metallo scende dell’1,01% con un minimo a 4.351,45. È la terza seduta che va così.',
  publishedAt: '2026-08-13T18:35:00+02:00',
  author: AUTHOR,
  readingMinutes: 9,
  tags: ['Prezzi alla produzione', 'Sussidi', 'Hammack', 'Banche centrali'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sui fatti: due diffusioni statistiche ufficiali con il loro consenso, e prezzi rilevati con ' +
    'l’ora. Media sulla lettura, e la ragione è dichiarata nel testo: la direzione viene abbassata a ' +
    'neutrale un passo prima che la condizione scritta stamattina scatti alla lettera, perché quella ' +
    'chiedeva una chiusura e la chiusura non c’è ancora. Chi legge deve poter giudicare anche questo, ed è ' +
    'per questo che è scritto invece che nascosto.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'La direzione scende da neutrale-rialzista a neutrale, ed è la prima volta in questa fase che si ' +
      'muove per il prezzo e non per un meccanismo. La ragione è che il meccanismo continua a funzionare e ' +
      'il prezzo continua a non seguirlo: i prezzi alla produzione escono piatti contro attese di più ' +
      '0,2%, le richieste di sussidio salgono a 209.000 contro 204.000, il decennale scende di cinque punti ' +
      'base a 4,641% e il Brent perde l’1,06%. Sono quattro cose che tirano tutte dalla stessa parte, e ' +
      'l’oro chiude la giornata a 4.364,11 con meno 1,01% dopo un minimo a 4.351,45. Alla terza seduta ' +
      'consecutiva con questa configurazione, tenere una direzione rialzista significa affermare che il ' +
      'prezzo ha torto tre volte di fila.',
  },
  takeaways: [
    'I prezzi alla produzione di luglio sono piatti sul mese contro attese di più 0,2%, e scendono al 4,7% annuo dal 5,5%. Il dato di fondo sale dello 0,2% contro attese di più 0,3%. I beni fanno meno 0,7% e i servizi più 0,2%.',
    'Le richieste iniziali di sussidio salgono a 209.000 nella settimana all’8 agosto, più 9.000 e sopra le 204.000 attese. Le continuative scendono invece a 1,777 milioni da 1,799: il mercato del lavoro si raffredda nelle nuove entrate, non nelle uscite.',
    'Dopo l’indice dei prezzi di ieri sono due diffusioni consecutive che non convalidano una nuova accelerazione dell’inflazione di luglio. Nessuna delle due però contiene il greggio di agosto, che è il canale su cui questa scheda aspetta ancora una risposta.',
    'L’oro perde l’1,01% a 4.364,11 dollari con un minimo a 4.351,45, sotto il livello che questa scheda aveva dichiarato stamattina come condizione. È la terza seduta consecutiva in cui i sostegni migliorano e il metallo scende.',
    'Gli acquisti netti delle banche centrali sono stati 289 tonnellate nel secondo trimestre, più di cinque volte le 57 del primo e il massimo della serie per un secondo trimestre. È un dato del 30 luglio, non di oggi, e quel trimestre ha visto il prezzo scendere del 16%.',
  ],
  sources: [
    { outlet: 'Bureau of Labor Statistics', title: 'Producer Price Indexes, luglio 2026' },
    {
      outlet: 'U.S. Department of Labor',
      title: 'Richieste iniziali di sussidio, settimana all’8 agosto',
    },
    { outlet: 'World Gold Council', title: 'Gold Demand Trends, secondo trimestre 2026' },
    { outlet: 'Reuters' },
    { outlet: 'CNBC' },
    { outlet: 'MarketWatch' },
    { outlet: 'Investing.com' },
  ],
  invalidation: [
    'Un oro che chiude domani sopra i 4.408,59 dollari della chiusura di mercoledì, cioè che riprende per intero quello che ha perso oggi: direbbe che la seduta era posizionamento prima del collocamento del trentennale e non debolezza relativa, e la direzione tornerebbe neutrale-rialzista.',
    'Il collocamento del trentennale delle 19:00 con un rapporto fra domanda e offerta sopra la propria media delle ultime dieci aste, seguito da un decennale sotto il 4,600% del minimo odierno: sarebbe la parte lunga che smette di essere un freno, e a quel punto la mancata risposta del metallo perderebbe la sua spiegazione più semplice.',
    'Una probabilità di rialzo a settembre che scende sotto il 30%: oggi è al 35,0% ed è ferma da tre giorni fra il 34 e il 36. Un movimento vero su quel numero rimetterebbe in gioco la direzione, perché è la misura su cui questa lettura ha poggiato per due giorni.',
    'I prezzi al consumo di agosto, in uscita a settembre, con la componente energetica in aumento sul mese: è il test che né quello di luglio né i prezzi alla produzione di oggi potevano fare, e porterebbe la lettura sotto il neutrale invece che sopra.',
    'Un Brent che torna sopra gli 89,06 dollari del massimo di ieri: oggi è arrivato a toccare 85,87 ed è già risalito a 88,04, quindi il calo di cui si parla è meno stabile di come viene descritto.',
  ],
  nextEvent: {
    when: 'Giovedì 13 agosto, 19:00 italiane',
    title: 'Collocamento di titoli del Tesoro statunitense a trenta anni',
    detail:
      'È la scadenza dove il premio a termine pesa di più, e arriva il giorno dopo un rendiconto federale ' +
      'che ha portato il disavanzo cumulato dell’anno fiscale oltre quello dell’intero anno precedente. Il ' +
      'numero da guardare prima del rendimento è il rapporto fra domanda e offerta: mercoledì il decennale ' +
      'si è aggiudicato al 4,683% con 2,53 contro una media di 2,48, quindi domanda modestamente sopra la ' +
      'media. Su questa scadenza una domanda sotto la propria media peserebbe molto di più. Venerdì le ' +
      'vendite al dettaglio.',
  },
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Alle 14:30 sono uscite due diffusioni, e sono andate entrambe nella direzione che dovrebbe ' +
        'sostenere il metallo. I prezzi alla produzione di luglio sono piatti sul mese, contro attese di ' +
        'più 0,2%, e scendono al 4,7% annuo dal 5,5%; il dato di fondo sale dello 0,2% contro attese di più ' +
        '0,3%. Le richieste iniziali di sussidio salgono a 209.000 contro 204.000 attese. Il decennale è ' +
        'sceso di cinque punti base, il Brent ha perso l’1%, il dollaro è leggermente più debole. L’oro ha ' +
        'chiuso la giornata europea a 4.364,11 dollari, in calo dell’1,01%, con un minimo a 4.351,45.',
    },
    {
      kind: 'stats',
      caption:
        'Diffusioni delle 14:30 e rilevazioni delle 18:35; i prezzi non sono chiusure ufficiali.',
      items: [
        {
          label: 'Prezzi produzione',
          value: '0,0%',
          note: 'Mensile di luglio contro attese di più 0,2%; annuo al 4,7% dal 5,5%. Fondo a più 0,2% contro più 0,3%',
        },
        {
          label: 'Sussidi iniziali',
          value: '209.000',
          note: 'Settimana all’8 agosto, più 9.000 e sopra le 204.000 attese. Continuative a 1,777 mln da 1,799',
        },
        {
          label: 'XAU/USD',
          value: '4.364,11 $',
          note: 'Meno 1,01% sulla chiusura di 4.408,59, con un minimo a 4.351,45 e un massimo notturno a 4.449,71',
        },
        {
          label: 'Treasury 10 anni',
          value: '4,641%',
          note: 'Meno 5,1 punti base dalla chiusura di 4,692%, dentro un intervallo fra 4,600% e 4,684%',
        },
        {
          label: 'Rialzo settembre',
          value: '35,0%',
          note: 'Praticamente fermo: era 34,7% stamattina e 35,7% ieri sera. Il repricing si è esaurito',
        },
        {
          label: 'Brent',
          value: '88,04 $',
          note: 'Meno 1,06%, ma dopo un minimo a 85,87: il calo di due dollari è già stato per metà restituito',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Che cosa dicono davvero i due dati',
      anchor: 'i-due-dati',
    },
    {
      kind: 'paragraph',
      text:
        'La composizione dei prezzi alla produzione conta più del numero di copertina, ed è la parte che ' +
        'rende il dato meno morbido di come appare. Il piatto sul mese nasce da un meno 0,7% sui beni che ' +
        'compensa un più 0,2% sui servizi: la discesa arriva dall’energia, e il canale dei servizi — quello ' +
        'che la banca centrale guarda perché è più lento a girarsi — continua a salire. Con l’energia in ' +
        'calo del 3% abbondante e la benzina di più, il dato di luglio racconta soprattutto quello che è ' +
        'successo al greggio a luglio.',
    },
    {
      kind: 'paragraph',
      text:
        'Sui sussidi il segnale è diviso in due e va letto per intero. Le richieste iniziali salgono a ' +
        '209.000, sopra le attese, e sono la parte che si legge come raffreddamento. Ma le continuative ' +
        'scendono a 1,777 milioni da 1,799, cioè ventiduemila persone in meno che restano a chiedere il ' +
        'sussidio: chi perde il lavoro lo perde un po’ più spesso, e chi l’ha perso lo ritrova più in ' +
        'fretta. È l’opposto della configurazione recessiva, ed è la ragione per cui questi numeri non ' +
        'vanno contati come un argomento forte in nessuna delle due direzioni.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Due diffusioni consecutive che non possono rispondere alla stessa domanda',
      text:
        'Ieri l’indice dei prezzi al consumo, oggi quelli alla produzione: due misure che non convalidano ' +
        'una nuova accelerazione dell’inflazione. Ma entrambe misurano **luglio**, e la corsa del Brent da ' +
        '79 a 90 dollari è avvenuta ad agosto. Questa scheda lo ha già scritto ieri a proposito dell’indice ' +
        'al consumo, e vale identico oggi: un test che non può distinguere fra le due ipotesi che deve ' +
        'separare non ha potere di discriminazione, ed è una cosa diversa dall’avere una risposta ' +
        'rassicurante. La risposta arriva con l’indice di agosto, a settembre. Nel frattempo il greggio ha ' +
        'fatto per conto proprio buona parte del lavoro, scendendo del 2% ieri e toccando 85,87 oggi.',
    },
    {
      kind: 'heading',
      text: 'La terza seduta, e perché la direzione scende',
      anchor: 'la-terza-seduta',
    },
    {
      kind: 'paragraph',
      text:
        'Il fatto della giornata non è nessuno dei due dati: è che non hanno funzionato. Mercoledì ' +
        'pomeriggio il metallo cedeva mentre la probabilità di un rialzo crollava; stamattina cedeva mentre ' +
        'dollaro, decennale e greggio scendevano insieme; oggi pomeriggio perde l’1% mentre escono due ' +
        'diffusioni che gli sono favorevoli. Sono tre sedute consecutive con la stessa struttura, e il ' +
        'numero di sedute è esattamente la misura su cui questa scheda aveva scritto la propria condizione ' +
        'stamattina, invece che su un livello.',
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Una condizione applicata un passo prima della lettera',
      text:
        'La condizione scritta alle 08:20 diceva: «un oro che chiude oggi sotto i 4.362,57 dollari, il ' +
        'minimo di mercoledì, sarebbe la terza seduta consecutiva di cedimento con il sostegno monetario ' +
        'intatto, e a quel punto la direzione va portata a neutrale». Il minimo di oggi è 4.351,45, quindi ' +
        'undici dollari sotto quel livello, ma la quotazione delle 18:35 è 4.364,11 e la chiusura non c’è ' +
        'ancora. La direzione viene abbassata lo stesso, e va detto che è una scelta e non un automatismo: ' +
        'aspettare una chiusura che stampa fra qualche ora significherebbe tenere in panoramica fino ad ' +
        'allora una lettura a cui questa scheda non crede più. Se la chiusura arrivasse sopra i 4.362,57 ' +
        'la condizione non sarebbe scattata alla lettera, e questo paragrafo resta qui perché il registro ' +
        'possa giudicarlo.',
    },
    {
      kind: 'scenarios',
      items: [
        {
          label: 'Prima spiegazione',
          tone: 'neutral',
          text:
            'Prese di profitto dopo un massimo da due mesi. È quella che circola di più ed è compatibile ' +
            'con tutto, il che è anche il suo limite: spiega ugualmente bene una discesa di dieci dollari ' +
            'e una di cinquanta, e quindi non discrimina.',
        },
        {
          label: 'Seconda spiegazione',
          tone: 'bear',
          text:
            'Rotazione verso il rischio. Gli indici americani sono saliti oggi, con l’S&P 500 su un nuovo ' +
            'massimo intraday: la domanda di rifugio cede mentre si compra altro. È coerente con la ' +
            'giornata, ma questa scheda ha già osservato ieri l’oro salire insieme alle azioni, quindi il ' +
            'legame non è stabile.',
        },
        {
          label: 'Terza spiegazione',
          tone: 'bear',
          text:
            'Il collocamento del trentennale delle 19:00. È l’unica che spiega perché la debolezza si ' +
            'concentri proprio nelle ore precedenti a un’asta sulla scadenza dove il premio a termine ' +
            'pesa di più, il giorno dopo un rendiconto federale che ha superato il disavanzo dell’intero ' +
            'anno precedente. Ed è l’unica delle tre che si verifica stasera.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Il contrappeso dentro il comitato',
      anchor: 'hammack',
    },
    {
      kind: 'paragraph',
      text:
        'Beth Hammack, presidente della Fed di Cleveland, ha ripetuto oggi che la banca centrale dovrebbe ' +
        'alzare i tassi ora per riportare più in fretta l’inflazione al 2%, riconoscendo il miglioramento ' +
        'degli ultimi due mesi ma dicendo che non le basta. Nella scala usata in questo archivio conta più ' +
        'di una dichiarazione qualunque, perché Hammack è una dei tre che alla riunione del 29 luglio hanno ' +
        'votato contro preferendo un rialzo di venticinque punti base: è una posizione già messa a verbale, ' +
        'non una preferenza espressa a parole.',
    },
    {
      kind: 'paragraph',
      text:
        'Il mercato però non la sta seguendo, e il numero lo dice con precisione: la probabilità di un ' +
        'rialzo a settembre è al 35,0%, contro il 34,7% di stamattina e il 35,7% di ieri sera. Non è scesa ' +
        'dopo due dati morbidi, è rimasta ferma. È un dettaglio che vale la pena isolare, perché il ' +
        'racconto della giornata è che il mercato si sia convinto ancora di più della pausa: la misura che ' +
        'lo direbbe non si è mossa in tre giorni, e resta dentro una fascia di due punti.',
    },
    {
      kind: 'heading',
      text: 'Le banche centrali comprano, ma il dato è di due settimane fa',
      anchor: 'banche-centrali',
    },
    {
      kind: 'paragraph',
      text:
        'Gli acquisti netti di oro delle banche centrali sono stati 289 tonnellate nel secondo trimestre: ' +
        'più di cinque volte le 57 del primo trimestre rivisto, un aumento di oltre il 60% sull’anno prima ' +
        'e il valore più alto della serie per un secondo trimestre. La Banca nazionale di Polonia ha ' +
        'comprato 51 tonnellate portando le riserve a 632, la banca centrale cinese 33 — il maggior ' +
        'acquisto trimestrale dalla fine del 2023 — arrivando a 2.346.',
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Hanno comprato mentre il prezzo scendeva del sedici per cento',
      text:
        'È il dettaglio che rende la cifra interessante invece che semplicemente grande. Quel trimestre è ' +
        'stato il peggiore per il prezzo dell’oro dal 2013, con un calo di circa il 16%, e in quel ' +
        'trimestre gli acquisti ufficiali hanno segnato il record. Un compratore che accelera mentre il ' +
        'prezzo scende non sta inseguendo un movimento: sta eseguendo un piano di allocazione che il ' +
        'prezzo non governa. Va però detto con la stessa chiarezza il limite temporale, perché è quello ' +
        'che decide se la notizia conta oggi: il rapporto è del 30 luglio, non di oggi. Chi lo cita ' +
        'adesso lo sta richiamando, non pubblicando, e due settimane di prezzi lo hanno già assorbito. ' +
        'Serve alla lettura di fondo, dove questo archivio lo aveva già messo con gli acquisti cinesi di ' +
        'luglio; non serve a spiegare la seduta di oggi.',
    },
    {
      kind: 'balance',
      title: 'Tutto a favore tranne il prezzo',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Due diffusioni consecutive non convalidano una nuova accelerazione dell’inflazione: prezzi alla produzione piatti contro attese di più 0,2%, e al 4,7% annuo dal 5,5%.',
          'Il decennale scende di cinque punti base a 4,641% con un minimo a 4,600%, il più basso della settimana, e il dollaro resta sotto la chiusura di ieri.',
          'Gli acquisti ufficiali hanno segnato un record trimestrale proprio mentre il prezzo scendeva del 16%: è domanda che non dipende dal movimento.',
          'Il Brent ha toccato 85,87 dollari, circa 84,5 sulla serie usata qui, avvicinandosi alla tacca sotto la quale il greggio smette di alimentare i rendimenti contro il metallo.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il metallo perde l’1,01% nella giornata dei due dati favorevoli, con un minimo a 4.351,45 sotto il livello dichiarato stamattina: terza seduta consecutiva con questa struttura.',
          'La probabilità di un rialzo a settembre non è scesa dopo i dati: 35,0% contro 34,7% stamattina, ferma dentro due punti da tre giorni.',
          'Hammack, una dei tre dissensi a verbale del 29 luglio, ripete che il rialzo andrebbe fatto adesso: la componente restrittiva del comitato non si è mossa.',
          'Il Brent ha già restituito metà del calo, da 85,87 a 88,04: il sollievo sul canale dei prezzi è meno stabile di come viene raccontato.',
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
        'La direzione sull’orizzonte più stretto scende da neutrale con inclinazione rialzista a neutrale, ' +
        'e la forza resta bassa. È la prima volta in questa fase che una lettura si muove per il ' +
        'comportamento del prezzo invece che per il decadere di una ragione dichiarata, e conviene dire ' +
        'perché è ammesso qui: la ragione dichiarata era un meccanismo — meno probabilità di rialzo, meno ' +
        'rendimento alternativo, quindi più metallo — e quel meccanismo ha avuto tre occasioni consecutive ' +
        'di funzionare senza funzionare. A un certo punto un meccanismo che non produce l’effetto smette di ' +
        'essere una spiegazione.',
    },
    {
      kind: 'paragraph',
      text:
        'Neutrale non vuol dire ribassista, e la distanza fra le due cose è tutta nel motivo. Non c’è ' +
        'niente, oggi, che dica che l’oro debba scendere: i tassi calano, il greggio cala, il dollaro è ' +
        'fermo, gli acquisti ufficiali sono al record. C’è invece qualcosa che dice che non si sa perché ' +
        'non salga, e con un’incertezza di quel tipo la cosa onesta è togliere la direzione invece di ' +
        'tenerla con una forza sempre più bassa. Le due letture più lunghe restano dove sono, perché su ' +
        'quegli orizzonti niente si è mosso: la riprezzatura della Fed è intatta e la gamba strutturale ' +
        'della domanda ufficiale si è semmai rafforzata.',
    },
    {
      kind: 'note',
      text:
        'I prezzi alla produzione sono la diffusione dell’ufficio di statistica del lavoro per luglio 2026; ' +
        'le richieste di sussidio sono del dipartimento del Lavoro e si riferiscono alla settimana chiusa ' +
        'l’8 agosto. Il dato sugli acquisti delle banche centrali proviene dal rapporto trimestrale del ' +
        'World Gold Council pubblicato il 30 luglio 2026: le fonti che lo riprendono non concordano sulla ' +
        'variazione annua, che viene indicata sia intorno al 62% sia intorno al 74%, e qui viene quindi ' +
        'scritta come «oltre il 60%». Il controllo ricevuto riporta inoltre una probabilità di rialzo a ' +
        'settembre del 32% e un Brent a 86,72-86,78 dollari: entrambe le cifre non trovano riscontro nelle ' +
        'rilevazioni fatte qui alle 18:35, che danno 35,0% e 88,04 dollari dopo un minimo a 85,87. Sono ' +
        'usati i secondi. Il Brent citato appartiene alla serie che venerdì 7 agosto ha chiuso a 83,55 ' +
        'dollari, mentre le tacche di questo archivio sono fissate sulla serie che ha chiuso a 82,21. Il ' +
        'risultato del collocamento del trentennale non era disponibile al momento della scrittura. I ' +
        'livelli di prezzo servono a rendere verificabile il ragionamento e non sono obiettivi.',
    },
  ],
};
