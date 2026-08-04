# Vitanera

Sito in Angular 21 dedicato a macroeconomia, banche centrali, geopolitica e XAU/USD.
Tema scuro con accento oro, contenuti organizzati per categorie e un calendario economico con lo
storico completo dei principali indicatori di Stati Uniti e area euro.

> **Avvertenza.** Il sito non è una testata giornalistica ai sensi della L. 62/2001 e non è registrato presso
> alcun tribunale. I contenuti hanno finalità informative e didattiche e non costituiscono consulenza
> finanziaria, raccomandazione di investimento o sollecitazione al pubblico risparmio.

## Comandi

```bash
npm install                 # una sola volta
npm start                   # server di sviluppo su http://localhost:4200/
npm run build               # build di produzione in dist/vitanera/browser
npm test -- --no-watch      # test unitari (Vitest)
npm run calendario          # riscarica lo storico del calendario economico
npm run analisi             # rigenera le copie markdown in contenuti/analisi/
```

## Pubblicazione su GitHub Pages

Il sito è servito da GitHub Pages sul dominio indicato nel file `CNAME`.

`npm run build` esegue `ng build` e poi `scripts/prepare-pages.mjs`, che rende l’output
direttamente pubblicabile:

- **`404.html`** — copia di `index.html`. GitHub Pages restituisce questo file per ogni percorso che
  non corrisponde a un file statico: senza di esso un indirizzo diretto come `/analisi/uno-slug`
  mostrerebbe la pagina di errore di GitHub invece della pagina richiesta.
- **`.nojekyll`** — impedisce a Jekyll di rielaborare l’output.
- **`CNAME`** — ricopiato nell’output per non perdere il dominio personalizzato.

La pubblicazione è automatica: il workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
installa le dipendenze, esegue i test, compila e pubblica `dist/vitanera/browser` a ogni push su
`master`.

> **Impostazione necessaria una sola volta.** Su GitHub: _Settings → Pages → Build and deployment →
> Source_ deve essere impostato su **GitHub Actions**. Finché resta su _Deploy from a branch_ il
> workflow compila ma la pubblicazione non avviene, perché Pages continua a servire i file del
> repository invece dell’output compilato.

Il file `.nojekyll` nella radice del repository è la rete di sicurezza per quel caso: impedisce a
Jekyll di trasformare questo README nella homepage. Se la sorgente finisce per errore su un branch,
l’indirizzo restituisce un errore invece di mostrare il README — un sintomo molto più leggibile.

L’output non viene versionato: `dist/` resta in `.gitignore` e il sito viene ricompilato dal
workflow a ogni push.

### Se il browser mostra una pagina vecchia

L’`index.html` viene servito con `Cache-Control: max-age=600`: fino a dieci minuti il browser può
riproporre la versione precedente. Per sapere che cosa sta davvero servendo il dominio, senza
fidarsi di quello che si vede a schermo:

```powershell
curl.exe -s -I https://vitanera.it/ | Select-String 'last-modified'
```

Se l’orario corrisponde all’ultimo push, il sito è aggiornato e la differenza è solo nel browser:
ricaricamento forzato con `Ctrl+F5`, oppure una finestra in incognito per averne la certezza.

## Struttura

