import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { sectionArt } from "@/content/section-art";
import {
  openSourceContributions,
  openSourceSection,
} from "@/content/opensource";
import {
  OSS_COL_CONTENT,
  OSS_COL_SPACER,
  OSS_DESC,
  OSS_FOOT,
  OSS_FOOT_DOT,
  OSS_GRID,
  OSS_ITEM,
  OSS_ITEMS,
  OSS_REPO,
  OSS_TITLE,
  REL_EXTERNAL,
  SECTION_ART_FADE_BOTTOM_PAPER,
  SECTION_ART_FADE_TOP_PAPER,
  SECTION_ART_SCRIM_PAPER_LEFT,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

/**
 * The Open Source Contributions section, set on the braided-delta artwork.
 *
 * The picture is the argument: separate channels converging into one river is
 * what merging contributions actually looks like. It is also pale and
 * high-key, so like the certifications section it takes a paper wash and ink
 * type rather than a dark scrim and reversed type.
 *
 * SHAPE, NOT JUST TREATMENT. This is the second consecutive light band, so it
 * is laid out two-up instead of as a single list — otherwise the two would
 * read as one section repeated. The paper fades are left ON at both edges here
 * (unlike the run of dark plates, where they were removed): a strip of plain
 * paper is what separates two different pale artworks cleanly instead of
 * butting them into a visible seam.
 *
 * Each entry leads with the REPOSITORY rather than the PR title — for open
 * source the interesting fact is where the work landed. Merge state and PR
 * number sit together at the foot, since "merged" is the claim being made.
 *
 * PR #205 is commented out in the original source; it lives in the data with
 * `hidden: true` and is filtered here so it still does not display.
 */
export function OpenSourceSection() {
  const contributions = openSourceContributions.filter((pr) => !pr.hidden);

  return (
    <SectionBackdrop
      art={sectionArt.opensource}
      scrimClassName={SECTION_ART_SCRIM_PAPER_LEFT}
      fadeTopClassName={SECTION_ART_FADE_TOP_PAPER}
      fadeBottomClassName={SECTION_ART_FADE_BOTTOM_PAPER}
    >
      <section id={openSourceSection.id} className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <SectionHeader
            title={openSourceSection.heading}
            subtitle={openSourceSection.subheading}
          />

          <div className={OSS_GRID}>
            <div className={OSS_COL_CONTENT}>
              <div className={OSS_ITEMS}>
                {contributions.map((pr) => (
                  <a
                    key={pr.id}
                    href={pr.prUrl}
                    target="_blank"
                    rel={REL_EXTERNAL}
                    className={OSS_ITEM}
                  >
                    <span className={OSS_REPO}>{pr.repo}</span>
                    <span className={OSS_TITLE}>{pr.title}</span>
                    <span className={OSS_DESC}>{pr.description}</span>
                    <span className={OSS_FOOT}>
                      <span className={OSS_FOOT_DOT} aria-hidden="true" />
                      {pr.status}
                      <span aria-hidden="true">·</span>#{pr.prNumber}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* The delta and the sun. Intentionally empty. */}
            <div className={OSS_COL_SPACER} aria-hidden="true" />
          </div>
        </div>
      </section>
    </SectionBackdrop>
  );
}

export default OpenSourceSection;
