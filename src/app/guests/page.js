'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import GuestCard from '@/components/cards/GuestCard';
import Button from '@/components/common/Button';
import { Star, Trophy, Users, ShieldCheck, Sparkles, Calendar, Clock } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function GuestsPage() {
  const allGuests = EVENT_DATA.guests;
  const committee = EVENT_DATA.committee.leadership;

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Guests & Committee</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-gold/60 clip-angled mb-4">
            <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
            <span className="font-heading text-xs uppercase tracking-widest text-brand-gold font-black">
              SPORTS TITANS & CELEBRITY ICONS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            DISTINGUISHED <span className="text-brand-gold">CHIEF GUESTS</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Meet the pioneers, Olympians, and champions elevating India&apos;s Biggest Sports Festival 2026. Conducting masterclasses, flag-offs, and medal handovers throughout the 3-day festival at Baramunda Ground.
          </p>

          <div className="flex items-center gap-4">
            <Button href="/schedule" variant="primary">
              VIEW GUEST ITINERARY
            </Button>
            <Button href="/register" variant="outlineGold">
              REGISTER AS ATHLETE
            </Button>
          </div>
        </div>
      </section>

      {/* Main Guests Grid */}
      <SectionWrapper id="all-guests-grid" animation="stagger-cascade" bg="bg-background">
        <SectionHeading
          tag="HALL OF HEROES"
          title="CHAMPIONS IN THE ARENA"
          subtitle="Hero-quality portraits with official accreditation status, biographies, and direct athlete interaction slots."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {allGuests.map((guest, idx) => (
            <GuestCard key={guest.id} guest={guest} index={idx} />
          ))}
        </div>

        {/* Meet & Greet Protocol Box */}
        <div className="w-full bg-zinc-950 border-2 border-brand-red p-6 sm:p-10 clip-angled mb-16 shadow-[0_0_35px_rgba(225,6,0,0.25)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-brand-red text-white clip-angled">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-heading uppercase tracking-widest text-brand-gold font-bold">
                ATHLETE & VIP ACCESS
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase text-white">
                Celebrity Meet & Greet Protocol
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-zinc-300 mt-6">
            <div className="p-4 bg-zinc-900/60 rounded border border-zinc-800">
              <Clock className="w-4 h-4 text-brand-red mb-2" />
              <strong className="text-white block font-heading text-base mb-1">SCHEDULED AUTOGRAPH SESSIONS</strong>
              Held daily between 2:00 PM and 4:00 PM in the VIP Sponsor Pavilion. Open to all registered competitors.
            </div>
            <div className="p-4 bg-zinc-900/60 rounded border border-zinc-800">
              <Trophy className="w-4 h-4 text-brand-gold mb-2" />
              <strong className="text-white block font-heading text-base mb-1">STAGE HANDOVER MOMENTS</strong>
              Chief guests personally present the ₹20 Lakh COC trophy, Royal Enfield Bullet key, and national title belts.
            </div>
            <div className="p-4 bg-zinc-900/60 rounded border border-zinc-800">
              <Users className="w-4 h-4 text-brand-red mb-2" />
              <strong className="text-white block font-heading text-base mb-1">MEDIA PHOTO OPPS</strong>
              Broadcast backdrops with professional high-resolution photo deliveries for accredited athletes.
            </div>
          </div>
        </div>

        {/* Organizing Leadership Committee */}
        <SectionHeading
          tag="GOVERNANCE"
          title="AOGA EXECUTIVE COMMITTEE"
          subtitle="The leadership council steering Odisha’s flagship sporting extravaganza."
          accentColor="red"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {committee.map((comm) => (
            <div
              key={comm.name}
              className="p-6 bg-zinc-950 border border-zinc-800 clip-angled text-center hover:border-brand-gold transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 mx-auto flex items-center justify-center text-brand-gold mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-heading font-black uppercase tracking-widest text-brand-red block mb-1">
                {comm.role}
              </span>
              <h4 className="font-heading text-xl font-bold uppercase text-white">
                {comm.name}
              </h4>
              <p className="text-xs text-zinc-400 mt-2">
                All Odisha Gym Association (AOGA)
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/register" size="xl" variant="primary">
            REGISTER TO COMPETE BEFORE CHIEF GUESTS
          </Button>
          <Button href="/contact" size="xl" variant="outline">
            CONTACT GUEST RELATIONS DESK
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
