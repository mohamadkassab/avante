import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import HeaderCaption from "@/components/HeaderCaption";
import Footer from "@/components/Footer";

/**
 * Chrome layout for the main site pages: header caption, navbar and footer. The
 * standalone product-detail page lives in the (bare) group and deliberately
 * skips this, rendering with only the root html/body/providers.
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
