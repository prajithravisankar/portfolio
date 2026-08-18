import { Github, Linkedin, Mail } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import {
  FOOTER,
  FOOTER_BRAND,
  FOOTER_BRAND_BLOCK,
  FOOTER_LEGAL,
  FOOTER_ROW,
  FOOTER_SOCIAL_ROW,
  ICON_MD,
  LINK_MUTED,
  PAGE_BACKDROP,
  PAGE_BACKDROP_INNER,
  PAGE_CONTENT,
  PAGE_ROOT,
  REL_EXTERNAL,
  SECTION_CONTAINER,
  SEPARATOR_SPACED,
  TEXT_MUTED_SM_ALT,
} from "@/components/portfolio/tokens";
import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SiteNav } from "@/components/sections/SiteNav";

export default function Home() {
  return (
    <div className={PAGE_ROOT}>
      {/* Animated background gradients (removed for mono theme) */}
      <div className={PAGE_BACKDROP}>
        <div className={PAGE_BACKDROP_INNER} />
      </div>

      {/* Content */}
      <div className={PAGE_CONTENT}>
        <SiteNav />
        <AboutSection />
        <EducationSection />
        <CertificationsSection />
        <OpenSourceSection />
        <ProjectsSection />

        {/* Footer */}
        <footer className={FOOTER}>
          <div className={SECTION_CONTAINER}>
            <div className={FOOTER_ROW}>
              <div className={FOOTER_BRAND_BLOCK}>
                <p className={FOOTER_BRAND}>Prajith Ravisankar</p>
                <p className={TEXT_MUTED_SM_ALT}>
                  Computer Science Student • Open Source Contributor
                </p>
              </div>
              <div className={FOOTER_SOCIAL_ROW}>
                <a
                  href="https://github.com/prajithravisankar"
                  target="_blank"
                  rel={REL_EXTERNAL}
                  className={LINK_MUTED}
                >
                  <Github className={ICON_MD} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prajithravisankar/"
                  target="_blank"
                  rel={REL_EXTERNAL}
                  className={LINK_MUTED}
                >
                  <Linkedin className={ICON_MD} />
                </a>
                <a
                  href="mailto:prajithravisankar@gmail.com"
                  className={LINK_MUTED}
                >
                  <Mail className={ICON_MD} />
                </a>
              </div>
            </div>
            <Separator className={SEPARATOR_SPACED} />
            <p className={FOOTER_LEGAL}>
              © 2025 Prajith Ravisankar. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
