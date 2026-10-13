'use client';

import { motion } from 'framer-motion';

export default function SplitText({
  text,
  className = '',
  mode = 'word', // 'word' | 'char'
  stagger = 0.04,
  delay = 0,
}) {
  if (!text) return null;

  if (mode === 'char') {
    const chars = Array.from(text);
    return (
      <span className={`inline-block overflow-hidden ${className}`}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 35, rotateZ: 4 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  }

  // Word-by-word mode
  const words = text.split(' ');
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + index * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
