'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMAGE_REVEALS } from '@/lib/animationRegistry';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function RevealImage({
  src,
  alt = 'India’s Biggest Sports Festival 2026',
  variant = 'clip-path-lr',
  width = 800,
  height = 600,
  className = '',
  containerClassName = '',
  priority = false,
  aspectRatio = 'aspect-[4/3]',
  overlay = true,
  fallbackSrc,
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const isReduced = useReducedMotion();
  const revealVariant = IMAGE_REVEALS[variant] || IMAGE_REVEALS['clip-path-lr'];

  const motionProps = isReduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.4 },
      }
    : {
        initial: revealVariant.initial,
        whileInView: revealVariant.whileInView,
        transition: revealVariant.transition,
      };

  return (
    <div
      className={`relative overflow-hidden group select-none ${aspectRatio} ${containerClassName}`}
    >
      <motion.div
        {...motionProps}
        viewport={{ once: true, margin: '-40px' }}
        className="w-full h-full relative"
      >
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onError={() => {
            if (fallbackSrc) setImgSrc(fallbackSrc);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${className}`}
        />

        {/* Gradient overlay for broadcast legibility */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
        )}

        {/* Interactive red/gold accent sheen on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-brand-red/20 via-transparent to-brand-gold/15 pointer-events-none" />
      </motion.div>
    </div>
  );
}
