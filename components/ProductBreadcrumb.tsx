"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

/** A clickable breadcrumb crumb; turns brand-colored on hover. */
function Crumb({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        fontSize: "var(--font-size-nav)",
        color: "var(--color-text-muted)",
        textDecoration: "none",
        transition: "color var(--duration-fast)",
        "&:hover": { color: "var(--color-primary)" },
      }}
    >
      {children}
    </Box>
  );
}

function CrumbSeparator() {
  return (
    <Typography component="span" sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
      /
    </Typography>
  );
}

/**
 * Product detail breadcrumb: Products / Category / Point. "Products" links to the
 * products page; the category links to that category's anchor on the products
 * page; the point is the current page (bold, not a link). Client component
 * because it relies on the `Box component={Link}` interop.
 */
export default function ProductBreadcrumb({
  categoryTitle,
  categorySlug,
  title,
}: {
  categoryTitle: string;
  categorySlug: string;
  title: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "var(--product-page-breadcrumb-gap)",
      }}
    >
      <Crumb href="/products">Products</Crumb>
      <CrumbSeparator />
      <Crumb href={`/products#${categorySlug}`}>{categoryTitle}</Crumb>
      <CrumbSeparator />
      <Typography
        component="span"
        sx={{
          fontSize: "var(--font-size-nav)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
