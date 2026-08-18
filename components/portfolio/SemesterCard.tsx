import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EDU_TOKENS, type Semester } from "@/content/education";

/**
 * One semester of the Academic Journey timeline: a glass Card whose header
 * carries a circled icon + term + date range, and whose body is a two-up grid
 * of course tiles.
 *
 * Purely presentational — no hooks, no handlers, so it stays a server
 * component (no "use client").
 *
 * FIDELITY NOTES
 * - <CardDescription> is rendered WITHOUT a className, exactly as the original
 *   did; it relies on the shadcn default. Do not add one.
 * - The grade Badge uses `course.gradeBadgeClassName` as a full REPLACEMENT
 *   for the default badge class, never a merge — the one override in the data
 *   intentionally drops `border-white/10`.
 * - Courses flagged `hidden` are filtered out here so commented-out content can
 *   live in the data file without ever displaying.
 */
export interface SemesterCardProps {
  semester: Semester;
}

export function SemesterCard({ semester }: SemesterCardProps) {
  const Icon = semester.icon;
  const courses = semester.courses.filter((course) => !course.hidden);

  return (
    <Card className={EDU_TOKENS.glassCard}>
      <CardHeader>
        <div className={EDU_TOKENS.headerRow}>
          <div className={EDU_TOKENS.iconCircle}>
            <Icon className={EDU_TOKENS.iconGlyph} />
          </div>
          <div>
            <CardTitle className={EDU_TOKENS.headingAccent}>
              {semester.term}
            </CardTitle>
            <CardDescription>{semester.dateRange}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className={EDU_TOKENS.courseGrid}>
          {courses.map((course) => (
            <div key={course.id} className={EDU_TOKENS.courseCard}>
              <div className={EDU_TOKENS.courseHeadRow}>
                <div>
                  <p className={EDU_TOKENS.courseName}>{course.name}</p>
                  <p className={EDU_TOKENS.courseCode}>{course.code}</p>
                </div>
                <Badge
                  className={course.gradeBadgeClassName ?? EDU_TOKENS.gradeBadge}
                >
                  {course.grade}
                </Badge>
              </div>
              <p
                className={EDU_TOKENS.courseCredits}
              >{`${course.credits} Credits`}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SemesterCard;
