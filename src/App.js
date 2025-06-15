import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import MarketingLabCaseStudy from './components/MarketingLabCaseStudy';
import BrainzCaseStudy from './components/BrainzCaseStudy';
import TrekCaseStudy from './components/TrekCaseStudy';
import Footer from './components/Footer';

// Main App Layout Component
const AppLayout = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="font-sans bg-paper-50 text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="relative">
          <Hero />
        </section>
        
        <section id="about" className="relative">
          <About />
        </section>
        
        <section id="skills" className="relative">
          <TechStack />
        </section>
        
        <section id="experience" className="relative">
          <Experience />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/marketing-lab" element={<MarketingLabCaseStudy />} />
        <Route path="/brainz" element={<BrainzCaseStudy />} />
        <Route path="/trek" element={<TrekCaseStudy />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
