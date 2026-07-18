import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Kontakt() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | sending | success | error | unavailable

  // Cosmetic only (browser tab, post-hydration) – see Impressum.jsx for why
  // this isn't done via vite-react-ssg's Head. Static title is fine here
  // (no translation needed for the tab title).
  useEffect(() => {
    document.title = 'Kontakt – Valanto'
  }, [])

  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus('success')
      } else if (response.status === 503) {
        // SMTP-Zugangsdaten noch nicht hinterlegt → E-Mail-Fallback zeigen.
        setStatus('unavailable')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="legal-page">
      <div className="inner legal-page__inner">
        <h1>{t('contactPage.h1')}</h1>
        <p>{t('contactPage.text')}</p>

        {status === 'success' ? (
          <p className="contact-form__success">{t('contactPage.form.success')}</p>
        ) : (
          <form className="contact-form" onSubmit={submit}>
            <label>
              {t('contactPage.form.name')}
              <input name="name" type="text" required maxLength={120} autoComplete="name" />
            </label>
            <label>
              {t('contactPage.form.email')}
              <input name="email" type="email" required maxLength={200} autoComplete="email" />
            </label>
            <label>
              {t('contactPage.form.firma')}
              <input name="firma" type="text" maxLength={160} autoComplete="organization" />
            </label>
            <label>
              {t('contactPage.form.message')}
              <textarea name="nachricht" required rows={6} maxLength={5000} />
            </label>
            {/* Honeypot – für Menschen unsichtbar, Bots füllen es aus. */}
            <label className="contact-form__hp" aria-hidden="true">
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t('contactPage.form.sending') : t('contactPage.form.submit')}
            </button>

            {status === 'error' && (
              <p className="contact-form__error" role="alert">
                {t('contactPage.form.error')}
              </p>
            )}
            {status === 'unavailable' && (
              <p className="contact-form__error" role="alert">
                {t('contactPage.form.unavailable')}
              </p>
            )}

            <p className="contact-form__privacy">
              {t('contactPage.form.privacy')}{' '}
              <a href="/datenschutz">{t('contactPage.form.privacyLink')}</a>
            </p>
          </form>
        )}

        <p>
          {t('contactPage.mailIntro')}{' '}
          <a href="mailto:info@valanto.ch">info@valanto.ch</a>
        </p>

        <p>
          Felsberg Consulting GmbH
          <br />
          Felsbergstrasse 2
          <br />
          8625 Gossau
        </p>
      </div>
    </section>
  )
}
