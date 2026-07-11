import { useTranslation } from 'react-i18next'
import { Brand, SwissCross } from './Brand.jsx'
import { placeholderClick } from './Nav.jsx'
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
            <a href="#" onClick={placeholderClick}>{t('nav.login')}</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c2')}</span>
            <a href="/#siv">{t('nav.about')}</a>
            <a href="#" onClick={placeholderClick}>{t('footer.contact')}</a>
            <a href="/#siv">SIV</a>
          </div>
          <div className="footer__col">
            <span className="footer__label">{t('footer.c3')}</span>
            <a href="/impressum">{t('footer.imprint')}</a>
            <a href="/datenschutz">{t('footer.privacy')}</a>
            <a href="#" onClick={placeholderClick}>{t('footer.terms')}</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                resetConsent()
              }}
            >
              {t('footer.cookieSettings')}
            </a>
          </div>
        </div>
        <div className="footer__copy">{t('footer.copy')}</div>
      </div>
    </footer>
  )
}
