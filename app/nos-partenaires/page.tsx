import { HeroSection } from '@/sections/HeroSection';
import { PartnerGrid } from '@/sections/PartnerGrid';
import { partnerList } from '@/lib/content';

export default function PartnersPage() {
  return (
    <>
      <HeroSection title="Nos Partenaires" subtitle="Des acteurs leaders engagés aux côtés de Top Eight pour créer un tournoi d’excellence." image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1800&auto=format&fit=crop" />
      <PartnerGrid partners={partnerList} />
    </>
  );
}
