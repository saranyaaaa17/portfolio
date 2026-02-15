import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorFollower from './components/CursorFollower';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Achievements from './components/Achievements';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="bg-black min-h-screen font-sans text-gray-100 selection:bg-blue-100 selection:text-blue-900 relative">
        <div className="fixed inset-0 bg-grid-premium pointer-events-none z-0" />
        
        {/* Custom Trailing Cursor */}
        <CursorFollower />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-500 origin-left z-50 shadow-lg"
          style={{ scaleX }}
        />
        
        {/* Navbar */}
        <Navbar />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/achievements" element={
            <div className="pt-20 min-h-screen">
              <Achievements />
            </div>
          } />
        </Routes>

        {/* Enhanced Footer */}
        <footer className="py-20 px-6 border-t border-neutral-700 bg-black">
          <div className="max-w-6xl mx-auto">
            
            {/* Footer Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              
              {/* Brand Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  Saranya Pothina
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed mb-6">
                  CS Student & Developer specializing in Machine Learning and Full-Stack Development.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/saranyaaaa17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500 hover:text-white text-gray-200 flex items-center justify-center transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/saranya-pothina-806670274" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500 hover:text-white text-gray-200 flex items-center justify-center transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-sm text-gray-200 hover:text-blue-500 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="text-sm text-gray-200 hover:text-blue-500 transition-colors">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#experience" className="text-sm text-gray-200 hover:text-blue-500 transition-colors">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-sm text-gray-200 hover:text-blue-500 transition-colors">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm text-gray-200 hover:text-blue-500 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-4">
                  Get In Touch
                </h4>
                <ul className="space-y-3">
                  <li className="text-sm text-gray-200">
                    Visakhapatnam, India
                  </li>
                  <li>
                    <a href="mailto:saranyapothina07@gmail.com" className="text-sm text-gray-200 hover:text-blue-400 transition-colors">
                      saranyapothina07@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1-eWDwEBZo7CmSrGOS8GKJifP0cWztGFr/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-700 font-medium transition-colors">
                      Download Resume →
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} Saranya Pothina. All rights reserved.
              </p>
              <p className="text-xs text-gray-400">
                Built with React, Tailwind CSS & Framer Motion
              </p>
            </div>

          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App

