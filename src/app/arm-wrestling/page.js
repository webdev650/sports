'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { Swords, Trophy, Award, Calendar, ShieldCheck, Flame, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function ArmWrestlingPage() {
  const champ = EVENT_DATA.championships.find((c) => c.id === 'arm-wrestling');

  const weightBracketsMen = ['60 kg', '70 kg', '80 kg', '90 kg', '100+ kg'];
  const weightBracketsWomen = ['55 kg', '65 kg', '75+ kg'];

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
            <span className="text-brand-gold font-bold">Arm Wrestling</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Swords className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              RIGHT-HAND TABLE WARFARE • UP TO ₹6.4 LAKH PURSE
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            NATIONAL <br />
            <span className="text-brand-red">ARM WRESTLING</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Raw tendon power, hand control, and explosiveness tested on official tournament tables. Right-hand competition for men and women across multiple weight categories.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>4 – 5 DECEMBER 2026</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY: ₹1,000</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR ARM WRESTLING
            </Button>
            <Button href="#prize-podium" size="lg" variant="outlineGold">
              VIEW PRIZE PODIUM LADDER
            </Button>
          </div>
        </div>
      </section>

      {/* Prize Podium Ladder */}
      <SectionWrapper id="prize-podium" animation="flip-3d" bg="bg-surface" diagonal="top">
        <SectionHeading
          tag="PODIUM PAYOUTS"
          title="₹50,000 FIRST PLACE IN EVERY WEIGHT CLASS"
          subtitle="Equal reward for men and women across all contested right-hand divisions. Up to ₹6.4 Lakh in total distributed prizes."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full mb-12">
          {champ.prizesPerClass.map((prize, idx) => (
            <div
              key={prize.place}
              className={`p-6 bg-zinc-950 clip-angled border flex flex-col justify-between ${
                idx === 0
                  ? 'border-brand-gold shadow-[0_0_25px_rgba(245,179,1,0.3)]'
                  : 'border-zinc-800'
              }`}
            >
              <div>
                <span className="text-xs font-heading font-black uppercase tracking-widest text-zinc-400 block mb-1">
                  Rank #{idx + 1}
                </span>
                <h4 className="font-heading text-lg font-bold text-white mb-2">
                  {prize.place}
                </h4>
              </div>
              <div
                className={`font-display text-3xl font-black pt-3 border-t border-zinc-900 ${
                  idx === 0 ? 'text-brand-gold' : 'text-brand-red'
                }`}
              >
                {prize.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Weight Classes Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-2xl font-bold uppercase text-white mb-4 text-brand-red">
              MEN&apos;S RIGHT-HAND CLASSES
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {weightBracketsMen.map((wb) => (
                <span
                  key={wb}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 font-heading text-sm font-bold text-white rounded"
                >
                  {wb}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-2xl font-bold uppercase text-white mb-4 text-brand-gold">
              WOMEN&apos;S RIGHT-HAND CLASSES
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {weightBracketsWomen.map((wb) => (
                <span
                  key={wb}
                  className="px-4 py-2 bg-zinc-900 border border-zinc-800 font-heading text-sm font-bold text-white rounded"
                >
                  {wb}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Referee & Table Regulations */}
        <div className="bg-zinc-950 border border-zinc-800 p-6 sm:p-8 clip-angled mb-12">
          <h4 className="font-heading text-xl font-bold uppercase text-white mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-red" />
            <span>OFFICIAL TABLE RULES & ARBITRATION</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">STRAP-DOWN MATCHES</strong>
              Immediate referee strap application on any slip without intention foul.
            </div>
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">ELBOW FOULS</strong>
              Elbow off the pad or tricep liftoff triggers a foul; two fouls equal match loss.
            </div>
            <div className="p-3 bg-zinc-900/60 rounded">
              <strong className="text-white block font-heading text-sm mb-1">OFFICIAL GRIP</strong>
              Thumb knuckle visible, level wrist, referee command &ldquo;READY… GO!&rdquo;
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary" icon={Flame}>
            REGISTER ATHLETE (₹1,000)
          </Button>
          <Button href="/schedule" size="xl" variant="outline">
            VIEW WEIGH-IN TIMINGS
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
