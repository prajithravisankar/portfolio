"use client";

import { useState } from "react";
import { Play } from "lucide-react";

import {
  FACADE_FRAME,
  FACADE_PLAY_BADGE,
  FACADE_PLAY_ICON,
  FACADE_THUMB,
} from "@/components/portfolio/tokens";

/**
 * Click-to-play YouTube facade.
 *
 * FIFTEEN EAGER IFRAMES WAS NEVER AN OPTION. Each YouTube embed pulls roughly
 * half a megabyte of player JavaScript; a page of fifteen would ship ~7 MB of
 * third-party script before anyone watched anything. So until clicked, a row
 * costs one lazy-loaded thumbnail. On click the thumbnail swaps for an iframe
 * that starts at the row's first timestamp.
 *
 * The iframe carries allow="autoplay; encrypted-media" — without it browsers
 * ignore the autoplay=1 that makes the click feel like "play" rather than
 * "load, then click again". youtube-nocookie.com keeps the pre-click page free
 * of YouTube cookies.
 *
 * The frame reserves 16:9 before and after the swap, so nothing shifts.
 */
export interface VideoFacadeProps {
  videoId: string;
  /** Accessible name for the play control, e.g. "Play Day 16 session video". */
  title: string;
  /** Embed start offset in seconds. */
  startSeconds?: number;
}

export function VideoFacade({
  videoId,
  title,
  startSeconds = 0,
}: VideoFacadeProps) {
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    return (
      <div className={FACADE_FRAME}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?start=${startSeconds}&autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={`${FACADE_FRAME} group cursor-pointer`}
      onClick={() => setIsActive(true)}
      aria-label={title}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        className={FACADE_THUMB}
        loading="lazy"
        decoding="async"
      />
      <span className={FACADE_PLAY_BADGE} aria-hidden="true">
        <Play className={FACADE_PLAY_ICON} />
      </span>
    </button>
  );
}

export default VideoFacade;
