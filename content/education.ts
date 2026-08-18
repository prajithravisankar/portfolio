/**
 * ============================================================================
 * ACADEMIC JOURNEY — CONTENT + THEME TOKENS
 * ============================================================================
 *
 * Source of truth: the original monolithic `app/page.tsx`, "Education Timeline
 * - Courses & Grades" section. Every string below is VERBATIM from that file,
 * including abbreviated course titles such as "Tech Soc Indi People Can" — do
 * not expand, re-capitalise or "fix" any of them.
 *
 * This file is plain data (no JSX), so lucide icon components are imported as
 * VALUES and stored directly on the data objects.
 *
 * TO ADD A SEMESTER: append to `education.semesters` (newest first).
 * TO ADD A COURSE:   append to that semester's `courses` array.
 * TO HIDE SOMETHING WITHOUT DELETING IT: set `hidden: true` — the renderer
 * filters those out, so the content survives in source but never displays.
 * ============================================================================
 */

import { Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  BADGE_MUTED,
  BADGE_SOLID,
  CARD_SURFACE,
  GRID_TILES_2,
  ICON_CIRCLE,
  ICON_LG_ACCENT,
  PANEL_TILE,
  ROW_BETWEEN_TOP_TIGHT,
  ROW_ICON_LG,
  SECTION_CONTAINER,
  SECTION_HEADER_WRAP,
  SECTION_SHELL,
  SECTION_SUBTITLE,
  SECTION_TITLE,
  SECTION_TITLE_ACCENT,
  STACK_LG,
  TEXT_FAINT_XS,
  TEXT_MUTED_SM,
  TEXT_STRONG,
} from "@/components/portfolio/tokens";

/* ---------------------------------------------------------------------------
 * TYPES
 * ------------------------------------------------------------------------- */

/**
 * One course tile. Rendered as:
 *
 *   <div className={EDU_TOKENS.courseCard}>
 *     <div className={EDU_TOKENS.courseHeadRow}>
 *       <div>
 *         <p className={EDU_TOKENS.courseName}>{name}</p>
 *         <p className={EDU_TOKENS.courseCode}>{code}</p>
 *       </div>
 *       <Badge className={gradeBadgeClassName ?? EDU_TOKENS.gradeBadge}>{grade}</Badge>
 *     </div>
 *     <p className={EDU_TOKENS.courseCredits}>{credits} Credits</p>
 *   </div>
 */
export interface Course {
  /** Stable React key, e.g. "comp-2430-wa". Not rendered. */
  id: string;
  /** Course title, VERBATIM. e.g. "Tech Soc Indi People Can" — never "fix" this. */
  name: string;
  /** Course code shown under the name, e.g. "COMP-2430-WA". */
  code: string;
  /** Numeric grade rendered as the Badge's only child, e.g. 74. */
  grade: number;
  /** Credit value string; rendered as `{credits} Credits` -> "0.50 Credits". */
  credits: string;
  /**
   * VARIANCE — present on exactly ONE of the 8 courses.
   * "Mobile Computing Technology" (COMP-2430-WA, grade 74) uses BADGE_MUTED
   * ("bg-slate-700 text-slate-300"), which deliberately drops the border
   * utility. The other 7 omit this field and fall back to
   * EDU_TOKENS.gradeBadge. It is a full REPLACEMENT, never merged, and it is
   * NOT derived from the grade value (80 and 82 use the default badge).
   */
  gradeBadgeClassName?: string;
  /** Preserved-but-not-displayed entries; filtered at render. None true today. */
  hidden?: boolean;
}

/**
 * One semester Card. Rendered as:
 *
 *   <Card className={EDU_TOKENS.glassCard}>
 *     <CardHeader>
 *       <div className={EDU_TOKENS.headerRow}>
 *         <div className={EDU_TOKENS.iconCircle}><Icon className={EDU_TOKENS.iconGlyph} /></div>
 *         <div>
 *           <CardTitle className={EDU_TOKENS.headingAccent}>{term}</CardTitle>
 *           <CardDescription>{dateRange}</CardDescription>   // no className in source
 *         </div>
 *       </div>
 *     </CardHeader>
 *     <CardContent>
 *       <div className={EDU_TOKENS.courseGrid}>{courses.map(...)}</div>
 *     </CardContent>
 *   </Card>
 */
export interface Semester {
  /** Stable React key, e.g. "winter-2025". Not rendered. */
  id: string;
  /** CardTitle text, e.g. "Winter 2025". */
  term: string;
  /** CardDescription text, e.g. "January 6 - April 4, 2025" (spaced hyphen, not en dash). */
  dateRange: string;
  /** Circle-avatar icon component value. Calendar for BOTH semesters. */
  icon: LucideIcon;
  /** Exactly 4 courses per semester in the source; keep order as authored. */
  courses: Course[];
  /** Preserved-but-not-displayed semesters; filtered at render. None true today. */
  hidden?: boolean;
}

/** The whole Academic Journey section. */
export interface EducationSection {
  /** DOM id — MUST stay "education" (the nav anchor points at href="#education"). */
  id: string;
  /** <h2><span className="text-white">…</span></h2> text. */
  title: string;
  /** Sub-heading <p> text. */
  subtitle: string;
  /** Ordered newest-first: Winter 2025 then Fall 2024. */
  semesters: Semester[];
}

