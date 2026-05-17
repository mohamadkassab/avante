"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navBtnSx = {
  position: "absolute" as const,
  top: "50%",
  zIndex: 10,
  width: "var(--carousel-nav-btn-size)",
  height: "var(--carousel-nav-btn-size)",
  bgcolor: "var(--color-section-bg-white)",
  borderRadius: "50%",
  boxShadow: "var(--shadow-lg)",
  display: { xs: "none", sm: "flex" },
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  transition: "background-color var(--duration-medium)",
  "&:hover": { bgcolor: "var(--color-nav-btn-hover)" },
};

export default function Carousel({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card?.offsetWidth ?? 480;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="button"
        type="button"
        onClick={() => scroll("left")}
        sx={{ ...navBtnSx, left: 0, transform: "translate(var(--carousel-nav-btn-offset), -50%)" }}
      >
        <ChevronLeftIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--color-text-primary)" }} />
      </Box>

      <Box
        component="button"
        type="button"
        onClick={() => scroll("right")}
        sx={{ ...navBtnSx, right: 0, transform: "translate(calc(-1 * var(--carousel-nav-btn-offset)), -50%)" }}
      >
        <ChevronRightIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--color-text-primary)" }} />
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: "var(--carousel-gap)",
          overflowX: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          pb: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
