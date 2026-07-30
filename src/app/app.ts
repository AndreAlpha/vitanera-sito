import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { NAV, SITE } from './core/config/site.config';
import { ContentService } from './core/services/content.service';
import { DisclaimerBar } from './shared/legal/disclaimer-bar';
import { DisclaimerModal } from './shared/legal/disclaimer-modal';
import { SiteFooter } from './shared/legal/site-footer';
import { Icon } from './shared/ui/icon';

const SEGMENT_LABELS: Record<string, string> = {
  '': 'Panoramica',
  fondamentali: 'Fondamentali',
  correlazioni: 'Correlazioni',
  geopolitica: 'Geopolitica',
  analisi: 'Archivio analisi',
  orizzonti: 'Orizzonti XAU/USD',
  metodologia: 'Metodologia',
  glossario: 'Glossario',
  avvertenze: 'Avvertenze e rischi',
  'note-legali': 'Note legali',
  privacy: 'Privacy e cookie',
};

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DisclaimerBar,
    DisclaimerModal,
    SiteFooter,
    Icon,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  protected readonly content = inject(ContentService);

  protected readonly site = SITE;
  protected readonly nav = NAV;

  protected readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly menuOpen = signal(false);
  protected readonly query = signal('');
  protected readonly searchFocused = signal(false);

  /** Su schermo stretto la ricerca è nascosta dietro un pulsante. */
  protected readonly searchBarOpen = signal(false);
  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');

  protected readonly results = computed(() => this.content.search(this.query()));

  protected readonly searchOpen = computed(
    () => this.searchFocused() && this.query().trim().length >= 2,
  );

  /** Briciole di pane derivate dall'URL corrente. */
  protected readonly crumbs = computed(() => {
    const segments = this.url().split('?')[0].split('#')[0].split('/').filter(Boolean);
    if (segments.length === 0) {
      return [{ label: 'Panoramica', link: '/' }];
    }

    const trail: { label: string; link: string }[] = [];
    let path = '';
    for (const [index, segment] of segments.entries()) {
      path += `/${segment}`;
      const known = SEGMENT_LABELS[segment];
      if (known) {
        trail.push({ label: known, link: path });
        continue;
      }
      const article = index > 0 && segments[0] === 'analisi' ? this.content.bySlug(segment) : null;
      trail.push({ label: article ? article.kicker : 'Pagina', link: path });
    }
    return trail;
  });

  protected readonly pageTitle = computed(() => this.crumbs().at(-1)?.label ?? 'Panoramica');

  /**
   * Tinta della sezione corrente. Cambia solo la famiglia cromatica: forma,
   * spaziature e tipografia restano identiche in tutto il sito.
   */
  protected readonly accent = computed(() => {
    const segments = this.url().split('?')[0].split('#')[0].split('/').filter(Boolean);
    const [first, second] = segments;

    if (first === 'analisi' && second) {
      const article = this.content.bySlug(second);
      return article ? article.category : null;
    }

    switch (first) {
      case 'fondamentali':
      case 'correlazioni':
      case 'geopolitica':
      case 'orizzonti':
        return first;
      case 'metodologia':
      case 'glossario':
        return 'strumenti';
      case 'avvertenze':
      case 'note-legali':
      case 'privacy':
        return 'legale';
      default:
        return null;
    }
  });

  constructor() {
    // Chiude il menu mobile e la ricerca a ogni cambio pagina.
    effect(() => {
      this.url();
      this.menuOpen.set(false);
      this.query.set('');
      this.searchFocused.set(false);
      this.searchBarOpen.set(false);
    });

    // Con il menu a scomparsa aperto la pagina sottostante non deve scorrere.
    effect(() => {
      document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  protected toggleSearchBar(): void {
    this.searchBarOpen.update((v) => !v);

    if (!this.searchBarOpen()) {
      this.query.set('');
      return;
    }

    // Il fuoco va dato dopo il disegno: finché la classe non è applicata il
    // campo è ancora display:none e focus() non ha alcun effetto.
    afterNextRender(() => this.searchInput()?.nativeElement.focus(), {
      injector: this.injector,
    });
  }

  protected onQuery(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected goTo(slug: string): void {
    void this.router.navigate(['/analisi', slug]);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
