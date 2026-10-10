import { Component, computed, input } from '@angular/core';

/** Iconos SVG en línea: evita cargar una librería de iconos completa. */
const STROKE_ICONS = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up': 'M12 19V5M6 11l6-6 6 6',
  close: 'M18 6L6 18M6 6l12 12',
  menu: 'M4 7h16M4 12h16M4 17h16',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.5 9h17M3.5 15h17M12 3c-2.5 2.6-3.5 5.6-3.5 9s1 6.4 3.5 9M12 3c2.5 2.6 3.5 5.6 3.5 9s-1 6.4-3.5 9',
  building: 'M4 21V4h11v17M15 9h5v12M2 21h20M8 8h3M8 12h3M8 16h3',
  device: 'M3 4h13v11H3zM1 19h17M19 8h4v12h-4z',
  chart: 'M3 21h18M6 17v-5M11 17V7M16 17v-8M21 17V4',
  cloud: 'M7 19h10a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 6.2 9.1 5 5 0 0 0 7 19z',
  workflow: 'M3 4h7v6H3zM14 14h7v6h-7zM6.5 10v4.5a2.5 2.5 0 0 0 2.5 2.5h5',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  check: 'M5 12.5l4.5 4.5L19 7.5',
} as const;

const WHATSAPP =
  'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 016.99 2.9 9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 00-3.48-8.41Z';

export type IconName = keyof typeof STROKE_ICONS | 'whatsapp';

@Component({
  selector: 'app-icon',
  template: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      @if (name() === 'whatsapp') {
        <path [attr.d]="whatsapp" fill="currentColor" />
      } @else {
        <path [attr.d]="path()" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="square" stroke-linejoin="miter" />
      }
    </svg>
  `,
  styles: `
    :host { display: inline-flex; width: 1.15em; height: 1.15em; flex-shrink: 0; }
    svg { width: 100%; height: 100%; }
  `,
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly whatsapp = WHATSAPP;
  readonly path = computed(() => {
    const name = this.name();
    return name === 'whatsapp' ? '' : STROKE_ICONS[name];
  });
}
