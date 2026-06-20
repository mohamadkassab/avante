"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type SliderImage = { src: string; alt: string };

const AUTO_ADVANCE_MS = 5000;

const arrowSx = {
  position: "absolute" as const,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "var(--about-slider-arrow-size)",
  height: "var(--about-slider-arrow-size)",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "var(--about-slider-arrow-bg)",
  opacity: 0,
  transition: "opacity var(--duration-medium), background-color var(--duration-medium)",
  "&:hover": { bgcolor: "var(--about-slider-arrow-bg-hover)" },
};

export default function ImageSlider({ images }: { images: SliderImage[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        "&:hover .slider-arrow": { opacity: 1 },
      }}
    >
      {images.map((img, i) => (
        <Box
          key={img.src}
          component="img"
          src={img.src}
          alt={img.alt}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            opacity: i === index ? 1 : 0,
            transition: "opacity var(--about-slider-fade-duration) ease-in-out",
          }}
        />
      ))}

      {count > 1 && (
        <>
          <Box
            component="button"
            type="button"
            aria-label="Previous image"
            onClick={() => go(index - 1)}
            className="slider-arrow"
            sx={{ ...arrowSx, left: "var(--about-slider-arrow-offset)" }}
          >
            <ChevronLeftIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--about-slider-arrow-color)" }} />
          </Box>

          <Box
            component="button"
            type="button"
            aria-label="Next image"
            onClick={() => go(index + 1)}
            className="slider-arrow"
            sx={{ ...arrowSx, right: "var(--about-slider-arrow-offset)" }}
          >
            <ChevronRightIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--about-slider-arrow-color)" }} />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "var(--about-slider-dot-bottom)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              display: "flex",
              gap: "var(--about-slider-dot-gap)",
            }}
          >
            {images.map((img, i) => (
              <Box
                key={img.src}
                component="button"
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIndex(i)}
                sx={{
                  width: "var(--about-slider-dot-size)",
                  height: "var(--about-slider-dot-size)",
                  p: 0,
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  bgcolor: i === index ? "var(--about-slider-dot-active-color)" : "var(--about-slider-dot-color)",
                  transition: "background-color var(--duration-medium)",
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}
