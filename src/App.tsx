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
import DemoMouseEyes from './pages/DemoMouseEyes';
import DemoCardCurtain from './pages/DemoCardCurtain';
import DemoCircularGallery from './pages/DemoCircularGallery';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="bg-black min-h-screen font-sans text-gray-100 selection:bg-white/10 selection:text-white relative">

        {/* Custom Trailing Cursor */}
        <CursorFollower />

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-0.5 accent-progress origin-left z-50"
          style={{ scaleX }}
        />

        {/* Navbar */}
        <Navbar />
        <ScrollToTop />

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
          <Route path="/demo/mouse-eyes" element={<DemoMouseEyes />} />
          <Route path="/demo/card-curtain" element={<DemoCardCurtain />} />
          <Route path="/demo/circular-gallery" element={<DemoCircularGallery />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

            {/* Brand */}
            <Link to="/" className="group">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <div className="leading-tight">
                  <span className="block text-lg font-bold tracking-tight text-white transition-colors group-hover:text-gray-200">
                    Saranya Pothina
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.26em] text-gray-500">
                    AI / ML Engineer
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Saranya Pothina · Built with React & Framer Motion
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/saranyaaaa17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/saranya-pothina-806670274"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:saranyapothina07@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-white/20 hover:bg-white/8 hover:text-white"
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
