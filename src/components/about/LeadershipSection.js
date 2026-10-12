'use client';

import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import { ShieldCheck, Award, Phone, Mail } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function LeadershipSection() {
  const leaders = [
    {
      name: 'Rosaleen Nayak',
      role: 'Chairman',
      desc: 'Visionary patron spearheading high-impact sporting governance and national federation partnerships across Odisha.',
    },
    {
      name: 'Santosh Mohanty',
      role: 'President',
      desc: 'Pioneering leader of the All Odisha Gym Association, dedicated to athlete welfare, state-wide gym infrastructure, and power sport elevation.',
    },
    {
      name: 'Anil Gochhikar',
      role: 'Senior Vice-President',
      desc: 'International Bodybuilder, Lord Jagannath Temple Sevayat, and legendary sports icon driving world-class technical stage standards.',
    },
    {
      name: 'Dwiti Krishna Behera',
      role: 'Secretary',
      desc: 'Chief administrator ensuring operational excellence, international athlete accreditations, and transparent tournament execution.',
    },
  ];

  return (
    <SectionWrapper
      id="leadership-section"
      animation="flip-3d"
      bg="bg-background"
    >
      <div className="flex flex-col items-center">
        <SectionHeading
          tag="ORGANIZING BODY"
          title="AOGA LEADERSHIP COMMITTEE"
          subtitle="Governed by veteran sports administrators and champion athletes committed to ethical, transparent, and world-class physical competition."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {leaders.map((leader, idx) => (
            <div
              key={leader.name}
              className="p-6 bg-zinc-950 border border-zinc-800 clip-angled hover:border-brand-gold/70 hover:shadow-[0_0_25px_rgba(245,179,1,0.2)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-brand-gold rounded w-fit mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-heading font-black uppercase tracking-widest text-brand-red mb-1">
                  {leader.role}
                </div>
                <h3 className="font-heading text-2xl font-black uppercase text-white mb-3">
                  {leader.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {leader.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-heading tracking-widest uppercase text-zinc-400">
                <span>AOGA COMMITTEE</span>
                <span className="text-brand-gold">ODISHA</span>
              </div>
            </div>
          ))}
        </div>

        {/* Association Contact Box */}
        <div className="w-full max-w-3xl p-6 bg-zinc-950/80 border border-zinc-800 clip-angled flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-red text-white clip-angled">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-heading text-lg font-bold uppercase">
                All Odisha Gym Association (AOGA)
              </div>
              <div className="text-xs text-zinc-400">
                Official Head Office & Accreditation Desk, Bhubaneswar
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-heading uppercase tracking-wider">
            <a
              href={`tel:${EVENT_DATA.contact.phoneClean}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-red font-bold"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>{EVENT_DATA.contact.phone}</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={`mailto:${EVENT_DATA.contact.email}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-brand-gold font-bold"
            >
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>{EVENT_DATA.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
