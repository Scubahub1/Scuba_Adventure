"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt?: string;
  tag?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  dotColor?: string;
  variant?: "cyan" | "blue" | "emerald";
}

export default function ImageCarousel({
  images,
  dotColor = "white",
  variant = "cyan",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  const variantStyles = {
    cyan: {
      tagBorder: "border-cyan-500/30",
      tagText: "text-cyan-400",
      dotActive: "bg-cyan-400 border-cyan-400/60",
      dotInactive: "bg-cyan-400/30 border-cyan-400/30",
      hoverBorder: "group-hover:border-cyan-500/50",
    },
    blue: {
      tagBorder: "border-blue-500/30",
      tagText: "text-blue-400",
      dotActive: "bg-blue-400 border-blue-400/60",
      dotInactive: "bg-blue-400/30 border-blue-400/30",
      hoverBorder: "group-hover:border-blue-500/50",
    },
    emerald: {
      tagBorder: "border-emerald-500/30",
      tagText: "text-emerald-400",
      dotActive: "bg-emerald-400 border-emerald-400/60",
      dotInactive: "bg-emerald-400/30 border-emerald-400/30",
      hoverBorder: "group-hover:border-emerald-500/50",
    },
  };

  const styles = variantStyles[variant] || variantStyles.cyan;

  return (
    <div
      className={`relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 transform group-hover:scale-105 transition-all duration-300 ${styles.hoverBorder}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>

      {images.map((img, index) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt || ""}
          fill
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images[current]?.tag && (
        <div className="absolute bottom-6 left-6 z-20">
          <div
            className={`bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border ${styles.tagBorder}`}
          >
            <p className={`${styles.tagText} text-sm font-semibold`}>
              {images[current].tag}
            </p>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 inset-x-0 z-30 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
              index === current
                ? `${styles.dotActive} scale-125`
                : `${styles.dotInactive} hover:scale-110`
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
