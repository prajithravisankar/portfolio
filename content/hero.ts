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

export interface HeroStat {
  /** The number or short value. Rendered in mono with tabular figures. */
  value: string;
  /** What the number is. Kept to a few words. */
  label: string;
}

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
  /** Proof strip. Four is the most that stays scannable. */
  stats: HeroStat[];
  actions: HeroAction[];
  /** Hero image. `src` null until the clay render lands. */
  image: {
    src: string | null;
    alt: string;
    /** Shown in place of the image while it does not exist yet. */
    placeholderNote: string;
  };
}

export const heroContent: HeroContent = {
  eyebrow: "Thunder Bay, Ontario",
  headline: ["Building backends", "in public."],
  standfirst:
    "Computer science student at Lakehead University. Two systems I architected are live in production at a startup — Django, Celery, FastAPI, PostgreSQL with pgvector. I film the work most days and publish it.",
  stats: [
    { value: "14,000+", label: "targeting options normalised across six ad platforms" },
    { value: "<100ms", label: "filtered queries across the full taxonomy" },
    { value: "1st / 108", label: "LavaPunk Hackathon, 488 participants" },
  ],
  actions: [
    { href: "#projects", label: "See the work" },
    { href: "#contact", label: "Get in touch" },
  ],
  image: {
    src: null,
    alt: "Claymation figure of Prajith at his desk, building in public",
    placeholderNote: "Hero image slot",
  },
};
