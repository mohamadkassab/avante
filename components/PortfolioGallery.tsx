"use client";

import { useRef, useState } from "react";
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

  // Hover intent: keep the (floating) sub-options open while moving between the
  // parent and its pills. A short close delay bridges the gap over the grid so
  // brief pointer excursions don't collapse it.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openSub = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredLabel(label);
  };
  const scheduleCloseSub = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHoveredLabel(null), 180);
  };

  return (
    <SectionShell variant="offWhite">
      <Box onMouseLeave={scheduleCloseSub} sx={{ mb: 4}}>
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
            // Option 3 — each parent owns a floating sub-options flyout. It is a
            // pure hover affordance: visible only while the pointer is over the
            // parent or its pills, so selecting a sub-option never pins it open.
            const subVisible = Boolean(
              FILTER_VARIANT === "subrow" && filter.children && hoveredLabel === filter.label,
            );

            return (
              <Box
                key={filter.label}
                onMouseEnter={() => openSub(filter.label)}
                sx={{ position: "relative", display: "inline-flex", flexDirection: "column", alignItems: "center" }}
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
                    onMouseEnter={() => openSub(filter.label)}
                    onMouseLeave={scheduleCloseSub}
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "var(--portfolio-subrow-gap)",
                      pt: "var(--portfolio-subrow-pt)",
                      opacity: subVisible ? 1 : 0,
                      transform: subVisible
                        ? "translateX(-50%)"
                        : "translateX(-50%) translateY(-0.5rem)",
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
