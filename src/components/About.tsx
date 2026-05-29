import { motion } from 'framer-motion';
import { SectionContainer } from './ui';
import { revealUp, staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

const About = () => {
  const values = [
    {
      title: "Teamwork",
      description: "Collaborating effectively within teams to deliver consistent, reliable results."
    },
    {
      title: "Time Management",
      description: "Delivering work on schedule by prioritising tasks and managing effort efficiently."
    },
    {
      title: "Leadership",
      description: "Taking initiative, guiding peers, and owning outcomes — demonstrated through NCC 'A' certification and college projects."
    },
    {
      title: "Adaptability",
      description: "Quick to learn new tools, frameworks, and domains — from ML internships to full-stack development."
    }
  ];

  return (
    <SectionContainer id="about" background="white">

      {/* Summary (updated from resume) */}
      <div className="reveal-mask overflow-hidden">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6 text-lg text-gray-200 leading-relaxed mb-16 font-light"
        >
          <p>
            <span className="font-semibold text-white">AI/ML Engineer</span> with experience building AI-powered applications, scalable backend systems, and full-stack web applications using Python, FastAPI, and React. Skilled in REST APIs, LLM integration, vector databases, cloud deployment, and machine learning workflows with strong problem-solving and debugging abilities.
          </p>

          <p>
            I focus on building reliable systems that connect ML models to production workflows — from data preprocessing and feature engineering to API design and asynchronous background processing. I enjoy working end-to-end on product features and improving reliability through testing and validation.
          </p>

          <p>
            Currently based in <span className="font-semibold text-white">Visakhapatnam</span>, graduating in <span className="font-semibold text-white">2026</span>. Open to entry-level roles in machine learning engineering and full-stack development.
          </p>
        </motion.div>
      </div>

      {/* Languages */}
      <div className="mb-10 flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Languages:</span>
        {['English', 'Telugu', 'Hindi'].map((lang) => (
          <span key={lang} className="px-3 py-1 bg-white/5 border border-neutral-800 text-gray-300 text-sm rounded-full">
            {lang}
          </span>
        ))}
      </div>

      {/* Soft Skills / Values */}
      <div className="pt-10 border-t border-neutral-800">
        <h4 className="text-xl font-bold text-gray-100 mb-8">Soft Skills</h4>

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