```
contenuti/analisi/                 GENERATO — un markdown per analisi, per usi fuori dal sito
scripts/                           calendario economico, markdown delle analisi, preparazione Pages

src/app/
├─ core/
│  ├─ config/site.config.ts        navigazione, testi legali brevi, categorie e famiglie
│  ├─ data/articles/<slug>.ts      un file per analisi, con lo stesso nome del suo slug
│  ├─ data/articles.data.ts        elenco delle analisi: solo import e array, nessun testo
│  ├─ data/author.ts               la firma, unica per tutte le analisi
│  ├─ data/outcomes.data.ts        esiti: come sono andate a finire le analisi
│  ├─ data/calendar.meta.ts        testi redazionali degli indicatori e anagrafica di chi parla
│  ├─ data/calendar.series.ts      GENERATO — storico dei valori
│  ├─ data/calendar.events.ts      GENERATO — appuntamenti di Fed e BCE
│  ├─ data/calendar.data.ts        unione dei tre precedenti
│  ├─ data/glossary.data.ts        voci del glossario
│  ├─ data/legal.data.ts           testi di avvertenze, note legali, privacy
│  ├─ data/markets.data.ts         riferimenti numerici citati nelle analisi
│  ├─ data/signal.data.ts          indicatore operativo mostrato in panoramica
│  ├─ models/article.model.ts      modello dei contenuti, dei blocchi e delle categorie
│  ├─ models/calendar.model.ts     modello del calendario economico
│  └─ services/                    contenuti, calendario, orologio condiviso, esportazione
├─ shared/
│  ├─ legal/                       avvertenza in una riga, piè di pagina
│  └─ ui/                          icone, schede, badge, orari, intestazione, grafici
└─ features/
   ├─ home/                        panoramica e indicatore operativo
   ├─ calendar/                    calendario economico: aree, indicatori, banche centrali
   ├─ topics/                      indice degli argomenti
   ├─ articles/                    elenco, dettaglio, resa dei blocchi
   ├─ outcomes/                    registro degli esiti e calibrazione
   ├─ outlook/                     orizzonti breve · medio · lungo
   ├─ methodology/                 metodologia e limiti dichiarati
   ├─ glossary/                    glossario
   ├─ legal/                       pagine di trasparenza
   └─ not-found/                   404
```

## Calendario economico

`/calendario` raccoglie **29 indicatori** in due aree — venti per gli Stati Uniti, nove per l’area
euro. Ogni indicatore ha uno storico di oltre cento diffusioni (data e ora, valore atteso dal
consenso, valore effettivo, precedente), un grafico che mette a confronto effettivo e consenso, e la
data della prossima uscita con il relativo previsto. `/calendario/banche-centrali` riporta le riunioni
già fissate di Federal Reserve e BCE e gli interventi annunciati dei loro membri.

| Percorso                          | Pagina                                                          |
| --------------------------------- | --------------------------------------------------------------- |
| `/calendario`                     | Le due aree, le prossime uscite, l’agenda delle banche centrali |
| `/calendario/usa`                 | I venti indicatori statunitensi                                 |
| `/calendario/euro-zona`           | I nove indicatori dell’area euro                                |
| `/calendario/<area>/<indicatore>` | Storico completo, grafico, prossima uscita                      |
| `/calendario/banche-centrali`     | Decisioni sui tassi, discorsi, verbali, conferenze stampa       |

### Esportare i dati

Ogni pagina del calendario ha un pulsante che genera un file **Markdown** e lo scarica: l’intero
calendario da `/calendario`, una sola area dalla pagina d’area, un solo indicatore dalla sua scheda.

| Da dove                           | Che cosa contiene                                                       | Peso    |
| --------------------------------- | ----------------------------------------------------------------------- | ------- |
| `/calendario`                     | I 29 indicatori di entrambe le aree, più l’agenda delle banche centrali | ~300 kB |
| `/calendario/usa`                 | I 20 indicatori statunitensi                                            | ~200 kB |
| `/calendario/euro-zona`           | I 9 indicatori dell’area euro                                           | ~100 kB |
| `/calendario/<area>/<indicatore>` | Un solo indicatore                                                      | ~10 kB  |

Per ogni indicatore il file riporta scheda descrittiva, fonte, ultimo valore, prossima uscita e la
tabella completa delle diffusioni — data e ora, previsto, attuale, precedente, scostamento — nello
stesso formato numerico e nello stesso fuso usati a video.

