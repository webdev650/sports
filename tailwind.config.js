/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#141414',
          subtle: '#181818',
          card: '#1A1A1A',
          hover: '#222222',
          border: '#2A2A2A',
        },
        brand: {
          red: '#E10600',
          redGlow: 'rgba(225, 6, 0, 0.45)',
          gold: '#F5B301',
          goldGlow: 'rgba(245, 179, 1, 0.45)',
        },
        offwhite: '#F5F3EE',
        muted: {
          DEFAULT: '#9CA3AF',
          light: '#D1D5DB',
          dark: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        display: ['var(--font-anton)', 'Impact', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -3px rgba(225, 6, 0, 0.5), 0 0 10px -2px rgba(225, 6, 0, 0.3)',
        'glow-gold': '0 0 25px -3px rgba(245, 179, 1, 0.5), 0 0 10px -2px rgba(245, 179, 1, 0.3)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'red-mesh': 'radial-gradient(circle at 50% 0%, rgba(225, 6, 0, 0.25) 0%, transparent 70%)',
        'gold-mesh': 'radial-gradient(circle at 50% 100%, rgba(245, 179, 1, 0.2) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
