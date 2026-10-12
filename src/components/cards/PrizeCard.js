'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles } from 'lucide-react';

export default function PrizeCard({
  title,
  championship,
  amount,
  subtext,
  badge = 'GRAND PRIZE',
  featured = false,
  items = [],
  icon: Icon = Trophy,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative flex flex-col p-6 sm:p-8 bg-zinc-950 clip-angled transition-all duration-300 ${
        featured
          ? 'border-2 border-brand-gold shadow-[0_0_35px_rgba(245,179,1,0.35)]'
          : 'border border-zinc-800 hover:border-zinc-700 shadow-xl'
      }`}
    >
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 text-xs font-heading font-extrabold uppercase tracking-widest rounded-sm ${
            featured
              ? 'bg-brand-gold text-black shadow-[0_0_10px_#F5B301]'
              : 'bg-zinc-900 text-zinc-300 border border-zinc-700'
          }`}
        >
          {badge}
        </span>
        <span className="text-xs uppercase font-heading tracking-wider text-zinc-400">
          {championship}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-2">
        {title}
      </h3>

      {/* Main Prize Amount Callout */}
      <div className="py-4 my-2 border-y border-zinc-900 flex items-baseline gap-2">
        <span
          className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${
            featured ? 'text-brand-gold drop-shadow-[0_0_15px_rgba(245,179,1,0.6)]' : 'text-brand-red'
          }`}
        >
          {amount}
        </span>
        {featured && <Sparkles className="w-5 h-5 text-brand-gold animate-spin-slow" />}
      </div>

      {/* Subtitle / Context */}
      {subtext && <p className="text-sm text-zinc-400 mb-4">{subtext}</p>}

      {/* Optional breakdown list */}
      {items && items.length > 0 && (
        <div className="mt-4 space-y-2 border-t border-zinc-900 pt-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-zinc-400">{item.place || item.label}</span>
              <span className="font-bold text-white font-heading tracking-wider">{item.amount || item.value}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
