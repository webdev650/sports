'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import { EVENT_DATA } from '@/lib/eventData';
import { Trophy, Award, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PrizePolicyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Prize Guarantee Policy</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            PRIZE PURSE <span className="text-brand-gold">GUARANTEE</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Complete transparency on the ₹1.5 Crore total prize purse, disbursement schedule, and vehicle transfer protocols.
          </p>
        </div>
      </section>

      <SectionWrapper animation="fade-up" bg="bg-background">
        <div className="max-w-4xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          {/* Key Guarantee Box */}
          <div className="p-6 sm:p-8 bg-zinc-950 border-2 border-brand-red clip-angled">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-brand-gold" />
              <div>
                <span className="text-xs font-heading tracking-widest text-brand-gold font-bold uppercase">
                  AOGA Bank Escrow Commitment
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-white">
                  ₹1.50 Crore Guaranteed Cash & Vehicle Honors
                </h2>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Every single rupee and vehicle announced in official AOGA circulars is backed by an irrevocable bank guarantee. Cash prizes are disbursed via RTGS/NEFT or ceremonial cheques directly on the main championship podium.
            </p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled space-y-4">
            <h3 className="font-heading text-xl font-bold uppercase text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-red" />
              Major Championship Awards Breakdown
            </h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="p-3 bg-black border border-zinc-800 clip-angled flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white block">Anil Gochhikar Classic Bodybuilding</strong>
                  <span className="text-xs text-zinc-400">Overall Champion of Champions</span>
                </div>
                <span className="text-brand-gold font-display text-2xl font-black">₹20,00,000 CASH</span>
              </div>

              <div className="p-3 bg-black border border-zinc-800 clip-angled flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white block">Utkal Kesari Dangal (Matti Kusti)</strong>
                  <span className="text-xs text-zinc-400">Grand Rustam-e-Odisha Champion</span>
                </div>
                <span className="text-brand-red font-display text-lg font-black uppercase">ROYAL ENFIELD BULLET + SACRED GADA</span>
              </div>

              <div className="p-3 bg-black border border-zinc-800 clip-angled flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white block">All India Open Powerlifting</strong>
                  <span className="text-xs text-zinc-400">Total Purse • Strong Man & Strong Woman</span>
                </div>
                <span className="text-brand-gold font-display text-2xl font-black">₹14,00,000 TOTAL</span>
              </div>

              <div className="p-3 bg-black border border-zinc-800 clip-angled flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <strong className="text-white block">Star Category (Para-Athletes)</strong>
                  <span className="text-xs text-zinc-400">Free Registration • Cash Purse</span>
                </div>
                <span className="text-brand-gold font-display text-2xl font-black">₹2,10,000 CASH</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h3 className="font-heading text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              TDS, Tax Compliances & Vehicle Documentation
            </h3>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>All cash winnings are subject to applicable Indian Income Tax regulations (TDS under Section 194B) where applicable. Form 16A certificates will be issued by AOGA.</li>
              <li>Vehicle awards (Royal Enfield Bullet) will be registered under the official champion&apos;s name. RTO registration, insurance, and road taxes will be facilitated by the organizing committee in coordination with the dealership partner.</li>
              <li>Winners must provide PAN Card, Aadhaar Card, and cancelled cheque/bank passbook during podium accreditation.</li>
            </ul>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-800 text-xs text-zinc-400">
            <span>Festival Dates: 4–6 December 2026</span>
            <Link href="/register" className="text-brand-red font-bold hover:underline flex items-center gap-1">
              Register Now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
