'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import { Trophy, Globe, Bike, HeartHandshake, Zap, Shield, Sparkles } from 'lucide-react';

export default function EventHighlights() {
  const highlights = [
    {
      icon: Trophy,
      title: '₹1.5 Crore Cash Prize Pool',
      subtitle: 'Highest in Eastern India',
      desc: 'All podium prize payouts are guaranteed by AOGA, transparently budgeted, and presented immediately upon result declaration on the broadcast stage.',
      accent: 'gold',
      badge: 'CASH PURSE',
    },
    {
      icon: Globe,
      title: '40+ Participating Countries',
      subtitle: 'Global Athletic Footprint',
      desc: 'Welcoming international competitors, certified jury delegates, and fitness delegations across Asia, Europe, Middle East, and the Americas.',
      accent: 'red',
      badge: 'INTERNATIONAL',
    },
    {
      icon: Bike,
      title: 'Royal Enfield Bullet & Gold Gada',
      subtitle: 'Utkal Kesari 2026 Dangal',
      desc: '25 years after the historic akhara battles, traditional Matti Kusti returns to Bhubaneswar. The men’s champion takes home a brand-new Royal Enfield Bullet and sacred Gada.',
      accent: 'gold',
      badge: 'HERITAGE PRIZE',
    },
    {
      icon: Zap,
      title: '6 Championship Arenas',
      subtitle: 'Simultaneous Multi-Sport Heats',
      desc: 'Anil Gochhikar Classic Bodybuilding, All India Open Powerlifting, Utkal Kesari Dangal, Dutee’s Marathon, Arm Wrestling, and Odisha Open Boxing running simultaneously.',
      accent: 'red',
      badge: '6 CROWNS',
    },
    {
      icon: HeartHandshake,
      title: 'Star Category (Para-Athletes)',
      subtitle: 'Free Registration & ₹2.10 Lakh Purse',
      desc: 'AOGA ensures zero financial barrier for para-athletes. Full free registration, dedicated competition divisions, equal stage lighting, and ₹2,10,000 in cash prizes.',
      accent: 'gold',
      badge: 'FREE ENTRY',
    },
    {
      icon: Shield,
      title: 'Complete Athlete Hospitality & Media',
      subtitle: 'Broadcast Level Treatment',
      desc: 'Every athlete receives an official festival ID, custom medal, kit, warm-up zone access, medical support, plus 10 stage photos and a 15-second reel delivered in 72 hours.',
      accent: 'red',
      badge: 'VIP PERKS',
    },
  ];

  return (
    <SectionWrapper
      id="event-highlights"
      animation="stagger-cascade"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="FESTIVAL PILLARS"
          title="EVENT HIGHLIGHTS & DISTINCTIONS"
          subtitle="Built from the ground up to establish India's premier multi-sport celebration. Here is what sets AOGA 2026 apart from every other competition."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            const isGold = item.accent === 'gold';
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-6 sm:p-8 bg-zinc-950 clip-angled border transition-all duration-300 group ${
                  isGold
                    ? 'border-zinc-800 hover:border-brand-gold/70 hover:shadow-[0_0_30px_rgba(245,179,1,0.2)]'
                    : 'border-zinc-800 hover:border-brand-red/70 hover:shadow-[0_0_30px_rgba(225,6,0,0.2)]'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-2.5 py-0.5 text-[11px] font-heading font-black uppercase tracking-wider rounded-sm ${
                        isGold ? 'bg-brand-gold text-black' : 'bg-brand-red text-white'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs text-zinc-500 font-heading tracking-widest uppercase">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`p-3 rounded w-fit mb-4 border transition-colors ${
                      isGold
                        ? 'bg-zinc-900 border-zinc-800 text-brand-gold group-hover:bg-brand-gold/10'
                        : 'bg-zinc-900 border-zinc-800 text-brand-red group-hover:bg-brand-red/10'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-bold uppercase text-white mb-1 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <div
                    className={`text-xs font-heading uppercase tracking-wider font-semibold mb-3 ${
                      isGold ? 'text-brand-gold' : 'text-brand-red'
                    }`}
                  >
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] text-zinc-400 font-heading tracking-widest uppercase">
                  <span>BARAMUNDA GROUND</span>
                  <span className="text-brand-gold">AOGA 2026</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
