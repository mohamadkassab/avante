"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { products } from "@/content/products";
import AppButton from "@/components/AppButton";
import SectionShell from "@/components/SectionShell";

const { cta } = products;

export default function ProductsCTASection() {
  const { ref, visible } = useInView();

  return (
    <SectionShell variant="white">
      <Box
        ref={ref}
        sx={{
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
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
          {cta.heading}
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--cta-subtitle-max-width)",
            mx: "auto",
            mb: 5,
          }}
        >
          {cta.subtitle}
        </Typography>

        <AppButton variant="primary" size="md" href={cta.button.href}>
          {cta.button.label}
        </AppButton>
      </Box>
    </SectionShell>
  );
}
