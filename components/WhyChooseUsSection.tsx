import Box from "@mui/material/Box";
import { about } from "@/content/about";
import SectionShell from "@/components/SectionShell";
import SectionHeader from "@/components/SectionHeader";
import CardGrid from "@/components/CardGrid";
import FeatureCard from "@/components/FeatureCard";
import HeroVideo from "@/components/HeroVideo";

const { whyChooseUs } = about;

export default function WhyChooseUsSection() {
  return (
    <SectionShell
      variant="offWhite"
      background={
        <>
          <Box sx={{ position: "absolute", inset: 0, opacity: "var(--why-video-opacity)" }}>
            <HeroVideo webm={whyChooseUs.video.webm} mp4={whyChooseUs.video.mp4} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "var(--gradient-brand-diagonal)",
              opacity: "var(--why-video-tint-opacity)",
            }}
          />
        </>
      }
    >
      <SectionHeader heading={whyChooseUs.heading} />
      <CardGrid maxColumns={3} gap="var(--cert-grid-gap)">
        {whyChooseUs.items.map((item, i) => (
          <FeatureCard
            key={item.icon}
            icon={item.icon}
            title={item.title}
            description={item.description}
            index={i}
          />
        ))}
      </CardGrid>
    </SectionShell>
  );
}
