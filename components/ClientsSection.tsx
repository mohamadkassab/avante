"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";

const { clients } = home;

const doubled = [...clients.items, ...clients.items];

export default function ClientsSection() {
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
        <SectionBadge>{clients.badge}</SectionBadge>

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
          {clients.heading}
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--clients-subtitle-max-width)",
            mx: "auto",
          }}
        >
          {clients.subtitle}
        </Typography>
      </Box>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            animationName: "clients-scroll",
            animationDuration: "var(--clients-scroll-duration)",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {doubled.map((item, i) => (
            <Box
              key={`${item.name}-${i}`}
              sx={{
                flexShrink: 0,
                width: "var(--clients-card-width)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: "var(--clients-card-p)",
                bgcolor: "var(--color-section-bg-off-white)",
                borderRadius: "var(--clients-card-radius)",
                mx: 2,
                "& img": {
                  filter: "grayscale(100%)",
                  opacity: "var(--clients-logo-opacity)",
                  transition: "filter var(--duration-base), opacity var(--duration-base)",
                },
                "&:hover img": {
                  filter: "grayscale(0%)",
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={item.image.src}
                alt={item.image.alt}
                sx={{ width: "100%", height: "var(--clients-logo-height)", objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--clients-footer-max-width)",
            mx: "auto",
          }}
        >
          {clients.footerText}
        </Typography>
      </Box>
    </SectionShell>
  );
}
