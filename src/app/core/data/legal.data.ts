import { LegalDocument } from '../models/article.model';

/**
 * Testi delle pagine di trasparenza.
 *
 * Sono redatti in forma divulgativa e non costituiscono un parere legale: per
 * un adeguamento normativo puntuale è opportuna la revisione di un
 * professionista abilitato.
 */

const avvertenze: LegalDocument = {
  slug: 'avvertenze',
  title: 'Avvertenze e informativa sui rischi',
  intro:
    'Questa pagina raccoglie, in forma estesa, tutte le avvertenze che compaiono sinteticamente nel resto del sito. ' +
    'La consultazione di Vitanera implica la presa visione e l’accettazione integrale di quanto segue.',
  updatedAt: '30 luglio 2026',
  sections: [
    {
      heading: '1. Natura del sito',
      paragraphs: [
        'Vitanera è un progetto personale e indipendente, a carattere divulgativo, dedicato allo studio della macroeconomia, delle decisioni di politica monetaria, del contesto geopolitico e del mercato dell’oro.',
        'Il sito non è una testata giornalistica ai sensi della Legge 7 marzo 2001 n. 62. Non è registrato presso alcun tribunale, non ha un direttore responsabile iscritto all’albo dei giornalisti, non è iscritto al Registro degli Operatori di Comunicazione (ROC) e non riceve alcun contributo pubblico all’editoria.',
        'I contenuti sono pubblicati senza alcuna periodicità prestabilita e sono aggiornati in modo del tutto discrezionale. Per queste ragioni il sito non può essere considerato un prodotto editoriale ai sensi della normativa vigente.',
      ],
    },
    {
      heading: '2. Assenza di consulenza finanziaria',
      paragraphs: [
        'Nessun contenuto pubblicato costituisce consulenza finanziaria, consulenza in materia di investimenti, gestione individuale di portafogli, raccomandazione personalizzata o generale di investimento, né ricerca in materia di investimenti ai sensi del Regolamento (UE) n. 596/2014 (Market Abuse Regulation) e del Regolamento delegato (UE) 2016/958.',
        'I contenuti non costituiscono sollecitazione al pubblico risparmio, offerta al pubblico di prodotti finanziari, promozione o collocamento di strumenti finanziari, né invito a compiere operazioni di acquisto o di vendita.',
        'Riferimenti a bias, scenari, orizzonti temporali, livelli di prezzo, probabilità o “implicazioni” hanno finalità esclusivamente descrittive e didattiche. Non sono segnali operativi e non devono essere utilizzati come tali.',
      ],
    },
    {
      heading: '3. Qualifica dell’autore',
      paragraphs: [
        'L’autore non è un consulente finanziario abilitato, non è iscritto all’Albo unico dei consulenti finanziari tenuto dall’Organismo di vigilanza e tenuta dell’albo unico dei Consulenti Finanziari (OCF) e non è un soggetto vigilato da CONSOB, Banca d’Italia, IVASS o da altra autorità di vigilanza italiana o estera.',
        'L’autore non presta, in nessuna forma, servizi o attività di investimento riservati ai sensi del D.lgs. 58/1998 (TUF).',
        'La semplice consultazione del sito o qualsiasi altra interazione con i suoi contenuti non instaura alcun rapporto di consulenza, mandato, incarico professionale o obbligo di assistenza.',
      ],
    },
    {
      heading: '4. Rischi degli strumenti citati',
      paragraphs: [
        'Gli strumenti richiamati nelle analisi — oro e metalli preziosi, valute, indici azionari, titoli di Stato, materie prime energetiche, strumenti derivati, CFD ed ETP a leva — comportano un rischio elevato di perdita del capitale.',
        'Nel caso di strumenti a leva finanziaria le perdite possono superare il capitale inizialmente investito. Una quota significativa dei conti al dettaglio che operano in CFD registra perdite.',
      ],
      bullets: [
        'I risultati passati non sono indicativi dei risultati futuri.',
        'Nessuno scenario descritto costituisce una previsione affidabile: gli scenari sono ipotesi condizionate che possono non realizzarsi.',
        'La volatilità può ampliarsi rapidamente e rendere inefficaci ordini, stop o piani di gestione del rischio.',
        'Il rischio di cambio, il rischio di liquidità e il rischio di controparte possono incidere in misura rilevante sul risultato finale.',
      ],
    },
    {
      heading: '5. Qualità e tempestività dei dati',
      paragraphs: [
        'I dati numerici riportati nel sito provengono da fonti pubbliche ritenute attendibili al momento della redazione, ma non sono verificati da un fornitore professionale di dati di mercato.',
        'I valori indicati non sono quotazioni in tempo reale: possono essere ritardati, arrotondati, imprecisi, riferiti a sedi di negoziazione diverse o semplicemente superati. Non sono forniti a fini operativi.',
        'Non è fornita alcuna garanzia, espressa o implicita, circa l’accuratezza, la completezza, l’aggiornamento o l’idoneità a uno scopo specifico delle informazioni pubblicate.',
      ],
    },
    {
      heading: '6. Limitazione di responsabilità',
      paragraphs: [
        'L’autore declina ogni responsabilità per danni diretti, indiretti, incidentali, speciali o consequenziali — incluse, a titolo esemplificativo, perdite economiche, mancati guadagni e perdite di opportunità — derivanti dall’uso, dall’interpretazione o dall’affidamento riposto nei contenuti del sito.',
        'Nessuna responsabilità è assunta per errori materiali, omissioni, refusi, interruzioni del servizio, indisponibilità temporanea del sito, malfunzionamenti tecnici o contenuti di siti terzi eventualmente collegati.',
        'Ogni decisione di investimento è assunta dal lettore in piena autonomia, sotto la propria esclusiva responsabilità e a proprio rischio. Prima di operare è opportuno rivolgersi a un consulente finanziario abilitato e valutare attentamente la propria situazione patrimoniale, i propri obiettivi, la propria esperienza e la propria tolleranza al rischio.',
      ],
    },
    {
      heading: '7. Conflitti di interesse',
      paragraphs: [
        'L’autore può detenere, direttamente o indirettamente, posizioni sugli strumenti finanziari citati e può aprirle, modificarle o chiuderle in qualsiasi momento, anche in senso contrario a quanto descritto nelle analisi, senza alcun obbligo di comunicazione preventiva o successiva.',
        'Il sito non ospita pubblicità di intermediari finanziari, non contiene link di affiliazione a broker e non riceve compensi per la promozione di prodotti o servizi di investimento. Qualora ciò dovesse cambiare, la circostanza sarà indicata in modo esplicito.',
      ],
    },
    {
      heading: '8. Destinatari e ambito territoriale',
      paragraphs: [
        'I contenuti sono redatti in lingua italiana e si rivolgono a un pubblico generico interessato ai temi trattati. Non sono destinati a soggetti residenti in giurisdizioni in cui la pubblicazione o la consultazione di tali contenuti sia soggetta a restrizioni o autorizzazioni.',
        'Il sito non si rivolge a minori di diciotto anni.',
      ],
    },
    {
      heading: '9. Proprietà intellettuale',
      paragraphs: [
        'Testi, analisi, elaborazioni, struttura del sito e materiali grafici sono di proprietà dell’autore e tutelati dalla normativa sul diritto d’autore.',
        'È consentita la citazione di brevi estratti per finalità di commento, critica o studio, purché accompagnata dall’indicazione della fonte e da un collegamento alla pagina originale. È vietata la riproduzione integrale, la traduzione, la ripubblicazione su altre piattaforme e ogni uso commerciale non espressamente autorizzato.',
      ],
    },
    {
      heading: '10. Modifiche',
      paragraphs: [
        'I contenuti del sito e le presenti avvertenze possono essere modificati, integrati o rimossi in qualsiasi momento e senza preavviso. Fa fede la versione pubblicata al momento della consultazione.',
      ],
    },
  ],
};

