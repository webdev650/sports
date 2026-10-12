'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function ScheduleTeaser() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const currentDay = EVENT_DATA.schedule[activeDayIndex];

  return (
    <SectionWrapper
      id="schedule-teaser"
      animation="slide-left"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="3 DAYS NON-STOP"
          title="FESTIVAL SCHEDULE TIMELINE"
          subtitle="Precision timed championship heats and stages across 3 electric days. Mark your calendar and coordinate athlete weigh-ins."
          accentColor="red"
        />

        {/* 3 Day Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-2xl">
          {EVENT_DATA.schedule.map((day, idx) => {
            const isActive = activeDayIndex === idx;
            return (
              <button
                key={day.day}
                onClick={() => setActiveDayIndex(idx)}
                className={`flex-1 min-w-[140px] py-3.5 px-4 clip-angled font-heading uppercase tracking-wider text-sm sm:text-base font-extrabold transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-brand-red text-white border-brand-red shadow-[0_0_20px_rgba(225,6,0,0.5)]'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <div className="text-xs opacity-75 font-normal">{day.day}</div>
                <div>{day.title.split('&')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Timeline Content */}
        <div className="w-full max-w-4xl bg-zinc-950 p-6 sm:p-8 lg:p-10 border border-zinc-800 clip-angled mb-10">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-gold">
                {currentDay.day} — {currentDay.date}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                {currentDay.title}
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase bg-zinc-900 px-3 py-1.5 border border-zinc-800 rounded">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span>BARAMUNDA GROUND</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDayIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentDay.events.map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 pb-6 border-b border-zinc-900/80 last:border-0 last:pb-0 group"
                >
                  <div className="shrink-0 w-36 sm:w-44 flex items-center gap-2 font-display text-base sm:text-lg text-brand-gold">
                    <Clock className="w-4 h-4 text-brand-red shrink-0" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white group-hover:text-brand-red transition-colors">
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

        {/* Link */}
        <Button href="/schedule" variant="primary" size="lg" icon={ArrowRight}>
          VIEW COMPLETE 3-DAY ITINERARY & WEIGH-IN SLOTS
        </Button>
      </div>
    </SectionWrapper>
  );
}