Il documento si costruisce solo al clic ([`export-button.ts`](src/app/shared/ui/export-button.ts)):
tenerne in memoria trecento kilobyte per chi la pagina la sta soltanto leggendo non avrebbe senso.
La generazione vive in [`calendar-export.ts`](src/app/core/services/calendar-export.ts) ed è fatta di
funzioni pure, verificate da `src/app/core/services/export.spec.ts`.

### Aggiornare i dati

```bash
npm run calendario
```

Lo script `scripts/build-calendar.mjs` riscrive **soltanto** i due file generati,
`calendar.series.ts` e `calendar.events.ts`. I testi redazionali degli indicatori vivono in
`calendar.meta.ts` e non vengono mai toccati: l’aggiornamento dei numeri e la stesura delle
descrizioni restano due lavori separati.

I dati provengono dal calendario economico pubblico di TradingView, che aggrega i comunicati degli
istituti di statistica (BLS, BEA, Census, Federal Reserve, Eurostat, BCE) e il consenso degli
analisti. Le date delle riunioni di politica monetaria arrivano invece dai calendari ufficiali dei
due istituti, elencati in testa allo script: il calendario economico pubblica solo poche settimane in
avanti, mentre Fed e BCE annunciano le riunioni con oltre un anno di anticipo.

Lo storico è in un pacchetto caricato solo da chi apre il calendario, non nel primo caricamento del
sito. Per non riscaricare tutto a ogni prova, `CALENDAR_CACHE=1 npm run calendario` riusa la copia
grezza in `.calendar-cache/`.

> Il valore «**previsto**» è il consenso degli analisti rilevato prima dell’uscita, non una previsione
> di questo sito. Le date future possono essere spostate dagli enti che diffondono i dati.

## Aggiungere un’analisi

Ogni analisi è un file suo. Il nome del file è lo slug, e lo slug è anche l’indirizzo della pagina e
il nome della copia markdown: da un solo nome si trovano tutti e tre.

1. Creare `src/app/core/data/articles/<slug>.ts` con un `export const <nomeCamelCase>: Article`.
2. Importarlo in `src/app/core/data/articles.data.ts` e metterlo in testa all’array `ARTICLES`.
3. Eseguire `npm run analisi`, che scrive `contenuti/analisi/<slug>.md`.

La prima categoria non può appartenere alla famiglia `aree`: è un test, e serve a evitare che ogni
analisi americana prenda la stessa tinta e annunci «USA» invece del fatto di cui parla.

Il terzo passo non è facoltativo: `npm run build` si rifiuta di compilare se i markdown non
corrispondono all’archivio, e un test lo verifica a parte.

I blocchi disponibili per il corpo del testo sono: `paragraph`, `heading`, `list`, `callout`, `stats`,
`scenarios`, `balance`, `timeline`, `quote`, `note`. L’indice laterale viene generato automaticamente dai
blocchi `heading`.

Campi che alimentano la resa grafica: `bias` (direzione e forza), `certainty`, `horizons`, `takeaways`
(riquadro «In sintesi»), `invalidation` (riquadro di chiusura), `nextEvent`.

L’ordine dell’archivio è calcolato da `publishedAt`, non dalla posizione nell’array.

### Le categorie

Un’analisi appartiene a **una o più** categorie, dichiarate in `categories`. La prima è la principale:
da essa dipendono la tinta della pagina e la pastiglia in evidenza sulle schede — e **non può essere
un’area**, è un test. Con un’area davanti ogni analisi americana avrebbe la stessa tinta e la scheda
annuncerebbe dove è successo invece di che cosa è successo.

`CategorySlug` è l’unione di due tipi. `IndicatorCategorySlug` sono le categorie che un indicatore del
calendario dichiara: usarle porta il lettore anche allo storico del dato, e hanno `series: true`.
`EditorialCategorySlug` sono solo editoriali, non hanno alcuno storico dietro e **crescono con quello
che si scrive**: quando un’analisi tratta qualcosa che non ha una categoria, se ne aggiunge una
invece di forzare quella che le somiglia. Un test rifiuta le categorie editoriali che nessuna
analisi usa.

