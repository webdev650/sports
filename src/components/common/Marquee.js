'use client';

export default function Marquee({
  items,
  reverse = false,
  speedClass = 'animate-marquee',
  className = '',
}) {
  const defaultItems = [
    'ANIL GOCHHIKAR CLASSIC BODYBUILDING',
    'ALL INDIA OPEN POWERLIFTING',
    'DUTEE’S MARATHON',
    'NATIONAL ARM WRESTLING',
    'ODISHA OPEN BOXING',
    'UTKAL KESARI MATTI KUSTI DANGAL',
    '₹1.5 CRORE PRIZE MONEY',
    '#AOGA2026',
    '#STRONGERTOGETHER',
    '4–6 DECEMBER 2026',
    'BARAMUNDA GROUND BHUBANESWAR',
  ];

  const displayItems = items || defaultItems;

  return (
    <div className={`relative w-full overflow-hidden bg-brand-red text-white py-3.5 select-none ${className}`}>
      <div className={`flex whitespace-nowrap will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...displayItems, ...displayItems].map((item, index) => (
          <div key={index} className="flex items-center mx-4 sm:mx-6">
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-black uppercase tracking-widest text-white">
              {item}
            </span>
            <span className="w-2.5 h-2.5 bg-brand-gold rounded-full ml-6 sm:ml-8 shadow-[0_0_8px_#F5B301]" />
          </div>
        ))}
      </div>
    </div>
  );
}
