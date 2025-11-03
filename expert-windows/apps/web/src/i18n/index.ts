import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './locales/en/common.json';
import commonRo from './locales/ro/common.json';
import authEn from './locales/en/auth.json';
import authRo from './locales/ro/auth.json';
import layoutEn from './locales/en/layout.json';
import layoutRo from './locales/ro/layout.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
      auth: authEn,
      layout: layoutEn,
    },
    ro: {
      common: commonRo,
      auth: authRo,
      layout: layoutRo,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
