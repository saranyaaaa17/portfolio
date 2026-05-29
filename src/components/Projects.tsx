import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Lightbox from './ui/Lightbox';
import { projects } from '../data/projects';
import { imageMeta } from '../data/imageMeta';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

const Projects = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!trackRef.current) return;
      const children = Array.from(trackRef.current.children) as HTMLElement[];
      const center = (trackRef.current.scrollLeft || 0) + trackRef.current.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      children.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(center - cCenter);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setCurrentIndex(best);
    };

    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    if (!trackRef.current) return;
    const children = Array.from(trackRef.current.children) as HTMLElement[];
    const idx = clamp(i, 0, children.length - 1);
    const el = children[idx];
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setCurrentIndex(idx);
  };

  const openLightbox = (images?: string[] | string | null, index = 0) => {
    if (!images) return;
    setLightboxImages(Array.isArray(images) ? images : [images]);
    setLightboxIndex(index);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black text-white">Projects</h2>
          <div className="flex items-center gap-2">
            <button aria-label="prev" onClick={() => scrollToIndex(currentIndex - 1)} className="p-2 rounded-lg border accent-border bg-white/2 text-white hover:bg-white/5 transition">
              ‹
            </button>
            <button aria-label="next" onClick={() => scrollToIndex(currentIndex + 1)} className="p-2 rounded-lg border accent-border bg-white/2 text-white hover:bg-white/5 transition">
              ›
            </button>
          </div>
        </div>

        <div ref={trackRef} className="relative -mx-4 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x py-6">
          <div className="flex gap-6 px-4">
            {projects.map((project, i) => (
              <div key={project.id} className="snap-center flex-shrink-0 w-[320px] md:w-[420px] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 relative group">
                <div className="w-full h-56 bg-neutral-900 overflow-hidden">
                  {project.screenshot ? (
                    <picture>
                      {imageMeta[project.screenshot]?.webp && (
                        <source type="image/webp" srcSet={imageMeta[project.screenshot].webp} />
                      )}
                      <img src={project.screenshot} alt={`${project.title} screenshot`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                    </picture>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3">{project.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {(project.techStack ?? []).slice(0, 6).map((t, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded-md bg-white/3 text-gray-100 border border-neutral-800">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="mb-4 text-sm text-gray-200 max-h-28 overflow-auto">{project.problem ?? project.summary}</p>
                    <div className="flex items-center justify-center gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white border border-neutral-700 hover:bg-white/5 transition">
                        <Github className="w-4 h-4" /> View code
                      </a>
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-semibold hover:opacity-95 transition">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      ) : (
                        <button disabled className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/6 text-gray-400">No demo</button>
                      )}
                      <button onClick={() => openLightbox(project.screenshots ?? project.screenshot, 0)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/3 text-white border border-neutral-700 hover:bg-white/5 transition">
                        <ImageIcon className="w-4 h-4" /> Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((_, i) => (
            <button key={i} onClick={() => scrollToIndex(i)} className={`h-2 w-8 rounded-full transition ${i === currentIndex ? 'bg-white' : 'bg-white/10'}`} aria-label={`Go to project ${i + 1}`} />
          ))}
        </div>

        {lightboxImages && (
          <Lightbox images={lightboxImages} initialIndex={lightboxIndex} onClose={() => setLightboxImages(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects;
