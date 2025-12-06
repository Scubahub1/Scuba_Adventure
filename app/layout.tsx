import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Inter, Montserrat } from "../lib/next-shim";
import ScrollToTop from "../components/ui/ScrollToTop";
import ContactWidget from "../components/ui/ContactWidget";
import SchemaMarkup from "../components/SEO/SchemaMarkup";
import CanonicalUrl from "../components/SEO/CanonicalUrl";
import "./globals.css";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  builder: "--font-montserrat",
});

export const metadata = {
  title: "Scuba Hub Adventures | Netrani Island Scuba Diving",
  description:
    "Experience world-class scuba diving at Netrani Island with Scuba Hub Adventures. PADI certified courses, fun dives, and underwater exploration in Karnataka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* SSR fallback canonical link */}
        <link rel="canonical" href="https://scubahub.com" />
      </head>

      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-950 text-slate-100">
        {/* Client-only components */}
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
