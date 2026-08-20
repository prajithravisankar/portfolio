"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import { ambientAudio } from "@/content/audio";
import {
  AUDIO_TOGGLE,
  AUDIO_TOGGLE_ICON,
  AUDIO_TOGGLE_LABEL,
} from "@/components/portfolio/tokens";

/**
 * Optional background music, as a floating toggle.
 *
 * OFF BY DEFAULT. Browsers refuse autoplay with sound without a user gesture,
 * so this could never start on its own anyway — but it would also be the wrong
 * call for a portfolio someone might open in an office. The control offers the
 * music; it never imposes it.
 *
 * COSTS NOTHING UNLESS USED. The track is 4.3 MB. The <audio> node is not
 * mounted at all until the control is pressed, and even then carries
 * `preload="none"`, so a visitor who ignores the button downloads no audio.
 *
 * NO PERSISTED PREFERENCE, DELIBERATELY. An earlier version restored a saved
 * "on" from localStorage on mount. It was removed: autoplay policy means a
 * restored preference still cannot start playback, so all it bought was a
 * setState inside an effect (and the cascading render that comes with it) for
 * no behaviour a visitor could observe.
 *
 * FADES. Volume ramps over `fadeMs` in both directions; cutting ambience in or
 * out at full volume is jarring.
 */
export function AmbientAudio() {
  const { src, volume, fadeMs, playLabel, pauseLabel } = ambientAudio;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // Until the control has been pressed once we do not mount <audio> at all,
  // so nothing is requested from the network.
  const [isMounted, setIsMounted] = useState(false);

  const clearFade = () => {
    if (fadeTimer.current) {
      clearInterval(fadeTimer.current);
      fadeTimer.current = null;
    }
  };

  /** Ramp volume to `target`, then optionally run `onDone`. */
  const fadeTo = useCallback(
    (target: number, onDone?: () => void) => {
      const audio = audioRef.current;
      if (!audio) return;
      clearFade();

      const stepMs = 50;
      const steps = Math.max(1, Math.round(fadeMs / stepMs));
      const delta = (target - audio.volume) / steps;
      let remaining = steps;

      fadeTimer.current = setInterval(() => {
        const el = audioRef.current;
        if (!el) {
          clearFade();
          return;
        }
        remaining -= 1;
        el.volume = Math.min(1, Math.max(0, el.volume + delta));
        if (remaining <= 0) {
          el.volume = Math.min(1, Math.max(0, target));
          clearFade();
          onDone?.();
        }
      }, stepMs);
    },
    [fadeMs],
  );

  useEffect(() => clearFade, []);

  const toggle = useCallback(async () => {
    if (!isMounted) setIsMounted(true);

    // On the first press the element mounts in the same tick, so wait a frame
    // for the ref to attach before touching it.
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      fadeTo(0, () => audioRef.current?.pause());
      setIsPlaying(false);
      return;
    }

    audio.volume = 0;
    try {
      await audio.play();
      fadeTo(volume);
      setIsPlaying(true);
    } catch {
      // play() rejects if the gesture was not recognised as one. Leave the
      // control off rather than showing a state that is not true.
      setIsPlaying(false);
    }
  }, [fadeTo, isMounted, isPlaying, volume]);

  return (
    <>
      {isMounted ? <audio ref={audioRef} src={src} loop preload="none" /> : null}

      <button
        type="button"
        onClick={toggle}
        className={AUDIO_TOGGLE}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? pauseLabel : playLabel}
        title={isPlaying ? pauseLabel : playLabel}
      >
        {isPlaying ? (
          <Volume2 className={AUDIO_TOGGLE_ICON} aria-hidden="true" />
        ) : (
          <VolumeX className={AUDIO_TOGGLE_ICON} aria-hidden="true" />
        )}
        <span className={AUDIO_TOGGLE_LABEL}>
          {isPlaying ? "Sound on" : "Sound off"}
        </span>
      </button>
    </>
  );
}

export default AmbientAudio;
