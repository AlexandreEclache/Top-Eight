import { HeroSection } from '@/sections/HeroSection';
import { CTASection } from '@/sections/CTASection';

const packs = [
  { name: 'Pack Bronze', price: '2 500€', details: 'Visibilité logo, présence sur site et accès networking.' },
  { name: 'Pack Silver', price: '6 000€', details: 'Stand premium, workshop marque employeur, activations ciblées.' },
  { name: 'Pack Gold', price: '12 000€', details: 'Naming d’expérience, prise de parole et dispositif talent complet.' }
];

export default function BecomePartnerPage() {
  return (
    <>
      <HeroSection title="Devenir Partenaire" subtitle="Associez votre marque à un événement à forte visibilité sportive et business." image="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1800&auto=format&fit=crop" />
      <section className="section">
        <h2 className="text-3xl font-extrabold">Pourquoi devenir partenaire ?</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {['Marque employeur', 'Lead qualifié étudiant', 'Visibilité premium'].map((b) => (
            <article key={b} className="rounded-xl2 border border-navy/10 bg-white p-7 shadow-premium">
              <h3 className="text-xl font-bold">{b}</h3>
              <p className="mt-2 text-sm text-navy/75">Un levier concret pour activer votre stratégie campus et recrutement.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="text-3xl font-extrabold">Nos offres partenaires</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packs.map((pack, i) => (
            <article key={pack.name} className={`rounded-xl2 border bg-white p-8 shadow-premium ${i === 2 ? 'border-accentGold' : 'border-navy/10'}`}>
              <h3 className="text-2xl font-black">{pack.name}</h3>
              <p className="mt-2 text-3xl font-black text-accentBlue">{pack.price}</p>
              <p className="mt-3 text-sm text-navy/75">{pack.details}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection title="Prenons rendez-vous" text="Recevez le dossier partenaire complet et construisons un dispositif aligné à vos objectifs de marque et recrutement." ctaLabel="Candidater" ctaHref="mailto:partenaires@topeight.fr" />
    </>
  );
}
