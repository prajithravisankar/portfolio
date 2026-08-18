import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { OpenSourceContribution } from "@/content/opensource";
import {
  BADGE_OUTLINE_QUIET,
  BADGE_SOLID,
  BUTTON_OUTLINE_FULL,
  CARD_SURFACE_LIFT,
  CARD_TITLE_LG_ICON_TOP,
  ICON_MD_ACCENT_OFFSET,
  ICON_XS,
  LINK_ROW_CENTERED,
  REL_EXTERNAL,
  ROW_BADGES_OFFSET,
  ROW_BETWEEN_TOP,
  STACK_SM,
  TEXT_BODY_MUTED,
} from "@/components/portfolio/tokens";

/**
 * One Open Source Contribution card.
 *
 * Presentational server component — no hooks, no handlers, no "use client".
 *
 * DOM PARITY NOTE: the `<div className={ROW_BETWEEN_TOP}>` inside CardHeader
 * wraps the CardTitle with NO sibling element. It looks redundant and is easy
 * to "clean up", but removing it changes the flex layout of the title row.
 * It is deliberate — keep it.
 */
export interface PullRequestCardProps {
  /** The contribution to render. Callers filter `hidden` items out first. */
  contribution: OpenSourceContribution;
  /** Extra classes merged onto the <Card>. */
  className?: string;
}

export function PullRequestCard({
  contribution,
  className,
}: PullRequestCardProps) {
  const {
    icon: Icon,
    title,
    status,
    repo,
    description,
    prUrl,
    ctaLabel,
  } = contribution;

  return (
    <Card className={cn(CARD_SURFACE_LIFT, className)}>
      <CardHeader>
        <div className={ROW_BETWEEN_TOP}>
          <CardTitle className={CARD_TITLE_LG_ICON_TOP}>
            <Icon className={ICON_MD_ACCENT_OFFSET} />
            <span>{title}</span>
          </CardTitle>
        </div>
        <div className={ROW_BADGES_OFFSET}>
          <Badge variant="secondary" className={BADGE_SOLID}>
            {status}
          </Badge>
          <Badge variant="outline" className={BADGE_OUTLINE_QUIET}>
            {repo}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className={STACK_SM}>
        <p className={TEXT_BODY_MUTED}>{description}</p>
        <Button
          variant="outline"
          size="sm"
          className={BUTTON_OUTLINE_FULL}
          asChild
        >
          <a
            href={prUrl}
            target="_blank"
            rel={REL_EXTERNAL}
            className={LINK_ROW_CENTERED}
          >
            {ctaLabel}
            <ExternalLink className={ICON_XS} />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default PullRequestCard;
