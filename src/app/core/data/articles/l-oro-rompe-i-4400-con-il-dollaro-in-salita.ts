/**
 * l-oro-rompe-i-4400-con-il-dollaro-in-salita
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const oroRompe4400: Article = {
  slug: 'l-oro-rompe-i-4400-con-il-dollaro-in-salita',
  categories: ['correlazioni', 'oro', 'obbligazioni', 'usa'],
  title: 'L’oro rompe i 4.400 con il dollaro in salita',
  kicker: 'Correlazioni · Un livello rotto dal lato sbagliato',
  dek:
    'Nella sessione asiatica XAU/USD tocca 4.432,74 dollari, massimo dal 5 giugno, dopo aver superato i ' +
    '4.372 che questo archivio aveva scritto come condizione. Ma la condizione chiedeva anche un dollaro ' +
    'più debole, e il dollaro è salito: il livello è caduto dal lato che nessuno aveva previsto.',
  publishedAt: '2026-08-11T09:45:00+02:00',
  author: AUTHOR,
  readingMinutes: 7,
  tags: ['Massimi', 'Soglie', 'RBA', 'Ricoperture', 'Liquidita asiatica'],
  instruments: ['XAU/USD', 'Brent', 'Treasury', 'DXY'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'bassa',
    regime:
      'Il metallo sale con tutti e quattro i venti contrari accesi insieme, ed è la prima volta in dieci ' +
      'giorni. Dai 4.356 di ieri sera XAU/USD è arrivato a 4.411,77 alle 2:30 e poi a 4.432,74 con più 1%, ' +
      'massimo dal 5 giugno e terza seduta consecutiva di rialzo, prima di restituire una trentina di ' +
      'dollari a 4.402,52. Nella stessa finestra il Brent è salito a 88,09, il decennale ha superato il ' +
      '4,70% toccando 4,716%, il Dollar Index è salito a 99,80 e la probabilità di un rialzo a settembre ' +
      'resta intorno alla metà. Reuters attribuisce il movimento a flussi di rifugio, ricoperture di ' +
      'posizioni corte e acquisti di chi aveva perso il rimbalzo dai 4.000. La direzione torna al rialzo ' +
      'perché un livello dichiarato è stato rotto e perché è stato rotto contro il dollaro invece che ' +
      'grazie al dollaro; la forza resta bassa perché trenta dollari sono stati restituiti dentro la ' +
      'stessa sessione, la liquidità asiatica è sottile con il mercato giapponese chiuso, e l’indice dei ' +
      'prezzi arriva fra poche ore.',
    horizon: 'breve',
  },
  certainty: 'media',
  certaintyNote:
    'Alta sui prezzi dell’oro, che sono rilevazioni Reuters con orario e percentuale, e sulla decisione ' +
    'della Reserve Bank of Australia, che è un atto pubblicato. Media sul resto della fotografia, e la ' +
    'ragione è tecnica ma cambia il peso di ciò che si può concludere: il mercato a pronti dei Treasury è ' +
    'chiuso per una festività giapponese, quindi i rendimenti citati sono l’ultima rilevazione disponibile ' +
    'e non un prezzo di adesso, e i futures scendono soltanto leggermente. Bassa sulla durata: un ' +
    'movimento costruito anche su ricoperture di posizioni corte in una sessione a liquidità ridotta è, ' +
    'per costruzione, il tipo di movimento che si verifica soltanto alla riapertura di un mercato pieno.',
  takeaways: [
    'Nella sessione asiatica dell’11 agosto XAU/USD è passato per 4.411,77 dollari alle 2:30 con più 0,5%, poi 4.409,81, poi 4.432,74 con più 1%: è il massimo dal 5 giugno e la terza seduta consecutiva di rialzo. I futures statunitensi sono arrivati a 4.492,60, più 1,7%.',
    'Il livello superato non è psicologico ma dichiarato: 4.372 dollari, i massimi di venerdì, compaiono come condizione in due analisi ancora aperte di questo archivio. La condizione però chiedeva anche un dollaro sotto 99,4, e il Dollar Index è invece salito a 99,80.',
    'Nella stessa finestra tutti i venti contrari erano accesi: Brent a 88,09 dollari e WTI a 82,52, massimi dal 31 luglio; decennale statunitense fino a circa 4,712% con un massimo di 4,716%, quindi sopra la soglia del 4,70%; biennale a 4,239%.',
    'Reuters attribuisce il movimento a un ritorno dei flussi verso il bene rifugio, a ricoperture di posizioni corte e ad acquisti di chi aveva perso il rimbalzo dai 4.000 dollari, con il rapporto occupazionale debole che continua a limitare le attese su una Fed più aggressiva.',
    'La Reserve Bank of Australia ha lasciato il tasso di riferimento al 4,35% con un tono prudente: inflazione elevata ancora per qualche tempo, rischi orientati verso l’alto, disponibilità a fare quanto necessario. È la seconda banca centrale del G10 in due giorni a dire che il rischio sui prezzi è al rialzo.',
  ],
  invalidation: [
    'Un oro spot che rientra sotto i 4.372 dollari entro la chiusura di mercoledì: restituirebbe il livello rotto stanotte e direbbe che il movimento era una ricopertura in sessione sottile, non una riprezzatura.',
    'Un oro sotto i 4.300 dollari con il Dollar Index sopra 100 e il biennale sopra il 4,25%: è la combinazione che questo archivio segue da sei giorni come il deterioramento vero, e nessuna delle tre gambe è oggi presente.',
    'Un decennale che si porta sopra il 4,75% mentre l’oro perde i 4.400: sarebbe la trasmissione dello shock energetico ai tassi e poi al metallo, cioè lo scenario che il rialzo di stanotte ha finora smentito.',
    'Un indice dei prezzi mercoledì 12 agosto sopra il 3,4% annuo sul dato principale, o sopra più 0,2% mensile su quello di fondo: riporterebbe il comando al canale americano e renderebbe irrilevante la forza relativa descritta qui.',
    'Una probabilità di rialzo a settembre che rientra sotto il 50% mentre l’oro continua a salire: direbbe che il movimento era una riprezzatura della Fed e non forza relativa del metallo, e toglierebbe il fondamento a questa lettura pur lasciando intatto il prezzo.',
  ],
  nextEvent: {
    when: 'Mercoledì 12 agosto, 14:30 italiane',
    title: 'Indice dei prezzi al consumo statunitense di luglio',
    detail:
      'Arriva con il metallo appena sopra un livello rotto in sessione sottile e con il greggio sopra gli 88 dollari, cioè nella configurazione più carica delle ultime due settimane. Il consenso riportato da Reuters è di più 0,1% mensile sul dato principale e più 0,2% su quello di fondo, con la probabilità di un rialzo a settembre intorno alla metà. Un dato caldo trasformerebbe il petrolio alto in una riprezzatura molto più aggressiva di Fed, biennale e dollaro; un dato tiepido lascerebbe il campo alla forza relativa vista stanotte. Con la diffusione escono anche i Real Earnings; giovedì 13 i prezzi alla produzione.',
  },
  sources: [
    { outlet: 'Reuters' },
    { outlet: 'Reserve Bank of Australia', title: 'Decisione di politica monetaria' },
    { outlet: 'Wall Street Journal' },
    { outlet: 'Bureau of Labor Statistics', title: 'Calendario delle diffusioni' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Ieri sera l’oro chiudeva il controllo a 4.356,79 dollari e questo archivio scriveva che la sua tenuta non era misurabile, perché quel prezzo precedeva il movimento del greggio. La sessione asiatica ha risposto in modo netto: 4.411,77 alle 2:30, poi 4.432,74 con più 1%, massimo dal 5 giugno e terza seduta consecutiva di rialzo, con i futures statunitensi a 4.492,60. Poi una restituzione di una trentina di dollari, a 4.402,52. Nel frattempo il Brent è salito a 88,09, il decennale ha superato il 4,70% e il dollaro è salito. Il metallo è andato su contro tutto.',
    },
    {
      kind: 'stats',
      title: 'La sessione asiatica, per strumento',
      caption:
        'Rilevazioni riferite dalle agenzie in momenti diversi della sessione; il mercato a pronti dei Treasury è chiuso per festività giapponese. Non sono chiusure ufficiali né quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD, massimo',
          value: '4.432,74 $',
          tone: 'bull',
          note: 'Più 1%, massimo dal 5 giugno; poi ritorno a 4.402,52',
        },
        {
          label: 'Livello dichiarato',
          value: '4.372 $',
          tone: 'warn',
          note: 'I massimi di venerdì, scritti come condizione in due analisi ancora aperte',
        },
        {
          label: 'Dollar Index',
          value: '≈ 99,80',
          tone: 'bear',
          note: 'In salita: la condizione ne chiedeva uno sotto 99,4',
        },
        {
          label: 'Treasury 10 anni',
          value: '≈ 4,712%',
          tone: 'bear',
          note: 'Massimo 4,716%: sopra la soglia del 4,70%',
        },
        {
          label: 'Treasury 2 anni',
          value: '4,239%',
          tone: 'warn',
          note: 'Undici millesimi sotto il 4,25% della regola del 5 agosto',
        },
        {
          label: 'Brent',
          value: '88,09 $',
          tone: 'bear',
          note: 'Massimo dal 31 luglio; WTI a 82,52',
        },
        {
          label: 'Tasso RBA',
          value: '4,35%',
          tone: 'bear',
          note: 'Invariato, con rischi sui prezzi dichiarati al rialzo',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Un livello rotto dal lato sbagliato',
      anchor: 'livello-lato-sbagliato',
    },
    {
      kind: 'paragraph',
      text: 'I 4.372 dollari non sono un numero tondo scelto stanotte: sono i massimi di venerdì, e compaiono come condizione di invalidazione in due analisi ancora aperte di questo archivio. In entrambe la condizione è scritta con una congiunzione. Ieri pomeriggio diceva: un oro che torna sopra i 4.372 con il biennale che rientra sotto il 4,21%. Ieri sera diceva: un oro che rompe i 4.372 con il Dollar Index sotto 99,4. In tutti e due i casi il significato dichiarato era lo stesso — se il metallo torna sui massimi mentre dollaro e rendimenti allentano, vuol dire che ha ignorato la riprezzatura della Fed.',
    },
    {
      kind: 'paragraph',
      text: 'Stanotte la prima gamba è caduta con sessanta dollari di margine e la seconda è andata esattamente dall’altra parte: il dollaro è salito a 99,80 invece di scendere sotto 99,4, il biennale è a 4,239% invece che sotto il 4,21%. Le condizioni restano quindi non scattate, ed è corretto registrarle così. Ma il motivo per cui non scattano è più interessante del fatto che non scattino: erano state scritte dando per scontato che il metallo potesse tornare sui massimi soltanto se il dollaro lo aiutava. Ha rotto il livello mentre il dollaro gli remava contro, che è un segnale più forte di quello che la condizione descriveva — e che la condizione, per come è costruita, non può registrare.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Una congiunzione può escludere anche l’esito migliore',
      text: 'Due giorni fa questo archivio ha registrato come lezione che una condizione scritta con una congiunzione vale più di due condizioni separate, perché impedisce di chiamare «parziale» una lettura che ha ragione. Stanotte se ne vede il rovescio: la stessa congiunzione, applicata a una condizione favorevole, esclude il caso in cui la cosa buona succede per una ragione migliore di quella immaginata. La regola non cambia — le soglie si scrivono prima e si rispettano — ma il verso in cui la si applica sì: quando la congiunzione descrive un esito favorevole, va scritta pensando anche a come potrebbe realizzarsi contro le proprie aspettative.',
    },
    {
      kind: 'heading',
      text: 'Quattro venti contrari accesi insieme',
      anchor: 'quattro-venti',
    },
    {
      kind: 'paragraph',
      text: 'Vale la pena elencare che cosa il metallo ha assorbito nella stessa finestra, perché è il punto. Il greggio è sui massimi dal 31 luglio, con il Brent a 88,09 e il WTI a 82,52. Il decennale è salito a circa 4,712% con un massimo di 4,716%, cioè sopra la soglia del 4,70% che questo archivio segue come campanello d’allarme da sei giorni. Il dollaro è salito. E la probabilità di un rialzo a settembre resta intorno alla metà, dopo aver superato il 50% ieri sera. Quattro canali che di solito pesano sull’oro, tutti attivi nella stessa ora, e il metallo ha guadagnato l’1%.',
    },
    {
      kind: 'paragraph',
      text: 'A questi si aggiunge una quinta cosa, più lenta e nella stessa direzione: la Reserve Bank of Australia ha lasciato il tasso al 4,35% ribadendo che l’inflazione resterà elevata ancora per qualche tempo, che i rischi sono orientati verso l’alto e che è pronta a fare quanto necessario. È la seconda banca centrale del G10 in due giorni a dirlo, dopo il riassunto delle opinioni della Banca del Giappone: un mondo in cui i tassi restano alti più a lungo è il costo strutturale di tenere un’attività che non paga cedole, e anche quel costo è salito mentre l’oro saliva.',
    },
    {
      kind: 'heading',
      text: 'Perché la forza resta bassa',
      anchor: 'perche-forza-bassa',
    },
    {
      kind: 'scenarios',
      title: 'Tre ragioni per non alzare il grado, tutte tecniche',
      items: [
        {
          label: 'Trenta dollari restituiti',
          tone: 'bear',
          text: 'Dal massimo di 4.432,74 il metallo è tornato a 4.402,52 dentro la stessa sessione. È poco in assoluto, ma dice che sopra i 4.400 sta già comparendo qualcuno che vende, e un livello rotto e non difeso vale meno di uno rotto e tenuto.',
        },
        {
          label: 'Il mercato dei Treasury è chiuso',
          tone: 'warn',
          text: 'Il mercato a pronti statunitense non ha scambiato durante la sessione asiatica per una festività giapponese: i rendimenti citati sono l’ultima rilevazione disponibile e non un prezzo formato adesso. I futures scendono leggermente, il che indica pressione verso rendimenti più alti alla riapertura, ma è un’indicazione e non una misura.',
        },
        {
          label: 'Ricoperture in sessione sottile',
          tone: 'warn',
          text: 'Reuters indica fra le cause le ricoperture di posizioni corte e gli acquisti di chi aveva perso il rimbalzo dai 4.000 dollari. Sono flussi che si esauriscono da soli: un movimento fatto anche di chi chiude una posizione sbagliata è, per costruzione, quello che va verificato alla riapertura di un mercato pieno.',
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
      text: 'L’impostazione sull’orizzonte più stretto torna rialzista, con forza bassa. È il primo passaggio al rialzo su quell’orizzonte da giovedì, e la ragione è una sola: un livello dichiarato in anticipo è stato superato, e superato nel modo che rende il segnale più forte invece che più debole — con il dollaro in salita e il decennale sopra il 4,70%. La forza resta bassa perché tutte e tre le ragioni per dubitare sono tecniche e nessuna riguarda la direzione: trenta dollari restituiti, un mercato obbligazionario chiuso, e una parte del movimento fatta di posizioni che si chiudono.',
    },
    {
      kind: 'paragraph',
      text: 'Sull’orizzonte dei giorni non cambia niente, ed è giusto tenerle separate: lì la lettura è scesa a neutrale ieri sera perché la probabilità di un rialzo a settembre ha superato la metà, e quel numero è ancora dov’era. Un metallo che rompe i massimi in sessione asiatica non riporta indietro una riprezzatura della Fed; sono due cose che vivono su orologi diversi. Fra poche ore l’indice dei prezzi le rimette entrambe in discussione, e questa volta con un mercato aperto.',
    },
    {
      kind: 'note',
      text: 'I livelli dell’oro sono rilevazioni riferite da Reuters in momenti diversi della sessione asiatica dell’11 agosto e non sono chiusure ufficiali: servono a rendere verificabile il ragionamento e non sono obiettivi. Il mercato a pronti dei Treasury statunitensi è rimasto chiuso durante quella sessione per una festività giapponese, quindi i rendimenti citati sono le ultime rilevazioni disponibili e non prezzi formati nella finestra descritta; l’indicazione sui futures è direzionale e non quantificata qui. I contratti future sull’oro scambiano una sessantina di dollari sopra lo spot, e tutte le soglie di questo archivio sono sullo spot. La probabilità di un rialzo a settembre è un’aspettativa ricavata dai contratti a termine, non una decisione della Federal Reserve.',
    },
  ],
};
