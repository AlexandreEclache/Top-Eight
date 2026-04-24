'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string; delay?: number };

export function MotionReveal({ children, className, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
