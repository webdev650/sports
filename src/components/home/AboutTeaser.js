'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export default function AboutTeaser() {
  const athletePerks = [
    'Official Holographic Athlete Festival ID & Pass',
    'Custom Die-Cast Commemorative Medal & AOGA Certificate',
    '10 High-Res Stage Photos + 15-Sec Cinematic Reel (in 72 hrs)',
    'Global Live Broadcast Stream for family and fans',
    'Full Backstage Warm-Up Zone with Olympic equipment & medical team',
  ];

  return (
    <SectionWrapper
      id="about-teaser"
      animation="diagonal-clip"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Media & Visual (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative clip-angled border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <RevealImage
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              alt="Athletes on stage at India's Biggest Sports Festival 2026"
              variant="clip-path-lr"
              aspectRatio="aspect-[4/5]"
              className="object-cover"
            />

            {/* Overlaid stat callout card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-zinc-950/95 border-2 border-brand-red p-4 sm:p-5 clip-angled shadow-[0_0_25px_rgba(225,6,0,0.4)] max-w-xs z-20">
              <div className="font-display text-3xl sm:text-4xl font-black text-brand-gold">
                ₹1,50,00,000
              </div>
              <div className="text-xs font-heading uppercase tracking-wider text-zinc-300 font-bold mt-1">
                Guaranteed Cash Prize Purse Under Strict Athletic Performance
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Value Proposition (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <SectionHeading
            align="left"
            tag="THE FESTIVAL MANIFESTO"
            title="WHERE DISCIPLINE MEETS BROADCAST INTENSITY"
            subtitle="Organised by the All Odisha Gym Association (AOGA), this is not just an event—it is India’s premier athletic arena uniting global competitors, national federations, and sports enthusiasts on the sacred soil of Bhubaneswar."
            accentColor="red"
            className="mb-6"
          />

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            From 4th to 6th December 2026, Baramunda Ground transforms into a multi-sport powerhouse. Witness 40+ participating countries, 6 independent championship titles, and the revival of legendary cultural traditions such as the Utkal Kesari Dangal alongside modern Olympic-standard powerlifting and bodybuilding.
          </p>

          {/* Perks Checklist */}
          <div className="w-full bg-zinc-950/70 border border-zinc-800/80 p-5 sm:p-6 rounded mb-8 clip-angled">
            <div className="text-xs uppercase font-heading tracking-widest text-brand-gold font-bold mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>WHAT EVERY REGISTERED ATHLETE RECEIVES:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
              {athletePerks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/about" variant="primary" icon={ArrowRight}>
              READ FULL FESTIVAL STORY
            </Button>
            <Button href="/register" variant="outlineGold">
              ATHLETE REGISTRATION GUIDE
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
