import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { revealUp, staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { projects } from '../data/projects';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-20"
        >
          <motion.h2 variants={staggerItem} className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">
            Selected Work
          </motion.h2>
          <div className="reveal-mask overflow-hidden">
            <motion.h3 variants={revealUp} className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Projects
            </motion.h3>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className={`group border rounded-2xl overflow-hidden transition-all duration-500 ${
                expandedProject === project.id
                  ? 'border-blue-500 bg-blue-950/10 shadow-2xl'
                  : 'border-zinc-800/50 bg-black backdrop-blur-sm shadow-sm hover:border-blue-500/50'
              }`}
            >
              {/* Project Header - Always Visible */}
              <button
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                className="w-full p-8 text-left flex items-start justify-between gap-6 hover:bg-black/50 transition-colors duration-200"
              >
                <div className="flex-1">
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-gray-100 mb-3 leading-tight">
                    {project.title}
                  </h4>
                  
                  {/* Summary */}
                  <p className="text-base text-gray-200 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  
                  {/* Tech Stack Preview - First 4 */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black border border-neutral-800 text-gray-200 text-xs font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1 font-medium">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expand Icon */}
                <motion.div
                  animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    expandedProject === project.id ? 'bg-blue-900/20 border border-blue-900' : 'bg-black border border-neutral-800'
                  }`}
                >
                  <ChevronDown className={`w-5 h-5 ${
                    expandedProject === project.id ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 space-y-8 border-t border-neutral-700/60 pt-8">
                      
                      {/* Problem */}
                      <div>
                        <h5 className="text-base font-bold text-gray-100 mb-3">Problem</h5>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div>
                        <h5 className="text-base font-bold text-gray-100 mb-3">Approach</h5>
                        <p className="text-sm text-gray-200 leading-relaxed">
                          {project.approach}
                        </p>
                      </div>

                      {/* Tools Used - Full Tech Stack */}
                      <div>
                        <h5 className="text-base font-bold text-gray-100 mb-3">Tools Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-blue-900/30 text-blue-400 text-sm font-medium rounded-lg border border-blue-900/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h5 className="text-base font-bold text-gray-100 mb-3">Challenges</h5>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learnings */}
                      <div>
                        <h5 className="text-base font-bold text-gray-100 mb-3">Learnings</h5>
                        <ul className="space-y-2">
                          {project.learnings.map((learning, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-neutral-700">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-xl font-semibold hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
