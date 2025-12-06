// import { useState } from "react";
// import "../assets/style/portfolio.css";
// import { FaGithub } from "react-icons/fa";
// import { HiExternalLink } from "react-icons/hi";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { GiCube } from "react-icons/gi";

// export default function Portfolio() {
//   const [activeProject, setActiveProject] = useState(0);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   const projects = [
//     {
//       id: 1,
//       number: "01",
//       title: "Portfolio 3D Immersif",
//       description: "Portfolio interactif en 3D utilisant Three.js et React Three Fiber. Expérience immersive avec animations 3D fluides, navigation spatiale et éléments interactifs. Interface moderne qui repousse les limites du web traditionnel.",
//       technologies: ["React", "Three.js", "React Three Fiber", "React Three Drei", "JavaScript", "CSS3", "Vite"],
//       liveLink: "#",
//       githubLink: "#",
//       images: [
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//       ],
//       icon: <GiCube />
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Serenji",
//       description: "Plateforme de d'accès et  gestion de médicaments en cour de developpement avec  React et Node.js. Système de tâches avancé, tableau de bord analytique, notifications en temps réel et chat intégré pour une gestion optimale des porduits.",
//       technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
//       liveLink: "#",
//       githubLink: "#",
//       images: [
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//       ]
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "BEI Bank",
//       description: "Application bancaire en ligne sécurisée avec système de gestion de comptes, virements, prêts et épargne. Interface responsive, authentification à deux facteurs et tableau de bord financier personnalisé pour les clients.",
//       technologies: ["ReactJS", "TypeScript", "Node.js", "PostgreSQL", "JWT", "Chart.js"],
//       liveLink: "https://bei-bank-szg5.vercel.app",
//       githubLink: "https://github.com/MecCarlos/BEIBank",
//       images: [
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//       ]
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Olatech Store",
//       description: "Site e-commerce moderne spécialisé en produits technologiques. Catalogue dynamique, panier intelligent, système de paiement sécurisé, gestion des stocks et espace client avec historique des commandes.",
//       technologies: ["ReactJS", "Redux Toolkit", "Firebase", "Stripe API", "Material-UI", "CSS3"],
//       liveLink: "https://gse-front.vercel.app/",
//       githubLink: "https://github.com/MecCarlos/GSE-front",
//       images: [
//         "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//       ]
//     },
//     {
//       id: 5,
//       number: "05",
//       title: "Portfolio Personnel",
//       description: "Portfolio moderne et responsive présentant mes compétences et réalisations. Design épuré avec animations fluides, sections interactives, mode sombre/clair et optimisation des performances pour une expérience utilisateur optimale.",
//       technologies: ["ReactJS", "CSS3", "JavaScript", "React Router", "EmailJS", "Framer Motion"],
//       liveLink: "#",
//       githubLink: "#",
//       images: [
//         "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//         "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//       ]
//     }
//   ];

//   const handleNextProject = () => {
//     setActiveProject((prev) => (prev + 1) % projects.length);
//     setActiveImageIndex(0);
//   };

//   const handlePrevProject = () => {
//     setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
//     setActiveImageIndex(0);
//   };

//   const handleNextImage = () => {
//     setActiveImageIndex((prev) => (prev + 1) % projects[activeProject].images.length);
//   };

//   const handlePrevImage = () => {
//     setActiveImageIndex((prev) => (prev - 1 + projects[activeProject].images.length) % projects[activeProject].images.length);
//   };

//   const handleProjectSelect = (index) => {
//     setActiveProject(index);
//     setActiveImageIndex(0);
//   };

//   // Couleurs spécifiques pour chaque type de projet
//   const getProjectColor = (projectId) => {
//     const colors = {
//       1: "#8B5CF6", // Violet pour 3D
//       2: "#3B82F6", // Bleu pour Serenji
//       3: "#10B981", // Vert pour BEI Bank
//       4: "#F59E0B", // Orange pour Olatech
//       5: "#EF4444"  // Rouge pour Portfolio
//     };
//     return colors[projectId];
//   };

//   return (
//     <div className="page portfolio">
//       {/* Dégradé similaire aux autres pages */}
//       <div className="portfolio-gradient-overlay"></div>
      
//       <div className="portfolio-container">
//         {/* En-tête */}
//         <div className="portfolio-header">
//           <h2 className="portfolio-title">Mes <span className="highlight">Projets</span></h2>
//           <div className="portfolio-underline"></div>
//           <p className="portfolio-intro">
//             Découvrez une sélection de mes projets, allant d'expériences web 3D innovantes 
//             à des applications fullstack performantes. Chaque projet démontre mon expertise 
//             technique et ma créativité.
//           </p>
//         </div>

