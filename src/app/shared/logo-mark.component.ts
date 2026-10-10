import { Component } from '@angular/core';

/** Monograma JW en IBM Plex Serif (mismo diseño que public/jw-favicon.svg). */
@Component({
  selector: 'app-logo-mark',
  template: `
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="7" fill="#15181d" />
      <path fill="#fff" d="M15.52 39.36Q13.25 39.36 12.12 38.47Q11 37.58 11 36.18Q11 35.3 11.55 34.66Q12.11 34.02 13.13 34.02Q13.98 34.02 14.53 34.55Q15.09 35.07 15.09 35.89Q15.09 36.47 14.85 36.88Q14.62 37.29 14.3 37.44V37.55Q14.53 37.64 14.84 37.67Q15.14 37.7 15.47 37.7Q16.66 37.7 17.26 36.97Q17.86 36.24 17.86 34.57V20.39H15.09V18.64H24.02V20.39H21.95V33.44Q21.95 36.15 20.43 37.76Q18.91 39.36 15.52 39.36Z M25.97 20.39H24.48V18.64H32.54V20.39H30.12L33.47 35.25H33.62L37.91 18.64H41.44L45.73 35.25H45.88L49.23 20.39H46.81V18.64H53V20.39H51.51L46.9 39.01H42.99L38.82 23.6H38.67L34.5 39.01H30.58Z" />
      <rect x="22" y="46.5" width="20" height="2.5" fill="#46d6a0" />
    </svg>
  `,
  styles: `
    :host { display: inline-flex; width: 40px; height: 40px; flex-shrink: 0; }
    svg { width: 100%; height: 100%; }
  `,
})
export class LogoMarkComponent {}
