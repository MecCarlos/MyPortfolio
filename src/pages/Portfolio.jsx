import { useState } from "react";
import "../assets/style/portfolio.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Transcash",
      description: "Application de gestion financière et transfert d'argent en ligne. Interface intuitive pour suivre les transactions, générer des rapports détaillés et gérer les comptes utilisateurs avec une sécurité renforcée et cryptage des données.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap 5"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Serenji",
      description: "Plateforme de gestion de projets et collaboration d'équipe développée avec React et Node.js. Système de tâches avancé, tableau de bord analytique, notifications en temps réel et chat intégré pour une gestion optimale des projets.",
      technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 3,
      number: "03",
      title: "BEI Bank",
      description: "Application bancaire en ligne sécurisée avec système de gestion de comptes, virements, prêts et épargne. Interface responsive, authentification à deux facteurs et tableau de bord financier personnalisé pour les clients.",
      technologies: ["ReactJS", "TypeScript", "Node.js", "PostgreSQL", "JWT", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Olatech Store",
      description: "Site e-commerce moderne spécialisé en produits technologiques. Catalogue dynamique, panier intelligent, système de paiement sécurisé, gestion des stocks et espace client avec historique des commandes.",
      technologies: ["ReactJS", "Redux Toolkit", "Firebase", "Stripe API", "Material-UI", "CSS3"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Portfolio Personnel",
      description: "Portfolio moderne et responsive présentant mes compétences et réalisations. Design épuré avec animations fluides, sections interactives, mode sombre/clair et optimisation des performances pour une expérience utilisateur optimale.",
      technologies: ["ReactJS", "CSS3", "JavaScript", "React Router", "EmailJS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];

  const handleNextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
    setActiveImageIndex(0);
  };

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % projects[activeProject].images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + projects[activeProject].images.length) % projects[activeProject].images.length);
  };

  const handleProjectSelect = (index) => {
    setActiveProject(index);
    setActiveImageIndex(0);
  };

  return (
    <div className="page portfolio">
      {/* Dégradé similaire aux autres pages */}
      <div className="portfolio-gradient-overlay"></div>
      
      <div className="portfolio-container">
        {/* En-tête */}
        <div className="portfolio-header">
          <h2 className="portfolio-title">Mes <span className="highlight">Projets</span></h2>
          <div className="portfolio-underline"></div>
          <p className="portfolio-intro">
            Découvrez une sélection de mes projets récents qui démontrent mon expertise en développement web fullstack,
            ma créativité dans la conception d'interfaces et ma capacité à résoudre des problèmes techniques complexes.
          </p>
        </div>

        <div className="portfolio-content">
          {/* Partie gauche - Détails du projet */}
          <div className="portfolio-details">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`portfolio-detail ${activeProject === index ? 'active' : ''}`}
              >
                <p className="project-number">{project.number}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="live-link" target="_blank" rel="noopener noreferrer">
                    <HiExternalLink className="link-icon" />
                    <span>Voir le projet</span>
                  </a>
                  <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="link-icon" />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Partie droite - Carrousel d'images */}
          <div className="portfolio-carousel">
            <div className="carousel-container">
              <div 
                className="image-slide"
                style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
              >
                {projects[activeProject].images.map((img, index) => (
                  <div key={index} className="image-item">
                    <img 
                      src={img} 
                      alt={`${projects[activeProject].title} - Vue ${index + 1}`}
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <span className="project-name">{projects[activeProject].title}</span>
                      <span className="image-counter">{index + 1}/{projects[activeProject].images.length}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation du carrousel */}
            <div className="carousel-navigation">
              <button 
                className="nav-arrow prev"
                onClick={handlePrevImage}
                disabled={projects[activeProject].images.length <= 1}
              >
                <BsChevronLeft />
              </button>
              
              <div className="image-dots">
                {projects[activeProject].images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${activeImageIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                className="nav-arrow next"
                onClick={handleNextImage}
                disabled={projects[activeProject].images.length <= 1}
              >
                <BsChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation entre projets */}
        <div className="project-navigation">
          <button 
            className="project-nav prev"
            onClick={handlePrevProject}
          >
            <BsChevronLeft />
            <span>Projet précédent</span>
          </button>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${activeProject === index ? 'active' : ''}`}
                onClick={() => handleProjectSelect(index)}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="project-nav next"
            onClick={handleNextProject}
          >
            <span>Projet suivant</span>
            <BsChevronRight />
          </button>
        </div>

        {/* Section CTA */}
        <div className="portfolio-cta">
          <div className="cta-content">
            <h3 className="cta-title">Intéressé par mes réalisations ?</h3>
            <p className="cta-description">
              Ces projets ne représentent qu'une partie de mon travail. Si vous avez un projet similaire 
              ou souhaitez collaborer sur une idée innovante, contactez-moi pour en discuter.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Voir tous les projets
              </button>
              <button className="cta-btn secondary">
                Discuter d'un projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}