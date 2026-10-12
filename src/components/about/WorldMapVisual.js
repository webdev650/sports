'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import { Globe, MapPin, Users, Award, Shield } from 'lucide-react';

export default function WorldMapVisual() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = [
    { id: 'all', label: 'All Global Delegations' },
    { id: 'asia', label: 'Asia & Middle East' },
    { id: 'europe', label: 'Europe' },
    { id: 'americas', label: 'Americas' },
    { id: 'africa', label: 'Africa & Oceania' },
  ];

  const countries = [
    { name: 'India', region: 'asia', code: 'IN', athletes: 'Host Nation / 1,800+', flag: '🇮🇳' },
    { name: 'United Arab Emirates', region: 'asia', code: 'AE', athletes: '35 Competitors', flag: '🇦🇪' },
    { name: 'Kuwait', region: 'asia', code: 'KW', athletes: '22 Competitors', flag: '🇰🇼' },
    { name: 'United Kingdom', region: 'europe', code: 'GB', athletes: '18 Competitors + 3 Judges', flag: '🇬🇧' },
    { name: 'United States', region: 'americas', code: 'US', athletes: '25 Competitors + Chief Official', flag: '🇺🇸' },
    { name: 'Germany', region: 'europe', code: 'DE', athletes: '14 Competitors', flag: '🇩🇪' },
    { name: 'Australia', region: 'africa', code: 'AU', athletes: '12 Competitors', flag: '🇦🇺' },
    { name: 'South Africa', region: 'africa', code: 'ZA', athletes: '16 Competitors', flag: '🇿🇦' },
    { name: 'Japan', region: 'asia', code: 'JP', athletes: '10 Competitors', flag: '🇯🇵' },
    { name: 'South Korea', region: 'asia', code: 'KR', athletes: '15 Competitors', flag: '🇰🇷' },
    { name: 'Singapore', region: 'asia', code: 'SG', athletes: '12 Competitors', flag: '🇸🇬' },
    { name: 'Malaysia', region: 'asia', code: 'MY', athletes: '14 Competitors', flag: '🇲🇾' },
    { name: 'Iran', region: 'asia', code: 'IR', athletes: '20 Powerlifters', flag: '🇮🇷' },
    { name: 'Italy', region: 'europe', code: 'IT', athletes: '8 Competitors', flag: '🇮🇹' },
    { name: 'France', region: 'europe', code: 'FR', athletes: '10 Competitors', flag: '🇫🇷' },
    { name: 'Spain', region: 'europe', code: 'ES', athletes: '12 Competitors', flag: '🇪🇸' },
    { name: 'Brazil', region: 'americas', code: 'BR', athletes: '14 Competitors', flag: '🇧🇷' },
    { name: 'Canada', region: 'americas', code: 'CA', athletes: '11 Competitors', flag: '🇨🇦' },
    { name: 'Egypt', region: 'africa', code: 'EG', athletes: '18 Competitors', flag: '🇪🇬' },
    { name: 'Nigeria', region: 'africa', code: 'NG', athletes: '15 Competitors', flag: '🇳🇬' },
    { name: 'Thailand', region: 'asia', code: 'TH', athletes: '16 Competitors', flag: '🇹🇭' },
    { name: 'Sri Lanka', region: 'asia', code: 'LK', athletes: '24 Competitors', flag: '🇱🇰' },
    { name: 'Nepal', region: 'asia', code: 'NP', athletes: '30 Competitors', flag: '🇳🇵' },
    { name: 'Kazakhstan', region: 'asia', code: 'KZ', athletes: '12 Competitors', flag: '🇰🇿' },
  ];

  const filteredCountries =
    selectedRegion === 'all'
      ? countries
      : countries.filter((c) => c.region === selectedRegion);

  return (
    <SectionWrapper
      id="international-participation"
      animation="zoom-in"
      bg="bg-surface"
      diagonal="both"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="GLOBAL ATHLETIC FOOTPRINT"
          title="INTERNATIONAL PARTICIPATION"
          subtitle="40+ nations bringing elite competitors, registered delegations, and certified international federation jury members directly to Baramunda Ground."
          accentColor="red"
        />

        {/* Global Statistics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl mb-10">
          <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled flex items-center gap-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-gold rounded">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-black text-white">40+</div>
              <div className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold">Nations Represented</div>
            </div>
          </div>

          <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled flex items-center gap-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-red rounded">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-black text-white">350+</div>
              <div className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold">International Competitors</div>
            </div>
          </div>

          <div className="p-5 bg-zinc-950 border border-zinc-800 clip-angled flex items-center gap-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 text-brand-gold rounded">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-black text-white">25+</div>
              <div className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold">International Jury Judges</div>
            </div>
          </div>
        </div>

        {/* Stylized World Map Visual Arena */}
        <div className="w-full relative bg-zinc-950 border-2 border-zinc-800 p-6 sm:p-10 clip-angled mb-8 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          {/* SVG Stylized World Map Graphic */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-60 text-zinc-700"
              fill="currentColor"
            >
              {/* Simplified world map continent paths */}
              <path d="M150,120 Q180,90 220,110 T300,160 Q260,220 220,240 T150,180 Z" opacity="0.3" fill="#333" />
              <path d="M220,260 Q260,280 280,350 T240,420 Q190,360 200,300 Z" opacity="0.3" fill="#333" />
              <path d="M450,110 Q500,90 560,130 T530,220 Q470,220 440,160 Z" opacity="0.3" fill="#333" />
              <path d="M460,220 Q540,240 560,320 T500,430 Q440,360 450,280 Z" opacity="0.3" fill="#333" />
              <path d="M570,110 Q700,70 820,130 T880,260 Q750,300 660,220 Z" opacity="0.4" fill="#444" />
              <path d="M720,320 Q820,330 840,400 T760,440 Q710,400 720,350 Z" opacity="0.3" fill="#333" />

              {/* Glowing Hub in India / Bhubaneswar (lat/long mapped beacon) */}
              <circle cx="680" cy="225" r="14" fill="#E10600" opacity="0.3" className="animate-ping" />
              <circle cx="680" cy="225" r="7" fill="#E10600" />
              <circle cx="680" cy="225" r="3" fill="#F5B301" />

              {/* International connecting broadcast flight vectors */}
              <line x1="680" y1="225" x2="520" y2="150" stroke="#F5B301" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <line x1="680" y1="225" x2="260" y2="180" stroke="#E10600" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <line x1="680" y1="225" x2="590" y2="200" stroke="#F5B301" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <line x1="680" y1="225" x2="780" y2="360" stroke="#E10600" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <line x1="680" y1="225" x2="510" y2="330" stroke="#F5B301" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              <line x1="680" y1="225" x2="800" y2="170" stroke="#E10600" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

              {/* Beacon dots for delegations */}
              <circle cx="520" cy="150" r="4" fill="#F5B301" />
              <circle cx="260" cy="180" r="4" fill="#E10600" />
              <circle cx="590" cy="200" r="4" fill="#F5B301" />
              <circle cx="780" cy="360" r="4" fill="#E10600" />
              <circle cx="510" cy="330" r="4" fill="#F5B301" />
              <circle cx="800" cy="170" r="4" fill="#E10600" />
            </svg>

            {/* Center Stadium Callout Tag */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 border border-brand-red px-4 py-2 clip-angled shadow-[0_0_25px_rgba(225,6,0,0.6)] text-center">
              <span className="text-[10px] text-brand-gold font-heading uppercase tracking-widest block font-bold">
                GLOBAL HOST VENUE
              </span>
              <span className="text-white font-heading text-lg font-black uppercase tracking-wider">
                BHUBANESWAR, INDIA
              </span>
            </div>
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-4 py-2 text-xs font-heading font-bold uppercase tracking-wider clip-angled transition-all ${
                selectedRegion === region.id
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(225,6,0,0.5)]'
                  : 'bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-white'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>

        {/* Delegations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
          {filteredCountries.map((country, idx) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02 }}
              className="p-3 bg-zinc-950 border border-zinc-800/80 clip-angled hover:border-brand-gold/60 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl">{country.flag}</span>
                <span className="text-[10px] font-heading font-bold text-zinc-500 uppercase">{country.code}</span>
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-white uppercase truncate">
                  {country.name}
                </h4>
                <div className="text-[10px] text-brand-gold font-sans font-medium mt-0.5 truncate">
                  {country.athletes}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
