import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../assets/style/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Menu à gauche */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/me" 
              className={`nav-link ${isActive('/me') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              A propos
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="/resume" 
              className={`nav-link ${isActive('/resume') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Résumé
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/service" 
              className={`nav-link ${isActive('/service') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/portfolio" 
              className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Nom à droite */}
        <div className="nav-name">
          <span>Q.Charbel</span>
        </div>

        {/* Menu hamburger pour mobile */}
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