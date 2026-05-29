import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { imageMeta } from '../../data/imageMeta';

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const closeRef = React.useRef<HTMLButtonElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(images.length - 1, i + 1));
    };
    document.addEventListener('keydown', onKey);
    // prevent background scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // autofocus close button when opened
    setTimeout(() => closeRef.current?.focus(), 0);

    // announce open
    const announceOpen = document.createElement('div');
    announceOpen.setAttribute('aria-live', 'polite');
    announceOpen.className = 'sr-only';
    announceOpen.textContent = `Opened preview, image ${index + 1} of ${images.length}`;
    document.body.appendChild(announceOpen);
    setTimeout(() => document.body.removeChild(announceOpen), 1000);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [images.length, onClose]);

  // Simple focus trap: keep focus inside the lightbox
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(el.querySelectorAll<HTMLElement>(focusableSelector)).filter((n) => !n.hasAttribute('disabled'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Keep an internal live region updated for image position
  const [internalLive, setInternalLive] = React.useState(`Image ${index + 1} of ${images.length}`);

  useEffect(() => {
    setInternalLive(`Image ${index + 1} of ${images.length}`);
  }, [index, images.length]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative max-w-full max-h-full"
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center border border-white/10 text-white hover:bg-black/80 z-20"
          ref={closeRef}
          aria-label="Close preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* internal announcement for screen readers */}
        <div aria-live="polite" className="sr-only">{internalLive}</div>

        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white z-20">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white z-20">
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Prefer WebP with LQIP fallback when available */}
        <div style={{ backgroundImage: `url(${(imageMeta as any)[images[index]]?.lqip ?? ''})` }}>
          <picture>
            {(imageMeta as any)[images[index]]?.webp && (
              <source type="image/webp" srcSet={(imageMeta as any)[images[index]].webp} />
            )}
            <img src={(imageMeta as any)[images[index]]?.webp ?? images[index]} alt={`screenshot ${index + 1}`} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" loading="lazy" decoding="async" />
          </picture>
        </div>
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white text-xs px-3 py-1 rounded-md">
            {index + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