const noteLegali: LegalDocument = {
  slug: 'note-legali',
  title: 'Note legali e condizioni d’uso',
  intro:
    'Condizioni che regolano l’accesso e l’utilizzo del sito. L’accesso comporta l’accettazione integrale di quanto ' +
    'segue e delle avvertenze sui rischi.',
  updatedAt: '30 luglio 2026',
  sections: [
    {
      heading: 'Titolarità',
      paragraphs: [
        'Vitanera è un sito personale gestito a titolo individuale, senza scopo di lucro e senza attività commerciale. Non costituisce impresa editoriale né fornitore di servizi di investimento.',
        'Il sito non pubblica recapiti né moduli di contatto e non prevede canali di corrispondenza con i lettori. Le inesattezze eventualmente riscontrate vengono corrette in occasione degli aggiornamenti dei contenuti, con indicazione dell’intervento.',
      ],
    },
    {
      heading: 'Assenza di registrazione come testata giornalistica',
      paragraphs: [
        'Il sito non è registrato presso alcun tribunale e non è una testata giornalistica ai sensi della L. 62/2001. Non essendo un prodotto editoriale, non è soggetto agli obblighi previsti da tale normativa né alla disciplina sulla rettifica prevista per la stampa periodica.',
        'L’aggiornamento avviene senza periodicità determinata e può essere sospeso in qualsiasi momento.',
      ],
    },
    {
      heading: 'Uso consentito',
      bullets: [
        'È consentita la consultazione personale e non commerciale dei contenuti.',
        'È consentita la citazione di estratti con indicazione della fonte e collegamento alla pagina originale.',
        'Non è consentito l’uso automatizzato massivo, lo scraping sistematico o la reimpressione integrale dei testi.',
        'Non è consentito presentare i contenuti come raccomandazioni di investimento, proprie o altrui.',
        'Non è consentito rimuovere, oscurare o alterare le avvertenze legali associate ai contenuti.',
      ],
    },
    {
      heading: 'Collegamenti a siti terzi',
      paragraphs: [
        'Eventuali collegamenti a risorse esterne sono forniti a puro titolo informativo. L’autore non esercita alcun controllo su tali risorse e non risponde dei loro contenuti, delle loro politiche sulla riservatezza né della loro disponibilità.',
      ],
    },
    {
      heading: 'Disponibilità del servizio',
      paragraphs: [
        'Il sito è offerto “così com’è”, senza garanzia di continuità, assenza di errori o compatibilità con specifici dispositivi e browser. L’autore può modificarne struttura e contenuti, sospenderne l’accesso o interromperne definitivamente la pubblicazione senza preavviso.',
      ],
    },
    {
      heading: 'Legge applicabile e foro competente',
      paragraphs: [
        'Il rapporto tra l’autore e l’utente è regolato dalla legge italiana. Per ogni controversia relativa all’interpretazione, all’esecuzione o alla validità delle presenti condizioni è competente il foro del luogo di residenza o domicilio dell’autore, fatte salve le disposizioni inderogabili a tutela del consumatore.',
      ],
    },
    {
      heading: 'Clausola di salvaguardia',
      paragraphs: [
        'L’eventuale invalidità o inefficacia di una singola clausola non pregiudica la validità delle restanti disposizioni, che continuano ad applicarsi integralmente.',
      ],
    },
  ],
};

