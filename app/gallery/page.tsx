"use client";
import React, { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const images = [
    {
      id: 1,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater1.JPG",
      caption: "Clear Underwater Visibility Around Netrani Island",
      category: "landscape",
    },
    {
      id: 2,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater2.JPG",
      caption: "Soft Light Filtering Through Shallow Ocean Waters",
      category: "landscape",
    },
    {
      id: 3,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater3.JPG",
      caption: "Gentle Ocean Currents Beneath the Surface",
      category: "landscape",
    },
    {
      id: 4,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater4.JPG",
      caption: "Wide Underwater View With Natural Light Patterns",
      category: "landscape",
    },
    {
      id: 5,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater5.JPG",
      caption: "Calm Blue Waters Before Entering Deeper Zones",
      category: "landscape",
    },
    {
      id: 6,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater6.JPG",
      caption: "Submerged Rock Formations Along the Coastline",
      category: "landscape",
    },
    {
      id: 7,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater7.JPG",
      caption: "Peaceful Underwater Scene Near the Dive Entry Point",
      category: "landscape",
    },
    {
      id: 8,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/underwater8.JPG",
      caption: "Endless Shades of Blue Beneath the Ocean Surface",
      category: "landscape",
    },

    {
      id: 9,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling3.jpeg",
      caption: "Discover Scuba Training Session",
      category: "training",
    },
    {
      id: 10,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling1.jpeg",
      caption: "Beginner Divers Learning Underwater Skills",
      category: "training",
    },
    {
      id: 11,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling2.jpeg",
      caption: "Instructor Guiding First-Time Divers",
      category: "training",
    },
    {
      id: 12,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling4.jpg",
      caption: "Pre-Dive Safety and Equipment Briefing",
      category: "training",
    },
    {
      id: 13,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling5.jpg",
      caption: "Practicing Buoyancy Control Underwater",
      category: "training",
    },
    {
      id: 14,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling6.jpeg",
      caption: "Confident Divers Preparing for Open Water",
      category: "training",
    },
    {
      id: 15,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling7.jpeg",
      caption: "Advanced Scuba Training in Open Sea",
      category: "training",
    },
    {
      id: 16,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Snorkeling8.jpg",
      caption: "Skill Development Before Deep Dives",
      category: "training",
    },

    {
      id: 17,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine1.jpg",
      caption: "Lionfish resting near reef formations",
      category: "marine",
    },
    {
      id: 18,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine5.JPG",
      caption: "Colorful coral reef with dense marine growth",
      category: "marine",
    },
    {
      id: 19,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine4.jpg",
      caption: "Batfish swimming calmly above the reef",
      category: "marine",
    },
    {
      id: 20,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine6.jpg",
      caption: "Fish gliding through clear tropical waters",
      category: "marine",
    },
    {
      id: 21,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine2.jpg",
      caption: "Coral reef ecosystem rich with marine species",
      category: "marine",
    },
    {
      id: 22,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine7.jpg",
      caption: "School of reef fish moving together in open water",
      category: "marine",
    },
    {
      id: 23,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine3.jpg",
      caption: "Sunlight illuminating corals beneath the surface",
      category: "marine",
    },
    {
      id: 24,
      src: "https://dzdqokmlsirlvzcyzxgj.supabase.co/storage/v1/object/public/Scubaimages/Marine8.jpg",
      caption: "Peaceful underwater scene showcasing coral life",
      category: "marine",
    },
  ];

  const filteredImages = (() => {
    if (filter === "all") {
      const marine = images.filter((img) => img.category === "marine");
      const landscape = images.filter((img) => img.category === "landscape");
      const training = images.filter((img) => img.category === "training");

      const mixed = [];
      let indices = { marine: 0, landscape: 0, training: 0 };

      const cycleOrder = [
        "marine",
        "landscape",
        "training",
        "landscape",
        "marine",
        "training",
        "training",
        "landscape",
        "marine",
        "marine",
        "training",
        "landscape",
      ];

      let cycleIndex = 0;

      while (
        indices.marine < marine.length ||
        indices.landscape < landscape.length ||
        indices.training < training.length
      ) {
        const currentCategory = cycleOrder[cycleIndex % cycleOrder.length];
        cycleIndex++;

        const idx = indices[currentCategory];
        if (
          idx <
          (currentCategory === "marine"
            ? marine.length
            : currentCategory === "landscape"
            ? landscape.length
            : training.length)
        ) {
          const image =
            currentCategory === "marine"
              ? marine[idx]
              : currentCategory === "landscape"
              ? landscape[idx]
              : training[idx];
          mixed.push(image);
          indices[currentCategory]++;
        }
      }

      return mixed;
    }

    return images.filter((img) => img.category === filter);
  })();

  const categories = [
    { id: "all", label: "All Photos", icon: "🌊" },
    { id: "marine", label: "Marine Life", icon: "🐠" },
    { id: "landscape", label: "Underwater Scenes", icon: "🏝️" },
    { id: "training", label: "Relax, Float & Snorkel", icon: "🛟" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Underwater Gallery
            </h1>
            <p className="text-xl text-slate-300 mt-4">
              Moments captured beneath the surface of Netrani Island
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white scale-105"
                    : "bg-slate-800/50 text-slate-300 border border-slate-700"
                }`}
              >
                <span className="mr-2 ">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 p-5">
                <p className="text-white font-semibold text-lg">
                  {img.caption}
                </p>
                <span className="text-xs text-blue-300">
                  {categories.find((c) => c.id === img.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        >
          <div
            className="max-w-5xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-14 left-0 flex items-center gap-2 text-white text-sm bg-white/30 hover:bg-white/20 backdrop-blur px-4 py-2 rounded-full transition"
            >
              ← Back to Gallery
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full max-w-7xl max-h-[75vh] mx-auto object-contain rounded-2xl"
            />

            <h3 className="text-center text-white text-2xl mt-6">
              {selectedImage.caption}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