//         <div className="portfolio-content">
//           {/* Partie gauche - Détails du projet */}
//           <div className="portfolio-details">
//             {projects.map((project, index) => (
//               <div 
//                 key={project.id}
//                 className={`portfolio-detail ${activeProject === index ? 'active' : ''}`}
//               >
//                 <div className="project-header">
//                   <p 
//                     className="project-number"
//                     style={{ color: getProjectColor(project.id) + '20' }}
//                   >
//                     {project.number}
//                   </p>
//                   {project.icon && (
//                     <div 
//                       className="project-type-icon"
//                       style={{ color: getProjectColor(project.id) }}
//                     >
//                       {project.icon}
//                     </div>
//                   )}
//                 </div>
                
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
                
//                 <div className="technologies">
//                   <h4 className="tech-title">Technologies utilisées :</h4>
//                   <div className="tech-tags">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span 
//                         key={techIndex} 
//                         className="tech-tag"
//                         style={{ 
//                           backgroundColor: getProjectColor(project.id) + '15',
//                           borderColor: getProjectColor(project.id) + '30',
//                           color: getProjectColor(project.id)
//                         }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="project-links">
//                   <a 
//                     href={project.liveLink} 
//                     className="live-link"
//                     style={{ backgroundColor: getProjectColor(project.id) }}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   >
//                     <HiExternalLink className="link-icon" />
//                     <span>Voir le projet</span>
//                   </a>
//                   <a 
//                     href={project.githubLink} 
//                     className="github-link"
//                     style={{ borderColor: getProjectColor(project.id), color: getProjectColor(project.id) }}
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                   >
//                     <FaGithub className="link-icon" />
//                     <span>Code source</span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Partie droite - Carrousel d'images */}
//           <div className="portfolio-carousel">
//             <div className="carousel-header">
//               <div className="carousel-title">
//                 <h4>{projects[activeProject].title}</h4>
//                 <span className="project-type">
//                   {projects[activeProject].id === 1 ? "Web 3D" : 
//                    projects[activeProject].id === 2 ? "Gestion de Projets" :
//                    projects[activeProject].id === 3 ? "Application Bancaire" :
//                    projects[activeProject].id === 4 ? "E-commerce" : "Portfolio"}
//                 </span>
//               </div>
//             </div>
            
//             <div className="carousel-container">
//               <div 
//                 className="image-slide"
//                 style={{ transform: `translateX(-${activeImageIndex * 100}%)` }}
//               >
//                 {projects[activeProject].images.map((img, index) => (
//                   <div key={index} className="image-item">
//                     <img 
//                       src={img} 
//                       alt={`${projects[activeProject].title} - Vue ${index + 1}`}
//                       loading="lazy"
//                     />
//                     <div className="image-overlay">
//                       {/* <span className="project-name">{projects[activeProject].title}</span> */}
//                       <span 
//                         className="image-counter"
//                         style={{ backgroundColor: getProjectColor(projects[activeProject].id) }}
//                       >
//                         {index + 1}/{projects[activeProject].images.length}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation du carrousel */}
//             <div className="carousel-navigation">
//               <button 
//                 className="nav-arrow prev"
//                 onClick={handlePrevImage}
//                 disabled={projects[activeProject].images.length <= 1}
//                 style={{ backgroundColor: getProjectColor(projects[activeProject].id) + '40' }}
//               >
//                 <BsChevronLeft />
//               </button>
              
//               <div className="image-dots">
//                 {projects[activeProject].images.map((_, index) => (
//                   <button
//                     key={index}
//                     className={`dot ${activeImageIndex === index ? 'active' : ''}`}
//                     onClick={() => setActiveImageIndex(index)}
//                     aria-label={`Aller à l'image ${index + 1}`}
//                     style={{ 
//                       backgroundColor: activeImageIndex === index 
//                         ? getProjectColor(projects[activeProject].id) 
//                         : 'rgba(255, 255, 255, 0.3)'
//                     }}
//                   />
//                 ))}
//               </div>
              
//               <button 
//                 className="nav-arrow next"
//                 onClick={handleNextImage}
//                 disabled={projects[activeProject].images.length <= 1}
//                 style={{ backgroundColor: getProjectColor(projects[activeProject].id) + '40' }}
//               >
//                 <BsChevronRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Navigation entre projets */}
//         <div className="project-navigation">
//           <button 
//             className="project-nav prev"
//             onClick={handlePrevProject}
//           >
//             <BsChevronLeft />
//             {/* <span>Projet précédent</span> */}
//           </button>
          
