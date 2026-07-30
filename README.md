# Vitanera

Sito in Angular 21 dedicato a macroeconomia, banche centrali, geopolitica e XAU/USD.
Tema scuro con accento oro, contenuti organizzati per sezioni e avvertenze legali diffuse in ogni schermata.

> **Avvertenza.** Il sito non è una testata giornalistica ai sensi della L. 62/2001 e non è registrato presso
> alcun tribunale. I contenuti hanno finalità informative e didattiche e non costituiscono consulenza
> finanziaria, raccomandazione di investimento o sollecitazione al pubblico risparmio.

## Comandi

```bash
npm install     # una sola volta
npm start       # server di sviluppo su http://localhost:4200/
npm run build   # build di produzione in dist/vitanera
npm test        # test unitari (Vitest)
```

## Struttura

```
src/app/
├─ core/
│  ├─ config/site.config.ts     testi legali centralizzati, navigazione, categorie
│  ├─ data/articles.data.ts     archivio delle analisi
│  ├─ data/glossary.data.ts     voci del glossario
│  ├─ data/legal.data.ts        testi di avvertenze, note legali, privacy
│  ├─ data/markets.data.ts      riferimenti numerici citati e fattori sintetizzati
│  ├─ models/article.model.ts   modello dei contenuti e dei blocchi
│  └─ services/                 contenuti, presa visione delle avvertenze
├─ shared/
│  ├─ legal/                    barra permanente, modale, avvertenza riutilizzabile, footer
│  └─ ui/                       icone, schede, badge di bias, intestazione pagina
└─ features/
   ├─ home/                     panoramica
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
