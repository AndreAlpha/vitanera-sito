import { GlossaryEntry } from '../models/article.model';

/**
 * Glossario divulgativo. Le definizioni hanno finalità didattiche e semplificano
 * volutamente concetti complessi: non sostituiscono fonti normative, manuali
 * accademici o il parere di un professionista abilitato.
 */
export const GLOSSARY: readonly GlossaryEntry[] = [
  {
    term: 'XAU/USD',
    letter: 'X',
    definition:
      'Prezzo di un’oncia troy d’oro espresso in dollari statunitensi sul mercato a pronti.',
    why: 'È il riferimento centrale del sito: risente insieme di politica monetaria, dollaro, rendimenti reali e rischio geopolitico.',
    related: ['Rendimento reale', 'DXY'],
  },
  {
    term: 'FOMC',
    letter: 'F',
    definition:
      'Federal Open Market Committee, l’organo della Federal Reserve che decide l’orientamento della politica monetaria statunitense.',
    why: 'Le sue decisioni e il grado di consenso interno incidono direttamente sulle aspettative di tasso e quindi sull’oro.',
    related: ['Dissenso', 'Fed funds'],
  },
  {
    term: 'Fed funds',
    letter: 'F',
    definition:
      'Intervallo obiettivo del tasso a cui le banche si prestano riserve overnight; è lo strumento principale di politica monetaria della Fed.',
    why: 'Definisce il costo del denaro di riferimento e orienta l’intera struttura dei rendimenti.',
  },
  {
    term: 'Dissenso',
    letter: 'D',
    definition:
      'Voto contrario di uno o più membri del comitato rispetto alla decisione approvata; viene reso pubblico insieme all’esito.',
    why: 'Un numero elevato di dissensi segnala una divisione interna e rende meno prevedibili le decisioni successive.',
  },
  {
    term: 'PCE',
    letter: 'P',
    definition:
      'Personal Consumption Expenditures price index, l’indice dei prezzi legato alla spesa per consumi delle famiglie statunitensi.',
    why: 'È l’indicatore di inflazione preferito dalla Federal Reserve, quindi ha un peso elevato nelle aspettative di tasso.',
    related: ['PCE core'],
  },
  {
    term: 'PCE core',
    letter: 'P',
    definition:
      'Versione del PCE che esclude le componenti alimentari ed energetiche, più volatili.',
    why: 'Viene considerata una misura più stabile della tendenza di fondo dei prezzi.',
  },
  {
    term: 'DXY',
    letter: 'D',
    definition:
      'Indice che misura il valore del dollaro statunitense rispetto a un paniere di valute principali.',
    why: 'Un dollaro più forte tende a rendere l’oro più costoso per chi detiene altre valute, con effetto in genere sfavorevole.',
  },
  {
    term: 'Rendimento reale',
    letter: 'R',
    definition: 'Rendimento nominale di un titolo al netto dell’inflazione attesa.',
    why: 'È spesso considerato il costo opportunità di detenere oro, che non produce cedole né dividendi.',
    related: ['Treasury', 'XAU/USD'],
  },
  {
    term: 'Treasury',
    letter: 'T',
    definition:
      'Titoli di Stato emessi dal Tesoro statunitense, distinti per scadenza (2, 10, 30 anni e altre).',
    why: 'Il loro rendimento è il termine di paragone per gran parte delle attività finanziarie globali.',
  },
  {
    term: 'Curva dei rendimenti',
    letter: 'C',
    definition:
      'Rappresentazione dei rendimenti dei titoli di Stato in funzione della loro scadenza.',
    why: 'Movimenti diversi fra parte breve e parte lunga segnalano aspettative differenti su politica monetaria, inflazione e rischio fiscale.',
  },
  {
    term: 'Premio per il rischio fiscale',
    letter: 'P',
    definition:
      'Rendimento aggiuntivo richiesto dagli investitori per detenere debito pubblico percepito come più rischioso sul piano dei conti pubblici.',
    why: 'Può mantenere elevati i rendimenti a lunga scadenza anche quando le aspettative sui tassi a breve scendono.',
  },
  {
    term: 'Premio di rischio geopolitico',
    letter: 'P',
    definition:
      'Parte del prezzo che riflette la possibilità di un evento politico o militare, non un fatto già avvenuto.',
    why: 'Si forma su notizie ancora da confermare e si riassorbe in fretta se l’evento non si realizza: è la ragione per cui un rialzo su indiscrezioni vale meno di un rialzo su un fatto.',
    related: ['Bene rifugio', 'Stretto di Hormuz'],
  },
  {
    term: 'Brent',
    letter: 'B',
    definition:
      'Qualità di greggio del Mare del Nord usata come riferimento per gran parte dei mercati petroliferi.',
    why: 'Il suo prezzo influisce sulle aspettative di inflazione e, indirettamente, sulle scelte delle banche centrali.',
  },
  {
    term: 'WTI',
    letter: 'W',
    definition: 'West Texas Intermediate, il greggio di riferimento del mercato statunitense.',
    why: 'Confrontato con il Brent, aiuta a distinguere tensioni globali da dinamiche interne agli Stati Uniti.',
  },
  {
    term: 'OPEC+',
    letter: 'O',
    definition:
      'Gruppo formato dai paesi dell’Organizzazione dei paesi esportatori di petrolio e da altri produttori, fra cui la Russia, che concordano quote di produzione comuni.',
    why: 'Le quote fissano l’offerta consentita, non quella effettiva: guerre e interruzioni possono far crescere la produzione reale molto meno di quanto la decisione lasci prevedere.',
    related: ['Brent', 'WTI'],
  },
  {
    term: 'Stretto di Hormuz',
    letter: 'S',
    definition:
      'Passaggio marittimo tra il Golfo Persico e il Golfo dell’Oman, tra i più rilevanti per il transito di greggio.',
    why: 'Un’interruzione dei transiti trasformerebbe un premio al rischio reversibile in uno shock di offerta.',
  },
  {
    term: 'Bab el-Mandeb',
    letter: 'B',
    definition:
      'Stretto che collega il Mar Rosso al Golfo di Aden, snodo delle rotte tra Asia ed Europa.',
    why: 'È un secondo collo di bottiglia sorvegliato quando aumenta la tensione nell’area.',
  },
  {
    term: 'Bene rifugio',
    letter: 'B',
    definition:
      'Attività verso cui gli investitori tendono a spostarsi in fasi di incertezza o stress dei mercati.',
    why: 'L’oro è storicamente considerato tale, ma il comportamento non è né automatico né garantito.',
  },
  {
    term: 'Acquisti delle banche centrali',
    letter: 'A',
    definition:
      'Oro comprato dalle autorità monetarie per le proprie riserve ufficiali, misurato in tonnellate e rilevato a cadenza trimestrale da stime che vengono spesso riviste.',
    why: 'È una domanda che non dipende dal prezzo di breve periodo: sostiene il mercato nel medio termine ma non muove la singola seduta, e le revisioni possono cambiare il quadro a posteriori.',
    related: ['Bene rifugio'],
  },
  {
    term: 'Divergenza',
    letter: 'D',
    definition:
      'Situazione in cui due grandezze storicamente correlate si muovono in modo incoerente rispetto alla relazione attesa.',
    why: 'Può segnalare il prevalere di una forza diversa da quella dominante, ma può anche rivelarsi temporanea.',
  },
  {
    term: 'Regime di mercato',
    letter: 'R',
    definition:
      'Insieme di condizioni prevalenti — monetarie, di rischio, di liquidità — che determinano quali relazioni fra mercati risultano dominanti.',
    why: 'Riconoscere il regime aiuta a interpretare i dati, ma un regime può cambiare rapidamente e senza preavviso.',
  },
  {
    term: 'Invalidazione',
    letter: 'I',
    definition:
      'Insieme delle condizioni che, se si verificassero, renderebbero non più sostenibile una lettura proposta.',
    why: 'Esplicitarla è un esercizio di onestà intellettuale: rende verificabile ciò che si è scritto.',
  },
  {
    term: 'Volatilità',
    letter: 'V',
    definition:
      'Misura dell’ampiezza e della rapidità delle oscillazioni di prezzo in un dato periodo.',
    why: 'Una volatilità elevata amplifica sia i guadagni sia le perdite e rende meno affidabile qualsiasi lettura direzionale.',
  },
];
