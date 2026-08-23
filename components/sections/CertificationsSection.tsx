import { ArrowUpRight } from "lucide-react";

import { SectionBackdrop } from "@/components/portfolio/SectionBackdrop";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import { sectionArt } from "@/content/section-art";
import { certificationsSection } from "@/content/certifications";
import {
  CERT_ARROW,
  CERT_BODY,
  CERT_META,
  CERT_ROW_STATIC,
  CERT_TITLE_STATIC,
  CERT_COL_CONTENT,
  CERT_COL_SPACER,
  CERT_DESC,
  CERT_GRID,
  CERT_INDEX,
  CERT_LIST,
  CERT_ROW,
  CERT_TITLE,
  CERT_TITLE_ROW,
  REL_EXTERNAL,
  SECTION_ART_FADE_BOTTOM_PAPER,
  SECTION_ART_FADE_TOP_PAPER,
  SECTION_ART_SCRIM_PAPER_LEFT,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";

/**
 * The Certifications section, set on the tall-ship artwork.
 *
 * THE LIGHT TREATMENT. This illustration is pale and high-key, so unlike the
 * dusk city, the lake, the lighthouse and the reading swing it takes a PAPER
 * wash with ink type rather than a dark scrim with reversed type. Placed where
 * it is — between two dark plates — that also gives the page the breather it
 * needs so the illustrated bands keep their impact.
 *
 * THE CAROUSEL IS GONE. It used to be an Embla carousel of five image cards.
 * That hid four of the five behind an interaction nobody asked for, shipped a
 * client bundle purely to scroll a list of credentials, and the images were
 * generic boot.dev course banners carrying nothing the title does not already
 * say. As a plain list all five are visible at once, this became a server
 * component, and the right half of the picture survives.
 *
 * The image fields and their files were subsequently removed: nothing rendered
 * them, and every credential now carries a verification link instead.
 */
export function CertificationsSection() {
  const items = certificationsSection.items.filter((item) => !item.hidden);

  return (
    <SectionBackdrop
      art={sectionArt.certifications}
      scrimClassName={SECTION_ART_SCRIM_PAPER_LEFT}
      fadeTopClassName={SECTION_ART_FADE_TOP_PAPER}
      fadeBottomClassName={SECTION_ART_FADE_BOTTOM_PAPER}
    >
      <section id={certificationsSection.id} className={SECTION_SHELL}>
        <div className={SECTION_CONTAINER}>
          <SectionHeader
            title={certificationsSection.heading}
            subtitle={certificationsSection.subheading}
          />

          <div className={CERT_GRID}>
            <div className={CERT_COL_CONTENT}>
              <ol className={CERT_LIST}>
                {items.map((item, index) => {
                  const body = (
                    <>
                      <span className={CERT_INDEX} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={CERT_BODY}>
                        <span className={CERT_TITLE_ROW}>
                          <span
                            className={item.url ? CERT_TITLE : CERT_TITLE_STATIC}
                          >
                            {item.title}
                          </span>
                          {item.url ? (
                            <ArrowUpRight
                              className={CERT_ARROW}
                              aria-hidden="true"
                            />
                          ) : null}
                        </span>
                        <span className={CERT_META}>
                          {item.issuer} · {item.category}
                        </span>
                        <span className={CERT_DESC}>{item.description}</span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.id}>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel={REL_EXTERNAL}
                          className={CERT_ROW}
                        >
                          {body}
                        </a>
                      ) : (
                        // No public verification link recorded. Rendered as a
                        // plain row rather than a link to nowhere.
                        <div className={CERT_ROW_STATIC}>{body}</div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* The ship and the god-rays. Intentionally empty. */}
            <div className={CERT_COL_SPACER} aria-hidden="true" />
          </div>
        </div>
      </section>
    </SectionBackdrop>
  );
}

export default CertificationsSection;
