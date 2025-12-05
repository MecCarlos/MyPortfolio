import "../assets/style/about.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import me from "../../public/images/me.png";

export default function About() {
  const { t } = useTranslation(); // Initialisation du hook de traduction

  return (
    <div className="page about">
      {/* Dégradé noir qui couvre la moitié de l'image */}
      <div className="gradient-overlay"></div>
      
      <div className="about-container">
        {/* Partie gauche - Contenu texte */}
        <div className="about-content">
          {/* Titre souligné en bleu */}
          <div className="section-header"> 
            <h2 className="section-title">{t("aboutMe")}</h2> {/* Traduction de "A propos de moi" */}
            <div className="underline"></div>
          </div>

          {/* Espace */}
          <div className="spacer"></div>

          {/* Biographie */}
          <div className="biography">
            <p>
              {t("bioParagraph1")} {/* Traduction du premier paragraphe */}
            </p>
            <p>
              {t("bioParagraph2")} {/* Traduction du second paragraphe */}
            </p>
          </div>

          {/* Plus bas - Nom et spécialités */}
          <div className="personal-info">
            <div className="specialties">
              <div className="specialty-item name-item">
                <span>Charbel QUENUM</span> {/* Nom reste inchangé */}
              </div>

              <div className="specialty-item">
                <span className="blue-dash"></span>
                <span>{t("designerDeveloper")}</span> {/* Traduction du métier */}
                <span className="blue-dash"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Image */}
        <div className="about-image">
          <div className="image-container">
            <img src={me} alt="Charbel QUENUM" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
}