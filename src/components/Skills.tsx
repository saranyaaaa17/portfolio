import { motion } from 'framer-motion';
import { SectionContainer, Tag } from './ui';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { skillCategories } from '../data/skills';

const Skills = () => {

  return (
    <SectionContainer id="skills" background="gray">
      

      {/* Skill Categories with simple proficiency bars */}
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <motion.h4 variants={staggerItem} className="text-xl font-bold text-gray-100 mb-6 tracking-tight">{category.title}</motion.h4>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, i) => {
                // lightweight heuristic for skill proficiency
                const proficiencyMap: Record<string, number> = {
                  Python: 90, 'TypeScript': 70, 'JavaScript': 75, 'React.js': 80, 'FastAPI': 72, 'LangChain': 65,
                  'OpenAI/Gemini APIs': 68, 'ChromaDB': 60, 'Docker': 60, 'PostgreSQL': 65, 'Redis': 60
                };
                const pct = proficiencyMap[skill] ?? 55;

                return (
                  <motion.div key={i} variants={staggerItem} className="p-3 bg-black border border-neutral-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-gray-100">{skill}</div>
                      <div className="text-xs text-gray-400">{pct}%</div>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${pct}%` }} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </SectionContainer>
  );
};

export default Skills;
