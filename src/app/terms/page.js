'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import { EVENT_DATA } from '@/lib/eventData';
import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Terms & Conditions</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            TERMS & <span className="text-brand-red">CONDITIONS</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Official athlete accreditation and spectator attendance regulations for India&apos;s Biggest Sports Festival 2026.
          </p>
        </div>
      </section>

      <SectionWrapper animation="fade-up" bg="bg-background">
        <div className="max-w-4xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-red" />
              1. Festival Accreditation & Eligibility
            </h2>
            <p className="mb-3 text-zinc-400">
              India&apos;s Biggest Sports Festival 2026 is organized by the All Odisha Gym Association (AOGA) and scheduled for 4–6 December 2026 at Baramunda Ground, Bhubaneswar, Odisha.
            </p>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>All registered competitors must present government-issued photo identification (Aadhaar, Passport, or Voter ID) during on-site weigh-in and accreditation.</li>
              <li>Athletes are solely responsible for ensuring they meet the specific age, weight, and federation eligibility criteria for their chosen event.</li>
              <li>Falsification of age, weight, identity, or federation sanction documents results in immediate disqualification with zero refund.</li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              2. Fair Play, Anti-Doping & Conduct
            </h2>
            <p className="mb-3 text-zinc-400">
              The festival upholds world-class sportsmanship and anti-doping integrity:
            </p>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>Referees and judging panel decisions across all 6 championships are final and binding.</li>
              <li>AOGA reserves the right to perform random or targeted dope testing under relevant national sports federation standards.</li>
              <li>Unsportsmanlike conduct, verbal abuse of officials, or damage to arena equipment will result in removal from the venue and forfeiture of all accolades.</li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3">
              3. Media Rights & Broadcast Clearance
            </h2>
            <p className="text-zinc-400 text-sm">
              By participating or entering the festival premises, athletes and spectators grant AOGA and its broadcast partners perpetual, royalty-free rights to photograph, record, livestream, and televise their likeness across all media channels worldwide.
            </p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3">
              4. Governing Law & Jurisdiction
            </h2>
            <p className="text-zinc-400 text-sm">
              All disputes arising under or related to the festival shall be subject to the exclusive jurisdiction of the competent courts in Bhubaneswar, Odisha, India.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-800 text-xs text-zinc-400">
            <span>Last Updated: October 2026</span>
            <Link href="/register" className="text-brand-red font-bold hover:underline flex items-center gap-1">
              Proceed to Registration <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
