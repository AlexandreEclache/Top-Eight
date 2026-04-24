'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Partner } from '@/sections/PartnerGrid';

export function PartnerCard({ partner }: { partner: Partner }) {
  const Card = (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="rounded-xl2 border border-navy/10 bg-white p-6 shadow-premium">
      <Image src={partner.logo} alt={partner.name} width={160} height={72} className="h-14 w-auto object-contain" />
      <h3 className="mt-5 text-xl font-bold">{partner.name}</h3>
      <p className="mt-2 text-sm text-navy/75">{partner.description}</p>
    </motion.article>
  );

  if (partner.href) {
    return <Link href={partner.href}>{Card}</Link>;
  }

  return Card;
}
