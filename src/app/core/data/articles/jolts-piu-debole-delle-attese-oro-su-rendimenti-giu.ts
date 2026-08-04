/**
 * jolts-piu-debole-delle-attese-oro-su-rendimenti-giu
 *
 * Copia leggibile in `contenuti/analisi/`, rigenerata da `npm run analisi`.
 * Le modifiche si fanno qui, mai nel markdown.
 */
import type { Article } from '../../models/article.model';
import { AUTHOR } from '../author';

export const joltsPiuDeboleDelleAttese: Article = {
  slug: 'jolts-piu-debole-delle-attese-oro-su-rendimenti-giu',
  categories: ['usa', 'tasso-di-interesse', 'fed'],
  title: 'JOLTS più debole delle attese: oro su, rendimenti giù',
  kicker: 'Dati USA · Offerte di lavoro',
  dek:
    'Le offerte di lavoro di giugno scendono a 7,359 milioni, sotto le attese e sotto il dato di maggio ' +
    'rivisto al ribasso. Per la prima volta in due giorni la reazione è coerente su tutti i fronti: oro in ' +
    'rialzo, rendimenti in calo, dollaro sotto quota 100.',
  publishedAt: '2026-08-04T16:30:00+02:00',
  author: AUTHOR,
  readingMinutes: 4,
  tags: ['JOLTS', 'Mercato del lavoro', 'Fed', 'Rendimenti', 'Dollaro'],
  instruments: ['XAU/USD', 'Treasury', 'DXY', 'Brent'],
  horizons: ['breve', 'medio'],
  bias: {
    asset: 'XAU/USD',
    direction: 'rialzista',
    strength: 'media',
    regime:
      'Mercato del lavoro leggermente meno teso che riduce la necessità di un rialzo Fed ravvicinato e ' +
      'attenua il segnale restrittivo dell’ISM. La differenza rispetto agli ultimi aggiornamenti è che ' +
      'stavolta oro, dollaro e rendimenti confermano nello stesso momento invece di contraddirsi.',
  },
  certainty: 'alta',
  certaintyNote:
    'Alta sui dati, che sono pubblicati dal Bureau of Labor Statistics e completi delle revisioni; ' +
    'medio-alta sulla lettura immediata, perché una singola rilevazione mensile non fa una tendenza e ' +
    'assunzioni e licenziamenti restano stabili.',
  takeaways: [
    'Le offerte di lavoro statunitensi sono scese a 7,359 milioni a giugno, sotto i 7,440 milioni attesi e i 7,537 milioni di maggio, questi ultimi rivisti al ribasso.',
    'Il tasso di posti vacanti è calato dal 4,6% al 4,4%, mentre assunzioni, dimissioni volontarie e licenziamenti sono rimasti sostanzialmente stabili.',
    'La sorpresa non è enorme, ma arriva dopo l’ISM molto forte e segnala che il mercato del lavoro non sta accelerando insieme all’industria.',
    'La reazione è stata coerente su tutti i fronti: XAU/USD verso i 4.080-4.085 dollari, decennale dall’area del 4,70% verso circa il 4,64%, DXY di nuovo sotto quota 100 intorno a 99,89.',
    'Bias moderatamente rialzista intraday, e più solido degli aggiornamenti precedenti proprio perché confermato contemporaneamente da oro, dollaro e rendimenti.',
  ],
  invalidation: [
    'XAU/USD che non riesce a mantenersi sopra i 4.070 dollari circa.',
    'Il rendimento del decennale che torna sopra il 4,70%.',
    'Il DXY nuovamente sopra quota 100.',
    'Nuovi sviluppi diplomatici concreti che riducano fortemente la domanda di bene rifugio.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      lead: true,
      text: 'Le offerte di lavoro statunitensi sono scese a 7,359 milioni a giugno, sotto i 7,440 milioni attesi e sotto i 7,537 milioni di maggio, a loro volta rivisti al ribasso. Il tasso di posti vacanti è calato dal 4,6% al 4,4%.',
    },
    {
      kind: 'stats',
      title: 'Il dato e le attese',
      caption:
        'Dati del Bureau of Labor Statistics riferiti a giugno, non quotazioni in tempo reale.',
      items: [
        {
          label: 'Offerte di lavoro',
          value: '7,359 mln',
          tone: 'bull',
          note: 'Attese 7,440 mln',
        },
        {
          label: 'Dato di maggio',
          value: '7,537 mln',
          tone: 'bull',
          note: 'Rivisto al ribasso',
        },
        {
          label: 'Tasso di posti vacanti',
          value: '4,4%',
          tone: 'bull',
          note: 'Dal 4,6% precedente',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'warn',
      title: 'Raffreddamento graduale, non crisi occupazionale',
      text: 'Il JOLTS non dimostra ancora un vero deterioramento del lavoro: le assunzioni sono rimaste a 5,3 milioni e i licenziamenti non sono aumentati in modo significativo. Si sta restringendo la domanda di lavoro, non si sta rompendo l’occupazione.',
    },
    {
      kind: 'heading',
      text: 'La reazione dei prezzi',
      anchor: 'reazione',
    },
    {
      kind: 'scenarios',
      title: 'Il movimento subito dopo il dato',
      caption:
        'Livelli citati dalle fonti al momento della scrittura, non quotazioni in tempo reale.',
      items: [
        {
          label: 'XAU/USD',
          tone: 'bull',
          text: 'Salito verso i 4.080-4.085 dollari, tornando vicino alla parte alta del recente intervallo.',
        },
        {
          label: 'Treasury a 10 anni',
          tone: 'bull',
          text: 'Sceso dall’area del 4,70% verso circa il 4,64%.',
        },
        {
          label: 'DXY',
          tone: 'bull',
          text: 'Tornato sotto quota 100, intorno a 99,89.',
        },
      ],
    },
    {
      kind: 'callout',
      tone: 'bull',
      title: 'Per la prima volta i tre canali dicono la stessa cosa',
      text: 'Oro su, rendimenti giù, dollaro più debole: è una reazione cross-asset coerente. Negli aggiornamenti delle ultime due giornate mancava sempre almeno una gamba — le azioni che non cedevano, il decennale che saliva invece di scendere, il dollaro fermo sui minimi senza muoversi. È questa contemporaneità a rendere il segnale più solido, più del dato in sé.',
    },
    {
      kind: 'heading',
      text: 'Perché conta per XAU/USD',
      anchor: 'perche-conta',
    },
    {
      kind: 'paragraph',
      text: 'Un mercato del lavoro leggermente meno teso riduce la necessità per la Federal Reserve di alzare nuovamente i tassi in tempi brevi. Il dato attenua quindi parte del segnale restrittivo arrivato ieri dall’ISM: l’industria corre, il lavoro no, e per la banca centrale le due cose non chiedono la stessa risposta.',
    },
    {
      kind: 'scenarios',
      title: 'Effetto immediato probabile',
      items: [
        {
          label: 'Oro',
          tone: 'bull',
          text: 'Positivo.',
        },
        {
          label: 'Dollaro',
          tone: 'bull',
          text: 'Moderatamente negativo, quindi favorevole al metallo.',
        },
        {
          label: 'Treasury',
          tone: 'bull',
          text: 'Rendimenti in calo, soprattutto se il mercato riduce le probabilità di un rialzo della Fed.',
        },
        {
          label: 'Petrolio',
          tone: 'neutral',
          text: 'Impatto diretto limitato: resta dominato dalle notizie su Iran e Hormuz.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Interpretazione aggiornata',
      anchor: 'interpretazione',
    },
    {
      kind: 'paragraph',
      text: 'Il bias su XAU/USD passa a moderatamente rialzista sull’orizzonte intraday. Il segnale è più solido rispetto agli aggiornamenti precedenti non perché il dato sia clamoroso — non lo è — ma perché per la prima volta in due giorni le tre conferme arrivano insieme invece di annullarsi a vicenda.',
    },
    {
      kind: 'note',
      text: 'I dati provengono dal Bureau of Labor Statistics, i livelli di mercato dalle fonti citate nel testo. I riferimenti numerici servono a rendere verificabile il ragionamento: non sono quotazioni in tempo reale né obiettivi.',
    },
  ],
};