Le categorie con uno storico dietro sono raccolte in queste famiglie, definite in `site.config.ts`:

| Famiglia            | Categorie                                                                                                                                                                                                                                                | Storico |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Aree                | USA, Europa                                                                                                                                                                                                                                              | sì      |
| Aree                | Asia, Medio Oriente                                                                                                                                                                                                                                      | no      |
| Banche centrali     | Fed, Bce, Tasso di interesse                                                                                                                                                                                                                             | sì      |
| Mercati             | Oro, Petrolio, Valute, Obbligazioni                                                                                                                                                                                                                      | no      |
| Temi                | Correlazioni, Premio di rischio, Rotte e approvvigionamento, Interventi valutari, Riserve auree, Debito pubblico                                                                                                                                         | no      |
| Lavoro              | Tasso di disoccupazione, Richieste iniziali sussidi di disoccupazione, Buste paga settore non agricolo (NFP)                                                                                                                                             | sì      |
| Lavoro              | Offerte di lavoro (JOLTS)                                                                                                                                                                                                                                | no      |
| Prezzi e inflazione | Indice dei prezzi al consumo (IPC), Variazione IPC, IPC Core, Variazione IPC Core, Indice dei prezzi per i consumi personali (PCE), PCE Core Annuale, PCE Core Trimestrale, Variazione PCE Core, Variazione IPP, Variazione IPP Core (PPI)               | sì      |
| Attività economica  | Rapporto sulla fiducia dei consumatori, Indice di produzione industriale, Variazione produzione industriale, PIL, PIL Annuale, PIL Trimestrale, Variazione vendite al dettaglio, Vendite al dettaglio beni essenziali, Indice delle vendite al dettaglio | sì      |
| Attività economica  | Indagine ISM                                                                                                                                                                                                                                             | no      |

Un commento all’inflazione americana sta quindi insieme in `variazione-ipc`, `usa` e `ipc-core`, e si
ritrova da tutte e tre le pagine di argomento. L’indice completo è in `/argomenti`; l’elenco di una
singola categoria in `/argomenti/<slug>`.

Le categorie che corrispondono a un indicatore macroeconomico sono le stesse usate dal calendario
economico: è il collegamento fra ciò che si legge e i numeri da cui nasce.

## Gli esiti

Ogni analisi dichiara, prima di sapere come andrà, l’elenco delle condizioni che la renderebbero
sbagliata. `src/app/core/data/outcomes.data.ts` è dove quelle condizioni vengono ricontrollate a
distanza di tempo, una per una, con il numero che si è visto. Da lì nasce `/esiti`.

Tre regole, e sono tutte e tre il punto:

1. **L’analisi non si tocca mai.** L’esito vive in un file separato e in sola aggiunta. Se si potesse
   ritoccare l’analisi dopo, il registro misurerebbe la memoria di chi lo compila.
2. **Il verdetto si ricava dalle condizioni**, non dall’impressione: nessuna scattata →
   `confermata`, alcune → `parziale`, tutte → `invalidata`. Un test verifica il conteggio, e un
   altro che le condizioni ricontrollate siano davvero quelle dichiarate prima.
3. **Anche il silenzio è un esito.** Un’analisi che nessuno ha ricontrollato in tempo si registra
   come `senza-verifica` e viene contata come tale.

La pagina mostra anche la **calibrazione**: per ogni livello di `certainty` dichiarato, la quota di
analisi confermate. È il modo per sapere se quel campo sta misurando qualcosa.

L’archivio parte vuoto di proposito: riempirlo a posteriori, sapendo già come è andata, è esattamente
l’errore che esiste per impedire.

## Le copie markdown delle analisi

`contenuti/analisi/` contiene un markdown per analisi, con lo stesso nome dello slug. Sono copie
generate da `npm run analisi` a partire dall’archivio: servono a lavorare sui testi fuori dal sito —
un grafo di conoscenza, una ricerca, un’esportazione — senza dover leggere TypeScript. Il sito non li
apre mai.

