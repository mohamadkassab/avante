"use client";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

/**
 * Close control for the standalone product detail page (there's no navbar to
 * exit through). Goes back to where the user came from — usually the products
 * page at the exact item they clicked — and falls back to /products when the
 * page was opened directly with no history to return to.
 */
export default function ProductCloseButton() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) router.back();
    else router.push("/products");
  };

  return (
    <IconButton
      aria-label="Close"
      onClick={handleClose}
      sx={{
        flexShrink: 0,
        width: "var(--product-page-close-size)",
        height: "var(--product-page-close-size)",
        color: "var(--color-text-primary)",
        "& svg": { fontSize: "var(--product-page-close-icon-size)" },
      }}
    >
      <CloseIcon />
    </IconButton>
  );
}