/* ---------------------------------------------------------------------------
 * CONTENT
 * ------------------------------------------------------------------------- */

export const education: EducationSection = {
  id: "education",
  title: "Academic Journey",
  subtitle: "My courses and achievements",
  semesters: [
    {
      id: "winter-2025",
      term: "Winter 2025",
      dateRange: "January 6 - April 4, 2025",
      icon: Calendar,
      courses: [
        {
          id: "comp-2430-wa",
          name: "Mobile Computing Technology",
          code: "COMP-2430-WA",
          grade: 74,
          credits: "0.50",
          // The single one-off badge in the whole page. Keep as-is.
          gradeBadgeClassName: BADGE_MUTED,
        },
        {
          id: "comp-4311-wde",
          name: "Big Data",
          code: "COMP-4311-WDE",
          grade: 91,
          credits: "0.50",
        },
        {
          id: "comp-4476-wa",
          name: "Cryptography Network Security",
          code: "COMP-4476-WA",
          grade: 92,
          credits: "0.50",
        },
        {
          id: "soci-2755-wdf",
          // VERBATIM — the source abbreviates this title. Do not expand it.
          name: "Tech Soc Indi People Can",
          code: "SOCI-2755-WDF",
          grade: 85,
          credits: "0.50",
        },
      ],
    },
    {
      id: "fall-2024",
      term: "Fall 2024",
      dateRange: "September 2 - December 2, 2024",
      icon: Calendar,
      courses: [
        {
          id: "comp-3415-fde",
          name: "Software Engineering",
          code: "COMP-3415-FDE",
          grade: 82,
          credits: "0.50",
        },
        {
          id: "comp-3473-fa",
          name: "Operating Systems",
          code: "COMP-3473-FA",
          grade: 80,
          credits: "0.50",
        },
        {
          id: "comp-4312-fde",
          name: "Cloud Computing",
          code: "COMP-4312-FDE",
          grade: 94,
          credits: "0.50",
        },
        {
          id: "comp-4411-fa",
          name: "Programming Languages",
          code: "COMP-4411-FA",
          grade: 87,
          credits: "0.50",
        },
      ],
    },
  ],
};

/* ---------------------------------------------------------------------------
 * THEME TOKENS
 *
 * Every value is a REFERENCE to the shared palette in
 * `@/components/portfolio/tokens` — nothing here hardcodes a class string.
 * This map exists so the Academic Journey section can be re-skinned by
 * repointing a role at a different shared token, without touching JSX.
 * ------------------------------------------------------------------------- */

export interface EducationTokens {
  /** "py-20 px-6" — <section> padding. */
  section: string;
  /** "max-w-7xl mx-auto" — inner container. */
  container: string;
  /** "text-center mb-16" — heading block (owned by <SectionHeader />). */
  headingBlock: string;
  /** "text-4xl md:text-5xl font-bold mb-4" — h2 (owned by <SectionHeader />). */
  headingH2: string;
  /** "text-white" — the h2 <span> and both CardTitles. */
  headingAccent: string;
  /** "text-slate-400 text-lg" — subtitle (owned by <SectionHeader />). */
  headingSubtitle: string;
  /** "space-y-8" — stack of semester cards. */
  semesterStack: string;
  /** Glass card surface for a semester Card. */
  glassCard: string;
  /** "flex items-center gap-3" — CardHeader row. */
  headerRow: string;
  /** "w-12 h-12 rounded-full bg-white/10 flex items-center justify-center". */
  iconCircle: string;
  /** "w-6 h-6 text-white" — icon glyph size/colour. */
  iconGlyph: string;
  /** "grid grid-cols-1 md:grid-cols-2 gap-4" — course grid. */
  courseGrid: string;
  /** "p-4 rounded-lg bg-white/5 border border-white/10" — course tile. */
  courseCard: string;
  /** "flex items-start justify-between mb-2" — course tile header row. */
  courseHeadRow: string;
  /** "text-white font-semibold" — course title. */
  courseName: string;
  /** "text-sm text-slate-400" — course code. */
  courseCode: string;
  /** "text-xs text-slate-500" — credits line. */
  courseCredits: string;
  /** DEFAULT grade badge (7 of 8 courses). */
  gradeBadge: string;
  /** The one-off de-emphasised grade badge, kept here for reference. */
  gradeBadgeMuted: string;
}

export const EDU_TOKENS: EducationTokens = {
  section: SECTION_SHELL,
  container: SECTION_CONTAINER,
  headingBlock: SECTION_HEADER_WRAP,
  headingH2: SECTION_TITLE,
  headingAccent: SECTION_TITLE_ACCENT,
  headingSubtitle: SECTION_SUBTITLE,
  semesterStack: STACK_LG,
  glassCard: CARD_SURFACE,
  headerRow: ROW_ICON_LG,
  iconCircle: ICON_CIRCLE,
  iconGlyph: ICON_LG_ACCENT,
  courseGrid: GRID_TILES_2,
  courseCard: PANEL_TILE,
  courseHeadRow: ROW_BETWEEN_TOP_TIGHT,
  courseName: TEXT_STRONG,
  courseCode: TEXT_MUTED_SM,
  courseCredits: TEXT_FAINT_XS,
  gradeBadge: BADGE_SOLID,
  gradeBadgeMuted: BADGE_MUTED,
};

export default education;
