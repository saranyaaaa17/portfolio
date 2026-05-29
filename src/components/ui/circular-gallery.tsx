import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

// A simple utility for conditional class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
}

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string; 
    text: string;
    pos?: string;
    by: string;
  };
  // optional action links
  github?: string;
  live?: string;
  screenshots?: string[] | string;
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Effect for auto-rotation when not scrolling
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation(prev => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Projects carousel"
        className={cn('w-full', className)}
        {...props}
      >
        <div className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-3 md:gap-6 md:px-6">
          {items.map((item) => (
            <article
              key={item.photo.url}
              className="group relative min-w-[84vw] max-w-[360px] snap-center overflow-hidden rounded-[1.75rem] border border-neutral-800 bg-neutral-900 shadow-2xl md:min-w-[560px] md:max-w-[640px]"
            >
              <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
                <img
                  src={item.photo.url}
                  alt={item.photo.text}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: item.photo.pos || 'center' }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-[70%]">
                      <h2 className="text-2xl md:text-4xl font-black tracking-tight">{item.common}</h2>
                      <em className="block text-sm md:text-base italic text-white/70">{item.binomial}</em>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/70">
                      Projects
                    </span>
                  </div>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                    {item.photo.text}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/60">
                    <span>Photo by: {item.photo.by}</span>
                    {item.github ? <span className="h-1 w-1 rounded-full bg-white/30" /> : null}
                    {item.github ? <span>Code available</span> : null}
                    {item.live ? <span className="h-1 w-1 rounded-full bg-white/30" /> : null}
                    {item.live ? <span>Live demo available</span> : null}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.github ? (
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
                        <Github className="h-4 w-4" /> View code
                      </a>
                    ) : null}

                    {item.live ? (
                      <a href={item.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-95">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    ) : null}

                    {item.screenshots ? (
                      <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/60">
                        <ImageIcon className="h-4 w-4" /> Preview
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
