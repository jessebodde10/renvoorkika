/**
 * Heeft de bezoeker "minder beweging" aanstaan in het besturingssysteem?
 *
 * CSS vangt animaties en transities al af (zie globals.css), maar beweging
 * die in JavaScript wordt aangestuurd — een tellende animatie, smooth
 * scrollen — moet dit zelf controleren.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
