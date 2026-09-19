import Image from 'next/image';
import sizes from '@/lib/illustration-sizes.json';

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** set on the one illustration above the fold so it is not lazy-loaded */
  priority?: boolean;
};

const DIMS = sizes as Record<string, { w: number; h: number }>;

/**
 * The approved artwork, served through next/image so each illustration goes out
 * as AVIF or WebP at the size the layout actually needs. The source files are
 * transparent PNGs of about 200 KB each; this typically ships a tenth of that.
 */
export default function Illustration({ src, alt, className, priority }: Props) {
  const dim = DIMS[src] ?? { w: 600, h: 500 };
  return (
    <Image
      src={src}
      alt={alt}
      width={dim.w}
      height={dim.h}
      className={className}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 620px"
      /* Flat line art: the default 75 smears thin strokes, and these compress
         so well that a high setting still costs very little. */
      quality={92}
    />
  );
}
