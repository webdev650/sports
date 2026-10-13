import { Bebas_Neue, Anton, Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import ScrollProgress from '@/components/common/ScrollProgress';
import FloatingCTA from '@/components/common/FloatingCTA';
import GrainOverlay from '@/components/common/GrainOverlay';
import Loader from '@/components/common/Loader';
import SmoothScroll from '@/components/common/SmoothScroll';
import { EVENT_DATA } from '@/lib/eventData';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aogasportsfestival.com'),
  title: "INDIA'S BIGGEST SPORTS FESTIVAL 2026 | All Odisha Gym Association (AOGA)",
  description: "Experience India's Biggest Sports Festival 2026 at Baramunda Ground, Bhubaneswar, Odisha (4-6 Dec 2026). ₹1.5 Crore Prize Money, 40+ Countries, 6 Championships including Bodybuilding, Powerlifting, Dangal, Marathon, Arm Wrestling & Boxing.",
  keywords: [
    'AOGA 2026',
    "India's Biggest Sports Festival",
    'All Odisha Gym Association',
    'Anil Gochhikar Classic Bodybuilding',
    'Utkal Kesari Dangal 2026',
    'Bhubaneswar Sports Festival',
    'Powerlifting Championship Odisha',
    "Dutee's Marathon 2026",
    'Baramunda Ground',
    'Bodybuilding Competition India',
  ],
  authors: [{ name: 'All Odisha Gym Association' }],
  creator: 'All Odisha Gym Association',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aogasportsfestival.com',
    title: "INDIA'S BIGGEST SPORTS FESTIVAL 2026 | ₹1.5 Cr Prize Money",
    description: "4-6 December 2026 at Baramunda Ground, Bhubaneswar. 40+ Countries, 6 Championships, ₹1.5 Crore Cash Prize Pool.",
    siteName: "INDIA'S BIGGEST SPORTS FESTIVAL 2026",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: "India's Biggest Sports Festival 2026 - AOGA",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "INDIA'S BIGGEST SPORTS FESTIVAL 2026 | AOGA",
    description: "₹1.5 Crore Prize Money, 40+ Countries, 6 Championships, Baramunda Ground, Bhubaneswar.",
    creator: '@aoga_official',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  // SportsEvent JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: "India's Biggest Sports Festival 2026",
    description: "Premier multi-sport mega festival organized by All Odisha Gym Association featuring ₹1.5 Crore prize money across 6 championships.",
    startDate: EVENT_DATA.dates.start,
    endDate: EVENT_DATA.dates.end,
    location: {
      '@type': 'Place',
      name: 'Baramunda Ground Field',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhubaneswar',
        addressRegion: 'Odisha',
        addressCountry: 'India',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'All Odisha Gym Association (AOGA)',
      url: 'https://aogasportsfestival.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-80189-58655',
        contactType: 'Customer Support',
      },
    },
    offers: {
      '@type': 'Offer',
      url: 'https://aogasportsfestival.com/register',
      price: '600',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${anton.variable} ${inter.variable} ${poppins.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white antialiased selection:bg-brand-red selection:text-white min-h-screen flex flex-col">
        <SmoothScroll>
          <GrainOverlay />
          <CustomCursor />
          <ScrollProgress />
          <Loader />
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <FloatingCTA />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
