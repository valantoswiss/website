import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Brand } from './Brand.jsx'

const LANGS = ['de', 'fr', 'en']
const LANG_NAMES = { de: 'Deutsch', fr: 'Français', en: 'English' }

// Placeholder links (Login) have no destination yet in this prototype —
// prevent the bare "#" href from jumping the page to the top.
export const placeholderClick = (e) => e.preventDefault()

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
          <LangSwitch />
          <a className="nav__login" href="#" onClick={placeholderClick}>
            {t('nav.login')}
          </a>
          <button className="btn nav__try">{t('nav.try')}</button>
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
        <a
          href="#"
          onClick={(e) => {
            placeholderClick(e)
            setOpen(false)
          }}
        >
          {t('nav.login')}
        </a>
      </nav>
    </div>
  )
}
