'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/common/SectionWrapper';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { submitRegistration, verifyUpiPayment } from '@/lib/api';
import { EVENT_DATA } from '@/lib/eventData';
import {
  Trophy,
  Flame,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  QrCode,
  Copy,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Phone,
  Mail,
  Loader2,
  Calendar,
  Sparkles,
} from 'lucide-react';

export default function RegisterPage() {
  // Category Finder State
  const [selectedSport, setSelectedSport] = useState('bodybuilding');
  const [selectedDivision, setSelectedDivision] = useState("Men's Bodybuilding");
  const [selectedWeight, setSelectedWeight] = useState('75 kg');

  // Stepper Form State
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: 'Odisha',
    dob: '',
    gender: 'Male',
    gymAffiliation: '',
    utrNumber: '',
    botField: '', // honeypot
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifyingUpi, setIsVerifyingUpi] = useState(false);
  const [upiVerified, setUpiVerified] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedUpi, setCopiedUpi] = useState(false);

  // Compute Fee & Schedule dynamically
  const getFeeInfo = () => {
    if (selectedSport === 'bodybuilding') {
      if (selectedDivision.includes('Star')) return { fee: 0, isFree: true, text: 'FREE REGISTRATION' };
      return { fee: 5000, isFree: false, text: '₹5,000' };
    }
    if (selectedSport === 'powerlifting') return { fee: 600, isFree: false, text: '₹600' };
    if (selectedSport === 'dangal') return { fee: 1000, isFree: false, text: '₹1,000' };
    if (selectedSport === 'marathon') return { fee: 600, isFree: false, text: '₹600' };
    if (selectedSport === 'arm-wrestling') return { fee: 1000, isFree: false, text: '₹1,000' };
    if (selectedSport === 'boxing') return { fee: 1000, isFree: false, text: '₹1,000' };
    return { fee: 1000, isFree: false, text: '₹1,000' };
  };

  const currentFee = getFeeInfo();

  // Validate Step 1
  const validateStep1 = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Valid email address is required.';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      errors.phone = 'Valid Indian 10-digit mobile number is required.';
    }
    if (!formData.city.trim()) errors.city = 'City is required.';
    if (!formData.dob) errors.dob = 'Date of birth is required.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  // Verify UTR
  const handleVerifyUtr = async () => {
    if (!formData.utrNumber || formData.utrNumber.trim().length < 10) {
      setFormErrors({ utrNumber: 'Please enter a valid 12-digit UPI transaction reference / UTR number.' });
      return;
    }
    setFormErrors({});
    setIsVerifyingUpi(true);
    const res = await verifyUpiPayment(formData.utrNumber, currentFee.text);
    setIsVerifyingUpi(false);
    if (res.success) {
      setUpiVerified(true);
    } else {
      setFormErrors({ utrNumber: res.error });
    }
  };

  // Submit Final Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentFee.isFree && !upiVerified) {
      setFormErrors({ utrNumber: 'Please verify your UPI transaction before submitting.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const submissionPayload = {
      ...formData,
      championship: selectedSport,
      division: selectedDivision,
      weightClass: selectedWeight,
      feeAmount: currentFee.text,
    };

    const res = await submitRegistration(submissionPayload);
    setIsSubmitting(false);

    if (res.success) {
      setSubmitSuccess(res);
      // Auto reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        state: 'Odisha',
        dob: '',
        gender: 'Male',
        gymAffiliation: '',
        utrNumber: '',
        botField: '',
      });
      setUpiVerified(false);
      setCurrentStep(1);
    } else {
      setSubmitError(res.error || 'Failed to submit registration. Please try again.');
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('aoga@upi');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const faqs = [
    {
      q: 'How do I know my registration is confirmed?',
      a: 'Immediately upon submitting this form with your verified UTR, your registration reference ID is generated. Our desk will also dispatch a WhatsApp confirmation with your digital Athlete Pass.',
    },
    {
      q: 'What documents do I need to bring on event day?',
      a: 'Original government-issued photo ID (Aadhaar / Voter ID / Passport), proof of age, 2 recent passport-size photos, federation registration (if affiliated), and signed medical self-declaration.',
    },
    {
      q: 'What is the refund and category change policy?',
      a: '100% full refund is issued if the event is cancelled. 50% refund is available for withdrawals requested before 31 October 2026. Category or weight class changes are completely free until official registrations close.',
    },
    {
      q: 'Is registration truly free for Star Category (Para-Athletes)?',
      a: 'Yes, 100% free! All certified para-athletes register at ₹0 with equal eligibility for the ₹2,10,000 cash prize pool.',
    },
    {
      q: 'Are on-site spot registrations available at Baramunda Ground?',
      a: 'Spot registrations are only open on Day 1 (Friday 4 Dec, 8:00 AM – 10:00 AM) subject to slot availability. Early online registration is strictly advised to avoid category cap-outs.',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-red-mesh opacity-35 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-xs font-heading tracking-widest text-zinc-400 uppercase mb-4">
            <Link href="/" className="hover:text-brand-red">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Athlete Registration</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-brand-red/60 clip-angled mb-4">
            <Flame className="w-4 h-4 text-brand-red" />
            <span className="font-heading text-xs uppercase tracking-widest text-zinc-300 font-bold">
              OFFICIAL ATHLETE ACCREDITATION PORTAL • AOGA 2026
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-none mb-4">
            ATHLETE <span className="text-brand-red">REGISTRATION</span>
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Follow the 3-step registration process below to lock in your category, receive your official Holographic Athlete ID, and compete for your share of the ₹1.5 Crore prize purse.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <SectionWrapper id="register-content" animation="fade-up" bg="bg-background">
        {/* SECTION 1: INTERACTIVE CATEGORY FINDER */}
        <div className="w-full bg-zinc-950 border border-zinc-800 p-6 sm:p-10 clip-angled mb-12 shadow-2xl">
          <div className="border-b border-zinc-900 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-heading font-black uppercase tracking-widest text-brand-gold">
                STEP 0: EXPLORE CATEGORIES & FEES
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                INTERACTIVE CATEGORY FINDER
              </h3>
            </div>
            <span className="text-xs text-zinc-400">Live dynamic calculator</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Sport Selector */}
            <div>
              <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-2">
                1. Select Sport:
              </label>
              <select
                value={selectedSport}
                onChange={(e) => {
                  setSelectedSport(e.target.value);
                  if (e.target.value === 'bodybuilding') setSelectedDivision("Men's Bodybuilding");
                  else if (e.target.value === 'marathon') setSelectedDivision('21.1 km Half Marathon');
                  else setSelectedDivision('Open Category');
                }}
                className="w-full bg-zinc-900 border border-zinc-700 text-white p-3 clip-angled text-sm font-semibold focus:border-brand-red focus:outline-none"
              >
                <option value="bodybuilding">Anil Gochhikar Classic Bodybuilding</option>
                <option value="powerlifting">All India Open Powerlifting</option>
                <option value="dangal">Utkal Kesari Dangal (Matti Kusti)</option>
                <option value="marathon">Dutee&apos;s Marathon</option>
                <option value="arm-wrestling">National Arm Wrestling</option>
                <option value="boxing">Odisha Open Boxing</option>
              </select>
            </div>

            {/* Division Selector */}
            <div>
              <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-2">
                2. Select Division / Distance:
              </label>
              <select
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white p-3 clip-angled text-sm font-semibold focus:border-brand-red focus:outline-none"
              >
                {selectedSport === 'bodybuilding' ? (
                  <>
                    <option value="Men's Bodybuilding">Men&apos;s Bodybuilding</option>
                    <option value="Men's Physique">Men&apos;s Physique</option>
                    <option value="Classic Physique">Classic Physique</option>
                    <option value="Women's Bodybuilding">Women&apos;s Bodybuilding</option>
                    <option value="Bikini Model">Bikini Model</option>
                    <option value="Masters (40+)">Masters (40+)</option>
                    <option value="Star Category (Para-Athletes)">Star Category (Para-Athletes - FREE)</option>
                  </>
                ) : selectedSport === 'marathon' ? (
                  <>
                    <option value="21.1 km Half Marathon">21.1 km Half Marathon</option>
                    <option value="10 km Timed Run">10 km Timed Run</option>
                    <option value="5 km Fitness Run">5 km Fitness Run</option>
                    <option value="2 km Fun Run">2 km Fun Run</option>
                  </>
                ) : (
                  <>
                    <option value="Open Category">Open Men&apos;s Division</option>
                    <option value="Women Category">Open Women&apos;s Division</option>
                    <option value="Junior Category">Junior Division (Under 21)</option>
                  </>
                )}
              </select>
            </div>

            {/* Weight Class */}
            <div>
              <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-2">
                3. Weight Bracket:
              </label>
              <select
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 text-white p-3 clip-angled text-sm font-semibold focus:border-brand-red focus:outline-none"
              >
                <option value="55 kg">Under 55 kg</option>
                <option value="60 kg">55 – 60 kg</option>
                <option value="65 kg">60 – 65 kg</option>
                <option value="70 kg">65 – 70 kg</option>
                <option value="75 kg">70 – 75 kg</option>
                <option value="80 kg">75 – 80 kg</option>
                <option value="85 kg">80 – 85 kg</option>
                <option value="90 kg">85 – 90 kg</option>
                <option value="90-100 kg">90 – 100 kg</option>
                <option value="100+ kg">100+ kg (Heavyweight)</option>
              </select>
            </div>
          </div>

          {/* Dynamic Result Card */}
          <div className="p-5 bg-zinc-900 border-2 border-brand-red clip-angled flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-heading uppercase tracking-widest text-brand-gold font-bold block mb-1">
                SUMMARY FOR YOUR SELECTION
              </span>
              <h4 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
                {selectedSport.toUpperCase()} • {selectedDivision} ({selectedWeight})
              </h4>
              <p className="text-xs text-zinc-300 mt-1">
                Stage: Baramunda Ground • Weigh-in check mandatory before prelims.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-zinc-400 font-heading block">OFFICIAL ENTRY FEE</span>
                <span className="font-display text-2xl sm:text-3xl font-black text-brand-gold">
                  {currentFee.text}
                </span>
              </div>
              <Button onClick={() => setCurrentStep(1)} variant="primary" size="md">
                APPLY TO FORM
              </Button>
            </div>
          </div>
        </div>

        {/* SECTION 2: 3-STEP REGISTRATION FORM */}
        <div className="w-full bg-zinc-950 border border-zinc-800 p-6 sm:p-10 clip-angled mb-16 shadow-2xl">
          {/* Stepper Indicator */}
          <div className="flex items-center justify-between max-w-xl mx-auto mb-10">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 clip-angled flex items-center justify-center font-heading font-black text-base transition-all ${
                      currentStep === step
                        ? 'bg-brand-red text-white shadow-[0_0_15px_#E10600]'
                        : currentStep > step
                        ? 'bg-brand-gold text-black'
                        : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
                    }`}
                  >
                    {currentStep > step ? '✓' : step}
                  </div>
                  <span className="text-[10px] font-heading uppercase tracking-wider font-bold text-zinc-400 mt-1">
                    {step === 1 ? 'Personal' : step === 2 ? 'Category' : 'Payment'}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 sm:w-24 h-0.5 mx-2 ${
                      currentStep > step ? 'bg-brand-gold' : 'bg-zinc-800'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Success State */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-zinc-900 border-2 border-brand-gold clip-angled text-center max-w-xl mx-auto my-8"
            >
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-3xl font-black uppercase text-white mb-2">
                REGISTRATION CONFIRMED!
              </h3>
              <p className="text-zinc-300 text-sm mb-4">
                {submitSuccess.message}
              </p>
              <div className="p-4 bg-black border border-zinc-800 clip-angled mb-6 text-left text-xs text-zinc-300 space-y-1">
                <div>Reference ID: <strong className="text-brand-gold font-display text-base">{submitSuccess.registrationId}</strong></div>
                <div>Athlete: <strong className="text-white">{submitSuccess.data.athleteName}</strong></div>
                <div>Event: <strong className="text-white">{submitSuccess.data.championship} ({submitSuccess.data.division})</strong></div>
                <div>Status: <strong className="text-green-400">{submitSuccess.data.passStatus}</strong></div>
              </div>
              <Button onClick={() => setSubmitSuccess(null)} variant="primary" size="md">
                REGISTER ANOTHER ATHLETE
              </Button>
            </motion.div>
          )}

          {/* Form Inputs */}
          {!submitSuccess && (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              {/* Honeypot hidden input */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* STEP 1: PERSONAL DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h4 className="font-heading text-xl font-bold uppercase text-white border-b border-zinc-900 pb-3">
                    Step 1: Athlete Personal Information
                  </h4>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                      Full Name (As per Government ID) *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar Sahoo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="athlete@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        WhatsApp Phone Number (10 Digits) *
                      </label>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        maxLength={10}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Bhubaneswar"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                      />
                      {formErrors.city && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.city}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                      />
                      {formErrors.dob && (
                        <p className="text-xs text-brand-red mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.dob}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                        Gender *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleNextStep} variant="primary" size="lg">
                      CONTINUE TO STEP 2 (EVENT SELECTION)
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: CATEGORY VERIFICATION */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h4 className="font-heading text-xl font-bold uppercase text-white border-b border-zinc-900 pb-3">
                    Step 2: Confirm Selected Event & Affiliation
                  </h4>

                  <div className="p-4 bg-zinc-900 border border-zinc-800 clip-angled text-xs text-zinc-300 space-y-2">
                    <div>Championship: <strong className="text-white uppercase">{selectedSport}</strong></div>
                    <div>Division: <strong className="text-white uppercase">{selectedDivision}</strong></div>
                    <div>Weight Bracket: <strong className="text-white uppercase">{selectedWeight}</strong></div>
                    <div>Fee Payable: <strong className="text-brand-gold font-display text-lg">{currentFee.text}</strong></div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading uppercase tracking-wider text-zinc-400 font-bold mb-1">
                      Gym / Academy / Coach Affiliation (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Iron Paradise Gym, Cuttack"
                      value={formData.gymAffiliation}
                      onChange={(e) => setFormData({ ...formData, gymAffiliation: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 p-3.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-heading uppercase tracking-wider text-zinc-400 hover:text-white"
                    >
                      ← Back to Personal Info
                    </button>
                    <Button onClick={handleNextStep} variant="primary" size="lg">
                      PROCEED TO PAYMENT (STEP 3)
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: PAYMENT & UPI VERIFICATION */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h4 className="font-heading text-xl font-bold uppercase text-white border-b border-zinc-900 pb-3">
                    Step 3: UPI Payment & Transaction Verification
                  </h4>

                  {currentFee.isFree ? (
                    <div className="p-6 bg-zinc-900 border-2 border-brand-gold clip-angled text-center">
                      <Sparkles className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                      <h4 className="font-heading text-2xl font-bold uppercase text-white">
                        STAR CATEGORY FREE REGISTRATION
                      </h4>
                      <p className="text-xs text-zinc-300 mt-2">
                        No payment required for registered para-athletes. Simply submit below to confirm your slot.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 bg-zinc-900 border border-zinc-800 clip-angled">
                      {/* Left: QR Code */}
                      <div className="md:col-span-5 flex flex-col items-center text-center">
                        <div className="relative w-44 h-44 bg-white p-2 rounded clip-angled shadow-lg">
                          <Image
                            src="/media/upi_qr.png"
                            alt="AOGA Official UPI QR Code"
                            width={160}
                            height={160}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[11px] font-heading uppercase tracking-wider text-zinc-400 mt-2">
                          Scan with GPay, PhonePe, Paytm, BHIM
                        </span>
                      </div>

                      {/* Right: Payment details */}
                      <div className="md:col-span-7 flex flex-col space-y-3">
                        <div className="text-xs text-zinc-400 font-heading uppercase">
                          Payee: <strong className="text-white">All Odisha Gym Association (AOGA)</strong>
                        </div>

                        <div className="flex items-center gap-2">
                          <code className="px-3 py-1.5 bg-black border border-zinc-800 text-brand-gold text-xs font-mono rounded">
                            aoga@upi
                          </code>
                          <button
                            type="button"
                            onClick={copyUpiId}
                            className="p-1.5 bg-zinc-800 text-zinc-300 hover:text-white rounded"
                            title="Copy UPI ID"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          {copiedUpi && <span className="text-xs text-green-400">Copied!</span>}
                        </div>

                        <div className="text-sm font-semibold text-white">
                          Amount: <span className="text-brand-gold font-display text-xl">{currentFee.text}</span>
                        </div>

                        {/* UTR Input & Verify Button */}
                        <div className="pt-2">
                          <label className="block text-xs font-heading uppercase tracking-wider text-zinc-300 font-bold mb-1">
                            Enter 12-Digit UPI Reference / UTR Number: *
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="e.g. 434509123847"
                              value={formData.utrNumber}
                              disabled={upiVerified}
                              onChange={(e) => setFormData({ ...formData, utrNumber: e.target.value })}
                              className="flex-grow bg-black border border-zinc-700 p-2.5 text-white clip-angled text-sm focus:border-brand-red focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={handleVerifyUtr}
                              disabled={isVerifyingUpi || upiVerified}
                              className={`px-4 py-2 font-heading text-xs uppercase tracking-wider font-bold clip-angled ${
                                upiVerified
                                  ? 'bg-green-600 text-white'
                                  : 'bg-brand-gold text-black hover:bg-yellow-400'
                              }`}
                            >
                              {isVerifyingUpi ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : upiVerified ? (
                                '✓ VERIFIED'
                              ) : (
                                'VERIFY UTR'
                              )}
                            </button>
                          </div>
                          {formErrors.utrNumber && (
                            <p className="text-xs text-brand-red mt-1">{formErrors.utrNumber}</p>
                          )}
                          {upiVerified && (
                            <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> UTR Verified! Ready to confirm registration.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="p-3 bg-red-950/80 border border-brand-red text-xs text-white rounded">
                      {submitError}
                    </div>
                  )}

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs font-heading uppercase tracking-wider text-zinc-400 hover:text-white"
                    >
                      ← Back to Category
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || (!currentFee.isFree && !upiVerified)}
                      className="px-8 py-4 bg-brand-red hover:bg-[#ff0700] text-white font-heading text-base font-black uppercase tracking-wider clip-angled shadow-[0_0_25px_rgba(225,6,0,0.6)] disabled:opacity-50 disabled:pointer-events-none flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>PROCESSING REGISTRATION...</span>
                        </>
                      ) : (
                        <>
                          <Flame className="w-5 h-5" />
                          <span>SUBMIT & CONFIRM REGISTRATION</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* SECTION 3: REFUND & DOCUMENTS CHECKLIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
          <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span>OFFICIAL REFUND POLICY</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              {EVENT_DATA.policies.refund}
            </p>
            <ul className="text-xs text-zinc-400 space-y-1.5">
              <li>• 100% full refund if event is cancelled or postponed.</li>
              <li>• 50% refund for personal cancellations prior to 31 Oct 2026.</li>
              <li>• Zero transfer fee for category or weight class revisions.</li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 bg-zinc-950 border border-zinc-800 clip-angled">
            <h4 className="font-heading text-2xl font-bold uppercase text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-red" />
              <span>EVENT DAY DOCUMENTS CHECKLIST</span>
            </h4>
            <ul className="text-xs text-zinc-300 space-y-2">
              {EVENT_DATA.policies.requiredDocuments.slice(0, 4).map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 4: FAQ ACCORDION */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <SectionHeading
            tag="HAVE QUESTIONS?"
            title="REGISTRATION FAQ"
            subtitle="Everything you need to know about categories, passes, and event day check-in."
            accentColor="gold"
          />

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 clip-angled overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-heading text-base sm:text-lg font-bold text-white uppercase hover:text-brand-gold transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-gold shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="p-5 pt-0 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Help & WhatsApp Link */}
        <div className="text-center">
          <div className="text-xs font-heading uppercase tracking-widest text-zinc-500 mb-3">
            STILL NEED REGISTRATION ASSISTANCE?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={EVENT_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-heading text-sm uppercase tracking-wider clip-angled border border-zinc-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-green-400" />
              <span>WhatsApp Athlete Desk</span>
            </a>
            <a
              href={`mailto:${EVENT_DATA.contact.email}`}
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-heading text-sm uppercase tracking-wider clip-angled border border-zinc-700 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-brand-gold" />
              <span>Email: {EVENT_DATA.contact.email}</span>
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
