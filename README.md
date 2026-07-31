# Vitanera

Sito in Angular 21 dedicato a macroeconomia, banche centrali, geopolitica e XAU/USD.
Tema scuro con accento oro, contenuti organizzati per categorie, un calendario economico con lo
storico completo dei principali indicatori di Stati Uniti e area euro, e avvertenze legali diffuse in
ogni schermata.

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

> **Impostazione necessaria una sola volta.** Su GitHub: *Settings → Pages → Build and deployment →
> Source* deve essere impostato su **GitHub Actions**. Finché resta su *Deploy from a branch* il
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
src/app/
├─ core/
│  ├─ config/site.config.ts        testi legali, navigazione, le 29 categorie e le 5 famiglie
│  ├─ data/articles.data.ts        archivio delle analisi
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
│  └─ services/                    contenuti, calendario, orologio condiviso, presa visione
├─ shared/
│  ├─ legal/                       barra permanente, modale, avvertenza riutilizzabile, footer
│  └─ ui/                          icone, schede, badge, orari, intestazione, grafici
└─ features/
   ├─ home/                        panoramica e indicatore operativo
   ├─ calendar/                    calendario economico: aree, indicatori, banche centrali
   ├─ topics/                      indice degli argomenti
   ├─ articles/                    elenco, dettaglio, resa dei blocchi
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

| Percorso | Pagina |
| --- | --- |
| `/calendario` | Le due aree, le prossime uscite, l’agenda delle banche centrali |
| `/calendario/usa` | I venti indicatori statunitensi |
| `/calendario/euro-zona` | I nove indicatori dell’area euro |
| `/calendario/<area>/<indicatore>` | Storico completo, grafico, prossima uscita |
| `/calendario/banche-centrali` | Decisioni sui tassi, discorsi, verbali, conferenze stampa |

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

1. Aprire `src/app/core/data/articles.data.ts`.
2. Aggiungere un oggetto `Article` all’array `ARTICLES` (l’archivio parte vuoto).

I blocchi disponibili per il corpo del testo sono: `paragraph`, `heading`, `list`, `callout`, `stats`,
`scenarios`, `balance`, `timeline`, `quote`, `note`. L’indice laterale viene generato automaticamente dai
blocchi `heading`.

Campi che alimentano la resa grafica: `bias` (direzione e forza), `certainty`, `horizons`, `takeaways`
(riquadro «In sintesi»), `invalidation` (riquadro di chiusura), `nextEvent`.

L’ordine dell’archivio è calcolato da `publishedAt`, non dalla posizione nell’array.

### Le categorie

Un’analisi appartiene a **una o più** categorie, dichiarate in `categories`. La prima è la principale:
da essa dipendono la tinta della pagina e la pastiglia in evidenza sulle schede.

Le categorie sono ventinove, raccolte in cinque famiglie e definite in `site.config.ts`:

| Famiglia | Categorie |
| --- | --- |
| Aree e temi | USA, Europa, Asia, Geopolitica |
| Banche centrali | Fed, Bce, Tasso di interesse |
| Lavoro | Tasso di disoccupazione, Richieste iniziali sussidi di disoccupazione, Buste paga settore non agricolo (NFP) |
| Prezzi e inflazione | Indice dei prezzi al consumo (IPC), Variazione IPC, IPC Core, Variazione IPC Core, Indice dei prezzi per i consumi personali (PCE), PCE Core Annuale, PCE Core Trimestrale, Variazione PCE Core, Variazione IPP, Variazione IPP Core (PPI) |
| Attività economica | Rapporto sulla fiducia dei consumatori, Indice di produzione industriale, Variazione produzione industriale, PIL, PIL Annuale, PIL Trimestrale, Variazione vendite al dettaglio, Vendite al dettaglio beni essenziali, Indice delle vendite al dettaglio |

Un commento all’inflazione americana sta quindi insieme in `usa`, `variazione-ipc` e `ipc-core`, e si
ritrova da tutte e tre le pagine di argomento. L’indice completo è in `/argomenti`; l’elenco di una
singola categoria in `/argomenti/<slug>`.

Le categorie che corrispondono a un indicatore macroeconomico sono le stesse usate dal calendario
economico: è il collegamento fra ciò che si legge e i numeri da cui nasce.

## Aggiornare l’indicatore operativo

L’indicatore in panoramica vive in `src/app/core/data/signal.data.ts` e va aggiornato a mano dopo ogni
pubblicazione. Sintetizza le ultime analisi pubblicate, quali che siano le loro categorie, non solo
l’ultima.

