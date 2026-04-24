'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/notre-association', label: 'Association' },
  { href: '/tournoi-ey-top-eight', label: 'Tournoi' },
  { href: '/nos-partenaires', label: 'Partenaires', dropdown: [{ href: '/ey-partenaire', label: 'EY' }, { href: '/devenir-partenaire', label: 'Devenir partenaire' }] },
  { href: '/galerie', label: 'Galerie' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-wide">TOP EIGHT</Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <div key={link.href} className="group relative">
              <Link href={link.href} className="flex items-center gap-1 font-medium hover:text-accentBlue">
                {link.label} {link.dropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
              {link.dropdown && (
                <div className="invisible absolute left-0 top-8 min-w-52 rounded-xl2 border border-navy/10 bg-white p-2 opacity-0 shadow-premium transition group-hover:visible group-hover:opacity-100">
                  {link.dropdown.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-bgLight">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="space-y-2 border-t border-navy/10 bg-white p-4 md:hidden">
          {links.map((link) => (
            <div key={link.href}>
              <Link href={link.href} className="block rounded-lg p-2 font-medium hover:bg-bgLight" onClick={() => setOpen(false)}>{link.label}</Link>
              {link.dropdown?.map((item) => (
                <Link key={item.href} href={item.href} className="ml-4 block rounded-lg p-2 text-sm text-navy/80 hover:bg-bgLight" onClick={() => setOpen(false)}>{item.label}</Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
