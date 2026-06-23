import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppButton from "@/components/AppButton";
import HeroVideo from "@/components/HeroVideo";
import { home } from "@/content/home";

const { hero: homeHero } = home;

interface HeroCta {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

interface HeroProps {
  heading?: string;
  headingGradient?: string | null;
  subtitle?: string;
  image?: { src: string; alt: string };
  video?: { webm?: string; mp4: string } | null;
  align?: "left" | "center";
  imagePosition?: "center" | "top";
  imageFit?: "cover" | "contain";
  imageOffsetTop?: string;
  cta?: HeroCta | null;
  showScrollIndicator?: boolean;
  height?: string;
  fillViewport?: boolean;
  inlineGradient?: boolean;
  headingWeight?: "bold" | "semibold";
  solidHeading?: boolean;
  headingSize?: "default" | "compact";
  contentShiftDown?: boolean;
  overlay?: "dark" | "none";
}

const overlayMap: Record<"dark" | "none", string> = {
  dark: "var(--hero-overlay)",
  none: "var(--hero-overlay-none)",
};

export default function Hero({
  heading,
  headingGradient,
  subtitle,
  image,
  video,
  align = "left",
  imagePosition = "center",
  imageFit = "cover",
  imageOffsetTop = "0",
  cta,
  showScrollIndicator = true,
  height = "100vh",
  fillViewport = false,
  inlineGradient = false,
  headingWeight = "bold",
  solidHeading = false,
  headingSize = "default",
  contentShiftDown = false,
  overlay = "dark",
}: HeroProps) {
  const headingWeightVar =
    headingWeight === "semibold" ? "var(--font-weight-semibold)" : "var(--font-weight-bold)";
  const headingFontSize =
    headingSize === "compact"
      ? { xs: "var(--font-size-hero-xs-compact)", md: "var(--font-size-hero-md-compact)" }
      : { xs: "var(--font-size-hero-xs)", md: "var(--font-size-hero-md)" };
  const resolvedHeading = heading ?? homeHero.heading;
  const resolvedHeadingGradient = headingGradient === undefined ? homeHero.headingGradient : headingGradient;
  const resolvedSubtitle = subtitle ?? homeHero.subtitle;
  const resolvedImage = image ?? homeHero.image;
  const resolvedVideo: { webm?: string; mp4: string } | null =
    video !== undefined ? video : (image === undefined ? homeHero.video : null);
  const resolvedCta = cta === undefined ? homeHero.cta : cta;
  const isCenter = align === "center";

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: fillViewport ? { xs: height, lg: "var(--hero-fill-height)" } : height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {resolvedVideo ? (
          <HeroVideo
            webm={resolvedVideo.webm}
            mp4={resolvedVideo.mp4}
            poster={resolvedImage.src}
          />
        ) : (
          <Box
            component="img"
            src={resolvedImage.src}
            alt={resolvedImage.alt}
            sx={
              imageFit === "contain"
                ? {
                    position: "absolute",
                    top: imageOffsetTop,
                    left: 0,
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: imagePosition,
                  }
                : {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: imagePosition,
                  }
            }
          />
        )}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: overlayMap[overlay],
          }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          px: { xs: "var(--section-px)", lg: "var(--section-px-lg)" },
          mt: contentShiftDown ? "var(--hero-content-offset-y)" : 0,
          textAlign: isCenter ? "center" : "left",
          animation: "hero-fade-in 0.8s ease-out forwards",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: headingFontSize,
            fontWeight: headingWeightVar,
            color: "var(--color-text-white)",
            mb: "var(--hero-heading-mb)",
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {resolvedHeading}
          {resolvedHeadingGradient && (
            <>
              {inlineGradient ? " " : <br />}
              <Box
                component="span"
                sx={
                  solidHeading
                    ? { color: "var(--color-text-white)" }
                    : {
                        background: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                }
              >
                {resolvedHeadingGradient}
              </Box>
            </>
          )}
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "var(--font-size-subtitle-xs)",
              sm: "var(--font-size-subtitle-md)",
            },
            color: "var(--color-hero-subtitle)",
            mb: resolvedCta ? "var(--hero-subtitle-mb)" : 0,
            maxWidth: "var(--hero-subtitle-max-width)",
            textAlign: isCenter ? "center" : "left",
            mx: isCenter ? "auto" : undefined,
          }}
        >
          {resolvedSubtitle}
        </Typography>

        {resolvedCta && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "var(--hero-btn-gap)",
              justifyContent: isCenter ? "center" : "start",
            }}
          >
            <AppButton
              variant="primary"
              size="md"
              href={resolvedCta.primary.href}
              icon={<ArrowForwardIcon />}
            >
              {resolvedCta.primary.label}
            </AppButton>

            <AppButton
              variant="glass"
              size="md"
              href={resolvedCta.secondary.href}
            >
              {resolvedCta.secondary.label}
            </AppButton>
          </Box>
        )}
      </Box>

      {showScrollIndicator && (
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
      )}
    </Box>
  );
}
