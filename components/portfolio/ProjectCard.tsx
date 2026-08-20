import { Fragment } from "react";

import { TagList } from "@/components/portfolio/TagList";
import {
  PRJ_BADGE,
  PRJ_CARD,
  PRJ_CARD_ICON,
  PRJ_CARD_TOP,
  PRJ_CTA,
  PRJ_CTA_ICON,
  PRJ_SUBTITLE,
  PRJ_SUMMARY,
  PRJ_TAGS,
  PRJ_TAG,
  PRJ_TITLE,
  BADGE_SOLID,
  BULLET_ITEM,
  BULLET_LIST,
  BULLET_MARK,
  BUTTON_GHOST_FULL_STRONG,
  DIALOG_DESCRIPTION,
  DIALOG_PANEL,
  DIALOG_TITLE,
  ICON_LG_ACCENT,
  ICON_MD,
  ICON_SM,
  ICON_SM_ACCENT,
  LINK_ROW_CENTERED,
  PANEL_TILE,
  ROW_ICON_LG,
  SEPARATOR,
  STACK_SM,
  SUBHEADING_ICON,
  SUBHEADING_INLINE_ICON,
  SUBHEADING_PLAIN,
  TEXT_BODY_LIGHT,
  TEXT_MUTED_SM_ALT,
  TEXT_STRONG,
  VIDEO_FRAME,
  VIDEO_IFRAME,
} from "@/components/portfolio/tokens";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type {
  Project,
  ProjectBulletSection,
  ProjectHeading,
  ProjectVideo,
} from "@/content/projects";

/**
 * One "Featured Projects" entry: the compact <DialogTrigger> card plus the full
 * detail modal it opens.
 *
 * The five projects in the original page.tsx came in two structural flavours and
 * both are reproduced here from a single data shape:
 *
 *   • CBESS / Odysseyelp / Wallet Backend — modal body is `space-y-6 mt-4`, the
 *     video sits under a "Live Demo" h4 inside a `space-y-3` wrapper, the tech
 *     row is headed "Tech Stack", there is no Separator, and the description
 *     paragraph is headed by an "Overview" h4.
 *   • Hacker Introspector / CleverCourse — modal body is `space-y-6`, the video
 *     is a bare frame, an optional award callout may follow it, the tech row is
 *     headed "Technology Stack" and IS followed by a Separator, and the
 *     description paragraph has no heading.
 *
 * Those differences are driven entirely by optional data fields
 * (`demoHeading`, `award`, `overviewHeading`, `showSeparatorAfterTechStack`)
 * and by the per-item `style` block — never by the project id.
 *
 * NO "use client" here on purpose. Dialog/DialogTrigger/DialogContent already
 * carry the directive in components/ui/dialog.tsx, and keeping this file a
 * server component means the lucide icon *values* stored on the project data
 * are rendered here instead of being passed across a server/client boundary
 * (component references are not serialisable).
 */


/** A 16:9 YouTube frame. `className` picks the card vs. modal frame token. */
function ProjectVideoFrame({
  video,
  className,
}: {
  video: ProjectVideo;
  className: string;
}) {
  return (
    <div className={className}>
      <iframe
        className={VIDEO_IFRAME}
        src={video.src}
        title={video.title}
        allow={video.allow}
        allowFullScreen={video.allowFullScreen}
      ></iframe>
    </div>
  );
}

/** An <h4> made of a lucide icon + label ("Live Demo", "Overview"). */
function DetailHeading({
  heading,
  className,
}: {
  heading: ProjectHeading;
  className: string;
}) {
  const Icon = heading.icon;

  return (
    <h4 className={className}>
      <Icon className={ICON_SM_ACCENT} />
      {heading.text}
    </h4>
  );
}

/**
 * A titled bullet block ("Problem Solved", "Key Features", "Architecture",
 * "Key Achievements"). Bullets with a `label` render `<strong>Label:</strong> `
 * followed by the text; the rest are plain text. Hidden bullets are filtered
 * out so commented-out copy stays invisible without being deleted.
 */
