import { Brain, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * ============================================================================
 * EXPERIENCE CONTENT — the professional work history section (#experience).
 * ============================================================================
 *
 * Source of truth: prajith_ravisankar.pdf (resume), "Experience" block. Every
 * bullet is transcribed VERBATIM, including the figures the claims rest on
 * (six advertising platforms, 60+ businesses, 14,000+ targeting options,
 * sub-100ms / sub-500ms). Those numbers are the substance — do not round,
 * abbreviate or "tighten" them.
 *
 * TWO ROLES, THREE BULLETS EACH. The earlier version carried three roles with
 * up to five bullets apiece. The current resume drops the Curava internship
 * and runs three bullets per role, and the brief was explicitly to keep the
 * per-role detail short. If it needs to get shorter still, cut from the bottom
 * of each `highlights` array — they are ordered strongest first.
 *
 * VOICE: the resume phrases this work as collaborative ("Worked with four
 * Engineering Interns…", "Worked with the Founding Engineer…") rather than
 * solo. That phrasing is preserved rather than upgraded to "architected" —
 * overstating ownership is the fastest way to come apart in an interview.
 *
 * Editing this file changes what the site SAYS. It must never change how the
 * site LOOKS — presentation lives in `@/components/portfolio/tokens` and
 * `@/components/sections/ExperienceSection`.
 *
 * ORDER: reverse-chronological (most recent first), matching the resume.
 * ============================================================================
 */

/**
 * Mixed in so a role can be disabled later without deleting its content.
 * Render sites filter with `.filter((role) => !role.hidden)`.
 */
export interface Hideable {
  hidden?: boolean;
}

/** One professional role in the experience timeline. */
export interface ExperienceRole extends Hideable {
  /** Stable key for React lists. */
  id: string;
  /** Circled glyph in the card header. */
  icon: LucideIcon;
  /** Job title, e.g. "Full Stack SWE Co-op". */
  role: string;
  /** Employer, e.g. "Startup: Link Clicks". */
  organization: string;
  /**
   * Optional intermediary programme the role ran through, e.g. the Riipen
   * placement. Rendered as a separate label so it is never confused with the
   * employer.
   */
  program?: string;
  /** Verbatim date range, en dash as on the resume. */
  dateRange: string;
  /** Technologies, in resume order. Rendered as a row of mono tags. */
  techStack: string[];
  /** Achievement bullets, verbatim, strongest first. */
  highlights: string[];
}

/** Section heading copy. */
export interface ExperienceSectionCopy {
  id: string;
  heading: string;
  subheading: string;
}

export const experienceSection: ExperienceSectionCopy = {
  id: "experience",
  heading: "Experience",
  subheading: "Building production systems in industry",
};

export const experienceRoles: ExperienceRole[] = [
  {
    id: "link-clicks-coop",
    icon: Briefcase,
    role: "Full Stack SWE Co-op",
    organization: "Startup: Link Clicks",
    dateRange: "May 2026 – August 2026",
    techStack: [
      "Python",
      "Django",
      "Django REST Framework",
      "Celery",
      "JavaScript",
      "React",
      "Redux",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "WebSockets",
      "REST APIs",
      "OAuth 2.0",
      "Ad Platform APIs",
      "Git",
    ],
    highlights: [
      "Worked with four Engineering Interns to build OAuth 2.0 authentication for six advertising platforms using Django, Redis, and REST APIs, improving token handling to prevent authentication issues and improve platform reliability.",
      "Built a real-time deployment status feature using React, WebSockets, and Redis, replacing polling and giving 60+ businesses live progress updates and failure notifications across multiple active deployments.",
      "Worked with the Founding Engineer on an AWS S3-based media pipeline that automatically resized uploaded assets for the requirements of six advertising platforms, allowing one upload to be reused across platforms.",
    ],
  },
  {
    id: "link-clicks-ml",
    icon: Brain,
    role: "ML Engineering Intern",
    organization: "Startup: Link Clicks",
    program: "Riipen Advance Ontario Program",
    dateRange: "February 2026 – May 2026",
    techStack: [
      "Python",
      "LLM",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "Celery",
      "RAG",
      "HNSW",
      "nomic-embed-text",
      "Ad Platform APIs",
      "Git",
      "GitHub",
    ],
    highlights: [
      "Worked with three AI/ML Interns to build a semantic search system for advertising data, using Python, PostgreSQL, and open-source AI models to deliver relevant results without external API dependencies across six advertising platforms.",
      "Designed a PostgreSQL-based targeting taxonomy that organized 14,000+ targeting options across six advertising platforms, enabling businesses to discover similar audiences across platforms through a unified system.",
      "Improved search performance with specialized database indexes, achieving sub-100ms filtered queries and sub-500ms semantic search results across all six advertisement platforms; now live in production.",
    ],
  },
];

/** Convenience view with disabled roles removed. */
export const visibleExperienceRoles: ExperienceRole[] =
  experienceRoles.filter((role) => !role.hidden);
