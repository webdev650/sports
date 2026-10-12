import AboutHero from '@/components/about/AboutHero';
import OriginStory from '@/components/about/OriginStory';
import EventHighlights from '@/components/about/EventHighlights';
import WorldMapVisual from '@/components/about/WorldMapVisual';
import LeadershipSection from '@/components/about/LeadershipSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export const metadata = {
  title: "About the Festival | INDIA'S BIGGEST SPORTS FESTIVAL 2026",
  description: "Learn about India's Biggest Sports Festival 2026 organised by All Odisha Gym Association (AOGA) at Baramunda Ground, Bhubaneswar. Story, 40+ countries, leadership committee, and event highlights.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <OriginStory />
      <EventHighlights />
      <WorldMapVisual />
      <LeadershipSection />
      <FinalCTASection />
    </div>
  );
}
