import { youtubeChannel } from "@/content/youtube";

/**
 * ============================================================================
 * YOUTUBE — recent uploads via the channel's public Atom feed.
 * ============================================================================
 *
 * WHY RSS AND NOT THE DATA API: recent uploads are public, so this needs no
 * API key, no OAuth, and burns no quota. (The "now playing on Spotify" widgets
 * this pattern is borrowed from DO need OAuth, because listening history is
 * private user data. YouTube uploads are not.)
 *
 *   https://www.youtube.com/feeds/videos.xml?channel_id=UC...
 *
 * The feed returns the 15 most recent uploads. There is no way to ask for
 * more; for deeper history you would need the Data API v3.
 *
 * CACHING: ISR. The fetch is tagged `revalidate`, so the page stays statically
 * served and Next refreshes it in the background at most once per interval.
 * Visitors never wait on YouTube.
 *
 * FAILURE POLICY: this is decorative content on a portfolio. If YouTube is
 * unreachable or changes the feed shape, `getRecentVideos` returns an empty
 * array and the section renders nothing. It must never take the page down.
 * ============================================================================
 */

/** One video parsed out of the Atom feed. */
export interface YouTubeVideo {
  /** 11-character video id, e.g. "slKoGsLEV24". */
  id: string;
  title: string;
  /** Watch URL. */
  url: string;
  /** Thumbnail URL on i.ytimg.com (480x360; 16:9 content is letterboxed). */
  thumbnail: string;
  /** ISO-8601 publish timestamp. */
  published: string;
  /** First paragraph of the description, trimmed for card display. */
  description: string;
}

/** Minimal XML entity decoding — feed titles carry &amp;, &#39; and friends. */
function decodeEntities(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code: string) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    // &amp; must be last so "&amp;lt;" does not double-decode.
    .replace(/&amp;/g, "&");
}

function firstMatch(source: string, pattern: RegExp): string | undefined {
  const match = source.match(pattern);
  return match?.[1];
}

/**
 * Condense a YouTube description into something card-sized: take the text up
 * to the first blank line, collapse whitespace, and hard-cap the length so a
 * pathological description cannot blow out the layout.
 */
function summarize(description: string, maxLength = 160): string {
  const firstBlock = description.split(/\n\s*\n/)[0] ?? "";
  const collapsed = firstBlock.replace(/\s+/g, " ").trim();
  if (collapsed.length <= maxLength) return collapsed;
  const clipped = collapsed.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : maxLength).trimEnd()}…`;
}

/** Parse the Atom feed. Exported so it can be unit-tested without network. */
export function parseFeed(xml: string): YouTubeVideo[] {
  const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) ?? [];

  return entries.flatMap((entry) => {
    const id = firstMatch(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
    const title = firstMatch(entry, /<title>([\s\S]*?)<\/title>/);
    const published = firstMatch(entry, /<published>([^<]+)<\/published>/);
    const thumbnail = firstMatch(entry, /<media:thumbnail[^>]*url="([^"]+)"/);

    // A malformed entry is skipped rather than rendered half-built.
    if (!id || !title || !published) return [];

    const description =
      firstMatch(entry, /<media:description>([\s\S]*?)<\/media:description>/) ??
      "";

    return [
      {
        id,
        title: decodeEntities(title).trim(),
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnail: thumbnail ?? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        published,
        description: summarize(decodeEntities(description)),
      },
    ];
  });
}

/**
 * Fetch the channel's most recent uploads.
 *
 * @param limit how many videos to return, newest first.
 * @returns the videos, or `[]` if the feed could not be read.
 */
export async function getRecentVideos(
  limit: number = youtubeChannel.displayCount,
): Promise<YouTubeVideo[]> {
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannel.channelId}`;

  try {
    const response = await fetch(feedUrl, {
      // ISR: serve statically, refresh in the background at most this often.
      next: { revalidate: youtubeChannel.revalidateSeconds },
    });

    if (!response.ok) {
      console.error(
        `[youtube] feed responded ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const videos = parseFeed(await response.text());
    return Number.isFinite(limit) ? videos.slice(0, limit) : videos;
  } catch (error) {
    console.error("[youtube] failed to load feed:", error);
    return [];
  }
}

/**
 * Every video the feed exposes, newest first.
 *
 * NOTE: YouTube's Atom feed returns at most 15 entries and offers no paging
 * parameter, so this is "everything publicly reachable without an API key",
 * not necessarily the channel's entire back catalogue. Older uploads require
 * the YouTube Data API v3 (API key + quota) via the channel's uploads
 * playlist, whose id is the channel id with the "UC" prefix swapped for "UU".
 */
export async function getAllVideos(): Promise<YouTubeVideo[]> {
  return getRecentVideos(Number.POSITIVE_INFINITY);
}

/**
 * The current "Day N" of the building-in-public series, read from the most
 * recent video title (e.g. "Until I Get a Job — Day 28 | ...").
 *
 * This is a live proof-of-work number: it goes up on its own every time a
 * video is published, with nothing to edit by hand. That is the entire point
 * of deriving it rather than hardcoding it — a stale counter is worse than no
 * counter.
 *
 * @returns the highest day number found across recent uploads, or null if the
 * feed is unreachable or no title matches the pattern. Callers must handle
 * null by hiding the counter rather than printing a zero.
 */
export async function getBuildingInPublicDay(): Promise<number | null> {
  const videos = await getAllVideos();

  const days = videos
    .map((video) => video.title.match(/\bDay\s+(\d{1,4})\b/i)?.[1])
    .filter((day): day is string => Boolean(day))
    .map(Number)
    .filter((day) => Number.isFinite(day) && day > 0);

  return days.length > 0 ? Math.max(...days) : null;
}
