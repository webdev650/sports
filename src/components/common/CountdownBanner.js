'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Trophy, ArrowRight, Clock } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function CountdownBanner({ targetDate = '2026-12-04T05:30:00+05:30' }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '52',
    hours: '12',
    minutes: '45',
    seconds: '30',
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const updateTime = () => {
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

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      id="countdown-announcement-bar"
      className="relative z-[950] w-full bg-zinc-950 border-b border-zinc-800/80 text-white text-xs select-none overflow-hidden"
    >
      {/* Red accent line top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-brand-red via-brand-gold to-brand-red animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        {/* Left: Location & Status */}
        <div className="flex items-center gap-2 text-zinc-300 font-heading tracking-wider uppercase text-[11px] sm:text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red" />
          </span>
          <span className="font-bold text-white">4–6 DEC 2026</span>
          <span className="text-zinc-600 hidden md:inline">•</span>
          <span className="hidden md:inline text-zinc-400">BARAMUNDA GROUND, BHUBANESWAR</span>
        </div>

        {/* Center: Live Ticking Countdown */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-display text-xs sm:text-sm tracking-widest text-brand-gold mx-auto sm:mx-0">
          <Clock className="w-3.5 h-3.5 text-brand-red shrink-0" />
          <span className="text-[10px] sm:text-xs font-heading uppercase text-zinc-400 font-bold tracking-wider mr-1">
            FESTIVAL STARTS IN:
          </span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 text-white font-mono font-bold">
            {mounted ? timeLeft.days : '52'}d
          </span>
          <span className="text-brand-red font-bold">:</span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 text-white font-mono font-bold">
            {mounted ? timeLeft.hours : '12'}h
          </span>
          <span className="text-brand-red font-bold">:</span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 text-white font-mono font-bold">
            {mounted ? timeLeft.minutes : '45'}m
          </span>
          <span className="text-brand-red font-bold">:</span>
          <span className="bg-zinc-900 px-1.5 py-0.5 rounded border border-brand-red/60 text-brand-gold font-mono font-bold shadow-[0_0_8px_rgba(245,179,1,0.3)]">
            {mounted ? timeLeft.seconds : '30'}s
          </span>
        </div>

        {/* Right: Prize Tag & Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="text-brand-gold font-heading font-extrabold uppercase text-[11px] tracking-wider flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5" />
            ₹1.5 CRORE CASH PURSE
          </span>
          <Link
            href="/register"
            className="inline-flex items-center gap-1 text-[11px] font-heading font-black uppercase tracking-wider text-white bg-brand-red hover:bg-[#ff0700] px-2.5 py-1 rounded-sm transition-colors shadow-[0_0_10px_#E10600]"
          >
            <span>REGISTER</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
