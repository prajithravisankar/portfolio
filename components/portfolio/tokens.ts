/**
 * ============================================================================
 * PORTFOLIO THEME TOKENS — SINGLE SOURCE OF TRUTH FOR THE VISUAL THEME.
 * ============================================================================
 *
 * THIS IS THE ONE FILE YOU EDIT TO RE-THEME THE WHOLE SITE.
 *
 * Every repeated Tailwind class string used by the portfolio page lives here
 * exactly once. Change a value here and every section that uses it changes
 * together. Nothing else in components/portfolio/** or content/** should
 * hardcode a colour, surface, border, spacing rhythm, or typography class that
 * already has a token below — import the token instead.
 *
 * NAMING RULE: tokens are named by ROLE (what the thing IS), never by colour
 * (what it currently LOOKS LIKE). `CARD_SURFACE`, not `WHITE_5_CARD`.
 * `TEXT_MUTED`, not `SLATE_400`. That way swapping the palette from mono-dark
 * to anything else does not leave every name lying.
 *
 * FIDELITY CONTRACT: every value below is byte-identical to the string used in
 * the original monolithic page.tsx. The refactor is a visual and textual
 * no-op. Do not "tidy" a value (reorder utilities, drop a duplicate, collapse
 * `hover:border-[color:var(--ink-faint)]` into `hover:border-[color:var(--ink-faint)]`) — several near-identical
 * tokens below differ deliberately and those differences are load-bearing.
 *
 * Trailing `(Nx)` comments record how many times the string appeared in the
 * original file, so you can see what a change will touch.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * PAGE SHELL
 * ------------------------------------------------------------------------- */

/** Outermost page wrapper. (1x) */
export const PAGE_ROOT = "min-h-screen bg-background";
/** Fixed decorative backdrop layer behind all content. (1x) */
export const PAGE_BACKDROP = "fixed inset-0 overflow-hidden pointer-events-none";
/** Inner (currently empty) gradient plate inside the backdrop. (1x) */
export const PAGE_BACKDROP_INNER = "absolute inset-0 pointer-events-none";
/** Content layer stacked above the backdrop. (1x) */
export const PAGE_CONTENT = "relative z-10";

/* ---------------------------------------------------------------------------
 * NAVIGATION BAR
 * ------------------------------------------------------------------------- */

/** Fixed translucent nav bar. (1x) */
export const NAV_BAR = "fixed top-0 w-full z-50 transition-colors duration-300";
/** Nav while it sits over the full-bleed hero artwork: no bar at all. */
export const NAV_BAR_OVER_HERO = "bg-transparent border-b border-transparent";
/** Nav once the page has scrolled past the hero: paper bar, hairline rule. */
export const NAV_BAR_SCROLLED =
  "bg-[color:var(--paper)]/92 backdrop-blur-md border-b border-[color:var(--line)]";
/** Reversed wordmark and links while over the artwork. */
export const NAV_BRAND_OVER_HERO = "text-[#FFF6EC]";
export const NAV_LINK_OVER_HERO =
  "text-[rgba(255,240,225,0.82)] hover:text-[#FFC46B]";
export const NAV_CTA_OVER_HERO =
  "bg-transparent border border-[rgba(255,240,225,0.45)] text-[#FFF6EC] hover:bg-[rgba(255,240,225,0.14)]";
/** Nav inner container — note it carries its own px/py, unlike SECTION_CONTAINER. (1x) */
export const NAV_INNER = "max-w-7xl mx-auto px-6 py-4";
/** Brand / links / CTA row. (1x) */
export const NAV_ROW = "flex items-center justify-between";
/** Wordmark. (1x) */
export const NAV_BRAND =
  "font-display text-xl font-semibold tracking-tight text-[color:var(--ink)]";
/** Desktop-only anchor list. (1x) */
export const NAV_LINK_ROW = "hidden lg:flex items-center gap-8";
/** A single nav anchor. (5x) */
export const NAV_LINK = "text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors";
/** The "Contact" Button in the nav. (1x) */
export const NAV_CTA_BUTTON = "bg-transparent border border-[color:var(--line)] text-[color:var(--ink)]";

/* ---------------------------------------------------------------------------
 * SECTION SHELL + HEADER
 * ------------------------------------------------------------------------- */

/** Standard <section> padding. (4x) */
export const SECTION_SHELL = "py-24 md:py-32 px-6";
/**
 * First section only ("About Me") — extra top padding clears the fixed nav.
 * MUST stay distinct from SECTION_SHELL. (1x)
 */
export const SECTION_SHELL_FIRST = "pt-32 pb-20 px-6";
/** Max-width container inside every section and the footer. (6x) */
export const SECTION_CONTAINER = "max-w-7xl mx-auto";

/** Centered heading block wrapper. (5x) */
export const SECTION_HEADER_WRAP = "mb-12 max-w-3xl";
/** Section <h2>. (5x) */
export const SECTION_TITLE =
  "font-display text-[2.75rem] md:text-6xl leading-[1.05] font-semibold tracking-tight mb-4";
/** The <span> inside the <h2> that carries the title colour. (5x) */
export const SECTION_TITLE_ACCENT = "text-[color:var(--ink)]";
/** Optional subtitle <p> under the section title. (4x — "About Me" has none.) */
export const SECTION_SUBTITLE = "text-[color:var(--ink-soft)] text-lg max-w-xl";

/* ---------------------------------------------------------------------------
 * CARD SURFACES (the "glass" look)
 *
 * Two hover shades exist in the original and they are NOT interchangeable:
 *   CARD_SURFACE       -> hover:border-[color:var(--ink-faint)]  (default, 15x)
 *   CARD_SURFACE_SOFT  -> hover:border-[color:var(--ink-faint)]  (About cards + projects-a
 *                                                 dialog triggers, 6x)
 * The composites below are exact concatenations of a base + its extra
 * utilities, in the original's order.
 * ------------------------------------------------------------------------- */

/** Default glass card surface. (2x bare, 15x as a prefix) */
export const CARD_SURFACE =
  "bg-card border-[color:var(--line)] transition-colors duration-200 hover:border-[color:var(--ink-faint)]";
/** Glass card surface with the dimmer hover tint. (used by About + projects-a) */
export const CARD_SURFACE_SOFT =
  "bg-card border-[color:var(--line)] transition-colors duration-200 hover:border-[color:var(--ink-faint)]";

