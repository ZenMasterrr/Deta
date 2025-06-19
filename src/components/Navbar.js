import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  const mobileMenuRef = useRef(null);

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'AboutMe' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }
  ], []);

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
        const sections = navItems.map(item => item.id);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-300 w-[92%] max-w-5xl mx-auto ${
        scrolled ? 'py-4' : 'py-3'
      }`}
      ref={mobileMenuRef}
    >
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
          <motion.div
            initial={false}
            animate={mobileMenuOpen ? 'open' : 'closed'}
            className="md:hidden"
          >
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M3 12H21" },
                    open: { d: "M3 6H21" }
                  }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M3 6H21" },
                    open: { d: "M3 18H21" }
                  }}
                />
              </svg>
            </button>

            <motion.div
              variants={{
                open: { 
                  opacity: 1,
                  y: 0,
                  display: 'block'
                },
                closed: {
                  opacity: 0,
                  y: -20,
                  transitionEnd: {
                    display: 'none'
                  }
                }
              }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg mt-2 rounded-lg overflow-hidden"
            >
              <nav className="py-2">
                {navItems.map((item) => (
                  <Link
                    key={`mobile-${item.id}`}
                    to={isHomePage ? `#${item.id}` : { pathname: '/', hash: `#${item.id}` }}
                    onClick={(e) => {
                      if (isHomePage) scrollToSection(e, item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
