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
 * `hover:bg-white/[0.06]` into `hover:bg-white/[0.07]`) — several near-identical
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
export const PAGE_CONTENT = "relative z-10 pt-12";

/* ---------------------------------------------------------------------------
 * NAVIGATION BAR
 * ------------------------------------------------------------------------- */

/** Fixed translucent nav bar. (1x) */
export const NAV_BAR =
  "fixed top-0 w-full z-50 backdrop-blur-xl bg-background/90 border-b border-white/10";
/** Nav inner container — note it carries its own px/py, unlike SECTION_CONTAINER. (1x) */
export const NAV_INNER = "max-w-7xl mx-auto px-6 py-4";
/** Brand / links / CTA row. (1x) */
export const NAV_ROW = "flex items-center justify-between";
/** Wordmark. (1x) */
export const NAV_BRAND = "text-xl font-bold text-white";
/** Desktop-only anchor list. (1x) */
export const NAV_LINK_ROW = "hidden lg:flex items-center gap-8";
/** A single nav anchor. (5x) */
export const NAV_LINK = "text-sm text-white/80 hover:text-white transition-colors";
/** The "Contact" Button in the nav. (1x) */
export const NAV_CTA_BUTTON = "bg-transparent border border-white/10 text-white";

/* ---------------------------------------------------------------------------
 * SECTION SHELL + HEADER
 * ------------------------------------------------------------------------- */

/** Standard <section> padding. (4x) */
export const SECTION_SHELL = "py-20 px-6";
/**
 * First section only ("About Me") — extra top padding clears the fixed nav.
 * MUST stay distinct from SECTION_SHELL. (1x)
 */
export const SECTION_SHELL_FIRST = "pt-32 pb-20 px-6";
/** Max-width container inside every section and the footer. (6x) */
export const SECTION_CONTAINER = "max-w-7xl mx-auto";

/** Centered heading block wrapper. (5x) */
export const SECTION_HEADER_WRAP = "text-center mb-16";
/** Section <h2>. (5x) */
export const SECTION_TITLE = "text-4xl md:text-5xl font-bold mb-4";
/** The <span> inside the <h2> that carries the title colour. (5x) */
export const SECTION_TITLE_ACCENT = "text-white";
/** Optional subtitle <p> under the section title. (4x — "About Me" has none.) */
export const SECTION_SUBTITLE = "text-slate-400 text-lg";

/* ---------------------------------------------------------------------------
 * CARD SURFACES (the "glass" look)
 *
 * Two hover shades exist in the original and they are NOT interchangeable:
 *   CARD_SURFACE       -> hover:bg-white/[0.07]  (default, 15x)
 *   CARD_SURFACE_SOFT  -> hover:bg-white/[0.06]  (About cards + projects-a
 *                                                 dialog triggers, 6x)
 * The composites below are exact concatenations of a base + its extra
 * utilities, in the original's order.
 * ------------------------------------------------------------------------- */

/** Default glass card surface. (2x bare, 15x as a prefix) */
export const CARD_SURFACE =
  "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300";
/** Glass card surface with the dimmer hover tint. (used by About + projects-a) */
export const CARD_SURFACE_SOFT =
  "bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-all duration-300";

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
export const PANEL_TILE = "p-4 rounded-lg bg-white/5 border border-white/10";
/** Round icon chip in a card header. (2x) */
export const ICON_CIRCLE =
  "w-12 h-12 rounded-full bg-white/10 flex items-center justify-center";

/* ---------------------------------------------------------------------------
 * BADGES
 * ------------------------------------------------------------------------- */

