import About from '../components/About';
import Education from '../components/sections/Education';
import { motion } from 'framer-motion';
import { staggerItem, viewportConfig } from '../utils/motion';
import { Sparkles } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Page Header */}
      <div className="border-b accent-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <motion.p
            variants={staggerItem}
            initial="hidden"
            animate="visible"
            viewport={viewportConfig}
            className="mb-4 inline-flex items-center gap-2 rounded-full border accent-border bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-300"
          >
            <Sparkles className="h-4 w-4 text-white" />
            Who I Am
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-5xl font-black tracking-tighter text-white md:text-7xl"
          >
            About <span className="accent-gradient-text">Me</span>
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
