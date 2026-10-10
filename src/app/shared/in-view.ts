/** Utilidades de navegador compartidas por las directivas de animación. */

export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

/**
 * Ejecuta `callback` una sola vez cuando el elemento entra en el viewport.
 * Devuelve una función para cancelar la observación.
 */
export function onceInView(el: Element, callback: () => void, threshold = 0.15): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        callback();
      }
    },
    { threshold, rootMargin: '0px 0px -40px 0px' },
  );
  observer.observe(el);
  return () => observer.disconnect();
}
