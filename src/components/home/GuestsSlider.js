'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Star, ChevronLeft, ChevronRight, Instagram, Users, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function GuestsSlider() {
  const guests = EVENT_DATA.guests;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? guests.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === guests.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper
      id="guests-slider-section"
      animation="rotate-scale"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="LEGENDS IN BHUBANESWAR"
          title="DISTINGUISHED CHIEF GUESTS"
          subtitle="Interact with India's most celebrated fitness icons, Olympian record-holders, and international champions. Present across all 3 days for athlete masterclasses, weigh-ins, and stage award handovers."
          accentColor="gold"
        />

        {/* Carousel Controls Header */}
        <div className="w-full flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-brand-gold text-xs font-heading font-black tracking-widest uppercase rounded">
              FEATURED CELEBRITY LINEUP
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous guest"
              className="p-3 bg-zinc-900 hover:bg-brand-red border border-zinc-800 hover:border-brand-red text-white rounded clip-angled transition-colors shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next guest"
              className="p-3 bg-zinc-900 hover:bg-brand-red border border-zinc-800 hover:border-brand-red text-white rounded clip-angled transition-colors shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive Large Portraits Grid / Slider Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mb-12">
          {guests.slice(0, 4).map((guest, idx) => (
            <div
              key={guest.id}
              className="group relative flex flex-col bg-zinc-950 border border-zinc-800 clip-angled overflow-hidden hover:border-brand-gold/80 hover:shadow-[0_0_35px_rgba(245,179,1,0.3)] transition-all duration-500"
            >
              {/* Large Portrait Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900">
                <Image
                  src={guest.image}
                  alt={`${guest.name} – ${guest.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                />

                {/* Ambient Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                {/* Chief Guest Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-heading font-black uppercase tracking-widest bg-brand-gold text-black clip-tag shadow-[0_0_15px_rgba(245,179,1,0.7)]">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    <span>{guest.badge || 'Chief Guest'}</span>
                  </span>
                </div>

                {/* Social Icon */}
                {guest.socials?.instagram && (
                  <div className="absolute top-4 right-4 z-20">
                    <a
                      href={guest.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${guest.name} Instagram`}
                      className="p-2 bg-black/75 backdrop-blur-md rounded-full text-zinc-300 hover:text-white hover:bg-brand-red transition-all flex items-center justify-center"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Bio & Information */}
              <div className="p-6 relative z-20 -mt-10 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-wide group-hover:text-brand-gold transition-colors">
                    {guest.name}
                  </h3>
                  <div className="text-xs font-heading font-extrabold uppercase tracking-wider text-brand-red mb-3">
                    {guest.role}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {guest.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400 uppercase font-heading tracking-widest">
                  <span>Baramunda Arena</span>
                  <span className="text-brand-gold font-bold">AOGA 2026</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/guests" variant="outlineGold" size="lg" icon={Users}>
            VIEW COMPLETE VIP & COMMITTEE DIRECTORY
          </Button>
          <Button href="/schedule" variant="ghost" size="lg">
            VIEW CELEBRITY STAGE SCHEDULE
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
