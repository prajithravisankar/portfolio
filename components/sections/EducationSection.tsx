import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { sectionArt } from "@/content/section-art";
import { education } from "@/content/education";
import {
  EDU_COL_CONTENT,
  EDU_COL_SPACER,
  EDU_COURSE_CODE,
  EDU_COURSE_CREDITS,
  EDU_COURSE_GRADE,
  EDU_COURSE_LIST,
  EDU_COURSE_META,
  EDU_COURSE_NAME,
  EDU_COURSE_ROW,
  EDU_GRID,
  EDU_STACK,
  EDU_TERM,
  EDU_TERM_BLOCK,
  EDU_TERM_DATES,
  EDU_TERM_ROW,
  SECTION_ART_SCRIM_RIGHT,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

/**
 * The Academic Journey section, set on the reading-swing artwork.
 *
 * COMPOSITION. This picture has two subjects: the boy reading with the cat at
 * roughly 30% across, and the waterfall at 72%. The reader is the reason the
 * artwork suits an academic section at all, so he is what gets protected — the
 * left five columns are left empty and the scrim darkens the RIGHT, which is
 * the mirror of the Experience treatment (lighthouse right, copy left).
 *
 * COMPACT BY DESIGN. The previous version was two glass cards each holding a
 * 2x2 grid of course tiles — tall enough to bury most of a picture. Here a
 * term is a heading and each course is a single line: name and code left,
 * grade right. Roughly a third of the height, so the tree, the swing and the
 * sky above stay visible.
 *
 * Grades are set in the lamp gold and tabular figures, so the column of marks
 * reads down cleanly without jitter.
 *
 * Presentational only — no hooks, so no "use client".
 */
export function EducationSection() {
  const semesters = education.semesters.filter((semester) => !semester.hidden);

  return (
    <SectionBackdrop
      art={sectionArt.education}
      fadeTop={false}
      scrimClassName={SECTION_ART_SCRIM_RIGHT}
    >
      <section id={education.id} className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <SectionHeader
            title={education.title}
            subtitle={education.subtitle}
            onArt
          />

          <div className={EDU_GRID}>
            {/* The reader and the swing. Intentionally empty. */}
            <div className={EDU_COL_SPACER} aria-hidden="true" />

            <div className={EDU_COL_CONTENT}>
              <div className={EDU_STACK}>
                {semesters.map((semester) => {
                  const courses = semester.courses.filter(
                    (course) => !course.hidden,
                  );

                  return (
                    <div key={semester.id} className={EDU_TERM_BLOCK}>
                      <div className={EDU_TERM_ROW}>
                        <h3 className={EDU_TERM}>{semester.term}</h3>
                        <p className={EDU_TERM_DATES}>{semester.dateRange}</p>
                      </div>

                      <ul className={EDU_COURSE_LIST}>
                        {courses.map((course) => (
                          <li key={course.id} className={EDU_COURSE_ROW}>
                            <span className={EDU_COURSE_META}>
                              <span className={EDU_COURSE_NAME}>
                                {course.name}
                              </span>{" "}
                              <span className={EDU_COURSE_CODE}>
                                {course.code}
                              </span>
                            </span>
                            <span className={EDU_COURSE_CREDITS}>
                              {course.credits}
                            </span>
                            <span className={EDU_COURSE_GRADE}>
                              {course.grade}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackdrop>
  );
}

export default EducationSection;
