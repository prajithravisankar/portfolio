/**
 * ============================================================================
 * ABOUT CONTENT — the "About Me" bento grid.
 * ============================================================================
 *
 * Models lines 115-365 of the original monolithic page.tsx: the section
 * heading, the profile card (avatar + name + 9 skill badges + bio), the
 * education summary card, and the full-width contact card (id="contact").
 *
 * Every string, href, alt text and badge label below is copied VERBATIM.
 * Apostrophes are ASCII U+0027 ("I'm", "Bachelor's", "Let's") exactly as in
 * the original — do not let an editor "smarten" them.
 *
 * This file is .ts (no JSX), so lucide-react icons are stored as component
 * VALUES on the data objects and rendered by the section component.
 * ============================================================================
 */

import {
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Github,
  GraduationCap,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Server,
  type LucideIcon,
} from "lucide-react";

import type { Hideable } from "@/content/navigation";

/**
 * `rel` value used by external anchors. The three contact BUTTONS use
 * "noopener noreferrer"; the two email LINKS use "noreferrer". Modelled
 * explicitly so the exact rel string survives.
 */
export type ExternalRel = "noopener noreferrer" | "noreferrer";

/* ---------------------------------------------------------------------------
 * Section heading
 * ------------------------------------------------------------------------- */

export interface SectionHeading {
  /** <section id="..."> */
  id: string;
  /** <h2><span> text, verbatim. */
  title: string;
  /** About Me has NO subtitle paragraph — must stay optional. */
  subtitle?: string;
}

/* ---------------------------------------------------------------------------
 * Profile card (lg:col-span-2 — the only card carrying `group`)
 * ------------------------------------------------------------------------- */

export interface AvatarContent {
  /** AvatarImage src. */
  src: string;
  /** AvatarImage alt. */
  alt: string;
  /** AvatarFallback initials. */
  fallback: string;
}

/** One icon skill badge (Badge variant="secondary"). */
export interface SkillBadge extends Hideable {
  /** lucide component value rendered at `w-3 h-3 mr-1`. */
  icon: LucideIcon;
  /** Verbatim label. */
  label: string;
}

export interface ProfileCardContent {
  avatar: AvatarContent;
  /**
   * CardTitle text. Deliberately a separate content item from the nav brand
   * and the footer wordmark even though the three strings are identical.
   */
  name: string;
  /** Exactly 9 entries, in order. */
  skills: SkillBadge[];
  /**
   * Bio paragraph as a single line. In the original the text is authored
   * across 8 wrapped source lines which JSX collapses to single spaces, and a
   * no-op JSX comment precedes it, so this is the exact rendered string.
   */
  bio: string;
}

/* ---------------------------------------------------------------------------
 * Education summary card (lg:col-span-1)
 * ------------------------------------------------------------------------- */

/** A `flex justify-between` label/value row under the Separator. */
export interface EducationStat extends Hideable {
  /** Left span (muted). */
  label: string;
  /** Right span (accent). */
  value: string;
  /** true => the value span also gets `font-semibold` (only "Current GPA"). */
  emphasized?: boolean;
}

export interface EducationSummaryCardContent {
  /** CardTitle leading icon. */
  icon: LucideIcon;
  /** CardTitle text. */
  title: string;
  /** Bold institution line. */
  institution: string;
  /** Muted degree line. */
  degree: string;
  /** Exactly 2 rows, in order. */
  stats: EducationStat[];
}

/* ---------------------------------------------------------------------------
 * Contact card (lg:col-span-3, id="contact")
 * ------------------------------------------------------------------------- */

/** GitHub / LinkedIn / Boot.dev outline buttons. */
export interface ContactSocialLink extends Hideable {
  /**
   * Leading lucide icon (`w-4 h-4`). OPTIONAL — the Boot.dev button has no
   * leading icon, only its label plus the trailing ExternalLink.
   */
  icon?: LucideIcon;
  /** Verbatim label. */
  label: string;
  href: string;
  /** true => target="_blank". */
  external?: boolean;
  /** All three use "noopener noreferrer". */
  rel?: ExternalRel;
  /** true => trailing <ExternalLink className="w-3 h-3" />. */
  showExternalIcon?: boolean;
}

