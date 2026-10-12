'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCounter({
  target,
  prefix = '',
  suffix = '',
  label,
  displayValue,
  duration = 2000,
  accent = 'red', // 'red' | 'gold'
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * target);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  const formattedNumber =
    target % 1 !== 0
      ? count.toFixed(1)
      : Math.floor(count).toLocaleString('en-IN');

  const accentColor = accent === 'gold' ? 'text-brand-gold' : 'text-brand-red';

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center p-6 bg-zinc-950/80 border border-zinc-800/80 clip-angled group hover:border-zinc-700 transition-all duration-300"
    >
      {/* Corner badge accent */}
      <div className={`absolute top-0 right-0 w-3 h-3 ${accent === 'gold' ? 'bg-brand-gold' : 'bg-brand-red'}`} />

      {/* Large Stroke Number behind as watermark */}
      <div className="absolute font-display text-7xl sm:text-8xl text-stroke-white opacity-5 select-none pointer-events-none -bottom-2 right-2">
        {displayValue || `${prefix}${target}${suffix}`}
      </div>

      {/* Main Stat Number */}
      <div className="flex items-baseline font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white z-10">
        {prefix && <span className={`${accentColor} mr-1`}>{prefix}</span>}
        <motion.span
          className={accent === 'gold' ? 'drop-shadow-[0_0_12px_rgba(245,179,1,0.5)]' : 'drop-shadow-[0_0_12px_rgba(225,6,0,0.5)]'}
        >
          {isInView ? formattedNumber : '0'}
        </motion.span>
        {suffix && <span className={`${accentColor} ml-1`}>{suffix}</span>}
      </div>

      {/* Label */}
      <div className="mt-2 text-xs sm:text-sm font-heading tracking-widest text-zinc-400 uppercase font-semibold text-center z-10">
        {label}
      </div>
    </div>
  );
}
