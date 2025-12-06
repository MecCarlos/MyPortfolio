import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Service from './pages/Service';
import DebugI18n from './DebugI18n';
import './i18n';

// Composant de brouillard/overlay
const FogOverlay = ({ isTransitioning, direction = 'out' }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        pointerEvents: 'none',
        opacity: isTransitioning ? 1 : 0,
        background: direction === 'out' 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.97) 100%)'
          : 'linear-gradient(135deg, rgba(248,250,252,0.97) 0%, rgba(255,255,255,0.95) 100%)',
        backdropFilter: isTransitioning ? 'blur(20px)' : 'blur(0px)',
        WebkitBackdropFilter: isTransitioning ? 'blur(20px)' : 'blur(0px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Effet de lueur subtile */}
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          opacity: isTransitioning ? 0.5 : 0,
          transition: 'opacity 0.5s ease'
        }}
      />
    </div>
  );
};

// Composant de page avec effet de brouillard
const FogTransitionPage = ({ children, isActive }) => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        opacity: isActive ? 1 : 0,
        filter: isActive ? 'blur(0px)' : 'blur(15px)',
        transform: isActive ? 'scale(1)' : 'scale(0.98)',
        transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isActive ? '0.3s' : '0s'
      }}
    >
      {children}
    </div>
  );
};

// Gestionnaire principal des transitions
const AppWithFogTransition = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('out');
  
  // Détection du changement de page
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      startTransition();
    }
  }, [location, displayLocation]);

  const startTransition = () => {
    setIsTransitioning(true);
    setTransitionDirection('out');
    
    // Séquence de transition
    setTimeout(() => {
      setDisplayLocation(location);
      setTransitionDirection('in');
    }, 400);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  // Styles CSS pour l'effet
  const fogStyles = `
    /* Animation de pulsation subtile pour le brouillard */
    @keyframes fogPulse {
      0%, 100% { opacity: 0.95; }
      50% { opacity: 0.98; }
    }
    
    /* Effet de dispersion de particules */
    .fog-particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 50%;
      animation: float 3s infinite ease-in-out;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      33% { transform: translateY(-10px) translateX(5px); }
      66% { transform: translateY(5px) translateX(-5px); }
    }
    
    /* Respect des préférences utilisateur */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
      .fog-particle {
        display: none;
      }
    }
    
    /* Effet de rêve sur le texte pendant la transition */
    .dream-text {
      background: linear-gradient(
        90deg,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.8) 50%,
        rgba(255,255,255,0) 100%
      );
      background-size: 200% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: dreamShimmer 2s ease-in-out infinite;
    }
    
    @keyframes dreamShimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `;

  // Injection des styles
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = fogStyles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  // Génération de particules de brouillard
  const renderFogParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          className="fog-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <>
      <Navbar />
      
      {/* Overlay de brouillard */}
      <div style={{ position: 'relative' }}>
        <FogOverlay 
          isTransitioning={isTransitioning} 
          direction={transitionDirection}
        />
        
        {renderFogParticles()}
        
        {/* Page actuelle avec transition */}
        <FogTransitionPage isActive={!isTransitioning || transitionDirection === 'out'}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/me" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </FogTransitionPage>
        
        {/* Nouvelle page (pendant la transition) */}
        {isTransitioning && transitionDirection === 'in' && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2
          }}>
            <FogTransitionPage isActive={true}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/me" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/service" element={<Service />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </FogTransitionPage>
          </div>
        )}
      </div>
    </>
  );
};

// Variante simplifiée pour une expérience plus légère
const AppWithSimpleFog = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location.key !== prevLocation.key) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevLocation(location);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location, prevLocation]);

  return (
    <>
      <Navbar />
      
      {/* Effet de brouillard simple */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: isTransitioning ? 'blur(15px)' : 'blur(0px)',
          WebkitBackdropFilter: isTransitioning ? 'blur(15px)' : 'blur(0px)',
          opacity: isTransitioning ? 1 : 0,
          zIndex: 999,
          pointerEvents: 'none',
          transition: 'all 0.6s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Indicateur subtil de chargement */}
        {isTransitioning && (
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '2px solid rgba(59, 130, 246, 0.1)',
              borderTop: '2px solid rgba(59, 130, 246, 0.5)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}
          />
        )}
      </div>

      {/* Contenu */}
      <div
        style={{
          opacity: isTransitioning ? 0.7 : 1,
          filter: isTransitioning ? 'blur(8px)' : 'blur(0px)',
          transition: 'all 0.6s ease'
        }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

// Composant App principal
function App() {
  return (
    <Router>
      <DebugI18n />
      {/* Choisis la version que tu préfères */}
      <AppWithFogTransition />  {/* Version avancée avec plus d'effets */}
      {/* <AppWithSimpleFog /> */}  {/* Version simplifiée et plus légère */}
    </Router>
  );
}

export default App;