/** Glass card that lifts on hover — Open Source cards. (6x) */
export const CARD_SURFACE_LIFT = `${CARD_SURFACE} hover:-translate-y-1`;
/** Full-height media card wrapped in a link — Certifications carousel. (5x) */
export const CARD_SURFACE_MEDIA = `${CARD_SURFACE} h-full overflow-hidden group cursor-pointer`;
/** Compact dialog-trigger card, default hover — projects-b. (2x) */
export const CARD_SURFACE_TRIGGER = `${CARD_SURFACE} cursor-pointer group min-h-[520px] flex flex-col`;
/** Compact dialog-trigger card, soft hover — projects-a. (3x) */
export const CARD_SURFACE_TRIGGER_SOFT = `${CARD_SURFACE_SOFT} cursor-pointer group min-h-[520px] flex flex-col`;

/** Anchor that makes an entire card clickable. (5x) */
export const CARD_LINK_WRAP = "block h-full";
/** CardContent that grows and pins its last child to the bottom. (5x) */
export const CARD_BODY_FILL = "flex-1 flex flex-col justify-between";

/** Inset tile inside a card — course cards, award banner. (9x) */
export const PANEL_TILE = "p-4 rounded-lg bg-[color:var(--paper-sunk)] border border-[color:var(--line)]";
/** Round icon chip in a card header. (2x) */
export const ICON_CIRCLE =
  "w-12 h-12 rounded-full bg-[color:var(--paper-sunk)] flex items-center justify-center";

/* ---------------------------------------------------------------------------
 * BADGES
 * ------------------------------------------------------------------------- */

/** Filled pill — skills, status, category, dialog title badge. (32x) */
export const BADGE_SOLID = "bg-[color:var(--paper-sunk)] text-[color:var(--ink-soft)] border-[color:var(--line)]";
/** Brighter pill used on top of imagery — certification category overlay. (5x) */
export const BADGE_SOLID_OVERLAY =
  "bg-[color:var(--accent)] text-[color:var(--paper)] border-transparent";
/** Outline pill — tech-stack tags in detail modals. (53x) */
export const BADGE_OUTLINE = "border-[color:var(--line)] text-[color:var(--ink-soft)] bg-transparent";
/** Outline pill, small — tech-stack tags on compact cards. (46x) */
export const BADGE_OUTLINE_SM = `${BADGE_OUTLINE} text-xs`;
/** Outline pill with no explicit background — Open Source repo slug. (6x) */
export const BADGE_OUTLINE_QUIET = "border-[color:var(--line)] text-[color:var(--ink-soft)]";
/**
 * De-emphasised pill. Appears exactly ONCE in the original (the
 * "Mobile Computing Technology" grade badge) and deliberately drops the
 * border utility. Use as a full REPLACEMENT for BADGE_SOLID, never merged. (1x)
 */
export const BADGE_MUTED = "bg-[color:var(--paper-sunk)] text-[color:var(--ink-soft)]";
/** Leading icon inside a filled pill. (9x) */
export const BADGE_ICON = "w-3 h-3 mr-1";

/* ---------------------------------------------------------------------------
 * BUTTONS + LINKS
 * ------------------------------------------------------------------------- */

/** Outline button. (3x) */
export const BUTTON_OUTLINE = "border-[color:var(--line)] hover:bg-[color:var(--paper-sunk)]";
/** Outline button, full width. (6x) */
export const BUTTON_OUTLINE_FULL = "w-full border-[color:var(--line)] hover:bg-[color:var(--paper-sunk)]";
/** Ghost/bordered full-width button. (2x — projects-b "View Details") */
export const BUTTON_GHOST_FULL = "w-full bg-transparent border border-[color:var(--line)] text-[color:var(--ink)]";
/** Ghost/bordered full-width button, bold label. (8x — GitHub CTA, projects-a "View Details") */
export const BUTTON_GHOST_FULL_STRONG = `${BUTTON_GHOST_FULL} font-semibold`;

/** Anchor content laid out inline with its icons. (3x) */
export const LINK_ROW = "flex items-center gap-2";
/** Anchor content centered inside a full-width button. (11x) */
export const LINK_ROW_CENTERED = "flex items-center justify-center gap-2";
/** Small accent text link — email addresses. (2x) */
export const LINK_ACCENT_SM = "text-[color:var(--ink)] hover:text-[color:var(--ink-soft)] transition-colors text-sm";
/** Muted icon link — footer socials. (3x) */
export const LINK_MUTED = "text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors";

/* ---------------------------------------------------------------------------
 * ICONS
 * ------------------------------------------------------------------------- */

/** Extra small icon — trailing ExternalLink in buttons. (9x) */
export const ICON_XS = "w-3 h-3";
/** Small icon — leading icons in outline buttons, trailing ExternalLink in CTAs. (7x) */
export const ICON_SM = "w-4 h-4";
/** Medium icon — leading GitHub icon, footer socials. (8x) */
export const ICON_MD = "w-5 h-5";
/** Small accent icon — h4 section-heading icons. (17x) */
export const ICON_SM_ACCENT = "w-4 h-4 text-[color:var(--ink)]";
/** Medium accent icon — CardTitle icons. (2x) */
export const ICON_MD_ACCENT = "w-5 h-5 text-[color:var(--ink)]";
/** Medium accent icon nudged down to align with a wrapping title. (6x) */
export const ICON_MD_ACCENT_OFFSET = "w-5 h-5 mt-1 text-[color:var(--ink)]";
/** Medium accent icon, dimmed — the Star on project cards. (5x) */
export const ICON_MD_ACCENT_SOFT = "w-5 h-5 text-[color:var(--ink-soft)]";
/** Large accent icon — icon-circle glyphs, award banner. (3x) */
export const ICON_LG_ACCENT = "w-6 h-6 text-[color:var(--ink)]";
/** Trailing icon with left margin — ArrowRight on "View Details". (5x) */
export const ICON_TRAILING = "w-4 h-4 ml-2";
/** Icon revealed only on card hover — certification ExternalLink. (5x) */
export const ICON_HOVER_REVEAL =
  "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity";

/* ---------------------------------------------------------------------------
 * TYPOGRAPHY
 * ------------------------------------------------------------------------- */

/** Plain accent text — the default foreground for headings and values. (8x) */
export const TEXT_ACCENT = "text-[color:var(--ink)]";
/** Emphasised accent text — course names, stat values, list leads. (11x) */
export const TEXT_STRONG = "text-[color:var(--ink)] font-semibold";
/** Muted secondary text. (2x) */
export const TEXT_MUTED = "text-[color:var(--ink-soft)]";
/**
 * Muted small text, size-first utility order. (9x — course codes.)
 * NOTE: TEXT_MUTED_SM_ALT below is the SAME utilities in the other order; both
 * spellings exist in the original and are kept apart for byte fidelity.
 */
