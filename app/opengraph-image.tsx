import { ImageResponse } from "next/og";

import { siteMetadata } from "@/content/site";

/**
 * The link-preview card rendered whenever this site is shared — LinkedIn,
 * Slack, Discord, X, iMessage.
 *
 * Generated at build time by Next's ImageResponse rather than shipped as a
 * static asset, so it can never drift out of sync with `content/site.ts` and
 * there is no binary to regenerate by hand.
 *
 * Deliberately typographic: no stock imagery, no gradient mesh. It has to
 * survive being scaled down to a 200px-wide thumbnail in a chat window, where
 * anything busy turns to mud and only a strong name reads.
 */
export const runtime = "edge";
export const alt = `${siteMetadata.name} — ${siteMetadata.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8A8A8A",
          }}
        >
          {siteMetadata.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#FAFAFA",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteMetadata.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 36,
              color: "#B4B4B4",
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            {siteMetadata.role} · Django, FastAPI, PostgreSQL
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "1px solid #262626",
            paddingTop: 32,
            fontSize: 26,
            color: "#8A8A8A",
          }}
        >
          <span>Building in public</span>
          <span style={{ color: "#3A3A3A" }}>—</span>
          <span>youtube.com/@BigOGrindset</span>
        </div>
      </div>
    ),
    size,
  );
}
