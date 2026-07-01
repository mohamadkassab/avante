"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useInView } from "@/hooks/useInView";
import { productCategories } from "@/content/products";
import { productIcons } from "@/components/icons";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";
import ProductPointsList from "@/components/ProductPointsList";
import ProductModal from "@/components/ProductModal";

type ProductCategory = (typeof productCategories)[number];

function ProductFeatureRow({
  category,
  reversed,
  onOpen,
}: {
  category: ProductCategory;
  reversed: boolean;
  onOpen: () => void;
}) {
  const { ref, visible } = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        gap: "var(--product-detail-col-gap)",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
      }}
    >
      {/* Text column */}
      <Box sx={{ order: { lg: reversed ? 2 : 1 } }}>
        <Box
          sx={{
            width: "var(--product-detail-icon-box-size)",
            height: "var(--product-detail-icon-box-size)",
            borderRadius: "var(--radius-card)",
            background: "var(--gradient-brand-diagonal)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            "& svg": {
              fontSize: "var(--product-detail-icon-size)",
              color: "var(--color-text-white)",
            },
          }}
        >
          {productIcons[category.icon]}
        </Box>

        <SectionHeading>{category.title}</SectionHeading>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-body)",
            lineHeight: "var(--line-height-relaxed)",
            mb: 4,
          }}
        >
          {category.description}
        </Typography>

        <ProductPointsList items={category.items} />
      </Box>

      {/* Image column — click to open the product popup */}
      <Box sx={{ order: { lg: reversed ? 1 : 2 } }}>
        <Box
          onClick={onOpen}
          role="button"
          tabIndex={0}
          aria-label={`View ${category.title} details`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpen();
            }
          }}
          sx={{
            position: "relative",
            aspectRatio: "var(--product-detail-image-aspect)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)",
            cursor: "pointer",
            transition: "box-shadow var(--duration-base) ease",
            "& .detail-img": { transition: "transform var(--duration-image) ease" },
            "& .detail-scrim": { opacity: 0, transition: "opacity var(--duration-base) ease" },
            "& .detail-reveal": {
              opacity: 0,
              transform: "translateY(var(--product-detail-image-label-shift))",
              transition: "opacity var(--duration-base) ease, transform var(--duration-base) ease",
            },
            "&:hover": { boxShadow: "var(--shadow-2xl)" },
            "&:hover .detail-img": { transform: "scale(var(--product-detail-image-hover-scale))" },
            "&:hover .detail-scrim": { opacity: 1 },
            "&:hover .detail-reveal": { opacity: 1, transform: "none" },
          }}
        >
          <Box
            component="img"
            className="detail-img"
            src={category.image.src}
            alt={category.image.alt}
            sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />

          <Box
            className="detail-scrim"
            sx={{
              position: "absolute",
              inset: 0,
              background: "var(--product-detail-image-reveal-gradient)",
              pointerEvents: "none",
            }}
          />

          <Box
            className="detail-reveal"
            sx={{
              position: "absolute",
              left: "var(--product-detail-image-label-inset)",
              right: "var(--product-detail-image-label-inset)",
              bottom: "var(--product-detail-image-label-inset)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1.5,
              pointerEvents: "none",
              "& svg": {
                fontSize: "var(--product-detail-image-label-icon-size)",
                color: "var(--color-text-white)",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "var(--font-size-body-md)",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-text-white)",
                letterSpacing: "var(--letter-spacing-wide)",
              }}
            >
              View details
            </Typography>
            <ArrowForwardIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function ProductDetailSection() {
  const [selected, setSelected] = useState<ProductCategory | null>(null);

  return (
    <SectionShell variant="offWhite">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--product-detail-row-gap)" }}>
        {productCategories.map((category, i) => (
          <ProductFeatureRow
            key={category.title}
            category={category}
            reversed={i % 2 === 1}
            onOpen={() => setSelected(category)}
          />
        ))}
      </Box>

      <ProductModal category={selected} open={selected !== null} onClose={() => setSelected(null)} />
    </SectionShell>
  );
}
