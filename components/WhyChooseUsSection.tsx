"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FactoryIcon from "@mui/icons-material/Factory";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import BuildIcon from "@mui/icons-material/Build";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MemoryIcon from "@mui/icons-material/Memory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";

const { whyChooseUs } = home;

const featureIcons: Record<string, ReactNode> = {
  factory: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-factory w-7 h-7 text-white"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg>,
  target: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-7 h-7 text-white"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
  wrench: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wrench w-7 h-7 text-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
  award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award w-7 h-7 text-white"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>,
  cpu: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-cpu w-7 h-7 text-white"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>,
  location: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map-pin w-7 h-7 text-white"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>,
};

type FeatureItem = (typeof whyChooseUs.items)[number];

function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        p: "var(--why-card-p)",
        borderRadius: "var(--radius-card)",
        bgcolor: "var(--color-section-bg-off-white)",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, background-color var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .icon-box": { transition: "transform var(--duration-base)" },
        "&:hover": { bgcolor: "var(--why-card-hover-bg)" },
        "&:hover .icon-box": { transform: "scale(1.1)" },
      }}
    >
      <Box
        className="icon-box"
        sx={{
          width: "var(--why-card-icon-box-size)",
          height: "var(--why-card-icon-box-size)",
          borderRadius: "var(--radius-card)",
          background: "var(--gradient-brand-diagonal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        {featureIcons[item.icon]}
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "var(--why-card-title-size)",
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-text-primary)",
          mb: 1.5,
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          color: "var(--color-text-muted)",
          lineHeight: "var(--line-height-relaxed)",
        }}
      >
        {item.description}
      </Typography>
    </Box>
  );
}

export default function WhyChooseUsSection() {
  const header = useInView();

  return (
    <SectionShell variant="white">
      <Box
        ref={header.ref}
        sx={{
          textAlign: "center",
          mb: 8,
          opacity: header.visible ? 1 : 0,
          transform: header.visible ? "none" : "translateY(30px)",
          transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
        }}
      >
        <SectionBadge>{whyChooseUs.badge}</SectionBadge>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "var(--font-size-section-heading-xs)",
              sm: "var(--font-size-section-heading-sm)",
            },
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {whyChooseUs.headingLine1}
          <br />
          {whyChooseUs.headingLine2}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          },
          gap: "var(--why-grid-gap)",
        }}
      >
        {whyChooseUs.items.map((item, i) => (
          <FeatureCard key={item.icon} item={item} index={i} />
        ))}
      </Box>
    </SectionShell>
  );
}
