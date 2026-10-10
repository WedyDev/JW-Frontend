import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { EN } from './en';
import { ES } from './es';

export type Lang = 'es' | 'en';

const CONTENT = { es: ES, en: EN } as const;
const STORAGE_KEY = 'jw-lang';

/**
 * Idioma activo de la página. El HTML prerenderizado sale en español; en el
 * navegador se aplica la preferencia guardada o el idioma del sistema.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('es');
  readonly t = computed(() => CONTENT[this.lang()]);

  private readonly document = inject(DOCUMENT);

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);

    effect(() => {
      const { meta: copy } = this.t();
      this.document.documentElement.lang = this.lang();
      title.setTitle(copy.title);
      meta.updateTag({ name: 'description', content: copy.description });
      meta.updateTag({ property: 'og:title', content: copy.title });
      meta.updateTag({ property: 'og:description', content: copy.description });
      meta.updateTag({ property: 'og:locale', content: this.lang() === 'es' ? 'es_PE' : 'en_US' });
    });
  }

  /** Se llama tras la hidratación para no alterar el HTML del servidor. */
  restore(): void {
    const win = this.document.defaultView;
    const fromUrl = new URLSearchParams(win?.location.search).get('lang');
    const preferred =
      (fromUrl === 'es' || fromUrl === 'en' ? fromUrl : null) ??
      this.read() ??
      (win?.navigator.language.startsWith('es') ? 'es' : 'en');
    this.lang.set(preferred);
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Almacenamiento no disponible (modo privado): el cambio aplica solo a esta visita.
    }
  }

  private read(): Lang | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      return value === 'es' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }
}
