'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Trophy, ChevronDown, ChevronRight, Phone, Flame, Sparkles, ArrowRight, Bike } from 'lucide-react';
import Button from './Button';
import CountdownBanner from './CountdownBanner';
import { EVENT_DATA } from '@/lib/eventData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileChampionshipsOpen, setMobileChampionshipsOpen] = useState(false);
  const pathname = usePathname();
  const megaMenuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const handleMouseEnterMega = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeaveMega = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 350);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Championships', href: '/championships', hasMegaMenu: true },
    { label: 'Guests', href: '/guests' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'Sponsors & Stalls', href: '/sponsors' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  const championshipTiles = [
    {
      title: 'Anil Gochhikar Classic Bodybuilding',
      slug: '/bodybuilding',
      tag: 'International',
      prize: '₹20L COC',
      img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'All India Open Powerlifting',
      slug: '/powerlifting',
      tag: 'National Open',
      prize: '₹14 Lakh',
      img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Utkal Kesari Dangal (Matti Kusti)',
      slug: '/dangal',
      tag: 'Heritage Return',
      prize: 'Bullet + Gada',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: "Dutee's Marathon 2026",
      slug: '/marathon',
      tag: '21.1K / 10K / 5K',
      prize: 'Medals + Cash',
      img: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'National Arm Wrestling',
      slug: '/arm-wrestling',
      tag: 'Right Hand Open',
      prize: '₹6.4 Lakh',
      img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop',
    },
    {
      title: 'Odisha Open Boxing',
      slug: '/boxing',
      tag: 'Ring Arena Heats',
      prize: 'Podium Purses',
      img: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=400&auto=format&fit=crop',
    },
  ];

  return (
    <>
      {/* 1. Countdown Announcement Bar above Header */}
      <CountdownBanner />

      {/* 2. Transparent-to-Solid Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-[900] transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/95 backdrop-blur-md py-3 border-b border-zinc-800/80 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
            : 'bg-gradient-to-b from-black/90 via-black/60 to-transparent py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group" id="navbar-brand">
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-brand-red clip-angled shadow-[0_0_15px_#E10600] group-hover:scale-105 transition-transform shrink-0">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl md:text-2xl font-black tracking-tight text-white uppercase group-hover:text-brand-red transition-colors leading-none">
                AOGA <span className="text-brand-red">2026</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-400 uppercase">
                INDIA&apos;S BIGGEST SPORTS FESTIVAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.href}
                    className="relative py-2"
                    onMouseEnter={handleMouseEnterMega}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <button
                      type="button"
                      onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                      className={`px-3 py-1.5 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-200 flex items-center gap-1.5 rounded ${
                        isActive || isMegaMenuOpen
                          ? 'text-brand-red bg-zinc-900/80 shadow-[0_0_12px_rgba(225,6,0,0.3)]'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isMegaMenuOpen ? 'rotate-180 text-brand-red' : 'text-zinc-500'
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 font-heading text-sm uppercase tracking-wider font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-brand-red'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900/60 rounded'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-red shadow-[0_0_8px_#E10600]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href={EVENT_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-brand-gold transition-colors"
              aria-label="Direct WhatsApp Enquiry"
            >
              <Phone className="w-5 h-5" />
            </Link>

            <Button href="/register" size="sm" variant="primary" id="navbar-register-btn" icon={Flame}>
              REGISTER NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white bg-zinc-900 border border-zinc-800 rounded clip-angled focus:outline-none focus:ring-2 focus:ring-brand-red"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-brand-red" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onMouseEnter={handleMouseEnterMega}
              onMouseLeave={handleMouseLeaveMega}
              className="hidden lg:block absolute top-full left-0 right-0 bg-zinc-950/98 backdrop-blur-2xl border-b border-zinc-800 shadow-[0_25px_50px_rgba(0,0,0,0.9)] z-50 py-8 px-6"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-start">
                {/* 6 Championship Promo Tiles (8 cols) */}
                <div className="col-span-8">
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-2">
                    <span className="text-xs font-heading uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                      THE SIX CHAMPIONSHIP ARENAS (4–6 DEC 2026)
                    </span>
                    <Link
                      href="/championships"
                      className="text-xs font-heading uppercase tracking-wider text-brand-gold hover:text-white flex items-center gap-1"
                    >
                      <span>VIEW DIRECTORY</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {championshipTiles.map((tile) => (
                      <Link
                        key={tile.slug}
                        href={tile.slug}
                        className="group flex flex-col p-2.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-brand-red/80 rounded transition-all duration-200"
                      >
                        <div className="relative w-full h-24 rounded overflow-hidden mb-2">
                          <Image
                            src={tile.img}
                            alt={tile.title}
                            fill
                            sizes="200px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                          <div className="absolute top-1.5 left-1.5">
                            <span className="px-1.5 py-0.5 text-[9px] font-heading uppercase tracking-wider bg-black/80 text-brand-gold border border-brand-gold/30 rounded">
                              {tile.tag}
                            </span>
                          </div>
                          <div className="absolute bottom-1.5 right-1.5">
                            <span className="px-1.5 py-0.5 text-[10px] font-display uppercase tracking-wider bg-brand-red text-white rounded">
                              {tile.prize}
                            </span>
                          </div>
                        </div>

                        <span className="font-heading text-xs font-bold uppercase text-white group-hover:text-brand-red line-clamp-1">
                          {tile.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* In-Menu Promo Card (4 cols) */}
                <div className="col-span-4 p-5 bg-gradient-to-br from-zinc-900/90 to-black border-2 border-brand-gold/60 rounded clip-angled shadow-[0_0_30px_rgba(245,179,1,0.2)] flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-gold text-black font-heading font-black text-[11px] uppercase tracking-widest rounded-sm mb-3">
                      <Sparkles className="w-3 h-3" />
                      <span>IN-MENU SPECIAL PROMO</span>
                    </div>

                    <h4 className="font-heading text-2xl font-black uppercase text-white leading-tight mb-1">
                      CHAMPION OF CHAMPIONS
                    </h4>
                    <div className="font-display text-3xl font-black text-brand-gold mb-3">
                      ₹20,00,000 CASH
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      Register now to secure your Official Holographic Pass, Die-Cast Medal, Backstage Pass, and guaranteed 10 Stage Photos + 15-Sec 4K Stage Reel within 72 hrs.
                    </p>

                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-5">
                      <Bike className="w-4 h-4 text-brand-gold" />
                      <span>Royal Enfield Bullet for Utkal Kesari Dangal Winner</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button href="/register" size="md" variant="primary" className="w-full" icon={Flame}>
                      REGISTER AS ATHLETE NOW
                    </Button>
                    <Link
                      href="/sponsors"
                      className="block text-center text-xs font-heading uppercase tracking-wider text-zinc-400 hover:text-white pt-1"
                    >
                      CORPORATE SPONSORSHIP TIERS FROM ₹2 LAKH →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[890] bg-zinc-950/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-10 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-heading mb-2">
                AOGA 2026 FESTIVAL NAVIGATION
              </div>

              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;

                if (link.hasMegaMenu) {
                  return (
                    <div key={link.href} className="border-b border-zinc-800/80">
                      <button
                        onClick={() => setMobileChampionshipsOpen(!mobileChampionshipsOpen)}
                        className={`w-full flex items-center justify-between py-3 font-heading text-2xl uppercase tracking-wider font-bold ${
                          isActive ? 'text-brand-red' : 'text-zinc-200'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileChampionshipsOpen ? 'rotate-180 text-brand-red' : 'text-zinc-600'
                          }`}
                        />
                      </button>

                      {mobileChampionshipsOpen && (
                        <div className="pl-3 pb-3 space-y-2">
                          {championshipTiles.map((tile) => (
                            <Link
                              key={tile.slug}
                              href={tile.slug}
                              className="flex items-center justify-between py-1.5 text-sm text-zinc-400 hover:text-brand-red font-medium"
                            >
                              <span>{tile.title}</span>
                              <span className="text-[10px] text-brand-gold font-display">{tile.prize}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-3 font-heading text-2xl uppercase tracking-wider font-bold border-b border-zinc-800/80 ${
                        isActive ? 'text-brand-red' : 'text-zinc-200'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-5 h-5 text-zinc-600" />
                    </Link>
                  </motion.div>
                );
              })}

              {/* In-Menu Promo Box inside Mobile Menu */}
              <div className="mt-4 p-4 bg-zinc-900 border border-brand-gold/50 rounded clip-angled">
                <div className="text-xs font-heading font-black uppercase text-brand-gold mb-1">
                  CHAMPION OF CHAMPIONS: ₹20,00,000
                </div>
                <div className="text-xs text-zinc-400 mb-3">
                  Royal Enfield Bullet for Utkal Kesari Dangal winner. 55+ Categories.
                </div>
                <Button href="/register" size="sm" variant="gold" className="w-full">
                  FAST-TRACK REGISTRATION
                </Button>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="mt-6 space-y-3">
              <Button href="/register" size="lg" variant="primary" className="w-full" icon={Flame}>
                REGISTER AS ATHLETE
              </Button>
              <Button href="/sponsors" size="md" variant="outline" className="w-full">
                SPONSOR / BOOK STALL
              </Button>

              <div className="pt-2 text-center text-xs text-zinc-400 font-heading tracking-wider uppercase">
                BARAMUNDA GROUND • BHUBANESWAR • 4–6 DEC 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
