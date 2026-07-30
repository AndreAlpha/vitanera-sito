import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Set di icone inline (nessuna dipendenza esterna, nessuna richiesta di rete).
 * Tratto uniforme 1.7 su griglia 24×24.
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-icon' },
  styles: `
    .app-icon {
      display: inline-flex;
      flex: none;
    }
  `,
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name()) {
        @case ('dashboard') {
          <svg:rect x="3" y="3" width="7.5" height="7.5" rx="2" />
          <svg:rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
          <svg:rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
          <svg:rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
        }
        @case ('bank') {
          <svg:path d="M3 21h18M5 21V10M9.5 21V10M14.5 21V10M19 21V10M2.5 10 12 3.5 21.5 10Z" />
        }
        @case ('flow') {
          <svg:path d="M3 17.5 9 11l4 4 8-9" />
          <svg:path d="M15 6.5h6v6" />
        }
        @case ('globe') {
          <svg:circle cx="12" cy="12" r="9" />
          <svg:path d="M3 12h18" />
          <svg:path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z" />
        }
        @case ('horizon') {
          <svg:path d="M3 19h18" />
          <svg:path d="M7 19a5 5 0 0 1 10 0" />
          <svg:path d="M12 3.5V6M5.4 7.4 7 9M18.6 7.4 17 9M2.5 14H5M19 14h2.5" />
        }
        @case ('archive') {
          <svg:rect x="3" y="3.5" width="18" height="4.5" rx="1.6" />
          <svg:path d="M5 8v11a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V8" />
          <svg:path d="M10 12h4" />
        }
        @case ('compass') {
          <svg:circle cx="12" cy="12" r="9" />
          <svg:path d="m16 8-2.2 6.1L8 16l2.2-6.1Z" />
        }
        @case ('book') {
          <svg:path d="M4 19.2A2.8 2.8 0 0 1 6.8 16.5H20" />
          <svg:path d="M6.8 2.5H20v19H6.8A2.8 2.8 0 0 1 4 18.7V5.3a2.8 2.8 0 0 1 2.8-2.8Z" />
        }
        @case ('shield') {
          <svg:path d="M12 2.8 20 5.9v5.7c0 4.6-3.3 8.4-8 9.6-4.7-1.2-8-5-8-9.6V5.9Z" />
          <svg:path d="M12 8.5v4M12 15.6h.01" />
        }
        @case ('scale') {
          <svg:path d="M12 3.2V21M7 21h10M5 7.2l14-1.6" />
          <svg:path d="M5.4 7 2.6 13.4h5.6ZM18.6 5.6 15.8 12h5.6Z" />
        }
        @case ('lock') {
          <svg:rect x="4" y="10" width="16" height="10.5" rx="2.4" />
          <svg:path d="M8 10V7.2a4 4 0 0 1 8 0V10" />
        }
        @case ('search') {
          <svg:circle cx="11" cy="11" r="7" />
          <svg:path d="m20.5 20.5-4.2-4.2" />
        }
        @case ('clock') {
          <svg:circle cx="12" cy="12" r="9" />
          <svg:path d="M12 7v5.3l3.3 2" />
        }
        @case ('arrow-right') {
          <svg:path d="M4.5 12h14M12.5 6l6 6-6 6" />
        }
        @case ('arrow-up') {
          <svg:path d="M12 19.5V5M6 11l6-6 6 6" />
        }
        @case ('arrow-down') {
          <svg:path d="M12 4.5V19M6 13l6 6 6-6" />
        }
        @case ('arrow-flat') {
          <svg:path d="M4.5 12h15M15 8l4 4-4 4" />
        }
        @case ('alert') {
          <svg:path
            d="M10.3 4.3 2.7 17.5A2 2 0 0 0 4.4 20.5h15.2a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"
          />
          <svg:path d="M12 9.5v4M12 17h.01" />
        }
        @case ('spark') {
          <svg:path d="m12 3 1.9 5.2L19 10l-5.1 1.8L12 17l-1.9-5.2L5 10l5.1-1.8Z" />
          <svg:path d="m18.4 15 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8Z" />
        }
        @case ('chevron-right') {
          <svg:path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
        }
        @case ('chevron-down') {
          <svg:path d="m5.5 9.5 6.5 6.5 6.5-6.5" />
        }
        @case ('menu') {
          <svg:path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <svg:path d="m6 6 12 12M18 6 6 18" />
        }
        @case ('print') {
          <svg:path d="M7 8.5V3.5h10v5" />
          <svg:rect x="3.5" y="8.5" width="17" height="8" rx="2" />
          <svg:path d="M7 13.5h10v7H7z" />
        }
        @case ('link') {
          <svg:path d="M10.2 13.4a4.6 4.6 0 0 0 6.6 0l2.6-2.7a4.6 4.6 0 0 0-6.5-6.5l-1.1 1.1" />
          <svg:path d="M13.8 10.6a4.6 4.6 0 0 0-6.6 0l-2.6 2.7a4.6 4.6 0 0 0 6.5 6.5l1.1-1.1" />
        }
        @case ('mail') {
          <svg:rect x="3" y="5" width="18" height="14" rx="2.4" />
          <svg:path d="m3.5 7.5 8.5 5.6 8.5-5.6" />
        }
        @case ('coin') {
          <svg:ellipse cx="12" cy="6.4" rx="8" ry="3.4" />
          <svg:path d="M4 6.4v11.2c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4V6.4" />
          <svg:path d="M4 12c0 1.9 3.6 3.4 8 3.4s8-1.5 8-3.4" />
        }
        @case ('droplet') {
          <svg:path d="M12 3.2s6.2 6.4 6.2 10.2a6.2 6.2 0 0 1-12.4 0C5.8 9.6 12 3.2 12 3.2Z" />
        }
        @case ('dollar') {
          <svg:path d="M12 2.5v19" />
          <svg:path
            d="M16.8 6.7c0-1.9-2.1-3-4.8-3S7.2 4.8 7.2 7c0 4.8 9.6 2.9 9.6 7.8 0 2.2-2.1 3.4-4.8 3.4s-4.8-1.1-4.8-2.9"
          />
        }
        @case ('chart') {
          <svg:path d="M3 21h18" />
          <svg:path d="M6.5 21V11M12 21V4.5M17.5 21v-6.5" />
        }
        @case ('calendar') {
          <svg:rect x="3" y="5" width="18" height="16" rx="2.4" />
          <svg:path d="M8 3v4M16 3v4M3 10h18" />
        }
        @case ('info') {
          <svg:circle cx="12" cy="12" r="9" />
          <svg:path d="M12 11.2V16.5M12 7.8h.01" />
        }
        @case ('check') {
          <svg:path d="m5 12.6 4.8 4.9L19 6.9" />
        }
        @case ('target') {
          <svg:circle cx="12" cy="12" r="8.5" />
          <svg:circle cx="12" cy="12" r="4.6" />
          <svg:circle cx="12" cy="12" r="1" />
        }
        @case ('layers') {
          <svg:path d="m12 2.8 9 4.6-9 4.6-9-4.6Z" />
          <svg:path d="m3 12.6 9 4.6 9-4.6M3 17.2l9 4.6 9-4.6" />
        }
        @case ('percent') {
          <svg:path d="M19 5 5 19" />
          <svg:circle cx="7.6" cy="7.6" r="2.6" />
          <svg:circle cx="16.4" cy="16.4" r="2.6" />
        }
        @case ('bolt') {
          <svg:path d="M13.2 2.5 4.5 13.6h6.3L10.8 21.5 19.5 10.4h-6.3Z" />
        }
        @default {
          <svg:circle cx="12" cy="12" r="9" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input<number>(18);
  readonly stroke = input<number>(1.7);
}
