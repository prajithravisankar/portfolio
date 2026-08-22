import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { VideoFacade } from "@/components/portfolio/VideoFacade";
import { SiteNav } from "@/components/sections/SiteNav";
import { sectionArt } from "@/content/section-art";
import { buildChapters, mlhPage, sessionsById } from "@/content/mlh-jwt";
import {
  ICON_XS,
  MLH_CHAPTER_LABEL,
  MLH_CHAPTER_RANGE,
  MLH_CHAPTER_HEAD,
  MLH_CHIP,
  MLH_CHIP_ROW,
  MLH_CHIP_TS,
  MLH_DAY,
  MLH_FOOTNOTE,
  MLH_HERO,
  MLH_INTRO,
  MLH_LINK,
  MLH_LINK_ROW,
  MLH_LOGO,
  MLH_NARRATIVE,
  MLH_OUTRO,
  MLH_OUTRO_LINK,
  MLH_ROW,
  MLH_ROW_MEDIA,
  MLH_ROW_TEXT,
  MLH_SUBTITLE,
  MLH_TITLE,
  PAGE_ROOT,
  MLH_BACK_LINK,
  REL_EXTERNAL,
  ROW_ICON,
  SECTION_ART_SCRIM,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

export const metadata: Metadata = {
  title: mlhPage.title,
  description:
    "MLH Software Engineering Fellowship code sample: a JSON Web Token library written from scratch in pure Python, with every build session screen-recorded and each step linked to the exact video and timestamp.",
};

/**
 * The MLH fellowship submission: a session log mapping what was done
 * (narrative, left) to the exact video and timestamp where it happened
 * (facade + chips, right).
 *
 * FOUR SKIES, ONE SKYLINE. The four backdrops are the same view of Manhattan
 * under four lighting states, and they are mapped to the log's own arc rather
 * than to clock time — dawn for setup, storm for the days decode would not
 * work, clear sky for the encode API going in cleanly, dusk for the finish.
 * Day 9's narrative is "ending with the test suite still failing"; Day 16's is
 * "the day the decoder got finished". The storm sits over exactly those two.
 *
 * VIDEOS ARE FACADES. Fifteen eager YouTube embeds would ship roughly 7 MB of
 * player script. Until clicked, a row costs one lazy thumbnail. Chips link out
 * to youtube.com at the exact second; the inline player starts at the row's
 * first moment.
 *
 * The nav is the site's own, which works here because its section anchors are
 * path-aware — see SiteNav. A judge landing on this URL cold can reach the
 * rest of the portfolio, and the outro sends them back deliberately.
 */
export default function MlhSubmissionPage() {
  return (
    <div className={PAGE_ROOT}>
      <SiteNav overHero />

      {/* Header sits on the dawn plate — the beginning of the log. */}
      <SectionBackdrop
        art={sectionArt.jwtDawn}
        fadeTop={false}
        fadeBottom={false}
        scrimClassName={SECTION_ART_SCRIM}
      >
        <header className={MLH_HERO}>
          <div className={SECTION_CONTAINER}>
            <Link href="/" className={`${MLH_BACK_LINK} ${ROW_ICON}`}>
              <ArrowLeft className={ICON_XS} />
              {mlhPage.backLabel}
            </Link>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mlhPage.logo.src}
              alt={mlhPage.logo.alt}
              width={mlhPage.logo.width}
              height={mlhPage.logo.height}
              className={`${MLH_LOGO} mt-8`}
            />

            <h1 className={MLH_TITLE.replace("mt-6", "mt-5")}>{mlhPage.title}</h1>
            <p className={MLH_SUBTITLE}>{mlhPage.subtitle}</p>
            <p className={MLH_INTRO}>{mlhPage.intro}</p>

            <div className={MLH_LINK_ROW}>
              {mlhPage.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel={REL_EXTERNAL}
                  className={MLH_LINK}
                >
                  {link.label}
                  <ExternalLink className={ICON_XS} />
                </a>
              ))}
            </div>
          </div>
        </header>
      </SectionBackdrop>

      {buildChapters.map((chapter, index) => (
        <SectionBackdrop
          key={chapter.id}
          art={sectionArt[chapter.art]}
          fadeTop={false}
          fadeBottom={index === buildChapters.length - 1}
          scrimClassName={SECTION_ART_SCRIM}
        >
          <section className={SECTION_SHELL} aria-labelledby={chapter.id}>
            <div className={SECTION_CONTAINER}>
              <div className={MLH_CHAPTER_HEAD}>
                <p className={MLH_CHAPTER_RANGE}>{chapter.range}</p>
                <h2 id={chapter.id} className={MLH_CHAPTER_LABEL}>
                  {chapter.label}
                </h2>
              </div>

              <ol className="list-none">
                {chapter.sessionIds.map((id) => {
                  const session = sessionsById[id];
                  if (!session) return null;

                  return (
                    <li key={session.id} className={MLH_ROW}>
                      <div className={MLH_ROW_TEXT}>
                        <p className={MLH_DAY}>{session.day}</p>
                        <p className={MLH_NARRATIVE}>{session.narrative}</p>
                      </div>

                      <div className={MLH_ROW_MEDIA}>
                        <VideoFacade
                          videoId={session.videoId}
                          title={`Play ${session.day} session video`}
                          startSeconds={session.moments[0]?.seconds ?? 0}
                        />

                        {session.moments.length > 0 ? (
                          <div className={MLH_CHIP_ROW}>
                            {session.moments.map((moment) => (
                              <a
                                key={moment.seconds}
                                href={`https://www.youtube.com/watch?v=${session.videoId}&t=${moment.seconds}s`}
                                target="_blank"
                                rel={REL_EXTERNAL}
                                className={MLH_CHIP}
                              >
                                <span className={MLH_CHIP_TS}>{moment.ts}</span>
                                {moment.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        </SectionBackdrop>
      ))}

      <section className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <p className={MLH_FOOTNOTE}>{mlhPage.footerNote}</p>

          <div className={MLH_OUTRO}>
            <Link href="/" className={MLH_OUTRO_LINK}>
              See the rest of the portfolio
              <ArrowUpRight className={ICON_XS} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
