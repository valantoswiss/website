import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import Nav, { LANG_SWITCH_ENABLED } from './Nav.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'

export default function Layout() {
  const { i18n } = useTranslation()

  // Restore the saved language AFTER hydration only – initial render must stay
  // 'de' to match the statically prerendered HTML (no hydration mismatch).
  // Nur solange der Umschalter aktiv ist: Sonst würde eine alte Wahl aus
  // localStorage die Seite auf FR/EN drehen, während Canonical, hreflang,
  // og:locale und JSON-LD fest Deutsch sind (Codex-Review #21).
  useEffect(() => {
    if (!LANG_SWITCH_ENABLED) return
    const saved = localStorage.getItem('valanto_lang')
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
