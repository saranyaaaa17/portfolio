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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(images.length - 1, i + 1));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

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
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center border border-white/10 text-white hover:bg-black/80 z-20"
          aria-label="Close preview"
        >
          <X className="w-4 h-4" />
        </button>

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
