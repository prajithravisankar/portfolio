import { ExternalLink } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { sectionArt } from "@/content/section-art";
import { aboutContent, type AboutContent } from "@/content/profile";
import {
  ABOUT_AVATAR,
  ABOUT_AVATAR_FALLBACK,
  ABOUT_BIO,
  ABOUT_BLOCK,
  ABOUT_BLOCK_LABEL,
  ABOUT_BLOCK_STACK,
  ABOUT_COL_LEFT,
  ABOUT_COL_RIGHT,
  ABOUT_COL_SPACER,
  ABOUT_EMAIL,
  ABOUT_GRID,
  ABOUT_IDENTITY_ROW,
  ABOUT_LINK,
  ABOUT_LINK_ROW,
  ABOUT_MUTED,
  ABOUT_NAME,
  ABOUT_SKILL,
  ABOUT_SKILL_ICON,
  ABOUT_SKILL_ROW,
  ABOUT_STAT_ROW,
  ABOUT_STAT_VALUE,
  ABOUT_STRONG,
  ICON_XS,
  SECTION_ART_SCRIM_EDGES,
  SECTION_ART_SCRIM_SOFT,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

/**
 * The About section, set on the lake artwork.
 *
 * COMPOSITION. This illustration is centre-weighted — the sun, the peak and
 * the rower are all mid-frame — so unlike the videos section (photographer on
 * the right, content on the left) the copy is split to the LEFT and RIGHT
 * thirds and the middle four columns are deliberately left empty. Those outer
 * thirds are dark mountain and pine, which is where reversed text reads best
 * anyway, so the layout and the painting want the same thing.
 *
 * NO CARDS. The previous version was three glass panels in a bento grid. Over
 * a painting this open, panels are clutter: they cover the view and add a
 * second visual system on top of the one already there. The copy is set
 * directly on the artwork and separated by hairlines instead.
 *
 * The scrim is the edge vignette rather than the default top-to-bottom wash,
 * which would have dimmed exactly the part worth looking at.
 *
 * Presentational only — no hooks, so no "use client".
 */
export interface AboutSectionProps {
  /** Content override. Defaults to the real About content. */
  content?: AboutContent;
}

export function AboutSection({
  content = aboutContent,
}: AboutSectionProps = {}) {
  const { heading, profile, education, contact } = content;
  const EducationIcon = education.icon;
  const ContactIcon = contact.icon;
  const LocationIcon = contact.locationIcon;

  const skills = profile.skills.filter((skill) => !skill.hidden);
  const stats = education.stats.filter((stat) => !stat.hidden);
  const socials = contact.socials.filter((social) => !social.hidden);
  const emails = contact.emails.filter((email) => !email.hidden);

  return (
    <SectionBackdrop
      art={sectionArt.about}
      fadeTop={false}
      fadeBottom={false}
      scrimClassName={SECTION_ART_SCRIM_EDGES}
      underScrimClassName={SECTION_ART_SCRIM_SOFT}
    >
      <section id={heading.id} className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <SectionHeader
            title={heading.title}
            subtitle={heading.subtitle}
            onArt
          />

          <div className={ABOUT_GRID}>
            {/* Left third — identity and story. */}
            <div className={ABOUT_COL_LEFT}>
              <div className={ABOUT_IDENTITY_ROW}>
                <Avatar className={ABOUT_AVATAR}>
                  <AvatarImage
                    src={profile.avatar.src}
                    alt={profile.avatar.alt}
                  />
                  <AvatarFallback className={ABOUT_AVATAR_FALLBACK}>
                    {profile.avatar.fallback}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className={ABOUT_NAME}>{profile.name}</p>
                  <p className={ABOUT_MUTED}>{education.degree}</p>
                </div>
              </div>

              <p className={ABOUT_BIO}>{profile.bio}</p>

              <div className={ABOUT_SKILL_ROW}>
                {skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <span key={skill.label} className={ABOUT_SKILL}>
                      <SkillIcon className={ABOUT_SKILL_ICON} />
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* The view. Intentionally empty — the sun, the peak, the boat. */}
            <div className={ABOUT_COL_SPACER} aria-hidden="true" />

            {/* Right third — the facts. */}
            <div className={ABOUT_COL_RIGHT}>
              <div className={ABOUT_BLOCK_STACK}>
                <div className={ABOUT_BLOCK}>
                  <p className={ABOUT_BLOCK_LABEL}>
                    <EducationIcon className={ICON_XS} />
                    {education.title}
                  </p>
                  <p className={ABOUT_STRONG}>{education.institution}</p>
                  <p className={ABOUT_MUTED}>{education.degree}</p>
                  <div className="mt-4 space-y-2">
                    {stats.map((stat) => (
                      <div key={stat.label} className={ABOUT_STAT_ROW}>
                        <span className={ABOUT_MUTED}>{stat.label}</span>
                        <span className={ABOUT_STAT_VALUE}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={ABOUT_BLOCK} id={contact.id}>
                  <p className={ABOUT_BLOCK_LABEL}>
                    <ContactIcon className={ICON_XS} />
                    {contact.title}
                  </p>
                  <p className={`${ABOUT_MUTED} flex items-center gap-2`}>
                    <LocationIcon className={ICON_XS} />
                    {contact.location}
                  </p>

                  <div className={ABOUT_LINK_ROW}>
                    {socials.map((social) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={social.href}
                          href={social.href}
                          target={social.external ? "_blank" : undefined}
                          rel={social.rel}
                          className={ABOUT_LINK}
                        >
                          {SocialIcon ? (
                            <SocialIcon className={ICON_XS} />
                          ) : null}
                          {social.label}
                          {social.showExternalIcon ? (
                            <ExternalLink className={ICON_XS} />
                          ) : null}
                        </a>
                      );
                    })}
                  </div>

                  <div className="mt-5">
                    <p className={ABOUT_BLOCK_LABEL}>{contact.emailLabel}</p>
                    <div className="space-y-1">
                      {emails.map((email) => (
                        <a
                          key={email.href}
                          href={email.href}
                          target={email.external ? "_blank" : undefined}
                          rel={email.rel}
                          className={ABOUT_EMAIL}
                        >
                          {email.address}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackdrop>
  );
}

export default AboutSection;
