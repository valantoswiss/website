import { useTranslation } from 'react-i18next'
import { SwissCross } from '../Brand.jsx'

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
          {/* TODO: nach Server-Umzug CH zurück auf 'Schweizer Hosting' — betrifft
              die Keys dossier.hosted, trust.b1, hero.trust/lead, meta.description,
              pricing features und siv.points[0] in allen drei Locales sowie die
              index.html-Metas und das og-Bild (og-image-source.html). */}
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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <Audience />
      <Pricing />
      <Siv />
      <ClosingCta />
    </>
  )
}
