import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { EN_LANG } from './en';
import { SV_LANG } from './sv';

export const languageResources = {
  en: { translation: EN_LANG },
  sv: { translation: SV_LANG },
};
const getSavedLanguage = async () => {
  try {
    let savedLanguage = await AsyncStorage.getItem('LANG');
    if (!savedLanguage) {
      savedLanguage = 'en';
    }
    return savedLanguage;
  } catch (error) {
    console.error('Error retrieving saved language:', error);
    return null;
  }
};

const initializeI18n = async () => {
  const savedLanguage = await getSavedLanguage(); // Await the result of getSavedLanguage()

  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: savedLanguage, // Use the saved language directly
    fallbackLng: savedLanguage, // Use the saved language as the fallback
    resources: languageResources,
  });
};

initializeI18n();

export default i18next;
