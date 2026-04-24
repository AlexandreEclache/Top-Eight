import { HeroSection } from '@/sections/HeroSection';
import { TextImageSection } from '@/sections/TextImageSection';
import { StatsSection } from '@/sections/StatsSection';
import { CTASection } from '@/sections/CTASection';
import { statsMain, galleryImages } from '@/lib/content';
import Image from 'next/image';

const locations = [
  { city: 'Paris', detail: 'Village partenaires & conférences business' },
  { city: 'Lille', detail: 'Phases sportives et animations campus' },
  { city: 'Lyon', detail: 'Gala final & remise des trophées' }
];

export default function HomePage() {
  return (
    <>
      <HeroSection title="Tournoi EY Top Eight" subtitle="Le rendez-vous étudiant où performance sportive, leadership et business networking se rencontrent." image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1800&auto=format&fit=crop" ctaPrimary={{ label: 'Prendre vos places', href: '/tournoi-ey-top-eight' }} ctaSecondary={{ label: 'Découvrir le tournoi', href: '/notre-association' }} />
      <TextImageSection title="Un événement hybride sport & business" text="Top Eight réunit les meilleures écoles, entreprises partenaires et alumni dans une expérience immersive: compétition de rugby, conférences de haut niveau, moments de networking et soirées premium." image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop" />
      <StatsSection stats={statsMain} />
      <section className="section">
        <h2 className="text-3xl font-extrabold">Ambiance & intensité</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {galleryImages.slice(0, 3).map((src) => (
            <Image key={src} src={src} alt="Top Eight" width={700} height={500} className="h-64 w-full rounded-xl2 object-cover shadow-premium" />
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="text-3xl font-extrabold">Lieux clés</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {locations.map((loc) => (
            <article key={loc.city} className="rounded-xl2 border border-navy/10 bg-white p-7 shadow-premium">
              <h3 className="text-2xl font-bold">{loc.city}</h3>
              <p className="mt-3 text-navy/75">{loc.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Rejoignez l'édition à venir" text="Équipes étudiantes, partenaires entreprises et talents : prenez part à une expérience compétitive, inspirante et à fort impact réseau." ctaLabel="Nous contacter" ctaHref="/devenir-partenaire" />
    </>
  );
}
