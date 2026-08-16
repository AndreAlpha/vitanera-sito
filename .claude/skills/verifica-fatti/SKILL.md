---
name: verifica-fatti
description: Cerca online le notizie e i numeri che sciolgono i fatti rimasti in sospeso nelle analisi già pubblicate su Vitanera — condizioni di invalidazione mai verificate, rivendicazioni e ricostruzioni mai confermate, appuntamenti già passati, soglie e vincoli dell'indicatore operativo. Interroga soltanto le fonti dichiarate, giudica ogni fatto nella finestra del suo orizzonte, chiude in `outcomes.data.ts` gli esiti che le prove permettono di chiudere davvero, riverifica i numeri dell'indicatore senza spostarne la data, e riferisce che cosa resta aperto. Quando la verifica trova un fatto nuovo vero — non un prezzo che si è mosso — scrive il testo di un'analisi nuova nello stile di quelle in archivio e **invoca `pubblica-analisi` passandoglielo**, che è il solo modo in cui questa skill mette qualcosa in archivio. Usare quando l'utente chiede se ci sono novità, come è andata a finire una previsione, se una notizia riportata è stata poi confermata o smentita, o di riallineare i numeri del sito senza pubblicare nulla.
---

# Verificare i fatti in sospeso

L'archivio di Vitanera è pieno di frasi che aspettano un numero. «La rivendicazione
resta in piedi, cioè non confermata e non smentita.» «Non giudicabile: il rapporto
esce venerdì.» «Non c'è una lettura puntuale del biennale, quindi la condizione è
registrata come non scattata sulla direzione, non su un numero.»

Sono debiti. Questa skill li paga: prende i fatti che le analisi hanno lasciato
aperti, va a cercarli nelle fonti dichiarate, e riporta indietro un numero con una
data e una firma.

**Non è una rassegna stampa.** Non serve a sapere che cosa è successo nel mondo:
serve a sapere se è successo **quello che una specifica analisi aveva detto che
sarebbe stato decisivo**. Si parte dall'archivio e si va verso la notizia, mai il
contrario. Una ricerca che parte dalla notizia trova sempre qualcosa di
interessante e non chiude mai niente.

## Quando non è questa la skill giusta

| Situazione | Skill |
| ---------- | ----- |
| L'utente porta il testo di un'analisi da pubblicare | `pubblica-analisi` |
| L'utente chiede di aggiornare il calendario economico | `pubblica-analisi` (passo 1) |
| L'utente chiede se ci sono novità, o come è andata a finire | **questa** |
| L'utente chiede se una notizia riportata è stata confermata | **questa** |
| L'utente chiede di riallineare i numeri senza pubblicare | **questa** |

Le due si incastrano in un punto preciso: il passo 3 di `pubblica-analisi` chiude
gli esiti **con quello che sa in quel momento**, ed è il motivo per cui il registro
è pieno di «non giudicabile». Questa skill fa lo stesso lavoro con le fonti aperte
davanti, e va eseguita **prima** di pubblicare tutte le volte che si può: un esito
chiuso al buio non si riapre più (vedi il passo 5).

Se durante l'esecuzione salta fuori un fatto nuovo vero, il passo 9 ne scrive
l'analisi e il passo 10 la **passa a `pubblica-analisi`**, che fa il resto: file,
slug, categorie, indicatore, grafo, commit e push. Questa skill non scrive mai da
sé un file sotto `articles/` — la divisione del lavoro resta quella, ma la
consegna non è più a mano.

**Il cancello del passo 9 diventa quindi la cosa più delicata di tutta la skill.**
Finché il testo usciva solo nella risposta, un cancello troppo largo costava una
lettura in più all'utente; adesso costa una voce in archivio. Le regole che lo
tengono chiuso non si allentano per nessuna ragione, e nel dubbio si scrive il
testo, **non** lo si pubblica: vedi il passo 10.

---

## L'ordine dei passi

```
 0  capisci che cosa ti è stato chiesto    6  riverifica l'indicatore
 1  prendi l'ora e costruisci l'elenco     7  rigenera, formatta, compila, prova
 2  guarda quali fonti rispondono          8  commit
 3  cerca, un fatto alla volta             9  scrivi l'analisi, se c'è una novità vera
 4  giudica                               10  passala a pubblica-analisi
 5  chiudi gli esiti che si possono        11  riferisci
    chiudere
```

I passi 5 e 6 sono gli unici che scrivono su disco di loro iniziativa, e possono non
scrivere niente: una verifica che non trova nulla di nuovo è un risultato, non un
fallimento. In quel caso si salta al passo 11 e si dice che cosa si è controllato e
dove si è guardato.

I passi 9 e 10 condividono un cancello solo, ed è chiuso quasi sempre. Quando è
chiuso non si esegue né l'uno né l'altro.

---

## 0. Che cosa ti è stato chiesto

L'argomento è facoltativo. Senza argomento vale il giro di default; con argomento
si restringe il campo.

| Argomento | Che cosa controllare |
| --------- | -------------------- |
| _(niente)_ | Le analisi senza esito con l'orizzonte scaduto, **dalla più recente, fino a cinque**, più il pannello dei numeri del passo 6 |
| uno slug o un titolo | Solo quell'analisi, per intero |
| un tema (`Hormuz`, `Fed`, `oro`) | Tutti i fatti in sospeso che lo riguardano, senza limite di cinque |
| `tutte` | L'intero arretrato, dalla più recente |
| `numeri`, `indicatore` | Solo il passo 6: nessun esito, solo il pannello |

**Il tetto di cinque non è pigrizia.** Ogni chiusura richiede una ricerca vera per
ciascuna condizione, e un giro da venti analisi produce venti esiti superficiali —
cioè esattamente il difetto che il registro esiste per non avere. Se ne restano
fuori, dillo nel resoconto con quante e quali.

---

## 1. Prendi l'ora e costruisci l'elenco dei sospesi

