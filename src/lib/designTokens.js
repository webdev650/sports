/**
 * INDIA'S BIGGEST SPORTS FESTIVAL 2026 - DESIGN SYSTEM TOKENS
 * Organised by All Odisha Gym Association (AOGA)
 * Bhubaneswar, Odisha | 4-6 December 2026
 */

export const DESIGN_TOKENS = {
  colors: {
    bgDark: '#0A0A0A',
    surface: '#141414',
    surfaceSubtle: '#181818',
    surfaceCard: '#1A1A1A',
    surfaceHover: '#222222',
    surfaceBorder: '#2A2A2A',
    electricRed: '#E10600',
    electricRedGlow: 'rgba(225, 6, 0, 0.45)',
    gold: '#F5B301',
    goldGlow: 'rgba(245, 179, 1, 0.45)',
    offWhite: '#F5F3EE',
    white: '#FFFFFF',
    mutedGray: '#9CA3AF',
    mutedLight: '#D1D5DB',
    mutedDark: '#6B7280',
  },
  fonts: {
    heading: 'Bebas Neue, Anton, Impact, sans-serif',
    display: 'Anton, Impact, sans-serif',
    body: 'Inter, system-ui, -apple-system, sans-serif',
    accent: 'Poppins, system-ui, sans-serif',
  },
  radii: {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '8px',
    angled: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
    angledSmall: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
  },
  shadows: {
    redGlow: '0 0 25px -3px rgba(225, 6, 0, 0.5), 0 0 10px -2px rgba(225, 6, 0, 0.3)',
    goldGlow: '0 0 25px -3px rgba(245, 179, 1, 0.5), 0 0 10px -2px rgba(245, 179, 1, 0.3)',
    card: '0 10px 30px -10px rgba(0, 0, 0, 0.75)',
    innerGlow: 'inset 0 0 20px rgba(225, 6, 0, 0.15)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '600ms cubic-bezier(0.16, 1, 0.3, 1)',
    bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};