Vale `null` finché non esiste alcuna lettura in corso — è lo stato in cui il sito riparte: la
panoramica mostra allora il riquadro «In attesa di notizie» al posto dell’indicatore.

| Campo | Cosa contiene |
| --- | --- |
| `updatedAt` | Data e ora dell’aggiornamento. Fa fede per la scadenza. |
| `validityMinutes` | Durata della validità in minuti, mostrata anche al lettore. Scaduta, la panoramica passa a «in attesa di notizie». |
| `direction` / `strength` | Impostazione e forza del segnale. |
| `headline` / `stance` | Titolo e sintesi discorsiva. |
| `favours` / `avoid` | Le due colonne «Favorito» e «Da evitare». |
| `confirming` / `contradicting` | Strumenti che confermano o contraddicono. |
| `invalidation` | Condizione che fa decadere la lettura. |
| `sources` | Slug delle analisi da cui deriva; diventano collegamenti. |

Trascorsi i minuti di validità l’indicatore passa da solo allo stato **«In attesa di notizie»**: la
barra si svuota, il pannello si attenua e la lettura precedente resta visibile solo come storico.
Nessun intervento manuale è necessario per farlo scadere: basta non aggiornare `updatedAt`.

## Orari di pubblicazione

`ClockService` aggiorna un segnale ogni quindici secondi; `<app-timestamp>` lo usa per mostrare il
tempo trascorso senza ricaricare la pagina. Entro **dodici ore** compare la forma relativa
(`adesso`, `18m fa`, `2h 20m fa`), oltre quella soglia data e ora complete. Le pubblicazioni
dell’ultima ora sono evidenziate nel colore dell’accento corrente. La soglia si cambia in
`RELATIVE_LIMIT_HOURS`.

## Stile per sezione

Ogni area ha una propria tinta, costruita sempre sugli stessi token di forma, spaziatura e tipografia.

| Sezione | Tinta |
| --- | --- |
| Panoramica e calendario | oro |
| Calendario USA · categorie dei prezzi | rame |
| Calendario Euro zona · categorie del lavoro | verde salvia |
| Banche centrali · orizzonti | prugna |
| Aree e temi (USA, Europa, Asia, geopolitica) | terracotta |
| Argomenti · attività economica · metodologia e glossario | sabbia |
| Pagine legali | ambra |

Le tinte sono definite in `src/styles.scss` nei blocchi `[data-accent='…']`; l’attributo viene
applicato al guscio dal metodo `accent()` di `src/app/app.ts`. Con ventinove categorie una tinta
ciascuna sarebbe illeggibile: le pagine di argomento e le analisi prendono quindi il colore della
**famiglia** della categoria principale. Il segno di marca resta sempre oro e le avvertenze legali
sempre ambra, così da essere riconoscibili in qualunque sezione.

### I grafici

I grafici del calendario sono SVG scritti a mano in `src/app/shared/ui/` — nessuna libreria, nessuna
richiesta di rete. Il valore effettivo è la serie che conta e porta il colore di marca; il consenso è
contesto e resta grigio. Le tinte dei grafici (`--chart-*` in `styles.scss`) non seguono l’accento di
sezione: un grafico deve avere lo stesso significato in ogni pagina. Il colore non è mai l’unico
canale — legenda, etichetta finale e tabella riportano gli stessi numeri.

## Dove compaiono le avvertenze

| Punto                    | Contenuto                                                   |
| ------------------------ | ----------------------------------------------------------- |
| Barra superiore          | avvertenza permanente, non chiudibile                       |
| Modale di primo accesso  | cinque punti chiave, presa visione memorizzata localmente   |
| Barra laterale           | riquadro «Trasparenza»                                      |
| Ogni scheda in elenco    | riga «Contenuto informativo · non è consulenza finanziaria» |
| Apertura di ogni analisi | riquadro «Prima di leggere»                                 |
| Chiusura di ogni analisi | avvertenza estesa in sette paragrafi                        |
| Piè di pagina            | avvertenza estesa, note su dati e cookie, copyright         |
| Pagine dedicate          | `/avvertenze`, `/note-legali`, `/privacy`                   |
| `index.html`             | meta description, meta `disclaimer`, blocco `<noscript>`    |
| Stampa                   | nota legale aggiunta in coda tramite CSS                    |

I testi sono centralizzati in `src/app/core/config/site.config.ts` e `src/app/core/data/legal.data.ts`:
modificarli lì aggiorna l’intero sito.

I testi legali sono redatti in forma divulgativa e **non costituiscono un parere legale**: per un
adeguamento normativo puntuale è opportuna la revisione di un professionista abilitato.