Prima l'ora, perché tutto il resto si misura da lì:

```powershell
Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
```

Poi apri, in quest'ordine:

| File | Che cosa ci cerchi |
| ---- | ------------------ |
| `src/app/core/data/outcomes.data.ts` | quali analisi hanno già un esito, e con quale prova |
| `src/app/core/data/articles.data.ts` | l'elenco degli slug, per differenza |
| `contenuti/analisi/<slug>.md` | il testo delle analisi da controllare, molto più veloce dei `.ts` |
| `src/app/core/data/signal.data.ts` | `constraints`, `thresholds`, `confirming`, `contradicting` |

I markdown di `contenuti/analisi/` sono la copia leggibile dell'archivio e portano
già dentro tutto quello che serve: `invalidation` sotto «Cosa invaliderebbe questa
lettura», `prossimoAppuntamento` e `certezza` nel frontmatter, e l'esito sotto
«Come è andata» quando c'è. Leggi quelli, non il TypeScript — sono lo stesso
contenuto senza il rumore della sintassi.

### Le cinque famiglie di fatti in sospeso

**A — Analisi senza esito con l'orizzonte scaduto.** La differenza fra gli slug in
`ARTICLES` e quelli in `OUTCOMES`. Scadono così:

| Orizzonte | Si può giudicare dopo |
| --------- | --------------------- |
| `breve`   | qualche ora           |
| `medio`   | un paio di giorni     |
| `lungo`   | qualche settimana     |

**B — Condizioni chiuse senza una prova vera.** Sono dentro esiti già registrati, e
si riconoscono dalla forma dell'`evidence`: «non giudicabile», «non era ancora
pubblicato», «nessuna lettura puntuale», «registrata come non scattata perché non
lo è», «riportata» senza un numero. Queste **non si riscrivono** — vedi il passo 5
— ma si cercano lo stesso, perché dicono che cosa il registro crede di sapere e non
sa.

**C — Appuntamenti già passati.** Il `nextEvent` di ogni analisi nomina il
catalizzatore che avrebbe deciso la lettura. Quando quella data è passata, è la
verifica più informativa che esista: l'analisi aveva dichiarato in anticipo che cosa
guardare.

**D — Fatti riportati e mai confermati.** Le analisi con `certezza: "bassa"`, e in
ogni analisi le frasi che marcano una notizia non verificata: «secondo cinque
fonti», «rivendicazione», «manca una conferma indipendente», «piano riferito dalla
stampa», «ricostruzione». Sono i sospesi più genuini: un fatto riportato o diventa
un fatto o diventa una smentita, e in entrambi i casi la notizia c'è.

**E — Soglie e vincoli dell'indicatore.** Ogni `threshold` di `MARKET_SIGNAL` è un
numero corrente accanto a due tacche, e ogni `constraint` è un vincolo materiale con
scritto dentro, nel campo `watch`, il flusso dati su cui si misura. Sono già
formulati come domande verificabili: il campo `watch` è letteralmente la query da
fare.

### La forma dell'elenco

Prima di cercare qualunque cosa, scrivi l'elenco. Una riga per fatto:

```
[A] hormuz-non-ha-riaperto-otto-navi | cond. 3/5: «Un forte rimbalzo del petrolio»
    → Brent nella finestra 5 ago 10:35 → 6 ago 10:35
[D] iran-minaccia-gli-impianti-del-golfo | rivendicazione houthi contro petroliere saudite
    → conferma o smentita saudita, dal 6 ago in poi
[E] soglia Brent 80 $ (logora) | now 79,08
    → quotazione di adesso
```

Serve a due cose: impedisce che la ricerca scivoli sulla notizia del giorno, e
diventa lo scheletro del resoconto finale. Con più di tre o quattro fatti, tienilo
anche in `TodoWrite`.

---

## 2. Le fonti: quali rispondono davvero

Questo è l'elenco delle fonti ammesse. **Non se ne aggiungono altre** senza dirlo
nel resoconto, e mai per il gusto di trovare una conferma in più. Un sito che
ripubblica il dispaccio di una di queste, attribuendolo, non è una fonte in più: è
la stessa fonte letta da un'altra parte, e vale senza bisogno di annunciarlo.

Metà non è raggiungibile, ed è meglio saperlo prima di perderci un giro. Misurato
il 6 agosto 2026:

| Fonte | Ricerca | Lettura diretta | A che cosa serve |
| ----- | ------- | --------------- | ---------------- |
| `investing.com` | sì | **sì** | prezzi, rendimenti, probabilità Fed. È il pannello dei numeri |
| `federalreserve.gov` | sì | **sì** | comunicati, verbali, discorsi, decisioni: fonte primaria |
| `tradingeconomics.com` | sì | sì | livello del tasso ufficiale e data dell'ultima decisione |
| `arxiv.org` | sì | sì | letteratura, non cronaca: vedi sotto |
| `cmegroup.com` | sì | **no** (timeout) | FedWatch: la pagina è JavaScript, il numero si legge da investing.com |
| `newyorkfed.org` | sì | **no** (403) | operazioni, tassi di riferimento, indagini: si legge dai risultati di ricerca |
| `axios.com` | sì | **no** (403) | anticipazioni sull'amministrazione americana |
| `reuters.com` | **no** | **no** | il dominio è bloccato, **ma i dispacci si leggono lo stesso**: vedi sotto |
| `marketwatch.com` | **no** | **no** | idem, ma è Dow Jones e viene ripresa poco |
| `ft.com` | **no** | **no** | idem; le firme lunghe restano dietro il paywall |
| `wsj.com` | **no** | **no** | idem |
| `liaison.thomsonreuters.com` | — | **no** | hub di servizio Reuters dietro credenziali: non è un notiziario |

Il blocco non è un guasto e non è il sito che non risponde: queste testate hanno
accordi di licenza con altri e nel loro `robots.txt` escludono questo user agent. La
conseguenza pratica è che non si possono nemmeno mettere in `allowed_domains` — la
chiamata fallisce con un errore 400 che le nomina e la ricerca non parte.

