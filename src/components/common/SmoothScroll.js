'use client';

import { ReactLenis } from 'lenis/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function SmoothScroll({ children }) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