/** Filled pill — skills, status, category, dialog title badge. (32x) */
export const BADGE_SOLID = "bg-white/5 text-white/80 border-white/10";
/** Brighter pill used on top of imagery — certification category overlay. (5x) */
export const BADGE_SOLID_OVERLAY = "bg-white/20 text-white/80 border-white/50";
/** Outline pill — tech-stack tags in detail modals. (53x) */
export const BADGE_OUTLINE = "border-white/10 text-white/80 bg-transparent";
/** Outline pill, small — tech-stack tags on compact cards. (46x) */
export const BADGE_OUTLINE_SM = `${BADGE_OUTLINE} text-xs`;
/** Outline pill with no explicit background — Open Source repo slug. (6x) */
export const BADGE_OUTLINE_QUIET = "border-white/10 text-white/80";
/**
 * De-emphasised pill. Appears exactly ONCE in the original (the
 * "Mobile Computing Technology" grade badge) and deliberately drops the
 * border utility. Use as a full REPLACEMENT for BADGE_SOLID, never merged. (1x)
 */
export const BADGE_MUTED = "bg-slate-700 text-slate-300";
/** Leading icon inside a filled pill. (9x) */
export const BADGE_ICON = "w-3 h-3 mr-1";

/* ---------------------------------------------------------------------------
 * BUTTONS + LINKS
 * ------------------------------------------------------------------------- */

/** Outline button. (3x) */
export const BUTTON_OUTLINE = "border-white/20 hover:bg-white/10";
/** Outline button, full width. (6x) */
export const BUTTON_OUTLINE_FULL = "w-full border-white/20 hover:bg-white/10";
/** Ghost/bordered full-width button. (2x — projects-b "View Details") */
export const BUTTON_GHOST_FULL = "w-full bg-transparent border border-white/10 text-white";
/** Ghost/bordered full-width button, bold label. (8x — GitHub CTA, projects-a "View Details") */
export const BUTTON_GHOST_FULL_STRONG = `${BUTTON_GHOST_FULL} font-semibold`;

/** Anchor content laid out inline with its icons. (3x) */
export const LINK_ROW = "flex items-center gap-2";
/** Anchor content centered inside a full-width button. (11x) */
export const LINK_ROW_CENTERED = "flex items-center justify-center gap-2";
/** Small accent text link — email addresses. (2x) */
export const LINK_ACCENT_SM = "text-white hover:text-white/80 transition-colors text-sm";
/** Muted icon link — footer socials. (3x) */
export const LINK_MUTED = "text-slate-400 hover:text-white transition-colors";

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
export const ICON_SM_ACCENT = "w-4 h-4 text-white";
/** Medium accent icon — CardTitle icons. (2x) */
export const ICON_MD_ACCENT = "w-5 h-5 text-white";
/** Medium accent icon nudged down to align with a wrapping title. (6x) */
export const ICON_MD_ACCENT_OFFSET = "w-5 h-5 mt-1 text-white";
/** Medium accent icon, dimmed — the Star on project cards. (5x) */
export const ICON_MD_ACCENT_SOFT = "w-5 h-5 text-white/80";
/** Large accent icon — icon-circle glyphs, award banner. (3x) */
export const ICON_LG_ACCENT = "w-6 h-6 text-white";
/** Trailing icon with left margin — ArrowRight on "View Details". (5x) */
export const ICON_TRAILING = "w-4 h-4 ml-2";
/** Icon revealed only on card hover — certification ExternalLink. (5x) */
export const ICON_HOVER_REVEAL =
  "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity";

/* ---------------------------------------------------------------------------
 * TYPOGRAPHY
 * ------------------------------------------------------------------------- */

/** Plain accent text — the default foreground for headings and values. (8x) */
export const TEXT_ACCENT = "text-white";
/** Emphasised accent text — course names, stat values, list leads. (11x) */
export const TEXT_STRONG = "text-white font-semibold";
/** Muted secondary text. (2x) */
export const TEXT_MUTED = "text-slate-400";
/**
 * Muted small text, size-first utility order. (9x — course codes.)
 * NOTE: TEXT_MUTED_SM_ALT below is the SAME utilities in the other order; both
 * spellings exist in the original and are kept apart for byte fidelity.
 */
