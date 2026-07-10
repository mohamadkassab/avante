import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { PortfolioProject } from "@/content/portfolio";
import SectionShell from "@/components/SectionShell";
import SectionBadge from "@/components/SectionBadge";
import SectionHeading from "@/components/SectionHeading";

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
        sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </Box>
  );
}

/** A labelled Overview row. Multiple values stack, one per line. */
function MetaRow({ label, values }: { label: string; values: string[] }) {
  return (
    <Box>
      <Typography
        component="span"
        sx={{ fontWeight: "var(--font-weight-bold)", color: "var(--portfolio-overview-label-color)" }}
      >
        {label}:
      </Typography>{" "}
      {values.length === 1 ? (
        <Typography component="span" sx={{ color: "var(--portfolio-overview-value-color)" }}>
          {values[0]}
        </Typography>
      ) : (
        <Box sx={{ mt: 0.5, display: "flex", flexDirection: "column", gap: 0.5 }}>
          {values.map((value) => (
            <Typography key={value} sx={{ color: "var(--portfolio-overview-value-color)" }}>
              {value}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
}

/**
 * Full-page portfolio project view: a full-width cover image, a two-column
 * profile section (left: badge + title + description; right: a gray "Overview"
 * box with location + scope) separated by a vertical divider, and a fixed
 * two-column masonry gallery. Pure Server Component — no interactivity.
 */
export default function PortfolioDetail({ project }: { project: PortfolioProject }) {
  const gallery = project.gallery;

  return (
    <>
      {/* §1 — full-width cover */}
      <Box sx={{ width: "100%", height: "var(--portfolio-detail-cover-height)", overflow: "hidden" }}>
        <Box
          component="img"
          src={project.image.src}
          alt={project.image.alt}
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>

      <SectionShell variant="white">
        {/* §2 + §3 — profile columns split by a vertical divider */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "2fr var(--portfolio-detail-divider-width) 1fr" },
            gap: { xs: 4, md: "var(--portfolio-detail-col-gap)" },
            alignItems: "start",
          }}
        >
          {/* Left — project profile */}
          <Box>
            <SectionBadge>PROJECT PROFILE</SectionBadge>
            <SectionHeading mb={0}>{project.title}</SectionHeading>
            <Typography
              sx={{
                mt: "var(--portfolio-detail-desc-mt)",
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--portfolio-overview-row-gap)" }}>
              <MetaRow label="Location" values={project.location} />
              <MetaRow label="Scope" values={[project.scope]} />
            </Box>
          </Box>
        </Box>

        {/* §4 — fixed two-column masonry gallery */}
        <Box
          sx={{
            mt: "var(--portfolio-detail-gallery-mt)",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "var(--portfolio-detail-gallery-gap)",
            alignItems: "start",
          }}
        >
          {/* Left column: rectangle on top, tall vertical below */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--portfolio-detail-gallery-gap)" }}>
            <GalleryImage image={gallery[0]} aspect="var(--portfolio-gallery-aspect-rect)" />
            <GalleryImage image={gallery[2]} aspect="var(--portfolio-gallery-aspect-xl)" />
          </Box>
          {/* Right column: two verticals stacked */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--portfolio-detail-gallery-gap)" }}>
            <GalleryImage image={gallery[1]} aspect="var(--portfolio-gallery-aspect-vertical)" />
            <GalleryImage image={gallery[3]} aspect="var(--portfolio-gallery-aspect-vertical)" />
          </Box>
        </Box>
      </SectionShell>
    </>
  );
}
