import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { SectionHeader } from "@/components/portfolio/SectionHeader";
import {
  CAROUSEL_CONTROL,
  CAROUSEL_INDICATORS,
  CAROUSEL_ROOT,
  CAROUSEL_SLIDE,
  CAROUSEL_TRACK,
  SECTION_CONTAINER,
  SECTION_SHELL,
} from "@/components/portfolio/tokens";
import {
  Carousel,
  CarouselContent,
  CarouselIndicators,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { certificationsSection } from "@/content/certifications";

/**
 * The "Certifications" carousel section.
 *
 * Structure is a byte-for-byte reproduction of the original page.tsx section:
 * <section id="certifications" className="py-20 px-6"> → container → centered
 * heading block → <Carousel> with a py-4 track, prev/next controls and the dot
 * indicator row.
 *
 * <Carousel> and friends are already client components (they carry their own
 * "use client"), and this file only passes them serializable props and
 * children, so it stays a server component.
 *
 * Hidden entries are dropped here rather than deleted from the data, so
 * disabled cards stay recoverable without ever rendering.
 */
export function CertificationsSection() {
  const { id, heading, subheading, carouselOpts, items } = certificationsSection;
  const visible = items.filter((certification) => !certification.hidden);

  return (
    <section id={id} className={SECTION_SHELL}>
      <div className={SECTION_CONTAINER}>
        <SectionHeader title={heading} subtitle={subheading} />

        <Carousel className={CAROUSEL_ROOT} opts={carouselOpts}>
          <CarouselContent className={CAROUSEL_TRACK}>
            {visible.map((certification) => (
              <CarouselItem key={certification.id} className={CAROUSEL_SLIDE}>
                <CertificationCard certification={certification} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={CAROUSEL_CONTROL} />
          <CarouselNext className={CAROUSEL_CONTROL} />
          <CarouselIndicators className={CAROUSEL_INDICATORS} />
        </Carousel>
      </div>
    </section>
  );
}

export default CertificationsSection;
