"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useInView } from "@/hooks/useInView";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";
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
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
        }}
      >
        <SectionHeading size="sectionCompact" mb={4}>
          {ourStory.heading}
        </SectionHeading>

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
