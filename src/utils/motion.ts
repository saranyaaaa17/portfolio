import { Variants, TargetAndTransition, Transition } from 'framer-motion';

interface AnimationConfig {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
}

export const fadeInUp: AnimationConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const fadeIn: AnimationConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smoother feel
    }
  }
};

// Mask Reveal Variant
export const revealUp: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const revealStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Viewport config for scroll-triggered animations
export const viewportConfig = {
  once: true,
  margin: "-20%" // More natural trigger point
} as const;

// Transition for expandable sections
export const expandTransition = {
  duration: 0.4,
  ease: "easeOut"
} as const;
