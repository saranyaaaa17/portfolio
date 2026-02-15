import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from './ui';
import { staggerContainer, staggerItem, viewportConfig, expandTransition } from '../utils/motion';

import { thinkingProcessCards as cards } from '../data/thinkingProcess';

const ThinkingProcess = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <SectionContainer id="thinking" background="white">
      
      <SectionHeader 
        label="Strengths"
        title="Why Work With Me?"
      />

      {/* Interactive Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="space-y-4"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={staggerItem}
            onMouseEnter={() => setExpandedCard(card.id)}
            onMouseLeave={() => setExpandedCard(null)}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`p-8 rounded-xl border cursor-pointer transition-all duration-300 ${
                expandedCard === card.id
                  ? 'border-blue-500 bg-blue-900/20 shadow-md'
                  : 'border-neutral-800 bg-black shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500 text-white font-bold text-lg flex items-center justify-center">
                  {card.id}
                </div>
                
                <div className="flex-1">
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-100 mb-3">
                    {card.title}
                  </h4>
                  
                  {/* Summary */}
                  <p className="text-base text-gray-200 leading-relaxed mb-2">
                    {card.summary}
                  </p>
                  
                  {/* Expandable Detail */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedCard === card.id ? "auto" : 0,
                      opacity: expandedCard === card.id ? 1 : 0
                    }}
                    transition={expandTransition}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-200 leading-relaxed pt-3 border-t border-neutral-800 mt-3">
                      {card.detail}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

    </SectionContainer>
  );
};

export default ThinkingProcess;
