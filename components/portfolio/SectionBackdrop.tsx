import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { SectionArt } from "@/content/section-art";
import {
  SECTION_ART_FADE_BOTTOM,
  SECTION_ART_FADE_TOP,
  SECTION_ART_IMAGE,
  SECTION_ART_LAYER,
  SECTION_ART_LAYER_FIXED,
  SECTION_ART_SCRIM,
  SECTION_ART_SHELL,
} from "@/components/portfolio/tokens";

/**
 * Wraps a section in full-bleed artwork.
 *
 * Reusable on purpose: the plan is one illustration per section, so the scrim,
 * the fades and the drift are solved once here rather than re-tuned six times.
 * Adding the next section is an entry in content/section-art.ts plus this
 * wrapper — see that file's header.
 *
 * The artwork is decorative: it carries no information the section's own
 * heading and content do not already state, so it is aria-hidden with an empty
 * alt. Announcing "illustration of mountains at sunset" before a list of
 * videos is noise, not access.
 *
 * The image is lazy and low priority — unlike the hero, these are below the
 * fold and must not compete with the LCP.
 */
export interface SectionBackdropProps {
  art: SectionArt;
  children: ReactNode;
  /** Extra classes on the wrapper. */
  className?: string;
  /** Ambient drift, as on the hero. Off by default to avoid a page that crawls. */
  animate?: boolean;
  /**
   * Fade in from / out to the paper ground. Turn a side off when this section
   * butts directly against another dark section — two artworks separated by a
   * paper fade produce a bright band that reads as a rendering fault.
   */
  fadeTop?: boolean;
  fadeBottom?: boolean;
  /**
   * Pin the artwork to the viewport instead of the section box.
   *
   * For a long page (the /videos archive runs to 15 cards) an absolutely
   * positioned `object-cover` image is stretched over the full document
   * height, which crops the illustration to an unrecognisable slice. Fixed
   * keeps it at true viewport proportions and the content scrolls over it.
   *
   * Note this also drops `isolate` from the wrapper: a fixed child is
   * positioned against the nearest transformed/contained ancestor, so an
   * isolation context here would trap it.
   */
  fixed?: boolean;
  /**
   * Override the darkening layer. Centre-weighted artwork wants the edge
   * vignette (SECTION_ART_SCRIM_EDGES) rather than the default top-to-bottom
   * wash, which would dim the very thing worth looking at.
   */
  scrimClassName?: string;
  /** Extra layer painted under the scrim. Used to tame very bright artwork. */
  underScrimClassName?: string;
  /**
   * Override the edge fades. A light-treated section fades to paper from
   * under a paper wash, so it needs shorter, plainer gradients than the dark
   * plates do.
   */
  fadeTopClassName?: string;
  fadeBottomClassName?: string;
  /**
   * Paint the artwork as a viewport-scaled background instead of an <img>.
   *
   * Use on tall sections. An object-cover image is scaled to the SECTION's
   * height, so a long section crops the artwork severely; this sizes it to the
   * viewport, keeping the framing close to the original and holding it still
   * as the content scrolls. Trade-off: no srcset, so it serves one width.
   */
  parallax?: boolean;
  /** Width variant used in parallax mode. Defaults to the 1400w candidate. */
  parallaxSrc?: string;
  /**
   * `background-size` in parallax mode. Defaults to `cover`.
   *
   * `cover` fills the viewport and crops whichever axis overflows — for a wide
   * illustration in a ~16:10 viewport that is roughly a quarter of the width.
   * A height under 100% (e.g. "auto 92%") scales the artwork down so more of
   * it shows, at the cost of a thin band above and below. That band falls
   * under the section wash, so keep the value close to 100%.
   */
  parallaxSize?: string;
}

export function SectionBackdrop({
  art,
  children,
  className,
  animate = false,
  fadeTop = true,
  fadeBottom = true,
  fixed = false,
  scrimClassName,
  underScrimClassName,
  fadeTopClassName,
  fadeBottomClassName,
  parallax = false,
  parallaxSrc,
  parallaxSize,
}: SectionBackdropProps) {
  return (
    <div className={cn(fixed ? "relative" : SECTION_ART_SHELL, className)}>
      <div
        className={fixed ? SECTION_ART_LAYER_FIXED : SECTION_ART_LAYER}
        aria-hidden="true"
      >
        {parallax ? (
          <div
            className="bg-parallax absolute inset-0"
            style={
              {
                backgroundImage: `url(${parallaxSrc ?? art.src})`,
                ...(parallaxSize ? { backgroundSize: parallaxSize } : {}),
                "--bg-pos": art.focal,
              } as CSSProperties
            }
          />
        ) : (
          <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={art.src}
          srcSet={art.srcSet}
          sizes={art.sizes}
          alt=""
          className={cn(SECTION_ART_IMAGE, animate && "hero-kenburns")}
          style={{ objectPosition: art.focal }}
          loading={fixed ? "eager" : "lazy"}
          decoding="async"
        />
          </>
        )}
        {underScrimClassName ? <div className={underScrimClassName} /> : null}
        <div className={scrimClassName ?? SECTION_ART_SCRIM} />
        {fadeTop ? (
          <div className={fadeTopClassName ?? SECTION_ART_FADE_TOP} />
        ) : null}
        {fadeBottom ? (
          <div className={fadeBottomClassName ?? SECTION_ART_FADE_BOTTOM} />
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default SectionBackdrop;
