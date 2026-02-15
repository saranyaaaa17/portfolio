import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { stats } from '../data/stats';

const Stats = () => {

  return (
    <div className="py-12 md:py-16 px-6 md:px-12 bg-black border-y border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-bold text-gray-100 mb-2">
                {stat.value}
                {stat.suffix && (
                  <span className="text-xl md:text-2xl text-gray-200">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm font-medium text-gray-200 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
