'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Briefcase, Store, CheckCircle2, ShieldCheck, Download, Send, Phone, Mail, Sparkles, Trophy } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';
import { submitSponsorEnquiry } from '@/lib/api';

export default function SponsorsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    interest: 'Sponsorship',
    budgetRange: '₹2 Lakh - ₹5 Lakh',
    message: '',
    botField: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitSponsorEnquiry(formData);
      setSubmittedResponse(res);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Sponsors & Stalls</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-gold/60 clip-angled mb-4">
            <Briefcase className="w-4 h-4 text-brand-gold" />
            <span className="font-heading text-xs uppercase tracking-widest text-brand-gold font-black">
              CORPORATE PARTNERSHIPS & COMMERCIAL EXPO PAVILIONS
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            ELEVATE YOUR BRAND AT <br />
            <span className="text-brand-red">AOGA 2026</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Connect with 50,000+ passionate live stadium attendees, international athletic champions, fitness gym owners, and over 5 million digital broadcast viewers across eastern India and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="#tiers" size="lg" variant="primary" icon={Briefcase}>
              VIEW SPONSORSHIP TIERS
            </Button>
            <Button href="#stall-booking" size="lg" variant="outlineGold" icon={Store}>
              BOOK COMMERCIAL EXPO STALL
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Sponsorship Tiers */}
      <SectionWrapper id="tiers" animation="fade-up" bg="bg-background">
        <SectionHeading
          tag="BRAND PARTNERSHIP LEVELS"
          title="CORPORATE SPONSORSHIP TIERS"
          subtitle="Comprehensive stadium visibility, digital branding, LED broadcast integration, and executive hospitality suites starting from ₹2 Lakh."
          accentColor="gold"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mb-16">
          {EVENT_DATA.sponsorshipTiers.map((tier, idx) => (
            <div
              key={tier.tier}
              className={`p-6 sm:p-8 bg-zinc-950 clip-angled flex flex-col justify-between transition-all duration-300 ${
                idx === 0
                  ? 'border-2 border-brand-gold shadow-[0_0_35px_rgba(245,179,1,0.25)]'
                  : 'border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-heading font-black uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-brand-gold rounded">
                    TIER 0{idx + 1}
                  </span>
                  <Trophy className="w-5 h-5 text-brand-gold" />
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  {tier.tier}
                </h3>

                <div className="font-display text-3xl font-black text-brand-red mb-6 pb-4 border-b border-zinc-900">
                  {tier.investment}
                </div>

                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#stall-booking"
                className="w-full py-3 bg-zinc-900 hover:bg-brand-red border border-zinc-800 hover:border-brand-red text-white text-center font-heading text-sm font-bold uppercase tracking-wider clip-angled transition-colors block"
              >
                REQUEST {tier.tier} DOSSIER
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Commercial Stalls */}
      <SectionWrapper id="stalls" animation="slide-left" bg="bg-surface" diagonal="top">
        <SectionHeading
          tag="FITNESS EXPO & FOOD VILLAGE"
          title="COMMERCIAL EXPO BOOTHS"
          subtitle="Prime footfall retail zones for nutrition supplements, gym apparel, fitness equipment, athletic merchandise, and food village outlets."
          accentColor="red"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16">
          {EVENT_DATA.stallRates.map((stall) => (
            <div
              key={stall.size}
              className="p-6 bg-zinc-950 border border-zinc-800 clip-angled flex flex-col justify-between hover:border-brand-gold/60 transition-colors"
            >
              <div>
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded w-fit mb-4 text-brand-red">
                  <Store className="w-6 h-6" />
                </div>

                <div className="font-heading text-2xl font-black text-white uppercase mb-1">
                  {stall.size} STALL
                </div>

                <div className="font-display text-3xl font-black text-brand-gold mb-3">
                  {stall.price}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {stall.suitableFor}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-900 text-[11px] font-heading uppercase tracking-widest text-zinc-500">
                OCTANORM STRUCTURE • 3 DAYS FULL ACCESS
              </div>
            </div>
          ))}
        </div>

        {/* Enquiry Form */}
        <div id="stall-booking" className="w-full max-w-3xl mx-auto p-8 sm:p-12 bg-zinc-950 border-2 border-brand-red clip-angled shadow-[0_0_40px_rgba(225,6,0,0.3)]">
          <div className="text-center mb-8">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-brand-gold">
              DIRECT DESK ENQUIRY
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-white mt-1">
              SPONSORSHIP & STALL APPLICATION
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Submit your corporate profile to receive the official AOGA Sponsorship Deck and booth layout map.
            </p>
          </div>

          {submittedResponse ? (
            <div className="p-6 bg-zinc-900 border border-brand-gold/60 rounded text-center">
              <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <h4 className="font-heading text-xl font-bold uppercase text-white mb-2">
                APPLICATION RECEIVED!
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 mb-4">
                Reference ID: <strong className="text-brand-gold font-mono">{submittedResponse.referenceId}</strong>. Our Sponsorship Desk will connect with you within 24 hours.
              </p>
              <Button onClick={() => setSubmittedResponse(null)} size="sm" variant="outline">
                SUBMIT ANOTHER ENQUIRY
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Company / Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Optimum Health India"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Rajesh Mohapatra"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="corporate@brand.com"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Phone / Mobile (10-digit) *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Enquiry Type *</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  >
                    <option value="Sponsorship">Corporate Sponsorship (from ₹2L)</option>
                    <option value="Commercial Stall">Commercial Stall Booth (from ₹60k)</option>
                    <option value="Both">Both Sponsorship & Stall</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Budget Allocation *</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  >
                    <option value="₹60,000 - ₹1,20,000">₹60,000 – ₹1,20,000 (Stalls)</option>
                    <option value="₹2 Lakh - ₹5 Lakh">₹2 Lakh – ₹5 Lakh</option>
                    <option value="₹5 Lakh - ₹15 Lakh">₹5 Lakh – ₹15 Lakh</option>
                    <option value="₹15 Lakh+">₹15 Lakh+ (Title / Presenting)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Message / Requirements</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your brand, desired booth position, or partnership goals..."
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="primary"
                disabled={isSubmitting}
                className="w-full shadow-[0_0_25px_rgba(225,6,0,0.6)]"
                icon={Send}
              >
                {isSubmitting ? 'PROCESSING APPLICATION...' : 'SUBMIT SPONSORSHIP APPLICATION'}
              </Button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
            <a href={`tel:${EVENT_DATA.contact.phoneClean}`} className="flex items-center gap-2 hover:text-brand-red transition-colors">
              <Phone className="w-4 h-4 text-brand-red" />
              <span>Direct Desk: {EVENT_DATA.contact.phone}</span>
            </a>
            <a href={`mailto:${EVENT_DATA.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>{EVENT_DATA.contact.email}</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
