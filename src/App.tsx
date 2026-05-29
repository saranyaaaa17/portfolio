import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CursorFollower from './components/CursorFollower';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import AchievementsPage from './pages/AchievementsPage';
import ResumePage from './pages/ResumePage';
import HyperTextDemo from './pages/HyperTextDemo';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

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

        {/* Custom Trailing Cursor */}
        <CursorFollower />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/demo/hypertext" element={<HyperTextDemo />} />
        </Routes>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-neutral-800 bg-black">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Brand */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-lg font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
                  Saranya
                </span>
                <span
                  className="text-lg font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  .dev
                </span>
              </motion.div>
            </Link>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Saranya Pothina · Built with React & Framer Motion
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/saranyaaaa17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-blue-500"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/saranya-pothina-806670274"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-blue-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:saranyapothina07@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 border border-neutral-800 hover:border-blue-500"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