**Il blocco però costa molto meno di quanto sembra**, e il paragrafo qui sotto è il
modo di aggirarne l'effetto senza aggirare il blocco.

### Il dispaccio si legge lo stesso: cerca il titolo, non l'argomento

**Questa è la tecnica più importante del passo, e va provata sempre prima di
dichiarare che una notizia non è verificabile.**

Quello che è bloccato è il **dominio**, non il giornalismo. Un dispaccio d'agenzia
nasce per essere ripreso: esce identico, con lo stesso titolo e gli stessi numeri,
su decine di siti che si lasciano leggere, e i più seri scrivono in chiaro da chi
viene.

Il modo di trovarlo non è cercare l'argomento — così tornano i riassunti di tutti —
ma **cercare il titolo del dispaccio**, che i ripubblicatori tengono alla lettera,
prefisso compreso:

```
WebSearch  query: "Exclusive-Iran threatens to hit Gulf states if US launches new strikes"
           (nessun allowed_domains: qui il filtro toglierebbe proprio i ripubblicatori)
```

Il 6 agosto 2026 quella ricerca ha restituito lo stesso pezzo su `usnews.com`,
`al-monitor.com`, `yahoo.com/news`, `newsnationnow.com` e altri; `al-monitor.com` si
è lasciato leggere per intero da `WebFetch` e dichiarava **«Wire Agency: Reuters»**,
con le cinque fonti, le telefonate di Araqchi ai ministri saudita, turco e
qatariota, il precedente degli attacchi ad Aramco del 2019 e l'appello di bin Salman
a Trump. Cioè l'esclusiva su cui poggia l'analisi del giorno prima, per esteso.

Il titolo, quando non lo conosci, si ricava dai risultati di una ricerca larga
sull'argomento: i ripubblicatori compaiono lì, e da uno di loro leggi il titolo
esatto per la seconda ricerca.

Dove cercare, in ordine di resa:

| Per | Dove |
| --- | ---- |
| Dispacci d'agenzia ripresi | ricerca sul titolo, senza filtro di dominio |
| Cronaca di mercato | `cnbc.com`, `kitco.com`, `barchart.com`, `bloomberg.com` |
| Dati primari americani | `eia.gov` (scorte), `bls.gov` (lavoro, prezzi), `treasury.gov` (aste) |
| Prezzi e probabilità Fed | il pannello dei numeri qui sotto |

> **Cita quello che hai letto davvero, e dove.** Se il pezzo è di Reuters e l'hai
> letto su Al-Monitor che lo attribuisce a Reuters, la prova dice «Reuters, letta su
> Al-Monitor». Sono due informazioni diverse e servono entrambe: la prima dice di
> chi è il giornalismo, la seconda rende la verifica ripetibile. Quello che non si
> fa mai è dedurre: un pezzo che non attribuisce niente non diventa Reuters perché
> gli somiglia.

### Che cosa resta davvero perso

Poco, e conviene sapere che cos'è. Va perso il **sito** — l'elenco dei titoli del
giorno, la sezione mercati, l'archivio di una testata — cioè la navigazione, non i
contenuti. E vanno perse le firme che nessuno ripubblica: i commenti, le analisi
firmate e i pezzi lunghi del Financial Times e del Wall Street Journal, che non sono
dispacci e restano dentro il loro paywall.

Per la cronaca dei fatti e per i numeri — che è quello che serve a chiudere un esito
— non manca quasi niente.

**Non aggirare il blocco** con `curl` o con altri modi di presentarsi diversamente:
è un'esclusione che l'editore ha messo apposta. La via della ripresa è più lenta di
mezzo minuto e non chiede a nessuno di fingere di essere qualcun altro.

### Il posto di arxiv

`arxiv.org` non chiude nessun esito: non pubblica cronaca. Serve a `contenuti/studio/`
— quando una verifica fa emergere un errore di metodo che si ripete, un paper è il
modo giusto di inquadrarlo. Usalo solo per quello, e solo se l'utente lo chiede o
se il resoconto sta per proporre una nota nuova di `studio/`.

---

## 3. Cerca, un fatto alla volta

Una ricerca per fatto dell'elenco, non una per fonte. La domanda si scrive dalla
condizione, in inglese, con dentro il numero e il periodo:

```
WebSearch  query: "Brent crude price August 5 6 2026 Hormuz talks"
           allowed_domains: ["investing.com","cnbc.com","cmegroup.com","eia.gov"]
```

Poi, quando la ricerca ha indicato dove guardare, leggi la pagina con `WebFetch`
sulle fonti che si lasciano leggere. Il riassunto della ricerca è generato: va bene
per orientarsi, non per essere copiato in una prova.

### Il pannello dei numeri

Questi sei indirizzi rispondono a `WebFetch` e coprono da soli quasi tutte le
condizioni di invalidazione che l'archivio scrive. Verificati il 6 agosto 2026; i
valori accanto servono solo a riconoscere una pagina che non ha caricato, non come
riferimento.

| Che cosa | Indirizzo | Restituiva |
| -------- | --------- | ---------- |
| XAU/USD | `investing.com/commodities/gold` | 4.327,67 $ |
| Brent | `investing.com/commodities/brent-oil` | 80,35 $ |
| Treasury 10 anni | `investing.com/rates-bonds/u.s.-10-year-bond-yield` | 4,629% |
| Dollar Index | `investing.com/currencies/us-dollar-index` | 99,630 |
| Probabilità Fed per riunione | `investing.com/central-banks/fed-rate-monitor` | Sett. 2026: 52,1% sulla fascia 3,75-4,00% |
| Tasso ufficiale e ultima decisione | `tradingeconomics.com/united-states/interest-rate` | 3,50-3,75%, fermo dal 29 luglio |

Due avvertenze sulla probabilità Fed, perché è il numero che l'archivio cita più
spesso e quello che si sbaglia più facilmente:

