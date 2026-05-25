import { Box } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";


const Logo =() =>{
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        textDecoration: "none",
      }}
    >
      <Box sx={{ position: "relative", width: "200px", height: "50px", flexShrink: 0 }}>
        <Image
          src="/images/logo-avante.avif"
          alt="Avante Logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left center" }}
          priority
        />
      </Box>
    </Box>
  );
}

export default Logo;