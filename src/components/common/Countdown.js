'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Countdown({ targetDate = '2026-12-04T05:30:00+05:30' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(targetDate).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: isMounted ? timeLeft.days : '52' },
    { label: 'HOURS', value: isMounted ? timeLeft.hours : '12' },
    { label: 'MINUTES', value: isMounted ? timeLeft.minutes : '45' },
    { label: 'SECONDS', value: isMounted ? timeLeft.seconds : '30' },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
      {units.map((unit, idx) => (
        <div key={unit.label} className="flex items-center">
          <div className="flex flex-col items-center">
            {/* Box */}
            <div className="relative flex items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-zinc-950/90 border border-zinc-800 rounded clip-angled shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              {/* Gold/Red corner accents */}
              <div className="absolute top-0 right-0 w-2 h-2 bg-brand-red" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-gold" />

              {/* Digits */}
              <motion.span
                key={unit.value}
                initial={{ y: -4, opacity: 0.7 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-wider"
              >
                {unit.value}
              </motion.span>
            </div>

            {/* Label */}
            <span className="mt-1.5 text-[10px] sm:text-xs font-heading tracking-widest text-zinc-400 font-bold uppercase">
              {unit.label}
            </span>
          </div>

          {/* Separator colon */}
          {idx < units.length - 1 && (
            <span className="text-brand-red font-display text-2xl sm:text-3xl md:text-4xl font-bold mx-1 sm:mx-2 -mt-4 animate-pulse">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