Ogni file ha un frontmatter con slug, titolo, occhiello, sommario, data, categorie, argomenti,
strumenti, orizzonti, impostazione, prossimo appuntamento e fonti, poi il testo dell’analisi: «In
sintesi», i blocchi, le condizioni di invalidazione, il grado di certezza, il regime descritto e —
quando c’è — **come è andata a finire**, con la tabella delle condizioni ricontrollate.

**Non si modificano a mano**: la prima rigenerazione riscriverebbe tutto. Il testo si cambia nel
file dell’analisi sotto `src/app/core/data/articles/`, poi si rilancia `npm run analisi`.

Due controlli impediscono che restino indietro, e valgono anche per i markdown di troppo rimasti
dopo la rimozione di un’analisi:

| Dove                               | Quando scatta                                          |
| ---------------------------------- | ------------------------------------------------------ |
| `npm run build`                    | prima di `ng build`, così non si pubblica disallineati  |
| `src/app/core/data/analisi.spec.ts` | a ogni `npm test`, confrontando l’impronta di ogni file |

## Aggiornare l’indicatore operativo

L’indicatore in panoramica vive in `src/app/core/data/signal.data.ts` e va aggiornato a mano dopo ogni
pubblicazione. Sintetizza le ultime analisi pubblicate, quali che siano le loro categorie, non solo
l’ultima.

Dice **tre cose per tre archi di tempo** — intraday, giorni, settimane — perché l’oro può salire
nelle prossime ore e restare fermo nel mese, e una lettura sola costringeva a scegliere quale delle
due dire. Ogni lettura ha la sua direzione, la sua forza e la sua condizione di decadenza.

**Non scade.** C’era una durata dichiarata, dopo la quale la panoramica passava da sola a «in attesa
di notizie»: era una precisione che nessuno poteva mantenere. Al suo posto c’è la data e l’ora
dell’ultimo aggiornamento, scritta grande — quanto sia ancora attuale lo decide chi legge.

Vale `null` finché non esiste alcuna lettura in corso — è lo stato in cui il sito riparte: la
panoramica mostra allora il riquadro «In attesa di notizie» al posto dell’indicatore.

| Campo                          | Cosa contiene                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `updatedAt`                    | Data e ora dell’aggiornamento. Fa fede per la scadenza.                                                            |
| `validityMinutes`              | Durata della validità in minuti, mostrata anche al lettore. Scaduta, la panoramica passa a «in attesa di notizie». |
| `direction` / `strength`       | Impostazione e forza del segnale.                                                                                  |
| `headline` / `stance`          | Titolo e sintesi discorsiva.                                                                                       |
| `favours` / `avoid`            | Le due colonne «Favorito» e «Da evitare».                                                                          |
| `confirming` / `contradicting` | Strumenti che confermano o contraddicono.                                                                          |
| `invalidation`                 | Condizione che fa decadere la lettura.                                                                             |
| `sources`                      | Slug delle analisi da cui deriva; diventano collegamenti.                                                          |

Trascorsi i minuti di validità l’indicatore passa da solo allo stato **«In attesa di notizie»**: la
barra si svuota, il pannello si attenua e la lettura precedente resta visibile solo come storico.
Nessun intervento manuale è necessario per farlo scadere: basta non aggiornare `updatedAt`.

## Orari di pubblicazione

`ClockService` aggiorna un segnale ogni quindici secondi; `<app-timestamp>` lo usa per mostrare il
tempo trascorso senza ricaricare la pagina. Entro **dodici ore** compare la forma relativa
(`adesso`, `18m fa`, `2h 20m fa`), oltre quella soglia data e ora complete. Le pubblicazioni
dell’ultima ora sono evidenziate nel colore dell’accento corrente. La soglia si cambia in
`RELATIVE_LIMIT_HOURS`.

## Il sistema di stile

