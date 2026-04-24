import { HeroSection } from '@/sections/HeroSection';
import { TimelineSection } from '@/sections/TimelineSection';
import { TextImageSection } from '@/sections/TextImageSection';
import { CTASection } from '@/sections/CTASection';

export default function AssociationPage() {
  return (
    <>
      <HeroSection title="Notre Association" subtitle="Une équipe étudiante engagée pour développer un tournoi à l’impact sportif, professionnel et sociétal." image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop" />
      <TimelineSection items={[{ time: '2013', title: 'Création', description: 'Naissance du projet Top Eight autour des valeurs du rugby étudiant.' }, { time: '2018', title: 'Croissance nationale', description: 'Déploiement du tournoi avec des entreprises partenaires majeures.' }, { time: '2024', title: 'Positionnement premium', description: 'Montée en gamme de l’expérience événementielle et business.' }]} />
      <section className="section">
        <h2 className="text-3xl font-extrabold">Nos valeurs</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Engagement', 'Esprit d’équipe', 'Excellence'].map((v) => (
            <article key={v} className="rounded-xl2 border border-navy/10 bg-white p-7 shadow-premium">
              <p className="text-lg font-bold">{v}</p>
              <p className="mt-2 text-sm text-navy/75">Une culture forte qui guide notre organisation, nos partenaires et nos participants.</p>
            </article>
          ))}
        </div>
      </section>
      <TextImageSection title="Développement et rayonnement" text="L'association structure des passerelles concrètes entre étudiants et entreprises, à travers conférences, sessions carrière et rencontres ciblées durant le tournoi." image="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1400&auto=format&fit=crop" />
      <TextImageSection title="Responsabilité & durabilité" text="Top Eight réduit son empreinte par des dispositifs de mobilité partagée, tri renforcé et partenariats engagés, tout en soutenant des actions solidaires locales." image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop" reverse />
      <CTASection title="Découvrir l’édition tournoi" text="Explorez le programme sportif et business qui fait la singularité Top Eight." ctaLabel="Voir le tournoi" ctaHref="/tournoi-ey-top-eight" />
    </>
  );
}
