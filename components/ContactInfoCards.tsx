"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { contact } from "@/content/contact";
import SectionHeading from "@/components/SectionHeading";

const { info } = contact;

const contactIcons: Record<string, ReactNode> = {
  mapPin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  ),
};

type InfoItem = (typeof info.items)[number];

function ContactInfoCard({ item }: { item: InfoItem }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: "var(--contact-card-p)",
        bgcolor: "var(--color-section-bg-white)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <Box
        sx={{
          width: "var(--contact-icon-box-size)",
          height: "var(--contact-icon-box-size)",
          borderRadius: "var(--radius-card)",
          background: "var(--gradient-brand-diagonal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "white",
        }}
      >
        {contactIcons[item.icon]}
      </Box>
      <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 0.5}}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "var(--font-size-nav)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            lineHeight: 1,
          }}
        >
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: "var(--font-size-nav)", color: "var(--color-text-muted)", lineHeight: 1 }}>
          {item.value}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ContactInfoCards() {
  const { ref, visible } = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: "opacity var(--duration-scroll) ease-out, transform var(--duration-scroll) ease-out",
      }}
    >
      <SectionHeading size="contact">{info.heading}</SectionHeading>

      <Typography
        sx={{
          fontSize: "var(--font-size-body-lg)",
          color: "var(--color-text-muted)",
          lineHeight: "var(--line-height-relaxed)",
          mb: 5,
        }}
      >
        {info.subtitle}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--contact-card-gap)" }}>
        {info.items.map((item) => (
          <ContactInfoCard key={item.title} item={item} />
        ))}
      </Box>
    </Box>
  );
}
