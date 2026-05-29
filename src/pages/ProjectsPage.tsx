import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon } from 'lucide-react';
import Lightbox from '../components/ui/Lightbox';
import { projects } from '../data/projects';
import { imageMeta } from '../data/imageMeta';
import { staggerContainer, staggerItem, viewportConfig } from '../utils/motion';

const ProjectsPage = () => {
  const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lastFocusRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null); // flex track container (children are articles)
  const scrollRef = useRef<HTMLDivElement | null>(null); // scrollable wrapper
  const leftSpacerRef = useRef<HTMLDivElement | null>(null);
  const rightSpacerRef = useRef<HTMLDivElement | null>(null);
  const [spacerWidth, setSpacerWidth] = useState(0);
  const [liveMessage, setLiveMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => projects.map(() => false));
  const [showShortcuts, setShowShortcuts] = useState(false);

  const getProjectMedia = (project: (typeof projects)[number]) => {
    const screenshots = project.screenshots ?? (project.screenshot ? [project.screenshot] : []);
    const primary = screenshots[0] ?? null;
    const hasScreenshot = Boolean(primary);
    return { screenshots, primary, hasScreenshot };
  };

  const openLightbox = (images?: string[] | string | null, index = 0) => {
    if (!images) return;
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    setLightboxImages(Array.isArray(images) ? images : [images]);
    setLightboxIndex(index);
    setLiveMessage(`Opened preview for ${Array.isArray(images) ? images[0] : images ? images.toString() : ''}`);
  };

  const closeLightbox = () => {
    setLightboxImages(null);
    setTimeout(() => lastFocusRef.current?.focus(), 0);
    setLiveMessage('Closed preview');
  };

  const clamp = (v:number, min:number, max:number) => Math.max(min, Math.min(max, v));

  const scrollToIndex = (i:number) => {
    if (!containerRef.current) return;
    const children = Array.from(containerRef.current.children) as HTMLElement[];
    const idx = clamp(i, 0, children.length - 1);
    const el = children[idx];
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setCurrentIndex(idx);
    setLiveMessage(`Project ${idx + 1} of ${children.length}`);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const active = document.activeElement as HTMLElement | null;
      if (!active || !containerRef.current.contains(active)) return;
      const articles = Array.from(containerRef.current.querySelectorAll<HTMLElement>('article[role="article"]'));
      if (!articles.length) return;
      let idx = articles.indexOf(active);
      if (idx === -1) idx = 0;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const ni = Math.max(0, idx - 1);
        articles[ni].focus();
        setLiveMessage(`Project ${ni + 1} of ${articles.length}`);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const ni = Math.min(articles.length - 1, idx + 1);
        articles[ni].focus();
        setLiveMessage(`Project ${ni + 1} of ${articles.length}`);
      }
      if (e.key === 'Home') {
        e.preventDefault();
        articles[0].focus();
        setLiveMessage(`Project 1 of ${articles.length}`);
      }
      if (e.key === 'End') {
        e.preventDefault();
        articles[articles.length - 1].focus();
        setLiveMessage(`Project ${articles.length} of ${articles.length}`);
      }
    };

    document.addEventListener('keydown', onKey);
    const onShortcut = (ev: KeyboardEvent) => {
      if (ev.key === '?' || (ev.key === '/' && ev.shiftKey)) {
        ev.preventDefault();
        setShowShortcuts((s) => !s);
      }
      if (ev.key === 'Escape') setShowShortcuts(false);
    };
    document.addEventListener('keydown', onShortcut);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Track scroll to determine centered (active) card index
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(containerRef.current?.children ?? []) as HTMLElement[];
      const center = (el.scrollLeft || 0) + el.clientWidth / 2;
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

    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // compute spacer width so first/last cards center inside viewport
  useEffect(() => {
    const compute = () => {
      const track = containerRef.current;
      const viewport = scrollRef.current;
      if (!track || !viewport) return;
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return;
      const TARGET_VW = 1366; // preferred desktop width to match
      const vw = Math.min(viewport.clientWidth, TARGET_VW);
      const cw = first.clientWidth;
      // add a small margin so cards don't touch viewport edges (subtract 32px)
      const pad = Math.max(32, Math.round((vw - cw) / 2) - 32);
      setSpacerWidth(pad);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Page Header */}
      <div className="py-20 px-6 md:px-12 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold text-gray-300 uppercase tracking-[0.3em] mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg text-gray-400"
          >
            A polished card showcase of selected work. Hover a project to reveal the summary, source code, and live demo.
          </motion.p>
        </div>
      </div>

      {/* Featured Stack - horizontal carousel */}
      <div className="px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
          <div />
          <div className="flex items-center gap-3">
            <button aria-label="prev" onClick={() => scrollToIndex(currentIndex - 1)} className="p-2 rounded-lg border accent-border bg-white/2 text-white hover:bg-white/5 transition">
              ‹
            </button>
            <button aria-label="next" onClick={() => scrollToIndex(currentIndex + 1)} className="p-2 rounded-lg border accent-border bg-white/2 text-white hover:bg-white/5 transition">
              ›
            </button>
          </div>
        </div>

        <div className="perspective-3d">
        <div ref={scrollRef} className="relative -mx-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x py-6">
          {showShortcuts && (
            <div className="fixed bottom-6 left-6 z-50 bg-black/75 border border-white/10 text-white p-4 rounded-lg shadow-xl">
              <div className="text-sm font-semibold mb-1">Keyboard Shortcuts</div>
              <div className="text-xs text-gray-300">← / → : Move between projects</div>
              <div className="text-xs text-gray-300">Home / End : Jump first/last</div>
              <div className="text-xs text-gray-300">Enter / Space : Open preview</div>
              <div className="text-xs text-gray-300">? : Toggle this help</div>
            </div>
          )}
          <motion.div>
            <div ref={leftSpacerRef} style={{ width: spacerWidth }} />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex gap-6 px-6"
            ref={containerRef}
          >
            {projects.map((project, idx) => (
              (() => {
                const media = getProjectMedia(project);
                return (
              <motion.article
                key={project.id}
                variants={staggerItem}
                  whileHover={{ y: -10, scale: 1.045, rotate: -1 }}
                  animate={idx === currentIndex ? { scale: 1.03, boxShadow: '0 40px 90px rgba(0,0,0,0.65), 0 14px 40px rgba(0,0,0,0.5)' } : { scale: 1, boxShadow: '0 18px 60px rgba(0,0,0,0.35)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                tabIndex={0}
                role="article"
                aria-label={`Project ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(project.screenshots ?? project.screenshot, 0);
                  }
                }}
                className="card-3d snap-center flex-shrink-0 w-[320px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px] group overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#141414] shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-lime-400 flex flex-col"
                style={{ height: 'var(--project-card-height)' }}
              >
              <div className="relative overflow-hidden bg-black/50 h-44 md:h-56 lg:h-60">
                {media.hasScreenshot ? (
                  <>
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${(imageMeta as any)[media.primary ?? '']?.lqip ?? media.primary})` }} />
                    <img
                      src={media.primary ?? ''}
                      alt={`${project.title} screenshot`}
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] transition-opacity duration-700 ${loaded[idx] ? 'opacity-100' : 'opacity-0'}`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setLoaded((s) => { const n = [...s]; n[idx] = true; return n; })}
                    />
                  </>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(0,0,0,0.92)_70%)] px-6 text-center">
                    <div className="space-y-3">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80">
                        <ImageIcon className="h-6 w-6" />
                      </div>
                      <div className="rounded-full border border-white/10 bg-black/55 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-gray-200">
                        Under working
                      </div>
                      <p className="text-sm text-gray-400">Screenshot coming soon</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/70 backdrop-blur-md">
                    {media.hasScreenshot ? 'Selected work' : 'Under working'}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.75)]" />
                </div>
              </div>

              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Project</p>
                <h3 className="mt-2 text-3xl md:text-4xl font-black tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-3">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 w-full mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-lime-400"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/3 px-4 py-3 text-sm font-semibold text-gray-500">
                      No demo
                    </div>
                  )}

                  <button
                    onClick={() => openLightbox(media.screenshots, 0)}
                    aria-label={`Preview ${project.title} screenshots`}
                    disabled={!media.hasScreenshot}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-lime-400 ${media.hasScreenshot ? 'border-white/10 bg-white/3 hover:bg-white/5' : 'cursor-not-allowed border-white/5 bg-white/2 text-gray-500 opacity-70'}`}
                  >
                    <ImageIcon className="h-4 w-4" />
                    {media.hasScreenshot ? 'Preview' : 'Under working'}
                  </button>
                </div>
              </div>

              <div className={`h-1 w-full bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 opacity-80 ${idx === currentIndex ? 'neon-pulse' : ''}`} />
            </motion.article>
                );
              })()
            ))}
          </motion.div>
          <motion.div>
            <div ref={rightSpacerRef} style={{ width: spacerWidth }} />
          </motion.div>
        </div>
        </div>

        <div aria-live="polite" className="sr-only">{liveMessage}</div>

        {lightboxImages && (
          <Lightbox images={lightboxImages} initialIndex={lightboxIndex} onClose={closeLightbox} />
        )}
        {/* Active indicator (dots + numeric) */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button key={i} onClick={() => scrollToIndex(i)} aria-label={`Go to project ${i + 1}`} className={`w-3 h-3 rounded-full transition ${i === currentIndex ? 'bg-white' : 'bg-white/10'}`} />
            ))}
          </div>
          <div className="text-sm text-gray-400">{currentIndex + 1} / {projects.length}</div>
        </div>
        {/* Persistent side arrows */}
          {(() => {
          const prevDisabled = currentIndex <= 0;
          const nextDisabled = currentIndex >= projects.length - 1;
          return (
            <>
              <button
                onClick={() => scrollToIndex(currentIndex - 1)}
                aria-label="Previous project"
                aria-disabled={prevDisabled}
                className={`hidden md:flex items-center justify-center fixed left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-opacity`}
                style={{ opacity: prevDisabled ? 0.35 : 0.9, pointerEvents: prevDisabled ? 'none' : 'auto' }}
              >
                ‹
              </button>

              <button
                onClick={() => scrollToIndex(currentIndex + 1)}
                aria-label="Next project"
                aria-disabled={nextDisabled}
                className={`flex items-center justify-center fixed right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-opacity`}
                style={{ opacity: nextDisabled ? 0.35 : 0.9, pointerEvents: nextDisabled ? 'none' : 'auto' }}
              >
                ›
              </button>
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default ProjectsPage;
