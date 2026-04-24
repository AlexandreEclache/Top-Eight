import { HeroSection } from '@/sections/HeroSection';
import { TextImageSection } from '@/sections/TextImageSection';
import { StatsSection } from '@/sections/StatsSection';
import { CTASection } from '@/sections/CTASection';

export default function EyPartnerPage() {
  return (
    <>
      <HeroSection title="EY, Partenaire Majeur" subtitle="Un engagement durable pour connecter les talents étudiants aux enjeux business de demain." image="https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1800&auto=format&fit=crop" ctaPrimary={{ label: 'Voir les opportunités', href: '/devenir-partenaire' }} />
      <TextImageSection title="À propos de EY" text="EY accompagne Top Eight avec son expertise en audit, conseil et transformation, et contribue activement à la professionnalisation des participants." image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop" />
      <StatsSection stats={[{ label: 'Collaborateurs monde', value: '390K' }, { label: 'Pays couverts', value: '150+' }, { label: 'Ateliers carrière', value: '8' }, { label: 'Experts mobilisés', value: '30+' }]} />
      <section className="section">
        <h2 className="text-3xl font-extrabold">Activités sur Top Eight</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Business challenge', 'Mentorat express', 'Conférence leadership'].map((activity) => (
            <article key={activity} className="rounded-xl2 border border-navy/10 bg-white p-7 shadow-premium">
              <h3 className="text-lg font-bold">{activity}</h3>
              <p className="mt-2 text-sm text-navy/75">Un format immersif pour accélérer les connexions entre talents et experts EY.</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Construisez votre avenir avec EY" text="Rencontrez les équipes EY pendant le tournoi et découvrez les parcours de carrière accessibles." ctaLabel="Découvrir les carrières" ctaHref="/devenir-partenaire" />
    </>
  );
}
