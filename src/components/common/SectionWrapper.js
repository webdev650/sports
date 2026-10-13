'use client';

import { motion } from 'framer-motion';
import { SECTION_ANIMATIONS } from '@/lib/animationRegistry';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function SectionWrapper({
  children,
  id,
  animation = 'fade-up',
  className = '',
  containerClassName = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  diagonal = null, // 'top' | 'bottom' | 'both' | null
  bg = 'bg-background', // 'bg-background' | 'bg-surface' | 'bg-surface-subtle' | 'mesh'
}) {
  const isReduced = useReducedMotion();
  const selectedAnimation = SECTION_ANIMATIONS[animation] || SECTION_ANIMATIONS['fade-up'];

  const diagonalClasses = {
    top: 'clip-diagonal-top pt-16 md:pt-24',
    bottom: 'clip-diagonal-bottom pb-16 md:pb-24',
    both: 'clip-diagonal-both py-16 md:py-24',
  };

  const bgClasses = {
    'bg-background': 'bg-[#0A0A0A]',
    'bg-surface': 'bg-[#141414] border-y border-zinc-900',
    'bg-surface-subtle': 'bg-[#181818]',
    mesh: 'mesh-bg',
  };

  const animProps = isReduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.3 },
      }
    : {
        initial: selectedAnimation.initial,
        whileInView: selectedAnimation.whileInView,
        transition: selectedAnimation.transition,
      };

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${bgClasses[bg] || bg} ${diagonal ? diagonalClasses[diagonal] : 'py-16 md:py-24 lg:py-28'} ${className}`}
    >
      <motion.div
        {...animProps}
        viewport={{ once: true, margin: '-60px' }}
        className={containerClassName}
      >
        {children}
      </motion.div>
    </section>
  );
}
