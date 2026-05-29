import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Trophy } from 'lucide-react';
import { projects } from '../data/projects';
import { experiences } from '../data/experience';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />

      {/* Stats Strip */}
      <Stats />

      {/* Preview Sections */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Featured Projects Preview */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">Selected Work</p>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Featured Projects</h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  className="group p-6 md:p-8 rounded-2xl border border-neutral-800 bg-black hover:border-blue-500/50 hover:bg-blue-950/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Code className="w-4 h-4 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-100">{project.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-black border border-neutral-800 text-gray-400 text-xs font-medium rounded-lg">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-gray-600 px-2 py-1">+{project.techStack.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <span className="text-2xl font-black text-neutral-800 group-hover:text-blue-900/50 transition-colors flex-shrink-0">
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Experience Preview */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">Work History</p>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Experience</h2>
              </div>
              <Link
                to="/experience"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
              >
                Full Timeline
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {experiences.slice(0, 2).map((exp, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group p-6 md:p-8 rounded-2xl border border-neutral-800 bg-black hover:border-blue-500/50 hover:bg-blue-950/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-bold text-gray-100">{exp.role}</h3>
                        <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-neutral-800 whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-sm text-blue-400 font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Full Timeline <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Achievements Teaser */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={staggerItem} className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-3">Recognition</p>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Achievements</h2>
              </div>
              <Link
                to="/achievements"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
              >
                View All
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="p-6 md:p-10 rounded-2xl border border-neutral-800 bg-black">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-1">11 Certifications</h3>
                    <p className="text-sm text-gray-400">Oracle, HackerRank, FreeCodeCamp, GeeksforGeeks & more</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['GDG WowVizag', 'HackVortex', 'Google Agentic AI'].map((h, i) => (
                    <span key={i} className="px-3 py-1.5 bg-blue-900/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center py-16 border-t border-neutral-800"
          >
            <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Let's Work Together</p>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
              Open to Opportunities
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              I'm actively looking for internship and full-time roles in ML, full-stack development, and AI engineering. Let's connect.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default HomePage;
