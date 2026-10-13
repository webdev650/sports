'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { ArrowRight, Store, Briefcase, CheckCircle2 } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function SponsorStrip() {
  const partnerCategories = [
    'OFFICIAL NUTRITION PARTNER',
    'FITNESS APPAREL PARTNER',
    'AUTOMOBILE PARTNER',
    'HEALTHCARE & PHYSIO PARTNER',
    'BANKING & FINTECH PARTNER',
    'HOSPITALITY PARTNER',
    'ENERGY DRINK PARTNER',
    'SPORTS TECHNOLOGY PARTNER',
  ];

  return (
    <SectionWrapper
      id="sponsors-strip"
      animation="blur-to-sharp"
      bg="bg-surface"
      diagonal="top"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="BRAND ELEVATION"
          title="SPONSORSHIP & EXPO PAVILIONS"
          subtitle="Position your brand in front of 50,000+ stadium visitors, international athletes, and over 5 million digital broadcast viewers."
          accentColor="red"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-12">
          {/* Left: Sponsorship Tiers Card (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded text-brand-gold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-heading uppercase tracking-widest text-brand-gold font-bold">
                    INVESTMENT TIERS FROM ₹2 LAKH
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    Corporate Partnerships
                  </h3>
                </div>
              </div>

              <div className="space-y-4 my-6">
                {EVENT_DATA.sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.tier}
                    className="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-heading text-lg font-bold text-white uppercase">
                        {tier.tier}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {tier.benefits[0]}
                      </p>
                    </div>
                    <span className="font-display text-base font-bold text-brand-gold">
                      {tier.investment}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button href="/sponsors" variant="primary" icon={ArrowRight}>
              DOWNLOAD SPONSORSHIP DECK
            </Button>
          </div>

          {/* Right: Commercial Expo Stalls (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded text-brand-red">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-heading uppercase tracking-widest text-brand-red font-bold">
                    COMMERCIAL EXPO BOOTHS
                  </span>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white">
                    Stall Rates & Dimensions
                  </h3>
                </div>
              </div>

              <div className="space-y-3 my-6">
                {EVENT_DATA.stallRates.map((stall) => (
                  <div
                    key={stall.size}
                    className="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded flex items-center justify-between"
                  >
                    <div>
                      <div className="font-heading text-lg font-bold text-white">
                        {stall.size} Stall
                      </div>
                      <div className="text-xs text-zinc-400">
                        {stall.suitableFor}
                      </div>
                    </div>
                    <span className="font-display text-lg font-black text-brand-red">
                      {stall.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button href="/sponsors#stall-booking" variant="outlineGold" icon={ArrowRight}>
              BOOK COMMERCIAL STALL
            </Button>
          </div>
        </div>

        {/* Category Partner Grid */}
        <div className="w-full">
          <div className="text-center text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold mb-4">
            OPEN EXCLUSIVE CATEGORY PARTNERSHIPS:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {partnerCategories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-xs font-heading uppercase tracking-wider text-zinc-300 rounded-sm hover:border-brand-gold transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
