"use client";

import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import {
  PRJ_COL_CONTENT,
  PRJ_COL_SPACER,
  PRJ_GRID,
  PRJ_ITEMS,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";
import { projects, projectsSection } from "@/content/projects";

/**
 * The "Featured Projects" section (original page.tsx lines 1082-2741).
 *
 * Renders EXACTLY the original shell:
 *
 *   <section id="projects" className="py-20 px-6">
 *     <div className="max-w-7xl mx-auto">
 *       <div className="text-center mb-16"> … Featured Projects … </div>
 *       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 *         … one <Dialog> per project, in data order …
 *
 * Every card/modal pair comes from <ProjectCard>; nothing is hardcoded here.
 * Projects flagged `hidden` (commented-out copy preserved as data) are filtered
 * out so they stay invisible, exactly as the comment markers made them.
 *
 * No "use client": this is a static grid. The interactive parts live inside
 * components/ui/dialog.tsx, which already carries the directive.
 */
export function ProjectsSection() {
  return (
    <section id={projectsSection.id} className={SECTION_SHELL}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader
          title={projectsSection.heading}
          subtitle={projectsSection.subheading}
        />

        <div className={PRJ_GRID}>
          <div className={PRJ_COL_CONTENT}>
            <div className={PRJ_ITEMS}>
          {projects
            .filter((project) => !project.hidden)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          {/* The figure, the cat, the meadow. Intentionally empty. */}
          <div className={PRJ_COL_SPACER} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
