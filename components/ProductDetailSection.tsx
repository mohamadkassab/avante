"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { productCategories, slugify, type ProductCategory } from "@/content/products";
import { productIcons } from "@/components/icons";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";
import ProductPointsList from "@/components/ProductPointsList";

function ProductFeatureRow({
  category,
  reversed,
}: {
  category: ProductCategory;
  reversed: boolean;
}) {
  const { ref, visible } = useInView();
  const categorySlug = slugify(category.title);

  return (
    <Box
      ref={ref}
      id={categorySlug}
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        gap: "var(--product-detail-col-gap)",
        alignItems: "center",
        scrollMarginTop: "var(--product-detail-scroll-offset)",
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

        <ProductPointsList items={category.items} categorySlug={categorySlug} />
      </Box>

      {/* Image column — decorative cover shot */}
      <Box sx={{ order: { lg: reversed ? 1 : 2 } }}>
        <Box
          sx={{
            aspectRatio: "var(--product-detail-image-aspect)",
            borderRadius: "var(--radius-card)",
            overflow: "hidden",
            boxShadow: "var(--shadow-xl)",
            p: "var(--product-page-image-padding)",
          }}
        >
          <Box
            component="img"
            src={category.image.src}
            alt={category.image.alt}
            sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default function ProductDetailSection() {
  return (
    <SectionShell variant="offWhite">
      <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--product-detail-row-gap)" }}>
        {productCategories.map((category, i) => (
          <ProductFeatureRow key={category.title} category={category} reversed={i % 2 === 1} />
        ))}
      </Box>
    </SectionShell>
  );
}
