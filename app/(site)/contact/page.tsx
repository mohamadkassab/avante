import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <>
      <Hero
        heading="Get in"
        headingGradient="Touch"
        subtitle="Let's discuss your project requirements"
        image={{ src: "/images/contactus.avif", alt: "Contact Avante" }}
        align="center"
        inlineGradient
        cta={null}
        showScrollIndicator={false}
        height="var(--hero-page-height)"
      />
      <ContactSection />
    </>
  );
}
