import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type FilterPillSize = "md" | "sm";

interface FilterPillProps {
  active: boolean;
  onClick?: () => void;
  children: ReactNode;
  size?: FilterPillSize;
  interactive?: boolean;
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

export default function FilterPill({ active, onClick, children, size = "md", interactive = true }: FilterPillProps) {
  return (
    <Box
      component={interactive ? "button" : "div"}
      {...(interactive ? { type: "button", onClick } : {})}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: pxBySize[size],
        py: pyBySize[size],
        fontSize: fontSizeBySize[size],
        borderRadius: "var(--portfolio-filter-radius)",
        border: "none",
        cursor: interactive ? "pointer" : "default",
        fontWeight: "var(--font-weight-medium)",
        letterSpacing: "var(--letter-spacing-wide)",
        transition: "color var(--duration-base), background-color var(--duration-base), opacity var(--duration-fast)",
        ...(active
          ? {
              background: "var(--gradient-brand)",
              color: "var(--color-text-white)",
              ...(interactive && { "&:hover": { opacity: 0.9 } }),
            }
          : {
              background: "var(--color-portfolio-filter-bg)",
              color: "var(--color-portfolio-filter-text)",
              ...(interactive && { "&:hover": { color: "var(--color-portfolio-filter-text-hover)" } }),
            }),
      }}
    >
      {children}
    </Box>
  );
}
