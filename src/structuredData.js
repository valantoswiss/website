/* Strukturierte Daten (schema.org, JSON-LD) für Suchmaschinen und KI-Suchsysteme.
   Wird von <Seo> (src/Seo.jsx) in jede vorgerenderte Seite eingebettet.

   Die Angaben spiegeln die sichtbaren Inhalte: Organisation aus dem Impressum,
   Funktionen und Preise aus src/locales/de.json (pricing.plans, features.items).
   Ändern sich Preise oder Pakete dort, hier nachziehen. */

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://valanto.ch').replace(/\/$/, '')

export const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Valanto',
  legalName: 'Felsberg Consulting GmbH',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon-512.png`,
  email: 'info@valanto.ch',
  vatID: 'CHE-172.827.128',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Felsbergstrasse 2',
    postalCode: '8625',
    addressLocality: 'Gossau ZH',
    addressCountry: 'CH',
  },
  areaServed: 'CH',
  knowsLanguage: 'de',
}

export const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Valanto',
  inLanguage: 'de-CH',
  publisher: { '@id': organization['@id'] },
}

/* `price`/`priceCurrency` direkt am Offer sind Googles Pflichtfelder für
   SoftwareApplication; die UnitPriceSpecification trägt zusätzlich den
   Bezug «pro Benutzer und Monat» und «exkl. MwSt.». Ein Software-Rich-Result
   zeigt Google erst mit `review` oder `aggregateRating` – die gibt es (noch)
   nicht auf der Website, und erfunden werden sie nicht. */
function plan(name, price, description) {
  return {
    '@type': 'Offer',
    name,
    description,
    url: `${SITE_URL}/#pricing`,
    availability: 'https://schema.org/InStock',
    price,
    priceCurrency: 'CHF',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price,
      priceCurrency: 'CHF',
      unitText: 'pro Benutzer und Monat',
      valueAddedTaxIncluded: false,
    },
  }
}

export const softwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#software`,
  name: 'Valanto',
  url: `${SITE_URL}/`,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Immobiliensoftware',
  operatingSystem: 'Web',
  inLanguage: 'de-CH',
  countriesSupported: 'CH',
  description:
    'Schweizer Immobiliensoftware für Makler und Bewerter: Liegenschaften erfassen, ' +
    'Verkehrswert-Bewertungen mit Gutachten-Dossier als PDF, Neubauprojekte, ' +
    'Landingpages und Verkäufer-Portal – in einem Werkzeug. Entwickelt und gehostet ' +
    'in der Schweiz, datenschutzkonform nach revDSG.',
  featureList: [
    'Liegenschaften erfassen – alle Objekte mit vollständigem Dossier an einem Ort',
    'Bewertungen mit Dossier – nachvollziehbare Verkehrswert-Bewertungen, Gutachten als PDF',
    'Neubauprojekte – Projekte anlegen, Einheiten verwalten, Verkaufsstand im Blick',
    'Landingpages – eigene Vermarktungsseite für jedes Objekt',
    'Verkäufer-Portal – Verkäufer sehen den Stand jederzeit selbst',
  ],
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Immobilienmakler und Immobilienbewerter in der Schweiz',
  },
  publisher: { '@id': organization['@id'] },
  offers: [
    plan(
      'Gratis-Sitzplatz',
      0,
      'Ein Gratis-Sitzplatz pro Firma mit je einer Liegenschaft, einer Bewertung und ' +
        'einem Neubauprojekt – ohne Zeitlimit, ohne Kreditkarte.',
    ),
    plan('Bewerter', 50, 'Bewertungen mit Dossier, Liegenschaften-Grunddaten, Gutachten-Dossier als PDF.'),
    plan('Makler', 80, 'Liegenschaften und Dossier, Neubauprojekte, Landingpages, Verkäufer-Portal.'),
    plan('Spezialist', 120, 'Alles aus Makler plus Bewertungen mit Dossier – für alle, die beides machen.'),
  ],
}
