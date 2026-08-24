import {
  ArrowRight,
  Award,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Data model for the "Featured Projects" section (original page.tsx lines 1082-2741).
 *
 * All five project modals share one shape; the structural differences between them
 * are expressed with OPTIONAL fields (`demoHeading`, `overviewHeading`, `award`) and
 * an explicit per-item `style` block, so no component ever has to branch on an id.
 */

/** The iframe `allow` attribute — byte-identical on all 10 iframes in this section. */
export const PROJECT_VIDEO_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

/** One inline run of a rich-text paragraph. `bold: true` renders inside <strong>. */
export interface RichTextSegment {
  text: string;
  bold?: boolean;
}

/**
 * A YouTube embed.
 *
 * Note the card copy and the modal copy of the SAME video can carry different
 * `title` attributes (e.g. "CBESS Demo" vs "CBESS Demo - Chess-Based Encryption
 * System"), which is why `card.video` and `detail.video` are separate objects.
 */
export interface ProjectVideo {
  /** Full embed URL, verbatim. */
  src: string;
  /** iframe `title` attribute. */
  title: string;
  /** iframe `allow` attribute; always PROJECT_VIDEO_ALLOW here. */
  allow: string;
  /** true on every iframe in this section. */
  allowFullScreen: boolean;
}

/**
 * One <li className="flex items-start gap-2"> with a "•" span.
 *
 * `label` is stored WITHOUT its trailing colon; the renderer emits
 * `<strong>{label}:</strong>` followed by a single space, then `text`.
 * Key Achievements bullets have no label (plain text only).
 */
export interface ProjectBullet {
  label?: string;
  text: string;
  /** Commented-out content preserved as data; filtered at render. None in this section. */
  hidden?: boolean;
}

/** <h4> with a lucide icon + a <ul> of bullets. */
export interface ProjectBulletSection {
  /** Verbatim heading: "Problem Solved" | "Key Achievements" | "Key Features" | "Architecture". */
  heading: string;
  /** Rendered "w-4 h-4 text-white". */
  icon: LucideIcon;
  items: ProjectBullet[];
  hidden?: boolean;
}

/** An <h4> that is just an icon + label (Live Demo / Overview). */
export interface ProjectHeading {
  text: string;
  /** Rendered "w-4 h-4 text-white". */
  icon: LucideIcon;
}

/** Detail-modal award callout box. CleverCourse only. */
export interface ProjectAward {
  /** Rendered "w-6 h-6 text-white". */
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

/** The bottom "View on GitHub" button (Button asChild > <a>). */
export interface ProjectLink {
  href: string;
  label: string;
  /** Leading icon, rendered "w-5 h-5". */
  icon: LucideIcon;
  /** Trailing icon, rendered "w-4 h-4". */
  trailingIcon: LucideIcon;
  target: string;
  rel: string;
}

/** The compact <DialogTrigger> Card. */
export interface ProjectCardSummary {
  /** Header pill copy (emoji, if any, is part of the string). */
  badge: string;
  /** Star — "w-5 h-5 text-white/80", top-right of the header row. */
  badgeIcon: LucideIcon;
  /** CardTitle text. */
  title: string;
  /** CardDescription text (rendered with `line-clamp-2` + style.cardDescriptionToneClass). */
  description: string;
  /**
   * OPTIONAL. The compact trigger card no longer renders video at all — that
   * went when five eager YouTube iframes came off first paint — so this is
   * kept only for projects that carry one.
   */
  video?: ProjectVideo;
  /** <p className="text-slate-400 text-sm line-clamp-2 mb-4"> blurb. Never equal to detail.overview. */
  summary: string;
  /** Compact tech pills (text-xs). Deliberately different strings/order from detail.techStack. */
  tech: string[];
  /** "View Details" on all five. */
  ctaLabel: string;
  /** ArrowRight — "w-4 h-4 ml-2". */
  ctaIcon: LucideIcon;
}

/** The large <DialogContent> detail modal. */
export interface ProjectDetail {
  /** DialogTitle text. */
  title: string;
  /** Badge inside DialogTitle (identical to card.badge on all five). */
  badge: string;
  /** DialogDescription text (identical to card.description on all five). */
  description: string;
  /** OPTIONAL. Not every project has a recorded demo; the modal omits the frame. */
  video?: ProjectVideo;
  /**
   * OPTIONAL — "Live Demo" h4 above the video, wrapped with the video in a
   * `space-y-3` div. Present on CBESS / Odysseyelp / Wallet Backend only;
   * Hacker Introspector and CleverCourse render the bare video wrapper.
   */
  demoHeading?: ProjectHeading;
  /** OPTIONAL — award callout between the video and the tech stack. CleverCourse only. */
  award?: ProjectAward;
  /** Verbatim h4 copy: "Tech Stack" (first three) | "Technology Stack" (last two). No icon, mb-3. */
  techHeading: string;
  /** Long-form tech pills (no text-xs). */
  techStack: string[];
  /** <Separator className="bg-white/10" /> after the tech stack. True on the last two only. */
  showSeparatorAfterTechStack: boolean;
  /**
   * OPTIONAL — "Overview" h4 above the description paragraph. Present on
   * CBESS / Odysseyelp / Wallet Backend only; the last two render a bare <p>.
   */
  overviewHeading?: ProjectHeading;
  /** Description paragraph; <strong> runs preserved as segments. */
  overview: RichTextSegment[];
  /** Ordered bullet blocks, exactly as they appear in the modal. */
  sections: ProjectBulletSection[];
  cta: ProjectLink;
}

/**
 * Per-item Tailwind deltas that MUST survive verbatim. Every project supplies
 * every applicable value explicitly, so no component-side defaulting is needed.
 */
export interface ProjectStyleVariants {
  /** "hover:bg-white/[0.06]" (first three) | "hover:bg-white/[0.07]" (last two). */
  cardHoverClass: string;
  /** CardDescription tone: "text-slate-400" everywhere except Odysseyelp ("text-slate-300"). */
  cardDescriptionToneClass: string;
  /** "bg-black" appended to the CARD video wrapper only (Odysseyelp, Hacker Introspector, CleverCourse). */
  cardVideoWrapperExtraClass?: string;
  /** "font-semibold" on the card "View Details" Button (first three only). */
  cardCtaExtraClass?: string;
  /** Detail body wrapper: "space-y-6 mt-4" (first three) | "space-y-6" (last two). */
  detailBodyClass: string;
}

export interface Project {
  /** Stable slug for the React key. */
  id: string;
  /** Commented-out projects preserved as data; filtered at render. None currently hidden. */
  hidden?: boolean;
  card: ProjectCardSummary;
  detail: ProjectDetail;
  style: ProjectStyleVariants;
}

export type ProjectList = Project[];

/** Section shell copy for <section id="projects">. */
export interface ProjectsSectionCopy {
  id: string;
  heading: string;
  subheading: string;
}

export const projectsSection: ProjectsSectionCopy = {
  id: "projects",
  heading: "Featured Projects",
  subheading: "Building solutions that matter",
};

export const projects: ProjectList = [
  {
    /*
     * No recorded demo, so `video` is omitted on both the card and the detail —
     * the modal drops the frame rather than showing an empty box. Tech tags are
     * drawn only from techniques the project description actually names; no
     * library or framework is inferred.
     */
    id: "rag-search-engine",
    card: {
      badge: "Retrieval Augmented Generation",
      badgeIcon: Search,
      title: "RAG Search Engine",
      description: "Movie search across keyword, semantic, hybrid and image",
      summary:
        "A movie search engine built to learn how retrieval augmented generation works, with an LLM generating answers from the retrieved results.",
      tech: [
        "RAG",
        "BM25",
        "Embeddings",
        "Semantic Search",
        "Hybrid Search",
        "Reciprocal Rank Fusion",
        "Cross-Encoder",
        "Multimodal Search",
        "LLM",
        "CLI",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "RAG Search Engine",
      badge: "Retrieval Augmented Generation",
      description: "Movie search across keyword, semantic, hybrid and image",
      techHeading: "Techniques",
      techStack: [
        "RAG",
        "BM25",
        "Embeddings",
        "Semantic Search",
        "Hybrid Search",
        "Reciprocal Rank Fusion",
        "Cross-Encoder",
        "Multimodal Search",
        "LLM",
        "Evaluation",
        "CLI",
      ],
      showSeparatorAfterTechStack: true,
      overviewHeading: { text: "Overview", icon: Code2 },
      overview: [
        {
          text: "A movie search engine built to learn how retrieval augmented generation works. It lets you search a movie dataset using keyword search, semantic search, hybrid search, and image search, then use an LLM to generate answers from the results.",
        },
      ],
      sections: [
        {
          heading: "What it does",
          icon: Sparkles,
          items: [
            {
              text: "Keyword search: classic BM25 style search over movie descriptions.",
            },
            {
              text: "Semantic search: search using text embeddings to match by meaning.",
            },
            {
              text: "Hybrid search: combines keyword and semantic search, with weighted and reciprocal rank fusion methods.",
            },
            {
              text: "Reranking: reorders results using a cross encoder or an LLM.",
            },
            {
              text: "Query enhancement: spell correction, query expansion, and query rewriting to improve search results.",
            },
            {
              text: "Multimodal search: search for movies using an image instead of text.",
            },
            {
              text: "RAG: ask questions and get an LLM generated answer based on search results, with support for summaries and citations.",
            },
            {
              text: "Evaluation: measures search quality with precision, recall, and F1 scores against a golden dataset.",
            },
          ],
        },
        {
          heading: "Project structure",
          icon: Layers,
          items: [
            {
              text: "cli/ — command line tools, one per feature: keyword search, semantic search, hybrid search, multimodal search, augmented generation, evaluation.",
            },
            { text: "cli/lib/ — the underlying logic for each feature." },
            { text: "data/ — movie dataset, golden test set, and sample files." },
            {
              text: "cache/ — cached embeddings and indexes, so search is fast after the first run.",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/prajithravisankar/retrieval-augmented-generation",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardCtaExtraClass: "font-semibold",
      detailBodyClass: "space-y-6 mt-4",
    },
  },
  {
    id: "cbess",
    card: {
      badge: "Cryptography",
      badgeIcon: Star,
      title: "CBESS",
      description: "Chess-Based Encryption and Steganographic System",
      video: {
        src: "https://www.youtube.com/embed/DY3e02OyIUc",
        title: "CBESS Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      summary:
        "A secure communication tool that combines cryptography and steganography using chess games as a key source.",
      tech: [
        "Python",
        "Tkinter",
        "AES-256",
        "Cryptography",
        "LSB Steganography",
        "Stockfish AI",
        "PIL/Pillow",
        "Image Processing",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "CBESS",
      badge: "Cryptography",
      description: "Chess-Based Encryption and Steganographic System",
      video: {
        src: "https://www.youtube.com/embed/DY3e02OyIUc",
        title: "CBESS Demo - Chess-Based Encryption System",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      demoHeading: { text: "Live Demo", icon: ExternalLink },
      techHeading: "Tech Stack",
      techStack: [
        "Python",
        "Tkinter",
        "AES-256",
        "Cryptography",
        "LSB Steganography",
        "Stockfish AI",
        "PIL/Pillow",
        "Image Processing",
      ],
      showSeparatorAfterTechStack: false,
      overviewHeading: { text: "Overview", icon: Code2 },
      overview: [
        {
          text: "A secure communication tool that combines cryptography and steganography using chess games as a key source. Encrypts messages and hides both the encrypted message and the key within chessboard images, enabling discreet and secure information transfer without traditional key exchange methods.",
        },
      ],
      sections: [
        {
          heading: "Problem Solved",
          icon: Sparkles,
          items: [
            {
              label: "Eliminates Traditional Key Exchange",
              text: "The key is derived from a shared chess game, so there's no need to explicitly transmit a key.",
            },
            {
              label: "Combines Encryption and Steganography",
              text: "The encrypted message and the key source (chess moves) are hidden within images, making communication less conspicuous.",
            },
          ],
        },
        {
          heading: "Key Achievements",
          icon: Award,
          items: [
            {
              text: "Engineered novel cryptographic system using chess gameplay as key derivation source, eliminating vulnerable key transmission by reconstructing AES-256 keys from algebraic move notation.",
            },
            {
              text: "Developed dual-interface application (GUI/CLI) with integrated Stockfish chess engine and automated steganographic embedding of encrypted payloads into chessboard images using least significant bit manipulation.",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/prajithravisankar/CBESS-public",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardCtaExtraClass: "font-semibold",
      detailBodyClass: "space-y-6 mt-4",
    },
  },
  {
    id: "odysseyelp",
    card: {
      badge: "AI-Powered",
      badgeIcon: Star,
      title: "Odysseyelp",
      description: "Collaborative Trip Planning & Discovery Application",
      video: {
        src: "https://www.youtube.com/embed/eiIcP8STSYU",
        title: "Odysseyelp Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      summary:
        "An AI-powered collaborative trip planning and discovery application with real-time business data and interactive mapping.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Mapbox GL",
        "Yelp Fusion API",
        "Google Gemini AI",
        "AI Workflow",
        "Interactive Maps",
        "Social Features",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "Odysseyelp",
      badge: "AI-Powered",
      description: "Collaborative Trip Planning & Discovery Application",
      video: {
        src: "https://www.youtube.com/embed/eiIcP8STSYU",
        title: "Odysseyelp Demo - AI-Powered Trip Planning",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      demoHeading: { text: "Live Demo", icon: ExternalLink },
      techHeading: "Tech Stack",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Mapbox GL",
        "Yelp Fusion API",
        "Google Gemini AI",
        "AI Workflow",
        "Interactive Maps",
        "Social Features",
      ],
      showSeparatorAfterTechStack: false,
      overviewHeading: { text: "Overview", icon: Code2 },
      overview: [
        {
          text: "An AI-powered collaborative trip planning and discovery application that helps users create, share, and explore personalized and real-world location itineraries. Leverages Yelp Fusion API for real-time business data (ratings, reviews, opening hours) combined with Google Gemini AI for structured responses. Features interactive mapping, group collaboration, and social discovery.",
        },
      ],
      sections: [
        {
          heading: "Key Achievements",
          icon: Award,
          items: [
            {
              text: "Built a multi-stage AI workflow to generate real itineraries: preferences + user prompt → Gemini prompt shaping → Yelp JSON results → Gemini field extraction for UI rendering.",
            },
            {
              text: 'Implemented chat-page pipeline with a multi-step preference form that collects constraints and produces an "ultimate prompt" for higher-quality itinerary generation.',
            },
            {
              text: "Developed itinerary plan cards styled like YouTube video cards with live Mapbox map-tile thumbnails, plus a detailed itinerary viewer for user-created trips.",
            },
            {
              text: "Shipped Explore (social discovery) features enabling like/dislike (mutually exclusive) and comments on published itineraries; also built the landing page.",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/srijanravisankar/odysseyelp",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardVideoWrapperExtraClass: "bg-[color:var(--paper-sunk)]",
      cardCtaExtraClass: "font-semibold",
      detailBodyClass: "space-y-6 mt-4",
    },
  },
  {
    id: "wallet-backend",
    card: {
      badge: "REST API",
      badgeIcon: Star,
      title: "Wallet Backend",
      description: "Personal Finance Management System (Class Project)",
      video: {
        src: "https://www.youtube.com/embed/DRINEXERaqk",
        title: "Wallet Backend Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      summary:
        "A Personal Finance Management System built with Kotlin and Ktor, demonstrating various programming paradigms.",
      tech: [
        "Kotlin",
        "Ktor",
        "PostgreSQL",
        "Docker",
        "Postman",
        "JDBC",
        "kotlinx-serialization",
        "REST API",
        "SQL Security",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "Wallet Backend",
      badge: "REST API",
      description: "Personal Finance Management System (Class Project)",
      video: {
        src: "https://www.youtube.com/embed/DRINEXERaqk",
        title: "Wallet Backend Demo - Personal Finance API",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      demoHeading: { text: "Live Demo", icon: ExternalLink },
      techHeading: "Tech Stack",
      techStack: [
        "Kotlin",
        "Ktor",
        "PostgreSQL",
        "Docker",
        "Postman",
        "JDBC",
        "kotlinx-serialization",
        "REST API",
        "SQL Security",
      ],
      showSeparatorAfterTechStack: false,
      overviewHeading: { text: "Overview", icon: Code2 },
      overview: [
        {
          text: "A Personal Finance Management System built as a class project for COMP 4411 - Programming Languages at Lakehead University. Demonstrates various programming paradigms including Object-Oriented, Procedural, and Concurrent programming using Kotlin and the Ktor framework. Features complete CRUD operations for transactions and budgets with automated database management.",
        },
      ],
      sections: [
        {
          heading: "Key Achievements",
          icon: Award,
          items: [
            {
              text: "Built REST endpoints (CRUD) for Transactions and Budgets with JSON serialization and clean route grouping (e.g., /transactions, /budgets).",
            },
            {
              text: "Automated database initialization on server startup: created tables if missing and defined custom PostgreSQL ENUMs (e.g., transaction type, period type) for data integrity.",
            },
            {
              text: "Prevented SQL injection using prepared statements with placeholders across inserts/updates; dockerized PostgreSQL for consistent local dev environments.",
            },
            {
              text: "Benchmarked POST /transactions: 10 requests with response times 17–142ms (~40ms average) during MVP validation.",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/prajithravisankar/wallet-backend",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardCtaExtraClass: "font-semibold",
      detailBodyClass: "space-y-6 mt-4",
    },
  },
  {
    id: "hacker-introspector",
    card: {
      badge: "MLH Hackathon Submission",
      badgeIcon: Star,
      title: "Hacker Introspector",
      description:
        "AI-Powered GitHub Repository Analytics & Voice Conversation Platform",
      video: {
        src: "https://www.youtube.com/embed/rhbpku8DxKQ",
        title: "Hacker Introspector Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      summary:
        "Built for MLH Hack for Hackers 2026. Analyze GitHub repositories with AI, chat about code, and have voice conversations powered by Gemini AI and ElevenLabs.",
      tech: [
        "Go",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Gemini AI",
        "ElevenLabs TTS",
        "GitHub API",
        "SQLite",
        "Docker",
        "Vercel",
        "Vultr VPS",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "Hacker Introspector",
      badge: "MLH Hackathon Submission",
      description:
        "AI-Powered GitHub Repository Analytics & Voice Conversation Platform",
      video: {
        src: "https://www.youtube.com/embed/rhbpku8DxKQ",
        title: "Hacker Introspector Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      techHeading: "Technology Stack",
      techStack: [
        "Go 1.25",
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Gin Framework",
        "Gemini AI 2.5 Flash",
        "ElevenLabs TTS",
        "GitHub API",
        "GORM + SQLite",
        "Docker",
        "Vercel",
        "Vultr VPS",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
      showSeparatorAfterTechStack: true,
      overview: [
        { text: "Built for " },
        { text: "MLH Hack for Hackers 2026", bold: true },
        {
          text: ", Hacker Introspector is an AI-powered platform that provides deep GitHub repository analytics and enables natural conversations about code through both text and voice interfaces.",
        },
      ],
      sections: [
        {
          heading: "Key Features",
          icon: Code2,
          items: [
            {
              label: "Repository Analytics",
              text: "Deep GitHub analysis with commit heatmaps, language breakdown, contributor insights, and AI-powered code quality scoring",
            },
            {
              label: "AI Smart Summary",
              text: "Automatic project archetype detection, one-liner descriptions, key technology extraction, and complexity analysis",
            },
            {
              label: "Chat Mode",
              text: "Select up to 10 files and have natural conversations about the code with maintained conversation history",
            },
            {
              label: "Voice Conversation",
              text: "Real-time voice calls with AI using Web Speech API for recognition and ElevenLabs for natural TTS responses",
            },
            {
              label: "Interactive Visualizations",
              text: "Data visualization with Recharts for commit patterns, language distribution, and contributor statistics",
            },
          ],
        },
        {
          heading: "Architecture",
          icon: Sparkles,
          items: [
            {
              label: "Frontend",
              text: "Next.js 16 + React 19 + TypeScript deployed on Vercel with Tailwind CSS, Framer Motion for animations, and Recharts for data visualization",
            },
            {
              label: "Backend",
              text: "Go + Gin framework deployed on Vultr VPS with SQLite caching, GitHub API integration, Gemini AI for analysis, and ElevenLabs TTS",
            },
            {
              label: "API Design",
              text: "RESTful API with endpoints for repository analysis, smart summaries, file tree retrieval, text chat, and voice chat with TTS",
            },
            {
              label: "Deployment",
              text: "Dockerized backend on Vultr VPS, frontend on Vercel with CORS-enabled communication and environment-based configuration",
            },
          ],
        },
        {
          heading: "Key Achievements",
          icon: Award,
          items: [
            {
              text: "Developed full-stack application combining Go backend with Next.js frontend, integrating multiple AI services (Gemini, ElevenLabs) for advanced code analysis and voice interaction",
            },
            {
              text: "Implemented real-time voice conversation feature with Web Speech API for speech recognition and ElevenLabs TTS for natural voice responses, enabling interactive code discussions",
            },
            {
              text: "Built comprehensive GitHub analytics system with commit heatmaps, language breakdown visualizations, and AI-powered code quality assessment using Gemini 2.5 Flash",
            },
            {
              text: "Deployed production-ready application with Docker containerization on Vultr VPS for backend and Vercel for frontend, implementing SQLite caching for optimal performance",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/prajithravisankar/mlh_hack_for_hackers_hacker_introspector",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardVideoWrapperExtraClass: "bg-[color:var(--paper-sunk)]",
      detailBodyClass: "space-y-6",
    },
  },
  {
    id: "clevercourse",
    card: {
      badge: "🏆 United Hacks V6 Honorable Mentions II",
      badgeIcon: Star,
      title: "CleverCourse",
      description: "AI-Powered Gamified Micro-Courses for ADHD Learners",
      video: {
        src: "https://www.youtube.com/embed/Aa0wN1PN2Ng",
        title: "CleverCourse Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      summary:
        "Built for United Hacks V6. AI-powered educational platform generating personalized, gamified micro-courses designed for ADHD learners.",
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Gemini 2.0 Flash",
        "Drizzle ORM",
        "Turso",
        "React Flow",
        "Zustand",
        "Vercel",
      ],
      ctaLabel: "View Details",
      ctaIcon: ArrowRight,
    },
    detail: {
      title: "CleverCourse",
      badge: "🏆 United Hacks V6 Honorable Mentions II",
      description: "AI-Powered Gamified Micro-Courses for ADHD Learners",
      video: {
        src: "https://www.youtube.com/embed/Aa0wN1PN2Ng",
        title: "CleverCourse Demo",
        allow: PROJECT_VIDEO_ALLOW,
        allowFullScreen: true,
      },
      award: {
        icon: Award,
        title: "Moonshot Prize Honorable Mentions II",
        subtitle: "United Hacks V6",
      },
      techHeading: "Technology Stack",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Google Gemini 2.0 Flash",
        "Drizzle ORM",
        "Turso (libSQL)",
        "Zustand",
        "Tailwind CSS",
        "Radix UI / shadcn/ui",
        "Framer Motion",
        "React Flow",
        "Vercel",
      ],
      showSeparatorAfterTechStack: true,
      overview: [
        { text: "Built for " },
        { text: "United Hacks V6", bold: true },
        {
          text: ", CleverCourse is an AI-powered educational platform that generates personalized, gamified micro-courses designed specifically for learners with ADHD. Won ",
        },
        { text: "Moonshot Prize Honorable Mentions II", bold: true },
        { text: "." },
      ],
      sections: [
        {
          heading: "Key Features",
          icon: Code2,
          items: [
            {
              label: "AI Course Generation",
              text: "Input any topic, learning goal, skill level, and preferred tone to generate complete structured courses with articles, study materials, and quizzes using Google Gemini 2.0 Flash",
            },
            {
              label: "ADHD-Friendly Design",
              text: "Bite-sized article pages, variable XP rewards, streak systems, and achievement unlocks designed around ADHD dopamine research",
            },
            {
              label: "Interactive Study Materials",
              text: "Auto-generated flashcards for active recall and visual mind maps for concept connection, rendered with React Flow",
            },
            {
              label: "Context-Aware AI Chat",
              text: "Floating chat panel with text selection integration—highlight any content and ask questions with full course context",
            },
            {
              label: "Gamification Engine",
              text: "XP system with bonus chance multipliers, leveling progression, daily streaks with freeze protection, sparks currency, and unlockable achievements",
            },
            {
              label: "Course Visualization",
              text: "Interactive node-based graph view showing entire course structure with clickable navigation",
            },
          ],
        },
        {
          heading: "Architecture",
          icon: Sparkles,
          items: [
            {
              label: "Frontend",
              text: "Next.js 15 with React 19 and TypeScript, using App Router and Server Components, deployed on Vercel with Tailwind CSS, Radix UI primitives, and Framer Motion for animations",
            },
            {
              label: "Database",
              text: "Drizzle ORM with Turso (libSQL) for serverless SQLite, featuring 15+ tables for users, courses, sections, content, progress tracking, and gamification state",
            },
            {
              label: "AI Integration",
              text: "Google Gemini 2.0 Flash for iterative course generation, producing structured JSON outputs for articles, flashcards, mind maps, and quiz questions",
            },
            {
              label: "State Management",
              text: "Zustand stores for course navigation, gamification state, chat context, and authentication with cookie-based sessions",
            },
            {
              label: "Deployment",
              text: "Serverless deployment on Vercel with Turso cloud database for persistence across serverless function invocations",
            },
          ],
        },
        {
          heading: "Key Achievements",
          icon: Award,
          items: [
            {
              text: "Developed AI-powered course generation system that iteratively builds complete learning experiences with articles, study materials, and assessments from a single topic input",
            },
            {
              text: "Implemented research-backed gamification engine with variable reward schedules, streak mechanics, and achievement systems specifically designed to engage ADHD learners",
            },
            {
              text: "Built context-aware AI chat assistant that understands current course content, enabling natural conversations about learning material through text selection or keyboard shortcuts",
            },
            {
              text: "Created interactive course visualization using React Flow, providing eagle-view navigation of course structure with clickable nodes for direct content access",
            },
            {
              text: "Deployed production-ready serverless application with Turso cloud database, bcrypt authentication, and comprehensive progress tracking across 15+ database tables",
            },
          ],
        },
      ],
      cta: {
        href: "https://github.com/srijanravisankar/CleverCourse",
        label: "View on GitHub",
        icon: Github,
        trailingIcon: ExternalLink,
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
    style: {
      cardHoverClass: "",
      cardDescriptionToneClass: "text-[color:var(--ink-soft)]",
      cardVideoWrapperExtraClass: "bg-[color:var(--paper-sunk)]",
      detailBodyClass: "space-y-6",
    },
  },
];

export default projects;