export const TEXT_MUTED_SM = "text-sm text-slate-400";
/** Muted small text, colour-first utility order. (3x — degree line, footer tagline.) */
export const TEXT_MUTED_SM_ALT = "text-slate-400 text-sm";
/** Faint fine print — credit counts. (8x) */
export const TEXT_FAINT_XS = "text-xs text-slate-500";
/** Muted body copy in cards. (11x) */
export const TEXT_BODY_MUTED = "text-slate-400 text-sm leading-relaxed";
/** Muted relaxed paragraph — the About bio. (1x) */
export const TEXT_BODY_MUTED_LG = "text-slate-400 leading-relaxed";
/** Light body copy in detail modals. (5x) */
export const TEXT_BODY_LIGHT = "text-slate-300 leading-relaxed";
/** Two-line-clamped muted description on compact cards. (4x) */
export const TEXT_CLAMP_MUTED = "text-slate-400 line-clamp-2";
/** Two-line-clamped light description — Odysseyelp only. (1x) */
export const TEXT_CLAMP_LIGHT = "text-slate-300 line-clamp-2";
/** Clamped summary blurb under a card video. (5x) */
export const TEXT_CARD_SUMMARY = "text-slate-400 text-sm line-clamp-2 mb-4";
/** Light text row with a leading icon — the location line. (1x) */
export const TEXT_ROW_LIGHT = "flex items-center gap-2 text-slate-300";

/* ---------------------------------------------------------------------------
 * CARD TITLES + SUB-HEADINGS
 * ------------------------------------------------------------------------- */

/** CardTitle with a leading icon, centered. (2x) */
export const CARD_TITLE_ICON = "text-white flex items-center gap-2";
/** Large CardTitle with a trailing icon, centered. (5x) */
export const CARD_TITLE_LG_ICON = "text-white text-lg flex items-center gap-2";
/** Large CardTitle with a leading icon, top-aligned for wrapping titles. (6x) */
export const CARD_TITLE_LG_ICON_TOP = "text-white text-lg flex items-start gap-2";
/** Extra-large CardTitle on compact project cards. (5x) */
export const CARD_TITLE_XL = "text-white text-xl mb-2";
/** Display CardTitle — the profile name. (1x) */
export const CARD_TITLE_DISPLAY = "text-4xl mb-2 text-white align-middle";

/** h4 sub-heading with a leading icon. (13x) */
export const SUBHEADING_ICON = "text-white font-semibold mb-2 flex items-center gap-2";
/** h4 sub-heading without an icon — "Technology Stack". (5x) */
export const SUBHEADING_PLAIN = "text-white font-semibold mb-3";
/** Inline strong heading with an icon and no bottom margin — award banner title. (3x) */
export const SUBHEADING_INLINE_ICON = "text-white font-semibold flex items-center gap-2";

/* ---------------------------------------------------------------------------
 * DIALOG (project detail modals)
 * ------------------------------------------------------------------------- */

/** DialogContent panel. (5x) */
export const DIALOG_PANEL =
  "max-w-7xl sm:max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-black border-white/10";
/** DialogTitle row — title text + inline badge. (5x) */
export const DIALOG_TITLE = "text-3xl text-white flex items-center gap-3";
/** DialogDescription. (5x) */
export const DIALOG_DESCRIPTION = "text-lg text-slate-300";
/** Modal body stack — projects-b. (2x) */
export const DIALOG_BODY = "space-y-6";
/** Modal body stack with a top offset — projects-a. (3x) */
export const DIALOG_BODY_OFFSET = "space-y-6 mt-4";

/* ---------------------------------------------------------------------------
 * MEDIA (images + video embeds)
 * ------------------------------------------------------------------------- */

/** Fixed-height image frame at the top of a certification card. (5x) */
export const MEDIA_FRAME = "relative h-48 overflow-hidden bg-white/10";
/** The <img> inside MEDIA_FRAME — zooms when the card's `group` is hovered. (5x) */
export const MEDIA_IMAGE =
  "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500";
/** Darkening scrim over MEDIA_IMAGE. (5x) */
export const MEDIA_SCRIM = "absolute inset-0 bg-black/40";
/** Slot pinned to the bottom-left of MEDIA_FRAME for the category badge. (5x) */
export const MEDIA_OVERLAY_SLOT = "absolute bottom-4 left-4";

