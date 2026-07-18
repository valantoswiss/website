import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Brand } from './Brand.jsx'

const LANGS = ['de', 'fr', 'en']
const LANG_NAMES = { de: 'Deutsch', fr: 'Français', en: 'English' }

// FR/EN sind vorübergehend deaktiviert – die App läuft aktuell nur auf
// Deutsch, darum zeigt auch die Website nur DE. Zum Reaktivieren dieses
// Flag auf true setzen; die Locales (fr/en.json) bleiben gepflegt.
const LANG_SWITCH_ENABLED = false

// "Login" ist bewusst entfernt, bis die App öffentlich erreichbar ist –
// ein toter Login signalisiert Baustelle (nav.login-Key bleibt in den
// Locales für die Rückkehr).

function LangSwitch() {
  const { i18n } = useTranslation()
  return (
    <div className="langswitch" role="group" aria-label="Sprache / Language">
      {LANGS.map((lng) => (
        <button
          key={lng}
          className={i18n.language === lng ? 'is-active' : ''}
          onClick={() => {
            localStorage.setItem('valanto_lang', lng)
            i18n.changeLanguage(lng)
          }}
          aria-pressed={i18n.language === lng}
          aria-label={LANG_NAMES[lng]}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  // Plain hash links (not client-router <Link>): on the homepage they scroll
  // in place, on /impressum or /datenschutz they do a normal navigation back
  // to "/" and the browser lands on the anchor after load.
  const links = [
    { href: '/#features', label: t('nav.features') },
    { href: '/#audience', label: t('nav.forwho') },
    { href: '/#pricing', label: t('nav.pricing') },
    { href: '/#siv', label: t('nav.about') },
  ]
  return (
    <div className="header">
      <header className="nav">
        <a href="/" aria-label="valanto – Startseite">
          <Brand />
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__right">
          {LANG_SWITCH_ENABLED && <LangSwitch />}
          <a className="btn nav__try" href="/kontakt">
            {t('nav.try')}
          </a>
          <button
            className="burger"
            aria-label={t('nav.menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <nav className={`mobile-menu ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="/kontakt" onClick={() => setOpen(false)}>
          {t('nav.try')}
        </a>
      </nav>
    </div>
  )
}
