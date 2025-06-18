import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);
  const isHomePage = location.pathname === '/';

  // Handle smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // If not on home page, navigate to home with hash
    if (!isHomePage) {
      navigate(`/#${sectionId}`, { replace: true });
      return;
    }
    
    // If on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96; // Height of navbar + extra spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update URL hash without scrolling
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'AboutMe' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
  ];

  // Update active section based on URL hash or scroll position
  useEffect(() => {
    // Handle hash change on initial load
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navItems.some(item => item.id === hash)) {
        setActiveSection(hash);
        
        // If we're on the home page, scroll to the section
        if (isHomePage) {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 96;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Handle scroll event
    const handleScroll = () => {
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 50);
      
      // Only update active section based on scroll if we're on the home page
      if (!isHomePage) return;
      
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
              // Update URL hash without scrolling
              window.history.replaceState(null, null, `#${section}`);
              break;
            }
          }
        }
      });
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check
    if (isHomePage) {
      handleScroll();
    } else if (window.location.hash) {
      handleHashChange();
    } else {
      setActiveSection('home');
    }
    
    // Cleanup
    return () => {
      if (scrollTimeout.current) {
        cancelAnimationFrame(scrollTimeout.current);
      }
      window.removeEventListener('scroll', handleScroll, { passive: true });
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isHomePage, navItems]); // Re-run when isHomePage or navItems changes

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
          {/* Logo/Profile Image - Links to home */}
          <Link to="/" className="flex items-center">
            <img 
              src="/a-stylized-digital-portrait-illustration_RVqugDIhRTagZXa37AbJkw_kHTnkbxiTTaR9h69r5AjNw.jpeg" 
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-500 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            />
          </Link>
          
          {/* Navigation links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={isHomePage ? `#${item.id}` : { pathname: '/', hash: `#${item.id}` }}
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
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none hover:bg-white/50 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
              mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div 
              className="absolute top-0 right-0 h-full w-3/4 bg-white shadow-lg overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: mobileMenuOpen ? 0 : '100%' }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={`mobile-${item.id}`}
                      to={isHomePage ? `#${item.id}` : { pathname: '/', hash: `#${item.id}` }}
                      onClick={(e) => {
                        if (isHomePage) {
                          scrollToSection(e, item.id);
                        }
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? 'text-green-700 font-semibold bg-green-100/50' 
                          : 'text-gray-700 hover:text-green-700 hover:bg-green-50/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
