import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type FilterPillSize = "md" | "sm";

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  size?: FilterPillSize;
}

const pxBySize: Record<FilterPillSize, string> = {
  md: "var(--portfolio-filter-px)",
  sm: "var(--portfolio-subfilter-px)",
};
const pyBySize: Record<FilterPillSize, string> = {
  md: "var(--portfolio-filter-py)",
  sm: "var(--portfolio-subfilter-py)",
};
const fontSizeBySize: Record<FilterPillSize, string> = {
  md: "var(--font-size-body-md)",
  sm: "var(--portfolio-subfilter-font-size)",
};

export default function FilterPill({ active, onClick, children, size = "md" }: FilterPillProps) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: pxBySize[size],
        py: pyBySize[size],
        fontSize: fontSizeBySize[size],
        borderRadius: "var(--portfolio-filter-radius)",
        border: "none",
        cursor: "pointer",
        fontWeight: "var(--font-weight-medium)",
        letterSpacing: "var(--letter-spacing-wide)",
        transition: "color var(--duration-base), background-color var(--duration-base), opacity var(--duration-fast)",
        ...(active
          ? {
              background: "var(--gradient-brand)",
              color: "var(--color-text-white)",
              "&:hover": { opacity: 0.9 },
            }
          : {
              background: "var(--color-portfolio-filter-bg)",
              color: "var(--color-portfolio-filter-text)",
              "&:hover": { color: "var(--color-portfolio-filter-text-hover)" },
            }),
      }}
    >
      {children}
    </Box>
  );
}
