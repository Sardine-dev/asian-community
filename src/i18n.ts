import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ko from './locales/ko.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import ch from './locales/ch.json';

i18n
  .use(LanguageDetector) // 브라우저 언어 감지
  .use(initReactI18next) // React와 연동
  .init({
    resources: {
      en: { translation: en },
      ko: { translation: ko },
      ja: { translation: ja },
      ch: { translation: ch }
    },
    fallbackLng: "en", // 기본 언어
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