//           <div className="project-indicators">
//             {projects.map((project, index) => (
//               <button
//                 key={index}
//                 className={`indicator ${activeProject === index ? 'active' : ''}`}
//                 onClick={() => handleProjectSelect(index)}
//                 aria-label={`Aller au projet ${index + 1}`}
//                 style={{ 
//                   backgroundColor: activeProject === index 
//                     ? getProjectColor(project.id) 
//                     : 'var(--border-color)'
//                 }}
//               />
//             ))}
//           </div>
          
//           <button 
//             className="project-nav next"
//             onClick={handleNextProject}
//           >
//             {/* <span>Projet suivant</span> */}
//             <BsChevronRight />
//           </button>
//         </div>

//         {/* Section CTA */}
//         <div className="portfolio-cta">
//           <div className="cta-content">
//             <h3 className="cta-title">Prêt pour une expérience web innovante ?</h3>
//             <p className="cta-description">
//               Du développement 3D immersif aux applications web complexes, je combine créativité 
//               et expertise technique pour créer des solutions digitales exceptionnelles. 
//               Parlons de votre prochain projet !
//             </p>
//             <div className="cta-buttons">
//               {/* <button className="cta-btn primary">
//                 Voir la démo 3D
//               </button> */}
//               <button className="cta-btn secondary">
//                 Discuter d'un projet
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












import { useState, useEffect } from "react";
import "../assets/style/portfolio.css";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdDesignServices, MdCode } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState('light');

  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Observer les changements de thème
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
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
      title: "Plateforme E-commerce",
      description: "Une plateforme e-commerce complète avec système de paiement intégré, gestion des stocks et tableau de bord administrateur. Construite avec React et Node.js.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      images: ["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg", "/images/projects/ecommerce-3.jpg"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce",
      type: "web",
      typeIcon: <MdCode />,
      typeName: "Web App"
    },
    {
      id: 2,
      title: "Application Mobile Fitness",
      description: "Application mobile de suivi d'entraînement avec planification personnalisée, suivi des progrès et intégration avec les wearables.",
      technologies: ["React Native", "Firebase", "GraphQL", "Google Fit API"],
      images: ["/images/projects/fitness-1.jpg", "/images/projects/fitness-2.jpg"],
      liveUrl: null,
      githubUrl: "https://github.com/username/fitness-app",
      type: "mobile",
      typeIcon: <BiMobileAlt />,
      typeName: "Mobile App"
    },
    {
      id: 3,
      title: "SaaS Gestion de Projet",
      description: "Solution SaaS pour la gestion de projet avec tableaux Kanban, suivi du temps, collaboration en temps réel et rapports avancés.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "Docker"],
      images: ["/images/projects/saas-1.jpg", "/images/projects/saas-2.jpg", "/images/projects/saas-3.jpg"],
      liveUrl: "https://project-saas.com",
      githubUrl: "https://github.com/username/project-saas",
      type: "web",
      typeIcon: <MdCode />,
      typeName: "Web App"
    },
    {
      id: 4,
      title: "Site Portfolio Artistique",
      description: "Portfolio interactif pour artiste avec galerie 3D, animations personnalisées et système de gestion de contenu intégré.",
      technologies: ["Three.js", "Next.js", "Sanity.io", "Framer Motion", "GSAP"],
      images: ["/images/projects/portfolio-1.jpg", "/images/projects/portfolio-2.jpg"],
      liveUrl: "https://artist-portfolio.com",
      githubUrl: "https://github.com/username/artist-portfolio",
      type: "design",
      typeIcon: <MdDesignServices />,
      typeName: "Design"
    }
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
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
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
            Découvrez une sélection de mes projets les plus significatifs. Chaque réalisation 
            représente un défi technique et créatif relevé avec passion et expertise.
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
                className={`indicator ${activeProject === index ? 'active' : ''}`}
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
                className={`portfolio-detail ${activeProject === index ? 'active' : ''}`}
              >
                <div className="project-header">
                  <h2 className="project-number">{String(project.id).padStart(2, '0')}</h2>
                  <div className="project-type-icon">{project.typeIcon}</div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="technologies">
                  <div className="tech-title">Technologies utilisées :</div>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      <FaExternalLinkAlt className="link-icon" />
                      Voir le projet
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <FaGithub className="link-icon" />
                    Code source
                  </a>
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
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
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
                      className={`dot ${currentImageIndex === index ? 'active' : ''}`}
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
              Que vous ayez besoin d'une application web, d'un site mobile ou d'une solution 
              sur mesure, je suis là pour vous aider à concrétiser vos idées.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Discuter de mon projet</button>
              <button className="cta-btn secondary">Voir tous mes projets</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