export const TEXT_MUTED_SM = "text-sm text-[color:var(--ink-soft)]";
/** Muted small text, colour-first utility order. (3x — degree line, footer tagline.) */
export const TEXT_MUTED_SM_ALT = "text-[color:var(--ink-soft)] text-sm";
/** Faint fine print — credit counts. (8x) */
export const TEXT_FAINT_XS = "text-xs text-[color:var(--ink-faint)]";
/** Muted body copy in cards. (11x) */
export const TEXT_BODY_MUTED = "text-[color:var(--ink-soft)] text-sm leading-relaxed";
/** Muted relaxed paragraph — the About bio. (1x) */
export const TEXT_BODY_MUTED_LG = "text-[color:var(--ink-soft)] leading-relaxed";
/** Light body copy in detail modals. (5x) */
export const TEXT_BODY_LIGHT = "text-[color:var(--ink-soft)] leading-relaxed";
/** Two-line-clamped muted description on compact cards. (4x) */
export const TEXT_CLAMP_MUTED = "text-[color:var(--ink-soft)] line-clamp-2";
/** Two-line-clamped light description — Odysseyelp only. (1x) */
export const TEXT_CLAMP_LIGHT = "text-[color:var(--ink-soft)] line-clamp-2";
/** Clamped summary blurb under a card video. (5x) */
export const TEXT_CARD_SUMMARY = "text-[color:var(--ink-soft)] text-sm line-clamp-2 mb-4";
/** Light text row with a leading icon — the location line. (1x) */
export const TEXT_ROW_LIGHT = "flex items-center gap-2 text-[color:var(--ink-soft)]";

/* ---------------------------------------------------------------------------
 * CARD TITLES + SUB-HEADINGS
 * ------------------------------------------------------------------------- */

/** CardTitle with a leading icon, centered. (2x) */
export const CARD_TITLE_ICON = "text-[color:var(--ink)] flex items-center gap-2";
/** Large CardTitle with a trailing icon, centered. (5x) */
export const CARD_TITLE_LG_ICON = "text-[color:var(--ink)] text-lg flex items-center gap-2";
/** Large CardTitle with a leading icon, top-aligned for wrapping titles. (6x) */
export const CARD_TITLE_LG_ICON_TOP = "text-[color:var(--ink)] text-lg flex items-start gap-2";
/** Extra-large CardTitle on compact project cards. (5x) */
export const CARD_TITLE_XL = "text-[color:var(--ink)] text-xl mb-2";
/** Display CardTitle — the profile name. (1x) */
export const CARD_TITLE_DISPLAY = "text-4xl mb-2 text-[color:var(--ink)] align-middle";

/** h4 sub-heading with a leading icon. (13x) */
export const SUBHEADING_ICON = "text-[color:var(--ink)] font-semibold mb-2 flex items-center gap-2";
/** h4 sub-heading without an icon — "Technology Stack". (5x) */
export const SUBHEADING_PLAIN = "text-[color:var(--ink)] font-semibold mb-3";
/** Inline strong heading with an icon and no bottom margin — award banner title. (3x) */
export const SUBHEADING_INLINE_ICON = "text-[color:var(--ink)] font-semibold flex items-center gap-2";

/* ---------------------------------------------------------------------------
 * DIALOG (project detail modals)
 * ------------------------------------------------------------------------- */

/** DialogContent panel. (5x) */
export const DIALOG_PANEL =
  "max-w-7xl sm:max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-[color:var(--paper)] border-[color:var(--line)]";
/** DialogTitle row — title text + inline badge. (5x) */
export const DIALOG_TITLE = "text-3xl text-[color:var(--ink)] flex items-center gap-3";
/** DialogDescription. (5x) */
export const DIALOG_DESCRIPTION = "text-lg text-[color:var(--ink-soft)]";
/** Modal body stack — projects-b. (2x) */
export const DIALOG_BODY = "space-y-6";
/** Modal body stack with a top offset — projects-a. (3x) */
export const DIALOG_BODY_OFFSET = "space-y-6 mt-4";

/* ---------------------------------------------------------------------------
 * MEDIA (images + video embeds)
 * ------------------------------------------------------------------------- */

/** Fixed-height image frame at the top of a certification card. (5x) */
export const MEDIA_FRAME = "relative h-48 overflow-hidden bg-[color:var(--paper-sunk)]";
/** The <img> inside MEDIA_FRAME — zooms when the card's `group` is hovered. (5x) */
export const MEDIA_IMAGE =
  "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500";
/** Darkening scrim over MEDIA_IMAGE. (5x) */
export const MEDIA_SCRIM = "absolute inset-0 bg-black/40";
/** Slot pinned to the bottom-left of MEDIA_FRAME for the category badge. (5x) */
export const MEDIA_OVERLAY_SLOT = "absolute bottom-4 left-4";

/** 16:9 video frame in a detail modal. (5x) */
export const VIDEO_FRAME =
  "relative w-full aspect-video rounded-lg overflow-hidden border border-[color:var(--line)]";
/** 16:9 video frame on a compact card. (2x) */
export const VIDEO_FRAME_CARD = `${VIDEO_FRAME} mb-4`;
/** 16:9 video frame on a compact card, black-backed. (3x) */
export const VIDEO_FRAME_CARD_DARK = `${VIDEO_FRAME} mb-4 bg-[color:var(--paper-sunk)]`;
/** The <iframe> that fills a video frame. (10x) */
export const VIDEO_IFRAME = "absolute inset-0 w-full h-full";
/** Verbatim `allow` attribute shared by every YouTube embed. (10x) */
export const VIDEO_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

/* ---------------------------------------------------------------------------
 * LAYOUT: GRIDS, STACKS, ROWS
 * ------------------------------------------------------------------------- */

/** Three-up responsive card grid. (3x) */
export const GRID_CARDS_3 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
/** Two-up responsive grid — course tiles. (2x) */
export const GRID_TILES_2 = "grid grid-cols-1 md:grid-cols-2 gap-4";

/** Tight vertical stack. (1x) */
export const STACK_XS = "space-y-2";
/** Small vertical stack — CardContent on Open Source / Education cards. (10x) */
export const STACK_SM = "space-y-3";
/** Medium vertical stack — Contact CardContent. (1x) */
export const STACK_MD = "space-y-4";
/** Large vertical stack — semester cards. (1x) */
export const STACK_LG = "space-y-8";
/** Small-text stack — education stat rows. (1x) */
export const STACK_TEXT_SM = "space-y-2 text-sm";

