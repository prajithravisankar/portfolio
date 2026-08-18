/**
 * ============================================================================
 * NAVIGATION CONTENT — the fixed top nav bar.
 * ============================================================================
 *
 * Every string below is copied VERBATIM from the original monolithic page.tsx
 * (lines 66-112). Editing this file changes what the site says; it must never
 * change how the site looks — presentation lives in
 * `@/components/portfolio/tokens` and `@/components/sections/SiteNav`.
 *
 * NOTE ON THE CTA: the "Contact" entry is NOT a sixth link. In the original it
 * is a <Button size="sm"> that WRAPS a bare <a href="#contact"> (no className,
 * no `asChild`), so the DOM is <button><a>Contact</a></button>. It is modelled
 * as a separate `cta` field so that structure survives.
 * ============================================================================
 */

/**
 * Mixed into every content item so that entries which are commented out in the
 * original survive as data instead of being deleted. Render sites filter with
 * `.filter((item) => !item.hidden)`, so a hidden item stays invisible.
 *
 * (No item in the nav / About area is hidden today — the field exists so an
 * entry can be disabled later without deleting its content.)
 */
export interface Hideable {
  hidden?: boolean;
}

/** One of the desktop anchor links inside `hidden md:flex items-center gap-8`. */
export interface NavLink extends Hideable {
  /** In-page anchor, e.g. "#about". */
  href: string;
  /** Visible text, verbatim, e.g. "Open Source". */
  label: string;
}

/**
 * The Contact call-to-action. Structurally different from `NavLink`: a shadcn
 * Button that wraps a plain anchor. Keep it separate from `links`.
 */
export interface NavCta extends Hideable {
  href: string;
  label: string;
  /** shadcn Button `size` prop — the original passes "sm". */
  size?: "sm" | "default" | "lg" | "icon";
}

export interface NavContent {
  /** Wordmark text. */
  brand: string;
  /** The 5 desktop anchors, in order. */
  links: NavLink[];
  /** The Contact button. */
  cta: NavCta;
}

export const navContent: NavContent = {
  brand: "Prajith Ravisankar",
  links: [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#opensource", label: "Open Source" },
    { href: "#projects", label: "Projects" },
  ],
  cta: {
    href: "#contact",
    label: "Contact",
    size: "sm",
  },
};
