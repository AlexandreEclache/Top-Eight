import { HeroSection } from '@/sections/HeroSection';
import { GalleryGrid } from '@/sections/GalleryGrid';
import { galleryImages } from '@/lib/content';

export default function GalleryPage() {
  return (
    <>
      <HeroSection title="Galerie" subtitle="Moments marquants : actions de jeu, networking, conférences et gala." image="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1800&auto=format&fit=crop" />
      <GalleryGrid images={galleryImages} />
    </>
  );
}
