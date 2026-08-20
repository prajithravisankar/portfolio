/**
 * ============================================================================
 * SITE METADATA — what search engines, browser tabs and link previews show.
 * ============================================================================
 *
 * This is deliberately theme-independent. It is correct regardless of which
 * visual theme the site ends up wearing, so it lives outside the theme work.
 *
 * The description is the sentence a recruiter reads in a Google result or a
 * LinkedIn preview card before deciding whether to click. It leads with what
 * is verifiable and specific (shipped production systems, named stack) rather
 * than with adjectives, because "passionate developer" is indistinguishable
 * from every other portfolio and reads as filler.
 * ============================================================================
 */

export interface SiteMetadata {
  /** Person's name, used for the OG site name and author tags. */
  name: string;
  /** Browser-tab / search-result headline. */
  title: string;
  /** One-sentence summary under the title. Aim for 140-160 characters. */
  description: string;
  /** Canonical production URL. Required to absolutise the OG image path. */
  url: string;
  /** Search keywords. Modest and honest — keyword stuffing is penalised. */
  keywords: string[];
  /** Short role line used inside the generated preview image. */
  role: string;
  /** Location line used inside the generated preview image. */
  location: string;
}

export const siteMetadata: SiteMetadata = {
  name: "Prajith Ravisankar",
  title: "Prajith Ravisankar — Software Engineer",
  description:
    "Computer science student at Lakehead University building production backends — Django, Celery, FastAPI, PostgreSQL. Shipping in public, one day at a time.",
  url: "https://prajith-portfolio1.vercel.app",
  keywords: [
    "Prajith Ravisankar",
    "software engineer",
    "backend developer",
    "Django",
    "FastAPI",
    "Celery",
    "PostgreSQL",
    "Next.js",
    "Lakehead University",
    "portfolio",
  ],
  role: "Software Engineer",
  location: "Thunder Bay, Ontario",
};
