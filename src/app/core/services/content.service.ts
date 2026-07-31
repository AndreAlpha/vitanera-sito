import { Injectable, computed, signal } from '@angular/core';
import { ARTICLES } from '../data/articles.data';
import { GLOSSARY } from '../data/glossary.data';
import { LEGAL_DOCUMENTS } from '../data/legal.data';
import { CATEGORIES, CATEGORY_FAMILIES } from '../config/site.config';
import { Article, Category, CategorySlug, TocEntry } from '../models/article.model';

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

  /** Altre analisi correlate: categorie in comune, poi tag in comune. */
  related(article: Article, limit = 3): readonly Article[] {
    const others = this.all().filter((a) => a.slug !== article.slug);
    const score = (a: Article) =>
      a.categories.filter((c) => article.categories.includes(c)).length * 3 +
      a.tags.filter((t) => article.tags.includes(t)).length;
    return [...others].sort((a, b) => score(b) - score(a)).slice(0, limit);
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
