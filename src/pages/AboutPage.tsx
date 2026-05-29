import About from '../components/About';
import Education from '../components/sections/Education';
import { motion } from 'framer-motion';
import { staggerItem, viewportConfig } from '../utils/motion';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Page Header */}
      <div className="py-20 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={staggerItem}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
            className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4"
          >
            Who I Am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            About Me
          </motion.h1>
        </div>
      </div>

      {/* About Content */}
      <About />

      {/* Education */}
      <Education />
    </div>
  );
};

export default AboutPage;
