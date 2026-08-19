"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { portfolio, slugify } from "@/content/portfolio";
import PortfolioCardLocation from "@/components/PortfolioCardLocation";

type Project = (typeof portfolio.gallery.projects)[number];

export default function PortfolioProjectCard({
  project,
  index,
  onNavigate,
}: {
  project: Project;
  index: number;
  onNavigate?: () => void;
}) {
  return (
    <Box
      component={Link}
      href={`/portfolio/${slugify(project.title)}`}
      onClick={onNavigate}
      sx={{
        display: "block",
        textDecoration: "none",
        position: "relative",
        height: "var(--portfolio-card-height)",
        borderRadius: "var(--portfolio-card-radius)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        // Show immediately on mount (page load / filter change) with a brief
        // staggered entrance — no scroll/visibility gating.
        animation: `portfolio-card-in var(--duration-scroll) ease-out ${index * 0.08}s both`,
        transition: "box-shadow var(--duration-base)",
        "& .card-img": { transition: "transform var(--duration-image) ease" },
        "&:hover": { boxShadow: "var(--shadow-xl)" },
        "&:hover .card-img": { transform: "scale(1.1)" },
      }}
    >
      <Box
        component="img"
        className="card-img"
        src={project.image.src}
        alt={project.image.alt}
        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "var(--portfolio-overlay)" }} />
      <Box sx={{ position: "absolute", bottom: "var(--portfolio-card-p)", left: "var(--portfolio-card-p)", right: "var(--portfolio-card-p)" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "var(--portfolio-project-title-size)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-white)",
            mb: 1,
          }}
        >
          {project.title}
        </Typography>
        <PortfolioCardLocation location={project.outsideLocation} />
      </Box>
    </Box>
  );
}
