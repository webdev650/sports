'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  disabled = false,
  type = 'button',
  id,
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs min-h-[44px]',
    md: 'px-6 py-3 text-sm min-h-[48px]',
    lg: 'px-8 py-4 text-base min-h-[54px]',
    xl: 'px-10 py-5 text-lg min-h-[60px]',
  };

  const variantClasses = {
    primary:
      'bg-brand-red text-white hover:bg-[#ff0700] hover:shadow-[0_0_25px_rgba(225,6,0,0.65)] border border-brand-red active:scale-[0.98]',
    gold:
      'bg-brand-gold text-black font-extrabold hover:bg-[#ffc107] hover:shadow-[0_0_25px_rgba(245,179,1,0.65)] border border-brand-gold active:scale-[0.98]',
    outline:
      'bg-transparent text-white border border-zinc-700 hover:border-brand-red hover:text-brand-red hover:shadow-[0_0_20px_rgba(225,6,0,0.3)]',
    outlineGold:
      'bg-transparent text-brand-gold border border-brand-gold/60 hover:bg-brand-gold/10 hover:border-brand-gold hover:shadow-[0_0_20px_rgba(245,179,1,0.4)]',
    ghost:
      'bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-800/60 border border-transparent',
    magnetic:
      'bg-gradient-to-r from-brand-red to-[#ff2b25] text-white shadow-[0_0_25px_rgba(225,6,0,0.5)] border border-white/20 hover:shadow-[0_0_35px_rgba(225,6,0,0.8)]',
  };

  const baseClasses = `
    inline-flex items-center justify-center font-heading uppercase tracking-wider font-bold
    clip-angled transition-all duration-200 select-none cursor-pointer text-center relative
    group overflow-hidden
    ${sizeClasses[size] || sizeClasses.md}
    ${variantClasses[variant] || variantClasses.primary}
    ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      {/* Glare sheen line animation on hover */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/15 skew-x-[-25deg] -translate-x-[200%] group-hover:translate-x-[400%] transition-transform duration-700 pointer-events-none" />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {Icon && <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />}
        <span>{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} id={id} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}
