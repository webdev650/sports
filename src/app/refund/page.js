'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/common/SectionWrapper';
import { EVENT_DATA } from '@/lib/eventData';
import { ShieldCheck, RefreshCw, AlertCircle, ChevronRight } from 'lucide-react';

export default function RefundPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-25 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Refund Policy</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase text-white tracking-tight mb-4">
            REFUND & <span className="text-brand-red">CANCELLATION</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            AOGA official athlete refund protection guarantee and category amendment protocol.
          </p>
        </div>
      </section>

      <SectionWrapper animation="fade-up" bg="bg-background">
        <div className="max-w-4xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-sm sm:text-base">
          {/* Key Guarantee Banner */}
          <div className="p-6 sm:p-8 bg-zinc-950 border-2 border-brand-gold clip-angled">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
              <div>
                <span className="text-xs font-heading tracking-widest text-brand-gold font-bold uppercase">
                  AOGA Performance Guarantee
                </span>
                <h2 className="font-heading text-2xl font-black uppercase text-white">
                  100% Refund Protection
                </h2>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {EVENT_DATA.policies.refund}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
              <span className="text-brand-gold font-display text-4xl font-black block mb-2">100%</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">Event Cancellation</h3>
              <p className="text-xs text-zinc-400">
                Full 100% refund credited back to original source account within 7 business days if the festival is postponed or cancelled.
              </p>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
              <span className="text-brand-red font-display text-4xl font-black block mb-2">50%</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">Early Withdrawal</h3>
              <p className="text-xs text-zinc-400">
                Voluntary athlete withdrawals submitted prior to midnight on 31 October 2026 receive a 50% refund.
              </p>
            </div>

            <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
              <span className="text-green-400 font-display text-4xl font-black block mb-2">FREE</span>
              <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">Category Switch</h3>
              <p className="text-xs text-zinc-400">
                Zero penalty fee for switching weight classes or divisions before official online registration closes.
              </p>
            </div>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled">
            <h3 className="font-heading text-xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-brand-gold" />
              How to Request a Refund or Category Amendment
            </h3>
            <p className="text-zinc-400 text-sm mb-3">
              To request a cancellation, withdrawal, or division transfer, email the AOGA Organizing Committee with:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-zinc-300 text-sm">
              <li>Athlete Full Name & Registered WhatsApp Contact</li>
              <li>Official Holographic Registration Reference ID (from confirmation email/pass)</li>
              <li>Bank UTR / UPI Transaction Reference Number</li>
              <li>Reason for withdrawal or requested target weight division</li>
            </ol>
            <div className="mt-4 p-4 bg-black border border-zinc-800 text-xs text-zinc-400">
              Official Desk: <a href={`mailto:${EVENT_DATA.contact.email}`} className="text-brand-gold hover:underline">{EVENT_DATA.contact.email}</a> • Response within 48 hours.
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-zinc-800 text-xs text-zinc-400">
            <span>Baramunda Ground, Bhubaneswar (4–6 Dec 2026)</span>
            <Link href="/register" className="text-brand-red font-bold hover:underline flex items-center gap-1">
              Go to Registration <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
