/* Zentrale Ziele für die Primär-CTAs.
   Konten entstehen ausschliesslich in der App (Handout B0) — die Website
   sammelt keine Registrierungsdaten und übergibt nichts. Der optionale
   ?ref=<token> trägt nur die Herkunft mit und wird in der App am Konto
   gespeichert. */

export const APP_REGISTER_URL = 'https://app.valanto.ch/registrieren'

/** Registrierungslink, optional mit Herkunfts-Token (Kampagne, SIV-Termin …). */
export function registerUrl(ref) {
  return ref ? `${APP_REGISTER_URL}?ref=${encodeURIComponent(ref)}` : APP_REGISTER_URL
}

/* „oder Demo buchen" zeigt auf /kontakt.

   Das Handout A1 verlangte hier einen Kalender (Calendly o. ä.) und schloss
   /kontakt ausdrücklich aus. Jürg hat das am 28.07.2026 anders entschieden:
   keine Kalenderanbindung. Das Produkt soll selbsterklärend genug sein, dass
   niemand eine Demo braucht – und wer doch eine will, schreibt uns. Ein
   Buchungs-Slot wäre Infrastruktur für einen Fall, den wir gar nicht wollen.

   Der Schalter bleibt: sollte später doch ein Kalender kommen, genügt
   VITE_DEMO_CALENDAR_URL in Vercel (Production und Preview), ohne Code-Änderung. */
export const DEMO_CALENDAR_URL = import.meta.env.VITE_DEMO_CALENDAR_URL || '/kontakt'