- La pagina dà **le fasce di tasso**, non «la probabilità di un rialzo». La
  probabilità di rialzo è la somma delle fasce **sopra** quella corrente. Con il
  tasso a 3,50-3,75%, il 52,1% sulla fascia 3,75-4,00% è la probabilità di un
  rialzo; il 47,9% sulla fascia corrente è quella che restino fermi.
- Va confrontata **con la stessa riunione** che l'analisi nominava. «Settembre» in
  un'analisi del 6 agosto è la riunione del 16 settembre 2026, non la prossima in
  elenco fra qualche mese.

### Tre trappole della rete

- **`WebFetch` tiene in cache 15 minuti per indirizzo.** In un giro lungo il prezzo
  che rileggi a fine sessione può essere quello di venti minuti prima. Per le
  soglie del passo 6 rileggi il pannello alla fine, non all'inizio.
- **Un 403 non è un errore tuo.** `newyorkfed.org`, `axios.com` e i pezzi di CNBC
  lo restituiscono sempre. Non ritentare: prendi quello che dà la ricerca e
  segnalalo come «dai risultati di ricerca, pagina non leggibile».
- **I fusi.** Il sito scrive in `+02:00`, le agenzie in UTC o ora di New York. Sei
  ore di scarto bastano a spostare un fatto dentro o fuori dalla finestra di
  un'analisi `breve`. Converti prima di decidere, e scrivi l'ora nella prova.

---

## 4. Giudica

### Si giudica nella finestra dell'orizzonte, non con il prezzo di adesso

È la regola che rende questa skill diversa dal guardare una quotazione.

Un'analisi `breve` pubblicata il 4 agosto alle 14:30 si giudica su quello che è
successo **fra le 14:30 e qualche ora dopo**. Se il Brent ha superato gli 82 dollari
il 5 e poi è rientrato, per quell'analisi la condizione **è scattata**, anche se il
prezzo di adesso è 80,35. E al contrario: un massimo raggiunto oggi non dice niente
su una lettura che è morta ieri.

| Tipo di condizione | Che cosa cercare |
| ------------------ | ---------------- |
| Livello di prezzo | l'**escursione** nella finestra, non l'ultima quotazione |
| Fatto avvenuto o no | notizie **datate dentro** la finestra |
| Dato in uscita | la diffusione, con il numero e il consenso |
| Posizione dichiarata | il comunicato o la trascrizione, sulla fonte primaria |

Se l'escursione dentro la finestra non si trova — succede spesso, i siti danno il
massimo di giornata e non quello di tre giorni fa — la condizione **non si giudica
lo stesso sul prezzo corrente**. Si registra come non verificabile, e il passo 5
dice che cosa farne.

### Riportato non è confermato

L'archivio distingue le due cose con cura e la verifica deve mantenerla. Una
rivendicazione che dopo due giorni nessuno ha né confermato né smentito **resta una
rivendicazione**: non diventa un fatto per anzianità. Il risultato onesto è
«ancora aperto dopo N giorni», ed è informativo — un attacco vero a una petroliera
saudita sarebbe stato confermato dai sauditi.

### L'ordine è obbligatorio, anche qui

Prima si legge la condizione, poi si cerca il dato, poi si scrive se è scattata.
Mai il contrario. Conoscendo già come è finita si trova sempre il modo di dire che
una parte aveva ragione, ed è il singolo errore che rende inutile tutto il registro.

Vale in particolare quando la ricerca restituisce un titolo che dà ragione
all'analisi: quello è il momento in cui si smette di cercare troppo presto. Se una
condizione è scattata, cerca anche la prova che **non** lo sia, e viceversa.

### Quattro stati, e nessun quinto

| Stato | Quando |
| ----- | ------ |
| `risolto` | c'è un numero o un fatto datato che dice sì o no |
| `aperto` | nessuna delle fonti dice niente: il sospeso resta |
| `smentito` | il fatto riportato è stato negato da una fonte primaria |
| `superato` | i fatti sono andati altrove e la domanda non ha più senso |

`superato` è il caso da non confondere con `risolto`: una condizione su un accordo
che nel frattempo è stato firmato non è «scattata», è diventata irrilevante. Dillo
così.

---

## 5. Chiudi gli esiti che si possono chiudere

Si scrive in `src/app/core/data/outcomes.data.ts`, e **solo** per le analisi della
famiglia A: quelle che un esito non ce l'hanno ancora.

Valgono per intero le regole del passo 3 di `pubblica-analisi`, che qui non si
ripetono se non nei punti dove le fonti aperte cambiano qualcosa:

- `conditions` contiene **tutte** le voci di `invalidation`, nello stesso ordine e
  con lo **stesso testo esatto** — un test lo confronta stringa per stringa.
- Il verdetto si ricava meccanicamente: zero scattate → `confermata`, tutte →
  `invalidata`, alcune → `parziale`. Un test lo ricalcola.
- `checkedAt` non può precedere il `publishedAt` dell'analisi né stare nel futuro.
- L'analisi **non si tocca**. Né il testo, né il bias, né l'invalidazione.

### Che cosa cambia avendo le fonti davanti

`evidence` adesso può contenere una prova vera, e allora **deve** contenerla. La
forma è: il numero, la data con l'ora, e chi l'ha detto.

```ts
{
  condition: 'Un Brent nuovamente sotto i 79 dollari.',
  triggered: false,
  evidence:
    'Il Brent non è più sceso sotto quel livello nella finestra: 79,08 $ alle 08:40 del 6 agosto ' +
    '(CNBC, che cita Reuters) e 80,35 $ alla verifica delle 19:20 (Investing.com). Il minimo di ' +
    'giornata riportato è 78,55 $, quindi la soglia è stata toccata in seduta ma non tenuta.',
}
```

Confrontala con quelle già in archivio, scritte al buio: «Nessun ritorno sotto quel
livello riportato». È la differenza fra un registro e un'impressione.

