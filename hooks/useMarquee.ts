"use client";

import { useEffect, useRef } from "react";

type Options = {
  /** CSS var (read off the track) holding the time for one full copy to scroll
   * past — keeps the token the single source of truth for the auto-scroll speed. */
  durationVar?: string;
  /** CSS var holding the eased-animation time for one arrow nudge. */
  nudgeVar?: string;
  fallbackMs?: number;
  nudgeFallbackMs?: number;
};

function readMs(el: Element, varName: string, fallback: number): number {
  const raw = getComputedStyle(el).getPropertyValue(varName).trim();
  const n = parseFloat(raw);
  if (Number.isNaN(n)) return fallback;
  return raw.endsWith("ms") ? n : n * 1000;
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Drives a seamless, auto-scrolling marquee on a track whose children are
 * duplicated (one copy after another). The track sits inside an `overflow:hidden`
 * viewport and is moved with `transform: translate3d` — GPU-composited and
 * sub-pixel smooth, so the very slow drift doesn't judder the way `scrollLeft`
 * (whole-pixel only) does. The position wraps by one copy's width, so the loop
 * is invisible.
 *
 * - `nudge("left" | "right")` eases ~2/3 of the visible width over the nudge
 *   duration (gentler than a native jump); auto-scroll resumes after.
 * - `pause` / `resume` freeze the drift on hover.
 */
export function useMarquee({
  durationVar = "--clients-scroll-duration",
  nudgeVar = "--clients-nudge-duration",
  fallbackMs = 350000,
  nudgeFallbackMs = 1000,
}: Options = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const posRef = useRef(0);
  const manualRef = useRef<{ from: number; to: number; start: number; dur: number } | null>(null);
  const durMsRef = useRef(fallbackMs);
  const nudgeMsRef = useRef(nudgeFallbackMs);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    durMsRef.current = readMs(el, durationVar, fallbackMs);
    nudgeMsRef.current = readMs(el, nudgeVar, nudgeFallbackMs);

    let raf = 0;
    let last = performance.now();
    const frame = (now: number) => {
      const dt = now - last;
      last = now;
      const half = el.scrollWidth / 2; // width of one copy
      if (half > 0) {
        const m = manualRef.current;
        if (m) {
          const t = Math.min((now - m.start) / m.dur, 1);
          posRef.current = m.from + (m.to - m.from) * easeInOut(t);
          if (t >= 1) manualRef.current = null;
        } else if (!hoverRef.current && durMsRef.current > 0) {
          posRef.current += (half / durMsRef.current) * dt;
        }
        const applied = ((posRef.current % half) + half) % half;
        el.style.transform = `translate3d(${-applied}px, 0, 0)`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [durationVar, nudgeVar, fallbackMs, nudgeFallbackMs]);

  function nudge(dir: "left" | "right") {
    const el = trackRef.current;
    if (!el) return;
    const viewport = el.parentElement;
    const visible = viewport ? viewport.clientWidth : el.clientWidth;
    const amount = visible * (2 / 3);
    const from = posRef.current;
    manualRef.current = {
      from,
      to: from + (dir === "right" ? amount : -amount),
      start: performance.now(),
      dur: nudgeMsRef.current,
    };
  }

  const pause = () => {
    hoverRef.current = true;
  };
  const resume = () => {
    hoverRef.current = false;
  };

  return { trackRef, nudge, pause, resume };
}
