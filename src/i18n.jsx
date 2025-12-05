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
      
      // Home page
      "webDeveloper": "développeur & designer web",
      "cv": "CV",
      "portfolio": "Portfolio",
      
      "aboutMe": "À propos de moi",
      "bioParagraph1": "Passionné par le développement web et le design, je crée des expériences digitales uniques qui allient esthétique et fonctionnalité. Mon approche combine créativité et expertise technique pour donner vie à vos projets.",
      "bioParagraph2": "Avec une solide expérience dans les technologies modernes, je m'engage à fournir des solutions innovantes et performantes qui répondent parfaitement à vos besoins.",
      "designerDeveloper": "Designer & Développeur web",
      
    
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
      
      // Home page
      "developpeur web": "web developer & designer",
      "cv": "CV",
      "portfolio": "Portfolio",
      
      "aboutMe": "About Me",
      "bioParagraph1": "Passionate about web development and design, I create unique digital experiences that combine aesthetics and functionality. My approach blends creativity and technical expertise to bring your projects to life.",
      "bioParagraph2": "With solid experience in modern technologies, I'm committed to delivering innovative and high-performance solutions that perfectly meet your needs.",
      "designerDeveloper": "Web Designer & Developer",

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