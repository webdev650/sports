'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import ChampionshipCard from '@/components/cards/ChampionshipCard';
import Button from '@/components/common/Button';
import { Trophy, Flame, Shield, Zap, Swords, Award, ArrowRight, CheckCircle2, Bike } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function ChampionshipsPage() {
  const [filter, setFilter] = useState('all');

  const championshipsMedia = [
    { image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop', reveal: 'tilt-3d' },
    { image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop', reveal: 'circle-expand' },
    { image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop', reveal: 'grayscale-color' },
    { image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop', reveal: 'horizontal-blinds' },
    { image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', reveal: 'vertical-blinds' },
    { image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop', reveal: 'diagonal-wipe' },
  ];

  const filteredChampionships = EVENT_DATA.championships.filter((c) => {
    if (filter === 'international') return c.scope.toLowerCase().includes('international');
    if (filter === 'national') return c.scope.toLowerCase().includes('national');
    return true;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Championships</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 clip-angled mb-4">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              6 INDEPENDENT NATIONAL & INTERNATIONAL ARENAS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-none mb-6">
            THE SIX <span className="text-brand-red">SACRED CROWNS</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Every sport operates under accredited Olympic and national federation technical regulations. Over ₹1.5 Crore in total cash purses awarded across 233+ podium spots. Choose your arena below to explore division rules, weight brackets, prize ladders, and registration guidelines.
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 font-heading text-xs uppercase tracking-wider font-bold clip-angled transition-all ${
                filter === 'all'
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(225,6,0,0.5)]'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              All 6 Arenas
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-5 py-2.5 font-heading text-xs uppercase tracking-wider font-bold clip-angled transition-all ${
                filter === 'international'
                  ? 'bg-brand-gold text-black shadow-[0_0_15px_rgba(245,179,1,0.5)]'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              International Grand Prix
            </button>
            <button
              onClick={() => setFilter('national')}
              className={`px-5 py-2.5 font-heading text-xs uppercase tracking-wider font-bold clip-angled transition-all ${
                filter === 'national'
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(225,6,0,0.5)]'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              National Championships
            </button>
          </div>
        </div>
      </section>

      {/* Grid of Championships */}
      <SectionWrapper id="championships-grid" animation="stagger-cascade" bg="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-16">
          {filteredChampionships.map((champ, index) => (
            <ChampionshipCard
              key={champ.id}
              championship={champ}
              index={index}
              imageSrc={championshipsMedia[index]?.image}
              imageReveal={championshipsMedia[index]?.reveal}
            />
          ))}
        </div>

        {/* Master Comparison Table */}
        <div className="w-full bg-zinc-950 border border-zinc-800 p-6 sm:p-8 clip-angled mb-12">
          <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-gold">
                AT-A-GLANCE MATRIX
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                CHAMPIONSHIPS COMPARISON
              </h3>
            </div>
            <span className="text-xs text-zinc-400 hidden sm:inline-block">
              Baramunda Ground • 4–6 Dec 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 font-heading uppercase tracking-wider">
                  <th className="py-3 px-4">Championship Arena</th>
                  <th className="py-3 px-4">Scope</th>
                  <th className="py-3 px-4">Entry Fee</th>
                  <th className="py-3 px-4">Total Purse</th>
                  <th className="py-3 px-4">Flagship Honor</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                {EVENT_DATA.championships.map((c) => (
                  <tr key={c.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-white font-heading text-base">
                      {c.title}
                    </td>
                    <td className="py-4 px-4 text-brand-gold font-semibold uppercase">
                      {c.scope}
                    </td>
                    <td className="py-4 px-4 text-zinc-300 font-medium">
                      {c.entryFee}
                    </td>
                    <td className="py-4 px-4 text-white font-bold">
                      {c.prizePool}
                    </td>
                    <td className="py-4 px-4 text-brand-red font-semibold">
                      {c.championPrize}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/${c.slug}`}
                        className="text-brand-gold hover:text-white font-heading font-bold uppercase tracking-wider inline-flex items-center gap-1"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Action CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="lg" variant="primary" icon={Flame}>
            REGISTER FOR YOUR CHAMPIONSHIP
          </Button>
          <Button href="/schedule" size="lg" variant="outlineGold">
            VIEW WEIGH-IN & STAGE TIMELINE
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
