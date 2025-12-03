  // const projects = [
  //   {
  //     id: 1,
  //     number: "01",
  //     title: "Transcash",
  //     description: "Application de gestion financière et transfert d'argent en ligne. Interface intuitive pour suivre les transactions, générer des rapports détaillés et gérer les comptes utilisateurs avec une sécurité renforcée et cryptage des données.",
  //     technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap 5"],
  //     liveLink: "#",
  //     githubLink: "#",
  //     images: [
  //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  //     ]
  //   },
  //   {
  //     id: 2,
  //     number: "02",
  //     title: "Serenji",
  //     description: "Plateforme de gestion de projets et collaboration d'équipe développée avec React et Node.js. Système de tâches avancé, tableau de bord analytique, notifications en temps réel et chat intégré pour une gestion optimale des projets.",
  //     technologies: ["ReactJS", "NodeJS", "Express", "Socket.io", "Bootstrap CSS"],
  //     liveLink: "#",
  //     githubLink: "#",
  //     images: [
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  //     ]
  //   },
  //   {
  //     id: 3,
  //     number: "03",
  //     title: "BEI Bank",
  //     description: "Application bancaire en ligne sécurisée avec système de gestion de comptes, virements, prêts et épargne. Interface responsive, authentification à deux facteurs et tableau de bord financier personnalisé pour les clients.",
  //     technologies: ["ReactJS", "Node.js", "MySQL", "JWT", "Chart.js"],
  //     liveLink: "https://vercel.com/meccarlos-projects/bei-bank-szg5/HUnDcGK2DNdwHaTFcdi7seNoMKCX",
  //     githubLink: "https://github.com/MecCarlos/BEIBank",
  //     images: [
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  //     ]
  //   },
  //   {
  //     id: 4,
  //     number: "04",
  //     title: "Olatech Store",
  //     description: "Site e-commerce moderne spécialisé en produits technologiques. Catalogue dynamique, panier intelligent, système de paiement sécurisé, gestion des stocks et espace client avec historique des commandes.",
  //     technologies: ["ReactJS", "NodeJS" ,"MySQL", "Stripe API", "Material-UI", "CSS3", "Bootstrap"],
  //     liveLink: "https://vercel.com/meccarlos-projects/gse-front/BQwxWPwX4ymHDUPQRNX3WX2gEvyd",
  //     githubLink: "https://github.com/MecCarlos/GSE-front",
  //     images: [
  //       "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  //     ]
  //   },
  //   {
  //     id: 5,
  //     number: "05",
  //     title: "Portfolio Personnel",
  //     description: "Portfolio moderne et responsive présentant mes compétences et réalisations. Design épuré avec animations fluides, sections interactives, mode sombre/clair et optimisation des performances pour une expérience utilisateur optimale.",
  //     technologies: ["ReactJS", "CSS3", "JavaScript", "React Router", "EmailJS", "Framer Motion"],
  //     liveLink: "#",
  //     githubLink: "https://github.com/MecCarlos/MyPortfolio",
  //     images: [
  //       "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  //       "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  //     ]
  //   }
  // ];




  import { useState } from "react";
import "../assets/style/portfolio.css";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiCube } from "react-icons/gi";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Portfolio 3D Immersif",
      description: "Portfolio interactif en 3D utilisant Three.js et React Three Fiber. Expérience immersive avec animations 3D fluides, navigation spatiale et éléments interactifs. Interface moderne qui repousse les limites du web traditionnel.",
      technologies: ["React", "Three.js", "React Three Fiber", "React Three Drei", "JavaScript", "CSS3", "Vite"],
      liveLink: "#",
      githubLink: "#",
      images: [
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      ],
      icon: <GiCube />
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

  // Couleurs spécifiques pour chaque type de projet
  const getProjectColor = (projectId) => {
    const colors = {
      1: "#8B5CF6", // Violet pour 3D
      2: "#3B82F6", // Bleu pour Serenji
      3: "#10B981", // Vert pour BEI Bank
      4: "#F59E0B", // Orange pour Olatech
      5: "#EF4444"  // Rouge pour Portfolio
    };
    return colors[projectId];
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
            Découvrez une sélection de mes projets, allant d'expériences web 3D innovantes 
            à des applications fullstack performantes. Chaque projet démontre mon expertise 
            technique et ma créativité.
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
                <div className="project-header">
                  <p 
                    className="project-number"
                    style={{ color: getProjectColor(project.id) + '20' }}
                  >
                    {project.number}
                  </p>
                  {project.icon && (
                    <div 
                      className="project-type-icon"
                      style={{ color: getProjectColor(project.id) }}
                    >
                      {project.icon}
                    </div>
                  )}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  <h4 className="tech-title">Technologies utilisées :</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        style={{ 
                          backgroundColor: getProjectColor(project.id) + '15',
                          borderColor: getProjectColor(project.id) + '30',
                          color: getProjectColor(project.id)
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    className="live-link"
                    style={{ backgroundColor: getProjectColor(project.id) }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <HiExternalLink className="link-icon" />
                    <span>Voir le projet</span>
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="github-link"
                    style={{ borderColor: getProjectColor(project.id), color: getProjectColor(project.id) }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="link-icon" />
                    <span>Code source</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Partie droite - Carrousel d'images */}
          <div className="portfolio-carousel">
            <div className="carousel-header">
              <div className="carousel-title">
                <h3>{projects[activeProject].title}</h3>
                <span className="project-type">
                  {projects[activeProject].id === 1 ? "Web 3D" : 
                   projects[activeProject].id === 2 ? "Gestion de Projets" :
                   projects[activeProject].id === 3 ? "Application Bancaire" :
                   projects[activeProject].id === 4 ? "E-commerce" : "Portfolio"}
                </span>
              </div>
            </div>
            
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
                      <span 
                        className="image-counter"
                        style={{ backgroundColor: getProjectColor(projects[activeProject].id) }}
                      >
                        {index + 1}/{projects[activeProject].images.length}
                      </span>
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
                style={{ backgroundColor: getProjectColor(projects[activeProject].id) + '40' }}
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
                    style={{ 
                      backgroundColor: activeImageIndex === index 
                        ? getProjectColor(projects[activeProject].id) 
                        : 'rgba(255, 255, 255, 0.3)'
                    }}
                  />
                ))}
              </div>
              
              <button 
                className="nav-arrow next"
                onClick={handleNextImage}
                disabled={projects[activeProject].images.length <= 1}
                style={{ backgroundColor: getProjectColor(projects[activeProject].id) + '40' }}
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
            {projects.map((project, index) => (
              <button
                key={index}
                className={`indicator ${activeProject === index ? 'active' : ''}`}
                onClick={() => handleProjectSelect(index)}
                aria-label={`Aller au projet ${index + 1}`}
                style={{ 
                  backgroundColor: activeProject === index 
                    ? getProjectColor(project.id) 
                    : 'var(--border-color)'
                }}
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
            <h3 className="cta-title">Prêt pour une expérience web innovante ?</h3>
            <p className="cta-description">
              Du développement 3D immersif aux applications web complexes, je combine créativité 
              et expertise technique pour créer des solutions digitales exceptionnelles. 
              Parlons de votre prochain projet !
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Voir la démo 3D
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