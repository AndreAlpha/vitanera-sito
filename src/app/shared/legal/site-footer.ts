import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DISCLAIMER_COOKIE, DISCLAIMER_DATA, SITE } from '../../core/config/site.config';

/**
 * Piè di pagina.
 *
 * Portava l'avvertenza estesa in sette paragrafi, poi altri due paragrafi che
 * ne ripetevano il contenuto, e la stessa cosa compariva già in cima e in mezzo
 * a ogni schermata. Qui ne resta la sostanza in tre righe, con il rimando al
 * testo completo: l'obbligo è che l'avvertenza sia raggiungibile e chiara, non
 * che venga ripetuta finché non la si smette di leggere.
 */
@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <footer class="foot">
      <div class="foot__top">
        <div class="brand">
          <div class="brand__row">
            <span class="brand__mark">V</span>
            <p class="brand__name">{{ site.name }}</p>
          </div>
          <p class="brand__desc">{{ site.tagline }}. Progetto personale e indipendente.</p>
        </div>

        <nav class="cols" aria-label="Navigazione piè di pagina">
          <div class="col">
            <p class="eyebrow col__label">Osservatorio</p>
            <a routerLink="/">Panoramica</a>
            <a routerLink="/analisi">Archivio analisi</a>
            <a routerLink="/argomenti">Argomenti</a>
          </div>
          <div class="col">
            <p class="eyebrow col__label">Calendario</p>
            <a routerLink="/calendario">Indici principali</a>
            <a routerLink="/calendario/usa">USA</a>
            <a routerLink="/calendario/euro-zona">Euro zona</a>
            <a routerLink="/calendario/banche-centrali">Banche centrali</a>
          </div>
          <div class="col">
            <p class="eyebrow col__label">Strumenti</p>
            <a routerLink="/orizzonti">Orizzonti XAU/USD</a>
            <a routerLink="/metodologia">Metodologia</a>
            <a routerLink="/glossario">Glossario</a>
          </div>
          <div class="col">
            <p class="eyebrow col__label">Trasparenza</p>
            <a routerLink="/avvertenze">Avvertenze e rischi</a>
            <a routerLink="/note-legali">Note legali</a>
            <a routerLink="/privacy">Privacy e cookie</a>
          </div>
        </nav>
      </div>

      <div class="foot__legal">
        <p>
          <strong>{{ site.name }}</strong> non è una testata giornalistica ai sensi della L. 62/2001
          e non è registrata presso alcun tribunale. I contenuti hanno finalità informative e
          didattiche: non sono consulenza finanziaria né raccomandazione di investimento, e l’autore
          non è un soggetto abilitato o vigilato. Investire comporta il rischio di perdere il
          capitale. <a routerLink="/avvertenze">Avvertenze e informativa sui rischi</a>
        </p>
        <p>{{ dataNote }} {{ cookieNote }}</p>
        <p class="foot__copy">
          © {{ site.since }}–{{ year }} {{ site.name }} · Riproduzione consentita citando la fonte.
        </p>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      margin-top: var(--s-10);
    }

    .foot {
      border-top: 1px solid var(--line);
      padding: var(--s-8) 0 var(--s-9);
    }

    .foot__top {
      display: grid;
      grid-template-columns: minmax(220px, 1fr) 2.2fr;
      gap: var(--s-8);
    }

    /* --- Marca ------------------------------------------------------------ */

    .brand__row {
      display: flex;
      align-items: center;
      gap: var(--s-3);
    }

    .brand__mark {
      display: grid;
      place-items: center;
      width: 26px;
      height: 26px;
      border-radius: var(--r-sm);
      border: 1px solid var(--gold-line);
      color: var(--gold);
      font-weight: 600;
      font-size: var(--t-sm);
    }

    .brand__name {
      font-size: var(--t-md);
      font-weight: 600;
    }

    .brand__desc {
      margin-top: var(--s-3);
      max-width: 40ch;
      font-size: var(--t-xs);
      line-height: var(--lh-base);
      color: var(--text-muted);
    }

    /* --- Colonne di rimandi ------------------------------------------------- */

    .cols {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: var(--s-6);
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: var(--s-2);
      align-items: flex-start;
    }

    /* Forma dal primitivo globale .eyebrow; qui solo lo stacco dalla colonna. */
    .col__label {
      margin-bottom: var(--s-1);
    }

    .col a {
      font-size: var(--t-sm);
      color: var(--text-muted);
      transition: color var(--dur) var(--ease);
    }

    .col a:hover {
      color: var(--text);
    }

    /* --- Nota legale --------------------------------------------------------- */

    .foot__legal {
      display: flex;
      flex-direction: column;
      gap: var(--s-3);
      margin-top: var(--s-7);
      padding-top: var(--s-5);
      border-top: 1px solid var(--line);
    }

    .foot__legal p {
      max-width: 96ch;
      font-size: var(--t-xs);
      line-height: var(--lh-base);
      color: var(--text-faint);
    }

    .foot__legal strong {
      color: var(--text-muted);
      font-weight: 600;
    }

    .foot__legal a {
      color: var(--text-muted);
      text-decoration: underline;
      text-underline-offset: 3px;
      white-space: nowrap;
    }

    .foot__legal a:hover {
      color: var(--text-soft);
    }

    .foot__copy {
      color: var(--text-faint);
      opacity: 0.75;
    }

    @media (max-width: 900px) {
      .foot__top {
        grid-template-columns: 1fr;
        gap: var(--s-7);
      }
    }

    @media (max-width: 620px) {
      :host {
        margin-top: var(--s-8);
      }

      .foot {
        padding: var(--s-7) 0 var(--s-8);
      }

      .cols {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--s-5);
      }
    }
  `,
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly dataNote = DISCLAIMER_DATA;
  protected readonly cookieNote = DISCLAIMER_COOKIE;
  protected readonly year = new Date().getFullYear();
}
