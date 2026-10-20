import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import { House, Lock, Maximize2 } from 'lucide-react'
import Seo from '../Seo.jsx'
import { APP_REGISTER_URL } from '../links.js'
import { softwareApplication } from '../structuredData.js'
import heroCover from '../assets/screenshots/hero-gutachten-cover.webp'
import shotRaster2160 from '../assets/screenshots/bewertung-bauteil-raster-2160.webp'
import shotSummary2160 from '../assets/screenshots/bewertung-zusammenfassung-2160.webp'
import cropRaster1080 from '../assets/screenshots/bewertung-raster-ausschnitt-1080.webp'
import cropRaster1320 from '../assets/screenshots/bewertung-raster-ausschnitt-1320.webp'
import cropSummary1080 from '../assets/screenshots/bewertung-resultat-ausschnitt-1080.webp'
import cropSummary1320 from '../assets/screenshots/bewertung-resultat-ausschnitt-1320.webp'
import audVermarkter1080 from '../assets/screenshots/zielgruppe-vermarkter-1080.webp'
import audVermarkter1440 from '../assets/screenshots/zielgruppe-vermarkter-1440.webp'
import audBewerter1080 from '../assets/screenshots/zielgruppe-bewerter-gutachten-1080.webp'
import audBewerter1585 from '../assets/screenshots/zielgruppe-bewerter-gutachten-1585.webp'
import audDossier1080 from '../assets/screenshots/zielgruppe-spezialist-dossier-1080.webp'
import audDossier1300 from '../assets/screenshots/zielgruppe-spezialist-dossier-1300.webp'
import audExpose800 from '../assets/screenshots/zielgruppe-spezialist-expose-800.webp'
import audExpose1200 from '../assets/screenshots/zielgruppe-spezialist-expose-1200.webp'

// Lucide (Entscheid Fabian 17.10.): Strichstärke 1.75, ohne Füllung.
const ICON_PROPS = { size: 26, strokeWidth: 1.75, fill: 'none', 'aria-hidden': true, style: { flex: 'none' } }
// positionsbasiert zu siv.points: Schloss = Datenschutz, Haus = Praxis.
// Das Schweizerkreuz ist hier raus – es sass an der gestrichenen Hosting-Karte,
// und C3 verbietet Icon-Farbflächen.
const SIV_ICONS = [Lock, House]

/* Lightbox als natives <dialog> (Review 17.10.): showModal() setzt den Fokus in
   den Dialog, sperrt den Hintergrund und gibt den Fokus beim Schliessen an den
   auslösenden Button zurück; ESC schliesst nativ. Portal an document.body:
   entkommt jedem Ancestor-Stacking-Context, sonst kann der sticky Header das
   Overlay überdecken. Der Scroll-Lock bleibt, damit die Seite dahinter ruhig steht. */
function Lightbox({ src, alt, caption, onClose }) {
  const { t } = useTranslation()
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
    document.body.style.overflow = 'hidden' // Scroll-Lock
    return () => {
      document.body.style.overflow = ''
      if (dialog.open) dialog.close()
    }
  }, [])
  // Alle Schliesswege laufen über dialog.close(), damit der Browser den Fokus
  // zurückgibt; das close-Ereignis meldet das Ende an den Aufrufer.
  const close = () => dialogRef.current?.close()
  return createPortal(
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={alt}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <button className="lightbox__close" aria-label={t('shots.close')} onClick={close}>✕</button>
      <figure>
        <img src={src} alt={alt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </dialog>,
    document.body,
  )
}

