import "../assets/style/about.css";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="page about">
      <div className="about-container">
        {/* Partie gauche - Contenu texte */}
        <div className="about-content">
          {/* Titre souligné en bleu */}
          <div className="section-header">
            <h2 className="section-title">A propos de moi</h2>
            <div className="underline"></div>
          </div>

          {/* Espace */}
          <div className="spacer"></div>

          {/* Biographie */}
          <div className="biography">
            <p>
              Passionné par le développement web et le design, je crée des
              expériences digitales uniques qui allient esthétique et
              fonctionnalité. Mon approche combine créativité et expertise
              technique pour donner vie à vos projets.
            </p>
            <p>
              Avec une solide expérience dans les technologies modernes, je
              m'engage à fournir des solutions innovantes et performantes qui
              répondent parfaitement à vos besoins.
            </p>
          </div>

          {/* Plus bas - Nom et spécialités */}
          <div className="personal-info">
            <div className="name"></div>
            <div className="specialties">
              <div className="specialty-item">
                <span>Charbel QUENUM</span>
              </div>

              <div className="specialty-item">
                <span className="blue-dash"></span>
                <span>Designer & Développeur web</span>
                <span className="blue-dash"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Image */}
        <div className="about-image">
          <div className="image-placeholder">
            {/* Remplacez par votre image */}
            <div className="image-frame">
              <span>Votre image ici</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
