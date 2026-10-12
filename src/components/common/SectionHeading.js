'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  accentColor = 'red', // 'red' | 'gold'
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const accentColorClass = accentColor === 'gold' ? 'text-brand-gold' : 'text-brand-red';
  const barGradient =
    accentColor === 'gold'
      ? 'from-brand-gold via-brand-red to-transparent'
      : 'from-brand-red via-brand-gold to-transparent';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}>
      {/* Category / Section Tag */}
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs md:text-sm font-heading tracking-widest uppercase bg-zinc-900 border border-zinc-700/80 rounded-sm"
        >
          <span className={`w-2 h-2 rounded-full ${accentColor === 'gold' ? 'bg-brand-gold shadow-[0_0_8px_#F5B301]' : 'bg-brand-red shadow-[0_0_8px_#E10600]'}`} />
          <span className="text-zinc-300 font-semibold">{tag}</span>
        </motion.div>
      )}

      {/* Main Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]"
      >
        {title}
      </motion.h2>

      {/* Animated Broadcast Accent Underline Bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-1.5 mt-4 rounded-full bg-gradient-to-r ${barGradient} shadow-[0_0_12px_rgba(225,6,0,0.5)]`}
      />

      {/* Subtitle / Paragraph */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
