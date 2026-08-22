/**
 * ============================================================================
 * HERO CONTENT — the first twelve words a recruiter reads.
 * ============================================================================
 *
 * WRITING RULE FOR THIS FILE: no adjectives about the author. "Passionate",
 * "dedicated", "hard-working" and "detail-oriented" are true of every
 * candidate and therefore carry no information — they are the single loudest
 * generic-portfolio tell, louder than any visual choice.
 *
 * Every line below is either a verifiable fact or a number. If a claim here
 * cannot be checked against the resume, the repo, or the YouTube channel, it
 * does not belong.
 * ============================================================================
 */

export interface HeroAction {
  href: string;
  label: string;
  /** Internal route vs external link — decides Link vs <a>. */
  external?: boolean;
}

export interface HeroContent {
  /** Small line above the headline. */
  eyebrow: string;
  /** The headline. Two short lines beat one long one at display size. */
  headline: string[];
  /** The claim, in plain language. Two sentences at most. */
  standfirst: string;
  actions: HeroAction[];
  /**
   * Link out to the YouTube channel, rendered as a glyph on the headline.
   * The href is NOT stored here — it comes from content/youtube.ts so the
   * channel URL keeps exactly one home.
   */
  channelLinkLabel: string;
  /**
   * Highlighted entry point to the MLH submission.
   *
   * Sits in the hero rather than only in the nav because the audience for it
   * is a fellowship judge opening this URL cold, who should not have to scan a
   * nav bar or scroll to find the thing they came for.
   */
  featured: {
    /** Official MLH lockup, used as supplied. */
    logo: { src: string; alt: string; width: number; height: number };
    eyebrow: string;
    title: string;
    blurb: string;
    href: string;
    cta: string;
  };
  /**
   * Full-bleed background artwork sitting behind the hero copy.
   *
   * `src` is a path under /public. When it is null the hero falls back to a
   * painted dusk gradient in the same hues, so the page never renders a broken
   * image or an empty black box — it just looks like a plainer hero.
   */
  background: {
    src: string | null;
    /** Responsive candidates. Served as a plain srcset, widths in `w`. */
    srcSet?: string;
    /** Sizes hint. The artwork is full-bleed, so it is always 100vw. */
    sizes?: string;
    alt: string;
    /**
     * Horizontal focal point as a CSS object-position value. The artwork puts
     * the figure slightly right of centre, so on narrow screens the crop is
     * biased right to keep him and the cat in frame.
     */
    focal: string;
  };
}

export const heroContent: HeroContent = {
  eyebrow: "Thunder Bay, Ontario",
  headline: ["Building backends", "in public."],
  standfirst:
    "Computer science student at Lakehead University. Two systems I architected are live in production at a startup — Django, Celery, FastAPI, PostgreSQL with pgvector. I film the work most days and publish it.",
  channelLinkLabel: "Watch on YouTube — @BigOGrindset",
  featured: {
    logo: {
      src: "/mlh-fellowship-logo.png",
      alt: "MLH Fellowship",
      width: 362,
      height: 118,
    },
    eyebrow: "MLH Fellowship submission",
    title: "Building JWT from Scratch",
    blurb:
      "A JSON Web Token library in pure Python, zero dependencies, every build session screen-recorded and linked to the exact timestamp.",
    href: "/mlh-swe-fellowship-submission",
    cta: "Read the build log",
  },
  actions: [
    { href: "#projects", label: "See the work" },
    { href: "#contact", label: "Get in touch" },
  ],
  background: {
    /*
     * Encoded from a 2980x1408 / 2.7 MB JPEG down to three WebP widths.
     * The largest is 164 KB — a 94% saving on what is the page's LCP element.
     * The source JPEG is deliberately NOT committed: at 2.7 MB it would sit in
     * git history forever for no benefit, since nothing serves it.
     */
    src: "/hero-desk-1400.webp",
    srcSet:
      "/hero-desk-800.webp 800w, /hero-desk-1400.webp 1400w, /hero-desk-2400.webp 2400w",
    sizes: "100vw",
    alt:
      "Illustration of a developer at a desk at dusk with an orange cat on his shoulder, " +
      "looking out over a city skyline",
    focal: "58% 45%",
  },
};