const privacy: LegalDocument = {
  slug: 'privacy',
  title: 'Privacy e cookie',
  intro:
    'Informativa sul trattamento dei dati personali e sull’uso delle tecnologie di memorizzazione, redatta con ' +
    'riferimento al Regolamento (UE) 2016/679 (GDPR) e al D.lgs. 196/2003 come modificato dal D.lgs. 101/2018.',
  updatedAt: '30 luglio 2026',
  sections: [
    {
      heading: 'Principio generale',
      paragraphs: [
        'Vitanera è un sito statico, progettato per raccogliere il minor numero possibile di informazioni. Non richiede registrazione, non prevede aree riservate, non pubblica moduli di contatto e non gestisce profili utente.',
      ],
    },
    {
      heading: 'Dati trattati',
      bullets: [
        'Nessun dato identificativo viene richiesto o raccolto direttamente dal sito.',
        'Non sono utilizzati sistemi di analisi statistica, pixel di tracciamento, strumenti pubblicitari o piattaforme di profilazione.',
        'Il fornitore di hosting può registrare, per finalità tecniche e di sicurezza, log di accesso contenenti indirizzo IP, data e ora della richiesta e tipo di browser; tali registrazioni sono gestite dal fornitore secondo le proprie politiche.',
        'Non essendo pubblicato alcun recapito né modulo di contatto, il sito non riceve comunicazioni dai lettori e non tratta i dati che vi sarebbero contenuti.',
      ],
    },
    {
      heading: 'Cookie e memoria locale',
      paragraphs: [
        'Il sito non installa cookie di profilazione, cookie pubblicitari o cookie di terze parti a fini di marketing. Non è pertanto richiesto alcun banner di consenso ai sensi della normativa sui cookie.',
        'Viene utilizzata unicamente la memoria locale del browser (localStorage) per registrare la presa visione delle avvertenze e non riproporre la relativa finestra a ogni visita. Si tratta di uno strumento tecnico, non identificativo, cancellabile in qualsiasi momento svuotando i dati del sito dalle impostazioni del browser.',
      ],
    },
    {
      heading: 'Risorse esterne',
      paragraphs: [
        'Il sito richiama i caratteri tipografici da un servizio esterno di distribuzione di font. Tale richiesta comporta la comunicazione dell’indirizzo IP al fornitore del servizio, che opera come titolare autonomo del trattamento secondo la propria informativa. Non vengono trasmessi altri dati e non viene impostato alcun cookie da parte del sito.',
      ],
    },
    {
      heading: 'Diritti dell’interessato',
      paragraphs: [
        'Il sito non raccoglie dati personali e non conserva quindi informazioni su cui esercitare i diritti previsti dagli articoli da 15 a 22 del GDPR — accesso, rettifica, cancellazione, limitazione, opposizione e portabilità.',
        'Per i soli log tecnici di accesso, trattati dal fornitore di hosting come titolare autonomo, i diritti vanno esercitati nei confronti del fornitore secondo la sua informativa. È in ogni caso riconosciuto il diritto di proporre reclamo all’Autorità Garante per la protezione dei dati personali.',
      ],
    },
    {
      heading: 'Conservazione e sicurezza',
      paragraphs: [
        'Non essendo previsti canali di corrispondenza né raccolta di dati, il sito non conserva informazioni personali. Sono comunque adottate misure ragionevoli di sicurezza, pur non potendo garantire l’assoluta inviolabilità di alcuna trasmissione via Internet.',
      ],
    },
    {
      heading: 'Aggiornamenti dell’informativa',
      paragraphs: [
        'La presente informativa può essere aggiornata per adeguarla a modifiche tecniche o normative. La data di ultimo aggiornamento è indicata in testa alla pagina.',
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS: readonly LegalDocument[] = [avvertenze, noteLegali, privacy];
