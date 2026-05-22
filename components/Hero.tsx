import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppButton from "@/components/AppButton";
import { home } from "@/content/home";

const { hero } = home;

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          component="img"
          src={hero.image.src}
          alt={hero.image.alt}
          sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "var(--hero-overlay)",
          }}
        />
      </Box>

      {/* Content */}
      <div className="w-full flex sm:p-[50px]">


      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          // maxWidth: "var(--hero-content-max-width)",
          px: "var(--hero-content-px)",
          textAlign: "left",
          animation: "hero-fade-in 0.8s ease-out forwards",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "var(--font-size-hero-xs)",
              sm: "var(--font-size-hero-sm)",
              lg: "var(--font-size-hero-lg)",
            },
            fontWeight: "var(--font-weight-bold)",
            color: "white",
            mb: "var(--hero-heading-mb)",
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {hero.heading}
          <br />
          <Box
            component="span"
            sx={{
              background: "var(--gradient-brand)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {hero.headingGradient}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "var(--font-size-subtitle-xs)",
              sm: "var(--font-size-subtitle-md)",
            },
            color: "var(--color-hero-subtitle)",
            mb: "var(--hero-subtitle-mb)",
            maxWidth: "var(--hero-subtitle-max-width)",
            textAlign: "left",
          }}
        >
          {hero.subtitle}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "var(--hero-btn-gap)",
            justifyContent: "start",
          }}
        >
          <AppButton
            variant="primary"
            size="md"
            href={hero.cta.primary.href}
            icon={<ArrowForwardIcon />}
          >
            {hero.cta.primary.label}
          </AppButton>

          <AppButton
            variant="glass"
            size="md"
            href={hero.cta.secondary.href}
          >
            {hero.cta.secondary.label}
          </AppButton>
        </Box>
      </Box>
      </div>
      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: "var(--hero-scroll-bottom)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <Box sx={{ animation: "hero-scroll-bounce 2s ease-in-out infinite" }}>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: "var(--hero-scroll-icon-size)",
              color: "var(--color-scroll-indicator)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
