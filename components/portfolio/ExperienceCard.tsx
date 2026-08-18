import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ExperienceRole } from "@/content/experience";
import {
  BADGE_OUTLINE_QUIET,
  BADGE_OUTLINE_SM,
  BADGE_SOLID,
  BULLET_ITEM,
  BULLET_LIST,
  BULLET_MARK,
  CARD_SURFACE,
  EXPERIENCE_HEADER_ROW,
  EXPERIENCE_META_ROW,
  EXPERIENCE_ROLE_TITLE,
  ICON_CIRCLE,
  ICON_MD_ACCENT,
  ROW_ICON_LG,
  STACK_MD,
  TAG_ROW,
} from "@/components/portfolio/tokens";

/**
 * One role in the Experience timeline: a glass card whose header carries a
 * circled glyph, the job title, the employer (plus optional program) and the
 * date range, and whose body is a tech-stack badge row above the achievement
 * bullets.
 *
 * Purely presentational — no hooks, no handlers — so it stays a server
 * component (no "use client").
 *
 * Mirrors the existing card vocabulary deliberately: `CARD_SURFACE` and
 * `ICON_CIRCLE` are the same tokens the Academic Journey timeline uses, so the
 * two chronological sections read as one system and re-theme together.
 */
export interface ExperienceCardProps {
  role: ExperienceRole;
  /** Extra classes merged onto the <Card>. */
  className?: string;
}

export function ExperienceCard({ role, className }: ExperienceCardProps) {
  const {
    icon: Icon,
    role: title,
    organization,
    program,
    dateRange,
    techStack,
    highlights,
  } = role;

  return (
    <Card className={cn(CARD_SURFACE, className)}>
      <CardHeader>
        <div className={EXPERIENCE_HEADER_ROW}>
          <div className={ROW_ICON_LG}>
            <div className={ICON_CIRCLE}>
              <Icon className={ICON_MD_ACCENT} />
            </div>
            <div>
              <CardTitle className={EXPERIENCE_ROLE_TITLE}>{title}</CardTitle>
              <div className={EXPERIENCE_META_ROW}>
                <Badge variant="secondary" className={BADGE_SOLID}>
                  {organization}
                </Badge>
                {program ? (
                  <Badge variant="outline" className={BADGE_OUTLINE_QUIET}>
                    {program}
                  </Badge>
                ) : null}
              </div>
            </div>
          </div>
          <Badge variant="secondary" className={BADGE_SOLID}>
            {dateRange}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className={STACK_MD}>
        <div className={TAG_ROW}>
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline" className={BADGE_OUTLINE_SM}>
              {tech}
            </Badge>
          ))}
        </div>

        <ul className={BULLET_LIST}>
          {highlights.map((highlight) => (
            <li key={highlight} className={BULLET_ITEM}>
              <span className={BULLET_MARK} aria-hidden="true">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
