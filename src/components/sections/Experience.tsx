import { motion } from 'framer-motion';
import { SectionContainer, SectionHeader } from '../ui';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

import { experiences } from '../../data/experience';

const Experience = () => {

  return (
    <SectionContainer id="experience" background="white">
      
      <SectionHeader 
        label="Work Experience"
        title="Professional Journey"
      />

      {/* Timeline */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-900/20 before:via-blue-500 before:to-blue-900/20 md:before:left-8"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="relative md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-6 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-black shadow-md z-10" />

            {/* Content Card */}
            <div className="p-8 rounded-xl border border-neutral-800 bg-black shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-100 mb-2">
                      {exp.role}
                    </h3>
                    <a 
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-base text-gray-200">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-neutral-800">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </SectionContainer>
  );
};

export default Experience;
