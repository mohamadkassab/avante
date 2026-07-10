import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeaderCaption from "@/components/HeaderCaption";
import Footer from "@/components/Footer";

/**
 * Chrome layout for the main site pages: header caption, navbar and footer.
 * All site pages — including the product- and portfolio-detail pages — render
 * inside this so the header and footer stay consistent across the site.
 */
export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderCaption />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