Tutto vive in [`src/styles.scss`](src/styles.scss) e sta in tre regole.

**Le superfici sono piatte.** Un bordo di un pixel separa le cose. Non ci sono ombre dentro la
pagina, né vetri smerigliati, né sfumature su fondi o testo: `--shadow-pop` è l'unica ombra
rimasta e serve solo a ciò che galleggia davvero, cioè il pannello dei risultati di ricerca.

**Le misure vengono da una scala.** Corpo del testo, spazi e raggi hanno un numero fisso di
valori possibili; se una misura non è nella scala, non si usa.

| Scala      | Token                                 | Valori                                        |
| ---------- | ------------------------------------- | --------------------------------------------- |
| Corpo      | `--t-micro` → `--t-3xl`               | 11 · 12 · 13 · 14 · 15 · 17 · 20 · 25 · 32 px |
| Spazi      | `--s-1` → `--s-10`                    | multipli di 4, da 4 a 72 px                   |
| Raggi      | `--r-sm` `--r-md` `--r-lg` `--r-pill` | 6 · 10 · 14 px · pillola                      |
| Interlinea | `--lh-tight` → `--lh-loose`           | 1,2 · 1,45 · 1,6 · 1,75                       |

`--s-section` (44 px) è la distanza fra due blocchi di una pagina e `--s-card` (20 px)
l'imbottitura interna di un riquadro: sono le due misure che danno il ritmo a tutto il resto.
`--measure` (68ch) è la larghezza massima di una colonna di testo.

I pesi tipografici sono tre: 400 per il corpo, 500 per enfasi ed etichette, 600 per titoli e
numeri di rilievo. Il grassetto a 700 e 800 non si usa, e infatti non viene nemmeno scaricato.

**Il colore è informazione.** L'accento marca ciò che si può toccare e la sezione in cui ci si
trova; `--up` e `--down` dicono il segno di un numero. Tutto il resto è grigio caldo.

I primitivi condivisi — `.card`, `.chip`, `.btn`, `.sec-head`, `.block`, `.link`, `.fineprint`,
`.eyebrow`, `.prose` — sono dichiarati una volta sola e nessuna pagina li ridefinisce.

### Movimento

Una sola animazione, `.anim-in`: una comparsa di 0,28 s all'ingresso in pagina. Non c'è nulla che
si sollevi al passaggio del puntatore, che ruoti o che pulsi. L'hover cambia colore, fondo o
bordo, e la pagina non si muove sotto il puntatore.

### Tinte di sezione

Ogni area ha una propria tinta, costruita sempre sugli stessi token di forma, spaziatura e
tipografia. Tutte sono desaturate sulla stessa intensità: cambia la famiglia cromatica, non
quanto il colore si fa sentire.

| Sezione                                                  | Tinta        |
| -------------------------------------------------------- | ------------ |
| Panoramica e calendario                                  | oro          |
| Calendario USA · categorie dei prezzi                    | rame         |
| Calendario Euro zona · categorie del lavoro              | verde salvia |
| Banche centrali · orizzonti                              | prugna       |
| Aree (USA, Europa, Asia, Medio Oriente)                  | terracotta   |
| Mercati (oro, petrolio, valute, obbligazioni)            | ottanio      |
| Temi · esiti                                             | blu polvere  |
| Argomenti · attività economica · metodologia e glossario | sabbia       |
| Pagine legali                                            | ambra        |

Le tinte sono definite nei blocchi `[data-accent='…']`; l’attributo viene applicato al guscio dal
metodo `accent()` di [`src/app/app.ts`](src/app/app.ts). Con quaranta categorie una tinta ciascuna
sarebbe illeggibile: le pagine di argomento e le analisi prendono quindi il colore della
**famiglia** della categoria principale. Il segno di marca resta sempre oro e le pagine di
trasparenza sempre ambra, così da essere riconoscibili in qualunque sezione.

## Navigazione

