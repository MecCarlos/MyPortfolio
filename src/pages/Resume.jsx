// components/Resume.js
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const [theme, setTheme] = useState('light');
  const { t } = useTranslation();
  
  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

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

  const tabs = [
    { id: "experience", label: t("Experience") },
    { id: "education", label: t("Education") },
    { id: "training", label: t("Training") },
    { id: "skills", label: t("Skills") },
    { id: "about", label: t("About") },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div className="resume-detail experience active">
            <div className="section-header">
              <h2 className="section-title">
                {t("My")} <span className="highlight">{t("Experience")}</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>{t("experienceDescription")}</p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">{t("oct2025Mar2026")}</span>
                  <h3>{t("frontendIntern")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Inawo Technologie</span>
                </div>
                <p className="resume-desc">{t("internship1Description")}</p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">{t("marJun2025")}</span>
                  <h3>{t("frontendIntern")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>Inawo Technologie</span>
                </div>
                <p className="resume-desc">{t("internship2Description")}</p>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="resume-detail education active">
            <div className="section-header">
              <h2 className="section-title">
                {t("My")} <span className="highlight">{t("AcademicPath")}</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>{t("educationDescription")}</p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2023 - 2025</span>
                  <h3>{t("licenseDegree")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>UATM Gasa Formation</span>
                </div>
                <p className="resume-desc">{t("licenseDescription")}</p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2018 - 2021</span>
                  <h3>{t("dtiDegree")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>{t("fmcSchool")}</span>
                </div>
                <p className="resume-desc">{t("dtiDescription")}</p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2018 - 2021</span>
                  <h3>{t("f3Training")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>{t("polytechSchool")}</span>
                </div>
                <p className="resume-desc">{t("f3Description")}</p>
              </div>

              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2013 - 2017</span>
                  <h3>{t("bepcDegree")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>{t("houeyihoSchool")}</span>
                </div>
                <p className="resume-desc">{t("bepcDescription")}</p>
              </div>
            </div>
          </div>
        );

      case "training":
        return (
          <div className="resume-detail education active">
            <div className="section-header">
              <h2 className="section-title">
                {t("My")} <span className="highlight">{t("TechnicalTraining")}</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>{t("trainingDescription")}</p>
            </div>

            <div className="resume-list">
              <div className="resume-item">
                <div className="resume-header">
                  <span className="year">2022 - 2023</span>
                  <h3>{t("electronicsDegree")}</h3>
                </div>
                <div className="company">
                  <span className="dot"></span>
                  <span>{t("caeCenter")}</span>
                </div>
                <p className="resume-desc">{t("electronicsDescription")}</p>
              </div>
            </div>
          </div>
        );

      case "skills":
        return (
          <div className="resume-detail skills active">
            <div className="section-header">
              <h2 className="section-title">
                {t("My")} <span className="highlight">{t("Skills")}</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>{t("skillsDescription")}</p>
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
                <span className="skill-name">{t("ElectronicsMaintenance")}</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <FaSatelliteDish />
                </div>
                <span className="skill-name">{t("SatelliteSystems")}</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <PiSecurityCameraFill />
                </div>
                <span className="skill-name">{t("ElectronicSecurity")}</span>
              </div>

              <div className="skill-item">
                <div className="skill-icon">
                  <PiSolarPanelFill />
                </div>
                <span className="skill-name">{t("SolarEnergy")}</span>
              </div>
            </div>
          </div>
        );
      
      case "about":
        return (
          <div className="resume-detail about active">
            <div className="section-header">
              <h2 className="section-title">
                {t("About")} <span className="highlight">{t("me")}</span>
              </h2>
              <div className="underline"></div>
            </div>

            <div className="description">
              <p>{t("aboutDescription")}</p>
            </div>

            <div className="about-info-list">
              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Name")}<span>Quenum Charbel</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Gender")}<span>{t("Male")}</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Age")}<span>{t("23Years")}</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Status")}<span>{t("Single")}</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("City")}<span>Cotonou, Bénin</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Nationality")}<span>{t("Beninese")}</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Experience")}<span>2+ {t("years")}</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("FullTime")}<span>{t("Available")}</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Freelance")}<span>{t("Available")}</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Phone")}<span>(+229) 01 56 98 31 33</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Email")}<span>quenumcarlos20@gmail.com</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Languages")}<span>{t("FrenchFonEnglish")}</span>
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-item">
                  <p>
                    {t("Email2")}<span>quenumcarlos20@icloud.com</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    {t("Hobbies")}<span>{t("ReadingDocsDIY")}</span>
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
            <h2 className="sidebar-title">{t("WhyChooseMe")}</h2>
            <div className="sidebar-underline"></div>
          </div>

          <div className="sidebar-description">
            <p>{t("chooseMeDescription")}</p>
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