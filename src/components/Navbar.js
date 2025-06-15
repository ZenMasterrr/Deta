import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  const scrollTimeout = useRef(null);

  // Handle smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96; // Height of navbar + extra spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll with debounce
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 50);
      
      // Debounce the scroll handler
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
      
      scrollTimeout.current = requestAnimationFrame(() => {
        const sections = ['home', 'about', 'skills', 'experience'];
        const scrollPosition = window.scrollY + 100; // Add offset to highlight section a bit earlier
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'AboutMe' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];
  
  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 w-[92%] max-w-5xl mx-auto ${
      scrolled ? 'py-4' : 'py-3'
    }`}>
      <div className={`glass-card container mx-auto px-8 py-3 rounded-2xl ${
        scrolled 
          ? 'bg-skin-100/90 border-2 border-green-400/30 shadow-xl' 
          : 'bg-skin-50/80'
      } transition-all duration-300`}>
        <div className="flex justify-between items-center">
          {/* Logo/Profile Image */}
          <div className="flex items-center">
            <img 
              src="/a-stylized-digital-portrait-illustration_RVqugDIhRTagZXa37AbJkw_kHTnkbxiTTaR9h69r5AjNw.jpeg" 
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </div>
          
          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-4 py-2.5 text-base font-medium rounded-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-green-700 font-semibold bg-green-100/50' 
                    : 'text-black-700 hover:text-green-700 hover:bg-green-50/60'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-700 rounded-full"
                    initial={false}
                    transition={{
                      type: 'spring',
                      bounce: 0.25,
                      duration: 0.5
                    }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none hover:bg-white/50 rounded-lg transition-colors duration-200"
              onClick={() => {}}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
