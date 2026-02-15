import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from './ui';
import { revealUp, staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

const About = () => {
  const values = [
    {
      title: "Clarity",
      description: "Writing code and documentation that is easy for others to understand and maintain."
    },
    {
      title: "Structured Thinking",
      description: "Breaking down large problems into manageable, logical steps."
    },
    {
      title: "Consistency",
      description: "Consistently delivering reliable work over bursts of effort."
    }
  ];

  return (
    <SectionContainer id="about" background="white">
      
      <SectionHeader 
        label="About Me"
        title="Background & Approach"
      />
      
      {/* Main Content */}
      <div className="reveal-mask overflow-hidden">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6 text-lg text-gray-200 leading-relaxed mb-16 font-light"
        >
          <p>
            I am a Computer Science student based in{' '}
            <span className="font-semibold text-white">Visakhapatnam</span>, graduating in{' '}
            <span className="font-semibold text-white">2026</span>. My focus is on building a foundation in core computing principles while exploring{' '}
            <span className="font-semibold text-blue-400">machine learning</span>{' '}
            and{' '}
            <span className="font-semibold text-blue-400">web development</span>.
          </p>
          
          <p>
            I learn by building—taking concepts apart to understand how they work internally before applying them in new contexts. Through internships in ML and web development, I've learned that good software works{' '}
            <span className="font-semibold text-white">consistently</span>{' '}
            under real-world constraints.
          </p>
          
          <p>
            I'm looking for roles that value{' '}
            <span className="font-semibold text-white">technical consistency</span>{' '}
            and{' '}
            <span className="font-semibold text-white">clear thinking</span>. My goal is to build reliable systems that solve problems without unnecessary complexity.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="pt-12 border-t border-neutral-800">
        <h4 className="text-xl font-bold text-gray-100 mb-8">What I Value</h4>
        
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6"
        >
          {values.map((value, index) => (
            <motion.li 
              key={index}
              variants={staggerItem}
              className="flex items-start gap-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-100">{value.title}:</span>
                <span className="text-gray-200 ml-2">{value.description}</span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

    </SectionContainer>
  );
};

export default About;
