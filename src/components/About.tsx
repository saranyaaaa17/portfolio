import { motion } from 'framer-motion';
import { SectionContainer } from './ui';
import { BrainCircuit, Users, Clock3, BadgeCheck } from 'lucide-react';
import { revealUp, staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

const About = () => {
  const values = [
    {
      title: 'Teamwork',
      description: 'Collaborates smoothly and keeps delivery predictable.',
      icon: Users,
      accent: 'from-white/10 via-white/6 to-white/3'
    },
    {
      title: 'Time management',
      description: 'Prioritises clearly and keeps work moving on schedule.',
      icon: Clock3,
      accent: 'from-white/10 via-white/6 to-white/3'
    },
    {
      title: 'Leadership',
      description: 'Takes initiative and owns outcomes in team settings.',
      icon: BadgeCheck,
      accent: 'from-white/10 via-white/6 to-white/3'
    },
    {
      title: 'Adaptability',
      description: 'Learns new tools quickly across ML and full-stack work.',
      icon: BrainCircuit,
      accent: 'from-white/10 via-white/6 to-white/3'
    }
  ];

  return (
    <SectionContainer id="about" background="white">
      <div className="mb-10 inline-flex items-center gap-2 rounded-full border accent-border bg-white/5 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">Profile</span>
      </div>

      {/* Summary (updated from resume) */}
      <div className="reveal-mask overflow-hidden">
        <motion.div
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-14 space-y-5 text-base leading-relaxed text-gray-300 md:text-lg font-light"
        >
          <p>
            <span className="font-semibold text-white">AI/ML Engineer</span> building AI-powered apps, scalable backends, and full-stack web experiences with Python, FastAPI, and React.
          </p>

          <p>
            I focus on reliable systems that move ML models into production — from preprocessing and feature engineering to API design, async processing, and validation.
          </p>

          <p>
            Based in <span className="font-semibold text-white">Visakhapatnam</span>, graduating in <span className="font-semibold text-white">2026</span>, and open to entry-level roles in machine learning engineering and full-stack development.
          </p>
        </motion.div>
      </div>

      {/* Languages */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">Languages:</span>
        {['English', 'Telugu', 'Hindi'].map((lang) => (
          <span key={lang} className="rounded-full border accent-border bg-white/5 px-3 py-1 text-sm text-gray-300">
            {lang}
          </span>
        ))}
      </div>

      {/* Soft Skills / Values */}
      <div className="border-t border-white/10 pt-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h4 className="text-xl font-bold text-white">Soft Skills</h4>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 md:inline-flex">
            Team fit
          </span>
        </div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid gap-4 md:grid-cols-2"
        >
          {values.map((value, index) => (
            <motion.li
              key={index}
              variants={staggerItem}
              className="rounded-2xl border accent-border bg-white/5 p-4 backdrop-blur-xl"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${value.accent} text-black`}>
                  <value.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block font-semibold text-white">{value.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-300">{value.description}</span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

    </SectionContainer>
  );
};

export default About;
