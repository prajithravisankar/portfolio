"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ICON_MD,
  NAV_BAR,
  NAV_BRAND,
  NAV_CTA_BUTTON,
  NAV_INNER,
  NAV_LINK,
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
 * CLIENT COMPONENT: the mobile panel is stateful. The original site had no
 * mobile menu at all — below `md` the link row was simply hidden, so on a
 * phone the site had no navigation whatsoever. With seven anchors the desktop
 * row also stopped fitting at `md`, so the breakpoint moved to `lg` and
 * everything below it now gets a real disclosure menu instead of nothing.
 *
 * The CTA Button intentionally does NOT use `asChild` and its anchor
 * intentionally has NO className, reproducing the original's
 * <button><a>Contact</a></button> DOM.
 */
export interface SiteNavProps {
  /** Content override. Defaults to the real site navigation. */
  content?: NavContent;
}

export function SiteNav({ content = navContent }: SiteNavProps = {}) {
  const { brand, links, cta } = content;
  const [isOpen, setIsOpen] = useState(false);

  const visibleLinks = links.filter((link) => !link.hidden);
  const close = () => setIsOpen(false);

  return (
    <nav className={NAV_BAR}>
      <div className={NAV_INNER}>
        <div className={NAV_ROW}>
          <div className={NAV_BRAND}>{brand}</div>

          {/* Desktop */}
          <div className={NAV_LINK_ROW}>
            {visibleLinks.map((link) => (
              <a key={link.href} href={link.href} className={NAV_LINK}>
                {link.label}
              </a>
            ))}
            {cta.hidden ? null : (
              <Button size={cta.size} className={NAV_CTA_BUTTON}>
                <a href={cta.href}>{cta.label}</a>
              </Button>
            )}
          </div>

          {/* Mobile / tablet */}
          <button
            type="button"
            className={NAV_MOBILE_TOGGLE}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="site-nav-mobile"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X className={ICON_MD} />
            ) : (
              <Menu className={ICON_MD} />
            )}
          </button>
        </div>

        {isOpen ? (
          <div id="site-nav-mobile" className={NAV_MOBILE_PANEL}>
            {visibleLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={NAV_MOBILE_LINK}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            {cta.hidden ? null : (
              <a href={cta.href} className={NAV_MOBILE_LINK} onClick={close}>
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
