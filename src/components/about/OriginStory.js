'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import { Flame, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function OriginStory() {
  return (
    <SectionWrapper
      id="origin-story"
      animation="slide-right"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image with broadcast frame (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative clip-angled border-2 border-brand-red/60 shadow-[0_0_40px_rgba(225,6,0,0.3)]">
            <RevealImage
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop"
              alt="Athletic strength and heritage at Baramunda Ground Bhubaneswar"
              variant="clip-path-lr"
              aspectRatio="aspect-[4/5]"
            />

            {/* Overlaid Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-zinc-950 p-4 border border-brand-gold clip-angled shadow-2xl z-20 max-w-xs">
              <div className="flex items-center gap-2 text-brand-gold font-heading text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SACRED SOIL OF ODISHA</span>
              </div>
              <p className="text-xs text-zinc-300">
                Fusing centuries-old Paika Akhada martial grit with international IFBB-grade stadium production.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <SectionHeading
            align="left"
            tag="AOGA GENESIS"
            title="WHERE ANCIENT AKHADA VALOR MEETS MODERN ARENAS"
            subtitle="The All Odisha Gym Association was formed with a singular, resolute mission: to turn Odisha into India's undeniable epicenter of strength sports, physical culture, and international athletic prestige."
            accentColor="red"
            className="mb-6"
          />

          <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
            <p>
              Odisha has always been a land of warriors. From the famed <strong className="text-white">Paika rebellions</strong> who trained in traditional mud akharas to the temple servitors (Sevayat) of Puri whose strength traditions date back centuries, physical discipline is etched into the cultural DNA of this land.
            </p>
            <p>
              Under the visionary stewardship of <strong className="text-white">Rosaleen Nayak</strong> (Chairman), <strong className="text-white">Santosh Mohanty</strong> (President), <strong className="text-white">Anil Gochhikar</strong> (Senior Vice-President), and <strong className="text-white">Dwiti Krishna Behera</strong> (Secretary), AOGA recognized that Indian strength athletes deserved an Olympic-calibre festival on home soil.
            </p>
            <p>
              From 4th to 6th December 2026, the historic <strong className="text-white">Baramunda Ground Field</strong> in Bhubaneswar will host over 2,500 athletes and judges from across 40+ nations, competing under strict athletic merit across six arenas for a monumental <strong className="text-brand-gold">₹1.5 Crore prize purse</strong>.
            </p>
          </div>

          {/* Core Commitments */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
              <Flame className="w-5 h-5 text-brand-red mb-2" />
              <div className="font-heading text-base font-bold uppercase text-white">Strict Merit</div>
              <p className="text-xs text-zinc-400 mt-1">100% athletic performance. No chance, lottery, or subjective bias.</p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
              <Award className="w-5 h-5 text-brand-gold mb-2" />
              <div className="font-heading text-base font-bold uppercase text-white">Global Stage</div>
              <p className="text-xs text-zinc-400 mt-1">International and national judges adhering to certified federation rules.</p>
            </div>

            <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
              <ShieldCheck className="w-5 h-5 text-brand-red mb-2" />
              <div className="font-heading text-base font-bold uppercase text-white">Equal Honour</div>
              <p className="text-xs text-zinc-400 mt-1">Dedicated Star Category with free entry and ₹2.10 Lakh for para-athletes.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
