import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Briefcase, Trophy, Layers3, Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { imageMeta } from '../data/imageMeta';
import { experiences } from '../data/experience';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';
import SignInFlowOne from '../components/ui/sign-in-flow-1';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <SignInFlowOne />

      {/* Stats Strip */}
      <Stats />

      {/* Preview Sections */}
      <section className="relative bg-black px-6 py-20 md:px-12 md:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute right-16 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/4 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-24 md:space-y-32">

          {/* Featured Projects Preview */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8 rounded-[2rem] border accent-border bg-white/5 p-6 md:p-8"
          >
            <motion.div variants={staggerItem} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300">Projects</p>
                <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">A few things I’ve built</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                  A short list of projects I’ve worked on.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gray-200 transition-colors hover:text-white group"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="group overflow-hidden rounded-[1.75rem] border accent-border bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/7"
                >
                  <div className="relative h-40 overflow-hidden border-b border-white/8 bg-black/70 md:h-52">
                    {project.screenshot ? (
                      <>
                        <div
                          className="absolute inset-0 bg-cover bg-center blur-[8px] scale-105 opacity-60"
                          style={{ backgroundImage: `url(${(imageMeta as any)[project.screenshot]?.lqip ?? project.screenshot})` }}
                        />
                        <img
                          src={project.screenshot}
                          alt={`${project.title} screenshot`}
                          className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                          decoding="async"
                        />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(0,0,0,0.92)_72%)] text-center">
                        <div className="space-y-3">
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                            <ImageIcon className="h-5 w-5" />
                          </div>
                          <div className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-gray-200">
                            Under working
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="h-1 w-full accent-gradient-bg opacity-90" />
                  <div className="flex items-start justify-between gap-5 p-6 md:p-8">
                    <div className="flex-1">
                          <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border accent-border bg-black/70">
                              <Code2 className="h-4 w-4 text-gray-100" />
                            </div>
                        <h3 className="text-lg font-bold text-gray-100 md:text-xl">{project.title}</h3>
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="rounded-lg border accent-border bg-black/70 px-2.5 py-1 text-xs font-medium text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-gray-600 px-2 py-1">+{project.techStack.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <span className="flex-shrink-0 text-2xl font-black text-white/15 transition-colors group-hover:text-white/35">
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors hover:text-white"
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
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300">Experience</p>
                <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">Experience</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                  Internships and internships learnings.
                </p>
              </div>
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gray-200 transition-colors hover:text-white group"
              >
                Full Timeline
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4">
              {experiences.slice(0, 2).map((exp, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  className="group rounded-[1.75rem] border accent-border bg-white/5 p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/7 md:p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border accent-border bg-black/70">
                      <Briefcase className="h-5 w-5 text-gray-100" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-bold text-gray-100">{exp.role}</h3>
                        <span className="whitespace-nowrap rounded-full border accent-border bg-black/60 px-3 py-1 text-xs text-gray-400">{exp.period}</span>
                      </div>
                      <p className="text-sm text-gray-200 font-medium mt-1">{exp.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors hover:text-white"
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
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-300">Achievements</p>
                <h2 className="text-3xl font-black tracking-tighter text-white md:text-5xl">Achievements</h2>
                <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                  Certifications and events I’ve been part of.
                </p>
              </div>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-gray-200 transition-colors hover:text-white group"
              >
                View All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div variants={staggerItem} className="rounded-[1.75rem] border accent-border bg-white/5 p-6 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border accent-border bg-black/70">
                    <Trophy className="h-7 w-7 text-gray-100" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-gray-100">11 Certifications</h3>
                    <p className="text-sm text-gray-400">Oracle, HackerRank, FreeCodeCamp, GeeksforGeeks & more</p>
                  </div>
                </div>
                  <div className="flex flex-wrap gap-2">
                  {['GDG WowVizag', 'HackVortex', 'Google Agentic AI'].map((h, i) => (
                    <span key={i} className="rounded-full border accent-border bg-black/60 px-3 py-1.5 text-xs font-medium text-gray-200">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-6 sm:hidden">
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-200 transition-colors hover:text-white"
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
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 px-6 py-16 text-center backdrop-blur-xl md:px-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2">
              <Layers3 className="h-4 w-4 text-white" />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-300">Contact</span>
            </div>
            <h2 className="mb-6 text-3xl font-black tracking-tighter text-white md:text-5xl">
              Let’s talk
            </h2>
            <p className="mx-auto mb-10 max-w-xl leading-relaxed text-gray-400">
              I’m open to internships and entry-level roles.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-black shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-white/20 hover:opacity-95"
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
