import { createI18n } from 'react-router-i18n';
import httpEn from './en/http';
import httpAm from './am/http';

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ['en', 'am'];

const translations = {
    en: {
        http: httpEn,
        'sign_up': 'Sign up',
        'login': 'Login',
        'women': 'Women',
        'men': 'Men',
        'electronics': 'Electronics',
        'toys': 'Toys',
        'beauty': 'Beauty',
        'kids': 'Kids',
        'vintage': 'Vintage',
        'sports': 'Sports',
        'handmade': 'Handmade'
    },
    am: {
        http: httpAm,
        'sign_up': 'መመዝገቢያ',
        'login': 'ግባ',
        'women': 'የሴቶች',
        'men': 'የወንዶች',
        'electronics': 'ኤሌክትሮኒክስ',
        'toys': 'መጫወቻዎች',
        'beauty': 'ውበት',
        'kids': 'የልጆች',
        'vintage': 'የመኸር',
        'sports': 'ስፖርት',
        'handmade': 'በእጅ የተሰራ'
    }
}
    

const I18n = createI18n(
    locales,
    translations,
  );
   
  export default I18n;