function ProjectBulletBlock({ section }: { section: ProjectBulletSection }) {
  const Icon = section.icon;

  return (
    <div>
      <h4 className={SUBHEADING_ICON}>
        <Icon className={ICON_SM_ACCENT} />
        {section.heading}
      </h4>
      <ul className={BULLET_LIST}>
        {section.items
          .filter((item) => !item.hidden)
          .map((item, index) => (
            <li key={`${section.heading}-${index}`} className={BULLET_ITEM}>
              <span className={BULLET_MARK}>•</span>
              <span>
                {item.label ? (
                  <>
                    <strong>{item.label}:</strong>{" "}
                  </>
                ) : null}
                {item.text}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export interface ProjectCardProps {
  /** A single entry from `projects` in "@/content/projects". */
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { card, detail, style } = project;

  const BadgeIcon = card.badgeIcon;
  const CtaIcon = card.ctaIcon;
  const AwardIcon = detail.award?.icon;
  const LinkIcon = detail.cta.icon;
  const LinkTrailingIcon = detail.cta.trailingIcon;

  // The two trigger-card surfaces differ only in their hover tint, and the two
  // clamped descriptions only in their text colour — pick the matching token.

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={PRJ_CARD}>
          <span className={PRJ_CARD_TOP}>
            <span className={PRJ_BADGE}>{card.badge}</span>
            <BadgeIcon className={PRJ_CARD_ICON} aria-hidden="true" />
          </span>
          <span className={PRJ_TITLE}>{card.title}</span>
          <span className={PRJ_SUBTITLE}>{card.description}</span>
          <span className={PRJ_SUMMARY}>{card.summary}</span>
          <span className={PRJ_TAGS}>
            {card.tech.map((tech) => (
              <span key={tech} className={PRJ_TAG}>
                {tech}
              </span>
            ))}
          </span>
          <span className={PRJ_CTA}>
            {card.ctaLabel}
            <CtaIcon className={PRJ_CTA_ICON} aria-hidden="true" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className={DIALOG_PANEL}>
        <DialogHeader>
          <DialogTitle className={DIALOG_TITLE}>
            {detail.title}
            <Badge className={BADGE_SOLID}>{detail.badge}</Badge>
          </DialogTitle>
          <DialogDescription className={DIALOG_DESCRIPTION}>
            {detail.description}
          </DialogDescription>
        </DialogHeader>
        <div className={style.detailBodyClass}>
          {detail.demoHeading ? (
            <div className={STACK_SM}>
              <DetailHeading
                heading={detail.demoHeading}
                className={SUBHEADING_INLINE_ICON}
              />
              <ProjectVideoFrame video={detail.video} className={VIDEO_FRAME} />
            </div>
          ) : (
            <ProjectVideoFrame video={detail.video} className={VIDEO_FRAME} />
          )}

          {detail.award && AwardIcon ? (
            <div className={PANEL_TILE}>
              <div className={ROW_ICON_LG}>
                <AwardIcon className={ICON_LG_ACCENT} />
                <div>
                  <p className={TEXT_STRONG}>{detail.award.title}</p>
                  <p className={TEXT_MUTED_SM_ALT}>{detail.award.subtitle}</p>
                </div>
              </div>
            </div>
          ) : null}

          <div>
            <h4 className={SUBHEADING_PLAIN}>{detail.techHeading}</h4>
            <TagList tags={detail.techStack} />
          </div>

          {detail.showSeparatorAfterTechStack ? (
            <Separator className={SEPARATOR} />
          ) : null}

          <div>
            {detail.overviewHeading ? (
              <DetailHeading
                heading={detail.overviewHeading}
                className={SUBHEADING_ICON}
              />
            ) : null}
            <p className={TEXT_BODY_LIGHT}>
              {detail.overview.map((segment, index) =>
                segment.bold ? (
                  <strong key={index}>{segment.text}</strong>
                ) : (
                  <Fragment key={index}>{segment.text}</Fragment>
                )
              )}
            </p>
          </div>

          {detail.sections
            .filter((section) => !section.hidden)
            .map((section) => (
              <ProjectBulletBlock key={section.heading} section={section} />
            ))}

          <Button className={BUTTON_GHOST_FULL_STRONG} asChild>
            <a
              href={detail.cta.href}
              target={detail.cta.target}
              rel={detail.cta.rel}
              className={LINK_ROW_CENTERED}
            >
              <LinkIcon className={ICON_MD} />
              {detail.cta.label}
              <LinkTrailingIcon className={ICON_SM} />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectCard;
