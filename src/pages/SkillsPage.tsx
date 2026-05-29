import Skills from '../components/Skills';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Page Header */}
      <div className="py-20 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4"
          >
            Technical Expertise
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400 max-w-2xl"
          >
            Languages, frameworks, and tools I use to build scalable, data-driven applications.
          </motion.p>
        </div>
      </div>

      {/* Skills Grid */}
      <Skills />
    </div>
  );
};

export default SkillsPage;
