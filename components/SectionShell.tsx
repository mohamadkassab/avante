import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type Variant = "white" | "offWhite" | "dark";

const bgMap: Record<Variant, string> = {
  white: "var(--color-section-bg-white)",
  offWhite: "var(--color-section-bg-off-white)",
  dark: "var(--color-section-bg-dark)",
};

interface SectionShellProps {
  children: ReactNode;
  variant: Variant;
}

export default function SectionShell({ children, variant }: SectionShellProps) {
  return (
    <Box component="section" sx={{ py: "var(--section-py)", bgcolor: bgMap[variant] }}>
      <Box
        sx={{
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
