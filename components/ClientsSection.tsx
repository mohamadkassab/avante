"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useInView } from "@/hooks/useInView";
import { useMarquee } from "@/hooks/useMarquee";
import { home } from "@/content/home";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";
import SectionHeading from "@/components/SectionHeading";

const { clients } = home;

const doubled = [...clients.items, ...clients.items];

const navBtnSx = {
  position: "absolute" as const,
  top: "50%",
  zIndex: 10,
  width: "var(--carousel-nav-btn-size)",
  height: "var(--carousel-nav-btn-size)",
  bgcolor: "var(--color-section-bg-white)",
  borderRadius: "50%",
  boxShadow: "var(--shadow-lg)",
  display: { xs: "none", sm: "flex" },
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  transition: "background-color var(--duration-medium)",
  "&:hover": { bgcolor: "var(--color-nav-btn-hover)" },
};

export default function ClientsSection() {
  const header = useInView();
  const { trackRef, nudge, pause, resume } = useMarquee();

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

        <SectionHeading>{clients.heading}</SectionHeading>

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

      <Box sx={{ position: "relative" }}>
        <Box
          component="button"
          type="button"
          aria-label="Previous clients"
          onClick={() => nudge("left")}
          sx={{ ...navBtnSx, left: 0, transform: "translate(var(--carousel-nav-btn-offset), -50%)" }}
        >
          <ChevronLeftIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--color-text-primary)" }} />
        </Box>

        <Box
          component="button"
          type="button"
          aria-label="Next clients"
          onClick={() => nudge("right")}
          sx={{ ...navBtnSx, right: 0, transform: "translate(calc(-1 * var(--carousel-nav-btn-offset)), -50%)" }}
        >
          <ChevronRightIcon sx={{ fontSize: "var(--icon-size-md)", color: "var(--color-text-primary)" }} />
        </Box>

        <Box onMouseEnter={pause} onMouseLeave={resume} sx={{ overflow: "hidden" }}>
          <Box
            ref={trackRef}
            sx={{
              display: "flex",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {doubled.map((item, i) => (
            <Box
              key={`${item.name}-${i}`}
              sx={{
                flexShrink: 0,
                width: "var(--clients-card-width)",
                height: "var(--clients-card-height)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: "var(--clients-card-p)",
                px: "var(--clients-card-px)",
                borderRadius: "var(--clients-card-radius)",
                mx: 1,
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
