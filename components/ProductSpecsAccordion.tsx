"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Spec = { title: string; body: string | string[] };

/**
 * Single-open accordion for the product popup's spec sections. Opening one
 * section closes the others; the first section is open by default. Mount with a
 * `key` per category so the default resets when a new product opens.
 */
export default function ProductSpecsAccordion({ specs }: { specs: readonly Spec[] }) {
  const [expanded, setExpanded] = useState(0);

  return (
    <Box sx={{ mt: "var(--product-page-accordion-mt)" }}>
      {specs.map((spec, i) => {
        const open = expanded === i;
        return (
          <Accordion
            key={spec.title}
            expanded={open}
            onChange={() => setExpanded(open ? -1 : i)}
            disableGutters
            square
            elevation={0}
            sx={{
              bgcolor: "transparent",
              borderTop: "var(--divider-thickness) solid var(--color-border)",
              "&:last-of-type": { borderBottom: "var(--divider-thickness) solid var(--color-border)" },
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={open ? <RemoveIcon /> : <AddIcon />}
              sx={{
                px: 0,
                py: "var(--product-page-accordion-header-py)",
                minHeight: "unset",
                "& .MuiAccordionSummary-content": { my: 0 },
                "& .MuiAccordionSummary-expandIconWrapper": {
                  color: "var(--color-text-primary)",
                  transform: "none",
                  "& svg": { fontSize: "var(--product-page-accordion-icon-size)" },
                },
                "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": { transform: "none" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "var(--font-size-body-md)",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-text-primary)",
                }}
              >
                {spec.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 0, pt: 0, pb: "var(--product-page-accordion-body-pb)" }}>
              {Array.isArray(spec.body) ? (
                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    m: 0,
                    p: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--product-page-accordion-body-gap)",
                  }}
                >
                  {spec.body.map((line) => (
                    <Typography
                      key={line}
                      component="li"
                      sx={{
                        position: "relative",
                        pl: 2,
                        fontSize: "var(--font-size-body-md)",
                        color: "var(--color-text-muted)",
                        "&::before": {
                          content: '"•"',
                          position: "absolute",
                          left: 0,
                          color: "var(--color-text-primary)",
                        },
                      }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography
                  sx={{
                    fontSize: "var(--font-size-body-md)",
                    color: "var(--color-text-muted)",
                    lineHeight: "var(--line-height-relaxed)",
                  }}
                >
                  {spec.body}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
