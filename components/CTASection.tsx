"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import AppButton from "@/components/AppButton";

const { cta } = home;

const contactIcons: Record<string, ReactNode> = {
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-[#14B8A6]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  email: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-[#14B8A6]"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>,
};

type ContactItem = (typeof cta.contact)[number];

function ContactCard({ item, index }: { item: ContactItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        p: "var(--cta-contact-card-p)",
        borderRadius: "var(--cta-contact-card-radius)",
        bgcolor: "var(--cta-contact-card-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity var(--duration-scroll) ease-out ${0.4 + index * 0.1}s, transform var(--duration-scroll) ease-out ${0.4 + index * 0.1}s`,
      }}
    >
      {contactIcons[item.icon]}
      <Box>
        <Typography sx={{ color: "var(--cta-contact-value-color)", fontWeight: "var(--font-weight-medium)" }}>
          {item.value}
        </Typography>
      </Box>
    </Box>
  );
}

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
            mb: 8,
            opacity: btns.visible ? 1 : 0,
            transform: btns.visible ? "none" : "translateY(20px)",
            transition: "opacity var(--duration-scroll) ease-out 0.2s, transform var(--duration-scroll) ease-out 0.2s",
          }}
        >
          <AppButton variant="primary" size="md" href={cta.buttons[0].href}>
            {cta.buttons[0].label}
          </AppButton>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: "1.5rem",
            maxWidth: "var(--cta-contact-max-width)",
            mx: "auto",
          }}
        >
          {cta.contact.map((item, i) => (
            <ContactCard key={i} item={item} index={i} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
