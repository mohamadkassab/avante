"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import AppButton from "@/components/AppButton";

const { cta } = home;

export default function CTASection() {
  const header = useInView();
  const btns = useInView();

  return (
    <Box component="section" sx={{ py: "var(--section-py)", bgcolor: "var(--color-section-bg-off-white)" }}>
      <Box
        sx={{
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
          textAlign: "center",
        }}
      >
        <Box
          ref={header.ref}
          sx={{
            mb: 6,
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? "none" : "translateY(30px)",
            transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
          }}
        >
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
            {cta.headingLine1}
            <br />
              {cta.headingLine2}
          </Typography>

          <Typography
            sx={{
              fontSize: "var(--font-size-body-lg)",
              color: "var(--color-text-muted)",
              maxWidth: "var(--cta-subtitle-max-width)",
              mx: "auto",
            }}
          >
            {cta.subtitle}
          </Typography>
        </Box>

        <Box
          ref={btns.ref}
          sx={{
            display: "flex",
            gap: "var(--cta-btn-gap)",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: btns.visible ? 1 : 0,
            transform: btns.visible ? "none" : "translateY(20px)",
            transition: "opacity var(--duration-scroll) ease-out 0.2s, transform var(--duration-scroll) ease-out 0.2s",
          }}
        >
          <AppButton variant="primary" size="md" href={cta.button.href}>
            {cta.button.label}
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
}
