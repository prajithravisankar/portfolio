import { Button } from "@/components/ui/button";
import {
  NAV_BAR,
  NAV_BRAND,
  NAV_CTA_BUTTON,
  NAV_INNER,
  NAV_LINK,
  NAV_LINK_ROW,
  NAV_ROW,
} from "@/components/portfolio/tokens";
import { navContent, type NavContent } from "@/content/navigation";

/**
 * The fixed top navigation bar (lines 66-112 of the original page.tsx).
 *
 * Renders EXACTLY:
 *
 *   <nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/90 border-b border-white/10">
 *     <div class="max-w-7xl mx-auto px-6 py-4">
 *       <div class="flex items-center justify-between">
 *         <div class="text-xl font-bold text-white">Prajith Ravisankar</div>
 *         <div class="hidden md:flex items-center gap-8">
 *           <a href="#about" class="text-sm text-white/80 ...">About</a>   (x5)
 *           <Button size="sm" class="bg-transparent border border-white/10 text-white">
 *             <a href="#contact">Contact</a>
 *           </Button>
 *         </div>
 *       </div>
 *     </div>
 *   </nav>
 *
 * The CTA Button intentionally does NOT use `asChild` and its anchor
 * intentionally has NO className — that reproduces the original's
 * <button><a>Contact</a></button> DOM.
 *
 * There is no mobile menu in the original; the link row is simply hidden below
 * the `md` breakpoint. Presentational only — no hooks, so no "use client".
 */
export interface SiteNavProps {
  /** Content override. Defaults to the real site navigation. */
  content?: NavContent;
}

export function SiteNav({ content = navContent }: SiteNavProps = {}) {
  const { brand, links, cta } = content;

  return (
    <nav className={NAV_BAR}>
      <div className={NAV_INNER}>
        <div className={NAV_ROW}>
          <div className={NAV_BRAND}>{brand}</div>
          <div className={NAV_LINK_ROW}>
            {links
              .filter((link) => !link.hidden)
              .map((link) => (
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
        </div>
      </div>
    </nav>
  );
}

export default SiteNav;
