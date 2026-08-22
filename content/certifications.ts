/**
 * ============================================================================
 * CERTIFICATIONS — CONTENT DATA
 * ============================================================================
 *
 * Source of truth: the "Certifications Carousel" <section id="certifications">
 * of the original monolithic app/page.tsx (lines 549–766).
 *
 * Every string below is VERBATIM from the original. Descriptions were
 * hard-wrapped across 2–3 JSX source lines there; JSX collapses each
 * newline + indent into a single space, so the single-line strings here are
 * the exact rendered text. Do not re-wrap them, do not "fix" the wording, the
 * punctuation, the bare `&` in two of the titles, or the apostrophe in "Go's".
 *
 * NOTE ON ICONS: this area contains exactly one lucide-react icon,
 * `ExternalLink`, and it renders IDENTICALLY inside all five CardTitles. It is
 * therefore STRUCTURAL and lives in <CertificationCard>, not in the data. The
 * optional `icon` field below exists only so a future per-item glyph can be
 * added without a type change; no current item sets it, so every card renders
 * the same ExternalLink it always did.
 * ============================================================================
 */

import type { LucideIcon } from "lucide-react";

/** One boot.dev certificate card = one <CarouselItem> in the original. */
export interface Certification {
  /**
   * Stable React key. Mirrors the source comment label that sits above each
   * CarouselItem in the original ("Git", "Functional Programming", "Go",
   * "Linux", "Docker"). Not user-visible.
   */
  id: string;

  /**
   * Verification link, when the credential has a public one.
   *
   * OPTIONAL. The Google Cloud Skills Badges have no public URL recorded here
   * yet, and a credential is worth more unlinked than linked to a guess — the
   * renderer shows those as plain rows rather than fabricating a destination.
   */
  url?: string;

  /** Who issued it. Shown in the list because two providers are now mixed. */
  issuer: string;

  /**
   * <img src> — path under public/. Irregular filenames; never derive from
   * `id`. OPTIONAL: the list treatment renders no images, and the Google
   * badges have none.
   */
  image?: string;

  /**
   * <img alt>. VERBATIM and NOT derivable from `title` — e.g. the card titled
   * "Go (Golang) Systems Programming" has alt text "Go Programming".
   * Optional alongside `image`.
   */
  imageAlt?: string;

  /** Text of the <Badge> overlaid at the bottom-left of the image. */
  category: string;

  /** <CardTitle> text. The ExternalLink icon is appended by the component. */
  title: string;

  /** <CardContent> paragraph copy. */
  description: string;

  /** Per-item icon override. Unused today — see NOTE ON ICONS above. */
  icon?: LucideIcon;

  /**
   * Fidelity escape hatch: disabled / commented-out entries are kept here as
   * data and filtered out at render time so they stay invisible. No current
   * certification sets this — the original has no commented-out cards in this
   * section.
   */
  hidden?: boolean;
}

/** Embla carousel options passed as `opts` to <Carousel>. */
export interface CertificationsCarouselOpts {
  loop: boolean;
  align: "start" | "center" | "end";
}

/** The whole section: anchor, heading block, carousel config, and items. */
export interface CertificationsSection {
  /** <section id> — nav anchor target for href="#certifications". */
  id: string;
  /** <h2> inner text. */
  heading: string;
  /** Sub-heading <p>. */
  subheading: string;
  /** <Carousel opts={...}>. */
  carouselOpts: CertificationsCarouselOpts;
  /** Cards, in the original's exact order. All five must survive. */
  items: Certification[];
}

export const certificationsSection: CertificationsSection = {
  id: "certifications",
  heading: "Certifications",
  subheading: "Continuous learning and skill development",
  carouselOpts: { loop: true, align: "start" },
  items: [
    {
      id: "git",
      issuer: "Boot.dev",
      url: "https://www.boot.dev/certificates/4b334856-cdc5-47d2-9164-c08543e743bd",
      image: "/learn_git.png",
      imageAlt: "Git Certification",
      category: "Version Control",
      title: "Git Fundamentals to Internals",
      description:
        "Comprehensive deep-dive into Git version control, mastering professional workflows including branching, rebasing, and remote collaboration.",
    },
    {
      id: "functional-programming",
      issuer: "Boot.dev",
      url: "https://www.boot.dev/certificates/a52170fa-b452-43b8-833f-c00bbbd1dab0",
      image: "/learn_functional_programming.png",
      imageAlt: "Functional Programming",
      category: "Programming Paradigm",
      title: "Functional Programming Mastery",
      description:
        "Mastered pure functions, closures, and function transformations to create highly abstract and reusable codebases.",
    },
    {
      id: "go",
      issuer: "Boot.dev",
      url: "https://www.boot.dev/certificates/e8bb361b-55fd-479e-9a40-42e26c63586e",
      image: "/learn_go.png",
      imageAlt: "Go Programming",
      category: "Systems Programming",
      title: "Go (Golang) Systems Programming",
      description:
        "Deep expertise in Go's concurrency using Channels and Mutexes, building flexible systems through Interfaces and Generics.",
    },
    {
      id: "linux",
      issuer: "Boot.dev",
      url: "https://www.boot.dev/certificates/a5d43fd9-3a86-4827-a792-d0643a0f8997",
      image: "/learn_linux.png",
      imageAlt: "Linux",
      category: "Operating Systems",
      title: "Linux Systems & CLI Fundamentals",
      description:
        "Strong foundation in Unix-like systems, mastering CLI to streamline workflows, manage permissions, and automate tasks.",
    },
    {
      id: "docker",
      issuer: "Boot.dev",
      url: "https://www.boot.dev/certificates/1d7b88a6-600d-4bb8-9c02-57b4f86ecc72",
      image: "/learn_docker.png",
      imageAlt: "Docker",
      category: "Containerization",
      title: "Docker & Containerization Mastery",
      description:
        "Mastered containerization to build, ship, and run distributed applications with Docker, Volumes, and Bridge Networks.",
    },
    {
      id: "gcp-infrastructure",
      issuer: "Google Cloud",
      category: "Skills Badge",
      title: "Infrastructure in Google Cloud",
      description:
        "Google Cloud Skills Badge covering core infrastructure services: compute, storage and the building blocks applications are deployed onto.",
    },
    {
      id: "gcp-networking-security",
      issuer: "Google Cloud",
      category: "Skills Badge",
      title: "Networking and Security in Google Cloud",
      description:
        "Google Cloud Skills Badge covering cloud networking and the security controls applied across it.",
    },
    {
      id: "gcp-fundamentals",
      issuer: "Google Cloud",
      category: "Skills Badge",
      title: "Cloud Computing Fundamentals",
      description:
        "Google Cloud Skills Badge covering the fundamentals of cloud computing and the Google Cloud platform.",
    },
  ],
};

export default certificationsSection;
