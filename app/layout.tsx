import React from "react";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import ContactWidget from "../components/ui/ContactWidget";
import SchemaMarkup from "../components/SEO/SchemaMarkup";
import CanonicalUrl from "../components/SEO/CanonicalUrl";
import "./globals.css";

/* Fonts */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/* ✅ METADATA (SEO + ICONS) */
export const metadata: Metadata = {
  title: "Scuba Boss Adventures",
  description:
    "Experience world-class scuba diving at Netrani Island with Scuba Boss Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",
  metadataBase: new URL("https://scubaboss.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/23.svg",
    shortcut:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/23.svg",
    apple:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/23.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {/* SEO helpers */}
        <CanonicalUrl />
        <SchemaMarkup type="LocalBusiness" />

        {/* Layout */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* UI helpers */}
        <ScrollToTop />
        <ContactWidget />
      </body>
    </html>
  );
}
