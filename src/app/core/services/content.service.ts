import { Injectable, computed, signal } from '@angular/core';
import { ARTICLES } from '../data/articles.data';
import { GLOSSARY } from '../data/glossary.data';
import { LEGAL_DOCUMENTS } from '../data/legal.data';
import { OUTCOMES } from '../data/outcomes.data';
import { CATEGORIES, CATEGORY_FAMILIES } from '../config/site.config';
import {
  Article,
  Block,
  Category,
  CategorySlug,
  GlossaryEntry,
  Level,
  Outcome,
  TocEntry,
  Verdict,
} from '../models/article.model';

const MONTHS = [
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre',
];

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Minuscolo e senza accenti, per confrontare testi senza inseguire le varianti. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[’']/g, ' ');
}

/** Tutto il testo leggibile di un blocco, qualunque sia il suo tipo. */
function blockText(block: Block): readonly string[] {
  switch (block.kind) {
    case 'paragraph':
    case 'heading':
    case 'quote':
    case 'note':
      return [block.text];
    case 'list':
      return [block.title ?? '', ...block.items];
    case 'callout':
      return [block.title, block.text ?? '', ...(block.items ?? [])];
    case 'stats':
      return [block.title ?? '', ...block.items.flatMap((i) => [i.label, i.value, i.note ?? ''])];
    case 'scenarios':
      return [block.title ?? '', ...block.items.flatMap((i) => [i.label, i.text])];
    case 'balance':
      return [
        block.title ?? '',
        block.left.title,
        ...block.left.items,
        block.right.title,
        ...block.right.items,
      ];
    case 'timeline':
      return [block.title ?? '', ...block.items.flatMap((i) => [i.when, i.title, i.text])];
  }
}

/** Formato "30 luglio 2026 · 08:40". */
export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  const hh = `${d.getHours()}`.padStart(2, '0');
  const mm = `${d.getMinutes()}`.padStart(2, '0');
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()} · ${hh}:${mm}`;
}

/** Formato "30 luglio 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Scarto d'orologio tollerato fra chi pubblica e chi legge. */
const SKEW_MS = 5 * 60_000;

/**
 * Tempo trascorso in forma compatta ("adesso", "18m fa", "2h fa").
 * Oltre `limitHours` restituisce data e ora di pubblicazione.
 */
export function formatSince(iso: string, now: number, limitHours = 12): string {
  const diff = now - Date.parse(iso);

  // Tolleranza per lo scarto fra l'orologio di chi pubblica e quello di chi
  // legge: fino a cinque minuti "nel futuro" la pubblicazione è appena uscita.
  if (diff < -SKEW_MS || diff >= limitHours * 3_600_000) {
    return formatDateTime(iso);
  }
  if (diff < 60_000) {
    return 'adesso';
  }

  const minutes = Math.floor(diff / 60_000);
  if (minutes < 60) {
    return `${minutes}m fa`;
  }

  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours}h fa` : `${hours}h ${rest}m fa`;
}

