import { useEffect } from 'react'

export default function Datenschutz() {
  // Cosmetic only (browser tab, post-hydration) – see Impressum.jsx for why
  // this isn't done via vite-react-ssg's Head.
  useEffect(() => {
    document.title = 'Datenschutzerklärung – Valanto'
  }, [])

  return (
    <section className="legal-page">
      <div className="inner legal-page__inner">
        <h1>Datenschutzerklärung</h1>
        <p className="legal-page__stand">Stand: Juli 2026</p>

        <h2>1. Verantwortliche</h2>
        <p>Verantwortlich für die Datenbearbeitung auf dieser Website ist:</p>
        <p>
          Felsberg Consulting GmbH
          <br />
          Felsbergstrasse 2
          <br />
          8625 Gossau
          <br />
          Schweiz
          <br />
          E-Mail: <a href="mailto:info@valanto.ch">info@valanto.ch</a>
        </p>

        <h2>2. Welche Daten wir bearbeiten</h2>
        <p>Beim Besuch dieser Website bearbeiten wir folgende Personendaten:</p>
        <p>
          Server-Logdaten: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene
          Seiten, Browser-Typ und Betriebssystem. Diese Daten fallen beim Betrieb der
          Website technisch an und dienen der Sicherheit und Stabilität.
        </p>
        <p>
          Kontaktdaten: Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren,
          bearbeiten wir die von Ihnen mitgeteilten Angaben (Name, allenfalls Firma,
          E-Mail-Adresse, Nachricht), um Ihre Anfrage zu beantworten. Der Versand
          erfolgt über unseren E-Mail-Server.
        </p>
        <p>
          Nutzungsdaten (Webanalyse): Informationen über Ihre Nutzung der Website
          (besuchte Seiten, Verweildauer, ungefährer Standort, verwendetes Gerät),
          erhoben über Google Analytics (siehe Ziffer 6).
        </p>

        <h2>3. Zweck und Rechtsgrundlage</h2>
        <p>
          Wir bearbeiten diese Daten, um die Website sicher zu betreiben, Anfragen zu
          beantworten und unser Angebot zu verbessern. Die Bearbeitung stützt sich auf
          unser berechtigtes Interesse am Betrieb, an der Sicherheit und an der
          Weiterentwicklung der Website sowie – bei Kontaktanfragen – auf die
          Anbahnung einer Geschäftsbeziehung. Soweit für einzelne Dienste erforderlich,
          holen wir Ihre Einwilligung ein (siehe Ziffer 5).
        </p>

        <h2>4. Hosting und Datenübermittlung ins Ausland</h2>
        <p>
          Diese Website wird über Infrastruktur-Dienstleister betrieben, die ihren
          Sitz teilweise ausserhalb der Schweiz haben, insbesondere Cloudflare Inc.
          (USA) als Content-Delivery- und Sicherheitsdienst. Dabei können
          Personendaten, insbesondere Server-Logdaten (IP-Adresse, Zugriffszeitpunkt),
          in die USA übermittelt werden. Die Übermittlung stützt sich auf anerkannte
          Garantien, insbesondere das Swiss-U.S. Data Privacy Framework bzw.
          Standardvertragsklauseln. Wir sind bestrebt, die Datenbearbeitung soweit
          möglich in der Schweiz durchzuführen.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Diese Website verwendet Cookies. Technisch notwendige Cookies stellen den
          Betrieb der Website sicher. Darüber hinaus setzen wir Analyse-Cookies
          (Google Analytics) ein, um die Nutzung der Website auszuwerten. Soweit
          erforderlich, holen wir Ihre Einwilligung über einen Cookie-Hinweis ein. Sie
          können Cookies in Ihren Browser-Einstellungen jederzeit löschen oder
          blockieren; dies kann die Funktionalität der Website einschränken.
        </p>

        <h2>6. Google Analytics</h2>
        <p>
          Wir nutzen Google Analytics, einen Webanalysedienst der Google Ireland
          Limited (Gordon House, Barrow Street, Dublin 4, Irland) bzw. der Google LLC
          (USA). Google Analytics verwendet Cookies und ähnliche Technologien, um die
          Nutzung der Website auszuwerten. Die dabei erzeugten Informationen werden in
          der Regel an Server von Google übertragen und dort gespeichert; eine
          Übermittlung in die USA ist möglich. Die IP-Adresse wird vor der Speicherung
          gekürzt (IP-Anonymisierung); eine direkte Identifikation Ihrer Person ist
          dadurch ausgeschlossen.
        </p>
        <p>
          Die Übermittlung in die USA stützt sich auf das Swiss-U.S. Data Privacy
          Framework bzw. Standardvertragsklauseln. Sie können die Erfassung durch
          Google Analytics verhindern, indem Sie die Cookie-Einwilligung nicht
          erteilen, das Browser-Add-on zur Deaktivierung von Google Analytics
          installieren (
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
            tools.google.com/dlpage/gaoptout
          </a>
          ) oder Cookies in Ihrem Browser blockieren.
        </p>

        <h2>7. Weitergabe an Dritte</h2>
        <p>
          Wir geben Personendaten nur weiter, wenn dies zur Erfüllung der genannten
          Zwecke erforderlich ist (z. B. an unsere Hosting- und Analyse-Dienstleister)
          oder wir gesetzlich dazu verpflichtet sind. Ein Verkauf von Personendaten
          findet nicht statt.
        </p>

        <h2>8. Aufbewahrung</h2>
        <p>
          Wir bearbeiten Personendaten nur so lange, wie es für die genannten Zwecke
          erforderlich ist. Server-Logdaten werden in der Regel nach 90 Tagen
          gelöscht, Analyse-Daten gemäss den bei Google Analytics konfigurierten
          Aufbewahrungsfristen, Kontaktanfragen so lange, wie es die Bearbeitung und
          Nachvollziehbarkeit erfordert.
        </p>

        <h2>9. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft über die zu Ihrer Person bearbeiteten
          Daten, auf Berichtigung unrichtiger Daten, auf Löschung sowie auf Herausgabe
          bzw. Übertragung Ihrer Daten, soweit das Gesetz dies vorsieht. Wenden Sie
          sich dazu an <a href="mailto:info@valanto.ch">info@valanto.ch</a>. Zuständige
          Aufsichtsbehörde in der Schweiz ist der Eidgenössische Datenschutz- und
          Öffentlichkeitsbeauftragte (EDÖB).
        </p>

        <h2>10. Änderungen</h2>
        <p>
          Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt die
          jeweils auf dieser Website publizierte Fassung.
        </p>
      </div>
    </section>
  )
}
