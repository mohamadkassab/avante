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

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: "var(--cert-card-p)",
        borderRadius: "var(--cert-card-radius)",
        bgcolor: "var(--color-section-bg-white)",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, box-shadow var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .feature-overlay": { opacity: 0, transition: "opacity var(--duration-base)" },
        "&:hover": { boxShadow: "var(--shadow-lg)" },
        "&:hover .feature-overlay": { opacity: 0.05 },
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

      <Box sx={{ mb: 3, "& svg": { color: "var(--color-primary)" } }}>
        {sectionIcons[icon]}
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "var(--cert-title-size)",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-text-primary)",
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Typography sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
        {description}
      </Typography>
    </Box>
  );
}
