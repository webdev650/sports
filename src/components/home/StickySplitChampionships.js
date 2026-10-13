'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import Button from '@/components/common/Button';
import { Trophy, CheckCircle2, ArrowRight, Sparkles, Flame, Shield, Bike } from 'lucide-react';

const STACK_CARDS = [
  {
    sport: 'INTERNATIONAL BODYBUILDING',
    title: 'Anil Gochhikar Classic 2026',
    purse: '₹20,00,000 COC',
    runnerUp: '₹5,00,000 Runner-Up • ₹5,00,000 Men’s Physique COC',
    desc: 'The pinnacle of international stage bodybuilding featuring weight classes from 55 kg to 100 kg+, Classic Physique, Women’s Bodybuilding, Bikini Model, Masters, and Star Category for para-athletes.',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=900&auto=format&fit=crop',
    slug: '/bodybuilding',
    tag: 'International Stage',
  },
  {
    sport: 'RAW POWERLIFTING',
    title: 'All India Open Powerlifting',
    purse: 'UP TO ₹14 LAKH',
    runnerUp: 'Strong Man & Strong Woman ₹1,00,000 Each',
    desc: 'Tested under strict IPF judging guidelines. Squat, bench press, and deadlift maximum raw power featuring Asian medallist Ranu Mohanty.',
    img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=900&auto=format&fit=crop',
    slug: '/powerlifting',
    tag: 'National Open',
  },
  {
    sport: 'HERITAGE MATTI KUSTI',
    title: 'Utkal Kesari Dangal',
    purse: 'ROYAL ENFIELD BULLET + GADA',
    runnerUp: 'Women’s Utkal Kesari ₹1,00,000 + Sacred Gada',
    desc: 'After 25 years, the ancient akhara returns to the historic sands of Bhubaneswar. Pure clay combat under stadium floodlights.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=900&auto=format&fit=crop',
    slug: '/dangal',
    tag: '25-Year Return',
  },
  {
    sport: 'ROAD RUNNING',
    title: "Dutee's Marathon 2026",
    purse: 'RFID TIMED PODIUMS',
    runnerUp: '21.1 km Half Marathon • 10 km Timed • 5 km / 2 km Fun Run',
    desc: 'Dawn sprint across Bhubaneswar’s wide boulevards patronized by Olympian Dutee Chand. Medical support, hydration stations, and official timing chips.',
    img: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=900&auto=format&fit=crop',
    slug: '/marathon',
    tag: 'City Dawn Race',
  },
  {
    sport: 'TABLE COMBAT',
    title: 'National Arm Wrestling',
    purse: 'UP TO ₹6.4 LAKH',
    runnerUp: '1st ₹50K | 2nd ₹30K | 3rd ₹20K | 4th ₹10K | 5th ₹5K',
    desc: 'Pro right-hand tables with digital officiating and laser refereeing. Extreme forearm tension and explosive grip battles.',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop',
    slug: '/arm-wrestling',
    tag: 'Right Hand Duel',
  },
  {
    sport: 'STADIUM BOXING',
    title: 'Odisha Open Boxing',
    purse: 'RING CHAMPIONSHIP PURSES',
    runnerUp: 'Flyweight to Heavyweight Olympic-Style Heats',
    desc: 'Floodlit stadium boxing ring. Certified federation referees, cutmen, and high-octane gloved bouts across 3 tournament rounds.',
    img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=900&auto=format&fit=crop',
    slug: '/boxing',
    tag: 'Ring Arena',
  },
];

export default function StickySplitChampionships() {
  return (
    <SectionWrapper
      id="one-festival-six-championships"
      animation="diagonal-clip"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
        {/* Left Sticky Column (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950 border border-brand-red/60 clip-angled text-brand-red font-heading font-black text-xs uppercase tracking-widest">
            <Trophy className="w-4 h-4 text-brand-gold" />
            <span>FESTIVAL ETHOS & MANIFESTO</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-[0.95] tracking-tight">
            ONE FESTIVAL. <br />
            <span className="text-brand-red">SIX CHAMPIONSHIPS.</span>
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            By unifying traditional Indian wrestling with modern bodybuilding, powerlifting, marathon running, boxing, and arm wrestling, the All Odisha Gym Association creates an unparalleled sporting spectacle in eastern India.
          </p>

          {/* Quick Metrics */}
          <div className="space-y-3 w-full bg-zinc-950/80 p-5 border border-zinc-800 rounded clip-angled">
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span><strong>₹1.5 Crore Total Prize Purse</strong> guaranteed and paid on stage</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span><strong>40+ International Nations</strong> represented on stage</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
              <span><strong>55+ Competitive Classes</strong> with 233+ podium spots</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
              <span><strong>Free Para-Athlete Star Category</strong> with ₹2,10,000 purse</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full">
            <Button href="/championships" size="lg" variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
              EXPLORE ALL 6 DISCIPLINES
            </Button>
            <Button href="/register" size="lg" variant="outlineGold" className="w-full sm:w-auto">
              REGISTER ATHLETE
            </Button>
          </div>
        </div>

        {/* Right Scrolling Image Stack (7 cols) */}
        <div className="lg:col-span-7 space-y-8 sm:space-y-10">
          {STACK_CARDS.map((card, idx) => (
            <div
              key={card.slug}
              className="group relative bg-zinc-950 border border-zinc-800 rounded clip-angled overflow-hidden shadow-2xl hover:border-brand-red/70 transition-all duration-300"
            >
              {/* Image with subtle gradient */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Scope Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-zinc-700 text-xs font-heading font-black tracking-widest text-brand-gold uppercase rounded-sm">
                    {card.tag}
                  </span>
                </div>

                {/* Purse badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-brand-red text-white text-xs font-display font-black tracking-wider uppercase clip-tag shadow-lg">
                    {card.purse}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 relative z-10 -mt-6 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-red block mb-1">
                  ARENA 0{idx + 1} • {card.sport}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white group-hover:text-brand-red transition-colors mb-2">
                  {card.title}
                </h3>

                <div className="text-xs font-display text-brand-gold uppercase tracking-wider mb-3 font-semibold">
                  {card.runnerUp}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {card.desc}
                </p>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <Link
                    href={card.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-white hover:text-brand-gold transition-colors"
                  >
                    <span>VIEW CATEGORIES & TIMELINE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/register"
                    className="text-xs font-heading font-black uppercase tracking-wider text-brand-red hover:underline"
                  >
                    REGISTER NOW →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
