'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import { EVENT_DATA } from '@/lib/eventData';
import { BookOpen, ShieldAlert, CheckCircle2, ChevronRight } from 'lucide-react';

export default function RulesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Rulebook</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            OFFICIAL <span className="text-brand-red">RULEBOOK</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Competition regulations, weigh-in mandates, attire codes, and disqualification standards across all 6 championships.
          </p>
        </div>
      </section>

      <SectionWrapper animation="fade-up" bg="bg-background">
        <div className="max-w-4xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1: General Weigh-in */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-brand-gold" />
              1. General Weigh-In & Registration Protocols
            </h2>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>Official weigh-in takes place on Day 1 (Friday, 4 Dec 2026, 8:00 AM – 2:00 PM) at the Baramunda Sports Arena Registration Annex.</li>
              <li>A single re-weigh opportunity is granted within 60 minutes if an athlete exceeds their declared weight bracket.</li>
              <li>Failure to make weight forfeits placement in that category; athletes may opt to move up to the higher bracket upon paying category difference (if applicable).</li>
            </ul>
          </div>

          {/* Section 2: Championship Specific Rules */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
              2. Championship Regulations
            </h2>

            {/* Bodybuilding */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-brand-gold mb-2">
                Anil Gochhikar Classic Bodybuilding
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Adheres strictly to WBPF / IBBF international posing guidelines. Posing suits must conform to decency standards. No wet oils allowed in final judging; matte competition tanners permitted. Posing music must be submitted during weigh-in on a labeled USB drive.
              </p>
            </div>

            {/* Powerlifting */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-brand-red mb-2">
                All India Open Powerlifting (Squat • Bench • Deadlift)
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Raw division rules apply. Approved gear: standard lifting belt, wrist wraps, and knee sleeves. No supportive bench shirts or squat suits permitted in raw flight. Three attempts per discipline; IPF technical rulebook enforced by certified national referees.
              </p>
            </div>

            {/* Dangal */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-brand-gold mb-2">
                Utkal Kesari Dangal (Matti Kusti)
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Traditional circular clay pit (Matti Akhara) conditioned with buttermilk and turmeric. Standard langot mandatory. Knockout format: 20 minutes regulation duration. A fall (Dhoti / Chitt) decides victory; referee decisions in the pit are absolute.
              </p>
            </div>

            {/* Marathon */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
                Dutee&apos;s Marathon (21.1K / 10K / 5K)
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                RFID electronic timing chip on chest bib. Cut-off time for 21.1 km Half Marathon is 3 hours 30 minutes. Hydration stations every 2.5 km. Pacing bicycles or unauthorized assistance leads to immediate disqualification.
              </p>
            </div>

            {/* Arm Wrestling */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-zinc-300 mb-2">
                National Arm Wrestling
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Standard WAF competition table with laser-aligned elbow pads. Right-hand open category with double-elimination bracket. Two fouls equal round loss. Referee straps applied after 30 seconds of non-grip.
              </p>
            </div>

            {/* Boxing */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled">
              <h3 className="font-heading text-lg font-bold uppercase text-brand-red mb-2">
                Odisha Open Boxing
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                BFI / IBA amateur boxing rules. 3 rounds of 3 minutes each with 1 minute rest. Federation-approved 10 oz / 12 oz gloves provided by AOGA. Mandatory gum shield and groin guard.
              </p>
            </div>
          </div>

          {/* Section 3: Disqualification */}
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-brand-red" />
              3. Zero Tolerance Infractions
            </h2>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>Use of banned PED substances under WADA/NADA prohibited list.</li>
              <li>Intentional physical altercation or verbal abuse toward ring/stage judges.</li>
              <li>Impersonation or competing under another athlete&apos;s pass.</li>
            </ul>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-800 text-xs text-zinc-400">
            <span>AOGA Technical Directorate • 2026 Edition</span>
            <Link href="/register" className="text-brand-red font-bold hover:underline flex items-center gap-1">
              Register for Your Discipline <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
