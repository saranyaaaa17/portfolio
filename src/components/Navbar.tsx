import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Award, Trophy, Mail, Menu, X, FileText, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
// logo removed per request

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
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/achievements', label: 'Certifications', icon: Trophy },
    { path: '/skills', label: 'Skills', icon: Award },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/75 border border-white/10 shadow-2xl backdrop-blur-xl' 
        : 'bg-black/30 border border-white/8 backdrop-blur-xl'
    }`}>
      <div className="px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="flex items-center justify-between gap-3 rounded-full border accent-border bg-black/50 px-3 py-2 backdrop-blur-xl sm:px-4">
          
          {/* Logo/Name */}
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2.5"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                  Saranya Pothina
                </span>
                <span className="text-[9px] uppercase tracking-[0.26em] accent-gradient-text">
                  AI / ML Engineer
                </span>
              </div>
            </motion.div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-black/30 p-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative rounded-full px-3.5 py-2 transition-all duration-300 group"
                >
                  <div className={`flex items-center gap-2.5 ${
                    isActive 
                      ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white transition-transform'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      !isActive && 'group-hover:rotate-6 transition-transform'
                    }`} />
                    <span className="text-sm">{link.label}</span>
                  </div>
                  
                  {/* Active Indicator with smooth animation */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-full accent-gradient-bg ring-1 ring-white/12"
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
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300 -z-10" />
                  )}
                </Link>
              );
            })}
          </div>

          <Link
            to="/resume"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border accent-border accent-gradient-bg px-4 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/20"
          >
            <FileText className="h-4 w-4" />
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden rounded-full border accent-border bg-white/5 p-2.5 transition-colors duration-200 hover:bg-white/10"
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
            className="xl:hidden mt-3 overflow-hidden rounded-3xl border accent-border bg-black/88 p-3 backdrop-blur-xl space-y-2"
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
                          ? 'bg-gradient-to-r from-white/18 via-white/12 to-white/10 text-white font-semibold ring-1 ring-white/12'
                            : 'text-gray-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              );
            })}
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 block rounded-2xl border border-white/10 bg-gradient-to-r from-white/12 via-white/8 to-white/6 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Resume
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
