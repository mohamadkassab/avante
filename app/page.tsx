import Box from "@mui/material/Box";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Hero
        headingWeight="semibold"
        solidHeading
        fillViewport
        headingSize="compact"
        contentShiftDown
        overlay="none"
      />
      <AboutSection />
      <ProductsSection />
      <Box
        sx={{
          bgcolor: "var(--color-section-bg-off-white)",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
        }}
      >
        <Box sx={{ maxWidth: "var(--home-divider-width)", mx: "auto" }}>
          <Divider orientation="horizontal" />
        </Box>
      </Box>
      <PortfolioSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
