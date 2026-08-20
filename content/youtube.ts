/**
 * ============================================================================
 * YOUTUBE CONTENT — channel identity and section copy.
 * ============================================================================
 *
 * The video list itself is NOT here: it is fetched at runtime from the
 * channel's public Atom feed by `@/lib/youtube`. This file holds only the
 * things a human chooses — which channel, how many cards, how fresh.
 * ============================================================================
 */

export interface YouTubeChannel {
  /**
   * Canonical channel id (starts with "UC"). This is what the RSS feed keys
   * on — the @handle does NOT work in the feed URL.
   *
   * Resolve a handle to this by loading the channel page and reading
   * `"externalId":"UC..."` out of the markup.
   */
  channelId: string;
  /** Public @handle, used for the "visit channel" link. */
  handle: string;
  /** Channel page URL. */
  url: string;
  /** How many videos to show on the portfolio. */
  displayCount: number;
  /**
   * ISR window in seconds. The page is served statically and refreshed in the
   * background at most this often — visitors never wait on YouTube.
   * 3600 = hourly, which is well inside a daily upload cadence.
   */
  revalidateSeconds: number;
}

export const youtubeChannel: YouTubeChannel = {
  channelId: "UCpXkG3uUft9EEw53NJawIhg",
  handle: "@BigOGrindset",
  url: "https://www.youtube.com/@BigOGrindset",
  displayCount: 4,
  revalidateSeconds: 3600,
};

export interface YouTubeSectionCopy {
  id: string;
  heading: string;
  subheading: string;
  /** Label on the link out to the channel. */
  ctaLabel: string;
}

export const youtubeSection: YouTubeSectionCopy = {
  id: "youtube",
  heading: "Latest Videos",
  subheading: "Building in public on YouTube",
  ctaLabel: "See all videos",
};

/** Copy for the dedicated /videos archive page. */
export const youtubeArchive = {
  route: "/videos",
  title: "All Videos",
  subtitle: "Every episode of building in public",
  backLabel: "Back to portfolio",
  channelCtaLabel: "Watch on YouTube",
  /**
   * Shown under the grid. The Atom feed caps at 15 entries with no paging, so
   * anything older than that is only reachable on YouTube itself.
   */
  olderNote:
    "YouTube's public feed serves the 15 most recent uploads. Earlier episodes live on the channel.",
} as const;
