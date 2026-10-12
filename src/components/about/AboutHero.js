'use client';

import { motion } from 'framer-motion';
import { Trophy, MapPin, Calendar, Globe2, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-red-mesh opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,179,1,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-6"
        >
          <Link href="/" className="hover:text-brand-red transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brand-gold font-bold">About The Festival</span>
        </motion.div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-zinc-900 border border-zinc-800 clip-angled mb-4">
          <Trophy className="w-4 h-4 text-brand-red" />
          <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
            All Odisha Gym Association (AOGA)
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
          THE SAGA OF <br />
          <span className="text-brand-red drop-shadow-[0_0_30px_rgba(225,6,0,0.5)]">STRENGTH</span> &{' '}
          <span className="text-brand-gold drop-shadow-[0_0_25px_rgba(245,179,1,0.5)]">HERITAGE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
          Welcome to <strong className="text-white">India&apos;s Biggest Sports Festival 2026</strong>. Hosted at the iconic Baramunda Ground in Bhubaneswar, Odisha from 4th to 6th December 2026. A premier multi-sport broadcast spectacle fusing Odisha’s ancient warrior roots with international championship standards.
        </p>

        {/* Key Indicators Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl">
          <div className="p-4 bg-zinc-950/80 border border-zinc-800 clip-angled text-center">
            <div className="font-display text-2xl sm:text-3xl font-black text-brand-gold">₹1.5 CR</div>
            <div className="text-[11px] font-heading uppercase tracking-widest text-zinc-400 mt-1">Cash Prize Pool</div>
          </div>
          <div className="p-4 bg-zinc-950/80 border border-zinc-800 clip-angled text-center">
            <div className="font-display text-2xl sm:text-3xl font-black text-brand-red">40+</div>
            <div className="text-[11px] font-heading uppercase tracking-widest text-zinc-400 mt-1">Global Nations</div>
          </div>
          <div className="p-4 bg-zinc-950/80 border border-zinc-800 clip-angled text-center">
            <div className="font-display text-2xl sm:text-3xl font-black text-white">6</div>
            <div className="text-[11px] font-heading uppercase tracking-widest text-zinc-400 mt-1">Championships</div>
          </div>
          <div className="p-4 bg-zinc-950/80 border border-zinc-800 clip-angled text-center">
            <div className="font-display text-2xl sm:text-3xl font-black text-brand-gold">233+</div>
            <div className="text-[11px] font-heading uppercase tracking-widest text-zinc-400 mt-1">Podium Finishes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