/** Label/value row. (2x) */
export const ROW_BETWEEN = "flex justify-between";
/** Top-aligned row with content pushed apart. (6x) */
export const ROW_BETWEEN_TOP = "flex items-start justify-between";
/** Top-aligned split row with a small gap below — course tile header. (8x) */
export const ROW_BETWEEN_TOP_TIGHT = "flex items-start justify-between mb-2";
/** Top-aligned split row — compact project card header. (5x) */
export const ROW_BETWEEN_TOP_CARD = "flex items-start justify-between mb-3";
/** Icon + text row, small gap. (3x) */
export const ROW_ICON = "flex items-center gap-2";
/** Icon + text row, larger gap — semester card header. (3x) */
export const ROW_ICON_LG = "flex items-center gap-3";
/** Badge pair under a card title. (6x) */
export const ROW_BADGES_OFFSET = "flex items-center gap-2 mt-2";
/** Avatar + name row on the profile card. (1x) */
export const ROW_PROFILE_HEADER = "flex items-start gap-6";
/** Name column on the profile card — the mt-7 nudge is intentional. (1x) */
export const COL_PROFILE_NAME = "flex-1 mt-7";
/** Wrapping row of buttons — contact socials. (1x) */
export const ROW_BUTTONS = "flex flex-wrap gap-3";
/** Vertical list of links — contact emails. (1x) */
export const COL_LINKS = "flex flex-col gap-2";
/** Block offset used for the bio paragraph. (1x) */
export const BLOCK_OFFSET = "mt-4";

/** Wrapping row of tags. (6x) */
export const TAG_ROW = "flex flex-wrap gap-2";
/** Wrapping row of tags with a bottom margin — compact cards. (5x) */
export const TAG_ROW_CARD = "flex flex-wrap gap-2 mb-4";

/* ---------------------------------------------------------------------------
 * BULLET LISTS
 * ------------------------------------------------------------------------- */

/** <ul> for a bulleted detail block. (10x) */
export const BULLET_LIST = "text-[color:var(--ink-soft)] leading-relaxed space-y-2";
/** <li> inside BULLET_LIST. (41x) */
export const BULLET_ITEM = "flex items-start gap-2";
/** The "•" <span> inside a BULLET_ITEM. (41x) */
export const BULLET_MARK = "text-[color:var(--ink)] mt-1";

/* ---------------------------------------------------------------------------
 * SEPARATORS
 * ------------------------------------------------------------------------- */

/** Hairline rule. (4x) */
export const SEPARATOR = "bg-[color:var(--paper-sunk)]";
/** Hairline rule with generous vertical margin — footer. (1x) */
export const SEPARATOR_SPACED = "my-8 bg-[color:var(--paper-sunk)]";

/* ---------------------------------------------------------------------------
 * CAROUSEL (certifications)
 * ------------------------------------------------------------------------- */

/** Carousel root. (1x) */
export const CAROUSEL_ROOT = "w-full max-w-6xl mx-auto";
/** Carousel track. (1x) */
export const CAROUSEL_TRACK = "py-4";
/** One slide's responsive basis. (5x) */
export const CAROUSEL_SLIDE = "md:basis-1/2 lg:basis-1/3";
/** Prev/next control — both controls MUST stay identical. (2x) */
export const CAROUSEL_CONTROL = "bg-[color:var(--paper-sunk)] border-[color:var(--line)] hover:bg-[color:var(--accent)]";
/** Dot indicator row. (1x) */
export const CAROUSEL_INDICATORS = "mt-8";

/* ---------------------------------------------------------------------------
 * AVATAR (profile card)
 * ------------------------------------------------------------------------- */

/** Avatar ring. (1x) */
export const AVATAR = "w-24 h-24 border-2 border-[color:var(--line)]";
/** Avatar initials fallback. (1x) */
export const AVATAR_FALLBACK = "bg-[color:var(--paper-sunk)] text-[color:var(--ink)] text-2xl";

/* ---------------------------------------------------------------------------
 * FOOTER
 * ------------------------------------------------------------------------- */

/** Footer shell. (1x) */
export const FOOTER = "py-12 px-6 border-t border-[color:var(--line)]";
/** Footer content row. (1x) */
export const FOOTER_ROW =
  "flex flex-col md:flex-row items-center justify-between gap-6";
/** Footer brand block alignment. (1x) */
export const FOOTER_BRAND_BLOCK = "text-center md:text-left";
/** Footer wordmark. (1x) */
export const FOOTER_BRAND = "text-xl font-bold text-[color:var(--ink)] mb-2";
/** Footer social icon row. (1x) */
export const FOOTER_SOCIAL_ROW = "flex items-center gap-4";
/** Footer copyright line. (1x) */
export const FOOTER_LEGAL = "text-center text-[color:var(--ink-faint)] text-sm";

/* ---------------------------------------------------------------------------
 * EXPERIENCE
 * ------------------------------------------------------------------------- */

/**
 * Experience card header: role/employer block on the left, date range pinned
 * right. Wraps to stacked on narrow screens so long role titles never collide
 * with the date. (new)
 */
export const EXPERIENCE_HEADER_ROW =
  "flex flex-wrap items-start justify-between gap-4";
/** Role title inside an experience card — no flex, so the text can wrap. (new) */
export const EXPERIENCE_ROLE_TITLE = "text-[color:var(--ink)] text-lg";
/** Employer + program badges directly under the role title. (new) */
export const EXPERIENCE_META_ROW = "flex flex-wrap items-center gap-2 mt-1";

/* ---------------------------------------------------------------------------
 * MOBILE NAV
 * ------------------------------------------------------------------------- */

/** Hamburger / close button, shown only below the desktop breakpoint. (new) */
export const NAV_MOBILE_TOGGLE =
  "lg:hidden -mr-2 p-2 text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors";
/** Expanded mobile panel holding the stacked links. (new) */
export const NAV_MOBILE_PANEL =
  "lg:hidden flex flex-col gap-1 border-t border-[color:var(--line)] pt-3 pb-2";
/** One stacked link inside the mobile panel. (new) */
export const NAV_MOBILE_LINK =
  "py-2 text-sm text-[color:var(--ink-soft)] hover:text-[color:var(--ink)] transition-colors";

/* ---------------------------------------------------------------------------
 * SECTION CTA
 * ------------------------------------------------------------------------- */

/** Centred call-to-action row below a section's grid. (new) */
export const SECTION_CTA_ROW = "flex justify-center mt-12";

/* ---------------------------------------------------------------------------
 * HERO — full-bleed cinematic
 *
 * The artwork runs edge to edge behind the copy rather than sitting in a
 * column beside it. Three stacked layers make the text legible without
 * flattening the picture:
 *
 *   1. the artwork itself, very slowly drifting (see animations.css)
 *   2. a dusk wash in the artwork's own hues, which breathes
 *   3. a directional scrim, dark at the bottom-left where the copy sits and
 *      clear at the top-right where the sky and the cat are
 *
 * The section then fades into the paper ground at its base, so the dark hero
 * meets the light body as a gradient rather than a hard seam.
 * ------------------------------------------------------------------------- */

/** Section shell — nearly full height, copy anchored to the bottom. */
export const HERO_SHELL =
  "relative isolate flex min-h-[88svh] items-end overflow-hidden px-6 pb-16 pt-32 md:pb-24";
