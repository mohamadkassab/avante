import Box from "@mui/material/Box";
import type { ReactNode } from "react";

export default function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        px: "var(--badge-px)",
        py: "var(--badge-py)",
        color: "var(--color-primary)",
        fontSize: "var(--badge-font-size)",
        fontWeight: "var(--font-weight-bold)",
        letterSpacing: "var(--badge-letter-spacing)",
        mb: 3,
      }}
    >
      {children}
    </Box>
  );
}
