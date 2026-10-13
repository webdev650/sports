'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import PrizeCard from '@/components/cards/PrizeCard';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { Trophy, Bike, Flame, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function PrizeHighlightSection() {
  return (
    <SectionWrapper
      id="prize-highlights"
      animation="flip-3d"
      bg="bg-background"
      diagonal="both"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="OFFICIAL PURSE BREAKDOWN"
          title="₹1.5 CRORE TOTAL PRIZE PURSE"
          subtitle="All cash payouts are awarded live on the grand stage at Baramunda Ground upon competition verification. Decided strictly by athletic performance with zero lottery or chance."
          accentColor="gold"
        />

        {/* Supreme Prize Hero Banner with Oversized Outlined Numerals */}
        <div className="w-full mb-14 bg-zinc-950 p-6 sm:p-10 lg:p-12 border-2 border-brand-gold clip-angled shadow-[0_0_50px_rgba(245,179,1,0.25)] relative overflow-hidden">
          {/* Subtle gold glow mesh in background */}
          <div className="absolute inset-0 bg-gold-mesh opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-black font-heading font-black text-xs uppercase tracking-widest rounded-sm w-fit mb-4">
                <Sparkles className="w-4 h-4 fill-black" />
                <span>SUPREME HONOR OF INDIAN BODYBUILDING</span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-2">
                CHAMPION OF CHAMPIONS
              </h3>

              {/* OVERSIZED OUTLINED NUMERALS WITH GLOW */}
              <div className="my-2 select-none">
                <div className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-stroke-gold drop-shadow-[0_0_30px_rgba(245,179,1,0.6)] animate-pulse-slow">
                  ₹20,00,000
                </div>
                <div className="text-xs sm:text-sm font-heading uppercase tracking-widest text-brand-gold font-bold mt-2">
                  TWENTY LAKH RUPEES CASH PURSE FOR THE OVERALL CHAMPION
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed my-4">
                On Sunday night, 6th December 2026, category winners across all Men’s Bodybuilding classes step back onto the Baramunda arena stage for the Champion of Champions showdown.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-heading tracking-wider mb-6">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded">
                  <span className="text-zinc-400 block text-[11px]">COC RUNNER-UP PURSE</span>
                  <strong className="text-brand-red text-base font-display">₹5,00,000 CASH</strong>
                </div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-200 rounded">
                  <span className="text-zinc-400 block text-[11px]">MEN’S PHYSIQUE OVERALL COC</span>
                  <strong className="text-brand-gold text-base font-display">₹5,00,000 CASH</strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button href="/register" size="lg" variant="gold" icon={Trophy}>
                  ENTER BODYBUILDING DIVISION
                </Button>
              </div>
            </div>

            {/* Right Media Display */}
            <div className="lg:col-span-5 relative">
              <RevealImage
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop"
                alt="Gold trophy ceremony representing ₹1.5 Crore prize money"
                variant="rotate-in"
                aspectRatio="aspect-[4/3]"
                className="object-cover rounded border border-zinc-800"
              />
              <div className="absolute -bottom-4 -left-4 bg-zinc-900/95 border border-brand-red p-3 rounded clip-tag text-xs font-heading font-black text-white shadow-xl">
                233+ CASH PODIUM PLACES
              </div>
            </div>
          </div>
        </div>

        {/* 4 Focused Prize Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {/* Card 1: Utkal Kesari Dangal */}
          <PrizeCard
            title="Utkal Kesari Dangal"
            championship="Matti Kusti Akhara"
            amount="ROYAL ENFIELD BULLET"
            subtext="Men's Champion receives brand new Royal Enfield Bullet + The Sacred Gada. Women's Champion receives ₹1,00,000 + The Gada."
            badge="HERITAGE REWARD"
            featured={true}
            icon={Bike}
          />

          {/* Card 2: Powerlifting */}
          <PrizeCard
            title="All India Powerlifting"
            championship="National Open"
            amount="UP TO ₹14 LAKH"
            subtext="Featuring ₹1,00,000 each for 'Strong Man' and 'Strong Woman' overall champions, plus cash rewards across all weight classes."
            badge="RAW POWER"
            featured={false}
            icon={Flame}
          />

          {/* Card 3: Arm Wrestling */}
          <PrizeCard
            title="Arm Wrestling Showdown"
            championship="Right Hand Multi-Class"
            amount="UP TO ₹6.4 LAKH"
            subtext="Podium finishes: 1st ₹50,000 | 2nd ₹30,000 | 3rd ₹20,000 | 4th ₹10,000 | 5th ₹5,000 across weight divisions."
            badge="TABLE COMBAT"
            featured={false}
            icon={Trophy}
          />

          {/* Card 4: Star Category Para-Athletes */}
          <PrizeCard
            title="Star Category (Para)"
            championship="Special Invitational"
            amount="₹2,10,000"
            subtext="100% Free registration for all para-athletes. Dedicated category with equal stage respect and cash podium distributions."
            badge="FREE ENTRY"
            featured={true}
            icon={HeartHandshake}
          />
        </div>

        {/* Prize Guarantee Assurance Bar */}
        <div className="w-full max-w-3xl p-4 bg-zinc-950 border border-zinc-800 rounded flex items-center justify-between gap-4 text-xs text-zinc-400 mb-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
            <span>Official Legal Guarantee: Prize money is decided strictly by athletic performance; no lottery, betting or chance.</span>
          </div>
          <Link href="/register" className="text-brand-red font-bold hover:underline shrink-0 font-heading tracking-wider uppercase">
            REGISTER ATHLETE →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
