import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";

/**
 * Clickable icon + text link for a downloadable document (Catalogue, manual…).
 * Reusable anywhere a labelled document/resource link is needed. The icon takes
 * the brand color; the text turns brand-colored on hover.
 */
export default function DocLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--doclink-icon-gap)",
        width: "fit-content",
        color: "var(--color-text-primary)",
        fontSize: "var(--font-size-body-md)",
        textDecoration: "none",
        cursor: "pointer",
        transition: "color var(--duration-fast)",
        "& svg": {
          fontSize: "var(--doclink-icon-size)",
          color: "var(--color-primary)",
        },
        "&:hover": { color: "var(--color-primary)" },
      }}
    >
      {icon}
      {label}
    </Box>
  );
}
