'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, MapPin, Flame, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import Button from '@/components/common/Button';
import SplitText from '@/components/common/SplitText';
import { EVENT_DATA } from '@/lib/eventData';
import { MEDIA_MANIFEST } from '@/lib/mediaManifest';

const TYPEWRITER_PHRASES = [
  'WHERE DISCIPLINE MEETS BROADCAST INTENSITY',
  '₹1.5 CRORE GUARANTEED CASH PRIZE PURSE',
  '40+ COUNTRIES • 55+ DIVISIONS • 233+ CASH PODIUMS',
  'THE RETURN OF HISTORIC UTKAL KESARI DANGAL',
  '4–6 DECEMBER 2026 • BARAMUNDA GROUND, BHUBANESWAR',
];

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroVideo = MEDIA_MANIFEST.videos[0];

  // Typewriter effect loop
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && displayedText === currentPhrase) {
      // Pause at full text
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2200);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? currentPhrase.substring(0, prev.length - 1) : currentPhrase.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex]);

  return (
    <section
      id="hero-broadcast"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black select-none"
    >
      {/* Background Full-Screen Broadcast Video Montage with Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          src={heroVideo.src}
          poster={heroVideo.poster}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover opacity-40 scale-105 transition-opacity duration-1000"
        />

        {/* Dynamic Multi-Layer High-Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-red-mesh opacity-50 mix-blend-screen" />
        <div className="absolute inset-0 bg-gold-mesh opacity-25 mix-blend-color-dodge" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-4">
        {/* Top Organizer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 bg-zinc-950/90 border border-brand-red/60 clip-angled shadow-[0_0_25px_rgba(225,6,0,0.4)]"
        >
          <Trophy className="w-4 h-4 text-brand-gold animate-pulse" />
          <span className="font-heading text-xs sm:text-sm uppercase tracking-widest text-zinc-200 font-extrabold">
            All Odisha Gym Association (AOGA) Presents
          </span>
          <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#E10600]" />
        </motion.div>

        {/* Oversized Split-Text Headline */}
        <div className="mb-4">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl">
            <span className="block text-stroke-white opacity-95">
              <SplitText text="INDIA'S BIGGEST" mode="word" stagger={0.06} />
            </span>
            <span className="block text-brand-red drop-shadow-[0_0_40px_rgba(225,6,0,0.7)]">
              <SplitText text="SPORTS FESTIVAL" mode="word" delay={0.2} stagger={0.06} />
            </span>
            <span className="block text-brand-gold drop-shadow-[0_0_30px_rgba(245,179,1,0.6)]">
              <SplitText text="2026" mode="char" delay={0.4} stagger={0.05} />
            </span>
          </h1>
        </div>

        {/* Tagline Typewriter Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-950/80 border border-zinc-800 rounded font-heading text-sm sm:text-base md:text-lg tracking-wider uppercase text-zinc-300">
            <Sparkles className="w-4 h-4 text-brand-gold shrink-0" />
            <span className="text-white font-bold">{displayedText}</span>
            <span className="w-2 h-5 bg-brand-red animate-pulse inline-block" />
          </div>
        </motion.div>

        {/* Event Key Meta Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded">
            <Calendar className="w-4 h-4 text-brand-gold" />
            <span className="font-bold text-white">4 – 6 DECEMBER 2026</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 rounded">
            <MapPin className="w-4 h-4 text-brand-red" />
            <span className="font-bold text-white">BARAMUNDA GROUND, BHUBANESWAR</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 border border-brand-gold/40 rounded text-brand-gold shadow-[0_0_15px_rgba(245,179,1,0.2)]">
            <Flame className="w-4 h-4 fill-brand-gold" />
            <span className="font-extrabold text-brand-gold">₹1.5 CRORE CASH PURSE</span>
          </div>
        </motion.div>

        {/* The Two Main Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="/register"
            size="xl"
            variant="primary"
            className="w-full sm:w-auto shadow-[0_0_35px_rgba(225,6,0,0.7)] text-base sm:text-lg"
            icon={Flame}
          >
            REGISTER AS ATHLETE
          </Button>

          <Button
            href="/championships"
            size="xl"
            variant="outlineGold"
            className="w-full sm:w-auto text-base sm:text-lg"
            icon={ArrowRight}
          >
            EXPLORE 6 CHAMPIONSHIPS
          </Button>
        </motion.div>

        {/* Quick Highlights Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            Official AOGA Certified Judges
          </span>
          <span>•</span>
          <span>Free Para-Athlete Star Category</span>
          <span>•</span>
          <span>10 Stage Photos + 4K Reel in 72 Hrs</span>
        </motion.div>
      </div>
    </section>
  );
}
