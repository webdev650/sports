'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import RevealImage from '@/components/common/RevealImage';
import PrizeCard from '@/components/cards/PrizeCard';
import Button from '@/components/common/Button';
import { Shield, Bike, Trophy, Award, Calendar, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function DangalPage() {
  const champ = EVENT_DATA.championships.find((c) => c.id === 'dangal');

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
            <span className="text-brand-gold font-bold">Dangal</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-gold/60 clip-angled mb-4">
            <Shield className="w-4 h-4 text-brand-gold" />
            <span className="font-heading text-xs uppercase tracking-widest text-brand-gold font-black">
              25 YEARS LATER, THE DANGAL RETURNS • UTKAL KESARI 2026
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            DANGAL / MATTI KUSTI <br />
            <span className="text-brand-red">UTKAL KESARI 2026</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            A quarter-century after the legendary akhara clashes, traditional red clay wrestling returns to Bhubaneswar soil. Sheer valor, sacred Gada honours, and a Royal Enfield Bullet for the champion.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-heading uppercase tracking-wider text-zinc-300 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span>4 – 6 DECEMBER 2026 (FINALS SUN 6 DEC, 2 PM)</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-red" />
              <span>ENTRY: ₹1,000</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR UTKAL KESARI DANGAL
            </Button>
            <Button href="#bullet-prize" size="lg" variant="outlineGold">
              EXPLORE ROYAL ENFIELD & GADA PRIZE
            </Button>
          </div>
        </div>
      </section>

      {/* Royal Enfield & Gada Spotlight */}
      <SectionWrapper id="bullet-prize" animation="zoom-in" bg="bg-surface" diagonal="top">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-zinc-950 p-6 sm:p-10 border-2 border-brand-gold clip-angled shadow-[0_0_50px_rgba(245,179,1,0.25)] mb-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-black font-heading font-black text-xs uppercase tracking-widest rounded-sm w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE SUPREME KUSTI HONOR</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-white leading-tight mb-4">
              ROYAL ENFIELD BULLET & <br />
              <span className="text-brand-gold drop-shadow-[0_0_20px_rgba(245,179,1,0.6)]">
                SACRED GOLD GADA
              </span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              The men&apos;s Utkal Kesari champion will be awarded a brand-new Royal Enfield Bullet motorcycle on the grand podium, alongside the ceremonial gold and silver Gada (Mace). The women&apos;s champion receives <strong className="text-white">₹1,00,000 Cash</strong> and the Sacred Gada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-gold font-heading uppercase tracking-wider block font-bold">
                  MEN&apos;S UTKAL KESARI
                </span>
                <span className="text-white font-heading text-lg font-bold">Royal Enfield Bullet + The Gada</span>
              </div>
              <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled">
                <span className="text-xs text-brand-red font-heading uppercase tracking-wider block font-bold">
                  WOMEN&apos;S UTKAL KESARI
                </span>
                <span className="text-white font-heading text-lg font-bold">₹1,00,000 Cash + The Gada</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <RevealImage
              src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop"
              alt="Royal Enfield Bullet Motorcycle Prize"
              variant="rotate-in"
              aspectRatio="aspect-[4/3]"
            />
          </div>
        </div>

        {/* 25 Years Later Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-5">
            <RevealImage
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
              alt="Matti Kusti Traditional Akhara wrestling in clay"
              variant="grayscale-color"
              aspectRatio="aspect-[4/3]"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionHeading
              align="left"
              tag="THE REVIVAL"
              title="25 YEARS LATER, THE DANGAL RETURNS"
              subtitle="Reviving the traditional clay soil akhara battles that defined Odisha's warrior folklore."
              accentColor="gold"
              className="mb-4"
            />

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
              The red soil (Matti) is blessed with turmeric, neem, mustard oil, and curd in accordance with traditional wrestling rituals. Wrestlers apply the sacred soil to their bodies before each clash—a symbol of humility, discipline, and communion with the motherland.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <li>• Traditional Akhara pits: 20x20 ft dug clay mixed with therapeutic herbs.</li>
              <li>• Open weight bouts leading into the Utkal Kesari title bout.</li>
              <li>• Strict refereeing by veteran Rustam-e-Hind and state akhara masters.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary" icon={Flame}>
            REGISTER ATHLETE (₹1,000)
          </Button>
          <Button href="/schedule" size="xl" variant="outlineGold">
            VIEW DANGAL BOUT SCHEDULE
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
