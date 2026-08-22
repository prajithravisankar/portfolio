/**
 * ============================================================================
 * MLH FELLOWSHIP SUBMISSION — the JWT build log (/mlh-swe-fellowship-submission).
 * ============================================================================
 *
 * The page maps what was done (narrative) to the exact video and timestamp
 * where it happened (moments). Every narrative below is VERBATIM from the
 * submission brief — deliberately plain and first-person. Do not rewrite,
 * do not add marketing language, do not add emoji. The plainness is the point:
 * this page is reviewed by MLH fellowship judges, and "the sessions where
 * nothing worked" staying in the record is what makes the rest credible.
 *
 * All 15 video ids, the repo and the playlist were verified live before this
 * file was written (oembed 200 on every id; the playlist resolves to
 * "MLH SWE Fellowship submission - JWT" on the BigOGrindset channel).
 * `seconds` values are precomputed and used as-is for both the chip links and
 * the embed start offsets.
 * ============================================================================
 */

/** One linked timestamp inside a session video. */
export interface SessionMoment {
  /** What happens at this timestamp, e.g. "dependencies = [] in pyproject.toml". */
  label: string;
  /** Human-readable timestamp, e.g. "30:18" or "1:15:13". */
  ts: string;
  /** The same timestamp in seconds — used verbatim in links and embeds. */
  seconds: number;
}

/**
 * A run of consecutive sessions sharing one backdrop.
 *
 * The four skyline plates are the same view under four skies, mapped to the
 * log's own arc rather than to clock time: dawn for setup, storm for the days
 * decode would not work, clear sky for the encode API going in cleanly, dusk
 * for the finish. Labels describe only what the sessions in that run contain —
 * nothing is invented.
 */
export interface BuildChapter {
  id: string;
  /** Day range covered, e.g. "Day 3 — Day 5". */
  range: string;
  /** Short description of what happens in this run. */
  label: string;
  /** Key into `sectionArt`. */
  art: "jwtDawn" | "jwtStorm" | "jwtClear" | "jwtDusk";
  /** Session ids, in order. */
  sessionIds: string[];
}

/** One recorded build session. */
export interface BuildSession {
  /** Stable key. */
  id: string;
  /** "Day N", plus "Session 2" where noted. */
  day: string;
  /** YouTube video id. */
  videoId: string;
  /** Verbatim first-person narrative. */
  narrative: string;
  /** Linked timestamps. Empty when the session has none. */
  moments: SessionMoment[];
}

export const mlhPage = {
  route: "/mlh-swe-fellowship-submission",
  title: "Building JWT from Scratch",
  subtitle: "MLH Software Engineering Fellowship, code sample submission",
  /** Verbatim from the brief. */
  intro:
    "This is my MLH fellowship code sample: a JSON Web Token library written from scratch in pure Python. No AI, no external libraries, dependencies = [] on purpose. Even the base64url codec is hand-rolled. I screen-recorded every build session, so below, each step links to the exact video and timestamp where it happened.",
  links: [
    {
      label: "GitHub repo",
      href: "https://github.com/prajithravisankar/cracked-jwt-copy",
    },
    {
      label: "Full playlist",
      href: "https://www.youtube.com/playlist?list=PLYN7AfeqsrVU",
    },
    {
      label: "Channel",
      href: "https://www.youtube.com/@BigOGrindset",
    },
  ],
  /** Verbatim from the brief. */
  footerNote:
    "Some moments missed the recording, like the encode test suite and parts of the Excalidraw design sessions. What did get recorded is unedited, including the sessions where nothing worked.",
  backLabel: "Back to portfolio",
  /**
   * Official MLH Fellowship lockup, used as supplied.
   *
   * The blue field is part of the mark, not a background to knock out — third
   * party brand assets get used as provided, never recoloured, cropped or
   * redrawn to suit a theme. Intrinsic size is 362x118; render it to width and
   * let the height follow so it can never be distorted.
   */
  logo: {
    src: "/mlh-fellowship-logo.png",
    alt: "MLH Fellowship",
    width: 362,
    height: 118,
  },
} as const;

