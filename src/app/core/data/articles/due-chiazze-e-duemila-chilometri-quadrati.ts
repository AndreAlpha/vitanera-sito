import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const dueChiazzeEDuemilaChilometriQuadrati: Article = {
  slug: 'due-chiazze-e-duemila-chilometri-quadrati',
  categories: ['assicurazioni-marittime', 'rotte-e-approvvigionamento', 'medio-oriente', 'oro'],
  title: 'Due chiazze e duemila chilometri quadrati, senza un barile in meno',
  kicker: 'Assicurazioni marittime · Danni senza perdita di offerta',
  dek:
    'Reuters documenta due nuove chiazze di petrolio nel Golfo e un enorme sversamento al largo ' +
    'dell’Oman, con le tensioni che ostacolano le operazioni di bonifica. Non è uno shock dell’offerta e ' +
    'non cambia il bias: cambia quanto costa, e se è ancora possibile, operare su quelle rotte.',
  publishedAt: '2026-08-15T11:50:00+02:00',
  author: AUTHOR,
  readingMinutes: 5,
  tags: ['Sversamenti', 'Minoan Pioneer', 'Qeshm', 'Rischio bellico', 'Bonifica'],
  instruments: ['XAU/USD', 'Brent', 'WTI'],
  horizons: ['breve', 'medio'],
  certainty: 'media',
  certaintyNote:
    'Alta sull’esistenza dei tre episodi, documentati da Reuters e uno dei tre misurato su immagini ' +
    'satellitari. Media sui numeri e sulle attribuzioni, che sono stime e non rilevazioni: i 2.000 ' +
    'chilometri quadrati sono un’estimazione da satellite, e il danno alla Minoan Pioneer è ricondotto a ' +
    'un attacco descritto come sospetto e non accertato. Bassa sull’impatto finanziario, per una ragione ' +
    'dichiarata: nessuno ha quantificato un barile perduto, e i mercati sono chiusi.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'medio',
    regime:
      'Sull’arco dei giorni la lettura non si muove e riceve una gamba in più, di natura lenta: il costo ' +
      'operativo delle rotte del Golfo sale senza che l’offerta di greggio si riduca in modo misurabile. ' +
      'È marginalmente favorevole al metallo come premio geopolitico, e non di più: un premio che si ' +
      'forma su un danno senza barili si sgonfia appena il danno smette di fare notizia. Diventerebbe ' +
      'un’altra cosa se dagli incidenti nascessero limitazioni formali alla navigazione, che è il modo in ' +
      'cui un problema ambientale si trasforma in un vincolo di offerta.',
  },
  takeaways: [
    'Reuters documenta due nuove grandi chiazze di petrolio nel Golfo: una vicino all’isola iraniana di Qeshm, collegata alla Minoan Pioneer, nave danneggiata in quello che viene descritto come un sospetto attacco iraniano, e una seconda vicino a Sirri Island.',
    'Separatamente, al largo dell’Oman la petroliera Caroline Bezengi, che trasportava greggio russo, si è arenata provocando uno sversamento stimato tramite immagini satellitari in circa 2.000 chilometri quadrati.',
    'Non è uno shock dell’offerta: nessuna perdita di milioni di barili al giorno è stata quantificata, e su questa scala un episodio senza barili contati non è paragonabile alla chiusura dello Stretto.',
    'Quello che sale è il costo operativo delle rotte: navigazione già quasi paralizzata, attacchi alle navi e ora incidenti ambientali che complicano recupero, assicurazioni e logistica. Reuters segnala che le tensioni stanno già ostacolando le bonifiche.',
    'Essendo sabato non esiste una reazione liquida da valutare: gli ultimi riferimenti restano i settlement di venerdì, con Brent a 88,60 dollari e WTI a 82,40.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Due nuove chiazze di petrolio nel Golfo e sversamento al largo dell’Oman: operazioni di bonifica ostacolate dalle tensioni',
      at: '15 agosto 2026',
    },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'La crisi del Golfo comincia a lasciare tracce fisiche, e sono grandi. Nel giro di poche ore ' +
        'Reuters documenta due nuove chiazze di petrolio dentro il Golfo e un enorme sversamento al largo ' +
        'dell’Oman, aggiungendo che le tensioni geopolitiche stanno rendendo più difficili anche le ' +
        'operazioni di recupero. È una conseguenza concreta e nuova, e va segnalata; ma il modo giusto di ' +
        'contarla non è quello che la sua dimensione suggerisce.',
    },
    {
      kind: 'heading',
      text: 'I tre episodi, e dove sono',
      anchor: 'i-tre-episodi',
    },
    {
      kind: 'stats',
      title: 'Che cosa è stato documentato',
      caption:
        'Le grandezze citate sono stime riportate, non rilevazioni ufficiali; i valori di mercato sono i settlement di venerdì.',
      items: [
        {
          label: 'Chiazza presso Qeshm',
          value: 'collegata alla Minoan Pioneer',
          tone: 'warn',
          note: 'La nave era stata danneggiata in quello che Reuters descrive come un sospetto attacco iraniano: l’attribuzione resta presuntiva',
        },
        {
          label: 'Chiazza presso Sirri Island',
          value: 'individuata',
          tone: 'warn',
          note: 'Secondo episodio dentro il Golfo, senza origine dichiarata al momento della pubblicazione',
        },
        {
          label: 'Sversamento al largo dell’Oman',
          value: '≈ 2.000 km²',
          tone: 'bear',
          note: 'La petroliera Caroline Bezengi, con greggio russo a bordo, si è arenata: l’estensione è stimata su immagini satellitari',
        },
        {
          label: 'Perdita di offerta quantificata',
          value: 'nessuna',
          tone: 'bull',
          note: 'Nessun operatore o autorità ha dichiarato barili al giorno in meno: è la misura che deciderebbe la categoria dell’episodio',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Perché non è uno shock dell’offerta',
      anchor: 'non-e-uno-shock',
    },
    {
      kind: 'paragraph',
      text:
        'Questo archivio applica agli attacchi alle infrastrutture una domanda sola, e conviene applicarla ' +
        'anche qui: quanta capacità toglie al mercato. È il metro che ha permesso di distinguere Jazan, ' +
        'ferma da fine luglio e quindi già fuori dal conto, da Sheskharis, dove i carichi sono stati ' +
        'sospesi davvero. Applicato agli sversamenti, quel metro dà una risposta netta: nessuno ha ' +
        'quantificato barili perduti, quindi non c’è un evento di offerta. Un metro che dà solo risposte ' +
        'allarmanti non è un metro, e vale la pena usarlo anche quando il fatto è vistoso.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Quello che sale è un’altra grandezza',
      text:
        'Non la scarsità, ma il costo di operare. Le rotte del Golfo hanno già un vincolo assicurativo che ' +
        'questo archivio segue da fine luglio: la clausola del mercato di Londra che fa decadere la ' +
        'copertura contro il rischio di guerra a chi paga un pedaggio per il transito, in mezzo a un ' +
        'negoziato in cui l’Iran ha chiesto il 5-7% del valore del carico e l’Oman ha discusso di circa il ' +
        '3%. A quel vincolo si aggiungono ora tre incidenti ambientali su acque dove il recupero richiede ' +
        'navi, autorizzazioni e settimane, e dove Reuters riferisce che le tensioni ostacolano già le ' +
        'bonifiche. Una rotta può chiudersi per via assicurativa senza che nessuno la blocchi: è il modo ' +
        'meno visibile e più duraturo di tenere ferme le navi, e sopravvive agli annunci di distensione.',
    },
    {
      kind: 'heading',
      text: 'Il canale che resta aperto',
      anchor: 'il-canale-aperto',
    },
    {
      kind: 'paragraph',
      text:
        'Per l’oro la lettura è marginalmente favorevole e non abbastanza da cambiare il quadro: un premio ' +
        'geopolitico in più, appoggiato su un rischio operativo e non su una scarsità misurata. Diventerebbe ' +
        'importante per due vie sole, e sono entrambe verificabili. La prima: se dagli incidenti nascessero ' +
        'limitazioni formali alla navigazione — un’area di esclusione, una prescrizione delle autorità ' +
        'costiere — perché a quel punto l’ambiente diventerebbe un vincolo di transito. La seconda: se il ' +
        'Brent ripartisse sopra i 90-95 dollari, perché allora tornerebbe forte il canale che questa ' +
        'settimana ha lavorato contro il metallo, cioè inflazione attesa, rendimenti americani e costo di ' +
        'tenere un’attività senza cedole.',
    },
    {
      kind: 'note',
      text:
        'Essendo sabato non esiste una reazione liquida affidabile di oro, dollaro, Treasury o petrolio da ' +
        'confrontare con queste notizie: gli ultimi riferimenti restano i settlement di venerdì, Brent a ' +
        '88,60 dollari — 88,52 su un’altra rilevazione — e WTI a 82,40. I livelli citati servono a rendere ' +
        'verificabile il ragionamento e non sono obiettivi affidabili.',
    },
    {
      kind: 'paragraph',
      text:
        'Va detto infine che cosa non è cambiato, perché in una giornata senza mercati è l’altra metà ' +
        'dell’informazione: non emergono nuovi dati macroeconomici americani, nessuna decisione della ' +
        'Federal Reserve, nessuna asta del Tesoro e nessun acquisto ufficiale di oro successivo a quelli ' +
        'già comunicati. Il quadro dei giorni resta quello di venerdì, e questa notizia gli si appoggia ' +
        'accanto invece di spostarlo.',
    },
  ],
  invalidation: [
    'Un provvedimento delle autorità costiere, dell’Oman o dell’Iran, oppure dell’Organizzazione marittima internazionale, che introduca un’area di esclusione o una restrizione alla navigazione intorno a Qeshm o a Sirri entro venerdì prossimo: farebbe passare gli incidenti da rischio operativo a vincolo di transito, e la forza di questa lettura andrebbe alzata.',
    'Una stima quantificata dei barili perduti dalla Minoan Pioneer o dalla Caroline Bezengi, pubblicata da un armatore o da un’autorità: collocherebbe l’episodio nella categoria dello shock di offerta, che questa analisi esclude esplicitamente.',
    'Un aumento dei premi per il rischio bellico sulle rotte del Golfo dichiarato dal mercato assicurativo — una nuova circolare del Lloyd’s Market Association o un rialzo delle tariffe riportato da un intermediario: sarebbe il primo prezzo sul meccanismo descritto qui, e la lettura passerebbe da deduzione a misura.',
    'Un Brent che chiude sopra i 95 dollari entro venerdì prossimo con il decennale sopra il 4,70%: il canale dell’inflazione prevarrebbe su quello del rifugio e la direzione andrebbe rivista al ribasso.',
    'Un oro che chiude la settimana sotto i 4.351,07 dollari della chiusura di giovedì 13 agosto: toglierebbe il fondamento residuo per tenere la direzione sopra il neutrale.',
  ],
  nextEvent: {
    when: 'Settimana del 17 agosto',
    title: 'Le tariffe di rischio bellico sulle rotte del Golfo',
    detail:
      'È il posto dove il meccanismo descritto qui diventa un numero. Il canale da guardare non è la ' +
      'cronaca delle bonifiche ma il mercato assicurativo: una revisione della clausola sul rischio di ' +
      'guerra, o un rialzo dichiarato dei premi per il transito, dice quanto costa davvero muovere un ' +
      'carico in quelle acque. Finché quel prezzo non compare, gli sversamenti restano un fatto grave ' +
      'senza una grandezza finanziaria accanto.',
  },
};
