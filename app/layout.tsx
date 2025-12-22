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

export const metadata: Metadata = {
  title: "Scuba Boss Adventures",
  description:
    "Experience world-class scuba diving at Netrani Island with Scuba Boss Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",

  metadataBase: new URL("https://scubaboss.in"),

  alternates: {
    canonical: "https://scubaboss.in",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    url: "https://scubaboss.in",
    title: "Scuba Boss Adventures",
    description:
      "Experience world-class scuba diving at Netrani Island with Scuba Boss Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Scuba Boss Adventures Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Scuba Boss Adventures",
    description:
      "Experience world-class scuba diving at Netrani Island with Scuba Boss Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",
    images: ["/favicon.png"],
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
        <CanonicalUrl />
        <SchemaMarkup type="LocalBusiness" />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        <ScrollToTop />
        <ContactWidget />
      </body>
    </html>
  );
}
