import { MotionReveal } from '@/components/MotionReveal';

type Stat = { label: string; value: string };

export function StatsSection({ stats }: { stats: Stat[] }) {
  return (
    <section className="section">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, i) => (
          <MotionReveal key={stat.label} delay={i * 0.05} className="rounded-xl2 border border-navy/10 bg-white p-8 text-center shadow-premium">
            <p className="text-4xl font-black text-accentBlue">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-navy/70">{stat.label}</p>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
