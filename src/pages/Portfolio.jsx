import { useState, useEffect } from "react";
import "../assets/style/portfolio.css";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdDesignServices, MdCode } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import { GiCube } from "react-icons/gi";
import { FaLaptopMedical } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState("light");

  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(currentTheme);

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme");
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "BEI Bank",
      description:
        "Application bancaire en ligne sécurisée avec système de gestion de comptes, virements, prêts et épargne. Interface responsive, authentification à deux facteurs et tableau de bord financier personnalisé pour les clients.",
      technologies: [
        "ReactJS",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "JWT",
        "Chart.js",
      ],
      liveUrl: "https://bei-bank.vercel.app",
      githubUrl: "https://github.com/MecCarlos/BEIBank",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      type: "web",
      typeIcon: <GiMoneyStack />,
      typeName: "Web App",
    },
    {
      id: 2,
      number: "02",
      title: "Olatech Store",
      description:
        "Site e-commerce moderne spécialisé en produits technologiques. Catalogue dynamique, panier intelligent, système de paiement sécurisé, gestion des stocks et espace client avec historique des commandes.",
      technologies: [
        "ReactJS",
        "Redux Toolkit",
        "Firebase",
        "Stripe API",
        "Material-UI",
        "CSS3",
      ],
      liveUrl: "https://gse-front.vercel.app/",
      githubUrl: "https://github.com/MecCarlos/GSE-front",
      images: [
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      type: "web",
      typeIcon: <MdOutlineLocalGroceryStore />,
      typeName: "E-commerce",
    },

    {
      id: 3,
      number: "03",
      title: "Portfolio 3D Immersif",
      description:
        "Portfolio interactif en 3D utilisant Three.js et React Three Fiber. Expérience immersive avec animations 3D fluides, navigation spatiale et éléments interactifs. Interface moderne qui repousse les limites du web traditionnel.",
      technologies: [
        "React",
        "Three.js",
        "React Three Fiber",
        "React Three Drei",
        "JavaScript",
        "CSS3",
        "Vite",
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      type: "web",
      typeIcon: <GiCube />,
      typeName: "Web App 3D",
    },

    {
      id: 4,
      number: "04",
      title: "Portfolio Personnel",
      description:
        "Portfolio moderne et responsive présentant mes compétences et réalisations. Design épuré avec animations fluides, sections interactives, mode sombre/clair et optimisation des performances pour une expérience utilisateur optimale.",
      technologies: [
        "ReactJS",
        "CSS3",
        "JavaScript",
        "React Router",
        "EmailJS",
        "Framer Motion",
      ],
      liveUrl: "qc-portfolio.vercel.app",
      githubUrl: "https://github.com/MecCarlos/MyPortfolio",
      images: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      type: "design",
      typeIcon: <MdDesignServices />,
      typeName: "Portfolio",
    },
    {
      id: 5,
      number: "05",
      title: "Serenji",
      description:
        "Plateforme d'accès et gestion de médicaments en cours de développement avec React et Node.js. Système de tâches avancé, tableau de bord analytique, notifications en temps réel et chat intégré pour une gestion optimale des produits.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Express",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      ],
      type: "web",
      typeIcon: <FaLaptopMedical />,
      typeName: "SaaS",
    },
  ];

  const currentProject = projects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const goToProject = (index) => {
    setActiveProject(index);
    setCurrentImageIndex(0);
  };

  return (
    <div className="page portfolio">
      <div className="portfolio-gradient-overlay"></div>

      <div className="portfolio-container">
        {/* En-tête */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">
            Mes <span className="highlight">Projets</span>
          </h1>
          <div className="portfolio-underline"></div>
          <p className="portfolio-intro">
            Découvrez une sélection de mes projets les plus significatifs.
            Chaque réalisation représente un défi technique et créatif relevé
            avec passion et expertise.
          </p>
        </div>

        {/* Navigation entre projets - BOUTONS RONDS */}
        <div className="project-navigation">
          <button
            className="project-nav prev"
            onClick={prevProject}
            title="Projet précédent"
            aria-label="Projet précédent"
          >
            <FaChevronLeft />
            <span className="nav-text">Précédent</span>
          </button>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  activeProject === index ? "active" : ""
                }`}
                onClick={() => goToProject(index)}
                title={`Voir le projet ${index + 1}`}
                aria-label={`Projet ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="project-nav next"
            onClick={nextProject}
            title="Projet suivant"
            aria-label="Projet suivant"
          >
            <span className="nav-text">Suivant</span>
            <FaChevronRight />
          </button>
        </div>

        {/* Contenu principal */}
        <div className="portfolio-content">
          {/* Partie gauche - Détails du projet */}
          <div className="portfolio-details">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-detail ${
                  activeProject === index ? "active" : ""
                }`}
              >
                <div className="project-header">
                  <h2 className="project-number">{project.number}</h2>
                  <div className="project-type-icon">{project.typeIcon}</div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="technologies">
                  <div className="tech-title">Technologies utilisées :</div>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <FaExternalLinkAlt className="link-icon" />
                      Voir le projet
                    </a>
                  ) : (
                    <span className="live-link disabled">
                      <FaExternalLinkAlt className="link-icon" />
                      Projet en cours
                    </span>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <FaGithub className="link-icon" />
                      Code source
                    </a>
                  ) : (
                    <span className="github-link disabled">
                      <FaGithub className="link-icon" />
                      Privé
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Partie droite - Carrousel d'images */}
          <div className="portfolio-carousel">
            <div className="carousel-header">
              <div className="carousel-title">
                <h4>VISUELS DU PROJET</h4>
                <div className="project-type">{currentProject.typeName}</div>
              </div>
            </div>

            <div className="carousel-container">
              <div
                className="image-slide"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {currentProject.images.map((image, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={image}
                      alt={`${currentProject.title} - Vue ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <div className="project-name">{currentProject.title}</div>
                      <div className="image-counter">
                        {index + 1}/{currentProject.images.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="carousel-navigation">
                <button
                  className="nav-arrow"
                  onClick={prevImage}
                  disabled={currentProject.images.length <= 1}
                  aria-label="Image précédente"
                >
                  <FaChevronLeft />
                </button>

                <div className="image-dots">
                  {currentProject.images.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${
                        currentImageIndex === index ? "active" : ""
                      }`}
                      onClick={() => goToImage(index)}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="nav-arrow"
                  onClick={nextImage}
                  disabled={currentProject.images.length <= 1}
                  aria-label="Image suivante"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h2 className="cta-title">Vous avez un projet en tête ?</h2>
            <p className="cta-description">
              Que vous ayez besoin d'une application web, d'un site mobile ou
              d'une solution sur mesure, je suis là pour vous aider à
              concrétiser vos idées.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                Discuter de votre projet
              </a>
              {/* <a
                href="https://github.com/MecCarlos"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn secondary"
              >
                Voir sur GitHub
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
