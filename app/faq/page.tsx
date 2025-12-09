import React from "react";
import SectionTitle from "../../components/ui/SectionTitle";
import FAQAccordion from "../../components/FAQAccordion";
import { supabase } from "@/lib/supabase"; // Your Supabase client

// Define the FAQ interface based on your Supabase table structure
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const metadata = {
  title: "FAQ | Scuba Boss Adventures",
  description: "Frequently asked questions about diving at Netrani Island.",
};

// Make the component async for server-side fetching
export default async function FAQPage() {
  // Fetch FAQs from Supabase
  const { data: faqs, error } = await supabase
    .from("faqs") // Your Supabase table name
    .select("id, question, answer"); // All needed fields

  if (error) {
    console.error("Error fetching FAQs:", error);
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Oops! Loading FAQs Failed
          </h1>
          <p className="text-slate-400 mb-6">Please try refreshing the page.</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  // If no FAQs, show empty state
  if (!faqs || faqs.length === 0) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            No FAQs Available Yet
          </h1>
          <p className="text-slate-400 mb-6">
            We're preparing answers to your questions. Check back soon!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Optional: Animated Background Elements (matching other pages) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about your upcoming dive trip."
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={faqs as FAQ[]} />
        </div>
      </div>
    </div>
  );
}
