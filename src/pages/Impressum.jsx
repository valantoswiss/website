import Seo from '../Seo.jsx'

export default function Impressum() {
  return (
    <section className="legal-page">
      <Seo
        title="Impressum – Valanto"
        description="Impressum von Valanto: Betreiberin Felsberg Consulting GmbH, Gossau ZH, Handelsregister, UID und Kontakt."
        path="/impressum/"
      />
      <div className="inner legal-page__inner">
        <h1>Impressum</h1>

        <h2>Betreiberin dieser Website</h2>
        <p>
          Valanto
          <br />
          Felsbergstrasse 2
          <br />
          8625 Gossau ZH
          <br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>E-Mail: <a href="mailto:info@valanto.ch">info@valanto.ch</a></p>

        <h2>Handelsregister</h2>
        <p>
          Eingetragen im Handelsregister des Kantons Zürich
          <br />
          UID: CHE-172.827.128
        </p>

        <h2>Vertretungsberechtigte Person</h2>
        <p>Jürg Artho, Geschäftsführer</p>

        <h2>Mehrwertsteuer</h2>
        <p>CHE-172.827.128 MWST</p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Die
          Betreiberin übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
          und Aktualität der bereitgestellten Inhalte. Haftungsansprüche wegen Schäden
          materieller oder immaterieller Art, die aus der Nutzung der angebotenen
          Informationen entstehen, sind ausgeschlossen, soweit gesetzlich zulässig.
        </p>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Der Zugriff und die Nutzung solcher Webseiten erfolgen
          auf eigene Gefahr.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern und Dateien auf
          dieser Website gehören ausschliesslich der Felsberg Consulting GmbH oder den
          speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist
          die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>
      </div>
    </section>
  )
}
