'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user already saw loader this session to keep snappy transitions, but allow fresh loads
    const hasLoaded = sessionStorage.getItem('aoga_loader_seen');
    if (hasLoaded) {
      setShouldRender(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('aoga_loader_seen', 'true');
            setTimeout(() => setShouldRender(false), 900);
          }, 300);
          return 100;
        }
        // Accelerating ramp
        const increment = Math.max(1, Math.floor((100 - prev) * 0.12));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {!isDone ? (
        <div className="fixed inset-0 z-[99990] flex items-center justify-center bg-black overflow-hidden">
          {/* Background stadium light beams */}
          <div className="absolute inset-0 bg-red-mesh opacity-30 animate-pulse" />

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Animated Barbell SVG */}
            <div className="relative mb-8 w-64 h-24 flex items-center justify-center">
              <motion.div
                className="w-full flex items-center justify-center relative"
                animate={{
                  y: [12, -18, 8, -25, 0],
                  rotate: [0, -1, 1, -0.5, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Barbell Left Plates */}
                <div className="flex items-center space-x-1">
                  <div className="w-2.5 h-20 bg-brand-red rounded-sm border border-brand-red/80 shadow-[0_0_15px_#E10600]" />
                  <div className="w-3 h-16 bg-[#262626] rounded-sm border border-brand-gold/60 shadow-[0_0_8px_#F5B301]" />
                  <div className="w-2 h-12 bg-[#333333] rounded-sm" />
                </div>

                {/* Barbell Center Shaft with knurling */}
                <div className="h-3 w-40 bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 relative border-y border-zinc-500 shadow-md">
                  <div className="absolute inset-x-4 inset-y-0.5 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#555_2px,#555_4px)] opacity-50" />
                </div>

                {/* Barbell Right Plates */}
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-12 bg-[#333333] rounded-sm" />
                  <div className="w-3 h-16 bg-[#262626] rounded-sm border border-brand-gold/60 shadow-[0_0_8px_#F5B301]" />
                  <div className="w-2.5 h-20 bg-brand-red rounded-sm border border-brand-red/80 shadow-[0_0_15px_#E10600]" />
                </div>
              </motion.div>

              {/* Lifting chalk powder particles effect */}
              <motion.div
                className="absolute -bottom-4 w-12 h-1.5 bg-zinc-300/40 rounded-full blur-sm"
                animate={{ scaleX: [1, 1.8, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            </div>

            {/* Event Name */}
            <div className="font-heading text-xl tracking-widest text-zinc-400 uppercase mb-1">
              All Odisha Gym Association
            </div>
            <div className="font-heading text-2xl md:text-3xl tracking-wider text-white font-extrabold uppercase mb-4">
              INDIA&apos;S BIGGEST SPORTS FESTIVAL <span className="text-brand-red">2026</span>
            </div>

            {/* Numeric Progress Counter */}
            <div className="flex items-baseline space-x-1 mb-3">
              <span className="font-display text-5xl md:text-6xl font-black text-brand-gold tracking-tight drop-shadow-[0_0_15px_rgba(245,179,1,0.5)]">
                {progress}
              </span>
              <span className="font-display text-2xl text-zinc-400 font-bold">%</span>
            </div>

            {/* Broadcast loading line */}
            <div className="w-56 h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-zinc-700/60">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-red"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 text-xs tracking-widest uppercase text-zinc-500 font-medium">
              BARAMUNDA GROUND • BHUBANESWAR • 4-6 DEC 2026
            </div>
          </div>
        </div>
      ) : (
        /* Split-Curtain Reveal into Hero */
        <div className="fixed inset-0 z-[99990] pointer-events-none flex">
          {/* Left Curtain */}
          <motion.div
            className="w-1/2 h-full bg-black border-r border-brand-red/40"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
          {/* Right Curtain */}
          <motion.div
            className="w-1/2 h-full bg-black border-l border-brand-red/40"
            initial={{ x: 0 }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
