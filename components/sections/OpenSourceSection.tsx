import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { PullRequestCard } from "@/components/portfolio/PullRequestCard";
import {
  GRID_CARDS_3,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";
import {
  openSourceContributions,
  openSourceSection,
} from "@/content/opensource";

/**
 * The "Open Source Contributions" section (#opensource).
 *
 * Static grid — no dialogs, no carousels, no state — so this stays a server
 * component (no "use client").
 *
 * PR #205 is commented out in the original page.tsx; it lives in the data with
 * `hidden: true` and is filtered here so it still does not display.
 */
export function OpenSourceSection() {
  const contributions = openSourceContributions.filter((pr) => !pr.hidden);

  return (
    <section id={openSourceSection.id} className={SECTION_SHELL}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader
          title={openSourceSection.heading}
          subtitle={openSourceSection.subheading}
        />

        <div className={GRID_CARDS_3}>
          {contributions.map((contribution) => (
            <PullRequestCard key={contribution.id} contribution={contribution} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenSourceSection;
