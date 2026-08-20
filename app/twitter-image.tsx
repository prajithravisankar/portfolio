import { siteMetadata } from "@/content/site";

/**
 * X/Twitter reads its own image tag rather than falling back to og:image, so
 * the card is exposed here too.
 *
 * Only the rendering component is shared. Next parses route-segment config
 * (`runtime`, `size`, `contentType`) statically at build time, so those must
 * be declared literally in this file — re-exporting them fails the build.
 */
export { default } from "./opengraph-image";

export const runtime = "edge";
export const alt = `${siteMetadata.name} — ${siteMetadata.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
