// Cookie-consent storage – a single localStorage flag, no server round-trip.
// Values: 'accepted' | 'declined' | null (no decision yet, so the banner shows).
export const CONSENT_KEY = 'valanto_cookie_consent'
export const CONSENT_CHANGE_EVENT = 'valanto:consent-change'

export function getConsent() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY)
}

function setConsentValue(value) {
  if (value) localStorage.setItem(CONSENT_KEY, value)
  else localStorage.removeItem(CONSENT_KEY)
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }))
}

export const acceptConsent = () => setConsentValue('accepted')
export const declineConsent = () => setConsentValue('declined')
// Used by the footer "Cookie-Einstellungen" link to let visitors change their mind.
export const resetConsent = () => setConsentValue(null)
