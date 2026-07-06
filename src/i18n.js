import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from './locales/de.json'
import fr from './locales/fr.json'
import en from './locales/en.json'

// DE is the default and only fully-final language.
// FR / EN are drafted; the switcher in the header toggles between them.
i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: 'de',
  fallbackLng: 'de',
  interpolation: { escapeValue: false },
  returnObjects: true,
})

// Keep the document's language, title and meta description in sync with the
// active locale — important for screen readers, SEO and browser translation.
function syncDocument(lng) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng
  const title = i18n.t('meta.title')
  if (title) document.title = title
  const desc = i18n.t('meta.description')
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && desc) metaDesc.setAttribute('content', desc)
}

i18n.on('languageChanged', syncDocument)
syncDocument(i18n.language)

export default i18n
