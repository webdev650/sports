'use client';

import { useState } from 'react';
import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import GuestCard from '@/components/cards/GuestCard';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { Zap, Trophy, Award, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function MarathonPage() {
  const [selectedDistance, setSelectedDistance] = useState('21.1 km Half Marathon');
  const duteeChand = EVENT_DATA.guests.find((g) => g.id === 'dutee-chand');

  const distances = [
    {
      id: '21.1km',
      name: '21.1 km Half Marathon',
      time: '05:30 AM Flag-Off',
      chip: 'RFID Electronic Bib Timing',
      eligibility: '18+ Years',
      desc: 'The flagship endurance road race across Bhubaneswar’s arterial avenues. Certified route, hydration stations every 2 km, pacing buses.',
      prizes: 'Top 5 Elite Men & Women Cash Purses + Trophy',
      fee: '₹1,000',
    },
    {
      id: '10km',
      name: '10 km Timed Run',
      time: '06:00 AM Flag-Off',
      chip: 'RFID Electronic Bib Timing',
      eligibility: '16+ Years',
      desc: 'Fast, flat, and competitive circuit for seasoned runners targeting personal best times with official timing certificates.',
      prizes: 'Top 3 Open Men & Women Cash Purses + Trophies',
      fee: '₹800',
    },
    {
      id: '5km',
      name: '5 km Fitness Run',
      time: '06:30 AM Flag-Off',
      chip: 'Recorded Timing',
      eligibility: 'Open to All',
      desc: 'Designed for fitness enthusiasts, corporate squads, and youth runners soaking in the dawn atmosphere.',
      prizes: 'Podium Medals & Gift Hampers',
      fee: '₹600',
    },
    {
      id: '2km',
      name: '2 km Fun Run',
      time: '07:00 AM Flag-Off',
      chip: 'Non-Competitive Celebration',
      eligibility: 'Families & Children',
      desc: 'Celebrate health and community spirit. Walk, jog, or run with Olympian Dutee Chand and celebrity guests.',
      prizes: 'Finisher Medals & Certificates for All',
      fee: '₹600',
    },
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
            <span className="text-brand-gold font-bold">Marathon</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Zap className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              CERTIFIED NATIONAL ROAD RACE • DAWN FLAG-OFF
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            DUTEE&apos;S <span className="text-brand-gold">MARATHON 2026</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Spearheaded by Olympian sprinter <strong className="text-white">Dutee Chand</strong>. Pave the streets of Bhubaneswar from Baramunda Ground across 2 km, 5 km, 10 km timed run, and 21.1 km Half Marathon.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>FRIDAY 4 DECEMBER 2026 (05:30 AM FLAG-OFF)</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY FROM ₹600 (INCLUDES JERSEY & MEDAL)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Zap}>
              REGISTER FOR DUTEE&apos;S MARATHON
            </Button>
            <Button href="#distances" size="lg" variant="outlineGold">
              EXPLORE RACE DISTANCES
            </Button>
          </div>
        </div>
      </section>

      {/* Dutee Chand Feature */}
      <SectionWrapper id="dutee-spotlight" animation="slide-right" bg="bg-surface" diagonal="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            {duteeChand && <GuestCard guest={duteeChand} index={0} />}
          </div>

          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-black font-heading font-black text-xs uppercase tracking-widest rounded-sm mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RACE PATRON & OLYMPIAN</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-4">
              RUN WITH OLYMPIAN <span className="text-brand-gold">DUTEE CHAND</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              National 100m Record Holder and Asian Games double silver medallist <strong className="text-white">Dutee Chand</strong> leads the ceremonial dawn flag-off on 4th December at 5:30 AM. Join thousands of runners pacing together along Bhubaneswar&apos;s certified athletic course.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
              <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-red font-heading uppercase tracking-wider block font-bold">
                  NATIONAL RECORD
                </span>
                <span className="text-white font-heading text-lg font-bold">100m National Record Holder</span>
              </div>
              <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-gold font-heading uppercase tracking-wider block font-bold">
                  ASIAN GAMES
                </span>
                <span className="text-white font-heading text-lg font-bold">Double Silver Medallist</span>
              </div>
            </div>

            <div className="p-4 bg-zinc-950/80 border border-zinc-800 w-full clip-angled text-xs text-zinc-300">
              Every participant receives an official finisher medal handed over by Dutee Chand and dignitaries at the Day 1 evening stage gala.
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4 Distance Cards */}
      <SectionWrapper id="distances" animation="stagger-cascade" bg="bg-background">
        <SectionHeading
          tag="RACE DISTANCES"
          title="CHOOSE YOUR CHALLENGE"
          subtitle="From beginners and fitness squads to elite national half-marathoners."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {distances.map((dist) => (
            <div
              key={dist.id}
              className="p-6 bg-zinc-950 border border-zinc-800 clip-angled flex flex-col justify-between hover:border-brand-red/80 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-heading font-black uppercase tracking-wider bg-brand-red text-white clip-tag">
                    {dist.fee}
                  </span>
                  <span className="text-xs text-zinc-400 font-heading">{dist.time}</span>
                </div>

                <h3 className="font-heading text-2xl font-black uppercase text-white mb-2">
                  {dist.name}
                </h3>

                <div className="text-xs font-semibold text-brand-gold mb-3">
                  {dist.chip}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {dist.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900">
                <div className="text-[11px] font-heading uppercase tracking-wider text-zinc-300 mb-3">
                  Rewards: <span className="text-brand-gold font-bold">{dist.prizes}</span>
                </div>
                <Button href="/register" size="sm" variant="outlineGold" className="w-full">
                  REGISTER THIS RUN
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Route Details Graphic Box */}
        <div className="bg-zinc-950 border border-zinc-800 p-6 sm:p-8 clip-angled mb-12">
          <h4 className="font-heading text-2xl font-bold uppercase text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-red" />
            <span>CERTIFIED ROAD COURSE & RUNNER SUPPORT</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-zinc-300">
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">CIRCUIT START & FINISH</strong>
              Baramunda Ground Field main gates with grand start/finish gantry.
            </div>
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">HYDRATION STATIONS</strong>
              Water, electrolyte drinks, energy gels, and bananas every 2 km.
            </div>
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">EMERGENCY MEDICAL</strong>
              Mobile ambulances, paramedic motorbikes, and finish-line recovery tent.
            </div>
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">RUNNER KIT</strong>
              Custom dry-fit jersey, RFID bib, finisher medal, and hot post-run breakfast.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary" icon={Zap}>
            REGISTER ATHLETE (FROM ₹600)
          </Button>
          <Button href="/schedule" size="xl" variant="outline">
            VIEW FLAG-OFF PROTOCOL
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
