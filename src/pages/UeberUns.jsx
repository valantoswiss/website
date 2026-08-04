import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * «Über uns» – von Jürg am 4.8.2026 gegengelesen und freigegeben.
 *
 * Bewusst ohne Personenbeschreibung und ohne Foto: Beides hat er gestrichen
 * («weglassen» / «nein»). Die Betreiberin steht im Impressum und im
 * Footer-Copyright, deshalb nennt diese Seite sie nicht noch einmal.
 */
export default function UeberUns() {
  const { t } = useTranslation()

  // Cosmetic only (browser tab, post-hydration) – wie in Impressum.jsx: der
  // vorgerenderte HTML behält den geteilten <title> aus index.html.
  useEffect(() => {
    document.title = `${t('aboutPage.h1')} – Valanto`
  }, [t])

  return (
    <section className="legal-page">
      <div className="inner legal-page__inner">
        <h1>{t('aboutPage.h1')}</h1>

        <h2>{t('aboutPage.origin.h2')}</h2>
        <p>{t('aboutPage.origin.p1')}</p>
        <p>{t('aboutPage.origin.p2')}</p>

        <h2>{t('aboutPage.team.h2')}</h2>
        <p>{t('aboutPage.team.p1')}</p>

        <h2>{t('aboutPage.practice.h2')}</h2>
        <p>{t('aboutPage.practice.p1')}</p>

        <p>
          {t('aboutPage.contact')}{' '}
          <a href="mailto:info@valanto.ch">info@valanto.ch</a>
        </p>
      </div>
    </section>
  )
}
