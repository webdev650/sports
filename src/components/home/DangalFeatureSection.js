'use client';

import Image from 'next/image';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { Bike, Trophy, Sparkles, Flame, Shield, ArrowRight } from 'lucide-react';

export default function DangalFeatureSection() {
  return (
    <SectionWrapper
      id="dangal-bullet-reveal"
      animation="curtain-split"
      bg="bg-background"
      diagonal="both"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="HERITAGE REVIVAL"
          title="25 YEARS LATER, THE DANGAL RETURNS"
          subtitle="After a quarter century, Odisha’s sacred red clay akhara returns to Bhubaneswar under modern broadcast floodlights. The legendary Utkal Kesari title is back on the line."
          accentColor="gold"
        />

        {/* Feature Reveal Showcase Card */}
        <div className="w-full bg-zinc-950 border-2 border-brand-red clip-angled overflow-hidden shadow-[0_0_50px_rgba(225,6,0,0.35)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-red text-white font-heading font-black text-xs uppercase tracking-widest rounded-sm w-fit mb-4">
                <Bike className="w-4 h-4" />
                <span>ULTIMATE REWARD FOR THE UTKAL KESARI</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-3">
                ROYAL ENFIELD BULLET <br />
                <span className="text-brand-gold">&amp; THE SACRED GADA</span>
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Wrestlers from across India descend upon the traditional earthen pit (Matti Akhara) constructed at Baramunda Ground. The champion who outlasts every challenger claims the brand-new Royal Enfield Bullet and the revered ceremonial Gada mace.
              </p>

              {/* Purse & Division Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded clip-angled">
                  <div className="text-xs font-heading font-bold uppercase tracking-wider text-brand-gold mb-1">
                    MEN’S UTKAL KESARI
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white">
                    ROYAL ENFIELD BULLET
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    + Sacred Traditional Bronze Gada
                  </div>
                </div>

                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded clip-angled">
                  <div className="text-xs font-heading font-bold uppercase tracking-wider text-brand-red mb-1">
                    WOMEN’S UTKAL KESARI
                  </div>
                  <div className="font-display text-xl sm:text-2xl font-black text-white">
                    ₹1,00,000 CASH
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">
                    + Sacred Traditional Bronze Gada
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-heading tracking-wider uppercase text-zinc-300 mb-6">
                <span className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800">
                  ENTRY FEE: <strong className="text-white">₹1,000</strong>
                </span>
                <span className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800">
                  DATE: <strong className="text-white">FRI 4 DEC 2026 (11 AM)</strong>
                </span>
                <span className="px-3 py-1 bg-zinc-900 rounded border border-zinc-800">
                  VENUE: <strong className="text-white">AKHARA PIT, BARAMUNDA</strong>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button href="/register" size="lg" variant="primary" icon={Flame}>
                  REGISTER FOR DANGAL (₹1,000)
                </Button>
                <Button href="/dangal" size="lg" variant="outlineGold" icon={ArrowRight}>
                  VIEW DANGAL WEIGHT RULES
                </Button>
              </div>
            </div>

            {/* Right Media: The Royal Enfield Motorcycle & Akhara Imagery (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative clip-angled border-2 border-brand-gold/60 rounded overflow-hidden shadow-[0_0_35px_rgba(245,179,1,0.3)]">
                <RevealImage
                  src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop"
                  alt="Royal Enfield Bullet motorcycle reward for Utkal Kesari Dangal winner"
                  variant="slide-mask"
                  aspectRatio="aspect-[4/3]"
                  className="object-cover"
                />

                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-black/85 backdrop-blur-md text-brand-gold border border-brand-gold/50 text-xs font-heading font-black tracking-widest uppercase rounded">
                    GRAND PRIZE MOTORCYCLE
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 p-3 bg-black/85 backdrop-blur-md border border-zinc-800 rounded flex items-center justify-between text-xs">
                  <span className="font-heading uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-brand-gold" />
                    25-YEAR ANNIVERSARY ED.
                  </span>
                  <span className="font-display text-brand-gold font-bold">
                    AWARDED LIVE ON STAGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