/** Absolutely-positioned layer stack behind the copy. */
export const HERO_BACKDROP = "absolute inset-0 -z-10 overflow-hidden";
/** The artwork. object-position is set inline from the content focal point. */
export const HERO_ART = "h-full w-full object-cover";
/** Fallback when no artwork is present — a painted dusk in the same hues. */
export const HERO_ART_FALLBACK =
  "h-full w-full bg-[linear-gradient(180deg,#4a3b6b_0%,#8d5f7c_38%,#d08a5c_72%,#f0b27a_100%)]";
/** Warm dusk wash over the artwork. */
export const HERO_DUSK =
  "absolute inset-0 bg-[radial-gradient(120%_90%_at_72%_38%,rgba(255,176,92,0.42)_0%,rgba(120,70,140,0.30)_45%,rgba(24,16,38,0.55)_100%)]";
/** Directional scrim: heavy where the copy sits, clear over the artwork. */
export const HERO_SCRIM =
  "absolute inset-0 bg-[linear-gradient(100deg,rgba(10,6,18,0.90)_0%,rgba(10,6,18,0.78)_34%,rgba(10,6,18,0.45)_58%,rgba(10,6,18,0.12)_82%,rgba(10,6,18,0.02)_100%)]";
/**
 * Bottom fade into the paper ground.
 *
 * Shorter and back-weighted rather than a linear ramp. A straight
 * transparent-to-paper gradient starts whitening immediately, which washed out
 * the desk and the figure's back. This holds under 5% opacity for the first
 * 42% of its height, so nearly all the visible fade happens in the last ~35px
 * and much more of the artwork survives.
 */
export const HERO_FADE =
  "absolute inset-x-0 bottom-0 h-28 md:h-32 bg-[linear-gradient(180deg,rgba(246,242,234,0)_0%,rgba(246,242,234,0.18)_38%,rgba(246,242,234,0.62)_72%,rgba(246,242,234,1)_100%)]";
/** Copy column, held to a readable measure over the artwork. */
export const HERO_TEXT_COL = "relative z-10 w-full max-w-3xl";
/** Small uppercase locator above the headline. */
export const HERO_EYEBROW =
  "font-mono text-xs uppercase tracking-[0.22em] text-[rgba(255,240,225,0.72)] mb-5";
/** Display headline, reversed out of the artwork. */
export const HERO_HEADLINE =
  "font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[#FFF6EC] [text-wrap:balance] [text-shadow:0_1px_30px_rgba(10,6,18,0.55)]";
/** Final headline line — warm gold, picked from the sunset in the artwork. */
export const HERO_HEADLINE_LINE_ACCENT = "text-[#FFC46B]";
/**
 * YouTube glyph sitting on the headline. Sized in `em` so it scales with the
 * clamped display type instead of drifting out of proportion at breakpoints,
 * and nudged down slightly to sit on the type's optical centre rather than its
 * baseline.
 */
export const HERO_CHANNEL_LINK =
  "ml-[0.18em] inline-flex translate-y-[0.08em] align-middle text-[#FFC46B] transition-colors hover:text-[#FFF6EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC46B]";
export const HERO_CHANNEL_ICON = "h-[0.72em] w-[0.72em]";

/** Live day counter pulled from the YouTube feed. */
export const HERO_DAY_BADGE =
  "mt-7 inline-flex flex-wrap items-center gap-2 font-mono text-sm text-[rgba(255,240,225,0.78)]";
export const HERO_DAY_NUMBER =
  "tabular inline-flex items-center border border-[#FFC46B] text-[#FFC46B] px-2 py-0.5";
/** The claim paragraph. */
export const HERO_STAND =
  "mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[rgba(255,241,228,0.86)]";
export const HERO_ACTIONS = "mt-9 flex flex-wrap items-center gap-3";
/** Primary action on the artwork — warm fill, dark label. */
export const HERO_BUTTON_PRIMARY =
  "bg-[#FFC46B] text-[#241608] hover:bg-[#FFD695] transition-colors";
/** Secondary action on the artwork — hairline, reversed. */
export const HERO_BUTTON_GHOST =
  "border border-[rgba(255,240,225,0.45)] bg-transparent text-[#FFF6EC] hover:bg-[rgba(255,240,225,0.12)] transition-colors";

/* ---------------------------------------------------------------------------
 * SOLID BUTTON
 * ------------------------------------------------------------------------- */

/** Primary action — ink fill on paper. The only high-contrast button. */
export const BUTTON_SOLID =
  "bg-[color:var(--ink)] text-[color:var(--paper)] hover:bg-[color:var(--accent)] transition-colors";

/* ---------------------------------------------------------------------------
 * SECTION BACKDROP — full-bleed artwork behind a whole section
 *
 * Same idea as the hero, but banded: the artwork fades in from the paper
 * ground at the top and back out at the bottom, so the section reads as an
 * inset plate rather than a second hero competing with the first.
 * ------------------------------------------------------------------------- */

/** Wrapper that establishes the stacking context and clips the artwork. */
export const SECTION_ART_SHELL = "relative isolate overflow-hidden";
export const SECTION_ART_LAYER = "absolute inset-0 -z-10 overflow-hidden";
/** Viewport-pinned variant, for pages too tall to stretch the artwork over. */
export const SECTION_ART_LAYER_FIXED = "fixed inset-0 -z-10 overflow-hidden";
export const SECTION_ART_IMAGE = "h-full w-full object-cover";
/** Darkening wash so reversed copy and cards hold up over saturated artwork. */
export const SECTION_ART_SCRIM =
  "absolute inset-0 bg-[linear-gradient(180deg,rgba(14,9,24,0.82)_0%,rgba(14,9,24,0.62)_38%,rgba(14,9,24,0.68)_72%,rgba(14,9,24,0.86)_100%)]";
/**
 * Edge vignette — the inverse of SECTION_ART_SCRIM.
 *
 * For centre-weighted artwork (the lake: sun, peak and boat all mid-frame).
 * Darkens the left and right thirds where copy sits and leaves the middle
 * almost untouched, so the content frames the view instead of covering it.
 */
export const SECTION_ART_SCRIM_EDGES =
  "absolute inset-0 bg-[linear-gradient(90deg,rgba(14,9,24,0.88)_0%,rgba(14,9,24,0.74)_22%,rgba(14,9,24,0.22)_42%,rgba(14,9,24,0.16)_58%,rgba(14,9,24,0.74)_78%,rgba(14,9,24,0.88)_100%)]";
/** A light overall darkening laid under the vignette so nothing blows out. */
export const SECTION_ART_SCRIM_SOFT =
  "absolute inset-0 bg-[rgba(14,9,24,0.30)]";

