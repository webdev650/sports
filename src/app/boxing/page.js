'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import Button from '@/components/common/Button';
import { Trophy, Award, Calendar, ShieldCheck, Flame, Zap } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function BoxingPage() {
  const divisions = [
    { class: 'Flyweight', weight: '51 kg', rounds: '3 x 3 Mins' },
    { class: 'Featherweight', weight: '57 kg', rounds: '3 x 3 Mins' },
    { class: 'Lightweight', weight: '63.5 kg', rounds: '3 x 3 Mins' },
    { class: 'Welterweight', weight: '71 kg', rounds: '3 x 3 Mins' },
    { class: 'Middleweight', weight: '80 kg', rounds: '3 x 3 Mins' },
    { class: 'Heavyweight', weight: '92+ kg', rounds: '3 x 3 Mins' },
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
            <span className="text-brand-gold font-bold">Boxing</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Trophy className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              ELEVATED RING COMBAT • TITLE BELTS & CASH PURSES
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            ODISHA OPEN <br />
            <span className="text-brand-red">BOXING CHAMPIONSHIP</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Three rounds of thunderous ring action inside regulation 20x20 ft elevated ring. Electronic 5-judge computerized scoring and gold-stitched Championship Belts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>4 – 6 DECEMBER 2026 (FINALS SUN 6 DEC)</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY: ₹1,000</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR BOXING
            </Button>
            <Button href="#ring-specs" size="lg" variant="outlineGold">
              VIEW RING & BOUT RULES
            </Button>
          </div>
        </div>
      </section>

      {/* Ring-Themed Arena Section */}
      <SectionWrapper id="ring-specs" animation="perspective-tilt" bg="bg-surface" diagonal="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative clip-angled border-2 border-brand-red shadow-[0_0_40px_rgba(225,6,0,0.4)]">
              <RevealImage
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
                alt="Boxer under stadium ring lighting"
                variant="diagonal-wipe"
                aspectRatio="aspect-[4/3]"
              />

              {/* Red & Blue Corner Callout */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-heading font-black uppercase tracking-wider z-20">
                <span className="px-3 py-1 bg-red-600 text-white rounded">RED CORNER</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded">BLUE CORNER</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              align="left"
              tag="THE SQUARE JUNGLE"
              title="OLYMPIC-STANDARD RING & COMPUTERIZED SCORING"
              subtitle="Operated under Boxing Federation of India (BFI) and amateur open rules ensuring absolute fairness, safety, and referee authority."
              accentColor="red"
              className="mb-4"
            />

            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 mb-6">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span><strong>Three 3-Minute Rounds:</strong> 1-minute rest between rounds with dedicated cornerman stations.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span><strong>Electronic 5-Judge Scoring:</strong> Modern punch counting interface with live round score aggregation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span><strong>Safety Gear Provided:</strong> Approved competition gloves and headgear sanitized between bouts.</span>
              </li>
            </ul>

            <div className="p-4 bg-zinc-950 border border-zinc-800 clip-angled w-full text-xs text-zinc-400">
              Mandatory pre-fight medical checks by on-site ring physician, including pupil dilation and cardiovascular clearance.
            </div>
          </div>
        </div>

        {/* Weight Divisions */}
        <SectionHeading
          tag="WEIGHT BRACKETS"
          title="CONTESTED WEIGHT DIVISIONS"
          subtitle="Open categories for men and women fighters."
          accentColor="gold"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full mb-12">
          {divisions.map((div) => (
            <div
              key={div.class}
              className="p-4 bg-zinc-950 border border-zinc-800 clip-angled text-center"
            >
              <div className="font-heading text-lg font-bold text-white uppercase mb-1">
                {div.class}
              </div>
              <div className="font-display text-2xl font-black text-brand-red">
                {div.weight}
              </div>
              <div className="text-[10px] text-zinc-400 font-heading uppercase tracking-wider mt-1">
                {div.rounds}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary" icon={Flame}>
            REGISTER ATHLETE (₹1,000)
          </Button>
          <Button href="/schedule" size="xl" variant="outline">
            VIEW FIGHT CARD SCHEDULE
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
