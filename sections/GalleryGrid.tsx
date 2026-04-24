'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function GalleryGrid({ images }: { images: string[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className="section">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((src) => (
          <motion.button key={src} whileHover={{ scale: 1.02 }} className="mb-4 block w-full overflow-hidden rounded-xl2" onClick={() => setSelected(src)}>
            <Image src={src} alt="Galerie Top Eight" width={800} height={1000} className="h-auto w-full object-cover transition hover:brightness-110" />
          </motion.button>
        ))}
      </div>
      {selected && (
        <button className="fixed inset-0 z-[60] bg-black/80 p-6" onClick={() => setSelected(null)}>
          <Image src={selected} alt="Agrandissement" width={1200} height={900} className="mx-auto h-full w-auto max-w-full rounded-xl2 object-contain" />
        </button>
      )}
    </section>
  );
}
