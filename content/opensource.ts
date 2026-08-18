/**
 * ============================================================================
 * OPEN SOURCE CONTRIBUTIONS — CONTENT DATA
 * ============================================================================
 *
 * Every string below is copied VERBATIM from the original monolithic page.tsx
 * (`#opensource` section). JSX collapses the multi-line source indentation into
 * single spaces, so the literals here are the single-space-joined form.
 *
 * Encoding note: the original JSX for PR #219 contains the HTML entity `&gt;`,
 * which JSX renders as the single character `>`. In a `.ts` string literal it
 * MUST therefore be written as a literal `>` — copying `&gt;` across would make
 * the page visibly render "&gt;" and break the no-op guarantee.
 *
 * This is a plain data module: no JSX. Lucide icons are imported as VALUES and
 * stored on the objects; the renderer aliases them to `Icon` and renders them.
 * ----------------------------------------------------------------------------
 */

import type { LucideIcon } from "lucide-react";
import { Github } from "lucide-react";

/**
 * One Open Source Contribution card.
 *
 * Every one of the 6 items carries EVERY required field below — the only
 * structural variance is `hidden`, which exists solely on item 6 (PR #205,
 * commented out in the original JSX).
 */
export interface OpenSourceContribution {
  /** Stable key for React list rendering. Derived, not user-visible. */
  id: string;

  /**
   * Icon rendered to the left of the title.
   * ALL 6 items use lucide-react `Github`.
   * Rendered as: <Icon className="w-5 h-5 mt-1 text-white" />
   *
   * Kept per-item (never hardcoded in the component) so a future contribution
   * can use a different glyph without touching the renderer.
   */
  icon: LucideIcon;

  /** Card title, verbatim. Wrapped in a <span> inside CardTitle. */
  title: string;

  /**
   * Left badge text. Verbatim. All 6 items are currently "Merged", but this
   * stays per-item so a non-merged PR does not lose fidelity.
   * Rendered with <Badge variant="secondary" className={BADGE_SOLID}>.
   */
  status: string;

  /**
   * Right badge text — the GitHub "owner/repo" slug, verbatim.
   * Rendered with <Badge variant="outline" className={BADGE_OUTLINE_QUIET}>.
   */
  repo: string;

  /** Body paragraph, verbatim (JSX multi-line whitespace collapsed to spaces). */
  description: string;

  /** Pull request number. Present on all 6. */
  prNumber: number;

  /** Absolute href of the PR. Verbatim. */
  prUrl: string;

  /**
   * Button label, verbatim ("View PR #130" etc.). Always equals
   * `View PR #${prNumber}` but stored explicitly for absolute copy fidelity.
   */
  ctaLabel: string;

  /**
   * TRUE only for item 6 ("Add Missing Key Prop in MathsPro", PR #205), which
   * is commented out in the original JSX. The renderer MUST filter with
   * `.filter((pr) => !pr.hidden)` so it stays invisible.
   * Absent/undefined on the 5 visible items.
   */
  hidden?: boolean;
}

/** Section chrome copy for the #opensource section. */
export interface OpenSourceSectionMeta {
  /** DOM id used by the nav anchor. */
  id: string;
  /** <h2> text, verbatim. */
  heading: string;
  /** Sub-paragraph, verbatim. */
  subheading: string;
  /** Nav bar label, verbatim. */
  navLabel: string;
  /** Nav bar href, verbatim. */
  navHref: string;
}

export const openSourceSection: OpenSourceSectionMeta = {
  id: "opensource",
  heading: "Open Source Contributions",
  subheading: "Contributing to the developer community",
  navLabel: "Open Source",
  navHref: "#opensource",
};

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "algovisualizer-130",
    icon: Github,
    title: "Fix UI Flicker on Queue Hover",
    status: "Merged",
    repo: "mahaveergurjar/AlgoVisualizer",
    description:
      "Fixed a UI bug where hovering over algorithm cards on the Queue page caused blinking/flickering instead of smooth zoom animation. Switched to CSS-only hover effects for consistent behavior across all algorithm pages.",
    prNumber: 130,
    prUrl: "https://github.com/mahaveergurjar/AlgoVisualizer/pull/130",
    ctaLabel: "View PR #130",
  },
  {
    id: "cli-todo-app-58",
    icon: Github,
    title: "Unify Task Model Across CLIs",
    status: "Merged",
    repo: "flyingSaucer87/cli-todo-app",
    description:
      "Unified the task data model between Node.js and Python CLI versions with priority-based display indexing. Added unit tests, migration logic, and focus mode support for high-priority tasks.",
    prNumber: 58,
    prUrl: "https://github.com/flyingSaucer87/cli-todo-app/pull/58",
    ctaLabel: "View PR #58",
  },
  {
    id: "algovisualizer-250",
    icon: Github,
    title: "Fix ReferenceError in Strings.jsx",
    status: "Merged",
    repo: "mahaveergurjar/AlgoVisualizer",
    description:
      "Resolved a runtime ReferenceError by adding the missing PROBLEM_CATALOG import in Strings.jsx. Ensured all string algorithm problems load correctly without console errors.",
    prNumber: 250,
    prUrl: "https://github.com/mahaveergurjar/AlgoVisualizer/pull/250",
    ctaLabel: "View PR #250",
  },
  {
    id: "algovisualizer-233",
    icon: Github,
    title: "Fix Undefined Check Icon",
    status: "Merged",
    repo: "mahaveergurjar/AlgoVisualizer",
    description:
      "Fixed ReferenceError caused by missing Check import in catalog.js. Replaced with CheckCircle icon and verified the app compiles and runs without errors.",
    prNumber: 233,
    prUrl: "https://github.com/mahaveergurjar/AlgoVisualizer/pull/233",
    ctaLabel: "View PR #233",
  },
  {
    id: "algovisualizer-219",
    icon: Github,
    title: "Fix JSX Build Warning",
    status: "Merged",
    repo: "mahaveergurjar/AlgoVisualizer",
    // The original JSX source spells the quoted character as the HTML entity
    // `&gt;`, which JSX renders as ">". The .ts literal therefore uses ">".
    description:
      "Resolved JSX parsing warning by escaping the '>' character in CountPrimes.js. Ensures clean builds with no console warnings while maintaining correct display.",
    prNumber: 219,
    prUrl: "https://github.com/mahaveergurjar/AlgoVisualizer/pull/219",
    ctaLabel: "View PR #219",
  },
  {
    // COMMENTED OUT in the original JSX ({/* PR 6 ... */}). Preserved as data,
    // filtered out at render time. MUST NOT be displayed.
    id: "algovisualizer-205",
    icon: Github,
    title: "Add Missing Key Prop in MathsPro",
    status: "Merged",
    repo: "mahaveergurjar/AlgoVisualizer",
    description:
      "Fixed React warning by adding unique key prop to dynamically rendered algorithm cards in the MathsPro component. Ensures better rendering performance and eliminates console warnings.",
    prNumber: 205,
    prUrl: "https://github.com/mahaveergurjar/AlgoVisualizer/pull/205",
    ctaLabel: "View PR #205",
    hidden: true,
  },
];

/**
 * The contributions that actually render, in source order, with the
 * commented-out PR #205 removed. Consumers should prefer this over filtering
 * `openSourceContributions` themselves.
 */
export const visibleOpenSourceContributions: OpenSourceContribution[] =
  openSourceContributions.filter((pr) => !pr.hidden);
