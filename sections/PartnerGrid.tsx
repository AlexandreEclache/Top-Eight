import { PartnerCard } from '@/components/PartnerCard';

export type Partner = { name: string; logo: string; description: string; href?: string };

export function PartnerGrid({ partners }: { partners: Partner[] }) {
  return (
    <section className="section">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </section>
  );
}
