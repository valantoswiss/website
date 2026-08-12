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

/* „oder Demo buchen" zeigt laut Handout A1 auf einen Kalender (Calendly o. ä.)
   und bewusst NICHT auf /kontakt. Der Kalender-Link ist noch ein offener
   Entscheid — bis er da ist, fällt der Link auf /kontakt zurück, damit hier
   kein toter Link steht. Sobald die URL feststeht: in Vercel (Production und
   Preview) VITE_DEMO_CALENDAR_URL setzen, sonst ist keine Code-Änderung nötig. */
export const DEMO_CALENDAR_URL = import.meta.env.VITE_DEMO_CALENDAR_URL || '/kontakt'

/** true, sobald ein echter Kalender-Link konfiguriert ist. */
export const HAS_DEMO_CALENDAR = Boolean(import.meta.env.VITE_DEMO_CALENDAR_URL)
