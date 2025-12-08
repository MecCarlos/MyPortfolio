import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

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
      title: t("beiBankTitle"),
      description: t("beiBankDesc"),
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
      typeName: t("webApp"),
    },
    {
      id: 2,
      number: "02",
      title: t("olatechStoreTitle"),
      description: t("olatechStoreDesc"),
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
      typeName: t("ecommerce"),
    },
    {
      id: 3,
      number: "03",
      title: t("portfolio3DTitle"),
      description: t("portfolio3DDesc"),
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
      typeName: t("webApp3D"),
    },
    {
      id: 4,
      number: "04",
      title: t("personalPortfolioTitle"),
      description: t("personalPortfolioDesc"),
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
      typeName: t("portfolioType"),
    },
    {
      id: 5,
      number: "05",
      title: t("serenjiTitle"),
      description: t("serenjiDesc"),
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
      typeName: t("saas"),
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
            {t("My")} <span className="highlight">{t("Projects")}</span>
          </h1>
          <div className="portfolio-underline"></div>
          <p className="portfolio-intro">
            {t("portfolioIntro")}
          </p>
        </div>

        {/* Navigation entre projets */}
        <div className="project-navigation">
          <button
            className="project-nav prev"
            onClick={prevProject}
            title={t("previousProject")}
            aria-label={t("previousProject")}
          >
            <FaChevronLeft />
            <span className="nav-text">{t("previous")}</span>
          </button>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  activeProject === index ? "active" : ""
                }`}
                onClick={() => goToProject(index)}
                title={`${t("viewProject")} ${index + 1}`}
                aria-label={`${t("project")} ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="project-nav next"
            onClick={nextProject}
            title={t("nextProject")}
            aria-label={t("nextProject")}
          >
            <span className="nav-text">{t("next")}</span>
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
                  <div className="tech-title">{t("technologiesUsed")}:</div>
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
                      {t("viewProject")}
                    </a>
                  ) : (
                    <span className="live-link disabled">
                      <FaExternalLinkAlt className="link-icon" />
                      {t("projectInProgress")}
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
                      {t("sourceCode")}
                    </a>
                  ) : (
                    <span className="github-link disabled">
                      <FaGithub className="link-icon" />
                      {t("private")}
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
                <h4>{t("projectVisuals")}</h4>
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
                      alt={`${currentProject.title} - ${t("view")} ${index + 1}`}
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
                  aria-label={t("previousImage")}
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
                      aria-label={`${t("goToImage")} ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="nav-arrow"
                  onClick={nextImage}
                  disabled={currentProject.images.length <= 1}
                  aria-label={t("nextImage")}
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
            <h2 className="cta-title">{t("haveAProject")}</h2>
            <p className="cta-description">
              {t("portfolioCTA")}
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">
                {t("discussYourProject")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}