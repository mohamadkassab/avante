"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { footer } from "@/content/shared";
import Logo from "./Logo";

const socialIcons: Record<string, ReactNode> = {
  instagram: <InstagramIcon sx={{ fontSize: "var(--footer-social-icon-size)" }} />,
  linkedin: (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      sx={{ width: "var(--footer-social-icon-size)", height: "var(--footer-social-icon-size)" }}
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z" />
    </Box>
  ),
};

function FooterContactRow({ item }: { item: { display?: string; href: string } }) {
  const text = item.display ?? item.href.replace(/^tel:|^mailto:/, "");
  return (
    <Box
      component={Link}
      href={item.href}
      sx={{
        display: "block",
        fontSize: "var(--font-size-nav)",
        color: "var(--footer-muted-color)",
        textDecoration: "none",
        transition: "color var(--duration-fast)",
        "&:hover": { color: "var(--color-text-white)" },
      }}
    >
      {text}
    </Box>
  );
}

function FooterSocial() {
  const contacts = footer.social.filter((item) => item.icon === "phone" || item.icon === "email");
  const socials = footer.social.filter((item) => item.icon === "instagram" || item.icon === "linkedin");

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
        <Box
          component={Link}
          href="https://maps.app.goo.gl/vKKwti2g5cs4siN99"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "block",
            fontSize: "var(--font-size-nav)",
            color: "var(--footer-muted-color)",
            textDecoration: "none",
            width: "fit-content",
            transition: "color var(--duration-fast)",
            "&:hover": {
              background: "var(--gradient-caption)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            },
          }}
        >
          Dubai Investment Park – 2, UAE
        </Box>
        {contacts.map((item) => (
          <FooterContactRow key={item.label} item={item} />
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: "var(--footer-social-gap)" }}>
        {socials.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Box
              key={item.label}
              component={Link}
              href={item.href}
              aria-label={item.label}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              sx={{
                width: "var(--footer-social-size)",
                height: "var(--footer-social-size)",
                borderRadius: "50%",
                border: "var(--footer-social-border-width) solid transparent",
                background:
                  "linear-gradient(var(--color-section-bg-dark), var(--color-section-bg-dark)) padding-box, var(--gradient-caption) border-box",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-white)",
                cursor: "pointer",
                transition: "background var(--duration-medium)",
                "&:hover": { background: "var(--gradient-caption)" },
              }}
            >
              {socialIcons[item.icon]}
            </Box>
          );
        })}
      </Box>
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
              "&:hover": { color: "var(--color-text-white)" },
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
    <Box component="footer" sx={{ bgcolor: "var(--color-section-bg-dark)"}}>
      <Box
        sx={{
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
          pt: { xs: 6, md: 8 },
          pb: 4,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)", md: "2fr 1fr 1fr" },
            gap: { xs: 6, md: 8 },
            mb: 6,
          }}
        >
          {/* Brand column */}
          <Box>
            <Box sx={{ mb: 3 }}>
              <Logo />
            </Box>
            <Typography
              sx={{
                fontSize: "var(--font-size-body-md)",
                color: "var(--footer-text-color)",
                lineHeight: "var(--line-height-relaxed)",
                maxWidth: "36rem",
                mb: 2,
              }}
            >
              {footer.description}
            </Typography>
            <FooterSocial />
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
