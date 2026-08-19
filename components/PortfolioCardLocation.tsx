"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";

/**
 * Card location line. The icon is pinned to the first line (`flex-start`), and
 * the label is trimmed dynamically to fit a single line: starting from the full
 * string, leading comma-separated segments are dropped one by one until the text
 * fits the available width (e.g. "Magic Planet, Mirdif City Centre (MCC), Dubai,
 * UAE" → "Dubai, UAE"). Re-measures on resize and once web fonts have loaded.
 */
export default function PortfolioCardLocation({ location }: { location: string }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [text, setText] = useState(location);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const fit = () => {
      const available = el.clientWidth;
      if (!available) return;
      const canvas = canvasRef.current ?? (canvasRef.current = document.createElement("canvas"));
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const style = getComputedStyle(el);
      ctx.font = style.font && style.font.trim()
        ? style.font
        : `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

      const segments = location.split(", ");
      let start = 0;
      // Drop leading segments until the remainder fits one line (keep at least one).
      while (
        start < segments.length - 1 &&
        ctx.measureText(segments.slice(start).join(", ")).width > available
      ) {
        start++;
      }
      setText(segments.slice(start).join(", "));
    };

    fit();

    const ro = new ResizeObserver(fit);
    if (rowRef.current) ro.observe(rowRef.current);
    document.fonts?.ready.then(fit).catch(() => {});

    return () => ro.disconnect();
  }, [location]);

  return (
    <Box
      ref={rowRef}
      sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, color: "var(--portfolio-location-color)" }}
    >
      <LocationOnIcon sx={{ fontSize: "var(--portfolio-location-icon-size)", flexShrink: 0 }} />
      <Typography
        component="span"
        ref={textRef}
        sx={{ fontSize: "var(--font-size-nav)", flex: 1, minWidth: 0 }}
      >
        {text}
      </Typography>
    </Box>
  );
}
