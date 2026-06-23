"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";

const { about } = home;

const statIcons: Record<string, ReactNode> = {
  award: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-[#14B8A6] mx-auto mb-3"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
    
  ),
  location: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-8 h-8 text-[#14B8A6] mx-auto mb-3"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  people: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-[#14B8A6] mx-auto mb-3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  custom: (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings w-8 h-8 text-[#14B8A6] mx-auto mb-3"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  ),
};

export default function AboutSection() {
  const left = useInView();
  const right = useInView();

  return (
    <SectionShell variant="white">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: "var(--about-grid-gap)",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <Box
          ref={left.ref}
          sx={{
            opacity: left.visible ? 1 : 0,
            transform: left.visible ? "none" : "translateX(-40px)",
            transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
          }}
        >
          <SectionBadge>{about.badge}</SectionBadge>

          <SectionHeading fontSize={{ xs: "1.75rem", sm: "2.25rem" }}>
            {about.headingLine1}
            <br />
            {about.headingLine2}
          </SectionHeading>

          <Typography
            sx={{
              fontSize: "1.25rem",
              color: "#4B5563",
              lineHeight: "var(--line-height-relaxed)",
              mb: 2,
            }}
          >
            {about.paragraphs[0]}
          </Typography>
                    <Typography
            sx={{
              fontSize: "1.25rem",
              color: "#4B5563",
              lineHeight: "var(--line-height-relaxed)",
              mb: 2,
            }}
          >
            {about.paragraphs[1]}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.25rem",
              color: "#4B5563",
              lineHeight: "var(--line-height-relaxed)",
              mb: 5,
            }}
          >
            {about.paragraphs[2]}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
              gap: "var(--about-stat-gap)",
              mb: 5,
            }}
          >
            {about.stats.map((stat) => (
              <Box key={stat.icon} sx={{ textAlign: "center" }}>
                <Box sx={{ mb: 1.5 }}>{statIcons[stat.icon]}</Box>
                <Typography
                  sx={{
                    fontSize: "var(--about-stat-value-size)",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-text-primary)",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "var(--about-stat-label-size)",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            component={Link}
            href={about.cta.href}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--btn-icon-gap)",
              color: "var(--color-text-primary)",
              fontWeight: "var(--font-weight-medium)",
              letterSpacing: "var(--letter-spacing-wide)",
              textDecoration: "none",
              fontSize: "var(--font-size-nav)",
              transition: "color var(--duration-fast)",
              "& svg": { fontSize: "var(--btn-icon-size)", transition: "transform var(--duration-medium)" },
              "&:hover": { color: "var(--color-primary)" },
              "&:hover svg": { transform: "translateX(4px)" },
            }}
          >
            {about.cta.label}
            <ArrowForwardIcon />
          </Box>
        </Box>

        {/* Right column — image + decorative block */}
        <Box
          ref={right.ref}
          sx={{
            position: "relative",
            opacity: right.visible ? 1 : 0,
            transform: right.visible ? "none" : "translateX(40px)",
            transition: "opacity var(--duration-scroll) ease-out 0.2s, transform var(--duration-scroll) ease-out 0.2s",
          }}
        >
          <Box
            sx={{
              aspectRatio: "1 / 1",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              boxShadow: "var(--shadow-2xl)",
            }}
          >
            <ImageSlider images={about.images} />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "var(--about-deco-offset)",
              left: "var(--about-deco-offset)",
              width: "var(--about-deco-size)",
              height: "var(--about-deco-size)",
              background: "var(--gradient-brand-diagonal)",
              borderRadius: "var(--radius-card)",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
    </SectionShell>
  );
}
