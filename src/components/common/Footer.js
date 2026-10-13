'use client';

import Link from 'next/link';
import { Trophy, Phone, Mail, Instagram, MapPin, Plane, Train, ArrowUpRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 sm:pt-20 pb-12 border-t border-zinc-800/80 overflow-hidden">
      {/* Top subtle glow line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-80" />

      {/* Giant Outlined Wordmark Spanning Edge-to-Edge */}
      <div className="w-full overflow-hidden select-none pointer-events-none mb-10 opacity-15">
        <div className="font-display text-[15vw] sm:text-[13vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-stroke-thick text-center">
          AOGA 2026 FESTIVAL
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-zinc-800/80">
          {/* Col 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-red clip-angled flex items-center justify-center shadow-[0_0_15px_#E10600]">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-black uppercase tracking-tight text-white leading-none">
                  AOGA <span className="text-brand-red">2026</span>
                </span>
                <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">
                  ALL ODISHA GYM ASSOCIATION
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed">
              India&apos;s Biggest Sports Festival 2026 brings world-class international bodybuilding, raw powerlifting, traditional Dangal wrestling, marathon running, boxing, and arm wrestling under one electrifying broadcast stadium in Bhubaneswar.
            </p>

            {/* Official Hashtags */}
            <div className="flex items-center gap-2 flex-wrap">
              {EVENT_DATA.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-heading tracking-widest bg-zinc-900 border border-zinc-800 text-brand-gold rounded-sm font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Committee Leadership Callout */}
            <div className="pt-2">
              <div className="text-xs font-heading uppercase tracking-widest text-zinc-400 mb-2 font-bold">
                AOGA Leadership Committee
              </div>
              <div className="text-xs text-zinc-300 space-y-1">
                <div>• <strong className="text-white">Rosaleen Nayak</strong> — Chairman</div>
                <div>• <strong className="text-white">Santosh Mohanty</strong> — President</div>
                <div>• <strong className="text-white">Anil Gochhikar</strong> — Senior Vice-President</div>
                <div>• <strong className="text-white">Dwiti Krishna Behera</strong> — Secretary</div>
              </div>
            </div>
          </div>

          {/* Col 2: Six Championships (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-3">
              The 6 Championships
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/bodybuilding" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>Anil Gochhikar Classic</span>
                  <span className="text-[10px] text-brand-gold uppercase font-bold">₹20L COC</span>
                </Link>
              </li>
              <li>
                <Link href="/powerlifting" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>All India Powerlifting</span>
                  <span className="text-[10px] text-zinc-400">Up to ₹14L</span>
                </Link>
              </li>
              <li>
                <Link href="/dangal" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>Utkal Kesari Dangal (Matti Kusti)</span>
                  <span className="text-[10px] text-brand-gold font-bold">Bullet + Gada</span>
                </Link>
              </li>
              <li>
                <Link href="/marathon" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>Dutee&apos;s Marathon 2026</span>
                  <span className="text-[10px] text-zinc-400">21.1K / 10K / 5K</span>
                </Link>
              </li>
              <li>
                <Link href="/arm-wrestling" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>National Arm Wrestling</span>
                  <span className="text-[10px] text-zinc-400">Up to ₹6.4L</span>
                </Link>
              </li>
              <li>
                <Link href="/boxing" className="hover:text-brand-red transition-colors flex items-center justify-between">
                  <span>Odisha Open Boxing</span>
                  <span className="text-[10px] text-zinc-400">Ring Arena Heats</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Festival</Link></li>
              <li><Link href="/guests" className="hover:text-white transition-colors">Chief Guests</Link></li>
              <li><Link href="/schedule" className="hover:text-white transition-colors">3-Day Schedule</Link></li>
              <li><Link href="/register" className="text-brand-red font-bold hover:underline">Register Athlete</Link></li>
              <li><Link href="/sponsors" className="hover:text-white transition-colors">Sponsorships & Stalls</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact AOGA</Link></li>
            </ul>
          </div>

          {/* Col 4: Venue & Official Contact (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white border-l-2 border-brand-red pl-3">
              Venue & Contact
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Baramunda Ground Field</strong>
                  Bhubaneswar, Odisha, India (4–6 Dec 2026)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Plane className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs">Biju Patnaik Airport (BBI) – 6 km</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Train className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs">Bhubaneswar Railway Station (BBS) – 7 km</span>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${EVENT_DATA.contact.phoneClean}`}
                  className="flex items-center gap-2.5 text-white hover:text-brand-red transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  <span className="font-semibold">{EVENT_DATA.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${EVENT_DATA.contact.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold" />
                  <span>{EVENT_DATA.contact.email}</span>
                </a>
                <a
                  href={EVENT_DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>{EVENT_DATA.contact.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Refund Policies Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Mandatory Legal Disclaimer */}
          <div className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-950 px-4 py-2.5 border border-zinc-800 rounded">
            <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              {EVENT_DATA.policies.legalDisclaimer}
            </span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
            <span>•</span>
            <Link href="/prize-policy" className="hover:text-white transition-colors">Prize Guarantee Policy</Link>
            <span>•</span>
            <Link href="/rules" className="hover:text-white transition-colors">Official Rulebook</Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Refund Guarantee Note */}
        <div className="pt-6 mt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            © 2026 All Odisha Gym Association (AOGA). All Rights Reserved. Built for sports broadcast excellence.
          </div>
          <div className="text-zinc-400 text-[11px]">
            Refund Guarantee: 100% full refund if event cancelled • 50% refund until 31 Oct 2026 • Free category change before closing.
          </div>
        </div>
      </div>
    </footer>
  );
}
