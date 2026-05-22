"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/shared";
import AppButton from "@/components/AppButton";
import Image from 'next/image';

function Logo() {
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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const linkSx = (href: string) => ({
    fontSize: "var(--font-size-nav)",
    fontWeight: "var(--font-weight-medium)",
    letterSpacing: "var(--letter-spacing-wide)",
    textDecoration: "none",
    color:
      pathname === href ? "var(--color-primary)" : "var(--color-text-muted)",
    transition: "color var(--duration-fast)",
    "&:hover": { color: "var(--color-text-primary)" },
  });

  const drawer = (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          height: "var(--navbar-height)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <Logo />
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close drawer"
          sx={{ color: "var(--color-text-primary)" }}
        >
          <CloseIcon
            sx={{ width: "var(--icon-size-lg)", height: "var(--icon-size-lg)" }}
          />
        </IconButton>
      </Box>

      <List>
        {nav.items.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{ px: 3, py: 1.5, ...linkSx(item.href) }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem sx={{ px: 3, pt: 2 }}>
          <AppButton
            href={nav.cta.href}
            size="md"
            fullWidth
            onClick={handleDrawerToggle}
          >
            {nav.cta.label}
          </AppButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          bgcolor: "var(--color-nav-bg)",
          backdropFilter: "var(--navbar-blur)",
          borderBottom: "1px solid var(--color-border)",
          boxShadow: "none",
          color: "var(--color-text-primary)",
        }}
      >

        <Toolbar
          sx={{
            maxWidth: "var(--container-max-width)",
            mx: "auto",
            width: "100%",
            px: { xs: 3, lg: 4 },
            minHeight: "var(--navbar-height) !important",
            justifyContent: "space-between",
          }}
        >
          <Logo />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {nav.items.map((item) => (
              <Box
                key={item.label}
                component={Link}
                href={item.href}
                sx={linkSx(item.href)}
              >
                {item.label}
              </Box>
            ))}
            {/* <AppButton href={nav.cta.href} size="sm">
              {nav.cta.label}
            </AppButton> */}
          </Box>

          <IconButton
            onClick={handleDrawerToggle}
            aria-label="open drawer"
            sx={{ display: { md: "none" }, color: "var(--color-text-primary)" }}
          >
            <MenuIcon
              sx={{
                width: "var(--icon-size-lg)",
                height: "var(--icon-size-lg)",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
