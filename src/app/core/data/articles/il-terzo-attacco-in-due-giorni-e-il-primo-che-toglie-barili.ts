import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const ilTerzoAttaccoInDueGiorni: Article = {
  slug: 'il-terzo-attacco-in-due-giorni-e-il-primo-che-toglie-barili',
  categories: ['rotte-e-approvvigionamento', 'petrolio', 'oro', 'russia-ucraina'],
  title: 'Il terzo attacco in due giorni, e il primo che toglie barili',
  kicker: 'Rotte e approvvigionamento · Il metro dà la terza risposta',
  dek:
    'Il terminale di Sheskharis, a Novorossiysk, ha sospeso i carichi di greggio dopo un attacco con ' +
    'droni: i serbatoi sono pieni e una petroliera è uscita in mare aperto senza completare il carico. A ' +
    'luglio da lì passava quasi un milione di barili al giorno. È il primo dei tre attacchi di questa ' +
    'settimana con una conseguenza operativa dichiarata, e il prezzo lo sta dicendo.',
  publishedAt: '2026-08-14T21:05:00+02:00',
  author: AUTHOR,
  readingMinutes: 8,
  tags: ['Novorossiysk', 'Sheskharis', 'Interruzione di offerta', 'Premio di rischio'],
  instruments: ['Brent', 'XAU/USD'],
  horizons: ['breve', 'medio'],
  certainty: 'alta',
  certaintyNote:
    'Alta sul fatto: la sospensione dei carichi è riportata da più testate che attribuiscono a Reuters, ' +
    'con dettagli operativi coerenti fra loro — serbatoi al limite, ricezione di greggio interrotta, una ' +
    'petroliera uscita prima di completare il carico — e i volumi di giugno e luglio vengono da dati di ' +
    'spedizione. Alta anche sui prezzi, rilevati direttamente. Media sul nesso con il prezzo del greggio: ' +
    'nella stessa giornata agiscono il blocco iraniano, l’attacco a Ust-Luga e questa sospensione, e ' +
    'separarne i contributi non è possibile con quello che c’è adesso. Non è nota la durata della ' +
    'sospensione, che è la variabile da cui dipende se questo resta un episodio o diventa una perdita di ' +
    'produzione.',
  bias: {
    asset: 'XAU/USD',
    direction: 'neutrale-rialzista',
    strength: 'bassa',
    horizon: 'breve',
    regime:
      'La direzione non cambia, ma il contrappeso nominato alle 16:10 ha cominciato ad agire e va scritto. ' +
      'Quella lettura diceva che il metallo stava salendo sul cambio e non sui tassi, e che una gamba sola ' +
      'è fragile. Adesso se ne aggiunge una seconda che tira nell’altro verso: il Brent è a 88,53 dollari ' +
      'con più 1,68% e un massimo di 88,88, cioè diciotto centesimi sotto gli 89,06 che tre analisi di ' +
      'questo archivio hanno scritto come propria condizione. Nello stesso arco l’oro è sceso dal massimo ' +
      'di 4.396,88 a 4.375,19. Resta sopra la chiusura di giovedì e la settimana è positiva, quindi la ' +
      'direzione regge; ma la configurazione che il testo grezzo definisce la migliore possibile — rischio ' +
      'geopolitico che sale senza shock petrolifero — è esattamente quella che nelle ultime ore ha ' +
      'cominciato a smettere di esistere.',
  },
  takeaways: [
    'Il terminale di Sheskharis, a Novorossiysk, ha sospeso i carichi di greggio dopo un attacco con droni e ha smesso anche di ricevere greggio, perché i serbatoi hanno raggiunto la capienza. Una petroliera è uscita in mare aperto senza completare il carico.',
    'Non è un impianto marginale né fermo: la capacità dichiarata è di circa 700.000 barili al giorno, ma i volumi effettivi hanno sfiorato il milione a luglio e sono stati circa 800.000 a giugno. È il canale principale del greggio russo sul Mar Nero.',
    'È il terzo attacco a un’infrastruttura energetica in due giorni, ed è il primo con una conseguenza operativa dichiarata: la raffineria di Jazan era ferma da fine luglio, a Ust-Luga l’incendio è stato spento senza che nessuno quantificasse i danni.',
    'Il meccanismo per cui una sospensione dei carichi diventa una perdita di produzione è esplicito: con i serbatoi pieni e le navi ferme, la Russia può essere costretta a ridurre l’estrazione.',
    'Il prezzo distingue: il Brent sale dell’1,68% a 88,53 dollari con un massimo a 88,88, mentre l’oro scende dal massimo di 4.396,88 a 4.375,19. Il canale energetico ha ripreso a lavorare, e non a favore del metallo.',
  ],
  sources: [
    {
      outlet: 'Reuters',
      title:
        'Russia’s Black Sea Sheskharis terminal halts loadings after drone attack, sources say',
      at: '14 agosto 2026',
    },
    {
      outlet: 'Maritime Professional',
      title: 'Sheskharis Terminal Pauses Loadings Following Drone Attack',
    },
    {
      outlet: 'Kyiv Post',
      title: 'Russian Sheskharis Oil Terminal Suspends Loading After Ukrainian Drone Strikes',
    },
    { outlet: 'Investing.com', title: 'Rilevazioni di prezzo su Brent e oro' },
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text:
        'Ieri sera questa scheda si è data un metro per giudicare gli attacchi alle infrastrutture ' +
        'energetiche, e ne ha fatto una domanda sola: quanta capacità toglie al mercato. Applicato alla ' +
        'raffineria di Jazan aveva risposto «nessuna», perché l’impianto era fermo dalla fine di luglio, e ' +
        'il prezzo aveva dato ragione restituendo in un’ora il rimbalzo. Applicato a Ust-Luga stanotte ' +
        'aveva risposto «forse», perché il porto lavora ma nessuno aveva quantificato i danni. Stasera ' +
        'arriva il terzo caso in due giorni, ed è il primo in cui la risposta è un numero.',
    },
    {
      kind: 'heading',
      text: 'Che cosa si è fermato, e quanto vale',
    },
    {
      kind: 'paragraph',
      text:
        'Il terminale di Sheskharis, nel porto di Novorossiysk, ha sospeso i carichi di greggio dopo un ' +
        'attacco con droni. Il dettaglio che conta non è la sospensione in sé ma quello che ci sta ' +
        'intorno: il terminale ha smesso anche di ricevere greggio, perché i serbatoi hanno raggiunto la ' +
        'capienza, e una petroliera che doveva caricare è uscita in mare aperto senza completare ' +
        'l’operazione. Sono tre fatti operativi distinti, e insieme descrivono un impianto che si è ' +
        'fermato davvero, non un impianto che ha ricevuto un allarme.',
    },
    {
      kind: 'stats',
      title: 'Sheskharis, e i due attacchi che l’hanno preceduto',
      caption:
        'Volumi da dati di spedizione riportati dalle agenzie; prezzi rilevati alle 21:05 e non chiusure ufficiali.',
      items: [
        {
          label: 'Capacità dichiarata',
          value: '≈ 700.000 b/g',
          tone: 'warn',
          note: 'Greggio russo Urals, Siberian Light e la miscela kazaka KEBCO: è il canale principale del Mar Nero',
        },
        {
          label: 'Volumi di luglio',
          value: '≈ 1 mln b/g',
          tone: 'bear',
          note: 'Vicino al milione, contro circa 800.000 a giugno: l’impianto lavorava sopra la propria capacità dichiarata',
        },
        {
          label: 'Stato dopo l’attacco',
          value: 'carichi sospesi',
          tone: 'bear',
          note: 'Serbatoi al limite, ricezione di greggio interrotta, una petroliera uscita senza completare il carico',
        },
        {
          label: 'Brent',
          value: '88,53 $',
          tone: 'warn',
          note: 'Più 1,68% sulla chiusura di 87,07, con un massimo a 88,88: diciotto centesimi sotto una soglia dichiarata',
        },
        {
          label: 'XAU/USD',
          value: '4.375,19 $',
          tone: 'neutral',
          note: 'Più 0,55%, ma ventidue dollari sotto il massimo di 4.396,88 toccato nel primo pomeriggio',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bear',
      title: 'Lo stesso metro, la terza risposta',
      text:
        'Le tre infrastrutture colpite in due giorni si dispongono su una scala, e la scala è la sola cosa ' +
        'che permette di trattarle diversamente senza arbitrio. Jazan: raffineria ferma da fine luglio, ' +
        'zero barili tolti, atto di segnalazione — e il rimbalzo del greggio è rientrato in un’ora. ' +
        'Ust-Luga: porto attivo da circa 700.000 barili al giorno nel 2025, incendio spento, danni non ' +
        'quantificati e nessuna riduzione dichiarata dei caricamenti — quindi rischio su capacità reale, ' +
        'non perdita. Sheskharis: impianto che a luglio ha movimentato quasi un milione di barili al ' +
        'giorno, carichi sospesi, serbatoi pieni, una nave andata via vuota. Solo il terzo caso ha una ' +
        'conseguenza operativa dichiarata da chi la subisce, ed è per questo che è l’unico dei tre che ' +
        'questo archivio tratta come un fatto di offerta.',
    },
    {
      kind: 'heading',
      text: 'Come una sospensione diventa una riduzione di produzione',
    },
    {
      kind: 'paragraph',
      text:
        'Il passaggio è meccanico e vale la pena scriverlo, perché è quello che distingue un porto chiuso ' +
        'per un giorno da una perdita vera. Il greggio che arriva al terminale via oleodotto non si può ' +
        'fermare a comando: se le navi non caricano, riempie i serbatoi, e quando i serbatoi sono pieni il ' +
        'terminale smette di accettarne — che è esattamente quello che è successo. A quel punto la ' +
        'pressione risale la catena fino ai giacimenti, e l’unica valvola rimasta è ridurre l’estrazione. ' +
        'Le fonti citate dalle agenzie lo dicono in modo esplicito: con lo scalo fermo la Russia potrebbe ' +
        'essere costretta a tagliare la produzione mentre lo stoccaggio si riempie.',
    },
    {
      kind: 'paragraph',
      text:
        'Quanto costi dipende però da una variabile che nessuno ha ancora: la durata. Un precedente c’è, ' +
        'ed è dello stesso terminale — un attacco all’inizio di marzo aveva prodotto una sospensione di ' +
        'cinque giorni. Cinque giorni a un milione di barili al giorno sono cinque milioni di barili, che ' +
        'su un mercato mondiale non sono un evento sistemico ma non sono nemmeno rumore. Finché la durata ' +
        'non è nota, questa resta un’interruzione con un ordine di grandezza e senza un totale.',
    },
    {
      kind: 'heading',
      text: 'Il prezzo sta distinguendo, e non a favore del metallo',
    },
    {
      kind: 'paragraph',
      text:
        'La prova che il metro funziona sta nel confronto fra le reazioni. Su Jazan il greggio era salito ' +
        'per un’ora e aveva restituito tutto. Stasera il Brent è a 88,53 dollari con più 1,68% e un ' +
        'massimo di 88,88, dopo essere sceso fino a 86,02 in mattinata e a 86,97 nel primo pomeriggio: ' +
        'non è un rimbalzo di mezz’ora, è una risalita che dura da sei ore e che ha fatto un nuovo massimo ' +
        'di giornata. E questa volta il movimento poggia su un impianto che si è fermato davvero.',
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Il contrappeso nominato alle 16:10 ha cominciato ad agire',
      text:
        'Cinque ore fa questa scheda ha scritto che l’oro stava salendo sul cambio e non sui tassi, e che ' +
        'una gamba sola era la configurazione che il 12 agosto era durata meno di un’ora. Il testo grezzo ' +
        'di stasera legge invece la combinazione attuale — rischio geopolitico che sale, greggio sotto i ' +
        '90 dollari — come «la configurazione migliore fra le due possibili». È vero che è la migliore ' +
        'delle due; il punto è che sta smettendo di essere quella. Nelle ultime ore il Brent è salito di ' +
        'oltre un dollaro e mezzo dai minimi del pomeriggio e l’oro è sceso di ventidue dollari dal ' +
        'proprio massimo. Non è ancora il canale inflazione-rendimenti che si riapre — per quello ' +
        'servirebbe il greggio sopra i 90 e la parte lunga della curva che si muove — ma è la prima volta ' +
        'in questa settimana che le due cose si muovono nella sequenza che questo archivio ha descritto ' +
        'come pericolosa, invece che in quella comoda.',
    },
    {
      kind: 'balance',
      title: 'Un premio che sale, e un canale che si riapre',
      left: {
        title: 'A favore dell’oro',
        tone: 'bull',
        items: [
          'Tre attacchi a infrastrutture energetiche in due giorni su due teatri diversi: la frequenza è un fatto contato, e alza il premio di rischio strutturale su cui compra la domanda ufficiale.',
          'Il quadro monetario della giornata resta intatto: probabilità di rialzo a settembre poco sopra il 30% contro circa il 55% di una settimana fa, e dollaro in calo per la terza seduta.',
          'Il metallo chiude la settimana in guadagno e resta sopra la chiusura di giovedì: il recupero dal minimo di 4.311,22 non è stato annullato.',
          'Un’interruzione che si trasmettesse alla produzione russa manterrebbe alto il premio anche senza un’escalation ulteriore su Hormuz.',
        ],
      },
      right: {
        title: 'A sfavore dell’oro',
        tone: 'bear',
        items: [
          'Il Brent è a diciotto centesimi dagli 89,06 dollari che tre analisi di questo archivio hanno scritto come condizione: sopra quel livello il canale energetico cambia segno e lavora contro il metallo.',
          'L’oro è già sceso di ventidue dollari dal massimo mentre il greggio saliva: la correlazione sfavorevole ha ricominciato a mostrarsi nelle stesse ore.',
          'La durata della sospensione non è nota, quindi il premio prezzato adesso poggia su una perdita di cui si conosce solo il ritmo giornaliero e non il totale.',
          'Se la produzione russa venisse davvero ridotta, l’effetto sui prezzi arriverebbe con settimane di ritardo e in una fase in cui le attese di inflazione a un anno sono appena risalite al 4,3%.',
        ],
      },
    },
    {
      kind: 'heading',
      text: 'Interpretazione',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte più stretto la direzione resta neutrale con inclinazione rialzista e la forza resta ' +
        'bassa. La direzione non si muove perché il metallo è ancora sopra la chiusura di giovedì e il ' +
        'quadro monetario della giornata non è stato contraddetto. La forza non sale perché quello che è ' +
        'cambiato nelle ultime ore va nel verso opposto: il canale energetico, che alle 15:20 questa ' +
        'scheda aveva dato per chiuso e alle 17:20 aveva dovuto correggere, adesso è aperto e sta ' +
        'trasmettendo.',
    },
    {
      kind: 'paragraph',
      text:
        'Sull’orizzonte dei giorni il fatto conta più di quanto il prezzo di stasera mostri. Fino a ieri il ' +
        'premio di rischio sull’energia poggiava su una rotta bloccata e su attacchi che non toglievano ' +
        'barili; da stasera poggia anche su un terminale che ha smesso di caricare mentre movimentava ' +
        'quasi un milione di barili al giorno. È una differenza di natura, non di grado, e sposta il ' +
        'baricentro del rischio dalla parte in cui le interruzioni si contano invece che raccontarle. Per ' +
        'l’oro è ambiguo per costruzione: alimenta la domanda di rifugio e alimenta le attese di ' +
        'inflazione, e quale delle due prevalga si vede al livello del Brent, non al conteggio degli ' +
        'attacchi.',
    },
  ],
  invalidation: [
    'Una comunicazione dell’operatore del terminale o di Transneft che dichiari la ripresa dei carichi a Sheskharis entro lunedì: ridurrebbe l’episodio a una sospensione di poche ore, e la differenza di natura descritta qui rispetto a Jazan e Ust-Luga si assottiglierebbe.',
    'Dati di tracciamento navale che mostrino carichi in uscita da Novorossiysk nei prossimi giorni sui volumi di luglio: direbbe che i serbatoi si sono svuotati senza che la produzione venisse toccata, e la catena descritta qui non si sarebbe attivata.',
    'Un Brent che chiude sotto gli 87,07 dollari della vigilia entro lunedì: annullerebbe la risalita e riporterebbe l’episodio nella categoria dei rimbalzi che rientrano, dove questo archivio ha collocato Jazan.',
    'Un oro che chiude sotto i 4.351,07 dollari della chiusura di giovedì: toglierebbe il fondamento alla parte di questa lettura che tiene la direzione sopra il neutrale.',
    'Un Brent stabilmente sopra i 90 dollari accompagnato da un decennale che torna sopra il 4,70%: sarebbe la conferma che il canale energetico ha cambiato segno, e la lettura di breve andrebbe portata sotto il neutrale invece che tenuta sopra.',
  ],
  nextEvent: {
    when: 'Lunedì 17 agosto, riapertura dei mercati',
    title: 'Durata della sospensione a Sheskharis e livello del Brent',
    detail:
      'Le due cose si leggono insieme. Se i carichi riprendono e il Brent rientra sotto gli 87 dollari, ' +
      'questo episodio si aggiunge alla lista degli attacchi che non hanno tolto barili. Se la sospensione ' +
      'dura come quella di marzo, cinque giorni, e il greggio supera i 90, cambia segno il canale che ' +
      'collega il premio geopolitico all’oro: da sostegno del rifugio a pressione attraverso rendimenti e ' +
      'attese di inflazione, che sono appena risalite al 4,3% sull’orizzonte di un anno.',
  },
};