export const buildSessions: BuildSession[] = [
  {
    id: "day-3",
    day: "Day 3",
    videoId: "Q8wbSx_nfPQ",
    narrative:
      "Project setup. I set dependencies = [] in pyproject.toml on purpose, to declare that this project runs on nothing but the Python standard library: hashlib, hmac, json, and time. Then I set up a Makefile to run the test suites quickly, because the whole plan was test driven development.",
    moments: [
      { label: "dependencies = [] in pyproject.toml", ts: "30:18", seconds: 1818 },
      { label: "Makefile for the test suites", ts: "53:21", seconds: 3201 },
    ],
  },
  {
    id: "day-4",
    day: "Day 4",
    videoId: "HjQ72xbCo6o",
    narrative:
      "Wrote the base64url test suite before implementing anything. Known-answer tests from the RFC 4648 vectors, round-trip tests that push bytes through encode then decode and expect the original back, and rejection tests for '=' padding since the url-safe form strips it. Finished with test_reject_impossible_length: a base64url string can never have a length of 4n + 1. To prove the tests themselves were right, I temporarily wired Python's own base64 urlsafe functions in place of my stubs, watched everything pass, then took the library back out. The encode test suite session before this one missed the recording.",
    moments: [
      { label: "writing the decode test suite", ts: "11:25", seconds: 685 },
      { label: "test_reject_impossible_length", ts: "1:15:13", seconds: 4513 },
    ],
  },
  {
    id: "day-5",
    day: "Day 5",
    videoId: "KUEqACtsahA",
    narrative:
      "Planned my own encoder to replace the borrowed library functions. Before starting this project I had spent 20+ hours working through JWT internals by hand in GoodNotes on my iPad, and this session is where I review those notes on camera: how the payload becomes binary, how 8-bit groups get regrouped into 6-bit ones, and how padding is stripped to get the url-safe form. Then I turned the notes into small problems inside b64url_encode.",
    moments: [
      { label: "planning my own implementation", ts: "15:15", seconds: 915 },
      { label: "reviewing the GoodNotes algorithm notes", ts: "20:40", seconds: 1240 },
      { label: "turning notes into smaller problems", ts: "27:23", seconds: 1643 },
      { label: "the breakdown I arrived at", ts: "47:33", seconds: 2853 },
    ],
  },
  {
    id: "day-9",
    day: "Day 9",
    videoId: "dqwAToGNUlY",
    narrative:
      "An entire session spent trying to get decode working, ending with the test suite still failing. I kept it in the playlist anyway. Getting stuck is part of the record.",
    moments: [],
  },
  {
    id: "day-16",
    day: "Day 16",
    videoId: "lGA6qUwkFS0",
    narrative:
      "The day the decoder got finished, and the most important session for me. I broke the problem down on paper first, working out how decode inverts encode and what I was getting wrong. Deleted the old decode function and restarted from a stub. To verify the character-to-index mapping I opened the Python debugger inside nvim, set breakpoints, and stepped through the alphabet list. Did the same for the 6-bit conversion. By the end of the session every test passed.",
    moments: [
      { label: "breaking the problem down on paper", ts: "19:21", seconds: 1161 },
      { label: "restarting decode from a stub", ts: "31:45", seconds: 1905 },
      { label: "debugger on the alphabet mapping", ts: "40:00", seconds: 2400 },
      { label: "debugging the 6-bit conversion", ts: "46:35", seconds: 2795 },
      { label: "decode complete, all tests pass", ts: "1:23:21", seconds: 5001 },
    ],
  },
  {
    id: "day-17",
    day: "Day 17",
    videoId: "Ew6vKjKWWvE",
    narrative:
      "Started the exception hierarchy: one base error, then pre-auth errors for tokens that cannot be trusted at all, versus validation errors for authentic tokens that fail a claim check like expiry or audience.",
    moments: [
      { label: "implementing the exception classes", ts: "17:26", seconds: 1046 },
    ],
  },
  {
    id: "day-19",
    day: "Day 19",
    videoId: "rHwib6xuOrg",
    narrative:
      "Designed the encode API in Excalidraw (the design part itself missed the recording), then spent the session writing TDD unit tests against stub functions, working from the official unittest documentation.",
    moments: [
      { label: "session start, Excalidraw design mentioned", ts: "0:05", seconds: 5 },
    ],
  },
  {
    id: "day-20",
    day: "Day 20",
    videoId: "cmRHIuMWfjI",
    narrative:
      "Implemented the encode API. Kept it as functional as I reasonably could, one role per function. Broke the API into parts, made each part a stub, so the whole problem reduced to filling in stubs one at a time.",
    moments: [
      { label: "one role per function", ts: "25:20", seconds: 1520 },
      { label: "decomposing encode into stubs", ts: "1:04:35", seconds: 3875 },
    ],
  },
  {
    id: "day-21",
    day: "Day 21",
    videoId: "bP4G7BKpkm4",
    narrative:
      "One test class per stub function, several test methods in each. Write the suite, watch it fail against the stub, then implement until green.",
    moments: [
      { label: "test classes for the stub functions", ts: "24:00", seconds: 1440 },
    ],
  },
  {
    id: "day-22",
    day: "Day 22",
    videoId: "bZFYuYHK6NM",
    narrative: "Finished the encode API, testing and implementation both.",
    moments: [{ label: "encode API complete", ts: "2:29:00", seconds: 8940 }],
  },
  {
    id: "day-22-s2",
    day: "Day 22, Session 2",
    videoId: "8UmqIVpUSD4",
    narrative:
      "Designed the entire decode API in Excalidraw before writing a single line of code.",
    moments: [
      { label: "decode API design in Excalidraw", ts: "5:30", seconds: 330 },
    ],
  },
  {
    id: "day-23",
    day: "Day 23",
    videoId: "Vwk1AoKKqLs",
    narrative:
      "Turned the decode design into stub functions, breaking the API down into small single-purpose units.",
    moments: [{ label: "decode API stubs", ts: "7:00", seconds: 420 }],
  },
  {
    id: "day-24",
    day: "Day 24",
    videoId: "IUlRJMrpFMo",
    narrative:
      "Test classes for the decode stubs, same pattern as encode: fail first, then implement.",
    moments: [
      { label: "writing the decode test classes", ts: "3:40", seconds: 220 },
    ],
  },
  {
    id: "day-25",
    day: "Day 25",
    videoId: "O-v-Xa-5wuw",
    narrative:
      "Completed the decode API and verified it against jwt.io's official example, using their payload and secret.",
    moments: [
      { label: "verified against the jwt.io example", ts: "2:28:35", seconds: 8915 },
    ],
  },
  {
    id: "day-26",
    day: "Day 26",
    videoId: "Tl5FwgQEbPo",
    narrative:
      "Wrapped the project with a small main driver: an auth service issues a token and verifies it, then an attacker rewrites the payload and gets rejected with InvalidSignature.",
    moments: [],
  },
];

export const buildChapters: BuildChapter[] = [
  {
    id: "setup",
    range: "Day 3 — Day 5",
    label: "Setup, and planning the codec by hand",
    art: "jwtDawn",
    sessionIds: ["day-3", "day-4", "day-5"],
  },
  {
    id: "decode-struggle",
    range: "Day 9 — Day 16",
    label: "Decode: stuck, then finished",
    art: "jwtStorm",
    sessionIds: ["day-9", "day-16"],
  },
  {
    id: "encode-api",
    range: "Day 17 — Day 22",
    label: "Errors, and the encode API",
    art: "jwtClear",
    sessionIds: ["day-17", "day-19", "day-20", "day-21", "day-22"],
  },
  {
    id: "decode-api",
    range: "Day 22 — Day 26",
    label: "The decode API, and the driver",
    art: "jwtDusk",
    sessionIds: ["day-22-s2", "day-23", "day-24", "day-25", "day-26"],
  },
];

/** Look-up used by the page to resolve a chapter's session ids. */
export const sessionsById: Record<string, BuildSession> = Object.fromEntries(
  buildSessions.map((session) => [session.id, session]),
);
