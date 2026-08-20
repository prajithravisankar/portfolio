import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { getBuildingInPublicDay } from "@/lib/youtube";
import {
  HERO_ACTIONS,
  HERO_DAY_BADGE,
  HERO_DAY_NUMBER,
  HERO_EYEBROW,
  HERO_GRID,
  HERO_HEADLINE,
  HERO_HEADLINE_LINE_ACCENT,
  HERO_IMAGE,
  HERO_IMAGE_FRAME,
  HERO_IMAGE_PLACEHOLDER,
  HERO_SHELL,
  HERO_STAND,
  HERO_STAT_LABEL,
  HERO_STAT_ROW,
  HERO_STAT_VALUE,
  HERO_TEXT_COL,
  BUTTON_OUTLINE,
  BUTTON_SOLID,
  ICON_XS,
  SECTION_CONTAINER,
} from "@/components/portfolio/tokens";

/**
 * The hero — the section the previous theme did not have at all.
 *
 * The old site opened on a centred "About Me" heading, which is why it never
 * produced a first impression: a section label is not a claim. This leads with
 * a claim, three checkable numbers, and a live day counter.
 *
 * ASYNC SERVER COMPONENT: the day counter is derived from the YouTube feed
 * rather than hardcoded, so it increments itself when a video is published.
 * It shares the same ISR window as the rest of the video data. When the feed
 * is unreachable `getBuildingInPublicDay` returns null and the badge is simply
 * omitted — a stale or zeroed counter would be worse than none.
 */
export async function HeroSection() {
  const { eyebrow, headline, standfirst, stats, actions, image } = heroContent;
  const day = await getBuildingInPublicDay();

  return (
    <section className={HERO_SHELL}>
      <div className={SECTION_CONTAINER}>
        <div className={HERO_GRID}>
          <div className={HERO_TEXT_COL}>
            <p className={HERO_EYEBROW}>{eyebrow}</p>

            <h1 className={HERO_HEADLINE}>
              {headline.map((line, index) => (
                <span
                  key={line}
                  className={
                    index === headline.length - 1
                      ? HERO_HEADLINE_LINE_ACCENT
                      : undefined
                  }
                >
                  {line}
                  {index < headline.length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>

            {day === null ? null : (
              <p className={HERO_DAY_BADGE}>
                <span className={HERO_DAY_NUMBER}>Day {day}</span>
                <span>of shipping in public</span>
              </p>
            )}

            <p className={HERO_STAND}>{standfirst}</p>

            <dl className={HERO_STAT_ROW}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className={HERO_STAT_VALUE}>{stat.value}</dt>
                  <dd className={HERO_STAT_LABEL}>{stat.label}</dd>
                </div>
              ))}
            </dl>

            <div className={HERO_ACTIONS}>
              {actions.map((action, index) => (
                <Button
                  key={action.href}
                  className={index === 0 ? BUTTON_SOLID : BUTTON_OUTLINE}
                  variant={index === 0 ? "default" : "outline"}
                  asChild
                >
                  <Link href={action.href}>
                    {action.label}
                    {index === 0 ? <ArrowDown className={ICON_XS} /> : null}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className={HERO_IMAGE_FRAME}>
            {image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image.src} alt={image.alt} className={HERO_IMAGE} />
            ) : (
              <div className={HERO_IMAGE_PLACEHOLDER}>
                {image.placeholderNote}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
