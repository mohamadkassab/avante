"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { productCategories, products } from "@/content/products";
import AppButton from "@/components/AppButton";
import DocLink from "@/components/DocLink";
import SectionHeading from "@/components/SectionHeading";
import ProductSpecsAccordion from "@/components/ProductSpecsAccordion";

type ProductCategory = (typeof productCategories)[number];

/**
 * Popup shown when a product image on the products page is clicked. Mirrors the
 * reference product page: a gray header bar, a vertical thumbnail column beside
 * the main image, and an info column (title, description, GET IN TOUCH +
 * Download buttons, and a single-open specs accordion). Reuses SectionHeading,
 * the products-page paragraph style, and AppButton.
 */
export default function ProductModal({
  category,
  open,
  onClose,
}: {
  category: ProductCategory | null;
  open: boolean;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  // Retain the last category through the close animation so the paper doesn't
  // flash empty while fading out.
  const [shown, setShown] = useState<ProductCategory | null>(category);
  const [prevCategory, setPrevCategory] = useState<ProductCategory | null>(category);

  // Adjust state during render (React's supported pattern) instead of an effect:
  // when a new category opens, show it and reset the gallery to its cover image.
  if (category !== prevCategory) {
    setPrevCategory(category);
    if (category) {
      setShown(category);
      setActiveIndex(0);
    }
  }

  const gallery = shown ? [shown.image, ...shown.images] : [];
  const activeImage = gallery[activeIndex] ?? shown?.image;
  const hasThumbs = gallery.length > 1;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      scroll="body"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: "calc(100% - 2 * var(--section-px))" },
            maxWidth: "var(--product-modal-max-width)",
            mx: { xs: 0, sm: "auto" },
            my: { xs: 0, sm: "var(--section-px)" },
            borderRadius: { xs: 0, sm: "var(--radius-card)" },
            bgcolor: "var(--color-section-bg-white)",
            overflow: "hidden",
          },
        },
        backdrop: {
          sx: { backgroundColor: "var(--product-modal-backdrop)" },
        },
      }}
    >
      {shown && (
        <>
          {/* Gray header bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              bgcolor: "var(--product-modal-header-bg)",
              py: "var(--product-modal-header-py)",
              px: "var(--product-modal-header-px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "var(--product-modal-breadcrumb-gap)",
                flexWrap: "wrap",
              }}
            >
              <Typography component="span" sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
                Products
              </Typography>
              <Typography component="span" sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
                /
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontSize: "var(--font-size-nav)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--color-text-primary)",
                }}
              >
                {shown.title}
              </Typography>
            </Box>

            <IconButton
              aria-label="Close"
              onClick={onClose}
              sx={{
                flexShrink: 0,
                width: "var(--product-modal-close-size)",
                height: "var(--product-modal-close-size)",
                color: "var(--color-text-primary)",
                "& svg": { fontSize: "var(--product-modal-close-icon-size)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Body */}
          <Box sx={{ p: "var(--product-modal-p)" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: "var(--product-modal-gap)",
                alignItems: "start",
              }}
            >
              {/* Gallery: vertical thumbnail column + main image */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: hasThumbs ? { xs: "1fr", sm: "auto 1fr" } : "1fr",
                  gap: "var(--product-modal-gallery-gap)",
                }}
              >
                {hasThumbs && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "row", sm: "column" },
                      flexWrap: "wrap",
                      gap: "var(--product-modal-thumb-gap)",
                      order: { xs: 2, sm: 1 },
                    }}
                  >
                    {gallery.map((img, i) => (
                      <Box
                        key={img.src}
                        component="button"
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={img.alt}
                        sx={{
                          p: 0,
                          flexShrink: 0,
                          width: "var(--product-modal-thumb-size)",
                          height: "var(--product-modal-thumb-size)",
                          borderRadius: "var(--radius-card)",
                          overflow: "hidden",
                          cursor: "pointer",
                          bgcolor: "var(--product-modal-image-bg)",
                          border: "var(--product-modal-thumb-border-width) solid",
                          borderColor: i === activeIndex ? "var(--color-primary)" : "transparent",
                          transition: "border-color var(--duration-fast)",
                        }}
                      >
                        <Box
                          component="img"
                          src={img.src}
                          alt={img.alt}
                          sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                        />
                      </Box>
                    ))}
                  </Box>
                )}

                <Box
                  sx={{
                    order: { xs: 1, sm: 2 },
                    aspectRatio: "var(--product-modal-image-aspect)",
                    borderRadius: "var(--radius-card)",
                    overflow: "hidden",
                    bgcolor: "var(--product-modal-image-bg)",
                  }}
                >
                  <Box
                    component="img"
                    src={activeImage?.src}
                    alt={activeImage?.alt}
                    sx={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </Box>
              </Box>

              {/* Info column */}
              <Box>
                <SectionHeading>{shown.title}</SectionHeading>

                <Typography
                  sx={{
                    fontSize: "var(--font-size-body-lg)",
                    color: "var(--color-text-body)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {shown.description}
                </Typography>

                <Box sx={{ mt: "var(--product-modal-actions-mt)" }}>
                  {/* Document text links — one row */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--product-modal-doclinks-gap)",
                      mb: "var(--product-modal-doclinks-mb)",
                    }}
                  >
                    <DocLink
                      href={shown.documents.catalogue}
                      icon={<MenuBookIcon />}
                      label={products.modal.catalogue}
                    />
                    <DocLink
                      href={shown.documents.manual}
                      icon={<FileDownloadOutlinedIcon />}
                      label={products.modal.manual}
                    />
                  </Box>

                  {/* Action buttons — identical solid style */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: "var(--product-modal-actions-gap)" }}>
                    <AppButton size="sm" variant="solid" href={shown.documents.specSheets}>
                      {products.modal.specSheets}
                    </AppButton>
                    <AppButton size="sm" variant="solid" href={shown.documents.electricalDrawing}>
                      {products.modal.electricalDrawing}
                    </AppButton>
                  </Box>
                </Box>

                <ProductSpecsAccordion key={shown.title} specs={shown.specs} />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Dialog>
  );
}
