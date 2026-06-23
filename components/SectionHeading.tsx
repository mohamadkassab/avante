import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

type SectionHeadingSize = "section" | "sectionCompact" | "contact";

type ResponsiveFontSize = string | { xs: string; sm: string };

type Props = {
  children: ReactNode;
  size?: SectionHeadingSize;
  mb?: number;
  /** One-off literal override; bypasses the token-based `size` mapping. */
  fontSize?: ResponsiveFontSize;
};

const fontSizeBySize: Record<SectionHeadingSize, ResponsiveFontSize> = {
  section: {
    xs: "var(--font-size-section-heading-xs)",
    sm: "var(--font-size-section-heading-sm)",
  },
  sectionCompact: "var(--font-size-section-heading-xs)",
  contact: "var(--contact-heading-size)",
};

export default function SectionHeading({ children, size = "section", mb = 3, fontSize }: Props) {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: fontSize ?? fontSizeBySize[size],
        fontWeight: "var(--font-weight-semibold)",
        color: "var(--color-text-primary)",
        lineHeight: "var(--line-height-tight)",
        mb,
      }}
    >
      {children}
    </Typography>
  );
}
