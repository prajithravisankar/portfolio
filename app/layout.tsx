import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteMetadata } from "@/content/site";

/**
 * LinkClicks Universal Pixel.
 *
 * Two parts, and the ORDER between them is the whole trick: the first script
 * defines the `window.lk` command queue, the second loads the pixel that drains
 * it. If the loader runs first, every `lk(...)` call before it lands is lost.
 *
 * `beforeInteractive` on the stub puts it in the server-rendered HTML, ahead of
 * hydration, which is the App Router equivalent of "paste it in <head>" from the
 * vendor's instructions — and it guarantees the queue exists before anything can
 * call it. The loader is `afterInteractive` so it does not block first paint;
 * being async, it would not block anyway, and the queue means nothing is dropped
 * while it is in flight.
 *
 * Raw <script> tags are avoided on purpose: in the App Router they are not
 * reliably placed in <head>, and the ordering above would then be down to luck.
 */
const LINKCLICKS_PIXEL_SRC =
  "https://pixel.linkclicks.com/pixel/6cf69cbb-32f4-41bc-a0f4-d80d75a2297b.js";

/**
 * THEME: WORKSHOP — type stack.
 *
 * Three faces, three jobs, none of them the Next.js default:
 *
 * - Fraunces carries every display line. It is a variable serif with SOFT and
 *   WONK axes, which is why it is here rather than a neutral serif: dialled up
 *   it reads hand-cut rather than machined — the same quality the clay imagery
 *   has. It is the biggest "designed, not generated" signal on the page.
 * - Instrument Sans handles body copy. Quiet, slightly narrow, and unlike Inter
 *   not already on every third portfolio.
 * - JetBrains Mono is reserved for technical data: metrics, course codes, tech
 *   tags, the day counter. Monospace earns its keep when it marks MACHINE
 *   facts; using it for everything (as the previous theme did) throws that
 *   distinction away.
 */
const fraunces = Fraunces({
  variable: "--font-display-face",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Site-wide metadata.
 *
 * `metadataBase` matters: without it, Next cannot turn the relative OG image
 * path into the absolute URL that Slack, LinkedIn, Discord and X all require,
 * and the preview card silently fails to render.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: `%s — ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.name, url: siteMetadata.url }],
  creator: siteMetadata.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="linkclicks-pixel-queue" strategy="beforeInteractive">
        {`window.lk=window.lk||function(){(window.lk.q=window.lk.q||[]).push(arguments)};`}
      </Script>
      <Script
        id="linkclicks-pixel-loader"
        src={LINKCLICKS_PIXEL_SRC}
        strategy="afterInteractive"
      />
      <body
        className={`${fraunces.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
