import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'

export default function Layout() {
  const { i18n } = useTranslation()

  // Restore the saved language AFTER hydration only — initial render must stay
  // 'de' to match the statically prerendered HTML (no hydration mismatch).
  useEffect(() => {
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
