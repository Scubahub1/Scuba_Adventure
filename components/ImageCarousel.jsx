import React, { useState, useEffect } from "react";

export default function ImageCarousel({ images, dotColor = "white" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 transition-all duration-300">
      {images.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt || ""}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Tag bottom-left */}
      {images[current]?.tag && (
        <div className="absolute bottom-6 left-6 z-20">
          <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-400 text-sm font-semibold">
              {images[current].tag}
            </p>
          </div>
        </div>
      )}

      {/* Dots bottom center */}
      <div className="absolute bottom-4 inset-x-0 z-30 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full border border-${dotColor}/60 transition-all duration-200 ${
              index === current
                ? `bg-${dotColor} scale-125`
                : `bg-${dotColor}/30 hover:scale-110`
            }`}
          />
        ))}
      </div>
    </div>
  );
}
