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

export default i18n
