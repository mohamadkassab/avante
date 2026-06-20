"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import AppButton from "@/components/AppButton";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";

const { portfolio } = home;

type PortfolioItem = (typeof portfolio.items)[number];

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "var(--portfolio-card-height)",
        borderRadius: "var(--portfolio-card-radius)",
        overflow: "hidden",
        cursor: "pointer",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.15}s, transform var(--duration-scroll) ease-out ${index * 0.15}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .card-img": { transition: "transform var(--duration-image) ease" },
        "&:hover .card-img": { transform: "scale(1.1)" },
      }}
    >
      <Box
        component="img"
        className="card-img"
        src={item.image.src}
        alt={item.image.alt}
        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "var(--portfolio-overlay)" }} />
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: "var(--portfolio-card-p)" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "var(--portfolio-card-title-size)",
            fontWeight: "var(--font-weight-bold)",
            color: "white",
            mb: 1,
          }}
        >
          {item.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "var(--portfolio-location-color)" }}>
          <LocationOnIcon sx={{ fontSize: "var(--portfolio-location-icon-size)" }} />
          <Typography sx={{ fontSize: "var(--font-size-nav)" }}>{item.location}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function PortfolioSection() {
  const header = useInView();

  return (
    <SectionShell variant="offWhite">
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
        <SectionBadge>{portfolio.badge}</SectionBadge>

        <SectionHeading>{portfolio.heading}</SectionHeading>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--portfolio-subtitle-max-width)",
            mx: "auto",
          }}
        >
          {portfolio.subtitle}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: "var(--portfolio-grid-gap)",
          mb: 6,
        }}
      >
        {portfolio.items.map((item, i) => (
          <PortfolioCard key={item.title} item={item} index={i} />
        ))}
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <AppButton href={portfolio.cta.href} icon={<ArrowForwardIcon />}>
          {portfolio.cta.label}
        </AppButton>
      </Box>
    </SectionShell>
  );
}
