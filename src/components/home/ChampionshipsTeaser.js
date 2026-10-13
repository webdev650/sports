'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import ChampionshipCard from '@/components/cards/ChampionshipCard';
import Button from '@/components/common/Button';
import { ArrowRight, Trophy } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';
import { MEDIA_MANIFEST } from '@/lib/mediaManifest';

export default function ChampionshipsTeaser() {
  // Mapping specific distinct images & reveal animations for each of the 6 championships
  const championshipsMedia = [
    {
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
      reveal: 'tilt-3d',
    },
    {
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop',
      reveal: 'circle-expand',
    },
    {
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
      reveal: 'grayscale-color',
    },
    {
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=800&auto=format&fit=crop',
      reveal: 'horizontal-blinds',
    },
    {
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
      reveal: 'vertical-blinds',
    },
    {
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
      reveal: 'diagonal-wipe',
    },
  ];

  return (
    <SectionWrapper
      id="championships-teaser"
      animation="stagger-cascade"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="THE SIX CROWNS"
          title="CHAMPIONSHIP ARENAS"
          subtitle="Compete under certified international and national judging panels. Six premier disciplines, non-stop broadcast coverage, and ₹1.5 Crore in total cash purses."
          accentColor="gold"
        />

        {/* 6 Championship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-12">
          {EVENT_DATA.championships.map((champ, index) => (
            <ChampionshipCard
              key={champ.id}
              championship={champ}
              index={index}
              imageSrc={championshipsMedia[index]?.image}
              imageReveal={championshipsMedia[index]?.reveal}
            />
          ))}
        </div>

        {/* View All Championships Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button href="/championships" variant="gold" size="lg" icon={Trophy}>
            VIEW DETAILED DIVISION DIRECTORY
          </Button>
          <Button href="/register" variant="outline" size="lg">
            SELECT SPORT & REGISTER
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
