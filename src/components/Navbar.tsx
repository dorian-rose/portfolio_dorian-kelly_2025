import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  useEffect(() => {
    // Close menu when route changes
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [location.pathname]);

  useEffect(() => {
    // Check for user preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-primary shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span className="text-primary dark:text-secondary-light">Dorian</span> Kelly
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-primary dark:text-secondary-light' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-primary dark:text-secondary-light' : ''}`}>
              About
            </Link>
            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'text-primary dark:text-secondary-light' : ''}`}>
              Projects
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-primary dark:text-secondary-light' : ''}`}>
              Contact
            </Link>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-secondary-light dark:hover:bg-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 mr-2 rounded-full hover:bg-secondary-light dark:hover:bg-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-secondary-light dark:hover:bg-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-primary shadow-md z-50">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <Link to="/" className={`nav-link-mobile ${location.pathname === '/' ? 'text-primary dark:text-secondary-light' : ''}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-link-mobile ${location.pathname === '/about' ? 'text-primary dark:text-secondary-light' : ''}`}>
                About
              </Link>
              <Link to="/projects" className={`nav-link-mobile ${location.pathname === '/projects' ? 'text-primary dark:text-secondary-light' : ''}`}>
                Projects
              </Link>
              <Link to="/contact" className={`nav-link-mobile ${location.pathname === '/contact' ? 'text-primary dark:text-secondary-light' : ''}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;