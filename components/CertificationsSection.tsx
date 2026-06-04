"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import { useInView } from "@/hooks/useInView";
import { about } from "@/content/about";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";

const { certifications } = about;

const certIcons: Record<string, ReactNode> = {
  shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-10 h-10 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
  award: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-10 h-10 text-white"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-10 h-10 text-white"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>,
  star: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-10 h-10 text-white"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>,
};

type CertItem = (typeof certifications.items)[number];

function CertCard({ item, index }: { item: CertItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Tooltip title="Download Certificate" arrow>
    <Box
      ref={ref}
      component="a"
      href={encodeURI(item.pdf)}
      target="_blank"
      rel="noopener noreferrer"
      download
      sx={{
        display: "block",
        textDecoration: "none",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        p: "var(--cert-card-p)",
        borderRadius: "var(--cert-card-radius)",
        bgcolor: "var(--color-section-bg-off-white)",
        textAlign: "center",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, box-shadow var(--duration-base)`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .cert-overlay": { opacity: 0, transition: "opacity var(--duration-base)" },
        "&:hover": { boxShadow: "var(--shadow-lg)" },
        "&:hover .cert-overlay": { opacity: 0.05 },
      }}
    >
      <Box
        className="cert-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-brand-diagonal)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          width: "var(--cert-icon-circle-size)",
          height: "var(--cert-icon-circle-size)",
          borderRadius: "50%",
          background: "var(--gradient-brand-diagonal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 3,
        }}
      >
        {certIcons[item.icon]}
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
    </Tooltip>
  );
}

export default function CertificationsSection() {
  const header = useInView();
  const footer = useInView();

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
        <SectionBadge>{certifications.badge}</SectionBadge>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "var(--font-size-section-heading-xs)",
              sm: "var(--font-size-section-heading-sm)",
            },
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            mb: 3,
          }}
        >
          {certifications.heading}
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--cert-subtitle-max-width)",
            mx: "auto",
          }}
        >
          {certifications.subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: "var(--cert-grid-gap)",
          mb: 6,
        }}
      >
        {certifications.items.map((item, i) => (
          <CertCard key={item.title} item={item} index={i} />
        ))}
      </Box>

      <Box
        ref={footer.ref}
        sx={{
          textAlign: "center",
          opacity: footer.visible ? 1 : 0,
          transform: footer.visible ? "none" : "translateY(20px)",
          transition: "opacity var(--duration-scroll) ease-out 0.3s, transform var(--duration-scroll) ease-out 0.3s",
        }}
      >
        <Typography
          sx={{
            fontSize: "var(--font-size-body-md)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--cert-footer-max-width)",
            mx: "auto",
          }}
        >
          {certifications.footerText}
        </Typography>
      </Box>
    </SectionShell>
  );
}
