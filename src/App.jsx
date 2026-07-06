import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LANGS = ['de', 'fr', 'en']
const LANG_NAMES = { de: 'Deutsch', fr: 'Français', en: 'English' }

// Placeholder links (Login, legal, contact) have no destination yet in this
// prototype — prevent the bare "#" href from jumping the page to the top.
const placeholderClick = (e) => e.preventDefault()

/* Angular inline-SVG icons (Valanto style) — replace all emoji */
const SwissCross = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" style={{ flex: 'none' }}>
    <rect width="14" height="14" fill="#23808F" />
    <rect x="5.9" y="2.8" width="2.2" height="8.4" fill="#fff" />
    <rect x="2.8" y="5.9" width="8.4" height="2.2" fill="#fff" />
  </svg>
)
const IconLock = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23262D" strokeWidth="1.8" aria-hidden="true" style={{ flex: 'none' }}>
    <rect x="4" y="10.5" width="16" height="10.5" /><path d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3" />
  </svg>
)
const IconHouse = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#23262D" strokeWidth="1.8" aria-hidden="true" style={{ flex: 'none' }}>
    <path d="M4 11 12 4l8 7" /><path d="M6 10.5V20h12v-9.5" />
  </svg>
)
const IconSwissBox = () => <SwissCross size={26} />
const SIV_ICONS = [IconSwissBox, IconLock, IconHouse] // positionsbasiert

/* Fixed (non-translated) sample data for the hero dossier visual */
const DOSSIER = {
  address: 'Seestrasse 14, 8703 Erlenbach',
  value: "CHF 1'240'000",
  ratings: [
    { key: 'r1', width: 82, val: '4.5' },
    { key: 'r2', width: 70, val: '4.0' },
    { key: 'r3', width: 64, val: '3.5', light: true },
  ],
}

function Brand({ className }) {
  return (
    <div className={`brand ${className || ''}`}>
      <span className="brand__name">Valanto</span>
      <span className="brand__dot" />
    </div>
  )
}

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

