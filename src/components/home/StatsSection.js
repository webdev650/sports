'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import StatCounter from '@/components/common/StatCounter';
import { EVENT_DATA } from '@/lib/eventData';

export default function StatsSection() {
  const statsConfig = [
    { target: 1.5, prefix: '₹', suffix: ' CR', label: 'TOTAL CASH PRIZE POOL', accent: 'gold', display: '₹1.5 CR' },
    { target: 40, prefix: '', suffix: '+', label: 'INTERNATIONAL NATIONS', accent: 'red', display: '40+' },
    { target: 3, prefix: '', suffix: ' DAYS', label: 'NON-STOP BROADCAST ACTION', accent: 'gold', display: '3 DAYS' },
    { target: 55, prefix: '', suffix: '+', label: 'COMPETITIVE CATEGORIES', accent: 'red', display: '55+' },
    { target: 233, prefix: '', suffix: '+', label: 'CASH PODIUM FINISHES', accent: 'gold', display: '233+' },
    { target: 6, prefix: '', suffix: ' CROWNS', label: 'MEGA CHAMPIONSHIPS', accent: 'red', display: '6' },
  ];

  return (
    <SectionWrapper
      id="festival-stats"
      animation="fade-up"
      bg="bg-background"
      className="py-12 border-y border-zinc-900"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {statsConfig.map((stat, idx) => (
          <StatCounter
            key={stat.label}
            target={stat.target}
            prefix={stat.prefix}
            suffix={stat.suffix}
            label={stat.label}
            accent={stat.accent}
            displayValue={stat.display}
            duration={1800 + idx * 150}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
