import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { VideoCard } from "@/components/portfolio/VideoCard";
import {
  BUTTON_OUTLINE,
  GRID_CARDS_3,
  ICON_XS,
  LINK_ROW_CENTERED,
  SECTION_CONTAINER,
  SECTION_CTA_ROW,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";
import { youtubeArchive, youtubeSection } from "@/content/youtube";
import { getRecentVideos } from "@/lib/youtube";

/**
 * The "Latest Videos" section (#youtube).
 *
 * ASYNC SERVER COMPONENT. It awaits the channel's public Atom feed, which is
 * fetched with `next: { revalidate }` — so this route is served statically and
 * refreshed in the background on the ISR window from `@/content/youtube`.
 * Visitors are never blocked on YouTube.
 *
 * GRACEFUL DEGRADATION: `getRecentVideos` swallows network and parse failures
 * and returns []. When that happens this renders NOTHING — no empty heading,
 * no error state, no layout hole. A portfolio should not advertise that its
 * video feed is broken.
 */
export async function YouTubeSection() {
  const videos = await getRecentVideos();

  if (videos.length === 0) return null;

  return (
    <section id={youtubeSection.id} className={SECTION_SHELL}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader
          title={youtubeSection.heading}
          subtitle={youtubeSection.subheading}
        />

        <div className={GRID_CARDS_3}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className={SECTION_CTA_ROW}>
          <Button variant="outline" className={BUTTON_OUTLINE} asChild>
            <Link href={youtubeArchive.route} className={LINK_ROW_CENTERED}>
              {youtubeSection.ctaLabel}
              <ArrowRight className={ICON_XS} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default YouTubeSection;
