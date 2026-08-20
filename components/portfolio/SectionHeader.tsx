import { cn } from "@/lib/utils";
import {
  SECTION_HEADER_WRAP,
  SECTION_SUBTITLE,
  SECTION_TITLE,
  SECTION_TITLE_ACCENT,
  SECTION_TITLE_ON_ART,
  SECTION_SUBTITLE_ON_ART,
} from "@/components/portfolio/tokens";

/**
 * The centered section heading block shared by Academic Journey,
 * Certifications, Open Source Contributions, Featured Projects and About Me.
 *
 * Renders EXACTLY (matching the original page.tsx byte for byte):
 *
 *   <div className="text-center mb-16">
 *     <h2 className="text-4xl md:text-5xl font-bold mb-4">
 *       <span className="text-white">{title}</span>
 *     </h2>
 *     <p className="text-slate-400 text-lg">{subtitle}</p>   // only when subtitle is given
 *   </div>
 *
 * `subtitle` is optional because the About Me heading has no <p> at all — when
 * it is omitted NOTHING is rendered in its place (no empty <p>), which is what
 * the original does.
 *
 * Presentational only: no hooks, no handlers, no "use client".
 */
export interface SectionHeaderProps {
  /** <h2> text, verbatim. */
  title: string;
  /** Optional sub-paragraph. Omit it and the <p> is not rendered at all. */
  subtitle?: string;
  /** Extra classes merged onto the wrapper <div>. */
  className?: string;
  /**
   * Reverse the type for a section sitting on full-bleed artwork. Ink-on-paper
   * headings are unreadable over a photograph.
   */
  onArt?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  className,
  onArt = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(SECTION_HEADER_WRAP, className)}>
      <h2 className={SECTION_TITLE}>
        <span className={onArt ? SECTION_TITLE_ON_ART : SECTION_TITLE_ACCENT}>
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p className={onArt ? SECTION_SUBTITLE_ON_ART : SECTION_SUBTITLE}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
