import type { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avante",
  description: "Avante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <div >
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
