import Hero from "@/components/Hero";
import HeaderCaption from "@/components/HeaderCaption";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSection from "@/components/ClientsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeaderCaption />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <PortfolioSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
