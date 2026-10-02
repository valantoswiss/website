import Seo from '../Seo.jsx'
import { artikelPfad } from '../wissen/artikel.js'
import { formatDatum } from './Wissen.jsx'

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://valanto.ch').replace(/\/$/, '')

/**
 * Ein Fachartikel unter /wissen/{slug}/. Inhalt aus src/wissen/artikel.js;
 * die Route je Artikel entsteht in src/main.jsx, damit vite-react-ssg jeden
 * Artikel als eigenes HTML vorrendert.
 *
 * JSON-LD: Article (mit Autor, Daten und Herausgeber) plus BreadcrumbList
 * und – wenn der Artikel welche hat – FAQPage für die Kurzantworten am Ende.
 *
 * @param {{ eintrag: object }} props  ein Eintrag aus `artikel`
 */
export default function WissenArtikel({ eintrag }) {
  const url = `${SITE_URL}${artikelPfad(eintrag)}`

  const jsonLd = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: eintrag.titel,
      description: eintrag.beschreibung,
      url,
      mainEntityOfPage: url,
      inLanguage: 'de-CH',
      datePublished: eintrag.veroeffentlicht,
      dateModified: eintrag.aktualisiert ?? eintrag.veroeffentlicht,
      author: eintrag.autor ?? { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: eintrag.themen,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Valanto', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Wissen', item: `${SITE_URL}/wissen/` },
        { '@type': 'ListItem', position: 3, name: eintrag.titel, item: url },
      ],
    },
    ...(eintrag.faq?.length
      ? [
          {
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: eintrag.faq.map(({ frage, antwort }) => ({
              '@type': 'Question',
              name: frage,
              acceptedAnswer: { '@type': 'Answer', text: antwort },
            })),
          },
        ]
      : []),
  ]

  return (
    <article className="article-page">
      <Seo
        title={`${eintrag.titel} – Valanto`}
        description={eintrag.beschreibung}
        path={artikelPfad(eintrag)}
        jsonLd={jsonLd}
      />
      <div className="inner article-page__inner">
        <nav className="article-page__crumbs" aria-label="Brotkrumen">
          <a href="/wissen/">Wissen</a>
        </nav>
        <h1>{eintrag.titel}</h1>
        <p className="article-page__meta">
          {eintrag.autorName ? `${eintrag.autorName} · ` : ''}
          {formatDatum(eintrag.veroeffentlicht)}
          {eintrag.aktualisiert ? ` · aktualisiert ${formatDatum(eintrag.aktualisiert)}` : ''} ·{' '}
          {eintrag.lesezeit} Min. Lesezeit
        </p>
        <p className="article-page__lead">{eintrag.lead}</p>

        {eintrag.kurzantwort && (
          <aside className="article-page__summary">
            <strong>Kurz gesagt</strong>
            <p>{eintrag.kurzantwort}</p>
          </aside>
        )}

        {eintrag.abschnitte.map((abschnitt) => (
          <section key={abschnitt.titel}>
            <h2>{abschnitt.titel}</h2>
            {abschnitt.inhalt.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </section>
        ))}

        {eintrag.faq?.length > 0 && (
          <section>
            <h2>Häufige Fragen</h2>
            {eintrag.faq.map(({ frage, antwort }) => (
              <div key={frage} className="article-page__faq">
                <h3>{frage}</h3>
                <p>{antwort}</p>
              </div>
            ))}
          </section>
        )}

        {eintrag.valanto && (
          <aside className="article-page__product">
            <strong>So rechnet Valanto</strong>
            <p>{eintrag.valanto}</p>
            <a className="btn btn-primary" href="/#pricing">
              Valanto kennenlernen
            </a>
          </aside>
        )}

        <p className="article-page__back">
          <a href="/wissen/">← Alle Artikel</a>
        </p>
      </div>
    </article>
  )
}

/** Ein Inhaltsblock: Absatz, Liste, Tabelle oder Rechenbeispiel. */
function Block({ block }) {
  if (block.absatz) {
    return <p>{block.absatz}</p>
  }

  if (block.liste) {
    return (
      <ul>
        {block.liste.map((punkt) => (
          <li key={punkt}>{punkt}</li>
        ))}
      </ul>
    )
  }

  if (block.tabelle) {
    return (
      <div className="article-page__table">
        <table>
          {block.tabelle.titel && <caption>{block.tabelle.titel}</caption>}
          <thead>
            <tr>
              {block.tabelle.kopf.map((zelle) => (
                <th key={zelle} scope="col">
                  {zelle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.tabelle.zeilen.map((zeile, index) => (
              <tr
                key={index}
                className={
                  block.tabelle.summenzeile && index === block.tabelle.zeilen.length - 1
                    ? 'article-page__total'
                    : undefined
                }
              >
                {zeile.map((zelle, spalte) => (
                  <td key={spalte}>{zelle}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.beispiel) {
    return (
      <div className="article-page__example">
        <strong>{block.beispiel.titel}</strong>
        {block.beispiel.zeilen.map((zeile) => (
          <p key={zeile}>{zeile}</p>
        ))}
      </div>
    )
  }

  return null
}
