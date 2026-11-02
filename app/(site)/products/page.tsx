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
        image={{ src: asset("/images/about-us-cover.webp"), alt: "About Avante" }}
        align="center"
        // The canopy is the top 35% of this photo; below it is the kitchen.
        imageTopFraction={0.35}
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
