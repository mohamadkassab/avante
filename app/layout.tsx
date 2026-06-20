import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeaderCaption from "@/components/HeaderCaption";
import Footer from "@/components/Footer";
import Providers from "./providers";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arimo",
  display: "swap",
});

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
    <html lang="en" className={`${arimo.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <HeaderCaption />
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
