import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Award, Trophy, Mail, Menu, X, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/achievements', label: 'Certifications', icon: Trophy },
    { path: '/skills', label: 'Skills', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black border-b border-neutral-800 shadow-premium-lg' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo/Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-blue-500/50 transition-colors"
            >
              <Terminal className="w-4 h-4 text-blue-500" />
              <div className="flex items-center font-bold tracking-tight">
                <span className="text-gray-100">Saranya</span>
                <span className="text-blue-500">.dev</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-2.5 rounded-xl transition-all duration-300 group"
                >
                  <div className={`flex items-center gap-2.5 ${
                    isActive 
                      ? 'text-blue-500 font-semibold' 
                      : 'text-gray-200 hover:text-gray-100 group-hover:scale-105 transition-transform'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      !isActive && 'group-hover:rotate-6 transition-transform'
                    }`} />
                    <span>{link.label}</span>
                  </div>
                  
                  {/* Active Indicator with smooth animation */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 380, 
                        damping: 30 
                      }}
                    />
                  )}
                  
                  {/* Hover Background */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 rounded-xl transition-colors duration-300 -z-10" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-100" />
            ) : (
              <Menu className="w-6 h-6 text-gray-100" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 pb-4 space-y-2"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <motion.div
                  key={link.path}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-900/40 text-blue-400 font-semibold shadow-sm'
                        : 'text-gray-200 hover:bg-zinc-800'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
