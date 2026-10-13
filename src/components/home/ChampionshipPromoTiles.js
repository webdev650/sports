'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Trophy, ArrowRight, Flame, Bike, Zap, Award, Swords } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

const CHAMPIONSHIPS = [
  {
    title: 'Anil Gochhikar Classic Bodybuilding',
    subtitle: 'International Open Championship',
    scope: 'INTERNATIONAL',
    prizePool: '₹20L COC PURSE',
    entryFee: '₹5,000',
    slug: '/bodybuilding',
    icon: Trophy,
    highlight: 'Champion of Champions ₹20,00,000 + ₹5,00,000 Runner-Up',
    details: 'Men’s BB, Men’s Physique, Classic Physique, Women’s BB, Bikini Model, Masters & Star Category (55 kg to 100 kg+).',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-brand-red',
  },
  {
    title: 'All India Open Powerlifting',
    subtitle: 'Squat, Bench Press & Deadlift',
    scope: 'NATIONAL OPEN',
    prizePool: 'UP TO ₹14 LAKH',
    entryFee: 'FROM ₹600',
    slug: '/powerlifting',
    icon: Flame,
    highlight: 'Strong Man & Strong Woman: ₹1,00,000 Each',
    details: 'Full IPF-standard competition featuring Asian Medallist Ranu Mohanty. Cash podiums across all weight classes.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-brand-gold text-black',
  },
  {
    title: 'Utkal Kesari Dangal 2026',
    subtitle: 'Traditional Matti Kusti Returns',
    scope: 'HERITAGE TITLE',
    prizePool: 'ROYAL ENFIELD BULLET',
    entryFee: '₹1,000',
    slug: '/dangal',
    icon: Bike,
    highlight: '25 Years Later, Dangal Returns to Bhubaneswar',
    details: 'Men’s Utkal Kesari wins Royal Enfield Bullet + The Sacred Gada. Women’s winner receives ₹1,00,000 + The Gada.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-amber-500 text-black',
  },
  {
    title: "Dutee's Marathon 2026",
    subtitle: 'Dawn Road Race Across Bhubaneswar',
    scope: 'CITY RUN',
    prizePool: 'TIMED PURSES',
    entryFee: '₹600',
    slug: '/marathon',
    icon: Zap,
    highlight: 'Patron: Olympian Dutee Chand',
    details: '21.1 km Half Marathon, 10 km Timed Run, 5 km and 2 km Fun Runs. Official RFID chip bib timing & medals.',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-blue-600',
  },
  {
    title: 'National Arm Wrestling Showdown',
    subtitle: 'Right Hand Multi-Class Battle',
    scope: 'NATIONAL CUP',
    prizePool: 'UP TO ₹6.4 LAKH',
    entryFee: '₹1,000',
    slug: '/arm-wrestling',
    icon: Swords,
    highlight: 'Cash Prizes ₹50,000 down to 5th place',
    details: 'Pro arm wrestling tables under stadium spot lighting. Men and women divisions with electronic refereeing.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-emerald-600',
  },
  {
    title: 'Odisha Open Boxing Championship',
    subtitle: 'Olympic Style Stadium Ring Combat',
    scope: 'OPEN STATE & NATL',
    prizePool: 'RING MEDALS & CASH',
    entryFee: '₹1,000',
    slug: '/boxing',
    icon: Award,
    highlight: 'Official Boxing Ring Arena',
    details: 'Sanctioned boxing bouts across flyweight to heavyweight. Strict safety and international refereeing panels.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    tagColor: 'bg-brand-red',
  },
];

export default function ChampionshipPromoTiles() {
  return (
    <SectionWrapper
      id="championship-promo-tiles"
      animation="stagger-cascade"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="THE SIX ARENAS"
          title="CHAMPIONSHIP PROMO TILES"
          subtitle="Explore India's premier multi-discipline athletic stage. Diagonal-cut broadcast arenas with verified judging, live timing, and ₹1.5 Crore in total guaranteed cash prizes."
          accentColor="red"
        />

        {/* 6 Diagonal-Cut Promo Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {CHAMPIONSHIPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-zinc-950 border border-zinc-800/90 clip-angled overflow-hidden hover:border-brand-red transition-all duration-500 hover:shadow-[0_0_35px_rgba(225,6,0,0.35)]"
              >
                {/* Media Image with Diagonal Cut */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* High contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-[11px] font-heading font-black uppercase tracking-wider rounded-sm ${item.tagColor}`}>
                      {item.scope}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2.5 py-1 text-xs font-display font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-brand-gold border border-brand-gold/40 rounded-sm">
                      ENTRY: {item.entryFee}
                    </span>
                  </div>

                  {/* Prize overlay banner */}
                  <div className="absolute bottom-3 left-4 right-4 z-20">
                    <div className="px-3 py-1.5 bg-zinc-950/90 backdrop-blur-md border border-brand-red/50 flex items-center justify-between rounded-sm">
                      <span className="text-[11px] font-heading uppercase tracking-wider text-zinc-400 font-bold">
                        PRIZE POOL:
                      </span>
                      <span className="font-display text-base font-black text-brand-gold">
                        {item.prizePool}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-col flex-grow p-6 justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-brand-red">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-black uppercase text-white group-hover:text-brand-red transition-colors leading-tight mb-2">
                      {item.title}
                    </h3>

                    <div className="p-2.5 bg-zinc-900/80 border-l-2 border-brand-gold text-xs text-brand-gold font-semibold mb-3">
                      {item.highlight}
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.details}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-2 text-sm font-heading font-black uppercase tracking-wider text-white group-hover:text-brand-red transition-colors"
                    >
                      <span>VIEW RULES & CATEGORIES</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/register"
                      className="px-2.5 py-1 text-xs font-heading font-black uppercase tracking-wider bg-brand-red text-white clip-tag hover:bg-[#ff0700] transition-colors"
                    >
                      REGISTER
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/championships" size="lg" variant="gold" icon={Trophy}>
            EXPLORE COMPLETE DIVISION DIRECTORY
          </Button>
          <Button href="/register" size="lg" variant="outline">
            FAST-TRACK ATHLETE ENTRY
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
