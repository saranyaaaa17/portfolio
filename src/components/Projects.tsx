import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Image as ImageIcon, Maximize2 } from 'lucide-react';
import Lightbox from './ui/Lightbox';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

import { projects } from '../data/projects';
import { imageMeta } from '../data/imageMeta';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const trackEvent = (action: string, projectId: number) => {
    // basic tracking hook - extend to analytics provider if desired
    try {
      // push to dataLayer if available
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({ event: 'project_click', action, projectId });
      }
    } catch (e) {
      // ignore
    }
    console.log('trackEvent', { action, projectId });
  };

  const openLightbox = (images?: string[] | string | null, index = 0, projectId?: number) => {
    if (!images) return;
    const imgs = Array.isArray(images) ? images : [images];
    setLightboxImages(imgs);
    setLightboxIndex(index);
    if (projectId) trackEvent('preview_open', projectId);
  };

  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        

        {/* Project Cards Grid - thumbnails + always-visible actions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem} className="group border border-neutral-800 rounded-2xl overflow-hidden bg-black shadow-sm transition-all">
              <div className="md:flex">
                {/* Thumbnail */}
                <div className="md:w-44 w-full h-40 bg-gradient-to-br from-blue-900/30 to-blue-800/10 flex items-center justify-center overflow-hidden relative">
                  {project.screenshot ? (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${imageMeta[project.screenshot]?.lqip ?? ''})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <picture>
                        {imageMeta[project.screenshot]?.webp && (
                          <source type="image/webp" srcSet={imageMeta[project.screenshot].webp} />
                        )}
                        <img src={project.screenshot} alt={`${project.title} screenshot`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </picture>
                    </div>
                  ) : (
                    <div className="text-sm text-blue-300 font-medium">Screenshot</div>
                  )}

                  {/* Hover CTA overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button onClick={() => openLightbox(project.screenshots ?? project.screenshot, 0, project.id)} className="inline-flex items-center gap-2 px-3 py-2 bg-black/60 text-white rounded-md border border-white/10 hover:bg-black/80">
                      <ImageIcon className="w-4 h-4" />
                      Preview
                    </button>
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('demo_click', project.id)} className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    ) : (
                      <button className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 text-gray-200 rounded-md" disabled>
                        <Maximize2 className="w-4 h-4" />
                        No demo
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-100 mb-2 leading-tight">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-3 leading-relaxed">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 6).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/2 text-gray-200 text-xs rounded-md border border-neutral-800">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-end gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md font-semibold border border-neutral-800 hover:bg-white/3 transition">View Code</a>
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition">Live Demo</a>
                      ) : (
                        <span className="text-xs text-gray-500">No demo</span>
                      )}
                    </div>
                  </div>

                  {/* Short expandable details (collapsed by default) */}
                  <div className="mt-4 text-sm text-gray-300">
                    {project.problem && <p className="mb-2"><strong className="text-gray-100">Problem:</strong> {project.problem}</p>}
                    {project.approach && <p className="mb-2"><strong className="text-gray-100">Approach:</strong> {project.approach}</p>}
                  </div>
                </div>
              </div>
              {/* Lightbox (mounted per-project via state) */}
              {lightboxImages && (
                <Lightbox images={lightboxImages} initialIndex={lightboxIndex} onClose={() => setLightboxImages(null)} />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
