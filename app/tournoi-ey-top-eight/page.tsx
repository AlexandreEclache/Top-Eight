import { HeroSection } from '@/sections/HeroSection';
import { StatsSection } from '@/sections/StatsSection';
import { TimelineSection } from '@/sections/TimelineSection';
import { TextImageSection } from '@/sections/TextImageSection';
import { CTASection } from '@/sections/CTASection';

export default function TournamentPage() {
  return (
    <>
      <HeroSection title="Tournoi EY Top Eight" subtitle="Trois jours d'intensité sportive, de rencontres stratégiques et d'expériences premium." image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1800&auto=format&fit=crop" ctaPrimary={{ label: 'Programme complet', href: '/galerie' }} />
      <StatsSection stats={[{ label: 'Matchs', value: '48' }, { label: 'Conférences', value: '12' }, { label: 'Entretiens', value: '200+' }, { label: 'Finalistes', value: '2' }]} />
      <TimelineSection items={[{ time: 'Jour 1', title: 'Launch Party', description: 'Ouverture officielle, reveal du tournoi et networking dirigeants/étudiants.' }, { time: 'Jour 2', title: 'Conférences & phases finales', description: 'Talks business, activations partenaires et matchs à enjeu.' }, { time: 'Jour 3', title: 'Gala & remise des prix', description: 'Clôture premium avec célébration des équipes et partenaires.' }]} />
      <TextImageSection title="Une expérience business immersive" text="Le tournoi combine sport de haut niveau et écosystème carrière : stands entreprises, sessions de mentorat et échanges opérationnels avec des recruteurs." image="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1400&auto=format&fit=crop" />
      <TextImageSection title="Palmarès et héritage" text="Chaque édition enrichit l'histoire Top Eight avec des équipes marquantes et des talents qui poursuivent ensuite dans des trajectoires professionnelles ambitieuses." image="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1400&auto=format&fit=crop" reverse />
      <CTASection title="Accédez à la galerie de l'événement" text="Revivez les meilleurs moments sportifs, business et festifs des dernières éditions." ctaLabel="Voir la galerie" ctaHref="/galerie" />
    </>
  );
}
