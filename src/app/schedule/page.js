'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Calendar, Clock, MapPin, Trophy, ShieldCheck, Flame, Download } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function SchedulePage() {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentScheduleDay = EVENT_DATA.schedule[activeDayIdx];

  const weighInChecklist = [
    'Original Government-issued Photo ID (Aadhaar / Passport / Voter ID)',
    'Proof of Age (Birth Certificate / Class 10 Certificate)',
    'Recent Passport Size Photograph (2 copies)',
    'Association / Federation Registration details (if affiliated)',
    'Signed Athlete Self-Declaration and Event Waiver',
    'Certified Medical Fitness Declaration',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Official Schedule</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Calendar className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              3 DAYS NON-STOP BROADCAST TIMELINE • 4-6 DECEMBER 2026
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            OFFICIAL <span className="text-brand-red">FESTIVAL SCHEDULE</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Complete minute-by-minute itinerary across all six sports arenas at Baramunda Ground, Bhubaneswar. Review weigh-in gates, heat schedules, and championship finals.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="/register" size="lg" variant="primary" icon={Flame}>
              REGISTER FOR YOUR EVENT
            </Button>
            <Button href="#weigh-in" size="lg" variant="outlineGold">
              VIEW WEIGH-IN CHECKLIST
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Day Animated Interactive Tabs */}
      <SectionWrapper id="timeline-section" animation="stagger-cascade" bg="bg-background">
        <div className="flex flex-col items-center">
          {/* Day Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 w-full max-w-3xl">
            {EVENT_DATA.schedule.map((day, idx) => {
              const isActive = activeDayIdx === idx;
              return (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIdx(idx)}
                  className={`flex-1 min-w-[160px] py-4 px-6 clip-angled font-heading uppercase tracking-wider text-base sm:text-lg font-black transition-all border ${
                    isActive
                      ? 'bg-brand-red text-white border-brand-red shadow-[0_0_25px_rgba(225,6,0,0.6)]'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-normal opacity-80">{day.day} • {day.date.split(',')[0]}</div>
                  <div>{day.title}</div>
                </button>
              );
            })}
          </div>

          {/* Timeline Panel */}
          <div className="w-full max-w-4xl bg-zinc-950 p-6 sm:p-10 border border-zinc-800 clip-angled mb-16 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-6 mb-8 gap-3">
              <div>
                <span className="text-xs font-heading font-black uppercase tracking-widest text-brand-gold">
                  {currentScheduleDay.day} — {currentScheduleDay.date}
                </span>
                <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white mt-1">
                  {currentScheduleDay.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-heading tracking-widest uppercase text-zinc-400 bg-zinc-900 px-4 py-2 border border-zinc-800 rounded">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>BARAMUNDA GROUND</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDayIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentScheduleDay.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 pb-6 border-b border-zinc-900 last:border-0 last:pb-0 group"
                  >
                    <div className="shrink-0 w-40 sm:w-48 flex items-center gap-2.5 font-display text-lg sm:text-xl text-brand-gold">
                      <Clock className="w-5 h-5 text-brand-red shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-brand-red transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                        {event.details}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Weigh-in & Event Day Checklist */}
          <div id="weigh-in" className="w-full max-w-4xl bg-zinc-950/80 border-2 border-brand-gold p-6 sm:p-10 clip-angled mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-gold text-black clip-angled">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-heading uppercase tracking-widest text-brand-gold font-bold">
                  MANDATORY ATHLETE ACCREDITATION
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
                  Bring On Event Day Checklist
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
              {weighInChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-zinc-900/60 rounded border border-zinc-800">
                  <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 text-xs text-zinc-400">
              Note: Athletes failing to report for official weigh-ins during designated time slots will be disqualified without refund.
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/register" size="xl" variant="primary">
              CONFIRM REGISTRATION & WEIGH-IN SLOT
            </Button>
            <Button href="/contact" size="xl" variant="outline">
              ENQUIRE ABOUT TIMELINE
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
