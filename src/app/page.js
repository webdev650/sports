import HeroSection from '@/components/home/HeroSection';
import Marquee from '@/components/common/Marquee';
import StatsSection from '@/components/home/StatsSection';
import ChampionshipPromoTiles from '@/components/home/ChampionshipPromoTiles';
import StickySplitChampionships from '@/components/home/StickySplitChampionships';
import PrizeHighlightSection from '@/components/home/PrizeHighlightSection';
import GuestsSlider from '@/components/home/GuestsSlider';
import DangalFeatureSection from '@/components/home/DangalFeatureSection';
import ScheduleTeaser from '@/components/home/ScheduleTeaser';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import SponsorStrip from '@/components/home/SponsorStrip';
import FinalCTASection from '@/components/home/FinalCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 3. Full-screen hero video, split-text headline, tagline typewriter, two CTAs */}
      <HeroSection />

      {/* 4. Marquee ticker of the six sports & hashtags */}
      <Marquee />

      {/* 5. Stats row with counters (Rs 1.5 Cr, 40+, 233+, 55+, 3 Days, 6 Championships) */}
      <StatsSection />

      {/* 6. Championship promo tiles (six, diagonal-cut, hover reveal) */}
      <ChampionshipPromoTiles />

      {/* 7. Sticky split section: "One festival, six championships" with scrolling image stack */}
      <StickySplitChampionships />

      {/* 8. Prize highlight: Champion of Champions Rs 20,00,000 on oversized outlined numerals */}
      <PrizeHighlightSection />

      {/* 9. Guests slider with large portraits (Sahil Khan, Anil Gochhikar, Dutee Chand, Afroz Khan) */}
      <GuestsSlider />

      {/* 10. Dangal feature: Royal Enfield Bullet reveal (25 years later returns to Bhubaneswar) */}
      <DangalFeatureSection />

      {/* 11. Schedule teaser with 3 day cards */}
      <ScheduleTeaser />

      {/* 12. Experiences grid (key festival experiences & attractions) */}
      <ExperiencesSection />

      {/* 13. Sponsor and commercial stall CTA */}
      <SponsorStrip />

      {/* 14. Final countdown CTA with live ticking clock */}
      <FinalCTASection />
    </div>
  );
}
