"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { portfolio } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";

const { stats } = portfolio;

export default function PortfolioStats() {
  const { ref, visible } = useInView();

  return (
    <SectionShell variant="white">
      <Box
        ref={ref}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: "var(--portfolio-stats-gap)",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
        }}
      >
        {stats.items.map((stat) => (
          <Box key={stat.label}>
            <Typography
              sx={{
                fontSize: "var(--portfolio-stats-value-size)",
                fontWeight: "var(--font-weight-bold)",
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 1,
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--portfolio-stats-label-size)",
                color: "var(--color-text-muted)",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </SectionShell>
  );
}