/** Fade in from the paper ground at the top edge. */
export const SECTION_ART_FADE_TOP =
  "absolute inset-x-0 top-0 h-24 md:h-28 bg-[linear-gradient(180deg,rgba(246,242,234,1)_0%,rgba(246,242,234,0.62)_28%,rgba(246,242,234,0.18)_62%,rgba(246,242,234,0)_100%)]";
/** …and back out at the bottom. */
export const SECTION_ART_FADE_BOTTOM =
  "absolute inset-x-0 bottom-0 h-24 md:h-28 bg-[linear-gradient(180deg,rgba(246,242,234,0)_0%,rgba(246,242,234,0.18)_38%,rgba(246,242,234,0.62)_72%,rgba(246,242,234,1)_100%)]";

/* Reversed type for a section sitting on artwork. */
export const SECTION_TITLE_ON_ART = "text-[#FFF6EC]";
/** Quiet body copy on artwork — the archive's back link and cap note. */
export const TEXT_MUTED_ON_ART = "text-sm text-[rgba(255,240,225,0.62)]";
export const LINK_ON_ART =
  "text-sm text-[rgba(255,240,225,0.82)] hover:text-[#FFC46B] transition-colors";
export const SECTION_SUBTITLE_ON_ART =
  "text-[rgba(255,240,225,0.72)] text-lg max-w-xl";

/* ---------------------------------------------------------------------------
 * CARDS ON ARTWORK
 *
 * The one place frosted glass is correct rather than lazy: these genuinely sit
 * on a photograph, which is what the effect is for. On the flat paper sections
 * it would just be decoration, which is why it was stripped there.
 * ------------------------------------------------------------------------- */

export const CARD_ON_ART =
  "border-[rgba(255,240,225,0.16)] bg-[rgba(18,12,28,0.55)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[rgba(255,196,107,0.55)] hover:bg-[rgba(18,12,28,0.68)]";
export const CARD_ON_ART_TITLE =
  "text-[#FFF6EC] text-lg flex items-center gap-2";
export const CARD_ON_ART_BODY = "text-[rgba(255,240,225,0.66)] line-clamp-2";
/** Ghost button that reads on artwork. */
export const BUTTON_ON_ART =
  "border border-[rgba(255,240,225,0.42)] bg-transparent text-[#FFF6EC] hover:bg-[rgba(255,240,225,0.14)] transition-colors";

/* ---------------------------------------------------------------------------
 * VIDEO GRID ON ARTWORK
 *
 * A 2x2 block held to the left half of the container instead of a full-width
 * row of three. The point is negative space: it leaves the right of the
 * illustration uncovered so the artwork is part of the composition rather than
 * something the cards sit on top of.
 * ------------------------------------------------------------------------- */

/** Left-hand column that the 2x2 grid and its CTA both live in. */
export const VIDEO_COLUMN = "w-full lg:max-w-3xl";
/** Two-up on tablet and above, single column on a phone. */
export const GRID_VIDEOS_2X2 = "grid grid-cols-1 sm:grid-cols-2 gap-5";
/** CTA aligned to the grid's left edge, not the page centre. */
export const VIDEO_CTA_ROW = "flex justify-start mt-10";

/* ---------------------------------------------------------------------------
 * ABOUT ON ARTWORK
 *
 * No cards. Glass panels over a painting this open would be clutter — the ask
 * was for the content and the artwork to amplify each other, so the copy is
 * set directly on the image and separated by hairlines instead of boxes.
 * The middle four columns are deliberately empty: that is where the sun, the
 * peak and the rower are.
 * ------------------------------------------------------------------------- */

export const ABOUT_GRID =
  "grid grid-cols-1 lg:grid-cols-12 gap-y-12 gap-x-8 items-start";
export const ABOUT_COL_LEFT = "lg:col-span-4";
/** The view. Empty by design — do not put content here. */
export const ABOUT_COL_SPACER = "hidden lg:block lg:col-span-4";
export const ABOUT_COL_RIGHT = "lg:col-span-4";

export const ABOUT_NAME =
  "font-display text-3xl md:text-4xl font-semibold tracking-tight text-[#FFF6EC]";
export const ABOUT_ROLE =
  "mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[rgba(255,240,225,0.62)]";
export const ABOUT_BIO =
  "mt-6 text-[15px] leading-relaxed text-[rgba(255,240,225,0.82)]";
export const ABOUT_AVATAR =
  "w-14 h-14 border border-[rgba(255,240,225,0.35)]";
export const ABOUT_AVATAR_FALLBACK =
  "bg-[rgba(18,12,28,0.6)] text-[#FFF6EC]";
export const ABOUT_IDENTITY_ROW = "flex items-center gap-4";

/** Small pill used for the skill row — quieter than the paper Badge. */
export const ABOUT_SKILL =
  "inline-flex items-center gap-1.5 border border-[rgba(255,240,225,0.22)] bg-[rgba(18,12,28,0.35)] px-2 py-1 text-xs text-[rgba(255,240,225,0.80)]";
export const ABOUT_SKILL_ROW = "mt-6 flex flex-wrap gap-2";
export const ABOUT_SKILL_ICON = "w-3 h-3";

/** Hairline-separated block on the right-hand column. */
export const ABOUT_BLOCK =
  "border-t border-[rgba(255,240,225,0.22)] pt-5 first:border-t-0 first:pt-0";
export const ABOUT_BLOCK_STACK = "space-y-7";
export const ABOUT_BLOCK_LABEL =
  "font-mono text-xs uppercase tracking-[0.18em] text-[rgba(255,240,225,0.55)] mb-3 flex items-center gap-2";
export const ABOUT_STRONG = "text-[#FFF6EC] font-medium";
export const ABOUT_MUTED = "text-sm text-[rgba(255,240,225,0.68)]";
export const ABOUT_STAT_ROW =
  "flex items-baseline justify-between gap-4 text-sm";
export const ABOUT_STAT_VALUE = "tabular font-mono text-[#FFF6EC]";
export const ABOUT_LINK_ROW = "mt-3 flex flex-wrap gap-2";
export const ABOUT_LINK =
  "inline-flex items-center gap-2 border border-[rgba(255,240,225,0.28)] px-3 py-1.5 text-sm text-[rgba(255,240,225,0.88)] hover:border-[#FFC46B] hover:text-[#FFC46B] transition-colors";
export const ABOUT_EMAIL =
  "block text-sm text-[rgba(255,240,225,0.78)] hover:text-[#FFC46B] transition-colors";

/* ---------------------------------------------------------------------------
 * EXPERIENCE ON ARTWORK — the light treatment
 *
 * The lighthouse illustration is pale and high-key, unlike the dusk city and
 * the lake. Reversing cream text onto it would need a scrim heavy enough to
 * destroy the pastel work, so this section inverts the pattern: a PAPER wash
 * over the artwork and ordinary ink type on top. It also ties the illustrated
 * band back to the Workshop body instead of reading as a third dark plate.
 *
 * The wash is graded — near-opaque on the left where the timeline sits,
 * thinning to almost nothing on the right so the lighthouse and the lightning
 * stay legible.
 * ------------------------------------------------------------------------- */

