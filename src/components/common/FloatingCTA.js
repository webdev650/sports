'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Trophy } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-[990] flex items-center"
        >
          <Link
            href="/register"
            id="floating-register-cta"
            className="group relative flex items-center gap-3 px-5 py-3.5 bg-brand-red text-white font-heading text-base md:text-lg font-bold tracking-wider uppercase clip-angled shadow-[0_0_30px_rgba(225,6,0,0.7)] hover:bg-[#ff0700] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
          >
            {/* Pulsing glow ring */}
            <span className="absolute -inset-1 rounded-sm bg-brand-red opacity-40 blur-md group-hover:opacity-75 animate-pulse -z-10" />

            <Flame className="w-5 h-5 text-brand-gold animate-bounce" />
            <span>REGISTER NOW</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-black/60 rounded text-brand-gold font-sans font-semibold">
              ₹1.5 CR PRIZE
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
