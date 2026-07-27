"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { products, type ProductModel } from "@/content/products";
import DocLink from "@/components/DocLink";

/**
 * Model picker for a product point. Renders one button per model (e.g. AV-EF /
 * AV-SEF); the selected button takes the brand gradient, the rest use the
 * lightgray image-panel look. Clicking a model reveals a box directly beneath
 * that button with its Technical Spec Sheet and Catalogue links. Client leaf —
 * relies on selection state — so the surrounding ProductDetail stays a Server
 * Component. No model is selected by default — clicking a button toggles its
 * box open or closed, and only one box is open at a time.
 *
 * The doc box is absolutely positioned so it never widens its column and shoves
 * the neighbouring button sideways; while a box is open the row reserves fixed
 * vertical space (`--product-model-box-reserve`) below the buttons to hold it.
 */
export default function ProductModelSelector({ models }: { models: ProductModel[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  if (models.length === 0) return null;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "var(--product-model-row-gap)",
        pb: selected === null ? 0 : "var(--product-model-box-reserve)",
        transition: "padding-bottom var(--duration-base) ease",
      }}
    >
      {models.map((model, i) => {
        const isSelected = i === selected;

        return (
          <Box key={model.name} sx={{ position: "relative", display: "inline-flex" }}>
            <Box
              component="button"
              type="button"
              className="btn-sm"
              onClick={() => setSelected((prev) => (prev === i ? null : i))}
              aria-pressed={isSelected}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "var(--font-weight-medium)",
                letterSpacing: "var(--letter-spacing-wide)",
                lineHeight: 1.5,
                cursor: "pointer",
                border: "var(--product-model-btn-border-width) solid",
                ...(isSelected
                  ? {
                      background: "var(--gradient-brand)",
                      color: "var(--product-model-btn-text-active)",
                      borderColor: "transparent",
                    }
                  : {
                      background: "var(--product-model-btn-bg)",
                      color: "var(--product-model-btn-text)",
                      borderColor: "var(--product-model-btn-border-color)",
                    }),
                transition:
                  "background-color var(--duration-fast), border-color var(--duration-fast), opacity var(--duration-fast)",
                "&:hover": { opacity: 0.9 },
              }}
            >
              {model.name}
            </Box>

            <Box
              aria-hidden={!isSelected}
              sx={{
                position: "absolute",
                top: "calc(100% + var(--product-model-box-mt))",
                left: 0,
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "var(--product-model-box-gap)",
                p: "var(--product-model-box-p)",
                borderRadius: "var(--radius-card)",
                bgcolor: "var(--product-model-btn-bg)",
                border:
                  "var(--product-model-btn-border-width) solid var(--product-model-btn-border-color)",
                whiteSpace: "nowrap",
                opacity: isSelected ? 1 : 0,
                transform: isSelected ? "none" : "translateY(-0.5rem)",
                pointerEvents: isSelected ? "auto" : "none",
                transition: "opacity var(--duration-base) ease, transform var(--duration-base) ease",
              }}
            >
              <DocLink href={model.specSheet} label={products.docLabels.specSheet} />
              <DocLink href={model.catalogue} label={products.docLabels.catalogue} />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
