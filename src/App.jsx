import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Service from './pages/Service';
import DebugI18n from './DebugI18n'; // Ajoutez cette ligne
import './i18n';

function App() {
  return (
    <Router>
      <DebugI18n />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;