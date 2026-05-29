import Hero from "@/components/Hero";
import OurStorySection from "@/components/OurStorySection";
import OurValuesSection from "@/components/OurValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CertificationsSection from "@/components/CertificationsSection";
import OurCommitmentSection from "@/components/OurCommitmentSection";

export default function AboutUs() {
  return (
    <>
      <Hero
        heading="About"
        headingGradient="Avante"
        subtitle="Setting new standards of excellence in commercial kitchen solutions"
        image={{ src: "/images/aboutus-banner.avif", alt: "About Avante" }}
        align="center"
        inlineGradient
        cta={null}
        showScrollIndicator={false}
        height="60vh"
      />
      <OurStorySection />
      <OurValuesSection />
      <WhyChooseUsSection />
      <CertificationsSection />
      <OurCommitmentSection />
    </>
  );
}
