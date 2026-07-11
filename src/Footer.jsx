import { useTranslation } from 'react-i18next'
import { Brand, SwissCross } from './Brand.jsx'
import { resetConsent } from './consent.js'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Brand variant="light" />
            <p className="footer__claim">{t('footer.claim')}</p>
            <span className="footer__madein">
              <SwissCross /> {t('footer.madein')}
            </span>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c1')}</span>
            <a href="/#features">{t('nav.features')}</a>
            <a href="/#pricing">{t('nav.pricing')}</a>
            {/* "Login" kehrt zurück, sobald die App öffentlich erreichbar ist. */}
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c2')}</span>
            <a href="/#siv">{t('nav.about')}</a>
            <a href="/kontakt">{t('footer.contact')}</a>
            <a href="/#siv">SIV</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c3')}</span>
            <a href="/impressum">{t('footer.imprint')}</a>
            <a href="/datenschutz">{t('footer.privacy')}</a>
            {/* AGB-Link folgt erst zum Verkaufsstart (footer.terms bleibt in
                den Locales für die Wiederverwendung). */}
            <button
              type="button"
              className="footer__linkbtn"
              onClick={() => resetConsent()}
            >
              {t('footer.cookieSettings')}
            </button>
          </div>
        </div>
        <div className="footer__copy">{t('footer.copy')}</div>
      </div>
    </footer>
  )
}
