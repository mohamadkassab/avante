"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useInView } from "@/hooks/useInView";
import { about } from "@/content/about";
import SectionShell from "@/components/SectionShell";

const { ourCommitment } = about;

function Column({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  const { ref, visible } = useInView();
  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: `opacity var(--duration-scroll) ease-out ${index * 0.15}s, transform var(--duration-scroll) ease-out ${index * 0.15}s`,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "var(--font-size-section-heading-xs)", sm: "var(--font-size-section-heading-sm)" },
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-section-bg-white)",
          mb: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function OurCommitmentSection() {
  return (
    <SectionShell variant="dark">
      <Box
        sx={{
          maxWidth: "var(--container-max-width)",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          gap: { xs: 4, md: "var(--commitment-col-gap)" },
          alignItems: "start",
        }}
      >
        <Box sx={{ py: { md: "var(--commitment-col-py)" } }}>
          <Column title={ourCommitment.left.title} index={0}>
            <Typography
              sx={{
                fontSize: "var(--font-size-body-lg)",
                color: "var(--color-text-muted)",
                lineHeight: "var(--line-height-relaxed)",
              }}
            >
              {ourCommitment.left.description}
            </Typography>
          </Column>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "1px",
            alignSelf: "stretch",
            bgcolor: "var(--commitment-divider-color)",
            mx: "var(--commitment-col-gap)",
          }}
        />

        <Box sx={{ py: { md: "var(--commitment-col-py)" } }}>
          <Column title={ourCommitment.right.title} index={1}>
            {ourCommitment.right.descriptions.map((para, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: "var(--font-size-body-lg)",
                  color: "var(--color-text-muted)",
                  lineHeight: "var(--line-height-relaxed)",
                  textAlign: "center",
                  mb: i < ourCommitment.right.descriptions.length - 1 ? 2 : 0,
                }}
              >
                {para}
              </Typography>
            ))}
          </Column>
        </Box>

      </Box>
    </SectionShell>
  );
}
