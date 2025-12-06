import "../assets/style/about.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import me_b from "../../public/images/me_black.png";
import me_l from "../../public/images/me_light.png";

export default function About() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [profileImage, setProfileImage] = useState(me_l);

  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);
    setProfileImage(currentTheme === 'dark' ? me_b : me_l);

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          setTheme(newTheme);
          setProfileImage(newTheme === 'dark' ? me_b : me_l);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page about">
      {/* Dégradé qui couvre la moitié de l'image */}
      <div className="gradient-overlay"></div>
      
      <div className="about-container">
        {/* Partie gauche - Contenu texte */}
        <div className="about-content">
          {/* Titre souligné en bleu */}
          <div className="section-header"> 
            <h2 className="section-title">{t("aboutMe")}</h2>
            <div className="underline"></div>
          </div>

          {/* Espace */}
          <div className="spacer"></div>

          {/* Biographie */}
          <div className="biography">
            <p>{t("bioParagraph1")}</p>
            <p>{t("bioParagraph2")}</p>
          </div>

          {/* Plus bas - Nom et spécialités */}
          <div className="personal-info">
            <div className="specialties">
              <div className="specialty-item name-item">
                <span>Charbel QUENUM</span>
              </div>

              <div className="specialty-item">
                <span className="blue-dash"></span>
                <span>{t("designerDeveloper")}</span>
                <span className="blue-dash"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Image dans un cercle */}
        <div className="about-image">
          <div className="circle-container">
            <div className="image-circle">
              <img 
                src={profileImage} 
                alt="Charbel QUENUM" 
                className="profile-image-circle" 
              />
            </div>
            {/* Cercles décoratifs */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}