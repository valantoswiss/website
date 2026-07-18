import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { SwissCross } from '../Brand.jsx'
import heroCover from '../assets/screenshots/hero-gutachten-cover.webp'
import shotRaster1080 from '../assets/screenshots/bewertung-bauteil-raster-1080.webp'
import shotRaster2160 from '../assets/screenshots/bewertung-bauteil-raster-2160.webp'
import shotSummary1080 from '../assets/screenshots/bewertung-zusammenfassung-1080.webp'
import shotSummary2160 from '../assets/screenshots/bewertung-zusammenfassung-2160.webp'

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

/* Lightbox ohne Dependency (Review 17.07.): fixiertes Overlay über dem
   sticky Header, Scroll-Lock, ESC/Backdrop/✕ schliessen. */
function Lightbox({ src, alt, caption, onClose }) {
  const { t } = useTranslation()
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // Scroll-Lock
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
  // Portal an document.body: entkommt jedem Ancestor-Stacking-Context,
  // sonst kann der sticky Header das Overlay trotz z-index 1000 überdecken.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lightbox__close" aria-label={t('shots.close')} onClick={onClose}>✕</button>
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>,
    document.body,
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
            <a className="btn btn-primary" href="/kontakt">{t('hero.cta1')}</a>
            <a className="btn btn-ghost" href="/kontakt">{t('hero.cta2')}</a>
          </div>
          <p className="hero__trust">{t('hero.trust')}</p>
        </div>
        <div className="hero__visual">
          <div className="dossier-back" />
          {/* Echtes Produkt statt Illustration (Issue #5): Deckblatt eines
              Gutachtens aus der App, Demo-Mandant mit neutralisiertem Namen.
              Wrapper (Review 17.07.): verankert das Badge an der Cover-Kante
              statt an der breiteren Spalte. */}
          <div className="hero__cover-wrap">
            <img
              className="hero__cover"
              src={heroCover}
              alt={t('hero.coverAlt')}
              width="1588"
              height="2244"
              fetchPriority="high"
            />
            {/* TODO: nach Server-Umzug CH zurück auf 'Schweizer Hosting' — betrifft
                die Keys dossier.hosted, trust.b1, hero.trust/lead, meta.description,
                pricing features und siv.points[0] in allen drei Locales sowie die
                index.html-Metas und das og-Bild (og-image-source.html). */}
            <div className="hosted-badge">
              <SwissCross /> {t('dossier.hosted')}
            </div>
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
        </div>
      </div>
    </section>
  )
}

/* Echte Produkt-Screenshots zur Feature-Karte „Bewertungen mit Dossier" (Issue #5) */
const PRODUCT_SHOTS = [
  { key: 'raster', small: shotRaster1080, large: shotRaster2160 },
  { key: 'summary', small: shotSummary1080, large: shotSummary2160 },
]

function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })
  const [lightboxShot, setLightboxShot] = useState(null)
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
        <div className="features__shots">
          {PRODUCT_SHOTS.map((s) => {
            const alt = t(`shots.${s.key}.alt`)
            const caption = t(`shots.${s.key}.caption`)
            return (
              <figure className="shot" key={s.key}>
                <button
                  type="button"
                  className="shot__zoom"
                  onClick={() => setLightboxShot({ src: s.large, alt, caption })}
                  aria-label={t('shots.zoom')}
                >
                  <img
                    src={s.small}
                    srcSet={`${s.small} 1080w, ${s.large} 2160w`}
                    sizes="(max-width: 760px) 92vw, 560px"
                    alt={alt}
                    width="1080"
                    height="1250"
                    loading="lazy"
                  />
                </button>
                <figcaption className="shot__caption">{caption}</figcaption>
              </figure>
            )
          })}
        </div>
        {lightboxShot && (
          <Lightbox
            src={lightboxShot.src}
            alt={lightboxShot.alt}
            caption={lightboxShot.caption}
            onClose={() => setLightboxShot(null)}
          />
        )}
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
                <a
                  className={`btn plan__cta ${popular ? 'plan__cta--fill' : 'plan__cta--ghost'}`}
                  href="/kontakt"
                >
                  {t('pricing.test')}
                </a>
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
        <a className="btn btn-primary" href="/kontakt">{t('hero.cta1')}</a>
        <a className="btn btn-ghost" href="/kontakt">{t('hero.cta2')}</a>
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
