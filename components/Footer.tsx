"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { footer } from "@/content/shared";

function FooterLogo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{ display: "inline-flex", alignItems: "center", gap: 1.5, textDecoration: "none", mb: 3 }}
    >
      <Box
        sx={{
          width: "var(--logo-circle-size)",
          height: "var(--logo-circle-size)",
          background: "var(--gradient-brand-diagonal)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            width: "var(--logo-dot-size)",
            height: "var(--logo-dot-size)",
            bgcolor: "var(--footer-logo-dot-bg)",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: "var(--footer-logo-text-size)",
          fontWeight: "var(--font-weight-bold)",
          color: "white",
          letterSpacing: "var(--letter-spacing-tight)",
        }}
      >
        AVANTE
      </Typography>
    </Box>
  );
}

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
      {items.map((item) => (
        <li key={item.label}>
          <Box
            component={Link}
            href={item.href}
            sx={{
              fontSize: "var(--font-size-nav)",
              color: "var(--footer-text-color)",
              textDecoration: "none",
              transition: "color var(--duration-fast)",
              "&:hover": { color: "white" },
            }}
          >
            {item.label}
          </Box>
        </li>
      ))}
    </Box>
  );
}

function FooterColumnHeading({ children }: { children: string }) {
  return (
    <Typography
      sx={{
        fontSize: "var(--font-size-nav)",
        fontWeight: "var(--font-weight-bold)",
        letterSpacing: "var(--badge-letter-spacing)",
        color: "var(--color-primary)",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "#1A1A1A", marginTop: 10 }}>
      <Box
        sx={{
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
          pt: { xs: 8, md: 10 },
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)", md: "2fr 1fr 1fr" },
            gap: { xs: 6, md: 8 },
            mb: 8,
          }}
        >
          {/* Brand column */}
          <Box>
            <FooterLogo />
            <Typography
              sx={{
                fontSize: "var(--font-size-nav)",
                color: "var(--footer-text-color)",
                lineHeight: "var(--line-height-relaxed)",
                maxWidth: "36rem",
                mb: 2,
              }}
            >
              {footer.description}
            </Typography>
            <Typography
              sx={{ fontSize: "var(--font-size-nav)", color: "var(--footer-muted-color)" }}
            >
              Dubai Investment Park, UAE
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <FooterColumnHeading>QUICK LINKS</FooterColumnHeading>
            <FooterLinkList items={footer.quickLinks} />
          </Box>

          {/* Products */}
          <Box>
            <FooterColumnHeading>PRODUCTS</FooterColumnHeading>
            <FooterLinkList items={footer.products} />
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid var(--footer-divider-color)", pt: 4 }}>
          <Typography
            sx={{
              fontSize: "var(--font-size-nav)",
              color: "var(--footer-muted-color)",
              textAlign: "center",
            }}
          >
            © {year} {footer.copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