function Hero() {
  const { t } = useTranslation()
  return (
    <section className="hero" id="home">
      <div className="inner">
        <div className="hero__copy">
          <h1 className="hero__title">{t('hero.h1')}</h1>
          <p className="hero__lead">{t('hero.lead')}</p>
          <div className="hero__ctas cta-row">
            <a className="btn btn-primary" href={APP_REGISTER_URL}>{t('hero.cta1')}</a>
            {/* Kein Demo-Angebot (Fabian 12.08.2026): Sekundär-Link zeigt auf die
                echten Produkt-Screenshots; später sollen hier Erklär-Tutorials hin. */}
            <a className="cta-textlink" href="#examples">{t('hero.cta2')}</a>
          </div>
          <p className="hero__trust">{t('hero.trust')}</p>
        </div>
        <div className="hero__visual">
          {/* Echtes Produkt statt Illustration (Issue #5): Deckblatt eines
              Gutachtens aus der App, Demo-Mandant mit neutralisiertem Namen.
              Der Wrapper hält Breite und Zentrierung des Deckblatts. */}
          <div className="hero__cover-wrap">
            {/* fetchpriority klein geschrieben: React 18 kennt das camelCase-Prop
                noch nicht und warnt darüber – erst React 19 mappt `fetchPriority`. */}
            <img
              className="hero__cover"
              src={heroCover}
              alt={t('hero.coverAlt')}
              width="1588"
              height="2244"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* Produktvideo (Entscheid Jürg/Fabian 20.10.2026): stumm, Schleife, selbst
   gehostet unter public/video/ – keine Dritt-Cookies, kein Consent nötig.
   Die Quellen hängen erst am <video>, wenn der Abschnitt in den Sichtbereich
   kommt (preload="none" allein lädt in manchen Browsern trotzdem Metadaten).
   Ausserhalb des Sichtbereichs pausiert es, bei «weniger Bewegung» bleibt es
   beim Posterbild, bis jemand selbst auf Abspielen drückt. */
const VIDEO_BASE = '/video/valanto-produktvideo'

function ProductVideo() {
  const { t } = useTranslation()
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [playing, setPlaying] = useState(false)
  // Hat jemand selbst pausiert, startet das Video beim Zurückscrollen nicht neu.
  const pausedByUser = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    // React setzt `muted` nicht verlässlich als Attribut – ohne stummes Video
    // blockieren Browser das automatische Abspielen.
    video.muted = true
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          if (!pausedByUser.current) video.play().catch(() => {})
        } else if (!video.paused) {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  // Neue <source>-Elemente greifen erst nach load().
  useEffect(() => {
    if (!loaded) return
    const video = videoRef.current
    video.load()
    if (!pausedByUser.current) video.play().catch(() => {})
  }, [loaded])

  const toggle = () => {
    const video = videoRef.current
    if (video.paused) {
      pausedByUser.current = false
      setLoaded(true)
      video.play().catch(() => {})
    } else {
      pausedByUser.current = true
      video.pause()
    }
  }

  return (
    <section className="video" id="video">
      <div className="inner">
        <h2 className="h2 video__h2">{t('video.h2')}</h2>
        <p className="video__intro">{t('video.intro')}</p>
        <figure className="video__figure">
          <div className="video__frame">
            <video
              ref={videoRef}
              className="video__player"
              poster={`${VIDEO_BASE}-poster.jpg`}
              width="1920"
              height="1080"
              muted
              loop
              playsInline
              preload="none"
              aria-label={t('video.label')}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              {loaded && <source src={`${VIDEO_BASE}.webm`} type="video/webm" />}
              {loaded && <source src={`${VIDEO_BASE}.mp4`} type="video/mp4" />}
            </video>
            <button
              type="button"
              className="video__toggle"
              onClick={toggle}
              aria-label={playing ? t('video.pause') : t('video.play')}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 4.5v15l13-7.5z" />
                </svg>
              )}
            </button>
          </div>
          <figcaption className="video__note">{t('video.note')}</figcaption>
        </figure>
      </div>
    </section>
  )
}

