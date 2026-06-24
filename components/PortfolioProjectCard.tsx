"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useInView } from "@/hooks/useInView";
import { portfolio } from "@/content/portfolio";

type Project = (typeof portfolio.gallery.projects)[number];

export default function PortfolioProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "var(--portfolio-card-height)",
        borderRadius: "var(--portfolio-card-radius)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.15}s, transform var(--duration-scroll) ease-out ${index * 0.15}s, box-shadow var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "var(--portfolio-location-color)" }}>
          <LocationOnIcon sx={{ fontSize: "var(--portfolio-location-icon-size)" }} />
          <Typography sx={{ fontSize: "var(--font-size-nav)" }}>{project.outsideLocation}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
