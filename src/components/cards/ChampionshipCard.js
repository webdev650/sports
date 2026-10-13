'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Flame, Shield, Zap, Swords, Award } from 'lucide-react';
import RevealImage from '@/components/common/RevealImage';

const ICON_MAP = {
  Dumbbell: Trophy,
  Flame: Flame,
  Shield: Shield,
  Zap: Zap,
  Swords: Swords,
  Trophy: Award,
};

export default function ChampionshipCard({ championship, index = 0, imageSrc, imageReveal = 'clip-path-lr' }) {
  const IconComponent = ICON_MAP[championship.icon] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-zinc-950 border border-zinc-800/90 clip-angled overflow-hidden hover:border-brand-red/80 hover:shadow-[0_0_30px_rgba(225,6,0,0.3)] transition-all duration-500"
    >
      {/* Top Media Image */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        <RevealImage
          src={imageSrc || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop'}
          alt={championship.title}
          variant={imageReveal}
          aspectRatio="h-full w-full"
          className="group-hover:scale-110 transition-transform duration-700"
        />

        {/* Floating Scope Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-brand-gold border border-brand-gold/40 rounded-sm">
            {championship.badge}
          </span>
        </div>

        {/* Entry Fee Badge */}
        <div className="absolute bottom-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-heading font-black uppercase tracking-wider bg-brand-red text-white clip-tag shadow-lg">
            ENTRY: {championship.entryFee}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between relative z-10">
        <div>
          {/* Header row with Icon */}
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded text-brand-red group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-colors">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase font-heading tracking-widest text-zinc-400 font-semibold">
              {championship.scope} Championship
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white group-hover:text-brand-red transition-colors leading-tight mb-2">
            {championship.title}
          </h3>

          {/* Prize highlight */}
          <div className="text-sm font-semibold text-brand-gold mb-3 flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span>Prize Pool: {championship.prizePool}</span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            {championship.description}
          </p>
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-medium">
            {championship.scheduleDays}
          </span>

          <Link
            href={`/${championship.slug}`}
            className="inline-flex items-center gap-2 text-sm font-heading font-bold uppercase tracking-wider text-white group-hover:text-brand-red transition-colors"
          >
            <span>EXPLORE RULES</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
