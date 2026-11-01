import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type Variant = "white" | "offWhite" | "dark";
type Padding = "default" | "sm";

const bgMap: Record<Variant, string> = {
  white: "var(--color-section-bg-white)",
  offWhite: "var(--color-section-bg-off-white)",
  dark: "var(--color-section-bg-dark)",
};

const pyMap: Record<Padding, string> = {
  default: "var(--section-py)",
  sm: "var(--section-sm-py)",
};

interface SectionShellProps {
  children: ReactNode;
  variant: Variant;
  padding?: Padding;
  /** Full-bleed layer (e.g. a video) drawn behind the content, clipped to the section. */
  background?: ReactNode;
}

export default function SectionShell({ children, variant, padding = "default", background }: SectionShellProps) {
  return (
    <Box
      component="section"
      sx={{
        py: pyMap[padding],
        bgcolor: bgMap[variant],
        ...(background && { position: "relative", overflow: "hidden" }),
      }}
    >
      {background && (
        <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {background}
        </Box>
      )}
      <Box
        sx={{
          position: "relative",
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