/** Durata compatta a partire da millisecondi: "42m", "1h 05m". */
export function formatDuration(ms: number): string {
  const minutes = Math.max(0, Math.round(ms / 60_000));
  if (minutes < 60) {
    return `${minutes}m`;
  }
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${`${minutes % 60}`.padStart(2, '0')}m`;
}

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly all = signal<readonly Article[]>(
    [...ARTICLES].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)),
  );

  readonly articles = this.all.asReadonly();
  readonly categories = CATEGORIES;
  readonly families = CATEGORY_FAMILIES;
  readonly glossary = GLOSSARY;
  readonly legalDocuments = LEGAL_DOCUMENTS;

  /** Vera finché non è stata pubblicata alcuna analisi. */
  readonly empty = computed(() => this.all().length === 0);

  readonly latest = computed(() => this.all()[0] ?? null);

  readonly featured = computed(() => this.all().filter((a) => a.featured));

  /** Categorie che hanno almeno un'analisi, dalla più popolata. */
  readonly activeCategories = computed(() =>
    CATEGORIES.map((c) => ({ category: c, count: this.countByCategory(c.slug) }))
      .filter((row) => row.count > 0)
      .sort((a, b) => b.count - a.count || a.category.name.localeCompare(b.category.name, 'it')),
  );

  /** Lettere disponibili nel glossario, per la navigazione alfabetica. */
  readonly glossaryLetters = computed(() =>
    [...new Set(GLOSSARY.map((e) => e.letter))].sort((a, b) => a.localeCompare(b, 'it')),
  );

  readonly tags = computed(() => {
    const counts = new Map<string, number>();
    for (const article of this.all()) {
      for (const tag of article.tags) {
        counts.set(tag, (counts.get(tag) ?? 0) + 1);
      }
    }
    return [...counts.entries()]
      .map(([label, count]) => ({ label, count }))
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, 'it'));
  });

  byCategory(slug: CategorySlug): readonly Article[] {
    return this.all().filter((a) => a.categories.includes(slug));
  }

  bySlug(slug: string): Article | null {
    return this.all().find((a) => a.slug === slug) ?? null;
  }

  categoryBySlug(slug: string): Category | null {
    return CATEGORIES.find((c) => c.slug === slug) ?? null;
  }

  /** Le categorie di un'analisi, risolte e nell'ordine dichiarato. */
  categoriesOf(article: Article): readonly Category[] {
    return article.categories
      .map((slug) => this.categoryBySlug(slug))
      .filter((c): c is Category => c !== null);
  }

  /** Categoria principale: la prima dichiarata, da cui deriva la tinta. */
  primaryCategory(article: Article): Category | null {
    return this.categoriesOf(article)[0] ?? null;
  }

  countByCategory(slug: CategorySlug): number {
    return this.byCategory(slug).length;
  }

  /* ---------------------------------------------------------------------- */
  /* Esiti                                                                  */
  /* ---------------------------------------------------------------------- */

  readonly outcomes = computed(() =>
    [...OUTCOMES].sort((a, b) => Date.parse(b.checkedAt) - Date.parse(a.checkedAt)),
  );

  /** L'esito di un'analisi, se qualcuno è tornato a controllarla. */
  outcomeOf(slug: string): Outcome | null {
    return this.outcomes().find((o) => o.slug === slug) ?? null;
  }

  /** Le analisi ancora senza esito, dalla più vecchia: sono quelle da controllare. */
  readonly pendingCheck = computed(() => {
    const giudicate = new Set(this.outcomes().map((o) => o.slug));
    return [...this.all()].reverse().filter((a) => !giudicate.has(a.slug));
  });

  /**
   * Quante volte ciascun verdetto, e il tasso di conferma.
   *
   * `senza-verifica` entra nel totale ma non fra le confermate: un'analisi che
   * nessuno ha controllato non è una vittoria, e nasconderla gonfierebbe il
   * risultato di preciso quanto basta a renderlo inutile.
   */
  readonly record = computed(() => {
    const esiti = this.outcomes();
    const conta = (v: Verdict) => esiti.filter((o) => o.verdict === v).length;
    const totale = esiti.length;
    return {
      totale,
      confermate: conta('confermata'),
      parziali: conta('parziale'),
      invalidate: conta('invalidata'),
      senzaVerifica: conta('senza-verifica'),
      daControllare: this.pendingCheck().length,
    };
  });

  /**
   * Calibrazione: per ogni dichiarazione fatta prima, come sono andate dopo.
   *
   * Le dichiarazioni confrontate sono **due**, e tenerle separate è il punto.
   *
   * `certainty` non misura quanta fiducia l'analisi abbia nella propria
   * conclusione: misura quanto sono solidi i fatti da cui parte, ed è definito
   * così in `/metodologia`. Confrontarlo da solo con l'esito significa mettere a
   * confronto due cose diverse — la solidità di un dato pubblicato non dice
   * niente su dove andrà il prezzo — e produrre un numero che sembra una
   * calibrazione senza esserlo.
   *
   * Ogni analisi dichiara in prosa anche il secondo livello, quello sulla
   * lettura di mercato («alta sul dato, media sull'effetto»), ma non è un campo:
   * l'approssimazione più vicina che il modello ha è `bias.strength`, cioè
   * quanto i mercati guardati concordavano fra loro. Sono affiancati, ciascuno
   * con scritto che cosa misura, invece di sceglierne uno e chiamarlo
   * «calibrazione».
   */
  readonly calibration = computed(() => {
    const esiti = this.outcomes().map((o) => ({ o, a: this.bySlug(o.slug) }));

    const perLivello = (scelta: (r: (typeof esiti)[number]) => Level | undefined) => {
      const livelli: readonly Level[] = ['alta', 'media', 'bassa'];
      return livelli
        .map((livello) => {
          const righe = esiti.filter((r) => scelta(r) === livello);
          const verificate = righe.filter((r) => r.o.verdict !== 'senza-verifica');
          const confermate = righe.filter((r) => r.o.verdict === 'confermata').length;
          return {
            livello,
            totale: righe.length,
            verificate: verificate.length,
            confermate,
            quota: verificate.length ? Math.round((confermate / verificate.length) * 100) : null,
          };
        })
        .filter((r) => r.totale > 0);
    };

    return [
      {
        chiave: 'certainty' as const,
        titolo: 'Per solidità dei fatti dichiarata',
        nota:
          'Quanto erano solidi i fatti da cui partiva l’analisi: un prezzo osservato, un dato ' +
          'pubblicato, una notizia soltanto riportata. Non dice quanta fiducia l’analisi avesse ' +
          'nella propria conclusione — quella sta scritta in prosa, in fondo a ogni testo.',
        righe: perLivello((r) => r.a?.certainty),
      },
      {
        chiave: 'strength' as const,
        titolo: 'Per concordanza dei segnali dichiarata',
        nota:
          'Quanto i mercati guardati dicevano la stessa cosa. È la forza mostrata sul badge di ' +
          'ogni analisi, ed è la dichiarazione che più si avvicina a «quanto ci credo».',
        righe: perLivello((r) => r.a?.bias?.strength),
      },
    ].filter((blocco) => blocco.righe.length > 0);
  });

  /** Altre analisi correlate: categorie in comune, poi tag in comune. */
  related(article: Article, limit = 3): readonly Article[] {
    const others = this.all().filter((a) => a.slug !== article.slug);
    const score = (a: Article) =>
      a.categories.filter((c) => article.categories.includes(c)).length * 3 +
      a.tags.filter((t) => article.tags.includes(t)).length;
    return [...others].sort((a, b) => score(b) - score(a)).slice(0, limit);
  }

  /**
   * Le voci di glossario che compaiono davvero nel testo di un'analisi.
   *
   * Il glossario esisteva senza che nessuna analisi lo raggiungesse: trenta
   * definizioni in una pagina che si apre solo di proposito. Qui il collegamento
   * si fa al contrario, dall'analisi verso le definizioni, cercando ogni termine
   * nel testo effettivo dell'articolo — titolo, sommario, corpo e argomenti.
   *
   * La ricerca è su confine di parola e senza accenti, così «bene rifugio» viene
   * trovato anche scritto in mezzo a una frase, e «PCE» non viene trovato dentro
   * un'altra sigla.
   */
  glossaryFor(article: Article): readonly GlossaryEntry[] {
    const testo = normalize(
      [
        article.title,
        article.dek,
        article.kicker,
        ...article.tags,
        ...article.takeaways,
        ...article.blocks.flatMap(blockText),
      ].join(' '),
    );
    return GLOSSARY.filter((entry) => {
      const termine = normalize(entry.term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return new RegExp(`(^|[^a-z0-9])${termine}([^a-z0-9]|$)`).test(testo);
    });
  }

  /** Indice dei paragrafi di un articolo, derivato dai blocchi "heading". */
  toc(article: Article): readonly TocEntry[] {
    return article.blocks
      .filter((b) => b.kind === 'heading')
      .map((b) => ({ anchor: b.anchor ?? slugify(b.text), text: b.text }));
  }

  search(query: string): readonly Article[] {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      return [];
    }
    return this.all().filter((a) =>
      [a.title, a.dek, a.kicker, ...a.tags, ...a.instruments].join(' ').toLowerCase().includes(q),
    );
  }
}
