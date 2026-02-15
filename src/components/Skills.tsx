import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader, Tag } from './ui';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { skillCategories } from '../data/skills';

const Skills = () => {

  return (
    <SectionContainer id="skills" background="gray">
      
      <SectionHeader 
        label="Technical Skills"
        title="Tools & Technologies"
      />

      {/* Skill Categories */}
      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.h4 variants={staggerItem} className="text-xl font-bold text-gray-100 mb-6 tracking-tight">
              {category.title}
            </motion.h4>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <Tag variant="outline">{skill}</Tag>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

    </SectionContainer>
  );
};

export default Skills;
