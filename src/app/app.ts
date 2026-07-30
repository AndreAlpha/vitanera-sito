import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
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

  constructor() {
    // Chiude il menu mobile e la ricerca a ogni cambio pagina.
    effect(() => {
      this.url();
      this.menuOpen.set(false);
      this.query.set('');
      this.searchFocused.set(false);
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
