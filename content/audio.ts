/**
 * ============================================================================
 * AMBIENT AUDIO — optional background music.
 * ============================================================================
 *
 * OFF BY DEFAULT, ALWAYS. Two reasons:
 *
 *   1. Browsers block autoplay with sound outright. Chrome, Safari and Firefox
 *      all require a user gesture first, so there is no version of this that
 *      starts on its own without a hack that breaks.
 *   2. This is a portfolio a recruiter may open in an open-plan office.
 *      Unexpected audio is a bad first three seconds. Offering it is a nice
 *      touch; imposing it is not.
 *
 * The file is 4.3 MB, so the <audio> element is not mounted until the control
 * is pressed, and then carries `preload="none"`. A visitor who never touches
 * the control pays nothing for it.
 *
 * LICENCE. "Ice Cream" by Scott Buckley, Creative Commons Attribution 4.0
 * International (CC BY 4.0). CC BY permits use in any medium — including a
 * website, not only video — provided attribution is given. The `attribution`
 * block below carries the four things CC BY asks for (Title, Author, Source,
 * Licence) and is rendered in the footer. Do not remove it: the attribution is
 * the condition of the licence, not a courtesy.
 * ============================================================================
 */

export interface AudioAttribution {
  /** Track title. */
  title: string;
  /** Composer. */
  author: string;
  /** Composer's site. */
  authorUrl: string;
  /** Where the track was obtained. */
  sourceLabel: string;
  sourceUrl: string;
  /** Human-readable licence name. */
  licenseLabel: string;
  /** Canonical licence deed. */
  licenseUrl: string;
}

export interface AmbientAudioConfig {
  /** Path under /public. */
  src: string;
  /** Playback volume once faded in, 0-1. Kept low — this is ambience. */
  volume: number;
  /** Fade duration in milliseconds. An abrupt cut in or out is jarring. */
  fadeMs: number;
  /** Accessible labels for the toggle. */
  playLabel: string;
  pauseLabel: string;
  attribution: AudioAttribution;
}

export const ambientAudio: AmbientAudioConfig = {
  src: "/ice-cream-by-scott-buckley.mp3",
  volume: 0.28,
  fadeMs: 1200,
  playLabel: "Play ambient music",
  pauseLabel: "Pause ambient music",
  attribution: {
    title: "Ice Cream",
    author: "Scott Buckley",
    authorUrl: "https://www.scottbuckley.com.au/",
    sourceLabel: "Audio Library",
    sourceUrl: "https://links.al/06D",
    licenseLabel: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
};
