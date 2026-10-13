'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import { EVENT_DATA } from '@/lib/eventData';
import { ShieldCheck, Lock, ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Privacy Policy</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            PRIVACY <span className="text-brand-gold">POLICY</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            How All Odisha Gym Association (AOGA) collects, protects, and handles athlete data and registration credentials.
          </p>
        </div>
      </section>

      <SectionWrapper animation="fade-up" bg="bg-background">
        <div className="max-w-4xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-gold" />
              1. Information We Collect
            </h2>
            <p className="mb-3 text-zinc-400">
              When registering for India&apos;s Biggest Sports Festival 2026, we collect athlete contact details, sporting affiliation, biometric weigh-in category, and payment reference numbers:
            </p>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>Athlete Full Name, Date of Birth, Gender, City, and State.</li>
              <li>WhatsApp phone number and email address for dispatching digital passes and schedule call-ups.</li>
              <li>Gym / Academy affiliation and competition division.</li>
              <li>Bank reference UTR number for payment verification.</li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
              2. How Your Information Is Used
            </h2>
            <ul className="space-y-2 list-disc list-inside text-zinc-400 text-sm">
              <li>Generating official Holographic Athlete IDs and stage roster schedules.</li>
              <li>Verification of entry fees and anti-duplicate registration checks.</li>
              <li>Communicating weigh-in times, emergency alerts, or venue access protocol.</li>
              <li>We will never sell or rent your personal information to third-party commercial brokers.</li>
            </ul>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white mb-3">
              3. Data Retention & Security
            </h2>
            <p className="text-zinc-400 text-sm">
              Registration data is stored on encrypted, access-restricted servers. Athlete health self-declarations and weigh-in records are strictly maintained under medical officer oversight and archived following event conclusion.
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-800 text-xs text-zinc-400">
            <span>Official Contact: {EVENT_DATA.contact.email}</span>
            <Link href="/contact" className="text-brand-red font-bold hover:underline flex items-center gap-1">
              Contact Secretariat <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
