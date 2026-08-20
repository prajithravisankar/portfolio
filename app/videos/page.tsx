import Link from "next/link";
import { ArrowLeft, ExternalLink, Youtube } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { VideoCard } from "@/components/portfolio/VideoCard";
import {
  BUTTON_ON_ART,
  GRID_CARDS_3,
  ICON_XS,
  LINK_ROW_CENTERED,
  LINK_ON_ART,
  PAGE_BACKDROP,
  PAGE_BACKDROP_INNER,
  PAGE_CONTENT,
  PAGE_ROOT,
  REL_EXTERNAL,
  ROW_ICON,
  SECTION_CONTAINER,
  SECTION_CTA_ROW,
  SECTION_SHELL,
  TEXT_MUTED_ON_ART,
} from "@/components/portfolio/tokens";
import { sectionArt } from "@/content/section-art";
import { youtubeArchive, youtubeChannel } from "@/content/youtube";
import { getAllVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "All Videos",
  description: "Every episode of building in public on YouTube.",
};

/**
 * The /videos archive.
 *
 * Shows everything the channel's public Atom feed exposes (15 entries, the
 * feed's hard cap — it offers no paging parameter). Anything older is only
 * reachable on YouTube, which the note under the grid says plainly rather than
 * quietly implying this is the complete back catalogue.
 *
 * Inherits the same ISR window as the homepage section, since both read
 * through `@/lib/youtube`.
 */
export default async function VideosPage() {
  const videos = await getAllVideos();

  return (
    <div className={PAGE_ROOT}>
      <div className={PAGE_BACKDROP}>
        <div className={PAGE_BACKDROP_INNER} />
      </div>

      <SectionBackdrop
        art={sectionArt.videos}
        fixed
        fadeTop={false}
        fadeBottom={false}
        className={PAGE_CONTENT}
      >
        <section className={SECTION_SHELL}>
          <div className={SECTION_CONTAINER}>
            <Link href="/" className={`${LINK_ON_ART} ${ROW_ICON}`}>
              <ArrowLeft className={ICON_XS} />
              {youtubeArchive.backLabel}
            </Link>

            <SectionHeader
              title={youtubeArchive.title}
              subtitle={youtubeArchive.subtitle}
              onArt
            />

            {videos.length > 0 ? (
              <>
                <div className={GRID_CARDS_3}>
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} onArt />
                  ))}
                </div>
                <p className={`${TEXT_MUTED_ON_ART} text-center mt-10`}>
                  {youtubeArchive.olderNote}
                </p>
              </>
            ) : (
              <p className={`${TEXT_MUTED_ON_ART} text-center`}>
                {youtubeArchive.olderNote}
              </p>
            )}

            <div className={SECTION_CTA_ROW}>
              <Button variant="outline" className={BUTTON_ON_ART} asChild>
                <a
                  href={youtubeChannel.url}
                  target="_blank"
                  rel={REL_EXTERNAL}
                  className={LINK_ROW_CENTERED}
                >
                  <Youtube className={ICON_XS} />
                  {youtubeArchive.channelCtaLabel}
                  <ExternalLink className={ICON_XS} />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </SectionBackdrop>
    </div>
  );
}
