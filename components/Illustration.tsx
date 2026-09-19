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
 * The approved artwork, traced to SVG.
 *
 * The reference sheets hold about 290 x 230 real pixels per illustration, so
 * any raster version was going to look soft at hero size however it was
 * upscaled. As vector it is sharp at every size and on every screen, and the
 * files are smaller than the PNGs they replace.
 *
 * Served as a plain <img> rather than through next/image: there is nothing for
 * an image optimiser to do to an SVG, and it saves a round trip through the
 * optimisation endpoint. width and height come from the traced viewBox so the
 * space is reserved before the file arrives.
 */
export default function Illustration({ src, alt, className, priority }: Props) {
  const dim = DIMS[src] ?? { w: 600, h: 500 };
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={dim.w}
      height={dim.h}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
