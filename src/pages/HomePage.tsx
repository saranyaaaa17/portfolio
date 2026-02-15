import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import ThinkingProcess from '../components/ThinkingProcess';
import Education from '../components/sections/Education';
import Skills from '../components/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Overview */}
      <Stats />
      
      {/* About Section */}
      <About />
      
      {/* Thinking Process */}
      <ThinkingProcess />
      
      {/* Education */}
      <Education />
      
      {/* Skills */}
      <Skills />
      
      {/* Experience Timeline */}
      <Experience />
      
      {/* Projects */}
      <Projects />
      
      {/* Achievements & Certifications */}
      <Achievements />
      
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default HomePage;
