# Vitanera

Sito in Angular 21 dedicato a macroeconomia, banche centrali, geopolitica e XAU/USD.
Tema scuro con accento oro, contenuti organizzati per sezioni e avvertenze legali diffuse in ogni schermata.

> **Avvertenza.** Il sito non è una testata giornalistica ai sensi della L. 62/2001 e non è registrato presso
> alcun tribunale. I contenuti hanno finalità informative e didattiche e non costituiscono consulenza
> finanziaria, raccomandazione di investimento o sollecitazione al pubblico risparmio.

## Comandi

```bash
npm install                 # una sola volta
npm start                   # server di sviluppo su http://localhost:4200/
npm run build               # build di produzione in dist/vitanera/browser
npm test -- --no-watch      # test unitari (Vitest)
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

L’output non viene versionato: `dist/` resta in `.gitignore` e il sito viene ricompilato dal
workflow a ogni push.

## Struttura

```
src/app/
├─ core/
│  ├─ config/site.config.ts     testi legali centralizzati, navigazione, categorie
│  ├─ data/articles.data.ts     archivio delle analisi
│  ├─ data/glossary.data.ts     voci del glossario
│  ├─ data/legal.data.ts        testi di avvertenze, note legali, privacy
│  ├─ data/markets.data.ts      riferimenti numerici citati nelle analisi
│  ├─ data/signal.data.ts       indicatore operativo mostrato in panoramica
│  ├─ models/article.model.ts   modello dei contenuti e dei blocchi
│  └─ services/                 contenuti, orologio condiviso, presa visione
├─ shared/
│  ├─ legal/                    barra permanente, modale, avvertenza riutilizzabile, footer
│  └─ ui/                       icone, schede, badge di bias, orari, intestazione pagina
└─ features/
   ├─ home/                     panoramica e indicatore operativo
   ├─ articles/                 elenco, dettaglio, resa dei blocchi
   ├─ outlook/                  orizzonti breve · medio · lungo
   ├─ methodology/              metodologia e limiti dichiarati
   ├─ glossary/                 glossario
   ├─ legal/                    pagine di trasparenza
   └─ not-found/                404
```

## Aggiungere un’analisi

1. Aprire `src/app/core/data/articles.data.ts`.
2. Duplicare un oggetto `Article` esistente e modificarne i campi.
3. Inserirlo nell’array `ARTICLES` in fondo al file.

I blocchi disponibili per il corpo del testo sono: `paragraph`, `heading`, `list`, `callout`, `stats`,
`scenarios`, `balance`, `timeline`, `quote`, `note`. L’indice laterale viene generato automaticamente dai
blocchi `heading`.

Campi che alimentano la resa grafica: `bias` (direzione e forza), `certainty`, `horizons`, `takeaways`
(riquadro «In sintesi»), `invalidation` (riquadro di chiusura), `nextEvent`.

La sezione si sceglie con `category`: `fondamentali`, `correlazioni`, `geopolitica`. L’ordine
dell’archivio è calcolato da `publishedAt`, non dalla posizione nell’array.

## Aggiornare l’indicatore operativo

L’indicatore in panoramica vive in `src/app/core/data/signal.data.ts` e va aggiornato a mano dopo ogni
pubblicazione. Sintetizza le ultime analisi di **tutte** le sezioni, non solo dell’ultima pubblicata.

| Campo | Cosa contiene |
| --- | --- |
| `updatedAt` | Data e ora dell’aggiornamento. Fa fede per la scadenza. |
| `validityMinutes` | Durata della validità, oggi `60`. |
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
dell’ultima ora sono evidenziate nel colore della sezione. La soglia si cambia in
`RELATIVE_LIMIT_HOURS`.

## Stile per sezione

Ogni area ha una propria tinta e un proprio impaginato, costruiti sugli stessi token di forma,
spaziatura e tipografia.

| Sezione | Tinta | Impaginato |
| --- | --- | --- |
| Panoramica | oro | blocchi ampi, indicatore in evidenza |
| Fondamentali | rame | dossier numerato a righe piene |
| Correlazioni | verde salvia | matrice cross-asset con griglia strumenti |
| Geopolitica | terracotta | dispaccio cronologico con binario orario |
| Orizzonti | prugna | tre pannelli per orizzonte temporale |
| Metodologia e glossario | sabbia | schede e definizioni |
| Pagine legali | ambra | documento con indice laterale |

Le tinte sono definite in `src/styles.scss` nei blocchi `[data-accent='…']`; l’attributo viene
applicato al guscio dal metodo `accent()` di `src/app/app.ts`. Il segno di marca resta sempre oro e le
avvertenze legali sempre ambra, così da essere riconoscibili in qualunque sezione.

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