E quando la prova non c'è, **si dice che non c'è**, con la stessa precisione:

```ts
evidence:
  'Non verificabile: nessuna delle fonti raggiungibili pubblica l’escursione del biennale ' +
  'del 5 agosto, e Reuters e MarketWatch non sono leggibili. Registrata come non scattata ' +
  'sulla direzione descritta, non su un numero.',
```

### Quando l'esito è `senza-verifica`

Quando **nessuna** condizione è verificabile. Non quando è comodo: se tre condizioni
su cinque hanno una prova, l'esito si scrive con tutte e cinque e le due senza prova
portano l'`evidence` che spiega perché.

`senza-verifica` va scritto con `conditions: []`. Attenzione: il test sulla
completezza **salta** gli esiti `senza-verifica` invece di controllarli, quindi un
elenco parziale passerebbe la build senza segnalare niente. È l'unico punto degli
esiti dove i test non ti coprono: o tutte le condizioni, o nessuna.

### Gli esiti già registrati non si riscrivono

Un'analisi ha un esito solo, e un test lo impone. Se la verifica scopre che una
condizione chiusa come «non giudicabile» era invece scattata, **quell'esito resta
com'è**.

Non è un limite tecnico da aggirare, è il motivo per cui il registro vale qualcosa:
un archivio in cui i verdetti si aggiustano quando si scopre come è andata misura
la memoria di chi lo compila e non le sue previsioni.

Quello che si fa invece:

1. La scoperta va nella sezione **«esiti chiusi al buio»** del resoconto, con il
   numero che la dimostra.
2. Se la stessa cosa è successa più volte, è materia per la `lesson` del **prossimo**
   esito che scriverai — è il campo giusto perché parla del metodo, non del verdetto.
3. Se l'utente vuole che le correzioni siano registrabili, serve una modifica al
   modello — un esito che ne rivede un altro, con il test sulla unicità da
   ripensare. **Proponila, non farla**: è una decisione editoriale sull'archivio.

---

## 6. Riverifica l'indicatore

`MARKET_SIGNAL` in `signal.data.ts` porta i numeri che invecchiano più in fretta di
tutto il sito. Questa skill li riallinea **senza pubblicare niente**, ed è il caso
per cui esiste il campo `checkedAt`.

### Che cosa si può toccare e che cosa no

| Campo | Si aggiorna? |
| ----- | ------------ |
| `checkedAt` | **sì**, all'ora del passo 1. È lo scopo del passo |
| `thresholds[].now` e `.display` | **sì**, con il valore letto adesso |
| `constraints[].value` e `.state` | sì, se il numero materiale si è mosso |
| `confirming`, `contradicting` | sì: sono etichette con dentro un valore |
| `readings[].strength` | sì, se una lettura si è logorata |
| `readings[].direction`, `.regime`, `.invalidation` | **no** |
| `headline`, `stance`, `favours`, `avoid` | **no** |
| `updatedAt` | **mai** |
| `sources` | **mai** |

`updatedAt` è inchiodato dal test al `publishedAt` dell'ultima analisi: dice **quale
analisi** l'indicatore riassume, non quando qualcuno ha guardato i prezzi. Spostarlo
fa fallire la build.

La direzione e il regime sono un giudizio dell'autore e cambiarli è pubblicare
un'analisi senza scriverla. Se i numeri nuovi la contraddicono, **quello è il
risultato da riferire**, non da correggere di nascosto.

### Le tre regole dei numeri

1. **`checkedAt` fra `updatedAt` e adesso.** Sotto il primo o oltre il secondo, il
   test fallisce. Si omette solo se coincide con `updatedAt`.
2. **Nessuna soglia può coincidere col valore corrente.** `mark.at` diverso da
   `t.now`, ed è un test. Con il Brent esattamente a 80,00 e una tacca a 80, non si
   arrotonda per far passare la build: si scrive il valore vero con i decimali
   (`80,02`) o, se è davvero identico, si dice nel resoconto che la soglia è stata
   raggiunta e si lascia decidere all'utente.
3. **Una soglia superata non si sposta.** Se il Brent ha passato gli 80 dollari,
   `now` diventa 80,35 e la tacca resta a 80. La scala disegnerà il pallino oltre la
   tacca, ed è esattamente quello che deve mostrare: la lettura si sta logorando.
   Spostare la tacca per tenerla davanti al prezzo è il modo di non avere mai torto.

### Se un vincolo si scioglie

`state` vale `fermo`, `si-allenta` o `sciolto`. Un vincolo che passa a `sciolto`
cambia la lettura quanto uno che regge, e non è un aggiornamento di numeri: dillo in
apertura del resoconto, prima di tutto il resto. È la cosa più importante che questa
skill possa trovare.

---

## 7. Rigenera, formatta, compila, prova

Dipende da che cosa hai toccato:

| Hai toccato | Devi rigenerare |
| ----------- | --------------- |
| `outcomes.data.ts` | `npm run analisi` — l'esito finisce nel markdown dell'analisi |
| solo `signal.data.ts` | niente: l'indicatore non compare nei markdown |
| niente | salta al passo 9 |

Poi, sempre, nell'ordine:

```powershell
npx prettier --write "src/app/core/data/**/*.ts"
npm run build
npm test -- --no-watch
```

Tutti e tre devono passare e **devi averne visto l'esito** prima di toccare `git`.
Il glob ha due asterischi: con uno solo i file sotto `data/articles/` non vengono
formattati.

### Poi il grafo, solo se hai chiuso un esito

Se `contenuti/analisi/*.md` è cambiato, il grafo va riaggiornato: si invoca la
**skill** `graphify` con `./contenuti --update`, mai il binario da terminale.

Due cose che fanno perdere tempo se non le sai:

- `--update` **segnala più file di quelli davvero cambiati**, perché il manifest
  invecchia. Prima di dispacciare gli agenti di estrazione, restringi l'elenco con
  `git diff --name-only contenuti/` e lavora su quello.
