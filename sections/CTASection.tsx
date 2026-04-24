import Link from 'next/link';

export function CTASection({ title, text, ctaLabel, ctaHref }: { title: string; text: string; ctaLabel: string; ctaHref: string }) {
  return (
    <section className="section">
      <div className="rounded-[2rem] bg-navy p-10 text-white shadow-premium md:p-14">
        <h3 className="text-3xl font-black">{title}</h3>
        <p className="mt-3 max-w-3xl text-white/80">{text}</p>
        <Link href={ctaHref} className="mt-8 inline-block rounded-full bg-accentGold px-8 py-3 font-bold text-navy transition hover:scale-[1.03]">{ctaLabel}</Link>
      </div>
    </section>
  );
}
