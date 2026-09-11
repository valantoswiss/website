import { Head } from 'vite-react-ssg'
import { organization, website } from './structuredData.js'

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://valanto.ch').replace(/\/$/, '')

/**
 * Seitenspezifischer <head>: Titel, Beschreibung, Canonical, Open Graph und
 * strukturierte Daten (JSON-LD). Jede Seite unter src/pages/ rendert genau
 * ein <Seo>. Die seitenübergreifenden Tags (Favicons, og:image, og:type)
 * bleiben in index.html.
 *
 * Läuft über vite-react-ssg's <Head> (React Helmet): beim Build landen die
 * Tags im vorgerenderten HTML jeder Route – genau das, was Suchmaschinen und
 * die Crawler der KI-Suchsysteme lesen. Damit dabei nichts doppelt entsteht,
 * darf index.html keinen dieser Tags mehr enthalten.
 *
 * @param {object} props
 * @param {string} props.title        vollständiger Seitentitel («… – Valanto»)
 * @param {string} props.description  Meta-Beschreibung, 1–2 Sätze
 * @param {string} [props.path]       Pfad der Seite, z. B. '/kontakt/' – mit
 *                                    Schrägstrich, weil Nginx auf Staging und
 *                                    Live '/kontakt' dorthin umleitet und
 *                                    Canonicals nie auf eine Umleitung zeigen
 *                                    sollen (wird notfalls ergänzt)
 * @param {object[]} [props.jsonLd]   zusätzliche schema.org-Knoten für diese Seite
 */
export default function Seo({ title, description, path = '/', jsonLd = [] }) {
  const url = `${SITE_URL}${path.endsWith('/') ? path : `${path}/`}`
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, ...jsonLd],
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* Nur DE wird vorgerendert; FR/EN sind deaktiviert (siehe i18n.js). */}
      <link rel="alternate" hrefLang="de" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Head>
  )
}
