"use client";

import { useState } from "react";
import Box from "@mui/material/Box";

type GalleryImage = { src: string; alt: string };

/**
 * Product detail gallery: a full-width main image with a horizontal thumbnail
 * row beneath it. Clicking a thumbnail swaps the main image. Interactive, so it
 * stays a client leaf while the surrounding ProductDetail remains server-side.
 */
export default function ProductGallery({ images }: { images: readonly GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const hasThumbs = images.length > 1;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--product-page-gallery-gap)",
      }}
    >
      <Box
        sx={{
          aspectRatio: "var(--product-detail-image-aspect)",
          borderRadius: "var(--radius-card)",
          overflow: "hidden",
          bgcolor: "var(--product-page-image-bg)",
          border: "var(--product-page-image-border-width) solid var(--product-page-image-border-color)",
          p: "var(--product-page-image-padding)",
        }}
      >
        <Box
          component="img"
          src={activeImage?.src}
          alt={activeImage?.alt}
          sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </Box>

      {hasThumbs && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "var(--product-page-thumb-gap)",
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              component="button"
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={img.alt}
              sx={{
                p: "var(--product-page-thumb-padding)",
                flexShrink: 0,
                width: "var(--product-page-thumb-size)",
                height: "var(--product-page-thumb-size)",
                borderRadius: "var(--radius-card)",
                overflow: "hidden",
                cursor: "pointer",
                bgcolor: "var(--product-page-image-bg)",
                border: "var(--product-page-thumb-border-width) solid",
                borderColor:
                  i === activeIndex ? "var(--color-primary)" : "var(--product-page-image-border-color)",
                transition: "border-color var(--duration-fast)",
              }}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
