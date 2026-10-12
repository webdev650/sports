'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { Phone, Mail, Instagram, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, Plane, Train, Sparkles, Trophy } from 'lucide-react';
import { EVENT_DATA } from '@/lib/eventData';
import { submitContactMessage } from '@/lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: 'Registration',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhone = (num) => {
    return /^[6-9]\d{9}$/.test(num);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validatePhone(formData.phone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactMessage(formData);
      if (res.success) {
        setSubmitResult(res);
      } else {
        setErrorMessage(res.error || 'Failed to submit form.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please try WhatsApp support.');
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
            <span className="text-brand-gold font-bold">Contact</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Phone className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              ALL ODISHA GYM ASSOCIATION (AOGA) HELPLINE DESK
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-none mb-6">
            GET IN TOUCH WITH <br />
            <span className="text-brand-gold">AOGA LEADERSHIP</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Have questions about athlete registration, division weight brackets, hotel accommodations in Bhubaneswar, or media accreditation? Our organising committee is here to assist.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${EVENT_DATA.contact.phoneClean}`}
              className="px-6 py-3 bg-brand-red hover:bg-[#ff0700] text-white font-heading font-black text-sm uppercase tracking-wider clip-angled transition-colors shadow-[0_0_20px_#E10600] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {EVENT_DATA.contact.phone}</span>
            </a>
            <a
              href={EVENT_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-black font-heading font-black text-sm uppercase tracking-wider clip-angled transition-colors shadow-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>DIRECT WHATSAPP CHAT</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) + Info (5 cols) */}
      <SectionWrapper id="contact-form-section" animation="fade-up" bg="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 p-6 sm:p-10 clip-angled shadow-2xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-brand-red">
                OFFICIAL ENQUIRY DESK
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                SEND AN ENQUIRY MESSAGE
              </h3>
            </div>

            {submitResult ? (
              <div className="p-8 bg-zinc-900 border-2 border-brand-gold rounded clip-angled text-center">
                <CheckCircle2 className="w-12 h-12 text-brand-gold mx-auto mb-3" />
                <h4 className="font-heading text-2xl font-black uppercase text-white mb-2">
                  MESSAGE TRANSMITTED!
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {submitResult.message}
                </p>
                <div className="text-xs text-zinc-400 font-mono mb-6">
                  Ticket Reference: <strong className="text-brand-gold">{submitResult.ticketId}</strong>
                </div>
                <Button onClick={() => setSubmitResult(null)} size="sm" variant="outline">
                  SEND ANOTHER MESSAGE
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                {errorMessage && (
                  <div className="p-3 bg-red-950/80 border border-brand-red text-red-200 text-xs rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-brand-red" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dwiti Krishna"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="athlete@example.com"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">10-Digit Mobile (India) *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">City & State *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Bhubaneswar, Odisha"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Subject / Category *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white text-sm focus:border-brand-red focus:outline-none"
                  >
                    <option value="Registration">Athlete Registration Enquiry</option>
                    <option value="Sponsorship">Corporate Sponsorship Desk</option>
                    <option value="Stall booking">Commercial Expo Stall Booking</option>
                    <option value="Media">Media & Press Accreditation</option>
                    <option value="Other">Hotel / Travel Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 mb-1">Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your query, championship division, or team arrival dates..."
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
                  {isSubmitting ? 'TRANSMITTING MESSAGE...' : 'SEND MESSAGE TO COMMITTEE'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details & Committee (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership Box */}
            <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled">
              <h4 className="font-heading text-xl font-bold uppercase text-white mb-4 border-l-2 border-brand-gold pl-3">
                AOGA Leadership Committee
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <div>
                  <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-heading">Chairman</span>
                  <strong className="text-white font-medium text-base">Rosaleen Nayak</strong>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-heading">President</span>
                  <strong className="text-white font-medium text-base">Santosh Mohanty</strong>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-heading">Senior Vice-President</span>
                  <strong className="text-white font-medium text-base">Anil Gochhikar</strong>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[11px] uppercase tracking-wider font-heading">Secretary</span>
                  <strong className="text-white font-medium text-base">Dwiti Krishna Behera</strong>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled space-y-4">
              <h4 className="font-heading text-xl font-bold uppercase text-white mb-2 border-l-2 border-brand-red pl-3">
                Official Channels
              </h4>
              <a
                href={`tel:${EVENT_DATA.contact.phoneClean}`}
                className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-brand-red transition-colors"
              >
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-zinc-400 block">Phone Support</span>
                  <span className="text-white font-bold text-sm">{EVENT_DATA.contact.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${EVENT_DATA.contact.email}`}
                className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-brand-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-zinc-400 block">Official Email</span>
                  <span className="text-white font-bold text-sm">{EVENT_DATA.contact.email}</span>
                </div>
              </a>

              <a
                href={EVENT_DATA.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-zinc-900 border border-zinc-800 rounded hover:border-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-500 shrink-0" />
                <div>
                  <span className="text-[10px] font-heading uppercase tracking-wider text-zinc-400 block">Instagram</span>
                  <span className="text-white font-bold text-sm">{EVENT_DATA.contact.instagram}</span>
                </div>
              </a>
            </div>

            {/* Venue Travel Details */}
            <div className="p-6 bg-zinc-950 border border-zinc-800 clip-angled text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-white font-heading font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span>Baramunda Ground Field, Bhubaneswar</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-3.5 h-3.5 text-brand-gold" />
                <span>Biju Patnaik International Airport (BBI) – 6 km</span>
              </div>
              <div className="flex items-center gap-2">
                <Train className="w-3.5 h-3.5 text-brand-gold" />
                <span>Bhubaneswar Railway Station (BBS) – 7 km</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