export const SECTION_ART_SCRIM_LEFT =
  "absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,20,0.90)_0%,rgba(12,9,20,0.82)_34%,rgba(12,9,20,0.58)_56%,rgba(12,9,20,0.34)_76%,rgba(12,9,20,0.26)_100%)]";
/** Retained for any future pale artwork that wants the inverted treatment. */
export const SECTION_ART_SCRIM_PAPER =
  "absolute inset-0 bg-[linear-gradient(90deg,rgba(246,242,234,0.94)_0%,rgba(246,242,234,0.88)_38%,rgba(246,242,234,0.62)_60%,rgba(246,242,234,0.34)_80%,rgba(246,242,234,0.22)_100%)]";
/** Paper fades for a light-treated section — top and bottom edges. */
export const SECTION_ART_FADE_TOP_PAPER =
  "absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(246,242,234,1)_0%,rgba(246,242,234,0)_100%)]";
export const SECTION_ART_FADE_BOTTOM_PAPER =
  "absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(246,242,234,0)_0%,rgba(246,242,234,1)_100%)]";

/* Timeline. A single hairline rail with a marker per role, rather than a stack
 * of cards — cards would re-introduce the boxed look the theme removed, and
 * would hide more of the sea than they need to. */

/** Column the timeline occupies; the right of the frame stays open. */
export const EXP_COLUMN = "w-full lg:max-w-4xl";
/** The rail: a vertical hairline the markers sit on. */
export const EXP_RAIL =
  "relative border-l border-[rgba(255,240,225,0.24)] pl-8 md:pl-10 space-y-14";
/** One role. `group` so the marker can respond to hovering the whole entry. */
export const EXP_ENTRY = "relative group";
/** Dot on the rail, aligned to the role title's cap height. */
export const EXP_MARKER =
  "absolute -left-[2.3rem] md:-left-[2.8rem] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-[rgba(255,240,225,0.32)] bg-[rgba(12,9,20,0.85)] transition-colors duration-200 group-hover:border-[#FFC46B]";
export const EXP_MARKER_DOT =
  "h-1.5 w-1.5 rounded-full bg-[rgba(255,240,225,0.55)] transition-colors duration-200 group-hover:bg-[#FFC46B]";
/** Date sits above the title as an eyebrow rather than floating right. */
export const EXP_DATE =
  "font-mono text-xs uppercase tracking-[0.16em] text-[rgba(255,240,225,0.60)]";
export const EXP_ROLE =
  "mt-2 font-display text-2xl md:text-[1.75rem] leading-tight font-semibold text-[#FFF6EC]";
export const EXP_ORG_ROW =
  "mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[rgba(255,240,225,0.70)]";
export const EXP_ORG =
  "text-[#FFF6EC]";
export const EXP_PROGRAM =
  "text-[rgba(255,240,225,0.55)]";
export const EXP_TECH_ROW = "mt-4 flex flex-wrap gap-1.5";
export const EXP_TECH =
  "border border-[rgba(255,240,225,0.24)] bg-[rgba(18,12,28,0.32)] px-2 py-0.5 font-mono text-[11px] text-[rgba(255,240,225,0.78)]";
export const EXP_BULLETS =
  "mt-5 space-y-2.5 text-[15px] leading-relaxed text-[rgba(255,240,225,0.80)]";
export const EXP_BULLET = "flex items-start gap-3";
export const EXP_BULLET_MARK =
  "mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#FFC46B]";

/* ---------------------------------------------------------------------------
 * ACADEMIC JOURNEY ON ARTWORK
 *
 * Mirror image of the Experience treatment. That artwork's subject (the
 * lighthouse) is on the right, so the copy went left. This one's subject — the
 * boy reading with the cat, which is the whole reason it suits an academic
 * section — is on the LEFT, so the copy goes right and the scrim darkens that
 * side instead.
 *
 * The course list is deliberately compact: term header, then one line per
 * course with the grade set right. The previous card-and-tile version was tall
 * enough to cover most of the picture; this occupies roughly a third of the
 * height, so the tree, the swing and the sky above stay visible.
 * ------------------------------------------------------------------------- */

/** Darkens the right where the copy sits; clears left over the reader. */
export const SECTION_ART_SCRIM_RIGHT =
  "absolute inset-0 bg-[linear-gradient(90deg,rgba(12,9,20,0.24)_0%,rgba(12,9,20,0.32)_24%,rgba(12,9,20,0.62)_46%,rgba(12,9,20,0.84)_66%,rgba(12,9,20,0.90)_100%)]";

/** 12-column grid whose left five columns are left empty for the reader. */
export const EDU_GRID = "grid grid-cols-1 lg:grid-cols-12 gap-8";
export const EDU_COL_SPACER = "hidden lg:block lg:col-span-5";
export const EDU_COL_CONTENT = "lg:col-span-7";
export const EDU_STACK = "space-y-10";

export const EDU_TERM_BLOCK =
  "border-t border-[rgba(255,240,225,0.24)] pt-5 first:border-t-0 first:pt-0";
export const EDU_TERM_ROW = "flex flex-wrap items-baseline justify-between gap-2";
export const EDU_TERM =
  "font-display text-xl md:text-2xl font-semibold text-[#FFF6EC]";
export const EDU_TERM_DATES =
  "font-mono text-xs uppercase tracking-[0.16em] text-[rgba(255,240,225,0.55)]";
/** One course: name and code left, grade right, on a single baseline. */
export const EDU_COURSE_LIST = "mt-4 space-y-2.5";
export const EDU_COURSE_ROW =
  "flex items-baseline gap-4 border-b border-[rgba(255,240,225,0.12)] pb-2.5 last:border-b-0";
export const EDU_COURSE_NAME = "text-[15px] text-[#FFF6EC]";
export const EDU_COURSE_CODE =
  "font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(255,240,225,0.50)]";
export const EDU_COURSE_META = "min-w-0 flex-1";
export const EDU_COURSE_GRADE =
  "tabular font-mono text-lg text-[#FFC46B] shrink-0";
export const EDU_COURSE_CREDITS =
  "font-mono text-[11px] text-[rgba(255,240,225,0.45)] shrink-0 w-16 text-right";

