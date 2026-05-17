import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ClientsSection from "@/components/ClientsSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ClientsSection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
