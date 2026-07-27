import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { products, type ResolvedProduct } from "@/content/products";
import DocLink from "@/components/DocLink";
import ProductModelSelector from "@/components/ProductModelSelector";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ProductCloseButton from "@/components/ProductCloseButton";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecsAccordion from "@/components/ProductSpecsAccordion";

/**
 * Full-page product detail view (formerly the popup): a gray breadcrumb header
 * band, a thumbnail gallery beside the main image, and an info column (title,
 * description, document links, spec/drawing buttons and a single-open specs
 * accordion). Composed of client leaves (ProductGallery, ProductSpecsAccordion)
 * so this shell stays a Server Component.
 */
export default function ProductDetail({ product }: { product: ResolvedProduct }) {
  return (
    <>
      {/* Breadcrumb header band: Products / Category / Point */}
      <Box sx={{ bgcolor: "var(--product-page-header-bg)" }}>
        <Box
          sx={{
            maxWidth: "var(--container-max-width)",
            mx: "auto",
            px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
            py: "var(--product-page-header-py)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
            <ProductBreadcrumb
              categoryTitle={product.categoryTitle}
              categorySlug={product.categorySlug}
              title={product.title}
            />
            <ProductCloseButton />
          </Box>
        </Box>
      </Box>

      <SectionShell variant="white">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "var(--product-page-gap)",
            alignItems: "start",
          }}
        >
          <ProductGallery images={[product.image, ...product.images]} />

          {/* Info column */}
          <Box>
            <SectionHeading>{product.title}</SectionHeading>

            <Typography
              sx={{
                fontSize: "var(--font-size-body-lg)",
                color: "var(--color-text-body)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {product.description}
            </Typography>

            <Box sx={{ mt: "var(--product-page-actions-mt)" }}>

              {/* Model selector — one button per model, each revealing its docs */}
              <Box sx={{ mb: "var(--product-page-doclinks-mb)" }}>
                <ProductModelSelector models={product.models} />
              </Box>

              {/* Document text links — one row */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--product-page-doclinks-gap)",
    
                }}
              >
                                <DocLink
                  href={product.documents.manual}
                  icon={<MenuBookIcon />} 
                  label={products.docLabels.manual}
                />
                <DocLink 
                href={product.documents.electricalDrawing} 
                icon={<FileDownloadOutlinedIcon />}
                label={products.docLabels.electricalDrawing} 
                />

              </Box>


            </Box>

            <ProductSpecsAccordion specs={product.specs} />
          </Box>
        </Box>
      </SectionShell>
    </>
  );
}