- In `contenuti/` i concetti condivisi fra documenti usano l'identificativo
  `entity_*`, non la regola di default della skill. Sbagliarla scollega i nodi
  centrali e dimezza gli archi.

`graphify-out/` è escluso da git e non va aggiunto al commit.

---

## 8. Commit

Solo a build e test superati, e **solo se qualcosa è cambiato davvero**.

```powershell
git status --short
```

Ci si aspetta al massimo: `outcomes.data.ts`, i `contenuti/analisi/<slug>.md` degli
esiti chiusi, `signal.data.ts`. **Se compare un file sotto `src/app/core/data/articles/`,
fermati**: hai modificato un'analisi pubblicata, che è vietato. Torna indietro e
guarda che cosa.

```powershell
git add -A
git commit -m @'
Verifica dei fatti in sospeso: <quanti risolti> su <quanti controllati>

- Esito di <slug>: <verdetto>, <N> condizioni su <M> scattate, con fonte.
- <fatto riportato>: confermato/smentito da <fonte>, <data>.
- Indicatore riverificato alle <ora>: <quali numeri si sono mossi>.
- Restano aperti: <quanti> sospesi, per <ragione>.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
'@
```

Niente apostrofi tipografici né accenti dentro l'here-string. Mai `git push --force`.

Se non hai scritto niente, **non fare un commit vuoto**: il resoconto del passo 11 e
l'eventuale analisi del passo 9 sono il prodotto della sessione.

### Il push dipende dal cancello del passo 9

Il commit si fa sempre; il push no, e la ragione è concreta.

| Cancello del passo 9 | Che cosa fare |
| -------------------- | ------------- |
| **chiuso** — nessuna analisi da pubblicare | `git push origin master`, e questa skill ha finito |
| **aperto** — il passo 10 chiamerà `pubblica-analisi` | **non spingere**: commit e basta |

Il workflow di pubblicazione dichiara `concurrency: group: pages` con
`cancel-in-progress: true`. Due push a pochi minuti l'uno dall'altro finiscono
quindi nello stesso gruppo, e **il secondo annulla il deploy del primo mentre è
ancora in coda** — il run risulta fallito con `Deployment cancelled` senza che
nessuno abbia sbagliato niente. Lasciando il commit senza push, il push del passo 12
di `pubblica-analisi` porta su entrambi i commit in una volta: un run solo, un
deploy solo, e la storia resta divisa in due commit leggibili invece che in uno
misto.

---

## 9. Scrivi l'analisi, ma solo se c'è una novità vera

Questo passo produce **il testo di un'analisi nuova**, nello stile di quelle in
archivio. Il passo 10 lo consegna a `pubblica-analisi`; qui si scrive soltanto.

Il testo non va su disco: niente file sotto `articles/`, niente markdown in
`contenuti/`, nessuno slug, nessuna data di pubblicazione. Quei mestieri sono di
`pubblica-analisi`, che rifarà il suo giro — calendario, grafo, categorie,
indicatore — e **ha il diritto di cambiare le conclusioni di questo testo** come
farebbe con qualunque testo grezzo. Non è un'ingerenza da correggere: è la stessa
separazione che vale quando il testo arriva dall'utente, e va lasciata funzionare
anche quando l'autore del testo sei tu di due minuti fa.

### Il cancello

**Di default è chiuso.** Si apre solo se la verifica ha prodotto almeno una di
queste cinque cose, e ognuna va nominata con il numero che la dimostra:

| Si apre se | Perché |
| ---------- | ------ |
| Un fatto in sospeso è passato a `risolto` o `smentito` | Una rivendicazione confermata, una ricostruzione negata, un piano diventato ordine: è un fatto che prima non c'era |
| Un vincolo materiale è passato a `si-allenta` o `sciolto` | Un vincolo che smette di vincolare cambia la lettura quanto uno che regge |
| Una soglia `invalida` è stata superata | Una lettura dichiarata è decaduta: è la notizia più forte che questo archivio possa dare, perché l'aveva scritta prima |
| Un `nextEvent` è passato e il dato ha contraddetto la lettura | L'analisi aveva dichiarato in anticipo che cosa guardare, e quello che è uscito dice il contrario |
| Un dato macro è uscito o una decisione è stata presa | Il caso ordinario: c'è un numero nuovo al mondo |

**Resta chiuso**, e non c'è discussione:

| Non basta | Perché |
| --------- | ------ |
| Il prezzo si è mosso nella direzione già descritta | È la conferma di un'analisi che c'è già: si aggiorna l'indicatore, passo 6 |
| Il prezzo si è mosso e basta | Non è un fatto, è una quotazione |
| Una soglia `logora` è stata sfiorata o superata | Da sola dice che la lettura si sta consumando, e per quello c'è la scala dell'indicatore |
| Una rivendicazione è ancora aperta | Il silenzio che dura è informativo, ma è già scritto nell'analisi che l'ha sollevata |
| Hai trovato un pezzo interessante | La rassegna stampa non è questo archivio |

> **Una sola analisi per giro, sulla novità più forte.** Se il cancello si apre per
> tre fatti diversi, il testo è comunque uno solo e gli altri due entrano dentro
> come contesto. Ventidue analisi in quattro giorni hanno prodotto il gruppo di nodi
> meno coeso di tutto il grafo: un archivio si rilegge fra un mese, una diretta no.

Se il cancello resta chiuso, **dillo esplicitamente nel resoconto** con quale delle
righe della seconda tabella si è applicata. È un'informazione: significa che il
quadro descritto regge.

### Prima di scrivere, collòcalo

Il fatto è nuovo per il mondo; per l'archivio potrebbe non esserlo. Interroga il
grafo — la skill `graphify` — con le stesse tre domande del passo 4 di
`pubblica-analisi`:

