import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { SemesterCard } from "@/components/portfolio/SemesterCard";
import { EDU_TOKENS, education } from "@/content/education";

/**
 * "Academic Journey" — the education timeline of semester cards.
 *
 * All copy, course data and ordering come from `@/content/education`; nothing
 * is hardcoded here. Static markup only, so this stays a server component.
 *
 * Renders (matching the original page.tsx):
 *
 *   <section id="education" className="py-20 px-6">
 *     <div className="max-w-7xl mx-auto">
 *       <SectionHeader title subtitle />
 *       <div className="space-y-8"> …one <SemesterCard /> per semester… </div>
 *     </div>
 *   </section>
 */
export function EducationSection() {
  const semesters = education.semesters.filter((semester) => !semester.hidden);

  return (
    <section id={education.id} className={EDU_TOKENS.section}>
      <div className={EDU_TOKENS.container}>
        <SectionHeader title={education.title} subtitle={education.subtitle} />

        <div className={EDU_TOKENS.semesterStack}>
          {semesters.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
