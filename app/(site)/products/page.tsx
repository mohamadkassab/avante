import { asset } from "@/content/asset";
import Hero from "@/components/Hero";
import ProductDetailSection from "@/components/ProductDetailSection";
import ProductsCTASection from "@/components/ProductsCTASection";
import { products } from "@/content/products";

const { hero } = products;

export default function Products() {
  return (
    <>
      <Hero
        heading={hero.heading}
        headingGradient={hero.headingGradient}
        subtitle={hero.subtitle}
        image={{ src: asset("/images/about-us-cover-new.webp"), alt: "About Avante" }}
        align="center"
        // The canopy's rim ends at 34.7% of this photo; below it the kitchen
        // shows in its mirrored underside. Measured from the file's pixel rows.
        imageTopFraction={0.345}
        inlineGradient
        cta={null}
        showScrollIndicator={false}
        height="var(--hero-page-height)"
      />
      <ProductDetailSection />
      <ProductsCTASection />
    </>
  );
}
