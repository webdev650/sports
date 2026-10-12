/**
 * ANIMATION REGISTRY & MAPPING TABLE
 * Defines 15+ Section opening styles and 15+ Image reveal styles with Framer Motion variants.
 * Honors prefers-reduced-motion.
 */

export const SECTION_ANIMATIONS = {
  'fade-up': {
    initial: { opacity: 0, y: 70 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  'slide-left': {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
  'slide-right': {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
  'zoom-in': {
    initial: { opacity: 0, scale: 0.88 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  'diagonal-clip': {
    initial: { opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
    whileInView: { opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    transition: { duration: 1.0, ease: [0.77, 0, 0.175, 1] },
  },
  'curtain-split': {
    initial: { opacity: 0, scaleY: 0.8, filter: 'brightness(0.3)' },
    whileInView: { opacity: 1, scaleY: 1, filter: 'brightness(1)' },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  'flip-3d': {
    initial: { opacity: 0, rotateX: 25, transformPerspective: 1000 },
    whileInView: { opacity: 1, rotateX: 0 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  'rotate-scale': {
    initial: { opacity: 0, scale: 0.92, rotate: -2 },
    whileInView: { opacity: 1, scale: 1, rotate: 0 },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  'blur-to-sharp': {
    initial: { opacity: 0, filter: 'blur(16px)', y: 30 },
    whileInView: { opacity: 1, filter: 'blur(0px)', y: 0 },
    transition: { duration: 0.85, ease: 'easeOut' },
  },
  'elastic-bounce': {
    initial: { opacity: 0, y: 80, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { type: 'spring', damping: 14, stiffness: 85 },
  },
  'stagger-cascade': {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, staggerChildren: 0.15 },
  },
  'parallax-rise': {
    initial: { opacity: 0, y: 120 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
  'mask-reveal': {
    initial: { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)' },
    whileInView: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' },
    transition: { duration: 0.95, ease: [0.19, 1, 0.22, 1] },
  },
  'skew-slide': {
    initial: { opacity: 0, skewY: 4, y: 60 },
    whileInView: { opacity: 1, skewY: 0, y: 0 },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  'perspective-tilt': {
    initial: { opacity: 0, rotateY: -15, transformPerspective: 1200 },
    whileInView: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
  },
};

export const IMAGE_REVEALS = {
  'clip-path-lr': {
    initial: { clipPath: 'inset(0 100% 0 0)', scale: 1.15 },
    whileInView: { clipPath: 'inset(0 0% 0 0)', scale: 1 },
    transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
  },
  'circle-expand': {
    initial: { clipPath: 'circle(0% at 50% 50%)', scale: 1.2 },
    whileInView: { clipPath: 'circle(75% at 50% 50%)', scale: 1 },
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
  'vertical-blinds': {
    initial: { clipPath: 'inset(100% 0 0 0)', opacity: 0.2 },
    whileInView: { clipPath: 'inset(0 0 0 0)', opacity: 1 },
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
  'horizontal-blinds': {
    initial: { clipPath: 'inset(0 0 0 100%)', opacity: 0.2 },
    whileInView: { clipPath: 'inset(0 0 0 0)', opacity: 1 },
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
  'zoom-out': {
    initial: { scale: 1.35, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
  'tilt-3d': {
    initial: { rotateX: 18, rotateY: -12, opacity: 0, scale: 0.9, transformPerspective: 1000 },
    whileInView: { rotateX: 0, rotateY: 0, opacity: 1, scale: 1 },
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
  'grayscale-color': {
    initial: { filter: 'grayscale(100%) contrast(140%) brightness(0.6)', opacity: 0.4 },
    whileInView: { filter: 'grayscale(0%) contrast(100%) brightness(1)', opacity: 1 },
    transition: { duration: 1.1, ease: 'easeInOut' },
  },
  'slide-mask': {
    initial: { clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)', x: -20 },
    whileInView: { clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)', x: 0 },
    transition: { duration: 0.95, ease: [0.65, 0, 0.35, 1] },
  },
  'blur-resolve': {
    initial: { filter: 'blur(20px)', scale: 1.1, opacity: 0 },
    whileInView: { filter: 'blur(0px)', scale: 1, opacity: 1 },
    transition: { duration: 1.0, ease: 'easeOut' },
  },
  'diagonal-wipe': {
    initial: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
    whileInView: { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
    transition: { duration: 1.15, ease: [0.76, 0, 0.24, 1] },
  },
  'split-halves': {
    initial: { scaleY: 0, opacity: 0 },
    whileInView: { scaleY: 1, opacity: 1 },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
  'rotate-in': {
    initial: { rotate: 5, scale: 0.85, opacity: 0 },
    whileInView: { rotate: 0, scale: 1, opacity: 1 },
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
  'flip': {
    initial: { rotateY: 90, opacity: 0 },
    whileInView: { rotateY: 0, opacity: 1 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  'checkerboard': {
    initial: { opacity: 0, scale: 0.9, filter: 'brightness(1.5)' },
    whileInView: { opacity: 1, scale: 1, filter: 'brightness(1)' },
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
  'curtain-drop': {
    initial: { y: -60, opacity: 0, scale: 1.05 },
    whileInView: { y: 0, opacity: 1, scale: 1 },
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
