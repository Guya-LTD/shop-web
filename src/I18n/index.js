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
        'handmade': 'Handmade',
        'home': 'Home',
        'search': 'Search',
        'less_than_one_stars': '> 1 stars',
        'two_stars_and_up': '2 stars and up',
        'three_stars_and_up': '3 stars and up',
        'four_stars_and_up': '4 stars and up',
        'five_stars_and_up': 'All 5 stars',
        'login_to': 'Login To:',
        'email_or_phone_number': 'Email or phone number',
        'full_name': 'Full Name',
        'password': 'Password',
        login_failed: 'Unable to Sign In',
        login_failed_description: 'Unable to log in with provided credentials.',
        login_field_empty: 'Empty fields',
        login_field_empty_description: 'Below fields cannot be empty',
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
        'handmade': 'በእጅ የተሰራ',
        'home': 'መግቢያ',
        'search': 'ፈልግ',
        'less_than_one_stars': '> 1 ኮከቦች',
        'two_stars_and_up': '2 ኮከቦች እና ከዚያ በላይ',
        'three_stars_and_up': '3 ኮከቦች እና ከዚያ በላይ',
        'four_stars_and_up': '4 ኮከቦች እና ከዚያ በላይ',
        'login_to': 'Login To:',
        'email_or_phone_number': 'Email or phone number',
        'full_name': 'Full Name',
        'password': 'Password',
        login_failed: 'Unable to Sign In',
        login_failed_description: 'Unable to log in with provided credentials.',
        login_field_empty: 'Empty fields',
        login_field_empty_description: 'Below fields cannot be empty',
    }
}
    

const I18n = createI18n(
    locales,
    translations,
  );
   
  export default I18n;