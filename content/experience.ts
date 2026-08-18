import { Braces, Brain, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * ============================================================================
 * EXPERIENCE CONTENT — the professional work history section (#experience).
 * ============================================================================
 *
 * Source of truth: june_2026_prajith_ravisankar.pdf (resume), "Experience"
 * block. Every bullet below is transcribed VERBATIM from that resume,
 * including the specific figures (14,000+, 768-dim, sub-500ms, sub-100ms,
 * 9 click IDs, 5 UTM parameters, 100% data isolation). Those numbers are the
 * substance of the claims — do not round, abbreviate, or "tighten" them.
 *
 * Editing this file changes what the site SAYS. It must never change how the
 * site LOOKS — presentation lives in `@/components/portfolio/tokens` and
 * `@/components/portfolio/ExperienceCard`.
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
  /** Job title, e.g. "Software Engineering Co-op I". */
  role: string;
  /** Employer, e.g. "Startup: Link Clicks". */
  organization: string;
  /**
   * Optional intermediary program the role ran through, e.g. the Riipen
   * placement. Rendered as a separate badge so it never gets confused with
   * the employer.
   */
  program?: string;
  /** Verbatim date range, en dash as on the resume. */
  dateRange: string;
  /** Technologies, in resume order. Rendered as an outline badge row. */
  techStack: string[];
  /** Achievement bullets, verbatim, in resume order. */
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
    role: "Software Engineering Co-op I",
    organization: "Startup: Link Clicks",
    dateRange: "May 2026 – August 2026",
    techStack: [
      "Django",
      "Celery",
      "Redis",
      "PostgreSQL",
      "BigCommerce API (V2/V3)",
      "WebSockets",
      "OAuth 2.0",
      "HMAC-SHA256",
    ],
    highlights: [
      "Architected a multi-tenant Django BigCommerce integration with OAuth lifecycle callbacks, HMAC-SHA256 webhook verification, and Fernet-encrypted token storage now live in production.",
      "Engineered a Celery/Redis pipeline ingesting order webhooks and writing 5 attribution models (last-touch, first-touch, linear, time-decay, position-based), with circuit-breaker auto-disable and Django Channels WebSocket notifications.",
      "Designed an idempotency-keyed event upsert with a composite key including connection_id, preventing duplicate rows during multi-tenant webhook fan-out where one delivery creates events for multiple users on the same store.",
      "Built a typed REST client for BigCommerce V2/V3 with envelope unwrapping, exponential-backoff retry on 5xx, cursor pagination for resumable backfill, and a typed exception hierarchy for retryable vs fast-fail handling.",
      "Implemented an advertisement click-ID capture strategy via BigCommerce Scripts API, injecting a storefront adapter that beacons 9 click IDs (gclid, fbclid, msclkid, ttclid, etc.) and 5 UTM parameters into order metafields for attribution.",
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
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Celery",
      "RAG",
      "HNSW",
      "nomic-embed-text",
    ],
    highlights: [
      "Architected a unified targeting taxonomy engine, normalizing 14,000+ targeting options from six ad platforms into PostgreSQL with pgvector, enabling cross-platform audience discovery; now live in production.",
      "Designed a RAG pipeline using open-source embedding models (nomic-embed-text, 768-dim) and HNSW vector indexes to power semantic search across ad taxonomies, enabling sub-500ms retrieval with zero external API dependencies.",
      "Engineered a production-grade FastAPI microservice with async SQLAlchemy, Redis-backed rate limiting, Celery scheduled tasks for daily taxonomy refresh, and structured JSON logging with request-ID tracing across all middlewares.",
      "Implemented a JSONB-driven extensible schema supporting 6 ad platforms, backed by 6 specialized indexes (HNSW vector, GIN trigram, partial B-tree, GIN JSONB) enabling sub-100ms filtered queries across the full taxonomy.",
    ],
  },
  {
    id: "curava-swe",
    icon: Braces,
    role: "Software Engineering Intern",
    organization: "Curava",
    dateRange: "January 2026 – February 2026",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "PL/pgSQL",
      "Zod",
      "Meta API",
    ],
    highlights: [
      "Architected full-stack infrastructure using Next.js (React) and TypeScript, implementing strict type-checking and absolute import paths to ensure enterprise-grade scalability, improving developer velocity for core large-scale software systems.",
      "Designed relational database schema in PostgreSQL with Row Level Security and PL/pgSQL triggers, enforcing 100% data isolation between competing agencies while automating profile synchronization across multi-tenant environments.",
      "Engineered a unified asset discovery engine using Zod schemas to integrate 6+ external marketing platforms (Meta, TikTok, Pinterest), aggregating and normalizing daily performance metrics for thousands of active client accounts.",
    ],
  },
];

/** Convenience view with disabled roles removed. */
export const visibleExperienceRoles: ExperienceRole[] =
  experienceRoles.filter((role) => !role.hidden);
