"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { about } from "@/content/about";
import SectionShell from "@/components/SectionShell";

const { ourCommitment } = about;

export default function OurCommitmentSection() {
  const { ref, visible } = useInView();

  return (
    <SectionShell variant="dark">
      <Box
        ref={ref}
        sx={{
          maxWidth: "var(--about-story-max-width)",
          mx: "auto",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "var(--font-size-section-heading-xs)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-section-bg-white)",
            mb: 3,
          }}
        >
          {ourCommitment.heading}
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            lineHeight: "var(--line-height-relaxed)",
          }}
        >
          {ourCommitment.body}
        </Typography>
      </Box>
    </SectionShell>
  );
}
