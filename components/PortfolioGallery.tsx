"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { portfolio } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";
import FilterItem, { type FilterVariant } from "@/components/FilterItem";
import FilterPill from "@/components/FilterPill";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";

const { gallery } = portfolio;

// Sub-option presentation: "subrow" (option 3), "inline" (option 2), or "dropdown" (option 1)
const FILTER_VARIANT: FilterVariant = "subrow";

function getProjects(active: string) {
  const parentOfChild = gallery.filters.find((f) => f.children?.includes(active));
  if (parentOfChild) {
    return gallery.projects.filter(
      (p) => p.category === parentOfChild.label && "subcategory" in p && p.subcategory === active,
    );
  }

  return gallery.projects.filter((p) => p.category === active);
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState(gallery.filters[0].label);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const projects = getProjects(activeFilter);

  return (
    <SectionShell variant="offWhite">
      <Box onMouseLeave={() => setHoveredLabel(null)} sx={{ mb: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--portfolio-filter-gap)",
          }}
        >
          {gallery.filters.map((filter) => {
            // Option 3 — each parent owns a sub-options column directly beneath it.
            // The column is always rendered (space reserved, so the grid never shifts);
            // only its visibility toggles when the parent is selected or hovered.
            const subVisible = Boolean(
              FILTER_VARIANT === "subrow" &&
                filter.children &&
                (activeFilter === filter.label ||
                  filter.children.includes(activeFilter) ||
                  hoveredLabel === filter.label),
            );

            return (
              <Box
                key={filter.label}
                onMouseEnter={() => setHoveredLabel(filter.label)}
                sx={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}
              >
                <FilterItem
                  filter={filter}
                  active={activeFilter}
                  onSelect={setActiveFilter}
                  variant={FILTER_VARIANT}
                />

                {FILTER_VARIANT === "subrow" && filter.children && (
                  <Box
                    aria-hidden={!subVisible}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "var(--portfolio-subrow-gap)",
                      pt: "var(--portfolio-subrow-pt)",
                      pl: "var(--portfolio-subrow-indent)",
                      opacity: subVisible ? 1 : 0,
                      transform: subVisible ? "none" : "translateY(-0.5rem)",
                      pointerEvents: subVisible ? "auto" : "none",
                      transition: "opacity var(--duration-base) ease, transform var(--duration-base) ease",
                    }}
                  >
                    {filter.children.map((child) => (
                      <FilterPill
                        key={child}
                        size="sm"
                        active={activeFilter === child}
                        onClick={() => setActiveFilter(child)}
                      >
                        {child}
                      </FilterPill>
                    ))}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: "var(--portfolio-grid-gap)",
        }}
      >
        {projects.map((project, i) => (
          <PortfolioProjectCard key={project.title} project={project} index={i} />
        ))}
      </Box>
    </SectionShell>
  );
}
