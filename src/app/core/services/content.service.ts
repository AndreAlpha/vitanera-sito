import { Injectable, computed, signal } from '@angular/core';
import { ARTICLES } from '../data/articles.data';
import { GLOSSARY } from '../data/glossary.data';
import { LEGAL_DOCUMENTS } from '../data/legal.data';
import { CATEGORIES } from '../config/site.config';
import { Article, CategorySlug, TocEntry } from '../models/article.model';

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

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly all = signal<readonly Article[]>(
    [...ARTICLES].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)),
  );

  readonly articles = this.all.asReadonly();
  readonly categories = CATEGORIES;
  readonly glossary = GLOSSARY;
  readonly legalDocuments = LEGAL_DOCUMENTS;

  readonly latest = computed(() => this.all()[0] ?? null);

  readonly featured = computed(() => this.all().filter((a) => a.featured));

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
    return this.all().filter((a) => a.category === slug);
  }

  bySlug(slug: string): Article | null {
    return this.all().find((a) => a.slug === slug) ?? null;
  }

  categoryBySlug(slug: CategorySlug) {
    return CATEGORIES.find((c) => c.slug === slug) ?? null;
  }

  countByCategory(slug: CategorySlug): number {
    return this.byCategory(slug).length;
  }

  /** Altre analisi correlate: stessa categoria, poi tag in comune. */
  related(article: Article, limit = 3): readonly Article[] {
    const others = this.all().filter((a) => a.slug !== article.slug);
    const score = (a: Article) =>
      (a.category === article.category ? 3 : 0) +
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
