"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ICON_MD,
  NAV_BAR,
  NAV_BAR_OVER_HERO,
  NAV_BAR_SCROLLED,
  NAV_BRAND,
  NAV_BRAND_OVER_HERO,
  NAV_CTA_BUTTON,
  NAV_CTA_OVER_HERO,
  NAV_FEATURE,
  NAV_FEATURE_DOT,
  NAV_INNER,
  NAV_LINK,
  NAV_LINK_OVER_HERO,
  NAV_LINK_ROW,
  NAV_MOBILE_LINK,
  NAV_MOBILE_PANEL,
  NAV_MOBILE_TOGGLE,
  NAV_ROW,
} from "@/components/portfolio/tokens";
import { navContent, type NavContent } from "@/content/navigation";

/**
 * The fixed top navigation bar.
 *
 * DARK FROSTED GLASS. Every section behind it is now an illustration, which is
 * the one situation the effect is actually for — there is real content to blur
 * rather than flat paper to fake depth over.
 *
 * Only the plate changes with scroll: a barely-there tint at the top of the
 * hero so the bar does not pop into existence on the first scrolled pixel,
 * then full blur, saturation, an inset top highlight and a soft drop shadow
 * once content is passing beneath it.
 *
 * The type stays cream in BOTH states. An earlier version flipped links to ink
 * once scrolled, which worked when the body was paper — but the page now
 * alternates dark and light illustrated bands, and ink links would vanish the
 * moment the bar crossed a dark one. Dark glass with cream type reads on all
 * of them.
 *
 * The mobile panel forces the solid plate regardless of scroll position, since
 * stacked links need a backdrop of their own.
 *
 * PATH-AWARE ANCHORS. The section links are bare hashes so they scroll
 * instantly on the homepage. From a subpage a bare "#about" points at nothing,
 * so `anchor()` prefixes it to "/#about", which routes home and scrolls. That
 * lets the same nav sit on /mlh-swe-fellowship-submission without a second
 * copy of the content.
 *
 * The original site had no mobile menu at all — below `md` the link row was
 * simply hidden, so on a phone there was no navigation whatsoever. With seven
 * anchors the desktop row also stopped fitting at `md`, hence the `lg`
 * breakpoint plus a real disclosure menu below it.
 */
export interface SiteNavProps {
  /** Content override. Defaults to the real site navigation. */
  content?: NavContent;
  /**
   * Whether the page under the nav starts with the dark hero artwork. Pages
   * without it (e.g. /videos) get the solid treatment immediately.
   */
  overHero?: boolean;
}

export function SiteNav({
  content = navContent,
  overHero = true,
}: SiteNavProps = {}) {
  const { brand, links, feature, cta } = content;
  const pathname = usePathname();
  const onHome = pathname === "/";
  /**
   * Section anchors are bare hashes so they scroll instantly on the homepage.
   * From a subpage a bare "#about" points at nothing, so it is prefixed to
   * "/#about" — which routes home AND scrolls. Same data, correct behaviour on
   * both, without duplicating the nav content.
   */
  const anchor = (href: string) => (onHome ? href : `/${href}`);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    // Flip once the hero is mostly behind us. Passive listener: this must never
    // block scrolling on a phone.
    const onScroll = () => setIsScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  // Only the PLATE changes with scroll: a barely-there tint over the hero,
  // full frosted glass once content is passing under it. The type is cream in
  // both states — the bar is dark glass either way, and flipping links to ink
  // would break the moment it crossed one of the light sections.
  const solid = isScrolled || isOpen || !overHero;

  const visibleLinks = links.filter((link) => !link.hidden);
  const close = () => setIsOpen(false);

  return (
    <nav
      className={cn(NAV_BAR, solid ? NAV_BAR_SCROLLED : NAV_BAR_OVER_HERO)}
    >
      <div className={NAV_INNER}>
        <div className={NAV_ROW}>
          <div className={cn(NAV_BRAND, NAV_BRAND_OVER_HERO)}>
            {brand}
          </div>

          {/* Desktop */}
          <div className={NAV_LINK_ROW}>
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={anchor(link.href)}
                className={cn(NAV_LINK, NAV_LINK_OVER_HERO)}
              >
                {link.label}
              </a>
            ))}
            {feature && !feature.hidden ? (
              <Link href={feature.href} className={NAV_FEATURE}>
                <span className={NAV_FEATURE_DOT} aria-hidden="true" />
                {feature.label}
              </Link>
            ) : null}

            {cta.hidden ? null : (
              <Button
                size={cta.size}
                className={cn(NAV_CTA_BUTTON, NAV_CTA_OVER_HERO)}
              >
                <a href={anchor(cta.href)}>{cta.label}</a>
              </Button>
            )}
          </div>

          {/* Mobile / tablet */}
          <button
            type="button"
            className={cn(NAV_MOBILE_TOGGLE, NAV_LINK_OVER_HERO)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-nav-mobile"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className={ICON_MD} /> : <Menu className={ICON_MD} />}
          </button>
        </div>

        {isOpen ? (
          <div id="site-nav-mobile" className={NAV_MOBILE_PANEL}>
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={anchor(link.href)}
                className={NAV_MOBILE_LINK}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            {feature && !feature.hidden ? (
              <Link
                href={feature.href}
                className={`${NAV_MOBILE_LINK} text-[#FFC46B]`}
                onClick={close}
              >
                {feature.label}
              </Link>
            ) : null}
            {cta.hidden ? null : (
              <a
                href={anchor(cta.href)}
                className={NAV_MOBILE_LINK}
                onClick={close}
              >
                {cta.label}
              </a>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default SiteNav;
