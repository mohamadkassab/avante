"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AirIcon from "@mui/icons-material/Air";
import FireExtinguisherIcon from "@mui/icons-material/FireExtinguisher";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useInView } from "@/hooks/useInView";
import { home } from "@/content/home";
import AppButton from "@/components/AppButton";
import SectionBadge from "@/components/SectionBadge";
import SectionShell from "@/components/SectionShell";
import Carousel from "@/components/Carousel";

const { products } = home;

const productIcons: Record<string, ReactNode> = {
  building: <ApartmentIcon sx={{ fontSize: "var(--products-card-icon-size)", color: "white" }} />,
  air: <AirIcon sx={{ fontSize: "var(--products-card-icon-size)", color: "white" }} />,
  fire: <FireExtinguisherIcon sx={{ fontSize: "var(--products-card-icon-size)", color: "white" }} />,
  grid: <Grid3x3Icon sx={{ fontSize: "var(--products-card-icon-size)", color: "white" }} />,
  bolt: <BoltIcon sx={{ fontSize: "var(--products-card-icon-size)", color: "white" }} />,
};

type ProductItem = (typeof products.items)[number];

function ProductCard({ item, index }: { item: ProductItem; index: number }) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        flexShrink: 0,
        width: "var(--products-card-width)",
        bgcolor: "var(--color-section-bg-white)",
        borderRadius: "var(--radius-card)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        cursor: "pointer",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.1}s, transform var(--duration-scroll) ease-out ${index * 0.1}s, box-shadow var(--duration-base) ease`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        "& .card-img": { transition: "transform var(--duration-image) ease" },
        "&:hover": { boxShadow: "var(--shadow-xl)" },
        "&:hover .card-img": { transform: "scale(1.1)" },
        "&:hover .card-title": { color: "var(--color-primary)" },
      }}
    >
      <Box sx={{ position: "relative", height: "var(--products-card-image-height)", overflow: "hidden" }}>
        <Box
          component="img"
          className="card-img"
          src={item.image.src}
          alt={item.image.alt}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box sx={{ position: "absolute", inset: 0, background: "var(--products-overlay)" }} />
        <Box
          sx={{
            position: "absolute",
            bottom: "var(--products-card-icon-offset)",
            left: "var(--products-card-icon-offset)",
          }}
        >
          {productIcons[item.icon]}
        </Box>
      </Box>

      <Box sx={{ p: "var(--products-card-p)" }}>
        <Typography
          variant="h3"
          className="card-title"
          sx={{
            fontSize: "var(--products-card-title-size)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            mb: 1.5,
            transition: "color var(--duration-fast)",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
          }}
        >
          {item.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ProductsSection() {
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
        <SectionBadge>{products.badge}</SectionBadge>

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
          {products.heading}
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-size-body-lg)",
            color: "var(--color-text-muted)",
            maxWidth: "var(--products-subtitle-max-width)",
            mx: "auto",
          }}
        >
          {products.subtitle}
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Carousel>
          {products.items.map((item, i) => (
            <ProductCard key={item.title} item={item} index={i} />
          ))}
        </Carousel>
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <AppButton href={products.cta.href} icon={<ArrowForwardIcon />}>
          {products.cta.label}
        </AppButton>
      </Box>
    </SectionShell>
  );
}
