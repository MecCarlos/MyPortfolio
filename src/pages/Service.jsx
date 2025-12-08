import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
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
  const { t } = useTranslation();

  const services = [
    {
      id: "web",
      title: t("webDevelopment"),
      description: t("webDevelopmentDesc"),
      icon: <FaCode />,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "MySQL", "Bootstrap", "Tailwind"],
      features: t("webFeatures", { returnObjects: true })
    },
    {
      id: "frontend",
      title: t("frontendDevelopment"),
      description: t("frontendDevelopmentDesc"),
      icon: <MdDesignServices />,
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind"],
      features: t("frontendFeatures", { returnObjects: true })
    },
    {
      id: "app-design",
      title: t("appDesign"),
      description: t("appDesignDesc"),
      icon: <RiAppStoreFill />,
      technologies: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Wireframing"],
      features: t("appDesignFeatures", { returnObjects: true })
    },
    {
      id: "database",
      title: t("database"),
      description: t("databaseDesc"),
      icon: <FaDatabase />,
      technologies: ["MySQL", "PHP", "REST APIs", "Optimization"],
      features: t("databaseFeatures", { returnObjects: true })
    },
    {
      id: "electronique",
      title: t("electronicsMaintenance"),
      description: t("electronicsMaintenanceDesc"),
      icon: <GiCircuitry />,
      technologies: [t("analogDigitalElectronics"), t("diagnosticTools"), t("soldering"), t("testEquipment")],
      features: t("electronicsFeatures", { returnObjects: true })
    },
    {
      id: "satellite",
      title: t("satelliteInstallation"),
      description: t("satelliteInstallationDesc"),
      icon: <MdSatelliteAlt />,
      technologies: [t("satelliteDishes"), t("receivers"), t("amplifiers"), t("coaxialCabling")],
      features: t("satelliteFeatures", { returnObjects: true })
    },
    {
      id: "securite",
      title: t("electronicSecurity"),
      description: t("electronicSecurityDesc"),
      icon: <MdSecurity />,
      technologies: [t("ipAnalogCameras"), t("dvrNvrRecorders"), t("detectors"), t("accessControl")],
      features: t("securityFeatures", { returnObjects: true })
    },
    {
      id: "solaire",
      title: t("solarEnergy"),
      description: t("solarEnergyDesc"),
      icon: <GiSolarPower />,
      technologies: [t("solarPanels"), t("inverters"), t("batteries"), t("chargeControllers")],
      features: t("solarFeatures", { returnObjects: true })
    },
    {
      id: "domotique",
      title: t("homeInstallation"),
      description: t("homeInstallationDesc"),
      icon: <HiHomeModern />,
      technologies: [t("electricalWiring"), t("homeAutomation"), t("ledLighting"), t("network")],
      features: t("homeFeatures", { returnObjects: true })
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="page service">
      <div className="service-gradient-overlay"></div>
      
      <div className="service-container">
        <div className="service-header">
          <h2 className="service-title">{t("My")} <span className="highlight">{t("Services")}</span></h2>
          <div className="service-underline"></div>
          <p className="service-intro">
            {t("serviceIntro")}
          </p>
        </div>

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
                      <h4>{t("technologiesUsed")}:</h4>
                      <div className="tech-tags">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="features">
                      <h4>{t("whatIOffer")}:</h4>
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
                  {activeService === service.id ? t("seeLess") : t("seeMore")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="service-cta">
          <div className="cta-content">
            <h3 className="cta-title">{t("haveAProject")}</h3>
            <p className="cta-description">
              {t("projectDescription")}
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/2290156983133" className="cta-btn primary">
                {t("discussMyProject")}
              </a>
              <NavLink to="/portfolio" className="cta-btn secondary">
                {t("viewMyPortfolio")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}