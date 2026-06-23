import { about } from "@/content/about";
import SectionShell from "@/components/SectionShell";
import SectionHeader from "@/components/SectionHeader";
import CardGrid from "@/components/CardGrid";
import FeatureCard from "@/components/FeatureCard";

const { whyChooseUs } = about;

export default function WhyChooseUsSection() {
  return (
    <SectionShell variant="offWhite">
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