```powershell
graphify query "che cosa dicevano le ultime analisi su <strumento e tema>"
graphify query "quale quadro di metodo si applica a <il meccanismo>"
graphify path "<il fatto nuovo>" "<il tema dell'analisi precedente>"
```

Tre cose da cercare, e la terza è quella per cui questa skill è nella posizione
migliore di chiunque altro:

1. **L'analisi che diceva il contrario.** Se c'è, il testo deve nominarla.
2. **La nota di `contenuti/studio/` che inquadra il meccanismo.** Si usa con parole
   proprie, senza citazioni di pagina, rimandando a `/metodologia`.
3. **L'analisi che questo fatto giudica.** È il vantaggio di scrivere partendo da
   una verifica invece che da un grafico: il fatto nuovo di solito è la risposta a
   una domanda che una analisi precedente aveva posto per iscritto. Quel legame va
   detto — «la condizione dichiarata il 4 agosto è scattata, e questo è il numero» —
   ed è la cosa che un'analisi scritta guardando il prezzo non può avere.

### La forma

La stessa dei markdown in `contenuti/analisi/`, senza le parti che genera il sito.
In italiano, numeri allo stile del sito (`4.078`, `3,3%`, `≈ 92 $`).

```markdown
**Titolo** — sintetico, senza punto finale, senza maiuscole enfatiche
**Occhiello** — `Tema · Sottotema`, corto e specifico
**Sommario** — due o tre righe sul fatto nuovo e perché conta

## In sintesi
- Quattro o cinque punti, uno per fatto, nell'ordine del testo

[Il corpo: paragrafi con sezioni `##`, una tabella dei numeri con la nota
 che non sono quotazioni in tempo reale, la sequenza cronologica se serve]

## Cosa invaliderebbe questa lettura
- Le condizioni, ognuna verificabile con un numero

## Quanto è solida questa lettura
[Due livelli: sui fatti e sulla conclusione. Sempre tutti e due]

## Prossimo appuntamento
**Quando** — Che cosa, e perché è quello che decide

## Regime descritto
Impostazione su <strumento>: <direzione>, forza <bassa|media|alta>, orizzonte <breve|medio|lungo>.
[Una riga sul meccanismo, non sul prezzo]

