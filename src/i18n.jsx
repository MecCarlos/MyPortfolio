// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traductions
const resources = {
  fr: {
    translation: {
      // Navbar
      "Home": "Accueil",
      "About": "À propos",
      "Resume": "Résumé",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact": "Contact",
      
      // Home page (exemple)
      "Welcome": "Bienvenue",
      "Download CV": "Télécharger CV",
      "Hire Me": "Engagez-moi",
      
      // Ajoutez vos autres traductions ici...
    }
  },
  en: {
    translation: {
      // Navbar
      "Home": "Home",
      "About": "About",
      "Resume": "Resume",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact": "Contact",
      
      // Home page (exemple)
      "Welcome": "Welcome",
      "Download CV": "Download CV",
      "Hire Me": "Hire Me",
      
      // Ajoutez vos autres traductions ici...
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;