"use client";

import Box from "@mui/material/Box";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "glass";
type Size = "sm" | "md";

interface AppButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
  position?: "right" | "left";
  type?: "button" | "submit" | "reset";
}

const sizeClass: Record<Size, string> = {
  sm: "btn-sm",
  md: "btn-md",
};

const variantSx: Record<Variant, object> = {
  primary: {
    background: "var(--gradient-brand)",
    color: "white",
    transition: "opacity var(--duration-fast)",
    "& svg": { fontSize: "var(--btn-icon-size)", transition: "transform var(--duration-medium)" },
    "&:hover": { opacity: 0.9 },
    "&:hover svg": { transform: "translateX(4px)" },
  },
  glass: {
    bgcolor: "var(--color-btn-glass-bg)",
    backdropFilter: "blur(4px)",
    color: "white",
    border: "2px solid var(--color-btn-glass-border)",
    transition: "background-color var(--duration-fast)",
    "& svg": { fontSize: "var(--btn-icon-size)" },
    "&:hover": { bgcolor: "var(--color-btn-glass-hover)" },
  },
};

const baseSx = {
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "var(--font-weight-medium)",
  letterSpacing: "var(--letter-spacing-wide)",
  lineHeight: 1.5,
  textDecoration: "none",
  cursor: "pointer",
  border: "none",
  background: "none",
};

export default function AppButton({
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  fullWidth = false,
  children,
  position = "right",
  type = "button",
}: AppButtonProps) {
  const sx = {
    display: fullWidth ? "flex" : "inline-flex",
    ...(fullWidth && { width: "100%" }),
    gap: icon ? "var(--btn-icon-gap)" : undefined,
    ...baseSx,
    ...variantSx[variant],
  };

  const className = sizeClass[size];

  if (href) {
    return (
      <Box component={Link} href={href} onClick={onClick} sx={sx} className={className}>
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
      </Box>
    );
  }

  return (
    <Box component="button" type={type} onClick={onClick} sx={sx} className={className}>
        {position === "left" && icon}
        {children}
        {position === "right" && icon}
    </Box>
  );
}
