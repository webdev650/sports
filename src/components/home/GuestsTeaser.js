'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import GuestCard from '@/components/cards/GuestCard';
import Button from '@/components/common/Button';
import { Star, Users } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function GuestsTeaser() {
  // 4 Main Guests for the teaser
  const mainGuests = EVENT_DATA.guests.slice(0, 4);

  return (
    <SectionWrapper
      id="guests-teaser"
      animation="rotate-scale"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="LEGENDS IN THE ARENA"
          title="DISTINGUISHED CHIEF GUESTS"
          subtitle="Meet the titans, Olympians, and fitness icons who have transformed Indian sports. Present in person throughout the 3-day festival for athlete interactions, masterclasses, and award handovers."
          accentColor="gold"
        />

        {/* 4 Guest Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full mb-12">
          {mainGuests.map((guest, idx) => (
            <GuestCard key={guest.id} guest={guest} index={idx} />
          ))}
        </div>

        {/* Link to all guests & committee */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/guests" variant="outlineGold" size="lg" icon={Users}>
            VIEW ALL GUESTS & COMMITTEE MEMBERS
          </Button>
          <Button href="/schedule" variant="ghost" size="lg">
            VIEW MEET & GREET SCHEDULE
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
