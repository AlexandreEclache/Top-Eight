import Image from 'next/image';
import { MotionReveal } from '@/components/MotionReveal';

export function TextImageSection({ title, text, image, reverse = false }: { title: string; text: string; image: string; reverse?: boolean }) {
  return (
    <section className="section">
      <div className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <MotionReveal>
          <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
          <p className="mt-5 leading-relaxed text-navy/80">{text}</p>
        </MotionReveal>
        <MotionReveal>
          <Image src={image} alt={title} width={900} height={700} className="h-[360px] w-full rounded-xl2 object-cover shadow-premium" />
        </MotionReveal>
      </div>
    </section>
  );
}
