import { Experience, BlogPost, FAQ } from "../types";

export interface Course {
  slug: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  curriculum: string[];
}

export const experiences: Experience[] = [
  {
    slug: "stay-rooms-netrani",
    title: "Rooms Available",
    shortDescription:
      "Comfortable rooms to relax before and after your adventure.",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Resort.webp",
  },
  {
    slug: "cab-services-netrani",
    title: "Cab Services Available",
    shortDescription:
      "Comfortable cab transfers to ensure a smooth and stress-free journey.",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Cabs.webp",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "beginners-guide-netrani",
    title: "Beginner’s Guide to Scuba Diving at Netrani Island",
    excerpt:
      "Everything you need to know before taking your first plunge into the Arabian Sea.",
    date: "March 15, 2024",
    category: "Guides",
    coverImage: "https://picsum.photos/id/119/800/600",
  },
  {
    slug: "marine-life-netrani",
    title: "5 Marine Creatures You Will See at Netrani",
    excerpt:
      "From Bannerfish to Moray Eels, discover the biodiversity of Karnataka’s coral reef.",
    date: "February 20, 2024",
    category: "Marine Life",
    coverImage: "https://picsum.photos/id/162/800/600",
  },
];

export const diveProcess = [
  {
    title: "Briefing",
    description: "Safety checks, hand signals, and site map overview.",
    icon: "📋",
  },
  {
    title: "Gear Up",
    description: "Fitting masks, fins, and wetsuits at the dive shop.",
    icon: "🤿",
  },
  {
    title: "Boat Ride",
    description: "90 min scenic ride from Murudeshwar to Netrani.",
    icon: "🚤",
  },
  {
    title: "The Dive",
    description: "Descend into the blue with your instructor.",
    icon: "🐠",
  },
  {
    title: "Snorkelling",
    description: "Explore marine life with mask and snorkel.",

    icon: "🏊‍♂️",
  },
];

export const equipment = [
  {
    name: "Go Pro 13 Camera",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/GoPro.webp",
    desc: "Balanced airflow for smooth breathing underwater",
  },
  {
    name: "BCD Jacket",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Jacket.webp",
    desc: "Integrated weights and secure buoyancy control",
  },
  {
    name: "Tank & Cylinder",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/tank.webp",
    desc: "High-pressure aluminum cylinder for extended air supply",
  },
  {
    name: "Dive Computer",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/dive_computer.webp",
    desc: "Real-time depth, time & safety tracking",
  },
  {
    name: "Wetsuit",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/suit.webp",
    desc: "3mm neoprene thermal protection",
  },
  {
    name: "Fins",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/fins.webp",
    desc: "Powerful propulsion with minimal effort",
  },
  {
    name: "Dive Mask",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/diving%20mask.webp",
    desc: "Anti-fog tempered glass & wide vision",
  },
  {
    name: "Snorkel Tube",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/mask-snorkel-diving-beach.webp",
    desc: "Dry-top valve for comfortable surface breathing",
  },
  {
    name: "Weight Belt",
    image:
      "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/belt.webp",
    desc: "Lead weights for buoyancy fine-tuning",
  },
];