/** 16:9 video frame in a detail modal. (5x) */
export const VIDEO_FRAME =
  "relative w-full aspect-video rounded-lg overflow-hidden border border-white/10";
/** 16:9 video frame on a compact card. (2x) */
export const VIDEO_FRAME_CARD = `${VIDEO_FRAME} mb-4`;
/** 16:9 video frame on a compact card, black-backed. (3x) */
export const VIDEO_FRAME_CARD_DARK = `${VIDEO_FRAME} mb-4 bg-black`;
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
export const BULLET_LIST = "text-slate-300 leading-relaxed space-y-2";
/** <li> inside BULLET_LIST. (41x) */
export const BULLET_ITEM = "flex items-start gap-2";
/** The "•" <span> inside a BULLET_ITEM. (41x) */
export const BULLET_MARK = "text-white mt-1";

/* ---------------------------------------------------------------------------
 * SEPARATORS
 * ------------------------------------------------------------------------- */

/** Hairline rule. (4x) */
export const SEPARATOR = "bg-white/10";
/** Hairline rule with generous vertical margin — footer. (1x) */
export const SEPARATOR_SPACED = "my-8 bg-white/10";

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
export const CAROUSEL_CONTROL = "bg-white/10 border-white/20 hover:bg-white/20";
/** Dot indicator row. (1x) */
export const CAROUSEL_INDICATORS = "mt-8";

/* ---------------------------------------------------------------------------
 * AVATAR (profile card)
 * ------------------------------------------------------------------------- */

/** Avatar ring. (1x) */
export const AVATAR = "w-24 h-24 border-2 border-white/10";
/** Avatar initials fallback. (1x) */
export const AVATAR_FALLBACK = "bg-white/10 text-white text-2xl";

/* ---------------------------------------------------------------------------
 * FOOTER
 * ------------------------------------------------------------------------- */

/** Footer shell. (1x) */
export const FOOTER = "py-12 px-6 border-t border-white/10";
/** Footer content row. (1x) */
export const FOOTER_ROW =
  "flex flex-col md:flex-row items-center justify-between gap-6";
/** Footer brand block alignment. (1x) */
export const FOOTER_BRAND_BLOCK = "text-center md:text-left";
/** Footer wordmark. (1x) */
export const FOOTER_BRAND = "text-xl font-bold text-white mb-2";
/** Footer social icon row. (1x) */
export const FOOTER_SOCIAL_ROW = "flex items-center gap-4";
/** Footer copyright line. (1x) */
export const FOOTER_LEGAL = "text-center text-slate-500 text-sm";

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
export const EXPERIENCE_ROLE_TITLE = "text-white text-lg";
/** Employer + program badges directly under the role title. (new) */
export const EXPERIENCE_META_ROW = "flex flex-wrap items-center gap-2 mt-1";

/* ---------------------------------------------------------------------------
 * MOBILE NAV
 * ------------------------------------------------------------------------- */

/** Hamburger / close button, shown only below the desktop breakpoint. (new) */
export const NAV_MOBILE_TOGGLE =
  "lg:hidden -mr-2 p-2 text-white/80 hover:text-white transition-colors";
/** Expanded mobile panel holding the stacked links. (new) */
export const NAV_MOBILE_PANEL =
  "lg:hidden flex flex-col gap-1 border-t border-white/10 pt-3 pb-2";
/** One stacked link inside the mobile panel. (new) */
export const NAV_MOBILE_LINK =
  "py-2 text-sm text-white/80 hover:text-white transition-colors";

/* ---------------------------------------------------------------------------
 * SECTION CTA
 * ------------------------------------------------------------------------- */

/** Centred call-to-action row below a section's grid. (new) */
export const SECTION_CTA_ROW = "flex justify-center mt-12";

/* ---------------------------------------------------------------------------
 * NON-CLASS CONSTANTS
 * ------------------------------------------------------------------------- */

/** rel value for external buttons/anchors. */
export const REL_EXTERNAL = "noopener noreferrer";
/** rel value used specifically by the two contact email links. */
export const REL_EXTERNAL_SHORT = "noreferrer";
