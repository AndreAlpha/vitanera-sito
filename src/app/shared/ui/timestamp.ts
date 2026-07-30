import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ClockService, RELATIVE_LIMIT_HOURS } from '../../core/services/clock.service';
import { formatDateTime, formatSince } from '../../core/services/content.service';
import { Icon } from './icon';

/**
 * Orario di pubblicazione.
 *
 * Entro dodici ore mostra il tempo trascorso ("18m fa", "2h fa"), oltre quella
 * soglia data e ora complete. Si aggiorna da solo grazie all'orologio condiviso.
 */
@Component({
  selector: 'app-timestamp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <time [attr.datetime]="iso()" [attr.title]="absolute()" [class.recent]="recent()">
      @if (withIcon()) {
        <app-icon name="clock" [size]="12" />
      }
      {{ label() }}
    </time>
  `,
  styles: `
    :host {
      display: inline-flex;
    }

    time {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: inherit;
      color: inherit;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }

    time.recent {
      color: var(--accent);
      font-weight: 600;
    }
  `,
})
export class Timestamp {
  private readonly clock = inject(ClockService);

  readonly iso = input.required<string>();
  readonly withIcon = input<boolean>(false);

  protected readonly label = computed(() =>
    formatSince(this.iso(), this.clock.now(), RELATIVE_LIMIT_HOURS),
  );

  protected readonly absolute = computed(() => formatDateTime(this.iso()));

  /** Evidenzia le pubblicazioni dell'ultima ora. */
  protected readonly recent = computed(() => this.clock.now() - Date.parse(this.iso()) < 3_600_000);
}
