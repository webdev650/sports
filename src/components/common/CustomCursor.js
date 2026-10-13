'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined') {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouch(isTouchDevice);
      if (isTouchDevice) return;
    }

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('select') ||
        target.closest('[data-cursor-hover]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseover', handleElementHover);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseover', handleElementHover);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-brand-red shadow-[0_0_12px_#E10600]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
        style={{ width: 8, height: 8 }}
      />
      {/* Outer interactive ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-brand-red/60 bg-brand-red/10"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? '#F5B301' : 'rgba(225, 6, 0, 0.6)',
          backgroundColor: isHovered ? 'rgba(245, 179, 1, 0.15)' : 'rgba(225, 6, 0, 0.08)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280, mass: 0.2 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}
