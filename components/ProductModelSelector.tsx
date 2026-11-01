import Box from "@mui/material/Box";
import type { ProductModel } from "@/content/products";

/**
 * Model names for a product point (e.g. AV-EF / AV-SEF), shown as static
 * button-shaped labels. Not buttons: there are no spec sheets or catalogues
 * yet, so nothing may look clickable. Each model's `specSheet` / `catalogue`
 * links stay in content/products.ts for when the documents exist.
 */
export default function ProductModelSelector({ models }: { models: ProductModel[] }) {
  if (models.length === 0) return null;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "var(--product-model-row-gap)" }}>
      {models.map((model) => (
        <Box
          key={model.name}
          component="span"
          className="btn-sm"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "var(--font-weight-medium)",
            letterSpacing: "var(--letter-spacing-wide)",
            lineHeight: 1.5,
            cursor: "default",
            background: "var(--product-model-btn-bg)",
            color: "var(--product-model-btn-text)",
            border:
              "var(--product-model-btn-border-width) solid var(--product-model-btn-border-color)",
          }}
        >
          {model.name}
        </Box>
      ))}
    </Box>
  );
}
