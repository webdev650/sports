'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import Countdown from '@/components/common/Countdown';
import Button from '@/components/common/Button';
import { Flame, Phone, MessageCircle, ShieldCheck, Trophy, Sparkles } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function FinalCTASection() {
  return (
    <SectionWrapper
      id="final-countdown-cta"
      animation="elastic-bounce"
      bg="mesh"
      className="py-20 lg:py-28"
    >
      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center p-8 sm:p-12 lg:p-16 bg-zinc-950/95 border-2 border-brand-red clip-angled shadow-[0_0_60px_rgba(225,6,0,0.45)]">
        {/* Glow corners */}
        <div className="absolute -top-1 -right-1 w-8 h-8 bg-brand-gold shadow-[0_0_20px_#F5B301]" />
        <div className="absolute -bottom-1 -left-1 w-8 h-8 bg-brand-red shadow-[0_0_20px_#E10600]" />

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-red text-white font-heading font-black text-xs uppercase tracking-widest rounded-sm mb-6">
          <Flame className="w-4 h-4 fill-white" />
          <span>FESTIVAL COUNTDOWN &bull; REGISTRATIONS CLOSING SOON</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white leading-[0.95] mb-4 tracking-tight">
          STEP INTO THE ARENA. <br />
          <span className="text-brand-gold">CLAIM YOUR PODIUM.</span>
        </h2>

        {/* Description */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          Join international bodybuilders competing for the ₹20 Lakh purse, powerlifters chasing raw deadlift records, dawn marathoners on Bhubaneswar highways, and wrestlers fighting for the Royal Enfield Bullet.
        </p>

        {/* Live Countdown Box */}
        <div className="w-full mb-10 py-6 px-4 bg-black/70 border border-zinc-800 rounded clip-angled">
          <div className="text-[11px] font-heading uppercase tracking-widest text-brand-gold font-bold mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>TIME REMAINING UNTIL FRIDAY 4 DECEMBER 2026 (05:30 AM IST)</span>
          </div>
          <Countdown targetDate="2026-12-04T05:30:00+05:30" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <Button
            href="/register"
            size="xl"
            variant="primary"
            className="w-full sm:w-auto shadow-[0_0_35px_rgba(225,6,0,0.7)] text-base sm:text-lg"
            icon={Flame}
          >
            REGISTER ATHLETE NOW
          </Button>

          <Button
            href={EVENT_DATA.contact.whatsappUrl}
            target="_blank"
            size="xl"
            variant="outlineGold"
            className="w-full sm:w-auto text-base sm:text-lg"
            icon={MessageCircle}
          >
            WHATSAPP HELPLINE
          </Button>
        </div>

        {/* Direct Contact & Guarantee Footer */}
        <div className="pt-6 border-t border-zinc-800/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Full 100% refund if cancelled • 50% until 31 Oct 2026 • Free category change before closing</span>
          </div>

          <a
            href={`tel:${EVENT_DATA.contact.phoneClean}`}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-red font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>Official Helpline: {EVENT_DATA.contact.phone}</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
