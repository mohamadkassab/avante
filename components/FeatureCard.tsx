"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { sectionIcons } from "@/components/icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const titleSx = {
  fontSize: "var(--cert-title-size)",
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-text-primary)",
};

/**
 * Shows icon + title; the full card (with description) appears on hover or
 * keyboard focus. Both faces sit in the same grid cell, so the card is always
 * sized for the full text — revealing it never resizes the card or shifts the
 * grid. Touch screens have no hover, so there the full card is shown as is.
 * Only the front title is read out; the back repeats it for sighted users.
 */
export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      tabIndex={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "grid",
        p: "var(--cert-card-p)",
        borderRadius: "var(--cert-card-radius)",
        bgcolor: "var(--color-section-bg-white)",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, box-shadow var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        // Faces only: an absolute child given a grid area is positioned inside
        // that area (within the padding), so the overlay would stop short.
        "& > .feature-front, & > .feature-back": { gridArea: "1 / 1" },
        "& .feature-overlay": { opacity: 0, transition: "opacity var(--duration-base)" },
        "& .feature-front, & .feature-back": { transition: "opacity var(--duration-base)" },
        "& .feature-front": { opacity: 0 },
        "@media (hover: hover)": {
          "& .feature-front": { opacity: 1 },
          "& .feature-back": { opacity: 0 },
          "&:hover, &:focus-visible": { boxShadow: "var(--shadow-lg)" },
          "&:hover .feature-overlay, &:focus-visible .feature-overlay": { opacity: 0.05 },
          "&:hover .feature-front, &:focus-visible .feature-front": { opacity: 0 },
          "&:hover .feature-back, &:focus-visible .feature-back": { opacity: 1 },
        },
      }}
    >
      <Box
        className="feature-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-brand-diagonal)",
          pointerEvents: "none",
        }}
      />

      <Box
        className="feature-front"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          "& svg": { color: "var(--color-primary)" },
        }}
      >
        <Box sx={{ mb: 3 }}>{sectionIcons[icon]}</Box>
        <Typography variant="h3" sx={titleSx}>
          {title}
        </Typography>
      </Box>

      <Box className="feature-back">
        <Box aria-hidden sx={{ mb: 3, "& svg": { color: "var(--color-primary)" } }}>
          {sectionIcons[icon]}
        </Box>

        <Typography aria-hidden sx={{ ...titleSx, mb: 1.5 }}>
          {title}
        </Typography>

        <Typography sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
