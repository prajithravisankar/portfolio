import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { YouTubeVideo } from "@/lib/youtube";
import {
  BADGE_SOLID_OVERLAY,
  CARD_LINK_WRAP,
  CARD_ON_ART,
  CARD_ON_ART_BODY,
  CARD_ON_ART_TITLE,
  CARD_SURFACE_MEDIA,
  CARD_TITLE_LG_ICON,
  ICON_HOVER_REVEAL,
  MEDIA_FRAME,
  MEDIA_IMAGE,
  MEDIA_OVERLAY_SLOT,
  MEDIA_SCRIM,
  REL_EXTERNAL,
  TEXT_CLAMP_MUTED,
} from "@/components/portfolio/tokens";

/**
 * One recent-upload card. Deliberately built from the same tokens as
 * CertificationCard so the two media grids read as one system and re-theme
 * together.
 *
 * Like the certification cards, this uses a plain <img> rather than
 * next/image: the thumbnails are remote (i.ytimg.com) and next/image would
 * require a `remotePatterns` entry in next.config plus an optimizer round-trip
 * for images YouTube already serves at exactly the size we display.
 *
 * Presentational only — no hooks, no handlers, so no "use client".
 */

/**
 * Fixed locale and time zone so the server-rendered string is deterministic.
 * Formatting with the machine's locale would make the ISR-cached HTML depend
 * on which machine happened to render it.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export interface VideoCardProps {
  video: YouTubeVideo;
  /**
   * Render for a section sitting on full-bleed artwork: translucent dark card
   * instead of paper, reversed type, and a lift on hover.
   */
  onArt?: boolean;
}

export function VideoCard({ video, onArt = false }: VideoCardProps) {
  const { url, title, thumbnail, description, published } = video;
  const publishedLabel = DATE_FORMAT.format(new Date(published));

  return (
    <a href={url} target="_blank" rel={REL_EXTERNAL} className={CARD_LINK_WRAP}>
      <Card className={onArt ? `${CARD_ON_ART} h-full overflow-hidden group cursor-pointer` : CARD_SURFACE_MEDIA}>
        <div className={MEDIA_FRAME}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={title}
            className={MEDIA_IMAGE}
            loading="lazy"
            decoding="async"
          />
          <div className={MEDIA_SCRIM}></div>
          <div className={MEDIA_OVERLAY_SLOT}>
            <Badge className={BADGE_SOLID_OVERLAY}>
              <time dateTime={published}>{publishedLabel}</time>
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className={onArt ? CARD_ON_ART_TITLE : CARD_TITLE_LG_ICON}>
            {title}
            <ExternalLink className={ICON_HOVER_REVEAL} />
          </CardTitle>
        </CardHeader>
        {description ? (
          <CardContent>
            <p className={onArt ? CARD_ON_ART_BODY : TEXT_CLAMP_MUTED}>{description}</p>
          </CardContent>
        ) : null}
      </Card>
    </a>
  );
}

export default VideoCard;
