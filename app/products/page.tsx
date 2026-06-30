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
        image={hero.image}
        align="center"
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
