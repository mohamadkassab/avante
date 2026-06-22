import Hero from "@/components/Hero";
import PortfolioGallery from "@/components/PortfolioGallery";
import PortfolioStats from "@/components/PortfolioStats";
import { portfolio } from "@/content/portfolio";

const { hero } = portfolio;

export default function Portfolio() {
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
        height="50vh"
      />
      <PortfolioGallery />
      <PortfolioStats />
    </>
  );
}
