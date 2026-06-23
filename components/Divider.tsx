import Box from "@mui/material/Box";

type Orientation = "horizontal" | "vertical";

interface DividerProps {
  orientation?: Orientation;
}

export default function Divider({ orientation = "horizontal" }: DividerProps) {
  const isVertical = orientation === "vertical";
  return (
    <Box
      sx={{
        bgcolor: "var(--divider-color)",
        ...(isVertical
          ? { width: "var(--divider-thickness)", alignSelf: "stretch" }
          : { height: "var(--divider-thickness)", width: "100%" }),
      }}
    />
  );
}
