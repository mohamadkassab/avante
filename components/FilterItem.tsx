"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterPill from "@/components/FilterPill";

export interface FilterNode {
  label: string;
  children?: string[];
}

export type FilterVariant = "dropdown" | "inline" | "subrow";

interface FilterItemProps {
  filter: FilterNode;
  active: string;
  onSelect: (label: string) => void;
  variant?: FilterVariant;
}

export default function FilterItem({ filter, active, onSelect, variant = "dropdown" }: FilterItemProps) {
  if (!filter.children) {
    return (
      <FilterPill active={active === filter.label} onClick={() => onSelect(filter.label)}>
        {filter.label}
      </FilterPill>
    );
  }

  if (variant === "inline") {
    return <InlineGroup filter={filter} active={active} onSelect={onSelect} />;
  }

  // Option 3 — the parent only reveals its sub-row (rendered by the gallery); it is not
  // selectable on its own, so a sub-option must be chosen to filter.
  if (variant === "subrow") {
    const parentActive = active === filter.label || filter.children.includes(active);
    return (
      <FilterPill active={parentActive} interactive={false}>
        {filter.label}
        <KeyboardArrowDownIcon sx={{ fontSize: "var(--btn-icon-size)" }} />
      </FilterPill>
    );
  }

  return <DropdownGroup filter={filter} active={active} onSelect={onSelect} />;
}

/* Option 2 — sub-options expand inline within the filter bar */
function InlineGroup({ filter, active, onSelect }: Required<Omit<FilterItemProps, "variant">>) {
  const [open, setOpen] = useState(false);
  const children = filter.children ?? [];
  const parentActive = active === filter.label || children.includes(active);

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={{ display: "inline-flex", alignItems: "center", gap: "var(--portfolio-filter-gap)" }}
    >
      <FilterPill
        active={parentActive}
        onClick={() => {
          onSelect(filter.label);
          setOpen((o) => !o);
        }}
      >
        {filter.label}
        <KeyboardArrowDownIcon
          sx={{
            fontSize: "var(--btn-icon-size)",
            transition: "transform var(--duration-base)",
            transform: open ? "rotate(180deg)" : "none",
          }}
        />
      </FilterPill>

      {open &&
        children.map((child) => (
          <FilterPill key={child} active={active === child} onClick={() => onSelect(child)}>
            {child}
          </FilterPill>
        ))}
    </Box>
  );
}

/* Option 1 — sub-options appear in a floating dropdown card on hover */
function DropdownGroup({ filter, active, onSelect }: Required<Omit<FilterItemProps, "variant">>) {
  const children = filter.children ?? [];
  const parentActive = active === filter.label || children.includes(active);

  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .filter-submenu": {
          opacity: 1,
          visibility: "visible",
          transform: "translateX(-50%) translateY(0)",
        },
      }}
    >
      <FilterPill active={parentActive} onClick={() => onSelect(filter.label)}>
        {filter.label}
        <KeyboardArrowDownIcon sx={{ fontSize: "var(--btn-icon-size)" }} />
      </FilterPill>

      <Box
        className="filter-submenu"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%) translateY(0.5rem)",
          pt: "var(--portfolio-submenu-offset)",
          opacity: 0,
          visibility: "hidden",
          transition: "opacity var(--duration-base), transform var(--duration-base)",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--portfolio-submenu-item-gap)",
            minWidth: "var(--portfolio-submenu-min-width)",
            p: "var(--portfolio-submenu-p)",
            bgcolor: "var(--portfolio-submenu-bg)",
            borderRadius: "var(--portfolio-submenu-radius)",
            boxShadow: "var(--portfolio-submenu-shadow)",
          }}
        >
          {children.map((child) => {
            const childActive = active === child;
            return (
              <Box
                key={child}
                component="button"
                type="button"
                onClick={() => onSelect(child)}
                sx={{
                  textAlign: "left",
                  border: "none",
                  cursor: "pointer",
                  px: "var(--portfolio-submenu-item-px)",
                  py: "var(--portfolio-submenu-item-py)",
                  borderRadius: "var(--portfolio-submenu-item-radius)",
                  fontWeight: "var(--font-weight-medium)",
                  letterSpacing: "var(--letter-spacing-wide)",
                  transition: "color var(--duration-base), background-color var(--duration-base)",
                  ...(childActive
                    ? {
                        background: "var(--gradient-brand)",
                        color: "var(--color-text-white)",
                      }
                    : {
                        background: "transparent",
                        color: "var(--color-portfolio-filter-text)",
                        "&:hover": {
                          bgcolor: "var(--color-portfolio-submenu-item-hover-bg)",
                          color: "var(--color-portfolio-filter-text-hover)",
                        },
                      }),
                }}
              >
                {child}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
