import { useState } from "react";
import "../assets/style/service.css";

// Import des icônes React Icons
import { FaCode, FaMobileAlt, FaPalette, FaDatabase, FaTools } from "react-icons/fa";
import { MdDesignServices, MdSecurity, MdSatelliteAlt } from "react-icons/md";
import { GiCircuitry, GiSolarPower } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiAppStoreFill } from "react-icons/ri";

export default function Service() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "web",
      title: "Développement Web",
      description: "Création de sites web modernes et performants avec les technologies frontend (HTML5, CSS3, JavaScript, React) et backend (PHP, MySQL).",
      icon: <FaCode />,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "MySQL", "Bootstrap", "Tailwind"],
      features: [
        "Sites web responsives et modernes",
        "Applications web dynamiques",
        "Intégration de maquettes UI/UX",
        "Optimisation des performances",
        "Connexion aux APIs",
        "Bases de données MySQL"
      ]
    },
    {
      id: "frontend",
      title: "Développement Frontend",
      description: "Développement d'interfaces utilisateur modernes avec React.js, création de composants réutilisables et optimisation de l'expérience utilisateur.",
      icon: <MdDesignServices />,
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
      features: [
        "Interfaces React performantes",
        "Composants réutilisables",
        "Design responsive",
        "Animations modernes",
        "Optimisation SEO",
        "Tests et débogage"
      ]
    },
    {
      id: "app-design",
      title: "Design d'Applications",
      description: "Conception d'interfaces utilisateur modernes et intuitives pour applications web et mobiles. Focus sur l'expérience utilisateur et l'esthétique.",
      icon: <RiAppStoreFill />,
      technologies: ["Figma", "Adobe XD", "UI/UX Design", "Prototypage", "Wireframing"],
      features: [
        "Design d'interfaces modernes",
        "Expérience utilisateur optimisée",
        "Prototypes interactifs",
        "Wireframes et maquettes",
        "Design system",
        "Tests utilisateurs"
      ]
    },
    // {
    //   id: "mobile",
    //   title: "Développement Mobile",
    //   description: "Création d'applications mobiles avec Flutter pour iOS et Android. Interfaces natives et performances optimales.",
    //   icon: <FaMobileAlt />,
    //   technologies: ["Flutter", "Dart", "APIs REST", "Firebase", "App Store", "Play Store"],
    //   features: [
    //     "Applications iOS et Android",
    //     "Interfaces natives",
    //     "Optimisation des performances",
    //     "Intégration d'APIs",
    //     "Publication sur stores",
    //     "Maintenance et mises à jour"
    //   ]
    // },
    {
      id: "database",
      title: "Bases de Données",
      description: "Conception, développement et optimisation de bases de données MySQL pour applications web et mobiles.",
      icon: <FaDatabase />,
      technologies: ["MySQL", "PHP", "APIs REST", "Optimisation"],
      features: [
        "Conception de schémas de base de données",
        "Optimisation des requêtes SQL",
        "Sécurité des données",
        "Sauvegardes et restauration",
        "Migration de données",
        "Documentation technique"
      ]
    },
    {
      id: "electronique",
      title: "Électronique & Maintenance",
      description: "Services techniques en électronique : maintenance, réparation et installation de systèmes électroniques divers.",
      icon: <GiCircuitry />,
      technologies: ["Électronique analogique/digitale", "Outils de diagnostic", "Soudure", "Test équipements"],
      features: [
        "Diagnostic et dépannage électronique",
        "Réparation de circuits imprimés",
        "Maintenance préventive",
        "Installation de systèmes",
        "Tests et contrôles qualité",
        "Documentation technique"
      ]
    },
    {
      id: "satellite",
      title: "Installation Satellite",
      description: "Installation, configuration et maintenance de systèmes de réception satellite (TV, internet).",
      icon: <MdSatelliteAlt />,
      technologies: ["Antennes paraboliques", "Récepteurs", "Amplificateurs", "Câblage coaxial"],
      features: [
        "Installation d'antennes paraboliques",
        "Alignement et pointage satellite",
        "Configuration des récepteurs",
        "Résolution des problèmes de signal",
        "Mise à niveau des systèmes",
        "Support technique"
      ]
    },
    {
      id: "securite",
      title: "Sécurité Électronique",
      description: "Installation et maintenance de systèmes de vidéosurveillance et contrôle d'accès.",
      icon: <MdSecurity />,
      technologies: ["Caméras IP/Analogiques", "Enregistreurs DVR/NVR", "Détecteurs", "Contrôle d'accès"],
      features: [
        "Installation de caméras de surveillance",
        "Configuration des systèmes DVR/NVR",
        "Réseau de sécurité",
        "Monitoring à distance",
        "Maintenance préventive",
        "Formation utilisateur"
      ]
    },
    {
      id: "solaire",
      title: "Énergie Solaire",
      description: "Installation et maintenance de systèmes d'énergie solaire pour particuliers.",
      icon: <GiSolarPower />,
      technologies: ["Panneaux solaires", "Onduleurs", "Batteries", "Régulateurs de charge"],
      features: [
        "Étude et dimensionnement",
        "Installation de panneaux solaires",
        "Mise en service des onduleurs",
        "Maintenance des batteries",
        "Optimisation de production",
        "Diagnostic de performance"
      ]
    },
    {
      id: "domotique",
      title: "Installation Domestique",
      description: "Services d'installation électrique et électronique pour particuliers : éclairage.",
      icon: <HiHomeModern />,
      technologies: ["Câblage électrique", "Systèmes domotiques", "Éclairage LED", "Audio/Video", "Réseau"],
      features: [
        "Installation électrique résidentielle",
        "Installation de prises réseau",
        "Dépannage électrique",
        "Conseils en économie d'énergie"
      ]
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="page service">
      {/* Dégradé similaire aux autres pages */}
      <div className="service-gradient-overlay"></div>
      
      <div className="service-container">
        {/* En-tête */}
        <div className="service-header">
          <h2 className="service-title">Mes <span className="highlight">Services</span></h2>
          <div className="service-underline"></div>
          <p className="service-intro">
            Fort de ma double compétence en développement web et expertise technique en électronique, 
            je propose une gamme complète de services pour répondre à vos besoins numériques et techniques.
          </p>
        </div>

        {/* Grille des services */}
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="card-header">
                <div className="card-icon">
                  {service.icon}
                </div>
                <h3 className="card-title">{service.title}</h3>
              </div>
              
              <div className="card-content">
                <p className="card-description">{service.description}</p>
                
                {activeService === service.id && (
                  <div className="card-details">
                    <div className="technologies">
                      <h4>Technologies utilisées :</h4>
                      <div className="tech-tags">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="features">
                      <h4>Ce que je propose :</h4>
                      <ul className="features-list">
                        {service.features.map((feature, index) => (
                          <li key={index} className="feature-item">
                            <span className="feature-dot"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="card-footer">
                <span className="expand-icon">
                  {activeService === service.id ? '−' : '+'}
                </span>
                <span className="cta-text">
                  {activeService === service.id ? 'Voir moins' : 'En savoir plus'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'appel à l'action */}
        <div className="service-cta">
          <div className="cta-content">
            <h3 className="cta-title">Un projet en tête ?</h3>
            <p className="cta-description">
              Que ce soit pour un site web, une application mobile, une installation technique 
              ou un design d'interface, je suis disponible pour discuter de votre projet.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Discuter de mon projet
              </button>
              <button className="cta-btn secondary">
                Voir mon portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}