import i18n from 'i18next'
import {
    initReactI18next
} from 'react-i18next'
import translationsEN from './translations/locales/en/translations.js'
import translationsES from './translations/locales/es/translations.js'
import translationsFR from './translations/locales/fr/translations.js'

const translations = {
    en: {
        translation: translationsEN
    },
    es: {
        translation: translationsES
    },
    fr: {
        translation: translationsFR
    },
}

console.warn(translations)

i18n
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: "en",
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
            useSuspense: false
        }
    })

export default i18n