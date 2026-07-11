import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CONSENT_CHANGE_EVENT, acceptConsent, declineConsent, getConsent } from './consent.js'
import { loadAnalytics } from './analytics.js'

// Rendered once in the app shell (Layout) so it applies to every route and
// reacts immediately when the footer's "Cookie-Einstellungen" link resets
// the choice (dispatches CONSENT_CHANGE_EVENT rather than a page reload).
export default function CookieBanner() {
  const { t } = useTranslation()
  // Always start at `null` (matches the prerendered HTML, built without any
  // localStorage access) and correct it in an effect after mount. Reading
  // getConsent() straight into useState() would make the client's first
  // render diverge from the server markup whenever consent is already
  // stored — React's hydration doesn't reconcile that away, so a returning
  // visitor with a real decision would still get a banner stuck on screen.
  const [consent, setConsentState] = useState(null)

  useEffect(() => {
    setConsentState(getConsent())
    const onChange = (e) => setConsentState(e.detail)
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange)
  }, [])

  // Runs both right after "Akzeptieren" and on return visits where consent
  // was already stored — loadAnalytics() itself is idempotent.
  useEffect(() => {
    if (consent === 'accepted') loadAnalytics()
  }, [consent])

  if (consent) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={t('cookies.title')}>
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          {t('cookies.text')}{' '}
          <a href="/datenschutz">{t('cookies.link')}</a>
        </p>
        <div className="cookie-banner__actions">
          {/* Same size/weight for both buttons on purpose — declining must be
              exactly as easy as accepting (no dark pattern). */}
          <button className="cookie-banner__btn" onClick={declineConsent}>
            {t('cookies.decline')}
          </button>
          <button className="cookie-banner__btn" onClick={acceptConsent}>
            {t('cookies.accept')}
          </button>
        </div>
      </div>
    </div>
  )
}
