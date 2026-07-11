import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Kontakt() {
  const { t } = useTranslation()

  // Cosmetic only (browser tab, post-hydration) — see Impressum.jsx for why
  // this isn't done via vite-react-ssg's Head. Static title is fine here
  // (no translation needed for the tab title).
  useEffect(() => {
    document.title = 'Kontakt – Valanto'
  }, [])

  return (
    <section className="legal-page">
      <div className="inner legal-page__inner">
        <h1>{t('contactPage.h1')}</h1>
        <p>{t('contactPage.text')}</p>

        <p>
          <a href="mailto:info@valanto.ch">info@valanto.ch</a>
        </p>

        <p>
          Felsberg Consulting GmbH
          <br />
          Felsbergstrasse 2
          <br />
          8625 Gossau
        </p>
      </div>
    </section>
  )
}