function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#features', label: t('nav.features') },
    { href: '#audience', label: t('nav.forwho') },
    { href: '#pricing', label: t('nav.pricing') },
    { href: '#siv', label: t('nav.about') },
  ]
  return (
    <div className="header">
      <header className="nav">
        <Brand />
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

function Dossier() {
  const { t } = useTranslation()
  return (
    <div className="dossier">
      <div className="dossier__top">
        <span className="dossier__label">{t('dossier.label')}</span>
        <span className="dossier__brand">Valanto</span>
      </div>
      <div className="dossier__rule" />
      <div className="dossier__meta">
        <span className="dossier__type">{t('dossier.type')}</span>
        <span className="dossier__addr">{DOSSIER.address}</span>
      </div>
      <div className="dossier__value-wrap">
        <span className="dossier__value-label">{t('dossier.mv')}</span>
        <span className="dossier__value">{DOSSIER.value}</span>
      </div>
      <div className="dossier__ratings">
        {DOSSIER.ratings.map((r) => (
          <div className="rating" key={r.key}>
            <span className="rating__label">{t(`dossier.${r.key}`)}</span>
            <span className="rating__track">
              <span
                className={`rating__fill ${r.light ? 'rating__fill--light' : ''}`}
                style={{ width: `${r.width}%` }}
              />
            </span>
            <span className="rating__val">{r.val}</span>
          </div>
        ))}
      </div>
      <div className="dossier__foot">
        <span className="dossier__foot-note">{t('dossier.footer')}</span>
        <span className="dossier__foot-pdf">{t('dossier.pdf')}</span>
      </div>
    </div>
  )
}

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero" id="home">
      <div className="inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span className="eyebrow">{t('hero.eyebrow')}</span>
          </div>
          <h1 className="hero__title">{t('hero.h1')}</h1>
          <p className="hero__lead">{t('hero.lead')}</p>
          <div className="hero__ctas">
            <button className="btn btn-primary">{t('hero.cta1')}</button>
            <button className="btn btn-ghost">{t('hero.cta2')}</button>
          </div>
          <p className="hero__trust">{t('hero.trust')}</p>
        </div>
        <div className="hero__visual">
          <div className="dossier-back" />
          <Dossier />
          <div className="hosted-badge">
            <SwissCross /> {t('dossier.hosted')}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const { t } = useTranslation()
  return (
    <section className="trustbar">
      <div className="inner">
        <span className="trustbar__line">{t('trust.line')}</span>
        <div className="trustbar__badges">
          <span className="badge">
            <SwissCross /> {t('trust.b1')}
          </span>
          <span className="badge">{t('trust.b2')}</span>
          <span className="badge badge--soft">{t('trust.b3')}</span>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })
  return (
    <section className="features" id="features">
      <div className="inner">
        <div className="features__head">
          <div className="features__head-left">
            <span className="eyebrow">{t('features.eyebrow')}</span>
            <h2 className="h2">{t('features.h2')}</h2>
          </div>
          <p className="features__intro">{t('features.intro')}</p>
        </div>
        <div className="features__grid">
          {items.map((f, i) => (
            <div className="feature" key={i}>
              <div className="feature__top">
                <span className="feature__no">{String(i + 1).padStart(2, '0')}</span>
                <span className="feature__box" />
              </div>
              <h3 className="feature__title">{f.t}</h3>
              <p className="feature__desc">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Audience() {
  const { t } = useTranslation()
  const items = t('audience.items', { returnObjects: true })
  return (
    <section className="audience" id="audience">
      <div className="inner">
        <div className="audience__head">
          <span className="eyebrow">{t('audience.eyebrow')}</span>
          <h2 className="h2">{t('audience.h2')}</h2>
        </div>
        <div className="audience__grid">
          {items.map((a, i) => (
            <div className={`aud ${i === 1 ? 'aud--mid' : ''}`} key={i}>
              <h3 className="aud__role">{a.role}</h3>
              <div className="aud__rule" />
              <p className="aud__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const { t } = useTranslation()
  const plans = t('pricing.plans', { returnObjects: true })
  return (
    <section className="pricing" id="pricing">
      <div className="inner">
        <div className="pricing__head">
          <span className="eyebrow">{t('pricing.eyebrow')}</span>
          <h2 className="h2 pricing__h2">{t('pricing.h2')}</h2>
          <p className="pricing__intro">{t('pricing.intro')}</p>
        </div>
        <div className="pricing__grid">
          {plans.map((p, i) => {
            const popular = i === 1
            return (
              <div className={`plan ${popular ? 'plan--popular' : ''}`} key={i}>
                {popular && <div className="plan__badge">{t('pricing.popular')}</div>}
                <span className="plan__name">{p.name}</span>
                <div className="plan__price-row">
                  <span className="plan__price">{p.price}</span>
                  <span className="plan__per">{p.per}</span>
                </div>
                <div className="plan__rule" />
                <div className="plan__features">
                  {p.features.map((feat, j) => (
                    <div className="plan__feat" key={j}>
                      <span className="check">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`btn plan__cta ${popular ? 'plan__cta--fill' : 'plan__cta--ghost'}`}
                >
                  {t('pricing.test')}
                </button>
              </div>
            )
          })}
        </div>
        <p className="pricing__note">{t('pricing.note')}</p>
      </div>
    </section>
  )
}

function Siv() {
  const { t } = useTranslation()
  const points = t('siv.points', { returnObjects: true })
  return (
    <section className="siv" id="siv">
      <div className="inner">
        <div className="siv__copy">
          <span className="eyebrow">{t('siv.eyebrow')}</span>
          <h2 className="h2">{t('siv.h2')}</h2>
          <p className="siv__text">{t('siv.text')}</p>
        </div>
        <div className="siv__points">
          {points.map((p, i) => {
            const Icon = SIV_ICONS[i]
            return (
              <div className="sivrow" key={i}>
                <span className="sivrow__icon">{Icon ? <Icon /> : null}</span>
                <div>
                  <div className="sivrow__title">{p.t}</div>
                  <div className="sivrow__desc">{p.d}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ClosingCta() {
  const { t } = useTranslation()
  return (
    <section className="closing">
      <h2 className="closing__title">{t('cta.h2')}</h2>
      <p className="closing__text">{t('cta.text')}</p>
      <div className="closing__ctas">
        <button className="btn btn-primary">{t('hero.cta1')}</button>
        <button className="btn btn-ghost">{t('hero.cta2')}</button>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand />
            <p className="footer__claim">{t('footer.claim')}</p>
            <span className="footer__madein">
              <SwissCross /> {t('footer.madein')}
            </span>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c1')}</span>
            <a href="#features">{t('nav.features')}</a>
            <a href="#pricing">{t('nav.pricing')}</a>
            <a href="#" onClick={placeholderClick}>{t('nav.login')}</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c2')}</span>
            <a href="#siv">{t('nav.about')}</a>
            <a href="#" onClick={placeholderClick}>{t('footer.contact')}</a>
            <a href="#siv">SIV</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c3')}</span>
            <a href="#" onClick={placeholderClick}>{t('footer.imprint')}</a>
            <a href="#" onClick={placeholderClick}>{t('footer.privacy')}</a>
            <a href="#" onClick={placeholderClick}>{t('footer.terms')}</a>
          </div>
        </div>
        <div className="footer__copy">{t('footer.copy')}</div>
      </div>
    </footer>
  )
}

export default function App() {
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
      <a className="skip-link" href="#home">
        Zum Inhalt
      </a>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Audience />
        <Pricing />
        <Siv />
        <ClosingCta />
      </main>
      <Footer />
    </>
  )
}
