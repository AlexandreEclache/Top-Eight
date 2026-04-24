import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section grid gap-8 py-14 md:grid-cols-3 md:py-16">
        <div>
          <h3 className="text-xl font-bold">Top Eight</h3>
          <p className="mt-2 text-sm text-white/80">Le tournoi étudiant rugby & business de référence.</p>
        </div>
        <div>
          <h4 className="font-semibold">Navigation</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/85">
            <Link href="/tournoi-ey-top-eight">Tournoi</Link>
            <Link href="/nos-partenaires">Partenaires</Link>
            <Link href="/devenir-partenaire">Devenir partenaire</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-white/80">contact@topeight.fr</p>
        </div>
      </div>
    </footer>
  );
}
