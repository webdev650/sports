'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import { EVENT_DATA } from '@/lib/eventData';
import { Sparkles, Trophy, Users, ShoppingBag, Utensils, Tv, Music, Flame } from 'lucide-react';

const EXP_ICONS = [
  Trophy,
  Users,
  ShoppingBag,
  Flame,
  Users,
  Utensils,
  Tv,
  Music,
];

export default function ExperiencesSection() {
  const visualCards = [
    {
      img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop',
      reveal: 'zoom-out',
      title: 'Stadium Energy',
    },
    {
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
      reveal: 'clip-path-lr',
      title: 'Stage Production',
    },
    {
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
      reveal: 'diagonal-wipe',
      title: 'Expo & Stalls',
    },
    {
      img: 'https://images.unsplash.com/photo-1609137144820-22105c7a5f6e?q=80&w=800&auto=format&fit=crop',
      reveal: 'tilt-3d',
      title: 'Odisha Culture',
    },
  ];

  return (
    <SectionWrapper
      id="experiences-section"
      animation="perspective-tilt"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="MORE THAN JUST COMPETITION"
          title="FESTIVAL EXPERIENCES & ATTRACTIONS"
          subtitle="A 360-degree sporting carnival designed for athletes, fitness enthusiasts, families, and global broadcast viewers alike."
          accentColor="gold"
        />

        {/* 4 Photo Showcase Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
          {visualCards.map((card, idx) => (
            <div key={idx} className="relative clip-angled border border-zinc-800 overflow-hidden group">
              <RevealImage
                src={card.img}
                alt={card.title}
                variant={card.reveal}
                aspectRatio="aspect-[4/3]"
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 z-20">
                <span className="px-2.5 py-1 text-xs font-heading uppercase tracking-wider font-bold bg-black/80 text-white border border-zinc-700 rounded-sm">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 8 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {EVENT_DATA.keyExperiences.map((exp, idx) => {
            const Icon = EXP_ICONS[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="flex flex-col p-6 bg-zinc-950 border border-zinc-800/80 clip-angled hover:border-brand-red/60 hover:shadow-[0_0_20px_rgba(225,6,0,0.2)] transition-all duration-300 group"
              >
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded w-fit mb-4 text-brand-red group-hover:text-brand-gold group-hover:border-brand-gold/40 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="font-heading text-xl font-bold uppercase text-white mb-2 group-hover:text-brand-red transition-colors">
                  {exp.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