/* ---------------------------------------------------------------------------
 * CERTIFICATIONS ON ARTWORK — the light treatment
 *
 * The ship illustration is pale and high-key. Reversed cream type would need a
 * scrim heavy enough to destroy the god-rays, so this section takes the
 * inverted treatment: a paper wash and ordinary ink type. It also lands where
 * the page wants a breather — between two dark plates — so the band lifts
 * rather than piling on more weight.
 *
 * NO CAROUSEL. The old version was an Embla carousel of five image cards. It
 * hid four of the five behind an interaction, needed a client bundle just to
 * scroll, and the images themselves are generic course banners carrying no
 * information the title does not. As a plain list all five are visible at once,
 * the section stops shipping JavaScript, and the picture keeps its right half.
 * ------------------------------------------------------------------------- */

/** Paper wash graded left-heavy, thinning over the ship and the rays. */
export const SECTION_ART_SCRIM_PAPER_LEFT =
  "absolute inset-0 bg-[linear-gradient(90deg,rgba(246,242,234,0.93)_0%,rgba(246,242,234,0.86)_36%,rgba(246,242,234,0.58)_58%,rgba(246,242,234,0.30)_80%,rgba(246,242,234,0.20)_100%)]";

export const CERT_GRID = "grid grid-cols-1 lg:grid-cols-12 gap-8";
export const CERT_COL_CONTENT = "lg:col-span-7";
/** The ship and the rays. Intentionally empty. */
export const CERT_COL_SPACER = "hidden lg:block lg:col-span-5";
export const CERT_LIST = "divide-y divide-[color:var(--line)]";
/** Whole row is the link; `group` drives the hover state. */
export const CERT_ROW =
  "group flex items-baseline gap-4 py-4 first:pt-0 transition-colors";
export const CERT_INDEX =
  "tabular font-mono text-[11px] text-[color:var(--ink-faint)] w-6 shrink-0";
export const CERT_BODY = "block min-w-0 flex-1";
export const CERT_TITLE_ROW = "flex items-center gap-2";
/* CERT_BODY/CERT_CATEGORY/CERT_DESC are spans (an <a> may not contain block
 * elements in valid HTML), so they carry explicit display utilities. */
export const CERT_TITLE =
  "font-display text-lg md:text-xl font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors";
export const CERT_ARROW =
  "h-3.5 w-3.5 shrink-0 text-[color:var(--ink-faint)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[color:var(--accent)]";
export const CERT_CATEGORY =
  "block mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--ink-faint)]";
export const CERT_DESC =
  "block mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]";

/* ---------------------------------------------------------------------------
 * OPEN SOURCE ON ARTWORK — the light treatment, two-up
 *
 * Second pale plate, so it takes the paper wash like the certifications
 * section. It is laid out as a TWO-COLUMN grid rather than a single numbered
 * list specifically so the two light bands do not read as the same section
 * twice — same treatment, different shape.
 *
 * Each entry leads with the repository rather than the PR title: for open
 * source the interesting fact is WHERE the work landed, not what it was
 * called. The merge state and PR number sit together at the foot in the
 * accent, since "merged" is the claim being made.
 * ------------------------------------------------------------------------- */

export const OSS_GRID = "grid grid-cols-1 lg:grid-cols-12 gap-8";
export const OSS_COL_CONTENT = "lg:col-span-8";
/** The delta and the sun. Intentionally empty. */
export const OSS_COL_SPACER = "hidden lg:block lg:col-span-4";
export const OSS_ITEMS = "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7";
export const OSS_ITEM =
  "group block border-t border-[color:var(--line)] pt-4 transition-colors hover:border-[color:var(--accent)]";
export const OSS_REPO =
  "block font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-faint)]";
export const OSS_TITLE =
  "mt-2 block font-display text-lg font-semibold leading-snug text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors";
export const OSS_DESC =
  "mt-2 block text-sm leading-relaxed text-[color:var(--ink-soft)]";
export const OSS_FOOT =
  "mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[color:var(--accent)]";
export const OSS_FOOT_DOT =
  "h-1 w-1 rounded-full bg-[color:var(--accent)]";

/* ---------------------------------------------------------------------------
 * FEATURED PROJECTS ON ARTWORK — the closing plate
 *
 * The last illustration bookends the hero: the same figure and the same cat,
 * out of the city and at rest. It runs behind the footer as well, so the page
 * ends on the view rather than on a bar.
 *
 * Pale artwork, so the paper wash and ink type again. The figure sits right of
 * centre and is protected; the copy takes the waterfall side.
 *
 * THE CARDS LOST THEIR VIDEOS. Each compact trigger card used to embed a
 * YouTube iframe — five of them loading on every page view, for videos already
 * embedded inside the modal each card opens. Removing them from the trigger
 * costs nothing (the video is still one click away, where someone actually
 * wants it) and buys back both the page weight and the artwork.
 * ------------------------------------------------------------------------- */

export const PRJ_GRID = "grid grid-cols-1 lg:grid-cols-12 gap-8";
export const PRJ_COL_CONTENT = "lg:col-span-7";
/** The figure, the cat, the meadow. Intentionally empty. */
export const PRJ_COL_SPACER = "hidden lg:block lg:col-span-5";
export const PRJ_ITEMS = "grid grid-cols-1 md:grid-cols-2 gap-5";
/** Trigger card: paper panel, hairline, lifts and warms on hover. */
export const PRJ_CARD =
  "group flex h-full w-full cursor-pointer flex-col border border-[color:var(--line)] bg-[rgba(255,253,248,0.72)] p-5 text-left backdrop-blur-[2px] transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--accent)] hover:bg-[rgba(255,253,248,0.88)]";
export const PRJ_CARD_TOP = "flex items-start justify-between gap-3";
export const PRJ_BADGE =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--ink-faint)]";
export const PRJ_CARD_ICON = "h-4 w-4 text-[color:var(--ink-faint)]";
export const PRJ_TITLE =
  "mt-3 font-display text-xl font-semibold text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors";
export const PRJ_SUBTITLE = "mt-1 text-sm text-[color:var(--ink-soft)]";
export const PRJ_SUMMARY =
  "mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)] line-clamp-3";
export const PRJ_TAGS = "mt-4 flex flex-wrap gap-1.5";
export const PRJ_TAG =
  "border border-[color:var(--line)] px-1.5 py-0.5 font-mono text-[10px] text-[color:var(--ink-faint)]";
export const PRJ_CTA =
  "mt-auto pt-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--accent)]";
export const PRJ_CTA_ICON =
  "h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5";

/** Footer reversed for the paper wash it now sits on. */
export const FOOTER_ON_ART = "px-6 pb-14 pt-8";

/* ---------------------------------------------------------------------------
 * NON-CLASS CONSTANTS
 * ------------------------------------------------------------------------- */

/** rel value for external buttons/anchors. */
export const REL_EXTERNAL = "noopener noreferrer";
/** rel value used specifically by the two contact email links. */
export const REL_EXTERNAL_SHORT = "noreferrer";
