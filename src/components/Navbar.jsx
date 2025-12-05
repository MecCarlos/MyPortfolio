import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/style/navbar.css";
import { TbMoon } from "react-icons/tb";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("fr");
  const location = useLocation();

  // Initialiser le thème
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Initialiser la langue
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "fr";
    setLanguage(savedLanguage);
    // Vous pouvez ajouter ici la logique pour initialiser i18n
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Par exemple: i18n.changeLanguage(newLanguage);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Menu à gauche */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "Accueil" : "Home"}
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/me"
              className={`nav-link ${isActive("/me") ? "nav-link-active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "A propos" : "About"}
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/resume"
              className={`nav-link ${
                isActive("/resume") ? "nav-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "Résumé" : "Resume"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/service"
              className={`nav-link ${
                isActive("/service") ? "nav-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "Services" : "Services"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={`nav-link ${
                isActive("/portfolio") ? "nav-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "Portfolio" : "Portfolio"}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${
                isActive("/contact") ? "nav-link-active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {language === "fr" ? "Contact" : "Contact"}
            </Link>
          </li>
        </ul>

        {/* Contrôles à droite */}
        <div className="nav-controls">
          {/* Bouton de langue */}
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "fr" ? "Switch to English" : "Passer en Français"
            }
          >
            {language === "fr" ? "EN" : "FR"}
          </button>

          {/* Bouton de thème */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <FiSun /> : <TbMoon />}
          </button>

          {/* <div className="nav-name">
            <span>Q.Charbel</span>
          </div> */}
        </div>

        {/* Menu hamburger pour mobile */}
        <div
          className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
