"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { about } from "@/content/about";
import SectionShell from "@/components/SectionShell";
import SectionHeader from "@/components/SectionHeader";
import CardGrid from "@/components/CardGrid";
import { sectionIcons } from "@/components/icons";

const { ourValues } = about;

type ValueItem = (typeof ourValues.items)[number];

function ValueCard({ item, index }: { item: ValueItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        overflow: "hidden",
        p: "var(--cert-card-p)",
        borderRadius: "var(--cert-card-radius)",
        bgcolor: "var(--color-section-bg-white)",
        textAlign: "center",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, box-shadow var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .value-overlay": { opacity: 0, transition: "opacity var(--duration-base)" },
        "&:hover": { boxShadow: "var(--shadow-lg)" },
        "&:hover .value-overlay": { opacity: 0.05 },
      }}
    >
      <Box
        className="value-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-brand-diagonal)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: "var(--values-icon-circle-size)",
          height: "var(--values-icon-circle-size)",
          borderRadius: "50%",
          background: "var(--gradient-brand-diagonal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 3,
        }}
      >
        {sectionIcons[item.icon]}
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "var(--cert-title-size)",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-text-primary)",
          mb: 1,
        }}
      >
        {item.title}
      </Typography>

      <Typography sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)" }}>
        {item.subtitle}
      </Typography>
    </Box>
  );
}

export default function OurValuesSection() {
  return (
    <SectionShell variant="offWhite">
      <SectionHeader heading={ourValues.heading} subtitle={ourValues.subtitle} />
      <CardGrid maxColumns={4} gap="var(--cert-grid-gap)">
        {ourValues.items.map((item, i) => (
          <ValueCard key={item.title} item={item} index={i} />
        ))}
      </CardGrid>
    </SectionShell>
  );
}
