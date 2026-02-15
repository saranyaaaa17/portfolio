import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../ui';
import { fadeInUp } from '../../utils/motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

import { educationList } from '../../data/education';

const Education = () => {

  return (
    <SectionContainer id="education" background="white">
      
      <SectionHeader 
        label="Education"
        title="Academic Journey"
      />

      <div className="space-y-8">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            className="p-8 rounded-xl border border-neutral-800 bg-black shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6 pb-6 border-b border-neutral-800">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-semibold text-gray-100">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      {edu.location}
                    </p>
                    {edu.status && (
                      <p className="text-sm text-blue-400/80 mt-1 font-medium italic">
                        {edu.status}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-200 bg-white/5 border border-neutral-800 px-4 py-2 rounded-lg">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 bg-blue-900/30 px-4 py-2 rounded-lg">
                  <Award className="w-4 h-4" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <ul className="space-y-3">
                {edu.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

    </SectionContainer>
  );
};

export default Education;
