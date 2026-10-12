'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Star, Award } from 'lucide-react';

export default function GuestCard({
  guest,
  index = 0,
  reveal = 'tilt-3d',
}) {
  const [imgSrc, setImgSrc] = useState(guest.image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group relative flex flex-col bg-zinc-950 border border-zinc-800 clip-angled overflow-hidden hover:border-brand-gold/80 hover:shadow-[0_0_30px_rgba(245,179,1,0.3)] transition-all duration-500"
    >
      {/* Animated Glowing Accent Frame */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold/40 transition-colors pointer-events-none z-30" />

      {/* Portrait Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900">
        <Image
          src={imgSrc}
          alt={`${guest.name} – ${guest.role}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
          onError={() => {
            // Fallback to high-res sports athlete photo
            setImgSrc('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop');
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

        {/* Chief Guest Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-heading font-extrabold uppercase tracking-widest bg-brand-gold text-black clip-tag shadow-[0_0_12px_rgba(245,179,1,0.7)]">
            <Star className="w-3.5 h-3.5 fill-black" />
            <span>{guest.badge || 'Chief Guest'}</span>
          </span>
        </div>

        {/* Social link badge */}
        {guest.socials?.instagram && (
          <div className="absolute top-4 right-4 z-20">
            <a
              href={guest.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${guest.name} Instagram`}
              className="p-2 bg-black/70 backdrop-blur-md rounded-full text-zinc-300 hover:text-white hover:bg-brand-red transition-all flex items-center justify-center"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>

      {/* Card Bio & Info */}
      <div className="p-6 relative z-20 -mt-10 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide group-hover:text-brand-gold transition-colors">
            {guest.name}
          </h3>
          <div className="text-xs font-heading font-bold uppercase tracking-wider text-brand-red mb-3">
            {guest.role}
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {guest.bio}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[11px] text-zinc-400 uppercase font-heading tracking-widest">
          <span>Baramunda Ground</span>
          <span className="text-brand-gold">AOGA 2026</span>
        </div>
      </div>
    </motion.div>
  );
}
