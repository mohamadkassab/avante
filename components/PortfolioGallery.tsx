"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { portfolio } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";
import FilterItem, { type FilterVariant } from "@/components/FilterItem";
import FilterPill from "@/components/FilterPill";
import PortfolioProjectCard from "@/components/PortfolioProjectCard";

const { gallery } = portfolio;
const ALL = gallery.filters[0].label;

// Sub-option presentation: "subrow" (option 3), "inline" (option 2), or "dropdown" (option 1)
const FILTER_VARIANT: FilterVariant = "subrow";

function getProjects(active: string) {
  if (active === ALL) return gallery.projects;

  const parentOfChild = gallery.filters.find((f) => f.children?.includes(active));
  if (parentOfChild) {
    return gallery.projects.filter(
      (p) => p.category === parentOfChild.label && "subcategory" in p && p.subcategory === active,
    );
  }

  return gallery.projects.filter((p) => p.category === active);
}

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const projects = getProjects(activeFilter);

  // Option 3 — show the sub-tabs while their parent is hovered, or while a sub-option is selected.
  const selectedParent = gallery.filters.find(
    (f) => f.children && (f.label === activeFilter || f.children.includes(activeFilter)),
  );
  const hoveredParent = gallery.filters.find((f) => f.children && f.label === hoveredLabel);
  const shownParent = selectedParent ?? hoveredParent;

  // Always reserve the sub-row's space (using the first parent's sub-tabs) so the
  // page doesn't shift; only its visibility toggles on hover/selection.
  const reservedParent = shownParent ?? gallery.filters.find((f) => f.children);
  const subRowVisible = Boolean(shownParent);

  // Align the sub-row to start under its parent pill (left edge + a small indent).
  const barRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [subRowOffset, setSubRowOffset] = useState(0);

  useEffect(() => {
    function measure() {
      const label = reservedParent?.label;
      const pill = label ? pillRefs.current[label] : null;
      if (pill) setSubRowOffset(pill.offsetLeft);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [reservedParent]);

  return (
    <SectionShell variant="offWhite">
      <Box onMouseLeave={() => setHoveredLabel(null)} sx={{ mt: 8, mb: 8 }}>
        <Box
          ref={barRef}
          sx={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "var(--portfolio-filter-gap)",
          }}
        >
          {gallery.filters.map((filter) => (
            <Box
              key={filter.label}
              ref={(el: HTMLDivElement | null) => {
                pillRefs.current[filter.label] = el;
              }}
              onMouseEnter={() => setHoveredLabel(filter.label)}
              sx={{ display: "inline-flex" }}
            >
              <FilterItem
                filter={filter}
                active={activeFilter}
                onSelect={setActiveFilter}
                variant={FILTER_VARIANT}
              />
            </Box>
          ))}
        </Box>

        {FILTER_VARIANT === "subrow" && reservedParent && (
          <Box
            aria-hidden={!subRowVisible}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              gap: "var(--portfolio-filter-gap)",
              pt: 3,
              pl: `calc(${subRowOffset}px + var(--portfolio-subrow-indent))`,
              opacity: subRowVisible ? 1 : 0,
              transform: subRowVisible ? "none" : "translateY(-0.5rem)",
              pointerEvents: subRowVisible ? "auto" : "none",
              transition:
                "opacity var(--duration-base) ease, transform var(--duration-base) ease, padding-left var(--duration-base) ease",
            }}
          >
            {reservedParent.children?.map((child) => (
              <FilterPill
                key={child}
                active={activeFilter === child}
                onClick={() => setActiveFilter(child)}
              >
                {child}
              </FilterPill>
            ))}
          </Box>
        )}
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
