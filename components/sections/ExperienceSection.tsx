import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { sectionArt } from "@/content/section-art";
import { experienceRoles, experienceSection } from "@/content/experience";
import {
  EXP_BULLET,
  EXP_BULLETS,
  EXP_BULLET_MARK,
  EXP_COLUMN,
  EXP_DATE,
  EXP_ENTRY,
  EXP_MARKER,
  EXP_MARKER_DOT,
  EXP_ORG,
  EXP_ORG_ROW,
  EXP_PROGRAM,
  EXP_RAIL,
  EXP_ROLE,
  EXP_TECH,
  EXP_TECH_ROW,
  SECTION_ART_SCRIM_LEFT,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

/**
 * The Experience section, set on the lighthouse artwork.
 *
 * THE SCRIM. Graded left-to-right rather than top-to-bottom: heavy under the
 * timeline, clearing to about a quarter on the right so the lit lighthouse and
 * the lightning survive. Hence the timeline is held to the left and the right
 * of the frame stays open — same principle as the other illustrated sections.
 *
 * (An earlier pass used a paper wash and ink type, for a paler version of this
 * artwork. The darker plate matches the dusk city and the lake, so it takes the
 * same reversed cream treatment. SECTION_ART_SCRIM_PAPER is kept in tokens for
 * any future pale artwork.)
 *
 * A RAIL, NOT CARDS. Roles hang off one hairline with a marker each. Cards
 * would reintroduce the boxed look this theme removed and would cover more of
 * the sea than they need to. The marker warms to the lamp gold on hover, which is
 * the only interaction here — these are read, not clicked.
 *
 * Presentational only — no hooks, so no "use client".
 */
export function ExperienceSection() {
  const roles = experienceRoles.filter((role) => !role.hidden);

  return (
    <SectionBackdrop
      art={sectionArt.experience}
      parallax
      parallaxSrc="/section-experience-2400.webp"
      fadeTop={false}
      fadeBottom={false}
      scrimClassName={SECTION_ART_SCRIM_LEFT}
    >
      <section id={experienceSection.id} className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <SectionHeader
            title={experienceSection.heading}
            subtitle={experienceSection.subheading}
            onArt
          />

          <div className={EXP_COLUMN}>
            <ol className={EXP_RAIL}>
              {roles.map((role) => (
                <li key={role.id} className={EXP_ENTRY}>
                  <span className={EXP_MARKER} aria-hidden="true">
                    <span className={EXP_MARKER_DOT} />
                  </span>

                  <p className={EXP_DATE}>{role.dateRange}</p>
                  <h3 className={EXP_ROLE}>{role.role}</h3>

                  <p className={EXP_ORG_ROW}>
                    <span className={EXP_ORG}>{role.organization}</span>
                    {role.program ? (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className={EXP_PROGRAM}>{role.program}</span>
                      </>
                    ) : null}
                  </p>

                  <div className={EXP_TECH_ROW}>
                    {role.techStack.map((tech) => (
                      <span key={tech} className={EXP_TECH}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className={EXP_BULLETS}>
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className={EXP_BULLET}>
                        <span className={EXP_BULLET_MARK} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </SectionBackdrop>
  );
}

export default ExperienceSection;
