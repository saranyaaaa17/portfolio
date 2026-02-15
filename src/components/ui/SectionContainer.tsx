import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '../../utils/motion';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  background?: 'white' | 'gray';
  className?: string; // override default
  animate?: boolean;
}

/**
 * Section Container Component
 * Provides consistent layout, max-width, padding, and spacing
 */
const SectionContainer = ({ 
  children, 
  id,
  background = 'white',
  className = '',
  animate = true
}: SectionContainerProps) => {
  const backgrounds = {
    white: 'bg-black',
    gray: 'bg-black'
  };

  const content = (
    <section 
      id={id}
      className={`py-24 px-6 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );

  if (animate) {
    return (
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={viewportConfig}
        transition={fadeInUp.transition}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default SectionContainer;
