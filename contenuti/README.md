# Contenuti

Testi in markdown tenuti fuori dalla build: né compilati, né serviti, né raggiungibili da un
indirizzo. Sono la materia prima per lavorarci sopra fuori dal sito — un grafo di conoscenza, una
ricerca, un’esportazione.

Le due cartelle hanno statuti opposti, e la differenza conta:

| Cartella  | Che cos’è                                    | Si modifica a mano |
| --------- | -------------------------------------------- | ------------------ |
| `analisi/` | copia generata dall’archivio del sito         | **no**             |
| `studio/`  | appunti scritti a mano, senza origine nel sito | sì                 |

## `analisi/`

Un markdown per analisi, con lo stesso nome dello slug — e quindi dello
`src/app/core/data/articles/<slug>.ts` da cui viene e dell’indirizzo `/analisi/<slug>` a cui
corrisponde. Frontmatter con i metadati, poi il testo: «In sintesi», i blocchi, le condizioni di
invalidazione, il grado di certezza, il prossimo appuntamento e il regime descritto.

Servono a lavorare sui testi fuori dal sito — un grafo di conoscenza, una ricerca, un’esportazione —
senza dover leggere TypeScript. Il sito non li apre mai: non sono compilati, non finiscono in
`dist/` e non sono raggiungibili da un indirizzo.

**Non si modificano a mano.** Sono riscritti per intero a ogni rigenerazione:

```bash
npm run analisi              # riscrive i markdown
npm run analisi -- --check   # non scrive niente, fallisce se sono vecchi
```

Per cambiare un testo si modifica il file dell’analisi sotto `src/app/core/data/articles/` e si
rilancia `npm run analisi`. La forma con `--check` è la prima cosa che fa `npm run build`, e lo
stesso confronto è ripetuto da `src/app/core/data/analisi.spec.ts`: un markdown vecchio, mancante o
di troppo ferma la pubblicazione invece di finire online disallineato.

Che cosa passa e che cosa no: passano tutti i testi, i numeri e le etichette, più i toni dei blocchi
dove distinguono una lettura favorevole da una contraria. Non passano le ancore dell’indice
laterale, che sono impianto del sito e non contenuto.

## `studio/`

Appunti di metodo: quadri di analisi geopolitica, gestione del rischio, psicologia della decisione,
microstruttura del mercato. Non nascono dal sito e non finiscono nel sito — sono scritti a mano e si
modificano a mano.

Si collegano fra loro con `[[nome-del-file]]` e citano la fonte in fondo, con i riferimenti di
pagina fra parentesi quadre. Nessuno script li tocca: `npm run analisi` guarda soltanto `analisi/`.
