import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Resources
import en from '../languages/en'
import ua from '../languages/ua'

export const resources = {
  en: { translation: en },
  ua: { translation: ua }
}

// Init
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources,
      lng: 'en',
      fallbackLng: {
        'en-US': ['en'],
        'uk-UA': ['ua'],
        default: ['en']
      },
      debug: false
    },
    err => {
      if (err) {
        console.error('Error loading translation files', err)
        return err
      }
    }
  )

export default i18n
