import { createI18n } from 'react-router-i18n';
import httpEn from './en/http';
import httpAm from './am/http';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'am'];

const translations = {
    en: {
        http: httpEn
    },
    am: {
        http: httpAm
    }
}
    

const I18n = createI18n(
    locales,
    translations,
  );
   
  export default I18n;