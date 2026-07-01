import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

/**
 * Check-circle list of a product category's sub-products. Shared by the
 * products-page ProductDetailSection and the ProductModal so both render the
 * points identically.
 */
export default function ProductPointsList({ items }: { items: readonly string[] }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      {items.map((point) => (
        <Box key={point} sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "var(--product-detail-point-icon-size)",
              color: "var(--color-primary)",
              flexShrink: 0,
              mt: 0.25,
            }}
          />
          <Typography sx={{ color: "var(--color-text-muted)" }}>{point}</Typography>
        </Box>
      ))}
    </Box>
  );
}
