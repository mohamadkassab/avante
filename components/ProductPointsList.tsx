"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { slugify, type ProductPoint } from "@/content/products";

/**
 * Check-circle list of a category's sub-products. Each point links to its own
 * detail page at `/products/<categorySlug>/<pointSlug>` and turns brand-colored
 * on hover. Client component because it relies on the `Box component={Link}`
 * interop, which can't cross the Server→Client boundary.
 */
export default function ProductPointsList({
  items,
  categorySlug,
}: {
  items: readonly ProductPoint[];
  categorySlug: string;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      {items.map((point) => (
        <Box
          key={point.title}
          component={Link}
          href={`/products/${categorySlug}/${slugify(point.title)}`}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1.5,
            width: "fit-content",
            textDecoration: "none",
            cursor: "pointer",
            "& .point-text": { transition: "color var(--duration-fast)" },
            "&:hover .point-text": { color: "var(--color-primary)" },
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "var(--product-detail-point-icon-size)",
              color: "var(--color-primary)",
              flexShrink: 0,
              mt: 0.25,
            }}
          />
          <Typography className="point-text" sx={{ color: "var(--color-text-muted)" }}>
            {point.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
