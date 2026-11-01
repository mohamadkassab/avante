"use client";

import { useRef, useEffect } from "react";

interface HeroVideoProps {
  webm?: string;
  mp4: string;
  poster?: string;
  /** Wait until the video scrolls into view, then keep playing even once it leaves. */
  startWhenVisible?: boolean;
}

export default function HeroVideo({ webm, mp4, poster, startWhenVisible = false }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React sets `muted` as an attribute but not reliably as the DOM property;
    // browsers block autoplay unless the property is true. Set it imperatively.
    video.muted = true;
    if (!startWhenVisible) video.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          if (startWhenVisible) observer.disconnect();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [startWhenVisible]);

  return (
    <video
      ref={videoRef}
      autoPlay={!startWhenVisible}
      muted
      loop
      playsInline
      poster={poster}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
    >
      {webm && <source src={webm} type="video/webm" />}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
