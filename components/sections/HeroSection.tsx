import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/hero";
import { getBuildingInPublicDay } from "@/lib/youtube";
import {
  HERO_ACTIONS,
  HERO_ART,
  HERO_ART_FALLBACK,
  HERO_BACKDROP,
  HERO_BUTTON_GHOST,
  HERO_BUTTON_PRIMARY,
  HERO_DAY_BADGE,
  HERO_DAY_NUMBER,
  HERO_DUSK,
  HERO_EYEBROW,
  HERO_FADE,
  HERO_HEADLINE,
  HERO_HEADLINE_LINE_ACCENT,
  HERO_SCRIM,
  HERO_SHELL,
  HERO_STAND,
  HERO_STAT_LABEL,
  HERO_STAT_ROW,
  HERO_STAT_VALUE,
  HERO_TEXT_COL,
  ICON_XS,
  SECTION_CONTAINER,
} from "@/components/portfolio/tokens";

/**
 * The hero — full-bleed artwork with the copy reversed out over it.
 *
 * WHY CSS MOTION AND NOT A LOOPING VIDEO: the ask was for the background to
 * feel alive the way a looped clip does on a polished landing page. A video
 * would cost megabytes above the fold, compete with the LCP, and autoplay
 * unreliably on iOS in low-power mode. A 40-second drift on a still image
 * reads the same at a fraction of the cost. See animations.css, which also
 * disables it under prefers-reduced-motion.
 *
 * ASYNC SERVER COMPONENT: the day counter comes from the YouTube feed rather
 * than a hardcoded number, so it increments itself on publish and shares the
 * page's ISR window. When the feed is unreachable the badge is omitted — a
 * stale counter is worse than none.
 *
 * The artwork is a plain <img>, not next/image: it is a single above-the-fold
 * asset that should be encoded once as WebP/AVIF at the right size rather than
 * round-tripped through the optimizer on every deploy. It carries fetchPriority
 * high because it IS the LCP element.
 */
export async function HeroSection() {
  const { eyebrow, headline, standfirst, stats, actions, background } =
    heroContent;
  const day = await getBuildingInPublicDay();

  return (
    <section className={HERO_SHELL}>
      <div className={HERO_BACKDROP} aria-hidden={background.src ? undefined : "true"}>
        {background.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={background.src}
            srcSet={background.srcSet}
            sizes={background.sizes}
            alt={background.alt}
            className={`${HERO_ART} hero-kenburns`}
            style={{ objectPosition: background.focal }}
            fetchPriority="high"
            decoding="async"
          />
        ) : (
          <div className={`${HERO_ART_FALLBACK} hero-kenburns`} />
        )}
        <div className={`${HERO_DUSK} hero-dusk`} />
        <div className={HERO_SCRIM} />
        <div className={HERO_FADE} />
      </div>

      <div className={`${SECTION_CONTAINER} w-full`}>
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
                className={index === 0 ? HERO_BUTTON_PRIMARY : HERO_BUTTON_GHOST}
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
      </div>
    </section>
  );
}

export default HeroSection;
