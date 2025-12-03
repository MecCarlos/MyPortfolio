import { useState } from "react";
import "../assets/style/resume.css";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { PiScrewdriverFill } from "react-icons/pi";
import { FaSatelliteDish } from "react-icons/fa";
import { PiSecurityCameraFill } from "react-icons/pi";
import { PiSolarPanelFill } from "react-icons/pi";
import { IoLogoFigma } from "react-icons/io5";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Expérience" },
    { id: "education", label: "Éducation" },
    { id: "formation", label: "Formation" },
    { id: "skills", label: "Compétences" },
    { id: "about", label: "À propos" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="resume-detail experience active">
            <div className="section-header">
              <h2 className="section-title">
                Mes <span className="highlight">Expérience</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>
                Passionné par le développement web, j'ai acquis une solide expérience dans la création 
                d'interfaces modernes et performantes. Mon approche combine rigueur technique et sens 
                du design pour offrir des expériences utilisateur exceptionnelles.
              </p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">Octobre 2025 - Mars 2026</span>
                  <h3>Stagiaire Développeur Frontend</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Inawo Technologie</span>
                </div>
                <p className="resume-desc">
                  Développement d'applications web avec React.js, création de composants réutilisables,
                  intégration d'API REST, optimisation des performances et participation aux revues de code.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">Mars - Juin 2025</span>
                  <h3>Stagiaire Développeur Frontend</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Inawo Technologie</span>
                </div>
                <p className="resume-desc">
                  Initiation au développement frontend moderne, création d'interfaces responsives avec 
                  Bootstrap, apprentissage des bonnes pratiques de développement et collaboration avec 
                  une équipe agile.
                </p>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="resume-detail education active">
            <div className="section-header">
              <h2 className="section-title">
                Mon <span className="highlight">Parcours Académique</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>
                Mon parcours éducatif allie formation technique et études supérieures en informatique,
                me permettant d'acquérir une double compétence en développement logiciel et systèmes informatiques.
              </p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2023 - 2025</span>
                  <h3>Licence en Systèmes et Logiciels Informatiques</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>UATM Gasa Formation</span>
                </div>
                <p className="resume-desc">
                  Spécialisation en développement web, bases de données, architecture logicielle 
                  et gestion de projet. Formation axée sur les technologies modernes et les méthodologies agiles.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2018 - 2021</span>
                  <h3>Diplôme de Technicien en Informatique (DTI)</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Lycée Technique FM Coulibaly</span>
                </div>
                <p className="resume-desc">
                  Formation technique en développement logiciel, maintenance informatique, réseaux 
                  et bases de données. Acquisition des fondamentaux de la programmation et des systèmes.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2018 - 2021</span>
                  <h3>Formation en Électronique Industrielle (2<sup>nd</sup> F3)</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>École Polytechnique Joseph Monier</span>
                </div>
                <p className="resume-desc">
                  Apprentissage des systèmes automatisés, électrotechnique, régulation et contrôle 
                  industriel. Développement d'une approche méthodique pour la résolution de problèmes techniques.
                </p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2013 - 2017</span>
                  <h3>Brevet d'Études du Premier Cycle (BEPC)</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>CEG Houeyiho</span>
                </div>
                <p className="resume-desc">
                  Formation générale avec initiation aux technologies de l'information et de la communication.
                  Développement d'un intérêt précoce pour l'informatique et les nouvelles technologies.
                </p>
              </div>
            </div>
          </div>
        );

      case "formation":
        return (
          <div className="resume-detail education active">
            <div className="section-header">
              <h2 className="section-title">
                Mes <span className="highlight">Formations Techniques</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>
                En parallèle de mon parcours informatique, j'ai développé des compétences techniques 
                en électronique qui enrichissent ma polyvalence et ma compréhension des systèmes complexes.
              </p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2022 - 2023</span>
                  <h3>Diplôme en Électronique Générale et Industrielle</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Centre Africain en Électronique (CAE)</span>
                </div>
                <p className="resume-desc">
                  Formation complète en électronique analogique et numérique, maintenance des systèmes 
                  électroniques, conception de circuits et dépannage des équipements techniques.
                </p>
              </div>

              
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="resume-detail skills active">
            <div className="section-header">
              <h2 className="section-title">
                Mes <span className="highlight">Compétences</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>
                Mon profil unique combine compétences en développement web et expertise technique en électronique.
                Cette double compétence me permet d'aborder les projets avec une vision globale et innovante.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">
                  <FaHtml5 />
                </div>
                <span className="skill-name">HTML5</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <IoLogoCss3 />
                </div>
                <span className="skill-name">CSS3</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <IoLogoJavascript />
                </div>
                <span className="skill-name">JavaScript</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <SiPhp />
                </div>
                <span className="skill-name">PHP</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <IoLogoReact />
                </div>
                <span className="skill-name">ReactJS</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <SiMysql />
                </div>
                <span className="skill-name">MySQL</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <IoLogoFigma />
                </div>
                <span className="skill-name">Figma</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <SiTailwindcss />
                </div>
                <span className="skill-name">Tailwind</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <PiScrewdriverFill />
                </div>
                <span className="skill-name">Maintenance Électronique</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <FaSatelliteDish />
                </div>
                <span className="skill-name">Systèmes Satellite</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <PiSecurityCameraFill />
                </div>
                <span className="skill-name">Sécurité Électronique</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <PiSolarPanelFill />
                </div>
                <span className="skill-name">Énergie Solaire</span>
              </div>
            </div>
          </div>
        );
      
      case "about":
        return (
          <div className="resume-detail about active">
            <div className="section-header">
              <h2 className="section-title">
                À propos <span className="highlight">de moi</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>
                Développeur web passionné et technicien en électronique, je combine créativité numérique 
                et expertise technique. Curieux et autodidacte, j'aime relever des défis complexes et 
                trouver des solutions innovantes aux problèmes techniques.
              </p>
            </div>

            <div className="about-info-list">
              <div className="info-row">
                <div className="info-item">
                  <p>
                    Nom<span>Quenum Charbel</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Genre<span>Masculin</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Âge<span>23 ans</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Statut<span>Célibataire</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Ville<span>Cotonou, Bénin</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Nationalité<span>Béninoise</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Expérience<span>2+ années</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Temps plein<span>Disponible</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Freelance<span>Disponible</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Téléphone<span>(+229) 01 56 98 31 33</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Email Professionnel<span>quenumcarlos20@gmail.com</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Langues<span>Français, Fon, Anglais</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    Email Secondaire<span>quenumcarlos20@icloud.com</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    Loisirs<span>Lecture, Documentaires, Bricolage</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page resume">
      <div className="resume-gradient-overlay"></div>

      <div className="resume-container">
        <div className="resume-sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-title">Pourquoi me choisir ?</h2>
            <div className="sidebar-underline"></div>
          </div>

          <div className="sidebar-description">
            <p>
              Polyvalent et passionné, je combine expertise en développement web et compétences techniques 
              en électronique. Mon approche unique permet d'apporter des solutions innovantes et complètes 
              à vos projets numériques et techniques.
            </p>
          </div>

          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-label">{tab.label}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="resume-content">{renderContent()}</div>
      </div>
    </div>
  );
}