/* Echte Produkt-Screenshots zur Feature-Karte „Bewertungen mit Dossier" (Issue #5).
   Auf der Seite stehen Ausschnitte statt Ganzseiten: Bei 1440 px liegt die
   Tabellenschrift über 11 px, Hilfetext und %-Zeichen im Raster bei rund
   10 px. Die Lightbox zeigt weiterhin die ganze Ansicht. */
const PRODUCT_SHOTS = [
  { key: 'raster', small: cropRaster1080, large: cropRaster1320, width: 1320, height: 1385, full: shotRaster2160 },
  { key: 'summary', small: cropSummary1080, large: cropSummary1320, width: 1320, height: 1122, full: shotSummary2160 },
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
            <h2 className="h2">{t('features.h2')}</h2>
          </div>
          <p className="features__intro">{t('features.intro')}</p>
        </div>
        <div className="features__grid">
          {items.map((f, i) => (
            <div className="feature" key={i}>
              <h3 className="feature__title">{f.t}</h3>
              <p className="feature__desc">{f.d}</p>
            </div>
          ))}
        </div>
        <p className="features__next">
          <b>{t('features.nextLabel')}</b> {t('features.next')}
        </p>
        <div className="features__shots" id="examples">
          {PRODUCT_SHOTS.map((s) => {
            const alt = t(`shots.${s.key}.alt`)
            const caption = t(`shots.${s.key}.caption`)
            return (
              <figure className="shot" key={s.key}>
                <button
                  type="button"
                  className="shot__zoom"
                  onClick={() => setLightboxShot({ src: s.full, alt, caption })}
                  aria-label={t('shots.zoom')}
                >
                  <img
                    src={s.small}
                    srcSet={`${s.small} 1080w, ${s.large} ${s.width}w`}
                    sizes="(max-width: 760px) 92vw, 45vw"
                    alt={t(`shots.${s.key}.cropAlt`)}
                    width={s.width}
                    height={s.height}
                    loading="lazy"
                  />
                  {/* Petrol-Ecke am Rahmen: zeigt, dass es die ganze Ansicht gibt */}
                  <span className="shot__hint" aria-hidden="true">
                    <Maximize2 size={18} strokeWidth={1.75} fill="none" />
                  </span>
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

/* Je Zielgruppe ein Produktbild, positionsbasiert zu audience.items:
   Vermarkter = Neubauprojekt-Landingpage, Bewerter = Gutachten-Seite
   «Berechnung Verkehrswert», Spezialist = Verkaufsdokumentation plus Exposé.
   Die Reihen wechseln die Bildseite, damit kein Kastenraster entsteht. */
const AUDIENCE_MEDIA = [
  {
    layout: 'wide',
    imgs: [{ src: audVermarkter1080, srcSet: `${audVermarkter1080} 1080w, ${audVermarkter1440} 1440w`, sizes: '(max-width: 760px) 92vw, 55vw', width: 1440, height: 610, altKey: 'alt' }],
  },
  {
    layout: 'flip',
    imgs: [{ src: audBewerter1080, srcSet: `${audBewerter1080} 1080w, ${audBewerter1585} 1585w`, sizes: '(max-width: 760px) 92vw, 55vw', width: 1585, height: 420, altKey: 'alt', part: 'paper' }],
  },
  {
    layout: 'combo',
    imgs: [
      { src: audDossier1080, srcSet: `${audDossier1080} 1080w, ${audDossier1300} 1300w`, sizes: '(max-width: 760px) 78vw, 48vw', width: 1300, height: 916, altKey: 'alt', part: 'main' },
      { src: audExpose800, srcSet: `${audExpose800} 800w, ${audExpose1200} 1200w`, sizes: '(max-width: 760px) 55vw, 32vw', width: 1200, height: 583, altKey: 'alt2', part: 'inset' },
    ],
  },
]

/* Bühne auf Anthrazit wie der Abschluss (Entscheid Fabian 20.10.2026). */
function Audience() {
  const { t } = useTranslation()
  const items = t('audience.items', { returnObjects: true })
  return (
    <section className="audience" id="audience">
      <div className="inner">
        <div className="audience__head">
          <h2 className="h2">{t('audience.h2')}</h2>
        </div>
        <div className="audience__rows">
          {items.map((a, i) => {
            const media = AUDIENCE_MEDIA[i]
            return (
              <div className={`aud aud--${media?.layout ?? 'wide'}`} key={i}>
                <div className="aud__copy">
                  <h3 className="aud__role">{a.role}</h3>
                  <div className="aud__rule" />
                  <p className="aud__text">{a.text}</p>
                </div>
                {media && (
                  <figure className={`aud__media aud__media--${media.layout}`}>
                    {media.imgs.map((img) => (
                      <img
                        key={img.altKey}
                        className={`aud__img${img.part ? ` aud__img--${img.part}` : ''}`}
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes={img.sizes}
                        alt={a[img.altKey]}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                      />
                    ))}
                  </figure>
                )}
              </div>
            )
          })}
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
          <h2 className="h2 pricing__h2">{t('pricing.h2')}</h2>
          <p className="pricing__intro">{t('pricing.intro')}</p>
        </div>
        <div className="pricing__grid">
          {/* Drei gleichwertige Karten (App-Feedback #473): Bewerter und Vermarkter
              sind zwei Zielgruppen, keine Rangfolge – Spezialist ist die
              Kombination aus beiden. Darum weder Badge noch hervorgehobene
              Spalte, und alle drei CTAs in derselben Textlink-Variante. */}
          {plans.map((p, i) => (
            <div className="plan" key={i}>
              <h3 className="plan__name">{p.name}</h3>
              <div className="plan__price-row">
                <span className="plan__price">{p.price}</span>
                <span className="plan__per">{p.per}</span>
                <span className="plan__cap">{p.cap}</span>
              </div>
              <div className="plan__rule" />
              <ul className="plan__features" role="list">
                {p.features.map((feat, j) => (
                  <li className="plan__feat" key={j}>
                    <span className="check" aria-hidden="true">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              {/* Alle drei CTAs führen zur selben Registrierung und tragen
                  darum dieselbe Beschriftung (Fabian 12.08.2026). */}
              <a className="plan__cta" href={APP_REGISTER_URL}>
                {t('hero.cta1')}
              </a>
            </div>
          ))}
        </div>
        <div className="pricing__notes">
          {t('pricing.boxes', { returnObjects: true }).map((b, i) => (
            <div className="pricing__note-box" key={i}>
              <div className="pricing__note-title">{b.t}</div>
              <p className="pricing__note-text">{b.d}</p>
            </div>
          ))}
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
          <h2 className="h2">{t('siv.h2')}</h2>
          <p className="siv__text">{t('siv.text')}</p>
        </div>
        <div className="siv__points">
          {points.map((p, i) => {
            const Icon = SIV_ICONS[i]
            return (
              <div className="sivrow" key={i}>
                <span className="sivrow__icon">{Icon ? <Icon {...ICON_PROPS} /> : null}</span>
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
      {/* Kein Sekundär-Link am Seitenende: die Beispiele liegen weiter oben,
          und der Text nennt die Beispieldaten im Gratis-Konto. */}
      <div className="closing__ctas cta-row">
        <a className="btn btn-primary" href={APP_REGISTER_URL}>{t('hero.cta1')}</a>
      </div>
    </section>
  )
}

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      {/* Nur die Startseite trägt das SoftwareApplication-Schema (Funktionen,
          Preise) – Organisation und WebSite kommen auf jeder Seite über <Seo>. */}
      <Seo
        title={t('meta.title')}
        description={t('meta.description')}
        path="/"
        jsonLd={[softwareApplication]}
      />
      <Hero />
      <ProductVideo />
      <Features />
      <Audience />
      <Pricing />
      <Siv />
      <ClosingCta />
    </>
  )
}
