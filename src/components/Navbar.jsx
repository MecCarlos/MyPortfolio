// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../assets/style/navbar.css";
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show !== isScrolled) {
        setIsScrolled(show);
      }
    };

    // Ajouter l'événement de scroll
    window.addEventListener('scroll', handleScroll);
    
    // Vérifier l'état initial
    handleScroll();
    
    // Nettoyer
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  // Initialiser le thème
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Initialiser la langue au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    if (i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage).then(() => {
      localStorage.setItem('language', newLanguage);
      window.location.reload();
    });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('Home')}
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/me" 
              className={`nav-link ${isActive('/me') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('About')}
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/resume" 
              className={`nav-link ${isActive('/resume') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('Resume')}
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/service" 
              className={`nav-link ${isActive('/service') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('Services')}
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/portfolio" 
              className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('Portfolio')}
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('Contact')}
            </Link>
          </li>
        </ul>

        <div className="nav-controls">
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            aria-label={i18n.language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            {i18n.language === 'fr' ? 'EN' : 'FR'}
          </button>

          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <FiSun /> : <IoMoonOutline />}
          </button>
        </div>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;