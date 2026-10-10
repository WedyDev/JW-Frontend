import { Directive, DestroyRef, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { isInViewport, onceInView, prefersReducedMotion } from './in-view';

/**
 * Aparición suave al entrar en pantalla.
 * Solo oculta elementos que están fuera del viewport al cargar, así el HTML
 * prerenderizado se ve completo aunque el JavaScript aún no haya cargado.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    let stop: (() => void) | undefined;

    afterNextRender(() => {
      if (prefersReducedMotion() || isInViewport(el)) return;

      el.classList.add('reveal');
      el.style.transitionDelay = `${this.revealDelay()}ms`;
      stop = onceInView(el, () => el.classList.add('is-visible'));
    });

    inject(DestroyRef).onDestroy(() => stop?.());
  }
}
