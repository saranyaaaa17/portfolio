import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { stats } from '../data/stats';

const Stats = () => {

  return (
    <div className="border-y border-white/10 bg-black px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">Snapshot</p>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white md:text-2xl">A quick glance at the work so far</h2>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-300 md:inline-flex">
            Live portfolio summary
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
            >
              <div className="mx-auto mb-4 h-1 w-12 rounded-full accent-gradient-bg" />
              <div className="mb-2 text-3xl font-bold text-white md:text-5xl">
                {stat.value}
                {stat.suffix && <span className="text-xl text-gray-300 md:text-2xl">{stat.suffix}</span>}
              </div>
              <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-gray-400 md:text-sm">
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
