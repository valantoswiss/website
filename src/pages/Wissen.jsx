import Seo from '../Seo.jsx'
import { artikel, artikelPfad } from '../wissen/artikel.js'

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://valanto.ch').replace(/\/$/, '')

/**
 * «Wissen» – Übersicht der Fachartikel zur Immobilienbewertung in der Schweiz.
 *
 * Die Artikel sind bewusst nur deutsch und liegen als Daten in
 * src/wissen/artikel.js (nicht in den Locales): Es sind lange Fachtexte, die
 * Jürg fachlich freigibt, keine UI-Texte. Jeder neue Artikel braucht zusätzlich
 * einen Eintrag in public/sitemap.xml und public/llms.txt.
 */
export default function Wissen() {
  const jsonLd = [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/wissen/#page`,
      url: `${SITE_URL}/wissen/`,
      name: 'Wissen zur Immobilienbewertung in der Schweiz',
      inLanguage: 'de-CH',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: artikel.map((eintrag, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}${artikelPfad(eintrag)}`,
          name: eintrag.titel,
        })),
      },
    },
  ]

  return (
    <section className="article-page">
      <Seo
        title="Wissen zur Immobilienbewertung in der Schweiz – Valanto"
        description="Fachartikel aus der Schweizer Bewertungspraxis: Realwert, Altersentwertung, Lageklassen, Ertragswert und mehr – verständlich erklärt."
        path="/wissen/"
        jsonLd={jsonLd}
      />
      <div className="inner article-page__inner">
        <h1>Wissen zur Immobilienbewertung</h1>
        <p className="article-page__lead">
          Fachartikel aus der Schweizer Bewertungspraxis – so, wie Valanto rechnet, und so, dass
          Eigentümer, Makler und Bewerter die Zahlen nachvollziehen können.
        </p>

        <ul className="article-list">
          {artikel.map((eintrag) => (
            <li key={eintrag.slug} className="article-list__item">
              <a href={artikelPfad(eintrag)}>
                <span className="article-list__title">{eintrag.titel}</span>
                <span className="article-list__teaser">{eintrag.beschreibung}</span>
                <span className="article-list__meta">
                  {formatDatum(eintrag.veroeffentlicht)} · {eintrag.lesezeit} Min. Lesezeit
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function formatDatum(isoDatum) {
  const [jahr, monat, tag] = isoDatum.split('-')

  return `${Number(tag)}.${Number(monat)}.${jahr}`
}
