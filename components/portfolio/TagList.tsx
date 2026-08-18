import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  BADGE_OUTLINE,
  BADGE_OUTLINE_SM,
  TAG_ROW,
} from "@/components/portfolio/tokens";

/**
 * A wrapping row of outline Badge pills — the tech-stack / tag row used by
 * every project card and every project detail modal.
 *
 * Renders EXACTLY (matching the original page.tsx byte for byte):
 *
 *   <div className="flex flex-wrap gap-2">          // + className passthrough
 *     <Badge variant="outline" className="border-white/10 text-white/80 bg-transparent">
 *       {tag}
 *     </Badge>
 *     ...
 *   </div>
 *
 * `size="sm"` swaps the badge class for the compact-card variant, which is the
 * same string plus `text-xs`:
 *
 *   className="border-white/10 text-white/80 bg-transparent text-xs"
 *
 * Every tag is rendered — the component never slices, dedupes, sorts or
 * truncates the array, and order is preserved exactly as passed.
 *
 * Presentational only: no hooks, no handlers, no "use client".
 */
export type TagListSize = "sm" | "md";

export interface TagListProps {
  /** Badge labels, verbatim and in order. All of them are rendered. */
  tags: string[];
  /**
   * "md" (default) -> BADGE_OUTLINE, used in detail modals.
   * "sm"           -> BADGE_OUTLINE_SM (adds `text-xs`), used on compact cards.
   */
  size?: TagListSize;
  /** Extra classes merged onto the wrapper row (e.g. "mb-4" for card rows). */
  className?: string;
  /**
   * REPLACES the badge class entirely (it is not merged after the default).
   * Use this when a row needs a different pill treatment; leave it undefined
   * for the standard outline pill.
   */
  badgeClassName?: string;
}

export function TagList({
  tags,
  size = "md",
  className,
  badgeClassName,
}: TagListProps) {
  const badgeClass =
    badgeClassName ?? (size === "sm" ? BADGE_OUTLINE_SM : BADGE_OUTLINE);

  return (
    <div className={cn(TAG_ROW, className)}>
      {tags.map((tag, index) => (
        <Badge key={`${tag}-${index}`} variant="outline" className={badgeClass}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export default TagList;
