'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import GuestCard from '@/components/cards/GuestCard';
import Button from '@/components/common/Button';
import { Flame, Trophy, Award, Calendar, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function PowerliftingPage() {
  const ranuMohanty = EVENT_DATA.guests.find((g) => g.id === 'ranu-mohanty');

  const lifts = [
    { name: 'SQUAT', desc: 'Raw & equipped divisions under strict parallel hip-crease depth judging with calibrated steel plates.' },
    { name: 'BENCH PRESS', desc: 'Motionless chest pause, full elbow lockout, head and glutes pinned on regulation bench.' },
    { name: 'DEADLIFT', desc: 'Conventional or Sumo stance. Pure maximum grit from ground to hip lockout. No hitching.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <Link href="/championships" className="hover:text-brand-red">Championships</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Powerlifting</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Flame className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              NATIONAL POWERLIFTING CHAMPIONSHIP • UP TO ₹14 LAKH PRIZES
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            ALL INDIA OPEN <br />
            <span className="text-brand-gold">POWERLIFTING</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Raw human strength tested across Squat, Bench Press, and Deadlift. Competition calibrated plates, precision monolift stations, and strict 3-referee light board system.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>4 – 5 DECEMBER 2026</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY FROM ₹600</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR POWERLIFTING
            </Button>
            <Button href="#strongman" size="lg" variant="outlineGold">
              STRONG MAN / WOMAN PURSE (₹1,00,000)
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Legend: Ranu Mohanty Spotlight */}
      <SectionWrapper id="ranu-mohanty" animation="slide-left" bg="bg-surface" diagonal="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            {ranuMohanty && <GuestCard guest={ranuMohanty} index={0} />}
          </div>

          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-black font-heading font-black text-xs uppercase tracking-widest rounded-sm mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHAMPIONSHIP AMBASSADOR</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-4">
              FEATURING LEGEND <span className="text-brand-gold">RANU MOHANTY</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              Asian Powerlifting Championship Silver Medallist and Senior National Champion <strong className="text-white">Ranu Mohanty</strong> will be present throughout the tournament—conducting competitor technical briefings, overseeing referee integrity, and awarding the grand podium trophies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
              <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-red font-heading uppercase tracking-wider block font-bold">
                  ASIAN CHAMPIONSHIP
                </span>
                <span className="text-white font-heading text-lg font-bold">Silver Medallist</span>
              </div>
              <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-gold font-heading uppercase tracking-wider block font-bold">
                  NATIONAL RECORD
                </span>
                <span className="text-white font-heading text-lg font-bold">Senior National Champion</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              Competitors will receive personal technique feedback, motivation, and certificate endorsement signed by Ranu Mohanty and the AOGA Executive Board.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Strong Man & Strong Woman Spotlight */}
      <SectionWrapper id="strongman" animation="zoom-in" bg="bg-background">
        <div className="bg-zinc-950 border-2 border-brand-red p-8 sm:p-12 clip-angled shadow-[0_0_50px_rgba(225,6,0,0.3)] mb-12 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white font-heading font-black text-xs uppercase tracking-widest rounded-sm mb-4">
            <Zap className="w-4 h-4 fill-white" />
            <span>POUND-FOR-POUND PINNACLE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-none mb-4">
            STRONG MAN & STRONG WOMAN <br />
            <span className="text-brand-gold drop-shadow-[0_0_20px_rgba(245,179,1,0.5)]">
              ₹1,00,000 EACH
            </span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Awarded to the overall lifters with the highest Wilks / GL points total across all bodyweight divisions. Proof that pure pound-for-pound power reigns supreme.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
              <span className="text-xs text-zinc-400 font-heading uppercase tracking-wider block">OVERALL MEN</span>
              <span className="font-display text-3xl font-black text-brand-gold">₹1,00,000 CASH</span>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
              <span className="text-xs text-zinc-400 font-heading uppercase tracking-wider block">OVERALL WOMEN</span>
              <span className="font-display text-3xl font-black text-brand-gold">₹1,00,000 CASH</span>
            </div>
          </div>
        </div>

        {/* 3 Lifts Breakdown */}
        <SectionHeading
          tag="THE BIG THREE"
          title="THREE DISCIPLINES OF RAW POWER"
          subtitle="Strict federation rules with international calibration and electronic light board judging."
          accentColor="red"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {lifts.map((lift) => (
            <div
              key={lift.name}
              className="p-6 bg-zinc-950 border border-zinc-800 clip-angled flex flex-col justify-between"
            >
              <div>
                <div className="font-display text-4xl font-black text-brand-red mb-2">
                  {lift.name}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {lift.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-heading uppercase tracking-widest text-zinc-500">
                3 ATTEMPTS • IPF SPEC BARS
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="lg" variant="primary" icon={Flame}>
            REGISTER ATHLETE (FROM ₹600)
          </Button>
          <Button href="/schedule" size="lg" variant="outline">
            VIEW LIFTING FLIGHTS
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
