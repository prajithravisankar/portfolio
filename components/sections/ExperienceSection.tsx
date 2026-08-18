import { ExperienceCard } from "@/components/portfolio/ExperienceCard";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import {
  SECTION_CONTAINER,
  SECTION_SHELL,
  STACK_LG,
} from "@/components/portfolio/tokens";
import { experienceRoles, experienceSection } from "@/content/experience";

/**
 * The "Experience" section (#experience).
 *
 * Reverse-chronological stack of roles, using the same `STACK_LG` rhythm as the
 * Academic Journey timeline so the two chronological sections stay visually
 * consistent.
 *
 * Static — no dialogs, no carousels, no state — so this stays a server
 * component (no "use client").
 */
export function ExperienceSection() {
  const roles = experienceRoles.filter((role) => !role.hidden);

  return (
    <section id={experienceSection.id} className={SECTION_SHELL}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader
          title={experienceSection.heading}
          subtitle={experienceSection.subheading}
        />

        <div className={STACK_LG}>
          {roles.map((role) => (
            <ExperienceCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
