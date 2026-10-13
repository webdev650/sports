'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import PrizeCard from '@/components/cards/PrizeCard';
import Button from '@/components/common/Button';
import { Trophy, Flame, Award, Sparkles, CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function BodybuildingPage() {
  const [selectedWeight, setSelectedWeight] = useState('75 kg');
  const [selectedDivision, setSelectedDivision] = useState("Men's Bodybuilding");

  const champ = EVENT_DATA.championships.find((c) => c.id === 'bodybuilding');

  const divisionsList = champ.divisions;
  const weightClasses = champ.weightClasses;
  const prizeLadder = champ.prizesPerClass;

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
            <span className="text-brand-gold font-bold">Bodybuilding</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-gold/60 clip-angled mb-4">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span className="font-heading text-xs uppercase tracking-widest text-brand-gold font-black">
              INTERNATIONAL GRAND PRIX • OVER ₹25,00,000 PURSE
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            ANIL GOCHHIKAR <br />
            <span className="text-brand-red">CLASSIC BODYBUILDING</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Odisha&apos;s crowning international bodybuilding spectacle. Muscle, symmetry, conditioning, and stage prestige judged by elite global federations under arena lighting.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>5 Dec (Prelims 5 PM) & 6 Dec (Finals 5 PM)</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY: ₹5,000 (STAR CATEGORY FREE)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR ANIL GOCHHIKAR CLASSIC
            </Button>
            <Button href="#divisions" size="lg" variant="outlineGold">
              EXPLORE DIVISIONS & WEIGHT CLASSES
            </Button>
          </div>
        </div>
      </section>

      {/* Champion of Champions Spotlight */}
      <SectionWrapper id="coc-spotlight" animation="flip-3d" bg="bg-surface" diagonal="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950 p-6 sm:p-10 border-2 border-brand-gold clip-angled shadow-[0_0_50px_rgba(245,179,1,0.25)] mb-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-black font-heading font-black text-xs uppercase tracking-widest rounded-sm w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HIGHEST CASH PRIZE PURSE IN EASTERN INDIA</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white leading-tight mb-4">
              CHAMPION OF CHAMPIONS: <br />
              <span className="text-brand-gold drop-shadow-[0_0_20px_rgba(245,179,1,0.6)]">
                ₹20,00,000 CASH
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              On Sunday 6th December 2026 at 7:30 PM, the gold medalists from all weight classes will battle in the ultimate posedown. The champion walks away with the historic ₹20 Lakh winner-take-all purse and the grand AOGA trophy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
                <span className="text-xs text-zinc-400 font-heading uppercase tracking-wider block">COC RUNNER-UP</span>
                <span className="font-display text-2xl font-black text-brand-red">₹5,00,000</span>
              </div>
              <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
                <span className="text-xs text-zinc-400 font-heading uppercase tracking-wider block">MEN&apos;S PHYSIQUE COC</span>
                <span className="font-display text-2xl font-black text-brand-gold">₹5,00,000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <RevealImage
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop"
              alt="Anil Gochhikar Classic Bodybuilding Stage"
              variant="tilt-3d"
              aspectRatio="aspect-[4/5]"
            />
          </div>
        </div>

        {/* 7 Divisions Tabs */}
        <div id="divisions" className="mt-8">
          <SectionHeading
            tag="COMPETITION TIERS"
            title="SEVEN OFFICIAL DIVISIONS"
            subtitle="Full slate of international divisions catering to classic symmetry, modern aesthetics, masters, and para-athletes."
            accentColor="red"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {divisionsList.map((div, idx) => (
              <div
                key={div}
                onClick={() => setSelectedDivision(div)}
                className={`p-5 clip-angled border cursor-pointer transition-all ${
                  selectedDivision === div
                    ? 'bg-brand-red text-white border-brand-red shadow-[0_0_20px_rgba(225,6,0,0.5)]'
                    : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="text-xs opacity-75 font-heading tracking-widest uppercase mb-1">
                  Division 0{idx + 1}
                </div>
                <h4 className="font-heading text-xl font-bold uppercase">
                  {div}
                </h4>
                {div.includes('Star') && (
                  <span className="mt-2 inline-block px-2 py-0.5 text-[10px] bg-brand-gold text-black font-extrabold rounded">
                    100% FREE ENTRY
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Weight-Class & Prize Ladder Matrix */}
        <div className="bg-zinc-950 border border-zinc-800 p-6 sm:p-10 clip-angled mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-8">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-gold">
                INTERACTIVE PRIZE SELECTOR
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                WEIGHT CLASS & PRIZE LADDER
              </h3>
            </div>
            <div className="text-xs font-heading uppercase text-zinc-400">
              Selected: <strong className="text-brand-red">{selectedDivision}</strong>
            </div>
          </div>

          {/* Weight class button pill selector */}
          <div className="mb-8">
            <span className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold block mb-3">
              SELECT WEIGHT CLASS:
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {weightClasses.map((wClass) => (
                <button
                  key={wClass}
                  onClick={() => setSelectedWeight(wClass)}
                  className={`px-4 py-2 text-xs sm:text-sm font-heading font-black tracking-wider clip-angled transition-all ${
                    selectedWeight === wClass
                      ? 'bg-brand-gold text-black shadow-[0_0_15px_#F5B301]'
                      : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {wClass}
                </button>
              ))}
            </div>
          </div>

          {/* Prize Ladder Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {prizeLadder.map((prize, idx) => (
              <div
                key={prize.place}
                className="p-5 bg-zinc-900/60 border border-zinc-800 rounded flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-zinc-400">
                      Rank #{idx + 1}
                    </span>
                    {idx === 0 && <Award className="w-4 h-4 text-brand-gold" />}
                  </div>
                  <h4 className="font-heading text-base font-bold text-white mb-2">
                    {prize.place}
                  </h4>
                </div>
                <div className="font-display text-2xl sm:text-3xl font-black text-brand-red pt-3 border-t border-zinc-800">
                  {prize.amount}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-xs text-zinc-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              All winners receive official AOGA certificates, medals, stage trophies, and instant cash prize issuance.
            </span>
          </div>
        </div>

        {/* Schedule & Rules Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-xl font-bold uppercase text-white mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-red" />
              <span>STAGE TIMINGS</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-zinc-400">Athlete Weigh-in & Tanning:</span>
                <span className="font-bold text-white">Sat 5 Dec, 8:00 AM – 1:00 PM</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-zinc-400">Preliminary Judging & Rounds:</span>
                <span className="font-bold text-white">Sat 5 Dec, 5:00 PM Onwards</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-zinc-400">Final Routines & Medal Ceremony:</span>
                <span className="font-bold text-white">Sun 6 Dec, 5:00 PM Onwards</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Champion of Champions Final:</span>
                <span className="font-bold text-brand-gold">Sun 6 Dec, 7:30 PM</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-xl font-bold uppercase text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span>RULES & CRITERIA</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li>• Official IFBB / International Federation judging matrix.</li>
              <li>• Professional spray tan only (on-site booths available).</li>
              <li>• Posing trunks / bikini must comply with federation cut guidelines.</li>
              <li>• Athlete entry fee: <strong>₹5,000</strong> (Includes pass, media package, T-shirt, medal).</li>
              <li>• Star Category (Para-Athletes): <strong>100% Free Registration</strong>.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary" icon={Flame}>
            REGISTER FOR BODYBUILDING NOW
          </Button>
          <Button href="/schedule" size="xl" variant="outline">
            VIEW WEIGH-IN PROTOCOL
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
