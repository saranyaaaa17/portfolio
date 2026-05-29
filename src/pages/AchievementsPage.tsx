import Achievements from '../components/Achievements';
import { motion } from 'framer-motion';

const AchievementsPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Page Header */}
      <div className="py-20 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-gray-300 uppercase tracking-[0.3em] mb-4"
          >
            Recognition & Growth
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400 max-w-2xl"
          >
            Industry certifications, hackathons, and recognitions earned through continuous learning and community involvement.
          </motion.p>
        </div>
      </div>

      {/* Achievements Content */}
      <Achievements />
    </div>
  );
};

export default AchievementsPage;