## Fonti consultate
- Solo quelle che hai letto davvero, con la data
```

Non scrivere: slug, categorie, `publishedAt`, ancore, blocchi TypeScript. Non
scrivere **mai** la dicitura su chi pensa e chi scrive né le avvertenze di rischio:
le mette il sito da sé, e scritte anche qui farebbero fallire due test che le
contano.

### Le cinque regole che si pagano dopo

Sono errori che compilano, passano i test e si scoprono al controllo successivo.

1. **`certezza` si calibra sui fatti, non sulla conclusione.** Se il fatto nuovo
   viene da una ricostruzione o da fonti anonime, è `bassa` — esiste e va usata. Se
   è un dato pubblicato o un comunicato ufficiale, è `alta` anche quando la lettura
   che se ne ricava è fragile. La fiducia nella conclusione va nell'altra metà di
   «Quanto è solida», sempre.
2. **`medio` sono i giorni, non le settimane.** Fuori di qui «medio periodo» vuol
   dire mesi; qui `breve` sono ore, `medio` giorni, `lungo` settimane. Traduci, non
   copiare. E `lungo` va usato quando serve: riserve, debito, rendimenti reali,
   regime monetario.
3. **Ambiguità di direzione non è forza bassa.** Se lo stesso fatto spinge in due
   direzioni — rifugio da una parte, rendimenti dall'altra — la direzione è
   `neutrale-rialzista` o `neutrale-ribassista`, non `rialzista` con forza `bassa`.
4. **Almeno una condizione va ancorata a qualcosa che il prossimo controllo citerà
   di sicuro.** È scritto nero su bianco nel registro degli esiti: quattro condizioni
   su cinque erano livelli di prezzo e tre non avevano una lettura puntuale al
   momento della verifica. Il conteggio dei transiti, un attacco avvenuto o no, il
   livello del greggio si ritrovano sempre; il rendimento del biennale no.
5. **Metti una soglia che logora, non solo una che uccide.** Una lettura che passa
   da 4,60% a 4,64% con l'invalidazione al 4,70% viene registrata «confermata» per
   tutto il tempo in cui si stava sfaldando.

### Il verso, di nuovo

Il testo si scrive **dopo** aver chiuso gli esiti del passo 5, mai prima. Scrivendo
prima si finisce per cercare nella verifica la conferma di quello che si è già
deciso di dire, ed è lo stesso errore del verdetto scritto prima delle condizioni —
solo spostato di un passo.

---

## 10. Passala a `pubblica-analisi`

Si esegue **solo se il cancello del passo 9 si è aperto**. Se è rimasto chiuso non
c'è niente da consegnare: si va al passo 11 e si dice quale riga lo ha tenuto chiuso.

Si invoca la skill `pubblica-analisi` passandole **il testo del passo 9 e nient'altro**:
niente preamboli, niente istruzioni, niente note su come è stato prodotto. Quella
skill si aspetta materia prima, e tratta tutto quello che riceve come testo
dell'analisi — una riga di contorno finirebbe dentro l'articolo.

### Che cosa succede dall'altra parte, e che cosa non va rifatto

`pubblica-analisi` rifà il suo giro completo, ed è giusto così. Tre punti in cui i
due lavori si toccano e conviene sapere in anticipo come vanno:

| Passo di `pubblica-analisi` | Che cosa trova, arrivando da qui |
| --------------------------- | -------------------------------- |
| **1 — calendario** | Va rigenerato lo stesso: sono passati minuti, non ore, ma quel passo esiste per ragioni sue e non costa nulla |
| **3 — chiudi gli esiti aperti** | Li hai appena chiusi tu, con le fonti davanti. Sei nella stessa sessione e lo sai: non riaprirli, non riscriverli, e se non ne resta nessuno da chiudere dillo e vai avanti |
| **7 — indicatore** | Qui c'è l'unica cosa che si rompe da sola: vedi sotto |

### `checkedAt` va tolto, ed è l'unico errore che i test non prendono

Il passo 6 di questa skill riverifica i numeri dell'indicatore **senza spostare
`updatedAt`**, e registra l'ora del controllo in `checkedAt`. Il passo 7 di
`pubblica-analisi` sposta `updatedAt` in avanti, sul `publishedAt` dell'analisi
nuova.

Il risultato, se nessuno interviene, è un `checkedAt` **precedente** a `updatedAt`:
la scheda direbbe di essere stata ricontrollata prima di essere scritta. Nessun test
lo intercetta, perché il campo è facoltativo e il vincolo è solo di buon senso.

> **Quando `pubblica-analisi` sposta `updatedAt`, `checkedAt` si cancella.** Torna
> utile alla verifica successiva, non a questa: serve a dire «i numeri sono più
> recenti del testo», e appena il testo è più recente dei numeri non ha più niente
> da dire.

### Se `pubblica-analisi` si ferma

Può fermarsi per due ragioni diverse, e vanno riferite in modo diverso.

- **Si ferma prima del commit** — un test rosso, una categoria che non compila, un
  markdown non rigenerato. È un problema vero: risolvilo lì dentro, perché il testo
  è già scritto e buttarlo via costa più che sistemarlo.
- **Il push va a buon fine ma il deploy fallisce** — l'analisi **è pubblicata**. Il
  repository ha tutto, i test sono verdi, e quello che manca è solo la copia online.
  Non riscrivere niente e non ripubblicare: si riferisce che il deploy è in ritardo
  e si distingue chiaramente fra «l'analisi non esiste» e «l'analisi esiste e non si
  vede ancora».

---

## 11. Riferisci

Il resoconto è il vero prodotto di questa skill. Ha cinque parti, in quest'ordine —
la prima è quella che l'utente stava cercando, e va per prima anche quando le altre
sono più lunghe.

**1. Che cosa è cambiato.** I fatti che si sono risolti, uno per riga, con il numero,
la data e la fonte. Se un vincolo dell'indicatore si è sciolto o una soglia è stata
superata, sta qui e in cima.

**2. Che cosa resta aperto.** I sospesi che nessuna fonte ha chiuso, con **perché**:
«nessuna conferma saudita a due giorni dalla rivendicazione» è un risultato,
«non trovato» non lo è. Distingui il silenzio delle fonti dal limite della
raccolta — ma prima di dichiarare un limite, **devi aver provato la ricerca sul
titolo del dispaccio**: «non leggibile perché è su Reuters» non è una risposta
accettabile se quella ricerca non è stata fatta.

**3. Gli esiti chiusi.** Quale analisi, quale verdetto, quante condizioni su quante,
e il numero che lo dimostra. Più, separatamente, gli **esiti chiusi al buio** che la
verifica ha scoperto essere sbagliati — con la nota che non si riscrivono e perché.

**4. L'analisi, o perché non c'è.** Se il cancello del passo 9 è rimasto chiuso,
**una riga che dice quale regola l'ha tenuto chiuso**: «il prezzo si è mosso nella
direzione già descritta» è un risultato, e vuol dire che il quadro regge.

Se invece si è aperto, qui non va il testo — è già in archivio, e ripeterlo per
intero raddoppia la risposta senza aggiungere niente. Vanno quattro righe su **che
cosa ne ha fatto `pubblica-analisi`**: con quale titolo e quali categorie è uscita,
a che ora, e soprattutto **se ha cambiato direzione, orizzonte o forza rispetto a
come l'avevi scritta e perché**. Quest'ultima è la parte che conta: significa che il
grafo o l'archivio hanno detto qualcosa che la verifica da sola non vedeva, ed è
un'informazione sul metodo, non sul mercato.

Se il deploy è fallito ma il push è passato, dillo qui in una riga sola e senza
allarme: l'analisi esiste, è online che è in ritardo.

**5. Dove hai guardato.** Le fonti interrogate e quelle che non hanno risposto. Serve
a rendere ripetibile la verifica, e serve all'utente per sapere se il silenzio è del
mondo o della rete.

---

## Che cosa non fare, mai

- **Non modificare un'analisi pubblicata.** Nessun campo, per nessuna ragione. Se
  un numero era sbagliato, l'analisi resta com'era e la cosa si scrive nell'esito.
- **Non riscrivere un esito già registrato**, nemmeno per correggerlo. Passo 5.
- **Non spostare `updatedAt`** dell'indicatore. Passo 6.
- **Non inventare una fonte**, e non attribuire a Reuters quello che hai letto
  altrove. Cita chi hai letto.
- **Non usare il prezzo di adesso** per giudicare una lettura di tre giorni fa.
  Passo 4.
- **Non chiudere un esito perché è comodo chiuderlo.** `senza-verifica` e «resta
  aperto» sono risultati legittimi; un verdetto inventato non lo è.
- **Non scrivere un'analisi perché il giro ha prodotto poco.** Il cancello del passo
  9 non si apre per riempire il resoconto, e adesso che il passo 10 pubblica davvero
  quel testo la regola vale il doppio: un'analisi senza fatto nuovo lascia in
  archivio una voce che si contraddice con quella di due ore prima, e da lì non si
  toglie più.
- **Non pubblicare da sé.** Nessun file sotto `articles/`, nessuno slug, nessuna
  data di pubblicazione, nessun commit dell'analisi scritti a mano da questa skill:
  si passa il testo a `pubblica-analisi` e si lascia fare a lei. Scrivere gli stessi
  file da due parti è il modo più rapido per far divergere archivio e markdown.
- **Non discutere le scelte di `pubblica-analisi`.** Se cambia direzione, orizzonte
  o categorie rispetto al testo consegnato, si riporta la sua scelta e la sua
  ragione. Il testo del passo 9 è materia prima anche quando l'hai scritto tu.
