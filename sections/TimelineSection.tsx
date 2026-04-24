import { MotionReveal } from '@/components/MotionReveal';

export function TimelineSection({ items }: { items: { time: string; title: string; description: string }[] }) {
  return (
    <section className="section">
      <h2 className="text-3xl font-extrabold">Temps forts du tournoi</h2>
      <div className="mt-10 space-y-6 border-l-2 border-accentBlue/25 pl-6">
        {items.map((item, i) => (
          <MotionReveal key={item.title} delay={i * 0.05} className="relative rounded-xl2 border border-navy/10 bg-white p-6 shadow-premium">
            <span className="absolute -left-9 top-7 h-4 w-4 rounded-full bg-accentBlue" />
            <p className="text-xs uppercase tracking-[0.2em] text-accentBlue">{item.time}</p>
            <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
            <p className="mt-2 text-navy/75">{item.description}</p>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
