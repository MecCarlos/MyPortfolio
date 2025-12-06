import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import "../assets/style/home.css";

import { LuGithub } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('dark');

  // Détecter le thème actuel
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
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

  return (
    <div className="page home">
      <div className="box texte">
        <p className="name-line1">Charbel</p>
        <p className="name-line2">QUENUM</p>
        <p className="title">{t("webDeveloper")}</p>

        {/* Boutons */}
        <div className="button-container">
          <NavLink to="/resume" className="btn btn-outline hbtn">
            {t("cv")}
          </NavLink>
          <NavLink to="/portfolio" className="btn btn-outline hbtn">
            {t("portfolio")}
          </NavLink>
        </div>

        {/* Liens sociaux en bas */}
        <div className="social-links">
          <a 
            href="https://wa.me/22956983133" 
            className="social-link" 
            aria-label="WhatsApp"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MdOutlineWhatsapp />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61582122567785" 
            className="social-link" 
            aria-label="Facebook"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a 
            href="https://github.com/MecCarlos" 
            className="social-link" 
            aria-label="GitHub"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LuGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/charbel-quenum-0719a2372/" 
            className="social-link" 
            aria-label="LinkedIn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}