import Link from 'next/link';
import { MotionReveal } from '@/components/MotionReveal';

type Props = {
  title: string;
  subtitle: string;
  image: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function HeroSection({ title, subtitle, image, ctaPrimary, ctaSecondary }: Props) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="section relative flex min-h-[70vh] items-center py-24 text-white">
        <MotionReveal className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accentGold">Top Eight</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{subtitle}</p>
          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {ctaPrimary && <Link href={ctaPrimary.href} className="rounded-full bg-white px-7 py-3 font-semibold text-navy transition hover:scale-[1.02]">{ctaPrimary.label}</Link>}
              {ctaSecondary && <Link href={ctaSecondary.href} className="rounded-full border border-white/60 px-7 py-3 font-semibold text-white transition hover:bg-white/10">{ctaSecondary.label}</Link>}
            </div>
          )}
        </MotionReveal>
      </div>
    </section>
  );
}