export interface ContactEmailLink extends Hideable {
  /** Visible address text, verbatim. */
  address: string;
  /** Full Gmail compose URL, verbatim (query string included). */
  href: string;
  /** true => target="_blank". */
  external?: boolean;
  /** Both use "noreferrer" (NOT "noopener noreferrer"). */
  rel?: ExternalRel;
  /**
   * DOM fidelity: the first email's anchor wraps its text in a <div>, the
   * second renders bare text. true => wrap in <div>.
   */
  wrapInDiv?: boolean;
}

export interface ContactCardContent {
  /** Anchor id placed on the Card element. */
  id: string;
  /** CardTitle leading icon. */
  icon: LucideIcon;
  /** CardTitle text (ASCII apostrophe). */
  title: string;
  /** Location row leading icon. */
  locationIcon: LucideIcon;
  /** Location text. */
  location: string;
  /** Exactly 3, in order. */
  socials: ContactSocialLink[];
  /** Small muted label above the email list. */
  emailLabel: string;
  /** Exactly 2, in order. */
  emails: ContactEmailLink[];
}

/* ---------------------------------------------------------------------------
 * Aggregate
 * ------------------------------------------------------------------------- */

export interface AboutContent {
  heading: SectionHeading;
  profile: ProfileCardContent;
  education: EducationSummaryCardContent;
  contact: ContactCardContent;
}

export const aboutContent: AboutContent = {
  heading: {
    id: "about",
    title: "About Me",
  },

  profile: {
    avatar: {
      src: "/temp_image.jpg",
      alt: "Prajith Ravisankar",
      fallback: "PR",
    },
    name: "Prajith Ravisankar",
    skills: [
      { icon: Code2, label: "Full-Stack Developer" },
      { icon: Server, label: "Django/DRF APIs" },
      { icon: Layout, label: "Next.js / React" },
      { icon: Database, label: "PostgreSQL / SQL" },
      { icon: Container, label: "Docker / DevOps" },
      { icon: Cloud, label: "AWS (S3 / CloudFront)" },
      { icon: GitBranch, label: "CI/CD (GitHub Actions)" },
      { icon: CheckCircle2, label: "Testing / TDD" },
      { icon: Brain, label: "Maps + AI Integrations" },
    ],
    // Rewritten for the Workshop theme. The previous copy led with
    // "passionate and dedicated", which is true of every candidate and so
    // carries no information — the loudest generic-portfolio tell there is.
    // Every sentence below names something checkable instead.
    bio: "I work on backends: multi-tenant Django integrations with OAuth and webhook verification, Celery pipelines that survive duplicate deliveries, and a FastAPI service doing semantic search over 14,000+ ad-targeting options with pgvector. Two of those are live in production. I am finishing a CS degree at Lakehead University, and I film most of the work and put it on YouTube — currently Day 28.",
  },

  education: {
    icon: GraduationCap,
    title: "Education",
    institution: "Lakehead University",
    degree: "Hons. BSc in Computer Science",
    stats: [
      { label: "Expected Graduation", value: "December 2027" },
      { label: "Current GPA", value: "85.7%", emphasized: true },
    ],
  },

  contact: {
    id: "contact",
    icon: Mail,
    title: "Let's Connect",
    locationIcon: MapPin,
    location: "Thunder Bay, ON",
    socials: [
      {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/prajithravisankar",
        external: true,
        rel: "noopener noreferrer",
        showExternalIcon: true,
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/prajithravisankar/",
        external: true,
        rel: "noopener noreferrer",
        showExternalIcon: true,
      },
      {
        label: "Boot.dev",
        href: "https://www.boot.dev/u/prajithravisankar",
        external: true,
        rel: "noopener noreferrer",
        showExternalIcon: true,
      },
    ],
    emailLabel: "Email",
    emails: [
      {
        address: "pravisa1@lakeheadu.ca",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=pravisa1@lakeheadu.ca&su=Inquiry%20from%20Portfolio",
        external: true,
        rel: "noreferrer",
        wrapInDiv: true,
      },
      {
        address: "prajithravisankar@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=prajithravisankar@gmail.com&su=Inquiry%20from%20Portfolio",
        external: true,
        rel: "noreferrer",
      },
    ],
  },
};
