import { Component, DestroyRef, NgZone, afterNextRender, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, LanguageService } from '../../i18n/language.service';
import { IconComponent } from '../../shared/icon.component';
import { LogoMarkComponent } from '../../shared/logo-mark.component';

@Component({
  selector: 'app-navbar',
  imports: [IconComponent, LogoMarkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class NavbarComponent {
  private readonly language = inject(LanguageService);
  readonly t = this.language.t;
  readonly lang = this.language.lang;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('');

  private readonly document = inject(DOCUMENT);

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const win = this.document.defaultView!;

      // Scroll fuera de la zona: solo se actualiza el signal si cambia el estado.
      const onScroll = () => this.scrolled.set(win.scrollY > 40);
      onScroll();
      zone.runOutsideAngular(() => win.addEventListener('scroll', onScroll, { passive: true }));

      // Cierra el menú si se pasa a escritorio.
      const desktop = win.matchMedia('(min-width: 1081px)');
      const onDesktop = (e: MediaQueryListEvent) => e.matches && this.closeMenu();
      desktop.addEventListener('change', onDesktop);

      // Resalta el enlace de la sección visible.
      const spy = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          if (visible) this.activeSection.set(visible.target.id);
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      this.t().nav.links.forEach(({ id }) => {
        const section = this.document.getElementById(id);
        if (section) spy.observe(section);
      });

      destroyRef.onDestroy(() => {
        win.removeEventListener('scroll', onScroll);
        desktop.removeEventListener('change', onDesktop);
        spy.disconnect();
        this.setScrollLock(false);
      });
    });
  }

  setLang(lang: Lang): void {
    this.language.set(lang);
  }

  toggleMenu(): void {
    this.menuOpen() ? this.closeMenu() : this.openMenu();
  }

  closeMenu(): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    this.setScrollLock(false);
  }

  private openMenu(): void {
    this.menuOpen.set(true);
    this.setScrollLock(true);
  }

  private setScrollLock(locked: boolean): void {
    this.document.documentElement.classList.toggle('no-scroll', locked);
  }
}
