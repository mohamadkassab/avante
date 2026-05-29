"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useInView } from "@/hooks/useInView";
import SectionShell from "@/components/SectionShell";
import { about } from "@/content/about";

const { ourStory } = about;

export default function OurStorySection() {
  const { ref, visible } = useInView();

  return (
    <SectionShell variant="white">
      <Box
        ref={ref}
        sx={{
          maxWidth: "var(--about-story-max-width)",
          mx: "auto",
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
            color: "var(--color-text-primary)",
            mb: 4,
          }}
        >
          {ourStory.heading}
        </Typography>

        <Stack spacing={3}>
          {ourStory.paragraphs.map((paragraph, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: "var(--font-size-body-lg)",
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {paragraph}
            </Typography>
          ))}
        </Stack>
      </Box>
    </SectionShell>
  );
}
