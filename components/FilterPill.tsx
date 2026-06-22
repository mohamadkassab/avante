import Box from "@mui/material/Box";
import type { ReactNode } from "react";

interface FilterPillProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export default function FilterPill({ active, onClick, children }: FilterPillProps) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        px: "var(--portfolio-filter-px)",
        py: "var(--portfolio-filter-py)",
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
