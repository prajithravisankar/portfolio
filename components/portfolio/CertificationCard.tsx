import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BADGE_SOLID_OVERLAY,
  CARD_LINK_WRAP,
  CARD_SURFACE_MEDIA,
  CARD_TITLE_LG_ICON,
  ICON_HOVER_REVEAL,
  MEDIA_FRAME,
  MEDIA_IMAGE,
  MEDIA_OVERLAY_SLOT,
  MEDIA_SCRIM,
  REL_EXTERNAL,
  TEXT_BODY_MUTED,
} from "@/components/portfolio/tokens";
import type { Certification } from "@/content/certifications";

/**
 * One certification card: the whole card is a single external link.
 *
 * Renders exactly what the original page.tsx rendered for each
 * <CarouselItem> body — the wrapping <a>, the fixed-height image frame with
 * its darkening scrim and bottom-left category badge, the title row with the
 * hover-revealed ExternalLink glyph, and the description paragraph. The
 * <CarouselItem> wrapper itself belongs to <CertificationsSection>.
 *
 * The original used a plain <img>, NOT next/image, so this does too — swapping
 * in next/image would change the emitted markup and the layout behaviour.
 *
 * Presentational only: no hooks, no handlers, so no "use client" is needed.
 */
export interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { url, image, imageAlt, category, title, description } = certification;
  // Every card in the original shows the same ExternalLink glyph. `icon` is a
  // forward-looking per-item override that no current entry sets, so this
  // resolves to ExternalLink for all five cards.
  const Icon = certification.icon ?? ExternalLink;

  return (
    <a
      href={url}
      target="_blank"
      rel={REL_EXTERNAL}
      className={CARD_LINK_WRAP}
    >
      <Card className={CARD_SURFACE_MEDIA}>
        <div className={MEDIA_FRAME}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={imageAlt} className={MEDIA_IMAGE} />
          <div className={MEDIA_SCRIM}></div>
          <div className={MEDIA_OVERLAY_SLOT}>
            <Badge className={BADGE_SOLID_OVERLAY}>{category}</Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className={CARD_TITLE_LG_ICON}>
            {title}
            <Icon className={ICON_HOVER_REVEAL} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className={TEXT_BODY_MUTED}>{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}

export default CertificationCard;
