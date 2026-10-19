import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { GalleryShape, PortfolioProject } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";
import SectionBadge from "@/components/SectionBadge";
import SectionHeading from "@/components/SectionHeading";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type GalleryPhoto = { src: string; alt: string; shape: string };

const SHAPE_ASPECT: Record<GalleryShape, string> = {
  landscape: "var(--portfolio-gallery-aspect-rect)",
  square: "var(--portfolio-gallery-aspect-square)",
  portrait: "var(--portfolio-gallery-aspect-vertical)",
  tall: "var(--portfolio-gallery-aspect-xl)",
};

// Box height per unit of column width, for balancing the two columns. Must match SHAPE_ASPECT.
const SHAPE_HEIGHT: Record<GalleryShape, number> = {
  landscape: 3 / 4,
  square: 1,
  portrait: 4 / 3,
  tall: 3 / 2,
};

/**
 * Splits the photos, in order, into two columns: each goes to whichever column is
 * shorter so far. Returns each photo with its original index, which sets its
 * `order` on phones where the columns merge back into one list.
 */
function splitIntoColumns(photos: GalleryPhoto[]) {
  const columns: { photo: GalleryPhoto; index: number }[][] = [[], []];
  const heights = [0, 0];
  photos.forEach((photo, index) => {
    const col = heights[1] < heights[0] ? 1 : 0;
    columns[col].push({ photo, index });
    heights[col] += SHAPE_HEIGHT[photo.shape as GalleryShape];
  });
  return columns;
}

/** One masonry cell — the photo in the box closest to its own shape. */
function GalleryImage({ image, order }: { image: GalleryPhoto; order: number }) {
  return (
    <Box
      sx={{
        aspectRatio: SHAPE_ASPECT[image.shape as GalleryShape],
        borderRadius: "var(--portfolio-detail-gallery-radius)",
        overflow: "hidden",
        order: { xs: order, sm: 0 },
      }}
    >
      <Box
        component="img"
        src={image.src}
        alt={image.alt}
        loading="lazy"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
}

/**
 * Two-column masonry. On phones the column wrappers become `display: contents`, so
 * every photo is a direct child of one flex column and `order` restores 1, 2, 3…
 * (without that, phones would show the whole left column before the right).
 */
function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        gap: "var(--portfolio-detail-gallery-gap)",
      }}
    >
      {splitIntoColumns(photos).map((column, i) => (
        <Box
          key={i}
          sx={{
            display: { xs: "contents", sm: "flex" },
            flexDirection: "column",
            flex: 1,
            minWidth: 0,
            gap: "var(--portfolio-detail-gallery-gap)",
          }}
        >
          {column.map(({ photo, index }) => (
            <GalleryImage key={photo.src} image={photo} order={index} />
          ))}
        </Box>
      ))}
    </Box>
  );
}

/** A labelled Overview row. Multiple values stack, one per line. */
function MetaRow({
  label,
  values,
  isLocation = false,
}: {
  label: string;
  values: string[];
  isLocation?: boolean;
}) {
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontWeight: "var(--font-weight-bold)",
          color: "var(--portfolio-overview-label-color)",
        }}
      >
        {label}:
      </Typography>{" "}
      <Box sx={{ mt: 0.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {values.map((value) => (
          <div className="flex items-start gap-1" key={value}>
            {isLocation && (
              <LocationOnIcon
                sx={{
                  fontSize: "var(--portfolio-location-icon-size)",
                  color: "var(--color-primary)",
                  mt: "var(--portfolio-location-icon-offset)",
                }}
              />
            )}
            <Typography
              key={value}
              sx={{ color: "var(--portfolio-overview-value-color)" }}
            >
              {value}
            </Typography>
          </div>
        ))}
      </Box>
    </Box>
  );
}

/**
 * Full-page portfolio project view: a full-width hero image (`heroImage`, not the
 * card's `image`), a two-column profile section (left: badge + title + description;
 * right: a gray "Overview" box with location + scope) separated by a vertical
 * divider, and the masonry gallery. Pure Server Component — no interactivity.
 */
export default function PortfolioDetail({
  project,
}: {
  project: PortfolioProject;
}) {
  return (
    <>
      {/* §1 — full-width cover */}
      <Box
        sx={{
          width: "100%",
          height: "var(--portfolio-detail-cover-height)",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            // Which edge survives the crop; a hero with its logo near the top sets "top".
            objectPosition: project.heroImage.position ?? "center",
            display: "block",
          }}
        />
      </Box>

      <SectionShell variant="white">
        {/* §2 + §3 — profile columns split by a vertical divider */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr var(--portfolio-detail-divider-width) 1fr",
            },
            gap: { xs: 4, md: "var(--portfolio-detail-col-gap)" },
            alignItems: "start",
          }}
        >
          {/* Left — project profile */}
          <Box>
            {/* A link, not history.back(): a visitor who arrived from a shared link
                still lands on the portfolio. PortfolioGallery restores the filter and
                scroll position it saved when the card was clicked.
                Styled from the wrapper: this is a Server Component, and passing
                `component={Link}` to MUI's client Box fails with a 500. */}
            <Box
              sx={{
                mb: "var(--portfolio-back-mb)",
                "& a": {
                  display: "flex",
                  width: "fit-content",
                  alignItems: "center",
                  gap: "var(--portfolio-back-gap)",
                  fontSize: "var(--portfolio-back-font-size)",
                  color: "var(--portfolio-back-color)",
                  textDecoration: "none",
                  transition: "color var(--duration-fast) ease",
                },
                "& svg": {
                  fontSize: "var(--portfolio-back-icon-size)",
                  transition: "transform var(--duration-fast) ease",
                },
                "& a:hover": { color: "var(--portfolio-back-hover-color)" },
                "& a:hover svg": { transform: "translateX(var(--portfolio-back-hover-shift))" },
              }}
            >
              <Link href="/portfolio">
                <ArrowBackIcon />
                Back to Portfolio
              </Link>
            </Box>
            <SectionBadge>PROJECT PROFILE</SectionBadge>
            <SectionHeading>{project.title}</SectionHeading>
            <Typography
              sx={{
                fontSize: "var(--font-size-body-lg)",
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {project.description}
            </Typography>
          </Box>

          {/* §3 — vertical divider (hidden on stacked mobile layout) */}
          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "block" },
              width: "var(--portfolio-detail-divider-width)",
              bgcolor: "var(--portfolio-detail-divider-color)",
              alignSelf: "stretch",
            }}
          />

          {/* Right — Overview box */}
          <Box
            sx={{
              bgcolor: "var(--portfolio-overview-bg)",
              p: "var(--portfolio-overview-p)",
              borderRadius: "var(--portfolio-overview-radius)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "var(--portfolio-overview-heading-size)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-text-primary)",
                mb: "var(--portfolio-overview-heading-mb)",
              }}
            >
              Overview
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--portfolio-overview-row-gap)",
              }}
            >
              <MetaRow
                label={project.location?.length > 1 ? "Locations" : "Location"}
                values={project.location}
                isLocation={true}
              />
              <MetaRow label="Scope" values={[project.scope]} />
            </Box>
          </Box>
        </Box>

        {/* §4 — two-column masonry, each box shaped like its photo */}
        <Box sx={{ mt: "var(--portfolio-detail-gallery-mt)" }}>
          <Gallery photos={project.gallery} />
        </Box>
      </SectionShell>
    </>
  );
}
