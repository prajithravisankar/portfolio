import { ExternalLink } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import {
  AVATAR,
  AVATAR_FALLBACK,
  BADGE_ICON,
  BADGE_SOLID,
  BLOCK_OFFSET,
  BUTTON_OUTLINE,
  CARD_SURFACE_SOFT,
  CARD_TITLE_DISPLAY,
  CARD_TITLE_ICON,
  COL_LINKS,
  COL_PROFILE_NAME,
  GRID_CARDS_3,
  ICON_MD_ACCENT,
  ICON_SM,
  ICON_SM_ACCENT,
  ICON_XS,
  LINK_ACCENT_SM,
  LINK_ROW,
  ROW_BETWEEN,
  ROW_BUTTONS,
  ROW_PROFILE_HEADER,
  SECTION_CONTAINER,
  SECTION_SHELL_FIRST,
  SEPARATOR,
  STACK_MD,
  STACK_SM,
  STACK_TEXT_SM,
  STACK_XS,
  TAG_ROW,
  TEXT_ACCENT,
  TEXT_BODY_MUTED_LG,
  TEXT_MUTED,
  TEXT_MUTED_SM,
  TEXT_MUTED_SM_ALT,
  TEXT_ROW_LIGHT,
  TEXT_STRONG,
} from "@/components/portfolio/tokens";
import { aboutContent, type AboutContent } from "@/content/profile";

/**
 * The "About Me" bento grid (lines 115-365 of the original page.tsx): a
 * profile card spanning 2 columns, an education summary card spanning 1, and a
 * full-width contact card carrying `id="contact"`.
 *
 * Fidelity notes:
 * - All three cards use CARD_SURFACE_SOFT (hover:bg-white/[0.06]). Later
 *   sections use CARD_SURFACE (hover:bg-white/[0.07]) — do not unify.
 * - The profile card is the only one with the `group` class. Nothing consumes
 *   it today; it is kept because the original has it.
 * - CardContent spacing is NOT uniform: profile has no className, education
 *   uses `space-y-3`, contact uses `space-y-4`.
 * - The section's padding is `pt-32 pb-20 px-6` (clears the fixed nav) rather
 *   than the `py-20 px-6` every other section uses, so it is a prop with that
 *   default instead of the shared SECTION_SHELL token.
 * - The Boot.dev button has no leading icon; the two email links use
 *   rel="noreferrer" and only the first wraps its text in a <div>.
 *
 * Presentational only — no hooks, so no "use client".
 */
export interface AboutSectionProps {
  /** Content override. Defaults to the real About content. */
  content?: AboutContent;
  /**
   * <section> classes. Defaults to SECTION_SHELL_FIRST ("pt-32 pb-20 px-6"),
   * which is what the original About section uses.
   */
  className?: string;
}

export function AboutSection({
  content = aboutContent,
  className = SECTION_SHELL_FIRST,
}: AboutSectionProps = {}) {
  const { heading, profile, education, contact } = content;
  const EducationIcon = education.icon;
  const ContactIcon = contact.icon;
  const LocationIcon = contact.locationIcon;

  return (
    <section id={heading.id} className={className}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader title={heading.title} subtitle={heading.subtitle} />

        <div className={GRID_CARDS_3}>
          {/* Profile Card - Spans 2 columns */}
          <Card className={`lg:col-span-2 ${CARD_SURFACE_SOFT} group`}>
            <CardHeader>
              <div className={ROW_PROFILE_HEADER}>
                <Avatar className={AVATAR}>
                  <AvatarImage
                    src={profile.avatar.src}
                    alt={profile.avatar.alt}
                  />
                  <AvatarFallback className={AVATAR_FALLBACK}>
                    {profile.avatar.fallback}
                  </AvatarFallback>
                </Avatar>
                <div className={COL_PROFILE_NAME}>
                  <CardTitle className={CARD_TITLE_DISPLAY}>
                    {profile.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className={TAG_ROW}>
                {profile.skills
                  .filter((skill) => !skill.hidden)
                  .map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <Badge
                        key={skill.label}
                        variant="secondary"
                        className={BADGE_SOLID}
                      >
                        <SkillIcon className={BADGE_ICON} />
                        {skill.label}
                      </Badge>
                    );
                  })}
              </div>

              <div className={BLOCK_OFFSET}>
                <p className={TEXT_BODY_MUTED_LG}>{profile.bio}</p>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className={`lg:col-span-1 ${CARD_SURFACE_SOFT}`}>
            <CardHeader>
              <CardTitle className={CARD_TITLE_ICON}>
                <EducationIcon className={ICON_MD_ACCENT} />
                {education.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={STACK_SM}>
              <div>
                <p className={TEXT_STRONG}>{education.institution}</p>
                <p className={TEXT_MUTED_SM_ALT}>{education.degree}</p>
              </div>
              <Separator className={SEPARATOR} />
              <div className={STACK_TEXT_SM}>
                {education.stats
                  .filter((stat) => !stat.hidden)
                  .map((stat) => (
                    <div key={stat.label} className={ROW_BETWEEN}>
                      <span className={TEXT_MUTED}>{stat.label}</span>
                      <span
                        className={stat.emphasized ? TEXT_STRONG : TEXT_ACCENT}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Card - Full Width */}
          <Card id={contact.id} className={`lg:col-span-3 ${CARD_SURFACE_SOFT}`}>
            <CardHeader>
              <CardTitle className={CARD_TITLE_ICON}>
                <ContactIcon className={ICON_MD_ACCENT} />
                {contact.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={STACK_MD}>
              <div className={TEXT_ROW_LIGHT}>
                <LocationIcon className={ICON_SM_ACCENT} />
                <span>{contact.location}</span>
              </div>

              <div className={ROW_BUTTONS}>
                {contact.socials
                  .filter((social) => !social.hidden)
                  .map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="sm"
                        className={BUTTON_OUTLINE}
                        asChild
                      >
                        <a
                          href={social.href}
                          target={social.external ? "_blank" : undefined}
                          rel={social.rel}
                          className={LINK_ROW}
                        >
                          {SocialIcon ? <SocialIcon className={ICON_SM} /> : null}
                          {social.label}
                          {social.showExternalIcon ? (
                            <ExternalLink className={ICON_XS} />
                          ) : null}
                        </a>
                      </Button>
                    );
                  })}
              </div>

              <Separator className={SEPARATOR} />

              <div className={STACK_XS}>
                <p className={TEXT_MUTED_SM}>{contact.emailLabel}</p>
                <div className={COL_LINKS}>
                  {contact.emails
                    .filter((email) => !email.hidden)
                    .map((email) => (
                      <a
                        key={email.href}
                        href={email.href}
                        target={email.external ? "_blank" : undefined}
                        rel={email.rel}
                        className={LINK_ACCENT_SM}
                      >
                        {email.wrapInDiv ? (
                          <div>{email.address}</div>
                        ) : (
                          email.address
                        )}
                      </a>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
