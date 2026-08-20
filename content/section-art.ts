/**
 * ============================================================================
 * SECTION ARTWORK — one illustration per section, used as a full-bleed underlay.
 * ============================================================================
 *
 * ADDING A NEW ONE:
 *   1. Encode the source to three WebP widths (800 / 1400 / 2400):
 *        cwebp -q 80 -resize 1400 0 src.jpeg -o public/section-<id>-1400.webp
 *      Never commit the multi-megabyte source — nothing serves it, and it would
 *      sit in git history forever.
 *   2. Add an entry below keyed by the section id.
 *   3. Wrap that section's content in <SectionBackdrop art={sectionArt.<id>}>.
 *
 * The component handles the scrim, the top and bottom fades into the paper
 * ground, and the ambient drift. Sections without an entry render on plain
 * paper, so this is purely additive — nothing breaks while the set is partial.
 * ============================================================================
 */

export interface SectionArt {
  /** Default source; also the 1400w candidate. */
  src: string;
  /** Responsive candidates, widths in `w`. */
  srcSet: string;
  /** Sizes hint. These are full-bleed, so always 100vw. */
  sizes: string;
  /**
   * Decorative underlay, so the alt is empty and the element is aria-hidden:
   * the section's own heading and content already carry the meaning, and
   * announcing "illustration of mountains" adds noise for a screen reader.
   * Kept as a field for documentation and for any future non-decorative use.
   */
  description: string;
  /** CSS object-position — biases the crop on narrow screens. */
  focal: string;
}

const widths = (id: string) =>
  `/section-${id}-800.webp 800w, /section-${id}-1400.webp 1400w, /section-${id}-2400.webp 2400w`;

export const sectionArt = {
  videos: {
    src: "/section-videos-1400.webp",
    srcSet: widths("videos"),
    sizes: "100vw",
    description:
      "A photographer on a clifftop filming a sunset over mountains and a winding river",
    // The photographer sits right of centre; hold him in frame when cropped.
    focal: "68% 55%",
  },
  about: {
    src: "/section-about-1400.webp",
    srcSet: widths("about"),
    sizes: "100vw",
    description:
      "A lone rower on a mountain lake at sunset, peaks and pines flanking a low sun",
    // Centre-weighted composition: the sun, the peak and the boat all sit in
    // the middle, so the crop stays centred rather than biased to one side.
    focal: "50% 52%",
  },
  experience: {
    src: "/section-experience-1400.webp",
    srcSet: widths("experience"),
    sizes: "100vw",
    description:
      "A lit lighthouse on rocks in a storm, lightning over a dark churning sea",
    // The lighthouse stands right of centre and is the whole point of the
    // picture; hold it in frame as the crop tightens.
    focal: "64% 45%",
  },
  education: {
    src: "/section-education-1400.webp",
    srcSet: widths("education"),
    sizes: "100vw",
    description:
      "A boy reading on a rope swing under a banyan tree with an orange cat, facing a waterfall at sunset",
    // Two subjects: the reader at ~30% and the waterfall at ~72%. Hold the
    // reader — he is the point of an academic section — and let the crop bite
    // into the falls instead.
    focal: "42% 55%",
  },
  certifications: {
    src: "/section-certifications-1400.webp",
    srcSet: widths("certifications"),
    sizes: "100vw",
    description:
      "A tall ship at sea under god-rays breaking through storm clouds",
    // Pale, high-key artwork — this is the one that takes the paper wash and
    // ink type rather than a dark scrim and reversed type. The ship sits just
    // right of centre; keep it in frame.
    focal: "58% 50%",
  },
  opensource: {
    src: "/section-opensource-1400.webp",
    srcSet: widths("opensource"),
    sizes: "100vw",
    description:
      "A braided river delta seen from above at sunset, many channels converging into one",
    // Pale and high-key like the ship, so it takes the paper wash. No single
    // subject — a wide vista — so the crop stays centred.
    focal: "50% 50%",
  },
  projects: {
    src: "/section-projects-1400.webp",
    srcSet: widths("projects"),
    sizes: "100vw",
    description:
      "A young man and an orange cat sitting in a flower meadow watching a waterfall at sunset",
    // Bookends the hero: the same figure and cat, out of the city and at rest.
    // Rendered at viewport scale (parallax), which still trims ~25% of the
    // width, so the crop is centred to keep the waterfall (left) and the
    // figure with the cat (right) in frame together.
    focal: "50% 55%",
  },
} satisfies Record<string, SectionArt>;

export type SectionArtKey = keyof typeof sectionArt;
