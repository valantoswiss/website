/* Zentrale Ziele für die Primär-CTAs.
   Konten entstehen ausschliesslich in der App (Handout B0) – die Website
   sammelt keine Registrierungsdaten und übergibt nichts. Der optionale
   ?ref=<token> trägt nur die Herkunft mit und wird in der App am Konto
   gespeichert. */

export const APP_REGISTER_URL = 'https://app.valanto.ch/registrieren'

/* Die AGB gibt es nur in der App – eine Fassung für Registrierung und
   Website (Fabian 18.10.2026); die Website verlinkt dorthin. */
export const APP_TERMS_URL = 'https://app.valanto.ch/agb'

/* Kein Demo-Angebot mehr (Fabian 12.08.2026, nach Jürgs Nein zum Kalender
   vom 28.07.): Der Sekundär-CTA zeigt auf das Produktvideo (#video; die
   Produkt-Screens liegen unter #examples), später auf Erklär-Tutorials. Wer eine Demo will, schreibt uns via /kontakt. */

/* Kontaktformular (/kontakt): Seit dem Umzug auf Ploi nimmt die App die
   Anfrage entgegen (POST /api/v1/kontakt) – die frühere Vercel-Function gibt
   es dort nicht mehr. Die Staging-Website schickt an die Staging-App, damit
   sich das Formular vor dem Produktiv-Deploy testen lässt. VITE_CONTACT_URL
   überschreibt das Ziel, etwa für die lokale Entwicklung. Erst beim Absenden
   aufgerufen: Beim Vorrendern gibt es kein window. */
export function contactEndpoint() {
  if (import.meta.env.VITE_CONTACT_URL) {
    return import.meta.env.VITE_CONTACT_URL
  }

  const isStaging = window.location.hostname.startsWith('staging.')

  return isStaging
    ? 'https://staging.app.valanto.ch/api/v1/kontakt'
    : 'https://app.valanto.ch/api/v1/kontakt'
}