Il guscio è in [`app.html`](src/app/app.html) e [`app.scss`](src/app/app.scss), e ha due elementi.

La **barra laterale** è l'unica mappa del sito: quattro gruppi — osservatorio, calendario,
scenari, strumenti — e in fondo, staccate da un filetto, le tre pagine di trasparenza. Stanno lì e
non fra le voci di navigazione perché sono documenti da consultare, non contenuto da leggere: per
questo vivono in `LEGAL_NAV` e non in `NAV`. Sotto i 1080 px la barra diventa un menu a scomparsa.

La **barra superiore** è alta una riga sola e porta le briciole di pane e la ricerca. L'ultima
briciola è il nome della pagina corrente: prima c'erano la catena _e_ il titolo ripetuto sotto,
più una pastiglia di avvertenza e due scorciatoie che erano già nella barra laterale. Sotto i
720 px restano la panoramica e la pagina corrente — i due punti in cui si vuole tornare — e la
ricerca si apre da un pulsante.

Lo sfondo è una tinta piatta. C'erano tre strati sovrapposti dietro ogni parola del sito: un
bagliore dorato, un globo punteggiato che ruotava su sé stesso in quattro minuti e una griglia
sfumata. Da lì veniva quasi tutto il rumore.

### I grafici

I grafici del calendario sono SVG scritti a mano in `src/app/shared/ui/` — nessuna libreria, nessuna
richiesta di rete. Il valore effettivo è la serie che conta e porta il colore di marca; il consenso è
contesto e resta grigio. Le tinte dei grafici (`--chart-*` in `styles.scss`) non seguono l’accento di
sezione: un grafico deve avere lo stesso significato in ogni pagina. Il colore non è mai l’unico
canale — legenda, etichetta finale e tabella riportano gli stessi numeri.

## Dove compaiono le avvertenze

L’avvertenza compare **dove il lettore incontra un giudizio**, e mai più di una volta per
schermata.

| Punto                   | Contenuto                                                             |
| ----------------------- | --------------------------------------------------------------------- |
| Pagine dedicate         | `/avvertenze`, `/note-legali`, `/privacy` — il testo integrale        |
| Piè di pagina           | il riassunto in tre righe, con il rimando al testo integrale          |
| Barra laterale          | i tre documenti, in fondo alla navigazione                            |
| Chiusura di un’analisi  | una riga: `<app-risk-notice />`                                       |
| Orizzonti e metodologia | la stessa riga, per lo stesso motivo                                  |
| Pagine del calendario   | nessuna avvertenza legale; resta la nota sui dati, che è informazione |
| `index.html`            | meta description, meta `disclaimer`, blocco `<noscript>`              |
| Stampa                  | nota legale aggiunta in coda tramite CSS                              |

Prima erano dodici riquadri sparsi per il sito, più una barra permanente in cima a ogni schermata
e una modale che bloccava il primo accesso. Sulla pagina di un’analisi se ne contavano cinque, e
il piè di pagina diceva tre volte la stessa cosa: sette paragrafi estesi, due paragrafi che li
riassumevano e una riga di chiusura. La ripetizione non rende un’avvertenza più chiara — la rende
invisibile, e con essa tutto il resto della pagina.

Il vincolo è verificato: [`pages.spec.ts`](src/app/features/pages.spec.ts) controlla che le pagine
di dati e di indice non ne portino **nessuna** e che quelle di giudizio ne portino **esattamente
una**. Senza quel controllo la formula si moltiplica da sola, perché aggiungerla «per sicurezza» è
sempre la scelta che costa meno sul momento.

I testi vivono in [`site.config.ts`](src/app/core/config/site.config.ts) — ne restano tre, tutti
brevi — e in [`legal.data.ts`](src/app/core/data/legal.data.ts), che è la fonte del testo integrale.

I testi legali sono redatti in forma divulgativa e **non costituiscono un parere legale**: per un
adeguamento normativo puntuale è opportuna la revisione di un professionista abilitato.
