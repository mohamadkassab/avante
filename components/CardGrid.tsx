import type { ReactNode } from "react";
import Box from "@mui/material/Box";

type Props = {
  children: ReactNode;
  maxColumns: number;
  gap?: string;
};

export default function CardGrid({ children, maxColumns, gap = "var(--cert-grid-gap)" }: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: `repeat(${maxColumns}, 1fr)`,
        },
        gap,
      }}
    >
      {children}
    </Box>
  );
}
