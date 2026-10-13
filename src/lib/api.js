/**
 * MOCK API HANDLER (/lib/api.js)
 * INDIA'S BIGGEST SPORTS FESTIVAL 2026 - AOGA
 * 
 * Simulates network latency (1.5s delay) and returns structured success/failure responses.
 * Comments indicate where the production REST/GraphQL/tRPC endpoints, database transactions,
 * Razorpay/Cashfree payment verification, and SendGrid/SES email services should be integrated.
 */

const SIMULATED_LATENCY_MS = 1500;

const delay = (ms = SIMULATED_LATENCY_MS) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Handle Athlete Registration submission
 * TODO [PRODUCTION]: Connect to POST /api/v1/registrations
 * - Validate HMAC signature of payment
 * - Save athlete record to PostgreSQL / Supabase
 * - Upload ID proof document to AWS S3 / Cloudflare R2
 * - Trigger automated Confirmation WhatsApp + Email with PDF Athlete Pass
 */
export async function submitRegistration(registrationData) {
  await delay();

  // Basic check for honeypot spam prevention
  if (registrationData.botField || registrationData.hp_field) {
    return {
      success: false,
      error: 'Spam activity detected.',
    };
  }

  // Generate simulated Athlete Registration Reference ID
  const regId = 'AOGA-2026-' + Math.floor(100000 + Math.random() * 900000);

  return {
    success: true,
    message: 'Registration successfully received! Official Athlete ID generated.',
    registrationId: regId,
    timestamp: new Date().toISOString(),
    data: {
      athleteName: registrationData.fullName,
      championship: registrationData.championship,
      division: registrationData.division,
      weightClass: registrationData.weightClass || 'Open',
      utrNumber: registrationData.utrNumber,
      amountPaid: registrationData.feeAmount,
      passStatus: 'CONFIRMED (AWAITING WEIGH-IN)',
    },
  };
}

/**
 * Handle Contact Form submission
 * TODO [PRODUCTION]: Connect to POST /api/v1/contact
 * - Save message into CRM (HubSpot/Zoho)
 * - Trigger notification email to aogaofficial@gmail.com
 * - Send SMS notification to +91 80189 58655
 */
export async function submitContactMessage(contactData) {
  await delay();

  if (contactData.botField || contactData.honeypot) {
    return {
      success: false,
      error: 'Spam submission blocked.',
    };
  }

  const ticketId = 'TICKET-' + Math.floor(10000 + Math.random() * 90000);

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received. Our team will contact you within 24 hours.',
    ticketId: ticketId,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Handle Sponsorship & Stall Enquiry
 * TODO [PRODUCTION]: Connect to POST /api/v1/sponsors
 * - Route to AOGA Corporate Sponsorship Desk
 * - Send official Sponsorship Deck PDF to sponsor's email
 */
export async function submitSponsorEnquiry(sponsorData) {
  await delay();

  if (sponsorData.botField) {
    return { success: false, error: 'Invalid submission' };
  }

  const enquiryRef = 'SPONSOR-AOGA-' + Math.floor(1000 + Math.random() * 9000);

  return {
    success: true,
    message: 'Sponsorship enquiry registered. AOGA Sponsorship Desk will share the deck and schedule a briefing call.',
    referenceId: enquiryRef,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Handle Payment Verification (UPI QR & UTR number)
 * TODO [PRODUCTION]: Connect to Bank UPI Webhook / Razorpay Payment Intent Verification
 * - Verify 12-digit UTR on bank gateway
 * - Mark transaction as SUCCESS or PENDING_RECONCILIATION
 */
export async function verifyUpiPayment(utrNumber, amount) {
  await delay(1200);

  // Validate Indian UTR format (typically 12 alphanumeric characters)
  const cleanUtr = (utrNumber || '').trim();
  if (cleanUtr.length < 10) {
    return {
      success: false,
      error: 'Invalid UTR reference number. Please enter the valid 12-digit UPI transaction reference.',
    };
  }

  return {
    success: true,
    verified: true,
    utr: cleanUtr,
    amount: amount,
    status: 'VERIFIED',
    receiptNumber: 'UPI-REC-' + Date.now().toString().slice(-6),
  };
}

/**
 * Handle Category Search & Fee Computation
 */
export function calculateCategoryFee(championshipId, divisionId) {
  switch (championshipId) {
    case 'bodybuilding':
      if (divisionId === 'star-category') return { fee: 0, isFree: true, note: 'Star Category (Para-Athletes) is 100% Free' };
      return { fee: 5000, isFree: false, note: 'Official International Entry' };
    case 'powerlifting':
      return { fee: 600, isFree: false, note: 'National Open Entry' };
    case 'dangal':
      return { fee: 1000, isFree: false, note: 'Utkal Kesari 2026 Entry' };
    case 'marathon':
      return { fee: 600, isFree: false, note: 'Official Timed Bib + Kit' };
    case 'arm-wrestling':
      return { fee: 1000, isFree: false, note: 'National Arm Wrestling Showdown' };
    case 'boxing':
      return { fee: 1000, isFree: false, note: 'Open Boxing Championship' };
    default:
      return { fee: 1000, isFree: false, note: 'Standard Entry' };
  }
}
