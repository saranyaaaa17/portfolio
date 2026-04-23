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
            I am a <span className="font-semibold text-white">Backend-focused Computer Science student</span> skilled in <span className="font-semibold text-blue-400">Python, FastAPI, and REST API development</span>. I specialize in building scalable backend solutions and have hands-on experience in developing full-stack and AI-based applications.
          </p>
          
          <p>
            My approach is driven by strong problem-solving skills and a passion for creating efficient systems. Through real-world projects and internships, I've developed a deep understanding of how to bridge the gap between complex AI models and user-centric web applications.
          </p>
          
          <p>
            I completed my B.Tech in Computer Science and Engineering at <span className="font-semibold text-white">Baba Institute of Technology and Sciences</span> in <span className="font-semibold text-white">March 2026</span>. I'm looking for opportunities where I can apply my expertise in backend architecture and AI integration to solve meaningful problems.
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
