// GA4 loader – only ever called after the visitor clicks "Akzeptieren".
// Nothing here runs at import time, so no request to Google fires on its own.
//
// Measurement ID: set VITE_GA_MEASUREMENT_ID in .env (see .env.example).
// Until a real "G-XXXXXXXXXX" ID is set, loadAnalytics() is a no-op – this
// keeps test/staging deploys from sending traffic to a placeholder property.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

let loaded = false

export function loadAnalytics() {
  if (loaded) return
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return
  loaded = true

  window.dataLayer = window.dataLayer || []
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  gtag('js', new Date())
  // No advertising features: Google Signals / ad personalization stay off,
  // IP anonymization is GA4's default behaviour (no separate flag needed).
  gtag('config', GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}
