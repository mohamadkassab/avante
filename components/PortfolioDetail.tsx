import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { PortfolioProject } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";
import SectionBadge from "@/components/SectionBadge";
import SectionHeading from "@/components/SectionHeading";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type ImageRef = { src: string; alt: string };

/** One masonry cell — image cropped to a fixed aspect ratio. */
function GalleryImage({ image, aspect }: { image: ImageRef; aspect: string }) {
  return (
    <Box
      sx={{
        aspectRatio: aspect,
        borderRadius: "var(--portfolio-detail-gallery-radius)",
        overflow: "hidden",
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

/** Images per masonry block — GalleryBlock's four slots. */
const BLOCK_SIZE = 4;

const galleryColumnSx = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--portfolio-detail-gallery-gap)",
} as const;

/**
 * One block of the fixed two-column masonry, for up to BLOCK_SIZE images.
 * Slots without an image are left out, so a short last block has no empty boxes.
 */
function GalleryBlock({ images }: { images: ImageRef[] }) {
  const [a, b, c, d] = images;
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: "var(--portfolio-detail-gallery-gap)",
        alignItems: "start",
      }}
    >
      {/* Left column: rectangle on top, tall vertical below */}
      <Box sx={galleryColumnSx}>
        {a && <GalleryImage image={a} aspect="var(--portfolio-gallery-aspect-rect)" />}
        {c && <GalleryImage image={c} aspect="var(--portfolio-gallery-aspect-xl)" />}
      </Box>
      {/* Right column: two verticals stacked */}
      <Box sx={galleryColumnSx}>
        {b && <GalleryImage image={b} aspect="var(--portfolio-gallery-aspect-vertical)" />}
        {d && <GalleryImage image={d} aspect="var(--portfolio-gallery-aspect-vertical)" />}
      </Box>
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
  const gallery = project.gallery;

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

        {/* §4 — the four-image masonry block, repeated for every next four images */}
        <Box
          sx={{
            mt: "var(--portfolio-detail-gallery-mt)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--portfolio-detail-gallery-gap)",
          }}
        >
          {Array.from({ length: Math.ceil(gallery.length / BLOCK_SIZE) }, (_, i) => (
            <GalleryBlock key={i} images={gallery.slice(i * BLOCK_SIZE, (i + 1) * BLOCK_SIZE)} />
          ))}
        </Box>
      </SectionShell>
    </>
  );
}
