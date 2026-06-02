"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";

type Props = {
  heading: string;
  subtitle?: string;
};

export default function SectionHeader({ heading, subtitle }: Props) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        mb: 8,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "var(--font-size-section-heading-xs)",
            sm: "var(--font-size-section-heading-sm)",
          },
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--line-height-tight)",
          mb: subtitle ? 3 : 0,
        }}
      >
        {heading}
      </Typography>

      {subtitle && (
        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--cert-subtitle-max-width)",
            mx: "auto",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
