import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../ui/icon';
import { RiskNotice } from './risk-notice';
import { ConsentService } from '../../core/services/consent.service';
import { DISCLAIMER_COOKIE, DISCLAIMER_DATA, SITE } from '../../core/config/site.config';

/** Piè di pagina presente su ogni schermata, con le avvertenze estese. */
@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, RiskNotice],
  template: `
    <footer class="foot">
      <div class="foot__top">
        <div class="brand">
          <div class="brand__row">
            <span class="brand__mark">V</span>
            <div>
              <p class="brand__name">{{ site.name }}</p>
              <p class="brand__tag">{{ site.tagline }}</p>
            </div>
          </div>
          <p class="brand__desc">
            Progetto personale e indipendente di studio dei mercati. Nessun rapporto con società di
            intermediazione, broker o soggetti che offrono servizi di investimento.
          </p>
          <a class="brand__mail" href="mailto:{{ site.email }}">
            <app-icon name="mail" [size]="14" />
            {{ site.email }}
          </a>
        </div>

        <nav class="cols" aria-label="Navigazione piè di pagina">
          <div class="col">
            <p class="eyebrow">Osservatorio</p>
            <a routerLink="/">Panoramica</a>
            <a routerLink="/analisi">Archivio analisi</a>
            <a routerLink="/argomenti">Argomenti</a>
          </div>
          <div class="col">
            <p class="eyebrow">Calendario</p>
            <a routerLink="/calendario">Calendario economico</a>
            <a routerLink="/calendario/usa">USA</a>
            <a routerLink="/calendario/euro-zona">Euro zona</a>
            <a routerLink="/calendario/banche-centrali">Banche centrali</a>
          </div>
          <div class="col">
            <p class="eyebrow">Strumenti</p>
            <a routerLink="/orizzonti">Orizzonti XAU/USD</a>
            <a routerLink="/metodologia">Metodologia</a>
            <a routerLink="/glossario">Glossario</a>
          </div>
          <div class="col">
            <p class="eyebrow">Trasparenza</p>
            <a routerLink="/avvertenze">Avvertenze e rischi</a>
            <a routerLink="/note-legali">Note legali</a>
            <a routerLink="/privacy">Privacy e cookie</a>
            <button type="button" class="linklike" (click)="consent.reopen()">
              Rivedi l’informativa
            </button>
          </div>
        </nav>
      </div>

      <div class="foot__notes">
        <p class="note">
          <app-icon name="chart" [size]="13" />
          <span><strong>Sui dati.</strong> {{ dataNote }}</span>
        </p>
        <p class="note">
          <app-icon name="lock" [size]="13" />
          <span><strong>Su cookie e tracciamento.</strong> {{ cookieNote }}</span>
        </p>
      </div>

      <app-risk-notice variant="full" />

      <div class="foot__legal">
        <p>
          <strong>{{ site.name }}</strong> non è una testata giornalistica ai sensi della L. 7 marzo
          2001 n. 62 e non è registrata presso alcun tribunale. Sito privo di finalità commerciali e
          non soggetto agli obblighi previsti per i prodotti editoriali. Contenuti aggiornati senza
          periodicità determinata.
        </p>
        <p>
          I contenuti non costituiscono consulenza finanziaria, raccomandazione di investimento,
          ricerca in materia di investimenti né sollecitazione al pubblico risparmio. L’autore non è
          un consulente finanziario abilitato né un soggetto vigilato. Investire comporta il rischio
          di perdere il capitale.
        </p>
        <p class="copy">
          © {{ site.since }}–{{ year }} {{ site.name }} · Tutti i diritti riservati · Testi e
          analisi di proprietà dell’autore, riproduzione consentita solo con citazione della fonte.
        </p>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      margin-top: 56px;
    }

    .foot {
      border-top: 1px solid var(--line);
      padding: 44px 0 60px;
    }

    .foot__top {
      display: grid;
      grid-template-columns: minmax(260px, 1.1fr) 2fr;
      gap: 40px;
      padding-bottom: 34px;
    }

    .brand__row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand__mark {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border-radius: 13px;
      background: linear-gradient(135deg, var(--gold-soft), var(--gold-deep));
      color: #241a06;
      font-weight: 800;
      font-size: 19px;
    }

    .brand__name {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .brand__tag {
      font-size: 11.5px;
      color: var(--text-faint);
    }

    .brand__desc {
      margin-top: 16px;
      font-size: 12.5px;
      line-height: 1.66;
      color: var(--text-muted);
      max-width: 44ch;
    }

    .brand__mail {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      margin-top: 14px;
      font-size: 12.5px;
      color: var(--gold-soft);
    }

    .brand__mail:hover {
      text-decoration: underline;
    }

    .cols {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
      gap: 28px;
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 9px;
      align-items: flex-start;
    }

    .col .eyebrow {
      margin-bottom: 5px;
    }

    .col a,
    .linklike {
      font-size: 13px;
      color: var(--text-muted);
      padding: 0;
      text-align: left;
      transition: color 0.2s var(--ease);
    }

    .col a:hover,
    .linklike:hover {
      color: var(--gold-soft);
    }

    .foot__notes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
      gap: 14px;
      padding: 18px 0 26px;
      border-top: 1px solid var(--line);
    }

    .note {
      display: flex;
      gap: 9px;
      font-size: 12px;
      line-height: 1.6;
      color: var(--text-faint);
    }

    .note app-icon {
      margin-top: 3px;
      color: var(--text-muted);
    }

    .note strong {
      color: var(--text-soft);
      font-weight: 600;
    }

    .foot__legal {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 26px;
      padding-top: 22px;
      border-top: 1px solid var(--line);
    }

    .foot__legal p {
      font-size: 11.5px;
      line-height: 1.68;
      color: var(--text-faint);
      text-align: justify;
      hyphens: auto;
    }

    .foot__legal strong {
      color: var(--text-muted);
    }

    .copy {
      margin-top: 6px;
      text-align: left;
      color: #5d574f;
    }

    @media (max-width: 980px) {
      .foot__top {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }

    @media (max-width: 620px) {
      :host {
        margin-top: 40px;
      }

      .foot {
        padding: 32px 0 44px;
      }

      .cols {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 22px;
      }

      /* Testo a bandiera: giustificato su colonna stretta è illeggibile. */
      .foot__legal p {
        text-align: left;
        hyphens: none;
      }

      .foot__notes {
        padding: 16px 0 20px;
      }
    }
  `,
})
export class SiteFooter {
  protected readonly consent = inject(ConsentService);
  protected readonly site = SITE;
  protected readonly dataNote = DISCLAIMER_DATA;
  protected readonly cookieNote = DISCLAIMER_COOKIE;
  protected readonly year = new Date().getFullYear();
}
