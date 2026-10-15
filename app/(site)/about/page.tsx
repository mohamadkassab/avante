import { asset } from "@/content/asset";
import Hero from "@/components/Hero";
import OurStorySection from "@/components/OurStorySection";
import OurValuesSection from "@/components/OurValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CertificationsSection from "@/components/CertificationsSection";
import OurCommitmentSection from "@/components/OurCommitmentSection";
import SectionShell from "@/components/SectionShell";

export default function AboutUs() {
  return (
    <>
      <Hero
        heading="About"
        headingGradient="Avante"
        subtitle="Setting new standards of excellence in commercial kitchen solutions"
        image={{ src: asset("/images/about-hero.webp"), alt: "About Avante" }}
        align="center"
        imagePosition="top"
        inlineGradient
        cta={null}
        showScrollIndicator={false}
        height="var(--hero-page-height)"
      />
      <OurStorySection />
      <WhyChooseUsSection />
      <CertificationsSection />
      <OurCommitmentSection />
    </>
  );
}
