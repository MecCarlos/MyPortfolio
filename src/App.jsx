import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Skills from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      {/* Navbar EN DEHORS des Routes */}
      <Navbar />
      
      <Routes>
        {/* Routes des différentes pages du portfolio */}
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
}

export default App;